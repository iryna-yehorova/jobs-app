import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        jobsList: [],
        vacancy: {},
        filteredJobsList: [],
        cities: [],
        tags: []
    },
    getters: {
        jobsList(state) {
            return state.jobsList;
        },
        vacancy(state) {
            return state.vacancy;
        },
        cities(state) {
            return state.cities;
        },
        tags(state) {
            return state.tags;
        },
        filteredJobsList(state) {
            return state.filteredJobsList;
        },
    },
    mutations: {
        setJobsList(state, items) {
            state.jobsList = items;
        },
        setVacancy(state, vacancy) {
            state.vacancy = vacancy;
        },
        setCities(state, cities) {
            state.cities = cities;
        },
        setTags(state, tags) {
            state.tags = tags;
        },
        setFilteredJobsList(state, items) {
            state.filteredJobsList = items;
        }
    },
    actions: {
        getJobsList({ commit, dispatch }, page) {
            const url = 'https://www.arbeitnow.com/api/job-board-api?page='
            fetch(`${url}${page}`)
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
                    commit('setJobsList', [ ...this.state.jobsList, ...list])
                    commit('setFilteredJobsList', [ ...this.state.jobsList, ...list])
                    dispatch('getCitiesList')
                    dispatch('getTagsList')
                })
        },
        getVacancy({ commit }, slug) {
            const job =  this.state.jobsList.find(j => j.slug === slug)
            commit('setVacancy', job)
        },
        getCitiesList({ commit }) {
            const allList = this.state.jobsList.map(j => j.location);
            const uniqList = [ ...new Set(allList)];
            const list = uniqList.sort()
            commit('setCities',  list)
        },
        getTagsList({ commit }) {
            let allList = []
            this.state.jobsList.forEach(j => allList = [...j.tags, ...allList]);
            const uniqList = [ ...new Set(allList)];
            const list = uniqList.sort()
            commit('setTags',  list)
        },
        getFilteredJobsList({ commit }, filter) {
            let list = this.state.jobsList;

            if (filter.remote && filter.remote.text) {
                list = list.filter(l => l.remote === filter.remote.value)
            }

            if (filter.city && filter.city.length > 0) {
                list = list.reduce((list, job) => {
                    if (filter.city.find(c => c === job.location)) {
                        list.push(job)
                    }
                    return list
                }, [])
            }

            if (filter.tag && filter.tag.length > 0) {
                list = list.reduce((list, job) => {
                    if (filter.tag.some(tag => job.tags.includes(tag))) {
                        list.push(job)
                    }
                    return list
                }, [])
            }

            commit('setFilteredJobsList', [ ...new Set(list)])
        }
    }
});

export default store;