import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { CONTENT_PREFIX, CONTENT_FOLDER } from "./quartz/config/paths"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Firmament WIKI",
    ignorePatterns: [
      `$Firmament/Templates/**`,
      `$Firmament/Rejected Ideas/**`,
      `$Firmament/PAD TODO/**`,
      `$Firmament/TTRPG Design/**`,
      `Firmament/**/*private*`,
      `Firmament/**/*draft*`,
      `Firmament/**/*wip*`,
      `Firmament/**/*TODO*`,
      "Templates", "Archive", "Private", "00 Explaining the System", "00 System Core",
      "OLD", "old", "UNFINISHED", "TODO", "00 Unfinished",
      "v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10",
      "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9", "V10",
      "TTRPG Design", "Rejected Ideas", "PAD TODO"
    ],
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "nathanmontalvogm.github.io/Firmament-Wiki",
    defaultDateType: "modified",
    theme: {
      cdnCaching: true,
      fontOrigin: "googleFonts",
      typography: {
        header: "Cinzel",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f5f0e8",
          lightgray: "#d4c5a0",
          gray: "#888888",
          darkgray: "#faf5ec",
          dark: "#2c1a0e",
          secondary: "#1a3d2b",
          tertiary: "#2d6b4a",
          highlight: "rgba(201, 168, 76, 0.15)",
          textHighlight: "#c9a84c44",
        },
        darkMode: {
          light: "#f5f0e8",
          lightgray: "#d4c5a0",
          gray: "#888888",
          darkgray: "#faf5ec",
          dark: "#2c1a0e",
          secondary: "#1a3d2b",
          tertiary: "#2d6b4a",
          highlight: "rgba(201, 168, 76, 0.15)",
          textHighlight: "#c9a84c44",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.InjectContentPrefix(),
      Plugin.DataviewSpellTable({
        contentFolder: CONTENT_FOLDER,
        slugPrefix: CONTENT_PREFIX,
      }),
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        includeEmptyFiles: false,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config