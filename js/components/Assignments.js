import AssignmentList from './AssignmentList.js';
import AssignmentCreate from './AssignmentCreate.js';
export default {
    components: {
        AssignmentList,
        AssignmentCreate,
     },
    template: `
        <assignment-list :assignments="filters.inProgress" title="Assignments In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed Progress"></assignment-list>
        <div class="border border-gray-600 text-black">
            <assignment-create @add="add"></assignment-create>
        </div>
    `,
    data() {
        return {
            pageTitle: "Lesson 3 - Lists & Computed Properties",
            assignments: [
                { id: 1, name: 'Finish Project', complete: false, tag: 'math'},
                { id: 2, name: 'Read Chapter 4', complete: false, tag: 'science'},
                { id: 3, name: 'Turn in Homework', complete: false, tag: 'math'},
            ],
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
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1,
            });
        },
    }
}