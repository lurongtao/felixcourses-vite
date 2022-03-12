import { createApp } from 'vue'
import App from './App.vue'
import { person } from './test'

console.log(person.age)

createApp(App).mount('#app')
