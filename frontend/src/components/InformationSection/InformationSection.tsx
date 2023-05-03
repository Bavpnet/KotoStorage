import styles from './InformationSection.module.css'

type InformationSectionProps = {
  title: string
  alignment: 'left' | 'right'
  p1: string
  p2: string
  breakLine?: boolean
  p3?: string
}

export const InformationSection: React.FC<InformationSectionProps> = ({
  title,
  alignment,
  p1,
  p2,
  p3,
  breakLine
}) => {
  return (
    <section
      className={`${styles.infoPar} ${
        alignment === 'right' ? styles.alignRight : ''
      }`}
    >
      <h3>{title}</h3>
      <div className={styles.pars}>
        <p>{p1}</p>
        <br />
        <p>{p2}</p>
      </div>
      {breakLine && <span className={p3 ? styles.low : styles.high} />}
      {p3 && <p className={styles.par3}>{p3}</p>}
    </section>
  )
}
