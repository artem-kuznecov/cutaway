import { useEffect, useRef } from 'react'
import { useTopicsSettings } from '@/stores/topic.store'
import { Header } from '@/components/header/Header'
import { TechStack } from '@/components/tech-stack/TechStack'
import { About } from '@/components/about/About'
import { SpotlightedProjects } from '@/components/spotlighted-projects/Projects'
import { Footer } from '@/components/footer/Footer'

export const App = (): React.JSX.Element => {
  const { currentTopic, isWorkBlockVisible, isLifeBlockVisible } = useTopicsSettings()
  const isStrictInitRender = useRef<number>(0)
  const fadedBlockRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // предотвращение выполнения при первом рендере
    if (isStrictInitRender.current < 2) {
      isStrictInitRender.current ++
      return
    }
    const fadedBlock = fadedBlockRef.current as HTMLDivElement
    fadedBlock.dataset.animatedFade = 'true'
    setTimeout(() => {
      fadedBlock.dataset.animatedFade = 'false'
    }, 1000)
  }, [currentTopic])

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
                <span className='text-inactive'>Резюме можно скачать<a href='https://hh.ru/resume/e10bd4b8ff0b4fed380039ed1f7033724b6533' target='_blank'>здесь</a></span>
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