import { useEffect, useRef } from 'react'
import { About } from '@/layout/about/About'
import { Header } from '@/layout/header/Header'
import { Footer } from '@/layout/footer/Footer'
import { TechStack } from '@/layout/tech-stack/TechStack'
import { SpotlightedProjects } from '@/layout/spotlighted-projects/Projects'
import { useTopicsSettings } from '@/stores/topic.store'

export const App = (): React.JSX.Element => {
  const { currentTopic, isWorkBlockVisible, isLifeBlockVisible } = useTopicsSettings()
  const isStrictInitRender = useRef<number>(0)
  const fadedBlockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    window.addEventListener('beforeunload', handleBeforeUnload)

    // предотвращение выполнения при первом рендере
    if (isStrictInitRender.current < 1) {
      isStrictInitRender.current ++
      return
    }
    const fadedBlock = fadedBlockRef.current as HTMLDivElement
    fadedBlock.dataset.animatedFade = 'true'
    setTimeout(() => {
      fadedBlock.dataset.animatedFade = 'false'
    }, 1000)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [currentTopic])

  function handleBeforeUnload () {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <div id='content-container'>
        <Header />
        <div ref={fadedBlockRef} className='fade-animated' data-animated-fade={false} data-visible={true}>
          {
            isWorkBlockVisible &&
            <>
              <div className='greeting'>
                <h1 className='text-header-1 text-gradient'>Привет, я Артём</h1>
                <p>Сейчас я frontend-разработчик в компании группы Билайн, занимаюсь разработкой и поддержкой личного кабинета пользователя и медиаплеера</p>
                <span className='text-inactive'>Резюме можно скачать<a href='https://hh.ru/resume/2b28bb5aff0ec55c580039ed1f707630453937' target='_blank'>здесь</a></span>
              </div>
              <TechStack />
              <SpotlightedProjects />
            </>
          }
          {
            isLifeBlockVisible &&
            <About />
          }
        </div>
      </div>
      <Footer />
    </>
  )
}