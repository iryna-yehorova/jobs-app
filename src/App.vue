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

      <v-spacer />

      <v-btn
      @click="$router.push({ name: 'main' })"
        text
        class="mr-2"
      >
        Arbeit now
      </v-btn>
    </v-app-bar>

    <v-main>
     <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
