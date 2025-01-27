import AssignmentList from './AssignmentList.js';
export default {
    components: { AssignmentList },
    template: `
        <assignment-list :assignments="filters.inProgress" title="Assignments In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed Progress"></assignment-list>
        <div class="border border-gray-600 text-black">
            <form @submit.prevent="add">
                <input v-model="newAssignment" placeholder="New Assignment" class="p-2">
                <button class="bg-white p-2 border-l" type="submit">Add New</button>
            </form>
        </div>
    `,
    data() {
        return {
            pageTitle: "Lesson 3 - Lists & Computed Properties",
            assignments: [
                { id: 1, name: 'Finish Project', complete: false},
                { id: 2, name: 'Read Chapter 4', complete: false},
                { id: 3, name: 'Turn in Homework', complete: false},
            ],
            newAssignment: '',
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    },
    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1,
            });
            this.newAssignment = '';
        }
    }
}