// src/plugins/vuetify.js
import { createVuetify } from 'vuetify'
import 'vuetify/styles'

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        colors: {
          background: '#000000', // noir
          text: '#FFFFFF' // blanc
        },
        dark: true, // Utilise le thème sombre
      }
    }
  }
})
