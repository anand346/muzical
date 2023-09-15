import '@/styles/globals.css'
import Script from 'next/script'
import { configureAbly } from '@ably-labs/react-hooks'

const prefix = process.env.NEXT_PUBLIC_API_ROOT || "";
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
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
    />

    <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
      `}
    </Script>
  </>
  
  )
}
