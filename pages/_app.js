import '@/styles/globals.css'
import Script from 'next/script'
import { configureAbly } from '@ably-labs/react-hooks'


export default function App({ Component, pageProps }) {
  return (
  <>
    <Component {...pageProps} />
    <Script src = " https://unpkg.com/flowbite@1.5.1/dist/flowbite.js" />
    <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
          crossorigin="anonymous"></Script>

    <Script src="https://www.youtube.com/player_api" ></Script>
  </>
  
  )
}
