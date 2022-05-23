<script setup lang="ts">
import { WebSite } from '~~/utils/types';

import { TrashIcon, ExternalLinkIcon } from '@heroicons/vue/outline';
import { Switch } from '@headlessui/vue';

const { website } = defineProps({
    website: {
        type: Object as () => WebSite,
        required: true
    }
})

const emit = defineEmits<{
    (event: 'remove'): void,
    (event: 'toggle', enabled: boolean): void
}>();
</script>

<template>
    <div class="global-text transition-opacity duration-200 ease-in-out" :class="{ 'opacity-50': !website.enabled }">
        <div class="flex items-center justify-between rounded-lg p-4 bg-gray-300 dark:bg-gray-700">
            <a class="flex focus-link transition-colors duration-200 ease-in-out grow w-full min-w-0"
                :href="website.url" target="blank" :title="website.name">
                <div class="max-w-[calc(100%-2rem)] overflow-ellipsis overflow-hidden">
                    {{ website.name }}
                </div>
                <ExternalLinkIcon class="h-6 w-6 ml-2" aria-hidden="true" />
            </a>
            <div class="flex ml-4">
                <Switch aria-label="enabled" :title="website.enabled ? 'Disable' : 'Enable'" name="Enabled"
                    v-model="website.enabled" :class="website.enabled ? 'bg-green-400' : 'bg-gray-500'"
                    class="relative inline-flex h-6 w-11 items-center rounded-full transition-shadow-transform duration-200 ease-in-out focus-ui-element-light-bg"
                    @update:model-value="emit('toggle', website.enabled)">
                    <span :class="website.enabled ? 'translate-x-6' : 'translate-x-1'"
                        class="inline-block h-4 w-4 rounded-full bg-white transform transition-transform duration-200 ease-in-out" />
                </Switch>
                <button aria-label="delete" title="Delete"
                    class="transition duration-200 ease-in-out rounded-[0.125rem] focus-ui-element-light-bg global-text hover:text-red-400 ml-2"
                    @click.prevent="emit('remove')">
                    <TrashIcon class="h-6 w-6" aria-hidden="true" />
                </button>
            </div>
        </div>
    </div>
</template>