<template>
    <div class="container">

      <!-- SEARCH FIELD -->
      <div class="searchField" id="results">
        <input v-model="searchTerm" type="text" placeholder="Search for anything..." autofocus>
        <button v-scroll-to="'#results'" @click="search(searchTerm)" @keyup.enter="search(searchTerm)" >Search</button>
      </div>
     <!-- <h1>Or</h1> -->

      <!-- WEBCAM -->
      <div class="webcam" @click="toggleWebcam">
        <img src="../../public/webcam.png" width="31" alt="">
        <p class="webcam-text">  Analyze myself <span class="small">(webcam)</span> </p>
      </div>
      <transition name="fade">
        <iframe v-if="showWebcam" v-bind:src=videoSrc allow="camera" width="450" height="275" frameborder="0">
        </iframe>
      </transition>
      <button @click="toggleWebcam" v-if="showWebcam" class="close">Stop</button>

      <!-- IMAGES -->
      <div class="images-container" >
        <!-- <h3>Select Image</h3> -->
        <div class="image" v-for="(image, index) in images" :key=index>
          <!-- single image -->
          <div v-scroll-to="'#scroll-to-element'" @click="selectImage(image, index)"  class="img-container" v-show="images != ''">
            <img class="img" v-bind:src="image" >
          </div>
        </div>
      </div>

      <div id="scroll-to-element"></div>

    </div>
</template>


<script>
import axios from 'axios'

export default {
    data () {
    return {
      searchTerm: 'professional work',
      selectedImage: '',
      images: [],
      showWebcam: false,
      videoSrc: '',
      }
    },
    methods:  {
        //* toggle webcam
        toggleWebcam () {
            this.showWebcam = !this.showWebcam
            if ( this.showWebcam == true) {
              this.videoSrc = 'https://ove-face-analyzer.netlify.app/'
            } else {
              this.videoSrc = ''
            }
        },

        //* search images
        search (searchTerm) {
            var images = []
            const ref = this
            const options = {
            method: 'GET',
            url: 'https://bing-image-search1.p.rapidapi.com/images/search',
            params: {q: this.searchTerm},
            headers: {
                'x-rapidapi-key': '624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8',
                'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com'
            }};
            axios.request(options).then(function (response) {
                response = response.data.value
                Object.entries(response).forEach( image => {
                  const newImage = image[1].contentUrl
                  images.push(newImage)
                })
            ref.$store.dispatch('setimages', images)
            }).catch(function (error) {
                console.error(error);
            });
            this.images = images
          },

      //* selected image
      selectImage(image, index) {
        this.$store.dispatch('cleardata')
        const selectedImage = { image: image, index: index }
        this.$store.dispatch('setcurrentimg', selectedImage)
      },
    },
    created () {
        this.search(this.searchTerm)
        this.searchTerm=''
        const ref = this
         window.addEventListener('keyup', function(event) {
          if (event.keyCode === 13) {
            ref.search('people')
          }
        });
    },
}
</script>

<style scoped>
h3{
  margin:-3px auto 10px auto;
  padding:5px;
  font-size:23px;
  text-align:center;
  font-weight: 500;
}
.container {
  margin-top:0px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height:auto;
  width:100%;
  justify-content: center;

}
.searchField {
  /* margin:auto; */
  margin: 55px auto;
  display: flex;
  justify-content: center;
}
.images-container {
  height:500px;
  width: 85%;
  max-width:1100px;
  flex-grow: 1;
  margin:auto;
  margin-top:50px;
  overflow:auto;
  border: rgb(3, 43, 61) 1px solid;
  border-radius:4px;
  padding:15px;
  background: rgba(0, 5, 8, 0.6);
}

input[type=text] {
  width:240px;
  font-size: 14px;
  padding:0.6rem;
  background:rgba(0, 0, 0, 0.4);
  border:1px solid var(--border-light);
  border-radius:5px;
  color:rgb(243, 246, 245);
  outline:none;
}
::placeholder {
  color:rgb(202, 226, 220);
}
button {
  margin:0 5px;
  width:80px;
  padding:0.56rem;
  font-size: 14px;
  border-radius:5px;
  background: rgba(5, 51, 65, 0.99);
  color:white;
  outline:none;
  cursor:pointer;
  border:1px solid var(--border-light);
}
button:hover {
    background: rgba(9, 65, 83, 0.99);
}
.close {
  margin:auto;
  font-size:15px !important;
  font-family: 'Inter';
  border:none;
  background: rgba(0, 0, 0, 0) !important;
  text-decoration: underline;
}
.close:hover {
color:rgb(173, 223, 255);
}
.img {
  max-width:260px;
  max-height:175px;
  border-radius:2px;
}
.img-container {
  display: inline-block;
  border:1px solid rgba(0, 0, 0, 0);
  margin:7px 1px;
  opacity: 0.85;
}
.img-container:hover {
  border:1px solid rgb(58, 235, 238);
  border:1px solid var(--border-light);
  border-radius: 2px;
}
img {
  vertical-align:top;
  border-radius:2px;
}
/*IMAGES LIST */
.image {
  display: inline;
  padding:10px 5px;
  cursor: pointer;
  height:500px;
  overflow:scroll;
  margin-right: -3px;

}
.small {
  font-size:10px;
}
h1 {
  text-align:center;
  margin-top:-15px;
}
.webcam {
    background: rgb(0 49 66);
    overflow: hidden;
    cursor: pointer;
    margin: auto;
    margin-top: 90px;
    padding:0.55rem 0.35rem;
    padding-right:0rem;
    width: 275px;
    font-size: 14px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    transition: 0.2s;
}
.webcam:hover {
    background-color: rgb(9, 60, 77);
}
.webcam-text {
    margin: auto 0 auto 1rem;
}

iframe {
    margin: auto;
    border: 1px solid rgb(11 63 85);
    overflow: hidden;
    transition: 500ms linear;
}
/* width */
::-webkit-scrollbar {
  width: 7px;
}
/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(8, 84, 84, 0.99);
  border-radius: 10px;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background:rgb(16, 79, 90);
  border-radius: 10px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background:rgb(19, 95, 109);
}

@media only screen and (max-width: 562px) {
  input[type=text] {
    width:100%;
    margin:20px 0;
  }
  button {
    margin:auto auto;
    height:38px;
  }
}

@media only screen and (max-width: 562px) {
  input[type=text] {
    max-width:90%;
    margin:20px 0px;
  }

}

/* TRANSITION */
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s ;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>