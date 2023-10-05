import { ComponentProps } from 'react'

export type ElementsVariants = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

export type Props = {
  color?: string
  as: ElementsVariants
} & ComponentProps<'p'>
