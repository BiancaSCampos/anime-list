import { StyleSheet } from "pr-unit";
import colors from "../../constants/colors";
import metrics from "../../constants/metrics";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.midTone,
    alignItems: "center",
    paddingHorizontal: metrics.paddingContainer,
  },
});

export default styles;
