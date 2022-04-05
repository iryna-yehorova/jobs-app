<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
    >
      <span class="d-flex align-center">
       Job App
      </span>

      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Arbeit now</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Main />
    </v-main>
  </v-app>
</template>

<script>
import Main from './views/Main';

export default {
  name: 'App',

  components: {
    Main,
  },

  data: () => ({
    //
  }),
};
</script>
