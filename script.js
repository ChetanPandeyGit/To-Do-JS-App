let mainAdd = document.querySelector('#rightMainHeader');
mainAdd.addEventListener('click', addWin1);
let arr = [];
let tempId;let count = 0;
let addTaskWin = document.querySelector(".addTaskWin");
let overlay = document.querySelector(".overlay");
let inputTaskTitle = document.querySelector(".inputTaskTitle");
let mainContainer = document.getElementById("mainContainer");
let addItemWin = document.querySelector(".addItemWin");
let inputItemTitle = document.querySelector(".inputItemTitle");
let itemButton = document.querySelector(".itemButton");
let addSym = [];
let delSym = [];


document.querySelector(".taskButton").addEventListener("click", () => {
  if (inputTaskTitle.value == ""){
    closeTaskWin();
  } 
  else {
    let uniqueId = new Date().valueOf();
    let taskObj = inputTaskTitle.value; 
    let tempTitle = taskObj;
    taskObj = new CreateObj(uniqueId, tempTitle); 
    arr.push(taskObj);
    let div = document.createElement("div"); 
    div.classList.add("cards", uniqueId); 
    let p = document.createElement("p"); 
    p.classList.add("title", uniqueId); 
    p.innerText = inputTaskTitle.value; 
    p.addEventListener('click', function (objInnerPage){
      innerPage(objInnerPage);});
    div.append(p);     
    div.append(document.createElement("hr")); 
    let itemList = document.createElement("div"); 
    itemList.classList.add("itemList", uniqueId); 
    div.append(itemList);     
    let optionDiv = document.createElement("div"); 
    optionDiv.classList.add("optionDiv");    
    let cardAddBtn = document.createElement("i"); 
    cardAddBtn.classList.add("fas", "fa-plus-circle", "cardAddBtn", uniqueId);
    optionDiv.append(cardAddBtn); 
    let cardDelBtn = document.createElement("i"); 
    cardDelBtn.classList.add("fas", "fa-trash-alt", "cardDelBtn", uniqueId);
    optionDiv.append(cardDelBtn); 
    div.append(optionDiv); 
    mainContainer.append(div); 

    addSym = document.getElementsByClassName("cardAddBtn");
    addSym[count].addEventListener('click', function (count) {
      itemAddButton(count.target.classList[3]);
    });
    delSym = document.getElementsByClassName("cardDelBtn");
    delSym[count].addEventListener('click', function (count) {
      itemDelButton(count.target.classList[3]);
    });
    count++;
    if(mainContainer.children.length>=0){
      document.querySelector('.nothing').classList.add('hide');
    }
    closeTaskWin(); 
  }
});

function CreateObj(uniqueId, title) {
  this.uniqueId = uniqueId;
  this.title = title;
}
function addWin1() {
  addTaskWin.classList.remove("addTaskWin");
}
function addWin2() {
  addItemWin.classList.remove("addItemWin");
}
function closeTaskWin() {
  addTaskWin.classList.add("addTaskWin");
  inputTaskTitle.value = "";
}
function closeItemWin() {
  addItemWin.classList.add("addItemWin");
  inputItemTitle.value = "";
}

function innerPage(current){
  document.querySelector('.container').classList.add('hide');
  let temp=document.getElementsByClassName('cards');
  for(let i of temp){
    if(i.classList[1]!=current.target.classList[1]){
      i.classList.add('hide');
    }
    else{
      i.classList.add('innerPageContent');
      innerWindowHeader.style.display='flex';
      innerPageTitle.innerText= `${i.childNodes[0].innerText}`;
      console.log();
    }
  }
}

let innerWindowHeader= document.getElementById('innerWindowHeader');
innerWindowHeader.style.display='none';
let innerPageTitle= document.querySelector('.innerPageTitle');
let innerAddTaskButton= document.querySelector('.innerAddTaskButton');
innerAddTaskButton.addEventListener('click',addWin1);
let innerBackButton= document.querySelector('.innerBackButton');

innerBackButton.addEventListener('click',(x)=>{
  innerWindowHeader.style.display="none";
  document.querySelector('.container').classList.remove('hide');
  let temp=document.getElementsByClassName('cards');
  for(let i of temp){
    i.classList.remove('hide');
  }
  document.querySelector('.innerPageContent').classList.remove('innerPageContent');
});

function itemAddButton(id) {
  tempId = id;
  addWin2();
  itemButton.addEventListener('click', function () {
    if (inputItemTitle.value == "") {
      closeItemWin();
    }
    else {
      let tempTask = document.getElementsByClassName('itemList');
      for (let q = 0; q < tempTask.length; q++) {
        if (tempTask[q].classList[1] == tempId) {
          let p = document.createElement('p');          
          p.classList.add('tasks');          
          p.innerText = inputItemTitle.value;
          tempTask[q].appendChild(p);        
          p.addEventListener('click', function (tempObj1){
          tempObj1.target.style.textDecoration="line-through";
          });
        }
      }     
      closeItemWin();
    }
  });
}

function itemDelButton(id) {
  let presCard = document.getElementsByClassName('cards');
  for (let i of presCard) {
    if (i.classList[1] == id) {
      mainContainer.removeChild(i);
      count--;
    }
  }
  if(mainContainer.children.length==0){
    document.querySelector('.nothing').classList.remove('addTaskWin');
  }
}



