<template>
<v-card
    class="mx-auto"
    tile
  >
    <v-list shaped>
      <v-subheader>Job Applications</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="green"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content @click="$router.push({ name: 'vacancy', params: { slug: item.slug } })">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
    data: () => ({
    items: [],
    selectedItem: {}
  }),
  created() {
      this.getJobs();
  },
  methods: {
      async getJobs() {
        fetch('https://www.arbeitnow.com/api/job-board-api')
          .then(response => response.json())
          .then(data => this.items = data.data)
      },
  }
}
</script>