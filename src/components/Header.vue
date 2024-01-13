<template>
    <header>
        <nav-bar />
        <div>
            <div class="avatar">

                <img src="../assets/cleaning-removebg-preview.png" alt="">
            </div>
            <div class="main">

                <h1>مرحباً بك في شركة <span>هَانِي كلِين</span> للتنظيف</h1>
                <p>خدمات تنظيف عالية الجودة للمنازل والشركات</p>
                <wts-button />
            </div>
        </div>
    </header>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import wtsButton from './wtsButton.vue';


</script>


<style scoped>
header {
    background: rgb(177, 227, 235);
    background: linear-gradient(313deg, rgba(177, 227, 235, 1) 0%, rgba(51, 110, 189, 1) 100%);
    height: 100vh;
    color: black;
    font-family: 'Tajawal', sans-serif;
    position: relative;
    /* background:rgb(8 50 105 / 56%);  */
    /* background-image: url('../assets/cover.png'); */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}


.main {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    font-size: 1.2rem;
    height: 50vh;

}

h1 {
    margin: 15px;
}

h1,
p,
span {
    font-weight: 700;
}

h1 span {
    border-bottom: 3px solid var(--yellow-logo);
    background-color: var(--yellow-logo);
    padding: 0 5px;
    border-radius: 8px;
    color: var(--dark-blue-logo);
}</style>