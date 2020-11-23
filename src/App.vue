<template>
  <div id="app">

    <app-intro></app-intro>
    <app-searchfunction @selectimage="selectImage"></app-searchfunction>
    <app-selectedimage :selectedImage="selectedImage"></app-selectedimage>
    <app-aioutput></app-aioutput>

  </div>
</template>

<script>
import SearchFunction from "./components/SearchFunction"
import SelectedImage from "./components/SelectedImage"
import AiOutput from "./components/AiOutput"
import Intro from "./components/Intro"

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
  },
  methods: {
    selectImage (value) {
      this.selectedImage = value;
      console.log(value)
    }
  }//methods
}
</script>

<style scoped>
* {
  /* border:2px solid green; */
}
.selected-img {
  max-width:400px;
}

</style>