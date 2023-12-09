<template>
    <HeaderComp/>
    <Posts/>
    <MapLocation/>
    <FooterComp/>
</template>

<script setup>
import HeaderComp from '../components/Header.vue' 
import { RouterLink, RouterView } from 'vue-router'
import InPost from '../components/InPost.vue'
import FooterComp from '../components/FooterComp.vue'
import Posts from '../components/Posts.vue'
import MapLocation from '../components/MapLocation.vue'

</script>
 

<style scoped>

</style>
