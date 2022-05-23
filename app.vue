<template>
    <div>
        <Head>
            <Title>Ping4All</Title>
            <Html lang="en-us" />
            <Meta name="description" content="Ping4All"/>
        </Head>
        <NuxtPage />
    </div>
</template>

<style lang="scss">
body {
    @apply bg-gray-50 dark:bg-gray-800;
}

.global-text {
    @apply text-gray-900 dark:text-gray-50;
}

*:not(button,input) {
    @apply transition-colors duration-200 ease-in-out;
}

.transition-group-active {
    @apply transition-all duration-200 ease-in-out;
}

.transition-group-invisible {
    @apply opacity-0 translate-x-[30px];
}

.focus-ui-element {
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-gray-800 focus:ring-green-500;
}

.focus-ui-element-light-bg {
    @apply focus:outline-none focus:ring-2 focus:ring-offset-2 focus:dark:ring-offset-gray-700 focus:ring-green-500;
}

.focus-link {
    @apply underline decoration-2 decoration-transparent focus:outline-none focus:decoration-green-500;
}

.transition-shadow-transform {
    @apply transition-[transform,box-shadow];
}
</style>
