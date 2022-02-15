import pr, { StyleSheet } from "pr-unit";
import colors from "../../../constants/colors";
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    marginHorizontal: 20,
    alignItems: "center",
  },

  image: {
    width: 450,
    height: 600,
    borderRadius: 10 / pr,
    resizeMode: "cover",
  },

  title: {
    fontSize: metrics.text.fontSize.medium * 0.9,
    fontFamily: metrics.text.fontFamily.medium,
    color: colors.neutralLight,
    maxWidth: 400,
  },
});

export default styles;
