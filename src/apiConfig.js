
// * GET CAPTION 
export function getCaptionApi (image) {
    var caption = ''
    const data = `image=${image}`;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
        // console.log(this.responseText);
        var response = this.responseText
        var response1 = response.split(":")
        var response2 = response1[1].split(",")
        caption = response2
        console.log(caption[0])
        return caption[0]
        }
    });
    xhr.open("POST", "https://deepai-deepai-computer-vision-v1.p.rapidapi.com/api/neuraltalk");
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("api-key", "a570693f-0601-4674-9737-0c617e3668d6");
    xhr.setRequestHeader("x-rapidapi-key", "624dc7754bmsh3f19b0e1fbd4882p18e7f1jsn0d9d641d8df8");
    xhr.setRequestHeader("x-rapidapi-host", "deepai-deepai-computer-vision-v1.p.rapidapi.com");
    xhr.send(data);
}

export default {
    getCaptionApi
}