import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Pathfinder & Dragons WIKI",
    ignorePatterns: [
  "Templates/**",
  "Private/**", 
  "Archive/**",
  "Pathfinder and Dragons Remote/Templates/**",
  "Pathfinder and Dragons Remote/Rejected Ideas/**",
  "Pathfinder and Dragons Remote/PAD TODO/**",
  "Pathfinder and Dragons Remote/TTRPG Design/**",
],
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
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
          dark: "#1a1a1a",
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
          dark: "#1a1a1a",
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
      Plugin.DataviewSpellTable({
  contentFolder: "content",
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
