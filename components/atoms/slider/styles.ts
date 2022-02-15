import pr from "pr-unit";
import { StyleSheet } from "pr-unit";
import colors from "../../../constants/colors";
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  containerSlider: {
    width: "100%",
  },

  containerCard: {
    width: metrics.screen.width / pr,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: metrics.paddingContainer,
  },

  containerImage: {
    height: "83%",
    width: metrics.screen.width / pr - metrics.paddingContainer * 2,
  },

  image: {
    width: metrics.screen.width / pr - metrics.paddingContainer * 2,
    height: "100%",
    borderRadius: 10 / pr,
  },

  button: {
    backgroundColor: colors.contrast,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 60 / pr,

    shadowOffset: {
      width: 0,
      height: 5,
    },

    maxWidth: "90%",
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: 30,
  },

  textButton: {
    fontSize: metrics.text.fontSize.medium,
    color: colors.text,
    fontFamily: metrics.text.fontFamily.medium,
  },
});

export default styles;
