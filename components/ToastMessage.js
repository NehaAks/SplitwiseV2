import { Platform } from "react-native";
import { dynamicSize } from "../utils/dimension.style";

export const showToast = (toast, type, message) => {
  toast.show(message,{
    type: type,
    placement: "bottom",
    duration: 2000,
    offset: Platform.OS === 'android' ? dynamicSize(60) : dynamicSize(170),
    animationType: "slide-in",
  });
  
};