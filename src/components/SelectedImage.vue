<template>
    <div class="container" id="selected-img-container">
        <!-- SELECTED IMAGE -->
        <div class="selected-img-container"  >
            <!-- <h1 class="selected-text">Selected Image:</h1> -->
            <div class="img-row">
                <button class="far fa-chevron-left fa-3x left-btn" @click="prevImage(currentImage)"></button>
                <div class="static-img-box">
                    <img ref="activeImage" @error="$event.target.src='https://tripisia.id/assets/images/NoImage.png'" 
                        class="selected-img" v-bind:src="currentImage.image" srcset=""  > 
                </div>
                <button class="far fa-chevron-right fa-3x right-btn" @click="nextImage(currentImage)"></button>
            </div>
            <div></div>
            <p>What do you want from the Ai? </p> 
            <button class="analyze-btn" @click="getCaption(currentImage.image)">Description</button>
            <!-- <button class="analyze-btn" @click="getDemographics(currentImage.image)" >Face Analysis</button> -->
            <button class="analyze-btn" @click="getObjects(currentImage.image)">Find Objects</button>
            <button class="analyze-btn" @click="getEmotions(currentImage.image)">Emotions</button>
            <button class="analyze-btn" @click="getCelebrity(currentImage.image)">Guess celebrity</button>
            <!-- <button class="analyze-btn" @click="removeBackground(currentImage.image)">remove background</button> -->
            <p class="error">*No response? Image may be invalid format*</p>
            <br>
        </div>

    </div>
</template>



<script>
import axios from 'axios'
// import axios from 'axios'

export default {
    data () {
        return {
        }
    },
    methods: {
        //* remove background
        // removeBackground (image) {
        //     const ref = this
        //     const data = null;
        //     const xhr = new XMLHttpRequest();
        //     xhr.withCredentials = true;
        //     xhr.addEventListener("readystatechange", function () {
        //         if (this.readyState === this.DONE) {
        //             console.log(this.responseText);
        //         }
        //     });
        //     xhr.open("GET", "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg");
        //     xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
        //     xhr.setRequestHeader("x-rapidapi-host", "no-more-background.p.rapidapi.com");
        //     xhr.send(data);
        // },

        //* GET CAPTION
        getCaption (image) {
            var ref = this
            this.$store.dispatch('setprocessing')
            const options = {
            method: 'POST',
            url: 'https://microsoft-computer-vision3.p.rapidapi.com/describe',
            params: {language: 'en', maxCandidates: '1', descriptionExclude: 'Celebrities'},
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': '624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8',
                'x-rapidapi-host': 'microsoft-computer-vision3.p.rapidapi.com'
            },
            data: {
                url: image
            }
            };
            axios.request(options).then(function (response) {
                // console.log(response.data);
                ref.$store.dispatch('setcaption', response.data)
            }).catch(function (error) {
                console.error(error);
            });
        },

        //* get faces
        // getDemographics () {
        //     this.$store.dispatch('setprocessing')
        //     var ref = this
        //     const data = `image=${this.currentImage.image}`;
        //     const xhr = new XMLHttpRequest();
        //     xhr.withCredentials = true;
        //     xhr.addEventListener("readystatechange", function () {
        //         if (this.readyState === this.DONE) {
        //         // console.log(this.responseText);
        //         var faces = JSON.parse(this.responseText);
        //         console.log(faces.output.faces);
        //         ref.$store.dispatch('setfaces', faces)
        //         }
        //     });
        //     xhr.open("POST", "https://deepai-deepai-computer-vision-v1.p.rapidapi.com/api/demographic-recognition");
        //     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        //     xhr.setRequestHeader("api-key", "a570693f-0601-4674-9737-0c617e3668d6");
        //     xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
        //     xhr.setRequestHeader("x-rapidapi-host", "deepai-deepai-computer-vision-v1.p.rapidapi.com");
        //     xhr.send(data);
        //     },

        //* get objects
        getObjects (image) {
            this.$store.dispatch('setprocessing')
            var ref = this
            const options = {
            method: 'POST',
            url: 'https://microsoft-computer-vision3.p.rapidapi.com/describe',
            params: {language: 'en', maxCandidates: '1', descriptionExclude: 'Celebrities'},
            headers: {
                'content-type': 'application/json',
                'x-rapidapi-key': '624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8',
                'x-rapidapi-host': 'microsoft-computer-vision3.p.rapidapi.com'
            },
            data: {
                url: image
            }
            };

            axios.request(options).then(function (response) {
                // console.log(response.data.description.tags)
                var counter = 0
                var objects = response.data.description.tags
                var objectList = []
                objects.forEach(object => {
                    counter++
                    if (counter < 6) {
                        objectList.push(object)
                    }
                })
                // console.log(objectList)
                ref.$store.dispatch('setobjects', objectList)
            }).catch(function (error) {
                console.error(error);
            });
        },

        //* get emotions
        getEmotions (image) {
            this.$store.dispatch('setprocessing')
            var ref = this
            // var emotions = []
            const deepai = require('deepai'); // OR include deepai.min.js as a script tag in your HTML
            deepai.setApiKey('a570693f-0601-4674-9737-0c617e3668d6');
            (async function() {
                var resp = await deepai.callStandardApi("facial-expression-recognition", {
                        image: image,
                });
                var emotions = resp
                // console.log(resp)
                ref.$store.dispatch('setemotions', emotions)
            })()
        },

        //* get celebrity
        getCelebrity (image) {
            this.$store.dispatch('setprocessing')
            var ref = this
            const options = {
                method: 'POST',
                url: 'https://microsoft-computer-vision3.p.rapidapi.com/analyze',
                params: {
                    language: 'en',
                    descriptionExclude: 'Celebrities',
                    visualFeatures: 'ImageType',
                    details: 'Celebrities'
                },
                headers: {
                    'content-type': 'application/json',
                    'x-rapidapi-key': '624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8',
                    'x-rapidapi-host': 'microsoft-computer-vision3.p.rapidapi.com'
                },
                data: {
                    url: image
                }
                };

                axios.request(options).then(function (response) {
                    var celebrities = []
                    var celebrityList = []
                    // console.log(response.data);
                    try {
                        celebrities  = response.data.categories[1].detail.celebrities
                        celebrityList.forEach(element => {
                            celebrityList.push({name: element.name, confidence: element.confidence })
                        })
                    } catch (error) {
                        celebrities  = response.data.categories[0].detail.celebrities
                        celebrityList.forEach(element => {
                            celebrityList.push({name: element.name, confidence: element.confidence })
                        })
                        
                    }
                    // console.log(celebrities)
                    ref.$store.dispatch('setcelebrities', celebrities)
                }).catch(function (error) {
                    ref.$store.dispatch('setcelebrities', null)
                    console.error(error);
                });
        },
        
        imageLoadError () {
            console.log('Image failed to load');
            // index++ --> runs in nextImage, 
        },
        nextImage (currentImage) {
            const ref = this
            this.$refs.activeImage.classList.add('transition')
            ref.$store.dispatch('cleardata')
            var index = currentImage.index
            const images = ref.$store.getters.images
            if (index < 34) {
                index++
            } else {
                index = 0
            }
            const newCurrentImage = { image: images[index], index: index}
            setTimeout(function(){
                ref.$store.dispatch('setcurrentimg', newCurrentImage)
                ref.$refs.activeImage.classList.remove('transition')
            }, 300);
        },
        prevImage (currentImage) {
            const ref = this
            this.$refs.activeImage.classList.add('transition')
            this.$store.dispatch('cleardata')
            var index = currentImage.index
            const images = this.$store.getters.images
            if (index == 0) {
                index = 34
            } else {
                index--
            }
            const newCurrentImage = { image: images[index], index: index}
            setTimeout(function(){
                ref.$store.dispatch('setcurrentimg', newCurrentImage)
                ref.$refs.activeImage.classList.remove('transition')
            }, 300);
        },
        clearData () {
            this.$store.dispatch('cleardata')
        }
    },//method
    computed: {
        images () {
            return this.$store.getters.images
        },
        currentImage () {
            return this.$store.getters.currentImage
        },
    }
}
</script>



<style scoped>
.transition {
    opacity: 0 !important;
}
.container {
    margin-top:70px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    text-align: center;
}
.selected-img-container {
    margin:auto;
    padding-top:35px;
    background: rgba(0, 5, 8, 0.6);
    border: rgb(3, 43, 61) 1px solid;
    border-radius:4px;
    width:789px;
}
.selected-img {
  max-width:500px;
  max-height:310px;
  border-radius:2px;
  opacity: 0.9;
  transition: all 0.3s;
}
.static-img-box {
    width:500px;
    height:310px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.img-row{
    display: flex;
}
.left-btn, .right-btn {
    background: rgba(0,0,0,0);
    outline:none;
    padding: 0 15px;
    border:none;
    outline:none;
    cursor:pointer;
    color:rgb(243, 252, 245);
    width:125px;
}
.left-btn:hover, .right-btn:hover {
    color:rgb(121, 152, 160);
}
.selected-text {
    margin-top:14px;
    margin-bottom:12px;
    text-shadow: 0px 4px 5px #000c0e;
    font-size:23px;
    font-weight: 500;
}
.analyze-btn {
  margin:0 5px;
  height:48px;
  width:125px;
  font-size: 13px;
  font-weight: 500;
  outline:none;
  background: rgba(255, 255, 255, 0.18);
  color:white;
  cursor:pointer;
  border: rgb(2, 20, 29) 1px solid;
  border-radius:3px;
  margin-bottom:28px;
}
.analyze-btn:hover {
  background: rgba(255, 255, 255, 0.342);
}
p {
    font-size: 16px;
    margin-bottom:20px;
}
.error {
    font-size:11px;
    margin-top:-2px;
    text-shadow: 0px 4px 5px #011e23;

}


@media only screen and (max-width: 768px) {
  
    .container {
        margin-left:8px;
        margin-right:14px;
}

    .selected-img-container {
        max-width:100%;
    }

    img {
        max-width:100%;
    }
    .selected-img {
        max-width:100%;
    }

}
</style>