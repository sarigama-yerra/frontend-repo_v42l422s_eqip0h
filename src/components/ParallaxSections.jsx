import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

function Section({ id, children, speed = 0.15, bg = '' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * -300])

  return (
    <section id={id} ref={ref} className={`relative py-28 ${bg}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </section>
  )
}

export default function ParallaxSections({ children }) {
  return <div>{children}</div>
}

export { Section }
