// var getul = document.getElementById("ul")
// function generate() {
//     /////////////////////////// for create List ////////////////////////
//     var a = document.getElementById("inp");
//     var li = document.createElement('li');
//     var inn = document.createElement('input')
//     var litext = document.createTextNode(a.value);
//     li.appendChild(litext);
//     getul.appendChild(li);
//     /////////////////////////// create field empty ////////////////////////
//     a.value = "";
//     /////////////////////////// for Delete  button ////////////////////////
//     var deletebtn = document.createElement('button');
//     var deletebtntext = document.createTextNode('Delete');
//     deletebtn.appendChild(deletebtntext);
//     li.appendChild(deletebtn);
//     deletebtn.setAttribute('onclick', 'deltfunc(this)');
//     /////////////////////////// for Edit  button ////////////////////////
//     var editbtn = document.createElement('button');
//     var editbtntext = document.createTextNode('Edit');
//     editbtn.appendChild(editbtntext);
//     li.appendChild(editbtn);
//     editbtn.setAttribute('onclick', 'editfunc(this)');
// }
// /////////////////////////// for press Enter to generate todo ////////////////////////
// function addtodoEnter(event){
//     if(event.keyCode === 13){
//         generate()
//     }
// }
// /////////////////////////// for DeleteAll ////////////////////////
// function deleteAll() {
//     getul.innerHTML = '';
// }
// /////////////////////////// for Delete button functionality ////////////////////////
// function deltfunc(e) {
//     e.parentNode.remove()
// }
// /////////////////////////// for Edit button functionality ////////////////////////
// function editfunc(e) {
//     var a = prompt('Edit text', e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue = a
// }
////////////////// create UL ///////////////////////
var getul = document.getElementById("ul")
///////////////////// for create List and clear input field  /////////////////////
function generate() {
    var a = document.getElementById("inp");
    getul.innerHTML += `<li>
    <input type ='text' value = '${a.value}' disabled />
    <button onclick = 'deltfunc(this)'> Delete </button>
    <button onclick = 'editfunc(this)'> Edit </button>
    </li>`
    a.value = '';
}
/////////////////////////// for press Enter to generate todo ////////////////////////
function addtodoEnter(event) {
    if (event.keyCode === 13) {
        generate()
    }
}
/////////////////////////// for DeleteAll ////////////////////////
function deleteAll() {
    getul.innerHTML = '';
}
/////////////////////////// for Delete button functionality ////////////////////////
function deltfunc(e) {
    e.parentNode.remove()
}
/////////////////////////// for Edit button functionality ////////////////////////
function editfunc(e) {
    var input = e.parentNode.childNodes[1];
    input.disabled = false;
    input.focus()
    e.innerHTML = "update"
    e.setAttribute('onclick', 'updatetodo(this)')
}
function updatetodo(e) {
    var input = e.parentNode.childNodes[1];
    input.disabled = true;
    e.innerHTML = "Edit"
}

