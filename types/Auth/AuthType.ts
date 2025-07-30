import { RolesType } from "../RolesType";

export interface AuthType {
  identifier?: string;
  username?: string;
  password?: string;
  repassword?: string;
  email?: string;
  gender?: GenderType;
  role?: RolesType;
}

export type AuthInputType =
  | "identifier"
  | "password"
  | "repassword"
  | "username"
  | "email";

export type GenderType = "Male" | "Female";
