function handleSubmit(event) {
    event.preventDefault();
    // check text entered in field
    let formText = document.getElementById('name').value;
    // check if url is valide
    isUrlValid(formText);
    //Test prod server is running
    console.log("::: Form Submitted :::");
    fetch('http://localhost:8081/test')
    .then(res => {
        return res.json();
    })
    .then(function(data) {
        document.getElementById('results').innerHTML = data.message;
    })
    // retrieve API from server files
    .then (retrieveAPI(formText));
};

//validate url
function isUrlValid(userInput) {
    let res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if(res == null) {
        alert("Please enter valid url");
        return false;
    }else {
        return true; 
    }
}

const retrieveAPI = async (formText) => {
    // retrieve API key from server side script
    const request = await fetch('http://localhost:8081/all');
        try{
            const returnedData = await request.json();
            const apiKey = returnedData.key;
            // send arguments to postText
            Client.createPostReq(formText, apiKey);
        }catch(error){
            console.log("error", error);
        }
};

export { handleSubmit };
export { retrieveAPI };
export { isUrlValid };
