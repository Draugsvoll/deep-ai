
const state = {
    caption: '',
    celebrities: [],
    faces: [],
    objects: [],
    emotions: [],
    images: [],
    currentImage: {},
    processing: false
}


const mutations = {
    'SET_CAPTION' (state, caption) {
        caption = caption.description.captions[0].text
        state.caption = caption
        state.processing = false
    },
    'SET_CELEBRITIES' (state, celebrities) {
        if (celebrities == null || celebrities.length == 0 ) {
            state.celebrities = [{name: 'No celebrity found', confidence: 0.98}]
        } else {
            state.celebrities = celebrities
        }
        state.processing = false
    },
    'SET_FACES' (state, faces) {
        state.faces = []
        const facesList = faces.output.faces
        var counter = 0
        facesList.forEach( face => {
            const newFace = { ageRange1: face.age_range[0], ageRange2: face.age_range[1], skinTone: face.cultural_appearance, skinToneConfidence:face.cultural_appearance_confidence 
                            , gender: face.gender, genderConfidence: face.gender_confidence }
            console.log('LOGGING FACE: ', newFace)
            counter++
            if ( counter < 6) { state.faces.push(newFace)  }
        })
        state.processing = false
    },
    'SET_OBJECTS' (state, objects) {
        state.objects = objects
        state.processing = false
    },
    'SET_EMOTIONS' (state, emotions) {
        state.emotions = []
        var list = emotions.output.expressions
        list.map(emotion => {
            const newEmotion = { emotion: emotion.emotion, accuracy: emotion.confidence }
                state.emotions.push(newEmotion)
        })
        state.processing = false
    },
    'SET_IMAGES' (state, images) {
        state.images = []
        images.map( image => {
            state.images.push(image)
        })
        state.processing = false
    },
    'SET_CURRENT_IMAGE' (state, currentImage) {
        state.currentImage = currentImage
        state.processing = false
    },
    'SET_PROCESSING' (state) {
        state.processing = true
    },
    'CLEAR_DATA' (state) {
        state.caption = '',
        state.faces = [],
        state.celebrities = [],
        state.objects = [],
        state.emotions = []
    }
}

const actions = {   // aviable actions on this site
    setcaption: ({ commit }, caption) => {
        commit('SET_CAPTION', caption)  // commits 'BUY_STOCK' mutation defined in portfolio module
    },
    setcelebrities: ({ commit }, celebrities) => {
        commit('SET_CELEBRITIES', celebrities)  // commits 'BUY_STOCK' mutation defined in portfolio module
    },
    setfaces: ({ commit }, faces) => {
        commit('SET_FACES', faces)
    },
    setobjects: ({ commit }, objects) => {
        commit('SET_OBJECTS', objects)
    },
    setemotions: ({ commit }, emotions) => {
        commit('SET_EMOTIONS', emotions)
    },
    setimages: ({ commit }, images) => {
        commit('SET_IMAGES', images)
    },
    setcurrentimg: ({ commit }, currentImage) => {
        commit('SET_CURRENT_IMAGE', currentImage)
    },
    setprocessing: ({ commit }) => {
        commit('SET_PROCESSING')
    },
    cleardata: ({commit }) => {
        commit('CLEAR_DATA')
    }
}

const getters = {
    caption(state) {
        return state.caption
    },
    celebrities(state) {
        return state.celebrities
    },
    faces(state) {
        return state.faces
    },
    objects(state) {
        return state.objects
    },
    emotions(state) {
        return state.emotions
    },
    images(state) {
        return state.images
    },
    currentImage(state) {
        return state.currentImage
    },
    processing(state) {
        return state.processing
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

