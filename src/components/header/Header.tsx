import { useRef, useState, MouseEvent } from 'react'
import cn from 'classnames'
import animojiVideo from '@/assets/animoji.mp4'
import styles from './Header.module.scss'

type TypeCaretPosition = 'left' | 'right'
type TypeCurrentLanguage = 'ru' | 'en'

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
    e.stopPropagation()
    const targetNode = e.target as HTMLDivElement
    const position = {
      x: e.clientX,
      y: e.clientY,
      blockCenterX: targetNode.getBoundingClientRect().right + targetNode.getBoundingClientRect().width / 2
    }

    let xPerc = 0
    let yPerc = 0

    // Если блок находится примерно в середине
    if (position.x - window.innerWidth / 2 < 250) {
      xPerc = (position.x - window.innerWidth / 2) / 40
      yPerc = position.y / 40
    }
    // Если блок находится правее середины
    else if (position.x > window.innerWidth / 2 - 250) {
      xPerc = (position.x - position.blockCenterX) / 30
      yPerc = position.y / 30
    }
    // Если блок находится левее середины
    else {
      xPerc = (position.blockCenterX - position.x) / 30
      yPerc = position.y / 30
    }

    targetNode.style.transform = `translate3d(${xPerc}px, ${yPerc}px, 0px)`
  }

  function mouseOutOfBlock (e: MouseEvent<HTMLDivElement>) {
    const targetNode = e.target as HTMLDivElement
    targetNode.style.transform = 'none'
  }

  return (
    <header className={styles.header}>
      <div
        className={styles.animoji}
        onMouseEnter={animojiMouseEnter}
      >
        <video
          ref={animojiRef}
          src={animojiVideo}
          muted={true}
        />
      </div>
      <div
        className={styles['topic-toggle']}
        onClick={switchCaretPosition}
        onMouseMove={e => mouseMoveInHeader(e)}
        onMouseOut={mouseOutOfBlock}
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
        onMouseMove={e => mouseMoveInHeader(e)}
        onMouseOut={mouseOutOfBlock}
      >
        <div data-role='language-spin' data-lang={currentLanguage}>
          <h4 className='text-header text-bold'>ru</h4>
          <h4 className='text-header text-bold'>en</h4>
        </div>
      </div>
    </header>
  )
}