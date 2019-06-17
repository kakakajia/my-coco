import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        menu1010:[],
        user:null,
        islogin:false,
    },
    getters:{
        getMenu1010:state=>state.menu1010,
        getuser:state=>state.user,
        getislogin:state=>state.islogin
    },
    mutations:{
        pushMenu1010(state,data){
            state.menu1010.push(data)
        },
        setMenu1010(state,data){
            state.menu1010=data
        },
        deleMenu1010(state,data){
            state.menu1010.splice(data,1)
        }
    },
    actions:{}
})