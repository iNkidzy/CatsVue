<template>
    <Suspense> <!--Like an if check but works better with aysincs-->
        <template #default>
            <cats/>
        </template>
        <template #fallback>
            Loading...
        </template>
    </Suspense>
</template>

<script setup>
import cats from '../components/CatsComponent.vue'



</script>

<style lang="scss" scoped>

</style>