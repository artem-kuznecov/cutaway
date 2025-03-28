import { useRef, useState, MouseEvent } from 'react'
import cn from 'classnames'
import animojiVideo from '@/assets/animoji.mp4'
import styles from './Header.module.scss'

type TypeCaretPosition = 'left' | 'right'
type TypeCurrentLanguage = 'ru' | 'en'

function isTouchDevice () {
  return (('ontouchstart' in window) || (navigator.maxTouchPoints > 0))
}

export const Header = (): React.JSX.Element => {
  const animojiRef = useRef<HTMLVideoElement>(null)

  const [caretPosition, setCaretPosition] = useState<TypeCaretPosition>('left')
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
    if (caretPosition === 'left') setCaretPosition('right')
    else setCaretPosition('left')
  }

  function mouseMoveInHeader (e: MouseEvent<HTMLDivElement>) {
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
    setTimeout(() => {
      targetNode.dataset.transitioned = 'false'
    }, 200)

    targetNode.style.transform = `translate3d(${xPerc}px, ${yPerc}px, 0px)`
  }

  function mouseOutOfBlock (e: MouseEvent<HTMLDivElement>) {
    const targetNode = e.target as HTMLDivElement
    
    setTimeout(() => {
      targetNode.dataset.transitioned = 'true'
      targetNode.style.transform = 'none'
    }, 200)
  }

  return (
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
        className={styles['topic-toggle']}
        onClick={switchCaretPosition}
        onMouseMove={e => mouseMoveInHeader(e)}
        onMouseOut={e => mouseOutOfBlock(e)}
        data-transitioned={true}
      >
        <h4
          className={cn(['text-header-4', {
            'text-gradient': caretPosition === 'left'
          }])}>Работа</h4>
        <h4
          className={cn(['text-header-4', {
            'text-gradient-colored': caretPosition === 'right'
          }])}>О себе</h4>
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
  )
}