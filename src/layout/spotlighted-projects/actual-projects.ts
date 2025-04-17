// TODO dynamic icon import
import type { TypeProjectInfo } from '@/types/project.type'

import TypeScriptIcon from '@/assets/icons/tech/typescript.svg?react'
import JavascriptIcon from '@/assets/icons/tech/javascript.svg?react'
// import VueIcon from '@/assets/icons/tech/vue.svg?react'
// import PiniaIcon from '@/assets/icons/tech/pinia.svg?react'
import SassIcon from '@/assets/icons/tech/sass.svg?react'
import WebpackIcon from '@/assets/icons/tech/webpack.svg?react'
import HTMLCSSIcon from '@/assets/icons/tech/html-css.svg?react'
import ReactIcon from '@/assets/icons/tech/react.svg?react'
import MobxIcon from '@/assets/icons/tech/mobx.svg?react'
import ReduxIcon from '@/assets/icons/tech/redux.svg?react'

import CloudIcon from '@/assets/icons/cloud.svg?react'
import TVIcon from '@/assets/icons/tv.svg?react'
import ChromeIcon from '@/assets/icons/chrome.svg?react'

// regular

// export const projects: TypeProjectInfo[] = [
//   {
//     name: 'Облачное хранилище S3',
//     icon: CloudIcon,
//     description: 'Это хранилище медиафайлов, позволяющее гибко управлять хранимыми файлами - настраивать права доступа, видимость для других пользователей - а также делиться этими файлами и стримить их.\n\nВ рамках реализации была решена задача перехода от использования стороннего сервиса PlatformCraft к собственному решению компании.',
//     tech: [
//       { name: 'typescript', icon: TypeScriptIcon },
//       { name: 'vue', icon: VueIcon },
//       { name: 'pinia', icon: PiniaIcon },
//       { name: 'sass', icon: SassIcon },
//       { name: 'webpack', icon: WebpackIcon }
//     ]
//   },
//   {
//     name: 'Встраиваемый плеер',
//     icon: TVIcon,
//     description: 'Это плеер, генерируемый для определенного видеофайла и изменяемый динамически. Гибкие настройки позволяют менять все возможные параметры плеера, включая постер (заставку), логотип компании, цвета и поведение элементов управления, параметры чата и другие.\n\nРеализация плеера позволила предоставлять клиентам возможность встраивания на свои интернет-ресурсы управляемого видеоплеера для транслирования стримов с возможностью обсуждения в встроенном чате или проигрывания видео.',
//     tech: [
//       { name: 'javascript', icon: JavascriptIcon },
//       { name: 'html-css', icon: HTMLCSSIcon }
//     ]
//   },
//   {
//     name: 'Расширение Chrome',
//     icon: ChromeIcon,
//     description: 'К сожалению, листая магазин расширений Chrome, я не нашел ни одного нормального расширения для визуализации закладок и списка чтения браузера и работы с ними...\n\nК счастью, я разработчик 😁. Поэтому создаю такое расширение сам и стараюсь решить главную проблему всех таких расширений — отбить у пользователя желание удалить его через 5 минут)',
//     tech: [
//       { name: 'typescript', icon: TypeScriptIcon },
//       { name: 'react', icon: ReactIcon },
//       { name: 'mobx', icon: MobxIcon },
//       { name: 'sass', icon: SassIcon }
//     ],
//     badges: [
//       { text: 'pet', color: 'grey' },
//       { text: 'soon', color: 'yellow' }
//     ]
//   }
// ]

// react based
export const projects: TypeProjectInfo[] = [
  {
    name: 'Облачное хранилище S3',
    icon: CloudIcon,
    // description: 'Проект представляет собой интерфейс для взаимодействия с хранилищем S3 в личном кабинете пользователя. В проекте использовался фреймворк Vue вариации Options API.\n\nВ рамках реализации была решена задача перехода от использования стороннего сервиса PlatformCraft к собственному решению компании.',
    description: 'Это хранилище медиафайлов, позволяющее гибко управлять хранимыми файлами - настраивать права доступа, видимость для других пользователей - а также делиться этими файлами и стримить их.\n\nВ рамках реализации была решена задача перехода от использования стороннего сервиса PlatformCraft к собственному решению компании.',
    tech: [
      { name: 'typescript', icon: TypeScriptIcon },
      { name: 'react', icon: ReactIcon },
      { name: 'redux', icon: ReduxIcon },
      { name: 'sass', icon: SassIcon },
      { name: 'webpack', icon: WebpackIcon }
    ]
  },
  {
    name: 'Встраиваемый плеер',
    icon: TVIcon,
    description: 'Это плеер, генерируемый для определенного видеофайла и изменяемый динамически. Гибкие настройки позволяют менять все возможные параметры плеера, включая постер (заставку), логотип компании, цвета и поведение элементов управления, параметры чата и другие.\n\nРеализация плеера позволила предоставлять клиентам возможность встраивания на свои интернет-ресурсы управляемого видеоплеера для транслирования стримов с возможностью обсуждения в встроенном чате или проигрывания видео.',
    tech: [
      { name: 'javascript', icon: JavascriptIcon },
      { name: 'html-css', icon: HTMLCSSIcon }
    ]
  },
  {
    name: 'Расширение Chrome',
    icon: ChromeIcon,
    description: 'К сожалению, листая магазин расширений Chrome, я не нашел ни одного нормального расширения для визуализации закладок и списка чтения браузера и работы с ними...\n\nК счастью, я разработчик 😁. Поэтому создаю такое расширение сам и стараюсь решить главную проблему всех таких расширений — отбить у пользователя желание удалить его через 5 минут)',
    tech: [
      { name: 'typescript', icon: TypeScriptIcon },
      { name: 'react', icon: ReactIcon },
      { name: 'mobx', icon: MobxIcon },
      { name: 'sass', icon: SassIcon }
    ],
    badges: [
      { text: 'pet', color: 'grey' },
      { text: 'soon', color: 'yellow' }
    ]
  }
]