import '@/styles/globals.css'
import Script from 'next/script'
import { configureAbly } from '@ably-labs/react-hooks'

const prefix = process.env.API_ROOT || "";
const clientId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
configureAbly({ authUrl: `${prefix}/api/createTokenRequest?clientId=${clientId}`, clientId: clientId });

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
