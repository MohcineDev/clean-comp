<template>
    <footer>
        <div id="wave"> 
<svg xmlns:xlink="http://www.w3.org/1999/xlink" id="wave" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"> 
<path fill="var(--dark-blue-logo)"   d="M0,80L26.7,66.7C53.3,53,107,27,160,15C213.3,3,267,7,320,8.3C373.3,10,427,10,480,16.7C533.3,23,587,37,640,35C693.3,33,747,17,800,16.7C853.3,17,907,33,960,46.7C1013.3,60,1067,70,1120,70C1173.3,70,1227,60,1280,50C1333.3,40,1387,30,1440,23.3C1493.3,17,1547,13,1600,16.7C1653.3,20,1707,30,1760,40C1813.3,50,1867,60,1920,53.3C1973.3,47,2027,23,2080,23.3C2133.3,23,2187,47,2240,48.3C2293.3,50,2347,30,2400,31.7C2453.3,33,2507,57,2560,55C2613.3,53,2667,27,2720,25C2773.3,23,2827,47,2880,51.7C2933.3,57,2987,43,3040,40C3093.3,37,3147,43,3200,48.3C3253.3,53,3307,57,3360,60C3413.3,63,3467,67,3520,70C3573.3,73,3627,77,3680,71.7C3733.3,67,3787,53,3813,46.7L3840,40L3840,100L3813.3,100C3786.7,100,3733,100,3680,100C3626.7,100,3573,100,3520,100C3466.7,100,3413,100,3360,100C3306.7,100,3253,100,3200,100C3146.7,100,3093,100,3040,100C2986.7,100,2933,100,2880,100C2826.7,100,2773,100,2720,100C2666.7,100,2613,100,2560,100C2506.7,100,2453,100,2400,100C2346.7,100,2293,100,2240,100C2186.7,100,2133,100,2080,100C2026.7,100,1973,100,1920,100C1866.7,100,1813,100,1760,100C1706.7,100,1653,100,1600,100C1546.7,100,1493,100,1440,100C1386.7,100,1333,100,1280,100C1226.7,100,1173,100,1120,100C1066.7,100,1013,100,960,100C906.7,100,853,100,800,100C746.7,100,693,100,640,100C586.7,100,533,100,480,100C426.7,100,373,100,320,100C266.7,100,213,100,160,100C106.7,100,53,100,27,100L0,100Z"/></svg>
        </div>
        <div class="container">

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
        </div>
    </footer>
</template>

<style scoped>
footer {
    font-family: var(--font-family);
    color: #fff;
    position: relative;
}
#wave{
    margin-bottom: -5px;
}
 #wave>svg{
    display: block;
 }
.container{
    padding: 1rem;
    background-color: var(--dark-blue-logo);

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
    margin-right: 24px;
    margin-bottom: 8px;
}

h3::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 3px;
    background-color: #fff;
    top: calc(50% - 2px);
    right: -24px;
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