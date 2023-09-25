const inputBox = document.querySelector('.inputBx');
const listContainer = document.querySelector('.list-container ul')


function addList (){
    if (inputBox.value===''){
        alert("Please Enter Task")
    }else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ='×';
        li.appendChild(span);
        saveData()
    }
    inputBox.value = '';
}


listContainer.addEventListener("click",(e)=>{
    console.log(e);
    if (e.target.tagName ==='LI'){
        e.target.classList.toggle('checked');
        saveData();
    } else if (e.target.tagName ==='SPAN'){
        e.target.parentElement.remove()
        saveData();
    }

})


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask()