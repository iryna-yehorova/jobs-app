<template>
  <v-card
    class="mx-auto"
    tile
  >
    <v-card>
      <v-select
        v-model="filter.remote"
        :items="remoteOptions"
        label="Remote possibility"
        single-line
        clearable
        return-object
      />
      <v-autocomplete
        v-model="filter.city"
        :items="cities"
        dense
        chips
        small-chips
        label="Filter by location"
        multiple
        clearable
      />
      <v-autocomplete
        v-model="filter.tag"
        :items="tags"
        dense
        chips
        small-chips
        label="Filter by tags"
        multiple
        clearable
      />
    </v-card>
    <v-list shaped>
      <v-subheader>Job Applications</v-subheader>
      <v-list-item-group
        v-model="selectedItem"
        color="green"
      >
        <v-list-item
          v-for="(item, i) in filteredJobsList"
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
    selectedItem: {},
    remoteOptions: [
      { text: 'Yes', value: true },
      { text: 'No', value: false }
    ],
    filter: {
      remote: {},
      city: [],
      tag: []
    },
  }),
  methods: {
    ...mapActions(["getJobsList", "getFilteredJobsList"]),
  },
  computed: {
    ...mapGetters(["filteredJobsList", "cities", "tags"]),
  },
  created() {
    this.getJobsList()
  },
  watch: {
    filter: {
      handler(val) {
        this.getFilteredJobsList(val)
      },
      deep: true
    }
  },
}
</script>