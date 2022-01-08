let app = Vue.createApp({
    data() {
        return {
            enteredGoal: '',
            goal: []
        }
    },
    computed: {
        isThereGoal() {
            return this.goal.length === 0
        }
    },
    methods: {
        addGoal() {
            this.goal.push(this.enteredGoal)
        }
    }
});

app.mount('#root')