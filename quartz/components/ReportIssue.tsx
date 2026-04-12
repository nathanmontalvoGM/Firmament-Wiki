import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const ReportIssue: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title ?? fileData.slug ?? "Unknown Page"
  const pageUrl = `https://nathanmontalvogm.github.io/pathfinder-and-dragons-wiki/${fileData.slug}`

  const issueTitle = encodeURIComponent(`[Bug Report] ${title}`)
  const issueBody = encodeURIComponent(
    `**Page:** [${title}](${pageUrl})\n\n**Issue Type:**\n- [ ] Broken link\n- [ ] Typo\n- [ ] Missing content\n- [ ] Incorrect information\n- [ ] Other\n\n**Description:**\n\n`
  )

  const issueUrl = `https://github.com/nathanmontalvoGM/pathfinder-and-dragons-wiki/issues/new?title=${issueTitle}&body=${issueBody}`

  return (
    <div class="report-issue">
      <a href={issueUrl} target="_blank" rel="noopener noreferrer" class="report-issue-btn">
        Report an Issue with this page
      </a>
    </div>
  )
}

ReportIssue.css = `
.report-issue {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--lightgray);
  text-align: center;
}

.report-issue-btn {
  display: inline-block;
  padding: 0.4rem 1rem;
  border: 1px solid var(--lightgray);
  border-radius: 6px;
  font-size: 0.85rem;
  color: var(--gray) !important;
  text-decoration: none !important;
  transition: border-color 0.2s, color 0.2s;
}

.report-issue-btn:hover {
  border-color: #c9a84c !important;
  color: #8b6914 !important;
}
`

export default (() => ReportIssue) satisfies QuartzComponentConstructor
