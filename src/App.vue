<template>
  <v-app>
    <v-app-bar color="black" dark>
      <v-toolbar-title>Dashboard Météo & Multimédia</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid class="white--text">
        <v-row>
          <v-col cols="12" md="6">
            <WeatherWidget />
          </v-col>
          <v-col cols="12" md="6">
            <YouTubePlayer />
          </v-col>
        </v-row>
        <v-row>
          <MusicPlayer />
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="black" class="white--text">
      © 2024 Votre Nom
    </v-footer>
  </v-app>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue';
import YouTubePlayer from './components/YouTubePlayer.vue';
import MusicPlayer from './components/MusicPlayer.vue';

export default {
  name: 'App',
  components: {
    WeatherWidget,
    YouTubePlayer,
    MusicPlayer
  }
}
</script>

<style>
/* Styles spécifiques pour l'app */
</style>
