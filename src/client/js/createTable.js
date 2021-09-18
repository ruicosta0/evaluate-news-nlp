let createTable = (newData) => {
    // delete existing table
    removeTable();
    // create table body for rows
    createTableBody();
    // create rows for the API data
    createTableRows(newData);
};

// remove extant table from prior API data
let removeTable = () => {
    let table_body = document.getElementById("table_body");
    if(typeof(table_body) != 'undefined' && table_body != null){
        table_body.remove();
    }else{
        // table does not exist
    }
};

// create a new table for API data
let createTableBody = () => {
    let table_body = document.createElement("tbody");
    table_body.id = "table_body";
    return document.getElementById("table").appendChild(table_body);
};


// create table rows
let createTableRows = (newData) => {
    // count number of rows required
    //console.log(newData)
    const countTableRows = newData.sentence_list.length;
    //console.log(countTableRows)
    for(let i=0; i< countTableRows; i++ ) {
        let newRow = document.createElement("tr");
        newRow.id = i;
            for(let i=0; i < 5; i++) {
                let newTD = document.createElement("td");
                newRow.appendChild(newTD);
                }
        let tablebody = document.getElementById("table_body");
        tablebody.appendChild(newRow);
    }
    // fill in the rows with API data
    populateTableRows(newData, countTableRows);
};

// fill in the rows with API data
let populateTableRows = (newData, countTableRows) => {
    for (let i = 0; i < countTableRows; i++){
         let row = document.getElementById(i);
        if(row.id == 0) {
            row.childNodes[0].innerText = "Global";
            row.childNodes[1].innerText = "-";
            row.childNodes[2].innerText = newData.score_tag;
            row.childNodes[3].innerText = newData.agreement;
            row.childNodes[4].innerText = newData.confidence; 
        } else {
            row.childNodes[0].innerText = "Sentence";
            row.childNodes[1].innerText = newData.sentence_list[i].text;
            row.childNodes[2].innerText = newData.sentence_list[i].score_tag;
            row.childNodes[3].innerText = newData.sentence_list[i].agreement;
            row.childNodes[4].innerText = newData.sentence_list[i].confidence;
        }
    }
};

export { createTable };
export { createTableBody };
export { createTableRows };
export { populateTableRows };
export { removeTable };

