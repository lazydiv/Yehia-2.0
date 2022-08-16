import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import {ThemeProvider} from 'next-themes'
import Footer from '../components/Footer'
import Progress from '../components/Progress'
import Cursor from '../components/Cursor'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider attribute='class'>
        <Cursor />

        <Header />
    <div className='flex absolute flex-col items-center w-full '>
        <Component {...pageProps} />
        <Footer />
    </div>
      <Progress />
      </ThemeProvider>
    </>
  )
}

export default MyApp
