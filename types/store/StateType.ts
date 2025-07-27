import { AppSliceType } from "./AppSliceType";
import { UserSliceType } from "./UserSliceType";

export interface StateType {
  UserReducer: UserSliceType;
  AppReducer: AppSliceType;
}
