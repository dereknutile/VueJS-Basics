export default {
    template: `
        <button
            :class="{
                'border rounded px-5 py-2 disabled:cursor-not-allowed mr-1': true,
                'bg-gray-200 hover:bg-gray-400': type === 'primary',
                'border-none underline text-blue-500': type === 'cancel',
                'bg-red-200 hover:bg-red-400': type === 'delete',
                'is-loading': processing,
            }"
            :disabled="processing"
            @click="processing = true"
        >
            <slot />
        </button>
    `,
    props: {
        type: {
            type: String,
            default: 'primary',
        },
        processing: {
            type: Boolean,
            default: false,
        }
    }
}