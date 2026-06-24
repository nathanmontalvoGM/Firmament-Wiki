import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    Component.Search(),
  ],
  afterBody: [Component.ReportIssue()],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/nathanmontalvoGM/pathfinder-and-dragons-wiki",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}
// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer({
      filterFn: (node) => {
    const hiddenFolders = ["Templates", "Archive", "Private"];
    return !hiddenFolders.includes(node.name);
  },
}),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Explorer({
      filterFn: (node) => {
    const hiddenFolders = ["Templates", "Archive", "Private","00 Explaining the System", "00 System Core", "OLD", "old", "UNFINISHED", "TODO", "00 Unfinished", 
      "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10", "TTRPG Design", "Rejected Ideas", "PAD TODO" ];
    return !hiddenFolders.includes(node.name);
  },
}),

  ],
  right: [],
}
