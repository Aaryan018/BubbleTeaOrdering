let arr = new Array(0);
let orderArr = new Array(0);

let addToppingBtn = document.getElementById("addTopping");
let removeToppingBtn = document.getElementById("removeTopping");
let addDrinkBtn = document.getElementById("addDrink");
let removeDrinkBtn = document.getElementById("removeDrink");
let emptyOrderBtn = document.getElementById("emptyOrder");
let tb = document.getElementById("tb");

addToppingBtn.onclick = addTopping;
removeToppingBtn.onclick = removeTopping;
addDrinkBtn.onclick = addDrink;
removeDrinkBtn.onclick = removeDrink;
emptyOrderBtn.onclick = emptyOrder;


function display(){

	let th1 = document.createElement("th");
	let th2 = document.createElement("th");
	let th3 = document.createElement("th");
	let th4 = document.createElement("th");

	th1.appendChild(document.createTextNode("Tea"));
	th2.appendChild(document.createTextNode("Milk"));
	th3.appendChild(document.createTextNode("Toppings"));
	th4.appendChild(document.createTextNode("Cost"));

	let firstRow;

	firstRow = tb.insertRow(0);
	let cell;
	cell = firstRow.insertCell(0);
	cell.appendChild(th1);

	cell = firstRow.insertCell(1);
	cell.appendChild(th2);

	cell = firstRow.insertCell(2);
	cell.appendChild(th3);

	cell = firstRow.insertCell(3);
	cell.appendChild(th4);

	let newRow;
	let newCell;

	for(let i = 0; i < orderArr.length; i++){

		newRow = tb.insertRow(i+1);
		newCell = newRow.insertCell(0);
		newCell.appendChild(document.createTextNode(orderArr[i].tea));

		newCell = newRow.insertCell(1);
		newCell.appendChild(document.createTextNode(orderArr[i].milk));

		let string = "";
		newCell = newRow.insertCell(2);
		for(let j = 0; j < orderArr[i].toppings.length; j++){
			string += orderArr[i].toppings[j];
		}
		newCell.appendChild(document.createTextNode(string));

		newCell = newRow.insertCell(3);
		newCell.appendChild(document.createTextNode(calculateCost(orderArr[i])));


	}

}


function emptyOrder(){
	orderArr = [];
	tb.innerHTML = "";

}

function removeDrink(){
	tb.innerHTML = "";
	orderArr.pop();
	display();
}


function addDrink(){

	let tea = "";
	let m ="";
	let radio = document.getElementsByName("teatype");

	for(let i = 0; i < radio.length; i++){
		if(radio[i].checked){
			tea = radio[i].value;
		}
	}

	m=document.getElementById("milk").value;

	let newDrink = new BubbleTea(tea, arr, m);
	orderArr.push(newDrink);
	tb.innerHTML = "";
	display();

}





function removeTopping(){

	arr.pop();
	let list = document.getElementById("tp");

	list.innerHTML = "";

	for(let i = 0; i < arr.length; i++){
		list.innerHTML += "<li>" + arr[i] + "</li>";
	}
}

function addTopping(){

	let radio = document.getElementsByName("topping");

	for(let i = 0; i < radio.length; i++){
		if(radio[i].checked){
			arr.push(radio[i].value);
		}
	}

	let list = document.getElementById("tp");

	for(let i = 0; i < arr.length; i++){
		list.innerHTML += "<li>" + arr[i] + "</li>";
	}

} 


function BubbleTea(tea, array, milk){
	this.tea = tea;
	this.toppings = array.slice();
	this.milk = milk;
}


function calculateCost(bt){

	let price = 0;

	if(bt.tea == "Black"){
		price = 2.00;
	}
	else if(bt.tea == "Green"){
		price = 2.50;
	}
	else if(bt.tea == "Red"){
		price = 3.00;
	}

	for(let i = 0; i < bt.toppings.length; i++){
		if(bt.toppings[i] == "Pearls"){
			price += 0.25;
		}
		else if(bt.toppings[i] == "Mango Stars"){
			price += 1.00;
		}
		else if(bt.toppings[i] == "Coconut Jelly"){
			price += 0.75;
		}
		else if(bt.toppings[i] == "Grass Jelly"){
			price += 0.50;
		}
	}

	if(bt.milk == "Yes"){
		price += 1;  
	}

	return price;
}