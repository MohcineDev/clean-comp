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
                <img src="../assets/clean.webp" alt="clean services" />
                <p>slogan here it goes </p>
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
    background-color: brown;
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
}

.slogan img {
    border-radius: 50%;
}

.foot {
    grid-area: bottom;
    text-align: center;
}
</style>