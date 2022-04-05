<template>
<v-card class="ma-2">
    <v-card-title> {{ vacancy.title }} </v-card-title>
    <v-card-text>
        <div>
            <span>Company name: </span>
            {{ vacancy.company_name }}
        </div>
        <div>
            <span>Job description: </span>
            <span v-html="vacancy.description"/>
        </div>
         <div>
            <span>Job description: </span>
            <v-chip v-for="(type, index) in vacancy.job_types"
            :key="index"
            class="ma-2"
            color="green"
            text-color="white"
            >
            {{ type }}
            </v-chip>
        </div>
        <div>
            <span>Remote: </span>
            <span> {{ vacancy.remote ? 'Yes' : 'No' }} </span>
        </div>
        <div>
            <span>Location: </span>
            {{ vacancy.location }}
        </div>
        <div>
            <span>Tags: </span>
            <v-chip v-for="(label, index) in vacancy.tags"
            :key="index"
            class="ma-2"
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
        href="vacancy.url"
        target="_blank"
        text
        class="mr-2"
      >
        Go to the company site
      </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: {
        slug: String,
        vacancy: Object
    }
}
</script>
