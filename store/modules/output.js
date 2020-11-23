
const state = {
    caption: '',
    faces: [],
    objects: []
}


const mutations = {
    'SET_CAPTION' (state, caption) {
        state.caption = caption
    },
    'SET_FACES' (state, faces) {
        const facesList = faces.output.faces
        facesList.forEach( face => {
            const newFace = { ageRange1: face.age_range[0], ageRange2: face.age_range[1], skinTone: face.cultural_appearance, skinToneConfidence:face.cultural_appearance_confidence 
                            , gender: face.gender, genderConfidence: face.gender_confidence }
            console.log('LOGGING FACE: ', newFace)
            state.faces.push(newFace)
        })
    },
    'SET_OBJECTS' (state, objects) {
        var objectList = objects.output.captions
        console.log(objectList)
        objectList.forEach(object => {
            const newObject = { caption: object.caption }
            state.objects.push(newObject.caption)
        });
    }
}

const actions = {   // aviable actions on this site
    setcaption: ({ commit }, caption) => {
        commit('SET_CAPTION', caption)  // commits 'BUY_STOCK' mutation defined in portfolio module
    },
    setfaces: ({ commit }, faces) => {
        commit('SET_FACES', faces)
    },
    setobjects: ({ commit }, objects) => {
        commit('SET_OBJECTS', objects)
    }
}

const getters = {
    caption(state) {
        return state.caption
    },
    faces(state) {
        return state.faces
    },
    objects(state) {
        return state.objects
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}

