import pr, { StyleSheet } from "pr-unit";
import colors from "../../../constants/colors";
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 5,
    borderColor: colors.contrast,
    marginTop: metrics.paddingVertical,
    marginBottom: 40,
  },

  input: {
    fontSize: metrics.text.fontSize.medium,
    fontFamily: metrics.text.fontFamily.regular,

    color: colors.text,

    width: "90%",
  },
});

export default styles;
