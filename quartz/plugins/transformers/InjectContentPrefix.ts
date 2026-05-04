import { QuartzTransformerPlugin } from "../types"
import { CONTENT_PREFIX } from "../../config/paths"

export const InjectContentPrefix: QuartzTransformerPlugin = () => {
  return {
    name: "InjectContentPrefix",
    textTransform(_ctx, src) {
      if (typeof src === "string") {
        return src.replaceAll("{{CONTENT_PREFIX}}", CONTENT_PREFIX)
      }
      return src
    },
  }
}