export default {
    template: `
        <li>
            <label class="flex justify-between align-center p-2">
                {{assignment.name}}
                <input class="ml-2" type="checkbox" v-model="assignment.complete">
            </label>
        </li>
    `,
    props: {
        assignment: Object
    }
}