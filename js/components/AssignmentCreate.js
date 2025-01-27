export default {
    template: `
        <form @submit.prevent="add">
            <input v-model="newAssignment" placeholder="New Assignment" class="p-2">
            <button class="bg-white p-2 border-l" type="submit">Add New</button>
        </form>
    `,
    data() {
        return {
            newAssignment: ''
        }
    },
    methods: {
        add() {
            this.$emit('add',this.newAssignment);
            this.newAssignment = '';
        }
    }
}