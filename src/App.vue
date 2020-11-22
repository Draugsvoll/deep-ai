<template>
  <div id="app">

    <app-searchfunction @selectimage="selectImage"></app-searchfunction>
    <app-selectedimage :selectedImage="selectedImage"></app-selectedimage>
    <app-aioutput></app-aioutput>

  </div>
</template>

<script>
import SearchFunction from "./components/SearchFunction"
import SelectedImage from "./components/SelectedImage"
import AiOutput from "./components/AiOutput"

export default {
  name: 'App',
  data () {
    return {
      searchTerm: '',
      selectedImage: '',
      images: [],
      // Ai outputs
      caption: ''
    }
  },
  components: {
    appSearchfunction: SearchFunction,
    appSelectedimage: SelectedImage,
    appAioutput: AiOutput,
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