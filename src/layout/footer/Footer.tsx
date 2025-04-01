import styles from './Footer.module.scss'
import TelegramIcon from '@/assets/icons/social/telegram.svg?react'
import GmailIcon from '@/assets/icons/social/gmail.svg?react'
import HeadHunterIcon from '@/assets/icons/social/hh.svg?react'
import GithubIcon from '@/assets/icons/social/github.svg?react'

const EXTERNAL_LINKS = [
  {
    href: 'https://hh.ru/resume/e10bd4b8ff0b4fed380039ed1f7033724b6533',
    icon: HeadHunterIcon
  },
  {
    href: 'https://github.com/artem-kuznecov?tab=repositories',
    icon: GithubIcon
  },
  {
    href: 'https://t.me/kuznetsov08',
    icon: TelegramIcon
  },
  {
    href: 'mailto:kuznetsov_artemiy@icloud.com',
    icon: GmailIcon
  }
]

export const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles['external-links']}>
        {
          EXTERNAL_LINKS.map(link => (
            <a className='plain' href={link.href} key={link.href} target='_blank'>
              <link.icon />
            </a>
          ))
        }
      </div>
      <p className='text-inactive'>
        По любым вопросам и предложениям обращайтесь на почту или в telegram
      </p>
      <p className='text-inactive'>Авторское право © 2025 Артем Кузнецов</p>
    </footer>
  )
}