import { useRef, useState, MouseEvent } from 'react'
import cn from 'classnames'
import animojiVideo from '@/assets/animoji.mp4'
import styles from './Header.module.scss'
import type { TypeActiveTopic, TypeCaretPosition, TypeCurrentLanguage } from '@/types/preferences'
import { isTouchDevice } from '@/utils'

export const Header = (): React.JSX.Element => {
  const topicToggleRef = useRef<HTMLDivElement>(null)
  const animojiRef = useRef<HTMLVideoElement>(null)
  const mainContentRef = useRef<HTMLElement>(null)

  const [caretPosition, setCaretPosition] = useState<TypeCaretPosition>('left')
  const [activeTopic, setActiveTopic] = useState<TypeActiveTopic>('work')
  const [currentLanguage, setCurrentLanguage] = useState<TypeCurrentLanguage>('ru')

  function switchLanguage () {
    if (currentLanguage === 'ru') setCurrentLanguage('en')
    else setCurrentLanguage('ru')
  }

  function animojiMouseEnter () {
    const animoji = animojiRef.current as HTMLVideoElement
    animoji.play()
  }

  function switchCaretPosition () {
    (topicToggleRef.current as HTMLDivElement).style.pointerEvents = 'none'
    const mainContentBlock = mainContentRef.current as HTMLElement
    mainContentBlock.dataset.animatedFade = 'true'
    if (caretPosition === 'left') setCaretPosition('right')
    else setCaretPosition('left')
    setTimeout(() => {
      setActiveTopic(prev => {
        if (prev === 'work') return 'life'
        else return 'work'
      })
    }, 500)
    setTimeout(() => {
      (topicToggleRef.current as HTMLDivElement).style.pointerEvents = 'all'
      mainContentBlock.dataset.animatedFade = 'false'
    }, 1000)
  }

  function mouseMoveInHeader (e: MouseEvent<HTMLDivElement>): void {
    if (isTouchDevice()) return
    e.stopPropagation()
    const targetNode = e.target as HTMLDivElement
    const position = {
      x: e.clientX,
      y: e.clientY,
      blockCenterX: targetNode.getBoundingClientRect().right + targetNode.getBoundingClientRect().width / 2
    }

    let xPerc = 0
    let yPerc = 0

    if (position.x - window.innerWidth / 2 < 250) {
      xPerc = (position.x - window.innerWidth / 2) / 40
      yPerc = position.y / 30
    }
    targetNode.style.transform = `translate3d(${xPerc}px, ${yPerc}px, 0px)`
    setTimeout(() => {
      targetNode.dataset.transitioned = 'false'
    }, 200)
  }

  function mouseOutOfBlock (e: MouseEvent<HTMLDivElement>) {
    const targetNode = e.target as HTMLDivElement
    setTimeout(() => {
      targetNode.dataset.transitioned = 'true'
      targetNode.style.transform = 'none'
    }, 200)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.animoji} onMouseEnter={animojiMouseEnter}>
          <video
            ref={animojiRef}
            src={animojiVideo}
            muted={true}
            autoPlay={true}
          />
        </div>
        <div
          ref={topicToggleRef}
          className={styles['topic-toggle']}
          onClick={switchCaretPosition}
          onMouseMove={e => mouseMoveInHeader(e)}
          onMouseOut={e => mouseOutOfBlock(e)}
          data-transitioned={true}
        >
          <h4
            className={
              cn(['text-header-4',
                {
                  'text-gradient': caretPosition === 'left'
                }
              ])}
            >Работа</h4>
          <h4
            className={
              cn(['text-header-4',
                {
                  'text-gradient-colored': caretPosition === 'right'
                }
              ])}
            >О себе</h4>
          <div data-role='caret' data-position={caretPosition}></div>
        </div>
        <div
          className={styles['lang-toggle']}
          onClick={switchLanguage}
        >
          <div data-role='language-spin' data-lang={currentLanguage}>
            <h4 className='text-header text-bold'>ru</h4>
            <h4 className='text-header text-bold'>en</h4>
          </div>
        </div>
      </header>
      <main ref={mainContentRef} className={styles['main-content']} data-animated-fade={false}>
        <div className={styles.greeting}>
          {
            activeTopic === 'work' &&
            <>
              <h1 className='text-header-1 text-gradient'>Привет, я Артём</h1>
              <p>Сейчас я frontend-разработчик в компании группы Билайн, занимаюсь разработкой и поддержкой личного кабинета пользователя и медиаплеера</p>
              <span className='text-inactive'>Резюме можно скачать<a href='https://hh.ru/resume/e10bd4b8ff0b4fed380039ed1f7033724b6533' target='_blank'>здесь</a></span>
            </>
          }
        </div>
      </main>
    </>
  )
}