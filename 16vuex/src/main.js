import { createApp } from 'vue';
import { createStore } from 'vuex'

import App from './App.vue';

const store = createStore({
    state(){
        return {
            counter: 0,
            isLogedIn: false
        }
    },
    mutations: {
        increment(state){
            state.counter ++;
        },
        increment_dynamic(state, payload){
            state.counter += payload.value
        },
        setAuth(state, payload){
            state.isLogedIn = payload.isAuth;
        }
    },
    actions: {
        increment(context, data){
            setTimeout(()=>{
                context.commit('increment_dynamic', data);
              },2000)
        },
        login(context){
            context.commit('setAuth', {isAuth: true})
        },
        logout(context){
            context.commit('setAuth', {isAuth: false})
        }
    },
    getters: {
        finalCounter(state){
            return state.counter;
        },
        normalizedCounter(state, getters){
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0){
                return 0
            }
            if (finalCounter > 100){
                return 100
            }
            return finalCounter
        },
        getLoginState(state){
            return state.isLogedIn;
        }
    }
})

const app = createApp(App);

app.use(store)

app.mount('#app');
