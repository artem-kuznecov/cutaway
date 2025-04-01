import { FunctionComponent, SVGProps } from 'react'
import type { ITechnology } from '@/types/tech-stack.type'

type TypeProjectBadge = {
  text: string,
  color: 'yellow' | 'grey'
}

export type TypeProjectInfo = {
  name: string,
  icon: FunctionComponent<SVGProps<SVGSVGElement>>,
  tech: ITechnology[],
  description: string,
  badges?: TypeProjectBadge[]
}