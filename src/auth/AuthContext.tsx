import { createContext, ReactNode, useContext, useReducer } from "react";
import { Spinner } from "../components";

interface AuthState {
  loading: boolean;
  authenticated: boolean;
}

const initialState: AuthState = {
  loading: false,
  authenticated: false,
};

type Action = { type: "Login" } | { type: "Logout" };
type Dispatch = (action: Action) => void;
type AuthContextType = { state: AuthState; dispatch: Dispatch };

const authReducer = (state: AuthState, action: Action) => {
  switch (action.type) {
    case "Login": {
      return { ...state, authenticated: true };
    }
    case "Logout":
      return { ...state, authenticated: false };
  }
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProps): JSX.Element => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  if (state.loading) return <Spinner />;

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("useAuth must be used inside a AuthProvider");

  return context;
};
