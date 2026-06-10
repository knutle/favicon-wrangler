import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Essential browser icons */}
        <link rel="icon" type="image/x-icon" href="https://favicon.im/google.com" />
        <link rel="icon" type="image/png" sizes="16x16" href="https://favicon.im/google.com" />
        <link rel="icon" type="image/png" sizes="32x32" href="/https://favicon.im/google.com" />
        
        {/* Mobile device icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="https://favicon.im/google.com" />
        <link rel="icon" type="image/png" sizes="192x192" href="https://favicon.im/google.com" />
        <link rel="icon" type="image/png" sizes="512x512" href="https://favicon.im/google.com" />
        
        {/* PWA and platform configuration */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Additional SEO and mobile optimization */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}