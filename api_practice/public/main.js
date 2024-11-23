function sayHello(){
    alert("Hello");
}

const contentArea = document.querySelector('#main-content');
async function getContent(){
    const response = await fetch('http://localhost:8080/api/employees');
    const data = await response.json();
    contentArea.innerHTML = JSON.stringify(data);
    console.log(data);

}

// async function  postContent(){
//     await fetch('http://localhost:8080/api/employees');
//     method: POST
// }



