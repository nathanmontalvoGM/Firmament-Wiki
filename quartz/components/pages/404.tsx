import { i18n } from "../../i18n"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../types"

const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>
      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
      <div class="not-found-report">
        <p class="not-found-hint">Think this page should exist? Report a broken link:</p>
        <a id="report-404-btn" class="report-issue-btn" target="_blank" rel="noopener noreferrer">
          Report this broken link
        </a>
      </div>
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
          btn.href = 'https://github.com/nathanmontalvoGM/pathfinder-and-dragons-wiki/issues/new?title=' + issueTitle + '&body=' + issueBody
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