import styles from './Projects.module.scss'
// import { Badge } from '@/components/project-badge/Badge'
import { projects } from '@/components/project-badge/actual-projects'
import { ProjectCard } from '@/components/project-card/ProjectCard'
// import { useEffect } from 'react'

// import { useBoundaryObserver } from '@/utils/observer.util'

// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       (entry.target as HTMLDivElement).dataset.animated = 'true'
//     } else {
//       console.log('out of screen')
//     }
//   })
// }, {
//   threshold: 0.7
// })

export const SpotlightedProjects = (): React.JSX.Element => {

  // useEffect(() => {
  //   const projectBlocks = document.querySelectorAll('div[data-project]')
  //   projectBlocks.forEach(element => observer.observe(element))
  // }, [])

  return (
    <div className={styles['spotlighted-projects']}>
      <h1 className='text-header-2 text-gradient' data-card-heading>Интересные проекты</h1>
      <div className={styles['projects-grid']}>        
        {
          projects.map(project => {
            return (
              <ProjectCard key={project.name} project={project} />
              // <div className={styles['project-card']} key={project.name} data-project data-animated={false}>
              //   <section data-heading>
              //     <div data-badges>
              //       <project.icon />
              //       {
              //         project.badges?.length && project.badges?.map(badge => (
              //           <Badge text={badge.text} type={badge.color} key={project.name + '_' + badge.text} />
              //         ))
              //       }
              //     </div>
              //     <div data-tech-list>
              //       {
              //         project.tech.map(tech => (
              //           <tech.icon key={project.name + '_' + tech.name} />
              //         ))
              //       }
              //     </div>
              //   </section>
              //   <h1 className='text-header-3 text-gradient'>{project.name}</h1>
              //   <p>{project.description}</p>
              // </div>
          )})
        }
      </div>
    </div>
  )
}