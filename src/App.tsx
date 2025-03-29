import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'

export const App = (): React.JSX.Element => {
  return (
    <>
      <div id='content-container'>
        <Header />
      </div>
      <Footer />
    </>
  )
}