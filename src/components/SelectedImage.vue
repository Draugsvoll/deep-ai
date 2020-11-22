<template>
    <div class="container">
    
        <!-- SELECTED IMAGE -->
        <div class="selected-img-container">
            <div>Selected Image:</div>
            <img class="selected-img" v-bind:src="selectedImage" alt="" srcset="">
            <div>Get caption</div>
            <button @click="getCaption(selectedImage)">Caption</button>
            <button @click="getDemographics" >Demographics</button>
            <button >Objects</button>
            <button >More</button>
        </div>

    </div>
</template>



<script>
import { getCaptionApi } from '../apiConfig' 

export default {
    props: ['selectedImage'],
    methods: {
    // get Caption
    getCaption (image) {
        // var caption = await getCaptionApi(image)
        // console.log(caption)
        
        },
     // get demographics
    getDemographics () {
        const data = `image=${this.selectedImage}`;
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = true;
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
            // console.log(this.responseText);
            var response = JSON.parse(this.responseText);
            console.log(response.output.faces);
            }
        });
        xhr.open("POST", "https://deepai-deepai-computer-vision-v1.p.rapidapi.com/api/demographic-recognition");
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("api-key", "a570693f-0601-4674-9737-0c617e3668d6");
        xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
        xhr.setRequestHeader("x-rapidapi-host", "deepai-deepai-computer-vision-v1.p.rapidapi.com");
        xhr.send(data);
        }
    }//method
}
</script>



<style scoped>
    .selected-img {
  max-width:400px;
}

</style>