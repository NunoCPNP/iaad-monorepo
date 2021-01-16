import NextHead from 'next/head'

type Props = {
  title: string
  description: string
  children?: JSX.Element
}

const SEO: React.FC<Props> = ({ title, description, children }) => {
  return (
    <>
      <NextHead>
        {/* Title */}
        <title>{title}</title>
        <meta name="og:title" content={title} />

        {/* Description */}
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        {/* General */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />

        {/* <meta name="twitter:site" content="@nunocpnpereira" />
        <meta name="apple-mobile-web-app-title" content="nunopereira.tech" />
        <meta name="author" content="Nuno Pereira" /> */}

        {children}
      </NextHead>
    </>
  )
}

export default SEO
