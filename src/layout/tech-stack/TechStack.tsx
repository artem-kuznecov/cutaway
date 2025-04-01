import styles from './TechStack.module.scss'
import StackIcon from '@/assets/icons/stack.svg?react'

import { techStack } from './actual-tech-stask'

export const TechStack = (): React.JSX.Element => {
  return (
    <div className={styles['tech-stack']}>
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