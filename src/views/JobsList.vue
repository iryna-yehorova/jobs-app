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
    <v-virtual-scroll
      :items="filteredJobsList"
      :height="listHeight"
      item-height="64"
    >
      <template v-slot:default="{ item }">
        <v-list-item-group
         v-model="selectedItem"
        >
        <v-list-item
          :key="item.slug"
        >
          <v-list-item-content @click="$router.push({ name: 'vacancy', params: { slug: item.slug } })">
            <v-list-item-title v-text="item.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         </v-list-item-group>
      </template>
    </v-virtual-scroll>

    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="6"
        color="green"
      />
    </div>
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
    page: 1,
  }),
  methods: {
    ...mapActions(["getJobsList", "getFilteredJobsList"]),
  },
  computed: {
    ...mapGetters(["filteredJobsList", "cities", "tags"]),
    listHeight() {
      return window.innerHeight - 275;
    }
  },
  created() {
    this.getJobsList(this.page)
  },
  watch: {
    filter: {
      handler(val) {
        this.getFilteredJobsList(val)
      },
      deep: true
    },
    page: {
      handler(val) {
        this.getJobsList(val)
      }
    }
  },
}
</script>