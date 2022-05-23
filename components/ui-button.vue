<script setup lang="ts">
const { disabled } = defineProps({
    disabled: {
        type: Boolean,
        required: false,
        default: false
    }
})

const emit = defineEmits<{
    (event: 'click'): void
}>();
</script>

<template>
    <button
        class="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 focus-ui-element global-text p-3 rounded-lg transition duration-200 ease-in-out"
        :class="{ 'opacity-50': disabled }" :disabled="disabled" @click="emit('click')">
        <slot />
    </button>
</template>