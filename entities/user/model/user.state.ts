import { atom } from "jotai";
import { User } from "./user.model";

export interface UserState {
  profile: User | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  profile: null,
  isLoading: false,
  error: null,
};

export const ProfileAtom = atom<UserState>(initialState);
