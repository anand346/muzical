import { Html, Head, Main, NextScript, Script } from 'next/document'

export default function Document() {
  return (


    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.5.1/flowbite.css" integrity="sha512-S38JcIr6/b8/7n/d/BmB1jYwXRNUYWW/wTFQKwz2ZRt6IxCL1UIxWPb+hYR1Ia9aiYseqh9TGBzJgNeNvFBDyA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />


        {/* ADDING META DATA */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Muzical is a groundbreaking web application that brings people closer together through synchronized video streaming. Watch YouTube videos simultaneously with your friends and family, creating a shared entertainment experience." />
        <meta name="keywords" content="Muzical, synchronized video streaming, YouTube, watch together, social streaming" />

        {/* <!-- Open Graph Meta Tags (for Facebook and other platforms) --> */}
        <meta property="og:title" content="Muzical - Watch YouTube Videos Together" />
        <meta property="og:description" content="Muzical is a groundbreaking web application that brings people closer together through synchronized video streaming. Watch YouTube videos simultaneously with your friends and family, creating a shared entertainment experience." />
        <meta property="og:image" content="https://muzical.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" />
        <meta property="og:url" content="https://muzical.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* <!-- Twitter Meta Tags (for Twitter) --> */}
        <meta name="twitter:card" content="https://muzical.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" />
        <meta name="twitter:title" content="Muzical - Watch YouTube Videos Together" />
        <meta name="twitter:description" content="Muzical is a groundbreaking web application that brings people closer together through synchronized video streaming. Watch YouTube videos simultaneously with your friends and family, creating a shared entertainment experience." />
        <meta name="twitter:image" content="https://muzical.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" />
        <meta name="twitter:url" content="https://muzical.vercel.app/" />



      </Head>
      <body>
        <Main />
        <NextScript />


      </body>
    </Html>
  )
}
