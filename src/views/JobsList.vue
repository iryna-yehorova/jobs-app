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
          v-for="(item, i) in jobsList"
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
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    selectedItem: {}
  }),
  methods: {
    ...mapActions(["getJobsList"])
  },
  computed: mapGetters(["jobsList"]),
  created() {
    this.getJobsList()
  }
}
</script>