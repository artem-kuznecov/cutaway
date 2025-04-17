import styles from './Projects.module.scss'
import { projects } from './actual-projects'
import { ProjectCard } from '@/components/project-card/ProjectCard'

export const SpotlightedProjects = (): React.JSX.Element => {
  return (
    <div className={styles['spotlighted-projects']}>
      <h1 className='text-header-2 text-gradient' data-card-heading>Интересные проекты</h1>
      <div className={styles['projects-grid']}>        
        {
          projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))
        }
      </div>
    </div>
  )
}