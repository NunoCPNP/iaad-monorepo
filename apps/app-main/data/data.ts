import { v4 as uuidv4 } from 'uuid'

export const data = () => {
  return {
    status: 'success',
    navbar: [
      {
        id: uuidv4(),
        label: 'Home',
        link: '/',
        type: 'standard',
      },
    ],
  }
}
