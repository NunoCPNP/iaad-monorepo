import { v4 as uuidv4 } from 'uuid'

export const data = () => {
  return {
    status: 'success',
    navbar: [
      {
        id: uuidv4(),
        label: 'home',
        link: '#',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'who',
        link: '#who',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'services',
        link: '#services',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'contacts',
        link: '#contacts',
        type: 'standard',
      },
      {
        id: uuidv4(),
        label: 'ctc',
        link: '#ctc',
        type: 'standard',
      },
    ],
  }
}
