import { atomWithStorage, createJSONStorage } from "jotai/utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface AuthState {
  access_token: string | null;
  isLoading: boolean;
  error: string | null;
}

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const initialState: AuthState = {
  access_token: null,
  isLoading: false,
  error: null,
};

export const authAtom = atomWithStorage<AuthState>(
  "auth",
  initialState,
  storage
);
