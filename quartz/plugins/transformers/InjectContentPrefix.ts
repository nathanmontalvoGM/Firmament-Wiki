import { QuartzTransformerPlugin } from "../types"
import { CONTENT_PREFIX } from "../../config/paths"

export const InjectContentPrefix: QuartzTransformerPlugin = () => {
  return {
    name: "InjectContentPrefix",
    markdownPlugins() {
      return [
        () => (tree: any, file: any) => {
          if (typeof file.value === "string") {
            file.value = file.value.replaceAll("{{CONTENT_PREFIX}}", CONTENT_PREFIX)
          }
        },
      ]
    },
  }
}