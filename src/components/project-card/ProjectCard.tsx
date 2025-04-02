import styles from './ProjectCard.module.scss'
import { useEffect, useState } from 'react'
import { Badge } from '@/components/project-badge/Badge'
import { useBoundaryObserver } from '@/utils/intersection-observer.util'
import type { TypeProjectInfo } from '@/types/project.type'

export const ProjectCard = ({ project }: { project: TypeProjectInfo }): React.JSX.Element => {
  const { targetRef, isOffTop, isOffBottom } = useBoundaryObserver()
  const [initRenderCount, setRenderCount] = useState<number>(0)

  useEffect(() => {
    if (initRenderCount < 3) {
      setRenderCount(prev => prev + 1)
      return
    }
    const target = targetRef.current as unknown as HTMLDivElement
    if (target.dataset.animated === 'slide-in') target.dataset.animated = 'slide-out'
    else target.dataset.animated = 'slide-in'
  }, [isOffTop, isOffBottom, targetRef, initRenderCount])

  return (
    <div ref={targetRef} className={styles['project-card']} data-project data-animated='slide-in'>
      <section data-heading>
        <div data-badges>
          <project.icon />
          {
            project.badges?.length && project.badges?.map(badge => (
              <Badge text={badge.text} type={badge.color} key={project.name + '_' + badge.text} />
            ))
          }
        </div>
        <div data-tech-list>
          {
            project.tech.map(tech => (
              <tech.icon key={project.name + '_' + tech.name} />
            ))
          }
        </div>
      </section>
      <h1 className='text-header-3 text-gradient'>{project.name}</h1>
      <p>{project.description}</p>
    </div>
  )
}