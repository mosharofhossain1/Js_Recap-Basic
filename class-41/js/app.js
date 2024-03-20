const heading = document.getElementById('heading');
console.log(heading.innerText);

const listItems = document.getElementsByClassName('items');
console.log(listItems);

for(let list of listItems){
    console.log(list.innerHTML)
}
// const list = listItems;
// console.log(list)

const assign =[...listItems].forEach(item =>{
    console.log(item.innerText)
});

const assign2 = Array.from(listItems);
console.log(assign2)


// document.getElementsByTagName 

const li = document.getElementsByTagName('li');
console.log(li);

// document.getElentsByName 

const nameList = document.getElementsByName('firstName');
console.log(nameList);

// querySeclector 

const h2 = document.getElementById('heding2');
console.log(h2);


const pera = document.getElementsByClassName('pera');
console.log(pera)

// Change Color 

function myFunc(){
    const h4 = document.getElementById('colorChange');
    h4.style.color = 'orange';
    h4.style.fontSize = '30px'
}

// DIv change element 

function divChange1(){
    const div1 = document.getElementById('divChange1');
    div1.style.border = '2px solid red';
    div1.style.textAlign = 'center';
    div1.style.marginTop = '20px';
    div1.style.borderRadius = '10px';
    div1.style.height = '100px';
    div1.style.width = '500px'
}
