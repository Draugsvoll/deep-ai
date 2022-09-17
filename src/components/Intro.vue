<template>
    <div class="container">
        <div class="inner-container">
            <div>
                <h1>Imager-Deep-Ai</h1> <br>
                <h3>Get intelligent data from images </h3>
            </div>
            <div>
            </div>
        </div>
      
    </div>
   
</template>



<script>

export default {
}
</script>

<style scoped>
.container {
    text-align: center;
    display: flex;
    justify-content: center;
}
.inner-container {
}
h1 {
    font-size: 42px;
    margin-top:40px;
    margin-bottom:-25px;
    text-shadow: 4px 4px 7px #062b36;
    user-select: none;
    letter-spacing:2px;
}
h3 {
    font-size: 17px;
    font-weight: 500;
    text-shadow: 4px 4px 7px #062b36f1;

}
.sub-headline {
    margin-top: 10px;
}
.points {
    margin:3px;
    font-weight: 600;
    text-align: start;
    margin-left: 120px;
}
img {
    margin-bottom: 50px;
    width:400px;
    border-radius:30px;
    opacity:0.95;
    /* border:1px solid rgb(1, 10, 12); */
}

@media only screen and (max-width: 1000px) {
    h1 {
        font-size: 35px;
    }
}

</style>
