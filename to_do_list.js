// // const item = document.querySelector("#item");
// // const toDoBox = document.querySelector("#to-do-box");

// // item.addEventListener("keyup", function (event) {
// //   if (event.key == "Enter") {
// //     addtoDo(item.value);
// //     this.value = ""
// //   }
// // });

// // const addtoDo = (item) => {
// //   const listItem = document.createElement("li");
// //   listItem.innerHTML = `
// // ${item}
// // <i class="fas fa-times"></i>  
// // `;
// // /* this is an btn in li called 'cancel' 
// // */

// //   listItem.addEventListener("click", function () {
// //     this.classList.toggle("done");
// //   });

// //   listItem.querySelector("i").addEventListener(
// //     'click',
// //     function (){
// //     listItem.remove()
// //   });
// //  toDoBox.appendChild(listItem);
// // };




// const item = document.querySelector('#item')
// const toDoBox = document.querySelector('#to-do-box')

// item.addEventListener(
//   'keyup',
//   function(event){
//     if(event.key =='Enter'){
//       addToDo(this.value)
//     item.value =""
//   }
// }
// )
//  const addToDo = (item) => {  
//   const listItem = document.createElement('li')
//   listItem.innerHTML = `
//   ${item}
//   <i class="fas fa-times"></i>
//   `;

//   listItem.addEventListener(
//     'click', function(){
//       this.classList.toggle("done");
//     }

//   )

//   listItem.querySelector('i').addEventListener(
//     'click',function(){
//       listItem.remove()
//     }
//   )
//   toDoBox.appendChild(listItem)
//   }
 
