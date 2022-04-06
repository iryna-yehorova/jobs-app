<template>
  <v-row>
    <v-col cols="8">
      <v-list class="mt-2" shaped>
        <v-list-item-group
          v-model="selectedItem"
        >
          <v-list-item v-for="(item, index) in filteredJobsList"
            :key="index"
          >
            <v-list-item-content @click="$router.push({ name: 'vacancy', params: { slug: item.slug } })">
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-col>
    <v-col cols="4">
      <v-card>
        <v-row class="mt-0">
          <v-col class="pa-0">
            <v-select
              v-model="filter.remote"
              :items="remoteOptions"
              label="Remote possibility"
              single-line
              clearable
              dense
              return-object
              outlined
              hide-details
              color="green"
              item-color="green"
              class="px-5 mt-2"
            />
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col class="pa-0">
            <v-autocomplete
              v-model="filter.city"
              :items="cities"
              dense
              chips
              small-chips
              label="Filter by location"
              multiple
              clearable
              deletable-chips
              outlined
              hide-details
              color="green"
              item-color="green"
              class="px-5 mt-5"
            />
          </v-col>
        </v-row>
        <v-row class="mt-0">
          <v-col class="pa-0">
            <v-autocomplete
              v-model="filter.tag"
              :items="tags"
              dense
              chips
              small-chips
              label="Filter by tags"
              multiple
              outlined
              clearable
              deletable-chips
              hide-details
              color="green"
              item-color="green"
              class="px-5 mt-5 mb-2"
            />
          </v-col>
        </v-row>
      </v-card> 
    </v-col>
  </v-row>
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
    getNextPage() {
      window.onscroll = () => {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.page++
          this.getJobsList(this.page);
          this.clearFilter()
        }
      }
    },
    clearFilter() {
      this.filter = {
        remote: {},
        city: [],
        tag: []
      }
    }
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
  },
  mounted() {
    this.getNextPage();
  }
}
</script>