<script setup lang="ts">
import { WebSite, WebSiteList } from '~~/utils/types';

import { RefreshIcon, PlusIcon } from '@heroicons/vue/outline';

const endpoint = `http://localhost:120`;

const { data: websites, pending, refresh } = await useFetch<WebSiteList>(
    `${endpoint}/updateWebsiteList`
);

const removingWebsite = ref<boolean>(false);
const selectedWebsite = ref<WebSite>({
    id: 0,
    name: '',
    url: '',
    enabled: false
});
const addWebsiteURL = ref<string>('');

function removeWebsite(url: string) {
    $fetch(`${endpoint}/removeWebsite`, {
        method: 'POST',
        body: `remove:${url}`,
        headers: { 'Content-Type': 'text/plain' }
    }).then(() => refresh());
}

function toggleWebsite(url: string, enabled: boolean) {
    $fetch(`${endpoint}/activate`, {
        method: 'POST',
        body: `${enabled ? 'activate' : 'deactivate'}&%&${url}`,
        headers: { 'Content-Type': 'text/plain' }
    }).then(() => refresh());
}

function addWebsite(url: string) {
    $fetch(`${endpoint}/addWebsite`, {
        method: 'POST',
        body: `add:${url}`,
        headers: { 'Content-Type': 'text/plain' }
    }).then(() => refresh());
}

</script>

<template>
    <div>
        <div class="max-w-[calc(100%-2rem)] sm:max-w-xl lg:max-w-3xl mx-auto">
            <div class="flex justify-between flex-wrap">
                <UiButton @click="refresh()" :disabled="pending"
                    class="flex items-center justify-center mt-4 w-full sm:w-auto">
                    <RefreshIcon class="h-6 w-6 mr-2" aria-hidden="true" /> Refresh
                </UiButton>
                <div class="flex mt-4 w-full sm:w-auto flex-row">
                    <UiTextInput v-model="addWebsiteURL" @enter="addWebsite(addWebsiteURL); addWebsiteURL = ''"
                        placeholder="Website URL" class="grow min-w-0" />
                    <UiButton class="ml-4 self-end" @click="addWebsite(addWebsiteURL); addWebsiteURL = ''">
                        <PlusIcon class="h-6 w-6" aria-label="add website" />
                    </UiButton>
                </div>
            </div>
            <TransitionGroup move-class="transition-group-active" enter-active-class="transition-group-active"
                leave-active-class="transition-group-active" enter-from-class="transition-group-invisible"
                leave-to-class="transition-group-invisible" class="mt-12 mb-4 space-y-4" tag="ul">
                <li v-for="website in websites.sites" :key="website.url">
                    <WebsiteEntry :website="website" @remove="selectedWebsite = website; removingWebsite = true"
                        @toggle="enabled => toggleWebsite(website.url, enabled)" />
                </li>
            </TransitionGroup>
        </div>
        <DeleteDialog :show="removingWebsite" :title-name="selectedWebsite.name" :content-name="selectedWebsite.url"
            @close="removingWebsite = false" @no="removingWebsite = false"
            @yes="removingWebsite = false; removeWebsite(selectedWebsite.url)" />
    </div>
</template>