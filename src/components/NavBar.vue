<template>
    <nav>
        <div>

            <img src="../assets/clean.webp" alt="">
            <span>هَانِي كلِين
</span>
        </div>

    </nav>
</template>


<style scoped>
nav{
    background-color: var(--dark-blue-logo);
    padding: 8px 3rem;
    display: flex;
    font-family: 'Tajawal', sans-serif;
    align-items: center;
    color: #fff;
}

nav>div{
    display: flex;
    align-items: center;
}
span{
    font-size: 20px;
    font-weight: 700;
    margin: 0 5px;
}
img{
    width: 30px;
    border-radius: 50%; 
    box-shadow: 0 0 0 2px var(--yellow-logo);
}
</style>