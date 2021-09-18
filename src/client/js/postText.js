//Global variable
//Meaningcloud website
const url = "http://api.meaningcloud.com/sentiment-2.1";

function createPostReq(inputText, apiKey){
    // create url path
    console.log("::: Running postText :::", inputText);
    const formdata = new FormData();
    formdata.append("key", apiKey);
    formdata.append("url", inputText);
    formdata.append("lang","en");

    const requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    //call postAPI function
    postText(url, requestOptions);
}

const postText = async (url, requestOptions) => {
    const response = await fetch(url, requestOptions);
    try {
        // data returned from MeaningCloud
        const newData = await response.json();
        const status = response.status;
        Client.createTable(newData);
    }catch(error) {
        console.log("error", error);
    }
};

export { createPostReq };
export { postText };


