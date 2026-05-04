import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { Root } from "mdast"
import { CONTENT_PREFIX } from "../../config/paths"

export const InjectContentPrefix: QuartzTransformerPlugin = () => {
  return {
    name: "InjectContentPrefix",
    markdownPlugins() {
      return [
        () => (tree: Root) => {
          visit(tree, "html", (node: any) => {
            node.value = node.value.replaceAll("{{CONTENT_PREFIX}}", CONTENT_PREFIX)
          })
        },
      ]
    },
  }
}