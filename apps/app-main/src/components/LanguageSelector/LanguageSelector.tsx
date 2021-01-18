import Link from 'next/link'
import Image from 'next/image'
import cookieCutter from 'cookie-cutter'
import { useRouter } from 'next/router'

import { Container } from './LanguageSelector.styles'

const LanguageSelector: React.FC = () => {
  const router = useRouter()

  return (
    <Container data-testid="languageselector">
      <ul>
        {router &&
          router.locales.map((locale: string) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a onClick={() => cookieCutter.set('NEXT_LOCALE', locale)}>
                  <Image
                    src={`/${locale}.svg`}
                    alt={`Switch language to ${locale.toUpperCase()}`}
                    width={15}
                    height={15}
                    layout="fixed"
                  />
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  )
}

export default LanguageSelector
