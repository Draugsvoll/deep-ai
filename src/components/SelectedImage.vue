<template>
    <div class="container">
    
        <!-- SELECTED IMAGE -->
        <div class="selected-img-container">
            <div>Selected Image:</div>
            <img class="selected-img" v-bind:src="selectedImage" alt="" srcset="">
            <div></div>
            What data do you want from the Ai?
            <br>
            <button @click="getCaption(selectedImage)">Description</button>
            <button @click="getDemographics(selectedImage)" >Face Analysis</button>
            <button @click="getObjects(selectedImage)">Find Objects</button>
            <button @click="getEmotions(selectedImage)">Emotions</button>
        </div>

    </div>
</template>



<script>
// import { getCaptionApi } from '../apiConfig' 
// import axios from 'axios'
export default {
    data () {
        return {
        }
    },
    props: ['selectedImage'],
    methods: {
        //* GET CAPTION
        getCaption (image) {
            var ref = this
            const data = `image=${image}`;
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                // console.log(this.responseText);
                var response = this.responseText
                var response1 = response.split(":")
                var response2 = response1[1].split(",")
                var caption = response2[0]
                ref.caption = caption
                ref.$store.dispatch('setcaption', caption)
            }
            });
            xhr.open("POST", "https://deepai-deepai-computer-vision-v1.p.rapidapi.com/api/neuraltalk");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("api-key", "a570693f-0601-4674-9737-0c617e3668d6");
            xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
            xhr.setRequestHeader("x-rapidapi-host", "deepai-deepai-computer-vision-v1.p.rapidapi.com");
            xhr.send(data);
        },
        //* get demographics
        getDemographics () {
            var ref = this
            const data = `image=${this.selectedImage}`;
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                // console.log(this.responseText);
                var faces = JSON.parse(this.responseText);
                console.log(faces.output.faces);
                ref.$store.dispatch('setfaces', faces)
                }
            });
            xhr.open("POST", "https://deepai-deepai-computer-vision-v1.p.rapidapi.com/api/demographic-recognition");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("api-key", "a570693f-0601-4674-9737-0c617e3668d6");
            xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
            xhr.setRequestHeader("x-rapidapi-host", "deepai-deepai-computer-vision-v1.p.rapidapi.com");
            xhr.send(data);
            },
        //* get objects
        getObjects () {
            const ref = this
            const data = `image=${this.selectedImage}`;
            const xhr = new XMLHttpRequest();
            xhr.withCredentials = true;
            xhr.addEventListener("readystatechange", function () {
                if (this.readyState === this.DONE) {
                    var objects = JSON.parse(this.responseText);
                    ref.$store.dispatch('setobjects', objects)
                }
            });
            xhr.open("POST", "https://deepai-deepai-computer-vision-v1.p.rapidapi.com/api/densecap");
            xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
            xhr.setRequestHeader("api-key", "a570693f-0601-4674-9737-0c617e3668d6");
            xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
            xhr.setRequestHeader("x-rapidapi-host", "deepai-deepai-computer-vision-v1.p.rapidapi.com");
            xhr.send(data);
        },
        //* get emotions
        getEmotions (image) {
            var ref = this
            // var emotions = []
            const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
            deepai.setApiKey('a570693f-0601-4674-9737-0c617e3668d6');
            (async function() {
                var resp = await deepai.callStandardApi("facial-expression-recognition", {
                        image: image,
                });
                var emotions = resp
                ref.$store.dispatch('setemotions', emotions)
            })()
        }
    },//method
}
</script>



<style scoped>
.container {
    margin-top:50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
}
.selected-img-container {
    margin:auto;
    max-width:400px;
    max-height:400px;
}
.selected-img {
  max-width:400px;
  max-height:400px;
}
</style>