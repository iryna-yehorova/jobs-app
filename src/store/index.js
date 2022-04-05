import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        jobsList: [],
        vacancy: {}
    },
    getters: {
        jobsList(state) {
            return state.jobsList;
        },
        vacancy(state) {
            return state.vacancy;
        }
    },
    mutations: {
        setJobsList(state, items) {
            state.jobsList = items;
        },
        setVacancy(state, vacancy) {
            state.vacancy = vacancy;
        },
    },
    actions: {
        getJobsList({ commit }) {
            fetch('https://www.arbeitnow.com/api/job-board-api')
                .then(response => response.json())
                .then(jobs => {
                    const list = jobs.data.map(j => {
                        return {
                            slug: j.slug,
                            companyName: j.company_name,
                            title: j.title,
                            description: j.description,
                            remote: j.remote,
                            url: j.url,
                            tags: j.tags,
                            jobTypes: j.job_types,
                            location: j.location,
                            createdAt: j.created_at
                        }
                    })
                    commit('setJobsList', list)
                })
        },
        getVacancy({ commit }, slug) {
            const job =  this.state.jobsList.find(j => j.slug === slug)
            commit('setVacancy', job)
        }
    }
});

export default store;