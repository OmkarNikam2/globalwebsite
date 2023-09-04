import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../component/home/style.css'
import '../component/data/style.css'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../component/bootstrap/style.css'
import '../../public/css/dark.css'
{/* <link rel="stylesheet" href="/css/dark.css" /> */}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
