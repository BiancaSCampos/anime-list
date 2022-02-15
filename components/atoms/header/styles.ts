import { StyleSheet } from "pr-unit";
import colors from "../../../constants/colors";
import metrics from "../../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    paddingTop: metrics.statusBar,
    paddingHorizontal: 20,
    paddingBottom: 10,

    backgroundColor: colors.contrast,

    alignItems: "center",
    flexDirection: "row",

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },

  text: {
    fontSize: metrics.text.fontSize.medium,
    color: colors.neutralLight,
    fontFamily: metrics.text.fontFamily.regular,
  },

  title: {
    fontSize: metrics.text.fontSize.medium * 1.5,
    color: colors.neutralLight,
    fontFamily: metrics.text.fontFamily.semiBold,

    paddingTop: 12,
  },

  iconBack: {
    width: 60,
    height: 60,

    marginRight: 20,
  },
});

export default styles;
