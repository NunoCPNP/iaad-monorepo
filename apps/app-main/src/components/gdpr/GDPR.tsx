import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Container } from './GDOR.styles'

const GDPR: React.FC = () => {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible ? (
        <Container
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          data-testid="gdpr"
        >
          <div className="text">Testing GDPR</div>
        </Container>
      ) : null}
    </AnimatePresence>
  )
}

export default GDPR
