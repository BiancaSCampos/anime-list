import { Dimensions, Platform, StatusBar } from "react-native";

const metrics = {
  text: {
    fontSize: {
      medium: 45,
      large: 70,
    },

    fontFamily: {
      regular: "Poppins_400Regular",
      medium: "Poppins_500Medium",
      semiBold: "Poppins_600SemiBold",
    },
  },

  paddingContainer: 60,
  paddingVertical: 80,

  statusBar: Platform.OS === "android" ? `_${StatusBar.currentHeight}` : 0,

  screen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
};

export default metrics;
