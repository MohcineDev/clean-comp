<template>
     <header>
        <nav-bar/>
        <div class="main">

            <h1>مرحباً بك في شركة <span>هَانِي كلِين</span> للتنظيف</h1>
            <p>خدمات تنظيف عالية الجودة للمنازل والشركات</p>
<wts-button/>
        </div>
    </header>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import wtsButton from './wtsButton.vue';
</script>
<style scoped>

header{
    background-image: url('../assets/cover.png');
    background-size: cover;
    height: 100vh;
    z-index: -1;
    color: #fff;
    font-family: 'Tajawal', sans-serif; 
position: relative;
}

header::before{
    content: "";
    position: absolute;   
    background: #07326b;
    opacity: 0.65;
    width: 100%;
    height: 100%;
    z-index: -1;
}
.main{ 
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column;
    font-size: 1.2rem;
   height: 50vh;

}
h1, p, span{
    font-weight: 700;
}
h1 span{
    border-bottom: 3px solid var(--yellow-logo);
    background-color: var(--yellow-logo);
    padding: 0 5px;
    border-radius: 8px;
    color:var(--dark-blue-logo);
}
</style>