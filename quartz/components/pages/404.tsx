import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = `https://nathanmontalvogm.github.io/Firmament-Wiki/${url.pathname.split("/").slice(0, -1).join("/")}/`

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      <script dangerouslySetInnerHTML={{__html: `
        const btn = document.getElementById('report-404-btn')
        if (btn) {
          const brokenUrl = window.location.href
          const issueTitle = encodeURIComponent('[Broken Link] ' + brokenUrl)
          const issueBody = encodeURIComponent(
            '**Broken URL:** ' + brokenUrl + '\\n\\n' +
            '**How I got here:**\\n\\n' +
            '**Expected content:**\\n\\n'
          )
          btn.href = 'https://nathanmontalvogm.github.io/Firmament-Wiki/issues/new?title=' + issueTitle + '&body=' + issueBody
        }
      `}} />
    </article>
  )
}

NotFound.css = `
.not-found-report {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--lightgray);
}

.not-found-hint {
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}
`

export default (() => NotFound) satisfies QuartzComponentConstructor