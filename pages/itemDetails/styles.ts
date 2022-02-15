import pr, { StyleSheet } from "pr-unit";
import metrics from "../../constants/metrics";

const styles = StyleSheet.create({
  containerPage: {
    flex: 1,
  },

  container: {
    backgroundColor: "#0004",
    width: "100%",
    height: "100%",

    padding: metrics.paddingContainer,
    alignItems: "center",
  },

  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageBanner: {
    width: 550,
    height: 850,
    borderRadius: 10 / pr,
  },

  text: {
    fontSize: metrics.text.fontSize.medium,
    color: "white",
    fontFamily: metrics.text.fontFamily.regular,
    opacity: 0.7,
    textAlign: "justify",
  },

  title: {
    fontSize: metrics.text.fontSize.large,
    color: "white",
    fontFamily: metrics.text.fontFamily.semiBold,
    paddingTop: metrics.paddingVertical,
    textAlign: "center",
  },

  containerVideo: {
    marginTop: 90,
  },
});

export default styles;
