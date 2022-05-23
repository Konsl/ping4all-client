<script setup lang="ts">
const { password, modelValue } = defineProps({
    password: {
        type: Boolean,
        default: false,
        required: false
    },
    placeholder: {
        type: String,
        default: '',
        required: false
    },
    modelValue: {
        type: String,
        default: '',
        required: true
    }
});

const emit = defineEmits<{
    (event: 'change', value: string): void,
    (event: 'update:modelValue', value: string): void,
    (event: 'enter'): void
}>();

function updateModel(event: KeyboardEvent) {
    emit('update:modelValue', event.target.value);
}
</script>

<template>
    <input
        class="bg-gray-300 dark:bg-gray-700 focus:bg-gray-400 dark:focus:bg-gray-600 global-text border-none focus-ui-element p-3 rounded-lg transition duration-200 ease-in-out"
        :type="password ? 'password' : 'text'" :value="modelValue" :placeholder="placeholder"
        @input="updateModel($event); emit('change', $event.target.value)"
        @keypress="if ($event.key === 'Enter') { emit('enter'); }" />
</template>