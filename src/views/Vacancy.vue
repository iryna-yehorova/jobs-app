<template>
<v-card class="ma-2">
    <v-card-title class="font-weight-bold"> {{ vacancy.title }} </v-card-title>
    <v-card-text>
        <div class="body-1">
            <span class="subtitle-1 font-weight-bold">Company name: </span>
            {{ vacancy.companyName }}
        </div>
        <div class="body-1">
            <span v-html="vacancy.description"/>
        </div>
         <div v-if="vacancy.jobTypes.length > 0">
            <span class="subtitle-1 font-weight-bold">Job types: </span>
            <v-chip v-for="(type, index) in vacancy.jobTypes"
                :key="index"
                class="ma-2 body-1"
                color="green"
                text-color="white"
            >
            {{ type }}
            </v-chip>
        </div>
        <div>
            <span class="subtitle-1 font-weight-bold">Remote: </span>
            <span class="body-1"> {{ vacancy.remote ? 'Yes' : 'No' }} </span>
        </div>
        <div class="body-1">
            <span class="subtitle-1 font-weight-bold">Location: </span>
            {{ vacancy.location }}
        </div>
        <div>
            <span class="subtitle-1 font-weight-bold">Tags: </span>
            <v-chip v-for="(label, index) in vacancy.tags"
                :key="index"
                class="ma-2 body-1"
                color="green"
                text-color="white"
            >
            {{ label }}
            </v-chip>
        </div>
    </v-card-text>
    <v-card-actions>
    <v-btn @click="$router.go(-1)">Go back</v-btn>
     <v-btn
        :href="vacancy.url"
        target="_blank"
        link
        class="ml-2 pa-3 white--text"
        color="green"
      >
        Apply
      </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    props: {
        slug: String
    },
    methods: {
        ...mapActions(["getVacancy"])
    },
    computed: mapGetters(["vacancy"]),
    created() {
        this.getVacancy(this.slug)
    }

}
</script>
