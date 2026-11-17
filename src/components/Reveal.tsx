import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'motion/react'
import { useRef, type ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

const ease = [0.22, 1, 0.36, 1] as const

/** Editorial scroll reveal — opacity + soft rise, once. */
export function Reveal({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15, margin: '0px 0px -4% 0px' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -6% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.07 } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

/** Image mask curtain reveal on scroll. */
export function MaskReveal({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.92', 'start 0.45'],
  })
  const clip = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(12% 12% 12% 12%)', 'inset(0% 0% 0% 0%)'],
  )
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1])

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ clipPath: clip, scale, willChange: 'clip-path, transform' }}>
        {children}
      </motion.div>
    </div>
  )
}

/** Gentle parallax on an image wrapper. */
export function ParallaxImage({
  src,
  alt = '',
  className,
  imgClassName,
}: {
  src: string
  alt?: string
  className?: string
  imgClassName?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {reduce ? (
        <img src={src} alt={alt} className={imgClassName} loading="lazy" />
      ) : (
        <motion.img
          src={src}
          alt={alt}
          className={imgClassName}
          loading="lazy"
          style={{ y, scale: 1.12, willChange: 'transform' }}
        />
      )}
    </div>
  )
}

/** Soft floating decorative shape. */
export function Float({
  children,
  className,
  duration = 7,
  distance = 12,
}: {
  children?: ReactNode
  className?: string
  duration?: number
  distance?: number
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className} aria-hidden="true">{children}</div>
  }

  return (
    <motion.div
      className={className}
      aria-hidden="true"
      animate={{ y: [0, -distance, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
