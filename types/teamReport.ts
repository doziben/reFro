import { ImageSourcePropType } from "react-native";

export interface teamReport {
  id: string;
  date: Date;
  value: string;
  staffName: string;
  avatarUrl: ImageSourcePropType;
}
