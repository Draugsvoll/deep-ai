<template>
  <div id="app">

    <div class="loader" id="loader" ref="loader">
      <div class="spinner" id="spinner"></div>
    </div>
    <app-header></app-header>
    <app-intro></app-intro>
    <app-searchfunction @selectimage="selectImage"></app-searchfunction>
    <app-selectedimage :selectedImage="selectedImage"></app-selectedimage>
    <app-aioutput></app-aioutput>
    <app-about></app-about>
    <app-footer></app-footer>

  </div>
</template>

<script>
import SearchFunction from "./components/SearchFunction"
import SelectedImage from "./components/SelectedImage"
import AiOutput from "./components/AiOutput"
import Intro from "./components/Intro"
import Header from "./components/Header"
import About from "./components/About"
import Footer from "./components/Footer"

export default {
  name: 'App',
  data () {
    return {
      searchTerm: '',
      selectedImage: '',
      images: [],
    }
  },
  components: {
    appSearchfunction: SearchFunction,
    appSelectedimage: SelectedImage,
    appAioutput: AiOutput,
    appIntro: Intro,
    appHeader: Header,
    appAbout: About,
    appFooter: Footer,
  },
  methods: {
    selectImage (value) {
      this.selectedImage = value;
      // console.log(value)
    }
  },//methods
  mounted () {
    setTimeout(function(){
       document.getElementById('loader').style.visibility = "hidden";
       document.getElementById('spinner').style.visibility = "hidden";
    }, 1500);
  }
}
</script>

<style scoped>
* {
  /* border:2px solid green; */
    /* color:rgb(10, 85, 32); */
    color: rgb(226, 241, 245) !important;
}

.selected-img {
  max-width:400px;
}
  /* LOADING SCREEN */
/* .loading-text {
    background: black;
    position: absolute;
    height:100%;
    width:100%;
    z-index: 99;
    visibility: visible;
} */
  .loader {
    display:flex;
    position:absolute;
    flex-direction:column;
    min-height:100%;
    width:100%;
    background:rgba(17, 24, 30, 0.75);
    z-index:100;
    visibility: visible;
  }
  .spinner {
     visibility: visible;
     position:absolute;
     top: 40%;
     left:50%;
     margin-left:-38px;
     height:80px;
     width:80px;
     -webkit-animation: rotation 0.6s infinite linear;
     -moz-animation: rotation 0.6s infinite linear;
     -o-animation: rotation 0.6s infinite linear;
     animation: rotation 0.6s infinite linear;
     border:10px solid rgba(0,174,239,.25);
     border-top:10px solid rgba(0,174,239,.99);
     border-radius:100%;
     z-index:999;
  }
@-webkit-keyframes rotation {
  from {-webkit-transform: rotate(0deg);}
  to {-webkit-transform: rotate(359deg);}
}
@-moz-keyframes rotation {
  from {-moz-transform: rotate(0deg);}
  to {-moz-transform: rotate(359deg);}
}
@-o-keyframes rotation {
  from {-o-transform: rotate(0deg);}
  to {-o-transform: rotate(359deg);}
}
@keyframes rotation {
  from {transform: rotate(0deg);}
  to {transform: rotate(359deg);}
}
</style>