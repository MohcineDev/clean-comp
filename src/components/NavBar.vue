<template>
    <nav>
        <div> 
            <a href="/">

                <img src="../assets/clean.webp" alt="">
                <span>هَانِي كلِين</span>
            </a>
            <div class="links">
                <a href="#about">من نحن </a>
                &nbsp;  
                <a href="#services">خدماتنا</a>
            </div>
        </div>
         

    </nav>
</template>


<style scoped>
nav {
    background-color: var(--dark-blue-logo);
    padding: 10px 3rem;
    font-family: 'Tajawal', sans-serif;
    color: #fff;
    position: sticky;
    top: 0;
}
nav>div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: auto;
}

nav>div>a {
    display: flex;
    align-items: center;
    color: #fff;
}

span {
    font-size: 20px;
    font-weight: 700;
    margin: 0 5px;
    margin: 0 16px;
}

img {
    width: 30px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px var(--yellow-logo);
}

.links a{
    margin: 0 1rem;
    padding:0 10px ;
    font-size: 1.2rem;
}
</style>