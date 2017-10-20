import Vue from 'vue'
import App from './App.vue'

//这里的顺序和重要
export const eventBus = new Vue({
    methods: {
        changeAge(age){
            this.$emit('ageWasEdited', age);
        }
    }
});
new Vue({
  el: '#app',
  render: h => h(App)
})


