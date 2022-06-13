import '../styles/globals.css'
import { Toaster } from "react-hot-toast"

import BaseLayout from '../layouts/BaseLayout'
import { StateContext } from "../context/StateContext"


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <BaseLayout >
        <Toaster />
        <Component {...pageProps} />
      </BaseLayout>
    </StateContext>
  )
}

export default MyApp
