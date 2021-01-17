import Link from 'next/link'
import Image from 'next/image'
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
                <a>
                  <Image src={`/${locale}.svg`} alt={`Switch language to ${locale}`} width={15} height={15} />
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Container>
  )
}

export default LanguageSelector
