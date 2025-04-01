import styles from './TechStack.module.scss'
import { MouseEvent, useRef } from 'react'
import StackIcon from '@/assets/icons/stack.svg?react'
import { techStack } from './actual-tech-stask'
import { isTouchDevice } from '@/utils/is-touch-device'

export const TechStack = (): React.JSX.Element => {
  const glowBlockRef = useRef<HTMLDivElement>(null)

  function handleMouseMoveInTech (e: MouseEvent<HTMLDivElement>) {
    if (isTouchDevice()) return
    const glowBlock = glowBlockRef.current as HTMLDivElement
    glowBlock.dataset.hidden = 'false'
    const { height, width, top, left } = (e.target as HTMLDivElement).getBoundingClientRect()
    const xPos = (e.clientX - left) * 100 / width
    const yPos = (e.clientY - top) * 100 / height

    glowBlock.style.setProperty('--position-x', `${xPos}%`)
    glowBlock.style.setProperty('--position-y', `${yPos}%`)
  }
  function handleMouseLeaveTech () {
    if (isTouchDevice()) return
    const glowBlock = glowBlockRef.current as HTMLDivElement
    glowBlock.dataset.hidden = 'true'
  }

  return (
    <div className={styles['tech-stack']} onMouseMove={handleMouseMoveInTech} onMouseLeave={handleMouseLeaveTech}>
      {
        !isTouchDevice() &&
        <div ref={glowBlockRef} className={styles['glow']} data-hidden={true} />
      }
      <StackIcon />
      <h1 className='text-header-3 text-gradient'>Технологический стек</h1>
      <div className={styles['technologies-groups']}>
        {
          techStack.map(techGroup => (
            <div className={styles['tech-group']} key={techGroup.name}>
              <p data-group-name>{techGroup.name}</p>
              <div>
                {
                  techGroup.technologies.map(tech => (
                    <div key={tech.name} data-tech-name>
                      <tech.icon />
                      <p>{tech.name}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}