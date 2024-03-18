const heading = document.getElementById('heading');
console.log(heading.innerText);

const listItems = document.getElementsByClassName('items');
console.log(listItems);

const list = listItems;
console.log(list)

const assign =[...listItems].forEach(item =>{
    console.log(item.innerText)
});

const assign2 = Array.from(listItems);
console.log(assign2)
