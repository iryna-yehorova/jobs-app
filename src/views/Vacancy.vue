<template>
    <v-card class="ma-2">
        <v-card-title class="font-weight-bold"> {{ vacancy.title }} </v-card-title>
        <v-card-text>
            <v-row>
                <v-col cols="9" class="pb-0">
                    <div class="body-1">
                        <span class="subtitle-1 font-weight-bold">Company name: </span>
                        {{ vacancy.companyName }}
                    </div>
                    <div class="body-1">
                        <span v-html="vacancy.description"/>
                    </div>
                </v-col>
                <v-col class="pb-0">
                    <v-card outlined class="pa-3">
                        <div>
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
                        <div class="body-1">
                            <span class="subtitle-1 font-weight-bold">Remote: </span>
                            {{ vacancy.remote ? 'Yes' : 'No' }}
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
                    </v-card>
                </v-col>
            </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-end mr-5">
            <v-btn @click="$router.go(-1)">Go back</v-btn>
            <v-btn
                :href="vacancy.url"
                target="_blank"
                link
                class="ml-5 pa-3 white--text"
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
