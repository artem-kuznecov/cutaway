import { FunctionComponent, SVGProps } from 'react'

export interface ITechnology {
  name: string
  icon: FunctionComponent<SVGProps<SVGSVGElement>>
}

export type TypeTechStack = {
  name: string,
  technologies: ITechnology[]
}