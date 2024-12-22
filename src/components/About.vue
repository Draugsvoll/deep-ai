<template>
    <div class="container" id="about">
        <h1>About Imager</h1>
        <!-- <h3 class="sub-headline">Leveraging multiple AI´s</h3> -->
        <p class="text">This application leverages multiple API's to give you an 
            experience of artificial intelligence, which is open to anyone.
            AI is still messy and problematic, but it´s constantly improving at a high rate.
             There's no telling where this technology can bring us in the future.
        </p>   
        <div class="elon-box">
            <div>
                <p class="quote">" Never spend 5 minutes doing a task manually, when you can spend 5 hours automating it "</p>
            </div>
            <div><img src="../../public/elon.jpg" alt=""></div>
        </div>
    </div>
</template>



<style scoped>
h1 {
    font-size: 24px;
    margin-bottom: -20px;
    margin-top:25px;
    text-shadow: 0px 5px 8px #011b23;
    font-weight: 500;
    letter-spacing: 0.02rem;
}
.container {
    margin-top:25px;
    margin-bottom:150px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
    max-width: 700px;
    margin:auto;
    color:white;
    padding:15px;
    background: rgba(0, 5, 8, 0.55);
    border:none;
    border-radius:4px;
  backdrop-filter: blur(2px);
}
ul {
    text-align: start;
    margin-top:80px;
    font-size: 17px;
}
.text {
    font-size:14px;
    max-width:593px;
    letter-spacing: 0.04rem;
    text-align: justify;
    margin:60px auto;
    text-shadow: 0px 3px 4px #011b23;
    line-height: 1.2;

}
.sub-headline {
    font-size: 19px;
    margin: 45px auto -75px auto;
}
img {
    max-width:160px;
    background-size: cover;
    margin:0 0px 0 50px;
    border-radius:4px;
}
.elon-box {
    max-width:575px;
    margin:5px auto 65px auto;
    align-items:center;
}
.elon-box {
    display: inline-flex;
}
.quote {
    font-size: 17px;
    max-width:300px;
    vertical-align: middle;
    align-items: center;
    align-self: center;
    margin: auto auto;
}
.points {
    margin:auto;
    margin-top:-100px;
    margin-bottom: 80px;
}


@media only screen and (max-width: 468px) {
  
    .container {
        padding-left:15px;
        padding-right:15px;
        margin-left:8px;
        margin-right:8px;
}

}
</style>