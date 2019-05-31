import Head from 'next/head'

const Page = ({ children, title = 'Gere seu QR Code com o estilo da Telecine' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content="Gere seu QR Code com o estilo da Telecine, é bem simples e prático, experimente." />
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='author' content='Reinaldo Amorim' />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <link rel="icon" type="image/png" href="/static/images/favicon.ico" />
      <link rel="stylesheet" href="/static/css/style.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://qrcode.telecineplay.com.br/" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="Telecine Play" />
      <meta property="og:description" content="Gere seu QR Code com o estilo da Telecine, é bem simples e prático, experimente." />
      <meta property="og:image" content="/static/images/og-image.jpg" />
    </Head>
    
    {children}
    
  </div>
);

export default Page;