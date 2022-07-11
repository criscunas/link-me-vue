<template>

    <!-- Plain modal using slots  -->
    <div v-show="modalOpen" class="fixed inset-0 bg-slate-500 bg-opacity-30 z-50 transition-opacity" aria-hidden="true"></div>

    <div v-show="modalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center"
        role="dialog" aria-modal="true">
        <div class="bg-white rounded shadow-lg overflow-auto max-w-md w-full max-h-full">
            <div class="px-5 py-2">
                <div class="text-right">
                    <button
                        class="text-black"
                        @click.stop="$emit('close-modal')"
                    >
                        X
                    </button>
                </div>
            </div>
            <slot />
        </div>
    </div>
</template>

<script>


export default {
    name: 'LinkModal',
    props: {
        modalOpen: {
            type: Boolean,
        },
        title : {
            type : String,
        }
    },
    emits: ['close-modal'],

}
</script>
