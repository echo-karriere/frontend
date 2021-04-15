import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { useMeQuery, User } from "../../graphql";

interface AuthState {
  me: User | null;
  loading: boolean;
  error: boolean;
}

const initialState: AuthState = {
  me: null,
  loading: true,
  error: false,
};

type Action = { type: "loading" } | { type: "error" } | { type: "data"; payload: User };
type Dispatch = (action: Action) => void;
type AuthReducer = { state: AuthState; dispatch: Dispatch };

const AuthContext = createContext<AuthReducer | undefined>(undefined);

function authReducer(state: AuthState, action: Action): AuthState {
  switch (action.type) {
    case "data": {
      return { ...state, me: action.payload, loading: false, error: false };
    }
    case "error": {
      return { ...state, me: null, loading: false, error: true };
    }
    case "loading": {
      return { ...state, me: null, loading: false, error: true };
    }
  }
}

interface AuthProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps): JSX.Element => {
  const { loading, data, error } = useMeQuery();
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    if (error) dispatch({ type: "error" });
    if (loading) dispatch({ type: "loading" });
    if (data?.me) dispatch({ type: "data", payload: data.me });
  }, [data, error, loading]);

  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useUser = (): AuthReducer => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useUser must be used within a AuthProvider");

  return context;
};
