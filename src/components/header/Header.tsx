import { useRef, MouseEvent } from 'react'
import cn from 'classnames'
import animojiVideo from '@/assets/animoji.mp4'
import styles from './Header.module.scss'
import { isTouchDevice } from '@/utils'
import { useTopicsSettings } from '@/stores/topic.store'
import { usePreferences } from '@/stores/preferences.store'

export const Header = (): React.JSX.Element => {
  const { switchTopic, currentTopic } = useTopicsSettings()
  const { language, switchLanguage } = usePreferences()
  const topicToggleRef = useRef<HTMLDivElement>(null)
  const animojiRef = useRef<HTMLVideoElement>(null)

  function animojiMouseEnter () {
    const animoji = animojiRef.current as HTMLVideoElement
    animoji.play()
  }

  function switchCaretPosition () {
    (topicToggleRef.current as HTMLDivElement).style.pointerEvents = 'none'
    switchTopic()
    setTimeout(() => {
      (topicToggleRef.current as HTMLDivElement).style.pointerEvents = 'all'
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
                  'text-gradient': currentTopic === 'work'
                }
              ])}
            >Работа</h4>
          <h4
            className={
              cn(['text-header-4',
                {
                  'text-gradient-colored': currentTopic === 'life'
                }
              ])}
            >О себе</h4>
          <div data-role='caret' data-position={currentTopic === 'work' ? 'left' : 'right'}></div>
        </div>
        <div
          className={styles['lang-toggle']}
          onClick={switchLanguage}
        >
          <div data-role='language-spin' data-lang={language}>
            <h4 className='text-header text-bold'>ru</h4>
            <h4 className='text-header text-bold'>en</h4>
          </div>
        </div>
      </header>
    </>
  )
}