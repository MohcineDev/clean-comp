<template>
    <HeaderComp />
    <Posts />
    <Services /> 
    <MapLocation />
    <About />
    <FooterComp />

</template>

<script setup>
import HeaderComp from '../components/Header.vue'
import { RouterLink, RouterView } from 'vue-router'
import InPost from '../components/InPost.vue'
import FooterComp from '../components/FooterComp.vue'
import Posts from '../components/Posts.vue'
import MapLocation from '../components/MapLocation.vue'
import About from '../components/About.vue'
import Services from '@/components/Services.vue'

</script>
 

<style scoped></style>
