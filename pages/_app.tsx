import type { AppProps } from 'next/app'

import '@/assets/styles/globals.scss'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import MainProvider from 'providers/MainProvider'

type TypeAppProps = AppProps & TypeComponentAuthFields

const MyApp = ({ Component, pageProps }: TypeAppProps) => {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  )
}

export default MyApp
