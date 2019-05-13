import Axios from "axios";

const state = () =>({
    todos: [],
    pages: 1
})

const mutations = {
    SET_TODOS(state, payload){
        state.todos = payload
    }
}

const actions = {
    getTodos({commit, state}){
        return new Promise((resolve, reject)=> {
            Axios.get(`/api/todo?page=${state.pages}`).then((res) =>{
                commit('SET_TODOS', res.data)
                resolve(res.data)
            })
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}
