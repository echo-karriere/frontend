import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string | null;
  loading: boolean;
  authenticated: boolean;
}

const initialAuthState: AuthState = {
  token: null,
  loading: false,
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    loginSuccess(state, action: PayloadAction<string>) {
      state.token = action.payload;
      state.loading = false;
      state.authenticated = true;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;
