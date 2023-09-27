import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../global.css'

export default function App({ Component, pageProps }) {
  return <SessionProvider>
    <Component {...pageProps} />

  </SessionProvider>
  
}

