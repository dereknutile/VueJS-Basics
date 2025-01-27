import AssignmentList from './AssignmentList.js';
export default {
    components: { AssignmentList },
    template: `
        <assignment-list :assignments="filters.inProgress" title="Assignments In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed Progress"></assignment-list>
    `,
    data() {
        return {
            pageTitle: "Lesson 3 - Lists & Computed Properties",
            assignments: [
                { id: 1, name: 'Finish Project', complete: false},
                { id: 2, name: 'Read Chapter 4', complete: false},
                { id: 3, name: 'Turn in Homework', complete: false},
            ]
        }
    },
    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => ! assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            }
        }
    }
}