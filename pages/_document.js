import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="css/main.css" />
      </Head>
      <body>
        <div className="container">
            <Main />
        </div>
        <NextScript />
      </body>
    </Html>
  )
}