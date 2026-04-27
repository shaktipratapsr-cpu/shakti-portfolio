import styles from '../../styles/portfolio.module.css'

const RESUME_PATH = '/resume/resume.pdf'

function DownloadIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 3V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7.5 10.5L12 15L16.5 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 18.5H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function ResumeButton({
  className = '',
  compact = false,
  withMeta = false,
  metaText = 'PDF, updated',
  label = 'Download Resume',
}) {
  const handleClick = () => {
    window.open(RESUME_PATH, '_blank', 'noopener,noreferrer')
  }

  return (
    <a
      href={RESUME_PATH}
      className={`${styles.resumeButton} ${compact ? styles.resumeButtonCompact : ''} ${className}`.trim()}
      target="_blank"
      rel="noreferrer"
      download="Shakti-Pratap-Singh-Resume.pdf"
      onClick={handleClick}
      aria-label={label}
      title={metaText}
    >
      <span className={styles.resumeButtonTextWrap}>
        <span className={styles.resumeButtonMainText}>{label}</span>
        {withMeta ? <span className={styles.resumeButtonMeta}>{metaText}</span> : null}
      </span>
      <span className={styles.resumeButtonIcon}>
        <DownloadIcon />
      </span>
    </a>
  )
}

export default ResumeButton
