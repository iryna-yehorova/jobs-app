<template>
  <v-app>
    <v-app-bar
      app
      color="green"
      dark
      elevate-on-scroll
    >
      <v-img
        max-width="35"
        src="@/assets/logo.svg"
        class="mr-2"
      />
     <v-toolbar-title>Job Vacancy App</v-toolbar-title>

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
      <v-container fluid>
        <router-view />
      </v-container>
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
