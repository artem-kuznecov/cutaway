// TODO dynamic imports

// import { FunctionComponent, SVGProps } from 'react'
import type { TypeTechStack } from '@/types/tech-stack.type'

// tech icons begin
import JavaScriptIcon from '@/assets/icons/tech/javascript.svg?react'
import TypeScriptIcon from '@/assets/icons/tech/typescript.svg?react'
import HTMLCSSIcon from '@/assets/icons/tech/html-css.svg?react'
import GitIcon from '@/assets/icons/tech/git.svg?react'

import TailwindIcon from '@/assets/icons/tech/tailwind.svg?react'
import SassIcon from '@/assets/icons/tech/sass.svg?react'
import PugIcon from '@/assets/icons/tech/pug.svg?react'
import HandlebarsIcon from '@/assets/icons/tech/handlebars.svg?react'

import ReactIcon from '@/assets/icons/tech/react.svg?react'
import NextIcon from '@/assets/icons/tech/nextjs.svg?react'
import ReactRouterIcon from '@/assets/icons/tech/react-router.svg?react'
import ReduxIcon from '@/assets/icons/tech/redux.svg?react'
import MobxIcon from '@/assets/icons/tech/mobx.svg?react'
import ZustandIcon from '@/assets/icons/tech/zustand.svg?react'

import VueIcon from '@/assets/icons/tech/vue.svg?react'
import NuxtIcon from '@/assets/icons/tech/nuxtjs.svg?react'
import PiniaIcon from '@/assets/icons/tech/pinia.svg?react'

import ViteIcon from '@/assets/icons/tech/vite.svg?react'
import WebpackIcon from '@/assets/icons/tech/webpack.svg?react'
import DockerIcon from '@/assets/icons/tech/docker.svg?react'
// tech icons end

// async function importIcon (iconName: string, targetDirPath: string = '@/assets/icons'): Promise<FunctionComponent<SVGProps<SVGSVGElement>>> {
//   const icon = await import(`${targetDirPath}/${iconName}.svg?react`) as FunctionComponent<SVGProps<SVGSVGElement>>
//   return icon
// }

export const techStack: TypeTechStack[] = [
  {
    name: 'База',
    technologies: [
      {
        name: 'TypeScript',
        icon: TypeScriptIcon
      },
      {
        name: 'JavaScript',
        icon: JavaScriptIcon
      },
      {
        name: 'HTML&CSS',
        icon: HTMLCSSIcon
      },
      {
        name: 'Git',
        icon: GitIcon
      }
    ]
  },
  {
    name: 'HTML&CSS+',
    technologies: [
      {
        name: 'TailwindCSS',
        icon: TailwindIcon
      },
      {
        name: 'Sass/SCSS',
        icon: SassIcon
      },
      {
        name: 'Pug',
        icon: PugIcon
      },
      {
        name: 'Handlebars',
        icon: HandlebarsIcon
      }
    ]
  },
  {
    name: 'React',
    technologies: [
      {
        name: 'React',
        icon: ReactIcon
      },
      {
        name: 'NextJS',
        icon: NextIcon
      },
      {
        name: 'React Router',
        icon: ReactRouterIcon
      },
      {
        name: 'Redux/RTK',
        icon: ReduxIcon
      },
      {
        name: 'Mobx',
        icon: MobxIcon
      },
      {
        name: 'Zustand',
        icon: ZustandIcon
      }
    ]
  },
  {
    name: 'Vue',
    technologies: [
      {
        name: 'Vue',
        icon: VueIcon
      },
      {
        name: 'NuxtJS',
        icon: NuxtIcon
      },
      {
        name: 'Pinia',
        icon: PiniaIcon
      }
    ]
  },
  {
    name: 'Развертывание',
    technologies: [
      {
        name: 'Vite',
        icon: ViteIcon
      },
      {
        name: 'Webpack',
        icon: WebpackIcon
      },
      {
        name: 'Docker',
        icon: DockerIcon
      }
    ]
  }
]
