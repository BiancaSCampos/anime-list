import pr, { StyleSheet } from "pr-unit";
import colors from "../../constants/colors";
import metrics from "../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },

  text: {
    fontSize: metrics.text.fontSize.medium * 1.5,
    color: colors.text,
    fontFamily: metrics.text.fontFamily.medium,
  },

  containerSearch: {
    paddingHorizontal: metrics.paddingContainer,
  },

  searchIcon: {
    marginTop: metrics.paddingVertical,
    width: 80,
    height: 80,
  },
});

export default styles;
