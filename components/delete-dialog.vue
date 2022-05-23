<script setup lang="ts">
import { TrashIcon } from '@heroicons/vue/outline';
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';

const { show, titleName, contentName } = defineProps({
    show: {
        type: Boolean,
        required: true
    },
    titleName: {
        type: String,
        required: true
    },
    contentName: {
        type: String,
        required: true
    }
});

const emit = defineEmits<{
    (event: 'close'): void,
    (event: 'yes'): void,
    (event: 'no'): void
}>();
</script>

<template>
    <TransitionRoot as="template" :show="show">
        <Dialog as="div" class="fixed z-10 inset-0 overflow-y-auto" @close="emit('close')">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-200" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <DialogOverlay
                        class="fixed inset-0 bg-gray-500 dark:bg-gray-800 !bg-opacity-75 transition-opacity duration-200 ease-in-out" />
                </TransitionChild>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <TransitionChild as="template" enter="ease-out duration-200"
                    enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                    leave-from="opacity-100 translate-y-0 sm:scale-100"
                    leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div
                        class="inline-block align-bottom bg-white dark:bg-gray-700 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all duration-200 ease-in-out sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                        <div>
                            <div
                                class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-800">
                                <TrashIcon class="h-6 w-6 text-red-600 dark:text-red-300" aria-hidden="true" />
                            </div>
                            <div class="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" class="text-lg leading-6 font-medium global-text">
                                    Delete {{ titleName }}?
                                </DialogTitle>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 dark:text-gray-400">
                                        Do you really want to remove {{ contentName }} from this list?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6 flex space-x-5">
                            <button type="button"
                                class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-gray-700 focus:ring-red-500 sm:text-sm transition-shadow"
                                @click="emit('yes')">Yes</button>
                            <button type="button"
                                class="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-gray-700 focus:ring-green-500 sm:text-sm transition-shadow"
                                @click="emit('no')">No</button>
                        </div>
                    </div>
                </TransitionChild>
            </div>
        </Dialog>
    </TransitionRoot>
</template>