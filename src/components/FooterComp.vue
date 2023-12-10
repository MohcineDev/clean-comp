<template>
    <footer>
        <div class="wrapper">

            <div class="contact">
                <h3>تواصل معنا</h3>
                <p>CASABLANCA - MOHAMMÉDIA - BOUSKOURA</p>
                <p>0701-206892</p>
                <p>email@domain</p>
                <p>@hani.clean</p>
            </div>
            <div class="slogan">
                <div>
                    <img src="../assets/clean.webp" alt="clean services" />
                </div>
                <h2>
                    شركة هَانِي كلِين للتنظيف <br>
                    خدمات تنظيف عالية الجودة للمنازل والشركات

                </h2>
            </div>
            <div class="foot">
                <p dir="rtl"> hani.clean للتنظيف &copy; 2023</p>
                <p>جميع الحقوق محفوظة</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background-color: var(--dark-blue-logo);
    font-family: var(--font-family);
    color: #fff;
    padding: 1rem;
}

.wrapper {
    max-width: 90%;
    margin: auto;
    display: grid;
    grid-template-areas: "left right"
        "bottom bottom";
    gap: 10px;
}

h3 {
    font-size: 14px;
    font-weight: 800;
    position: relative;
    display: inline-block;
    margin-left: 24px;
}

h3::before {
    content: "";
    position: absolute;
    width: 22px;
    height: 3px;
    background-color: #fff;
    top: calc(50% - 2px);
    left: -24px;
}

.wrapper>div {
    padding: 1rem;
}

.contact {
    grid-area: left;
}

.slogan {
    grid-area: right;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.slogan>div:nth-of-type(1) {
    width: 160px;
    height: 160px;
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

}

.slogan>div:nth-of-type(1)::before,
.slogan>div:nth-of-type(1)::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-style: dashed;
    border-color: #fff;
}

.slogan>div:nth-of-type(1)::before {
    top: 0;
    right: 0;
    border-width: 2px 2px 0 0;
}

.slogan>div:nth-of-type(1)::after {
    left: 0;
    bottom: 0;
    border-width: 0 0 2px 2px;
}

.slogan img {
    border-radius: 50%;
    width: 150px;
    border-style: dashed;
    position: relative;
    border-width: 2px;
    border-color: #fff;
    background-color: var(--dark-blue-logo);
}


.foot {
    grid-area: bottom;
    text-align: center;   
     margin-top: 3rem;
}
</style>