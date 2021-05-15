import Home from './components/Home.vue'
import Result from './components/Result.vue'
import Submit from './components/Submit.vue'

export const routes = [
    { path: '/', component: Home },
    { path: '/submit', component: Submit }, // Submit our file
    { path: '/result', component: Result }, // Print result
    { path: '*', redirect: '/' }
]