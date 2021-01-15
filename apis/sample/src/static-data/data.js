const { v4: uuidv4 } = require('uuid')

module.exports = {
  navbar: [
    {
      id: uuidv4(),
      label: 'Home',
      link: '/',
      type: 'standard',
    },
  ],
}
