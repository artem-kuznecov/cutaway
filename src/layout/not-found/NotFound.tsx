import styles from './NotFound.module.scss'
import NotFoundIcon from '@/assets/icons/404.svg?react'

export const NotFound = (): React.JSX.Element => {
  return (
    <main className={styles['not-found-page']}>
      <div id='content-container'>
        <h1 className='text-header-2'>Где это мы?...</h1>
        <p>Похоже, такой страницы пока нет. Но если очень нужна - напиши<a href='https://t.me/kuznetsov08'>сюда</a></p>
        <p>или возвращайся<a href='/'>на главную</a></p>
        <NotFoundIcon />
      </div>
    </main>
  )
}