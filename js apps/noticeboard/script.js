let noticeBox = document.getElementById("noticeBox");

async function getData(){
    let data = await fetch("http://127.0.0.1:5000/");
    let result = await data.json();
    return result;
}

function showData(result){
    console.log(result.rows.row[0]["cell"])
    for(let i=0; i<=9; i++){
        let notice = document.createElement("div");
        noticeBox.appendChild(notice);
        let heading = document.createElement("h2");
        heading.textContent = `${result.rows.row[i]["cell"][1]} | ${result.rows.row[0]["cell"][2]} | ${result.rows.row[i]["cell"][3]}`;
        notice.appendChild(heading);
        let dateTime = document.createElement("p");
        dateTime.textContent = `${result.rows.row[i]["cell"][6]}`;
        notice.appendChild(dateTime);
        notice.innerHTML += result.rows.row[i]["cell"][4];
        let separator = document.createElement("hr");
        notice.appendChild(separator);
    }
}

async function chalao(){
    let result = await getData();
    showData(result);
}

chalao()
