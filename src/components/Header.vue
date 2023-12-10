<template>
    <header>
        <div class="bg">

            <nav-bar />
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
    background-size: cover;
    height: 100vh; 
    color: #fff;
    font-family: 'Tajawal', sans-serif;
    position: relative;
    background:rgb(8 50 105 / 56%); 
    background-image: url('../assets/cover.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top;
}

.bg { 
    position: absolute;
    background: rgb(7 50 107 / 69%); 
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
 

.main {
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    font-size: 1.2rem;
    height: 50vh;

}
h1{
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
}
</style>