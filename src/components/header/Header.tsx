import { useState } from 'react'
import cn from 'classnames'
import styles from './Header.module.scss'

type TypeCaretPosition = 'left' | 'right'
type TypeCurrentLanguage = 'ru' | 'en'

export const Header = () => {
  const [caretPosition, setCaretPosition] = useState<TypeCaretPosition>('left')
  const [currentLanguage, setCurrentLanguage] = useState<TypeCurrentLanguage>('ru')

  function switchLanguage () {
    if (currentLanguage === 'ru') setCurrentLanguage('en')
    else setCurrentLanguage('ru')
  }

  return (
    <header className={styles.header}>
      <div className={styles.animoji}></div>
      <div className={styles['topic-toggle']}>
        <h4
          className={cn(['text-header-4', {
            'text-gradient': caretPosition === 'left'
          }])}
          onClick={() => setCaretPosition('left')}
        >Работа</h4>
        <h4
          className={cn(['text-header-4', {
            'text-gradient-colored': caretPosition === 'right'
          }])}
          onClick={() => setCaretPosition('right')}
        >О себе</h4>
        <div data-role='caret' data-position={caretPosition}></div>
      </div>
      <div className={styles['lang-toggle']} onClick={switchLanguage}>
        <div data-role='language-spin' data-lang={currentLanguage}>
          <h4 className='text-header text-bold'>ru</h4>
          <h4 className='text-header text-bold'>en</h4>
        </div>
      </div>
    </header>
  )
}