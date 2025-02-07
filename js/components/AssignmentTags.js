export default {
  template: `
        <div class="flex gap-2 mb-4">
            <button
                @click="currentTag = tag"
                v-for="tag in tags"
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-600 text-blue-500': tag === currentTag
                }"
            >
                {{tag}}
            </button>
        </div>
    `,
    computed: {
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    },
};
