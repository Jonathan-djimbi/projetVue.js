import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';

const app = createApp(App);
app.use(vuetify);
app.mount('#app');

import WeatherWidget from './components/WeatherWidget.vue';

export default {
  name: 'App',
  components: {
    WeatherWidget
  }
}
