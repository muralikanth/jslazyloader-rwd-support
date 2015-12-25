"use strict";

//JSON data
var data = [{"id":"1","info":{"Firstname":"Murali","LastName":"Anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"2","info":{"Firstname":"Murali2","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"3","info":{"Firstname":"Murali3","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"4","info":{"Firstname":"Murali4","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"5","info":{"Firstname":"Murali5","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"6","info":{"Firstname":"Murali6","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"7","info":{"Firstname":"Murali7","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"8","info":{"Firstname":"Murali8","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"9","info":{"Firstname":"Murali9","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"10","info":{"Firstname":"Murali10","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"11","info":{"Firstname":"Murali11","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"12","info":{"Firstname":"Murali12","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"13","info":{"Firstname":"Murali13","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"14","info":{"Firstname":"Murali14","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"15","info":{"Firstname":"Murali15","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"16","info":{"Firstname":"Murali16","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"17","info":{"Firstname":"Murali17","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}},{"id":"18","info":{"Firstname":"Murali18","LastName":"anumula","Zip":"500018","BirthDate":"02/08/1988","Points":"80"}}];

//variables
var count = 10;
var timer = 500; // setTimeout value to display loader image
var dataLen, ul, i, c, flag, increment;

// appending json data to datagrid
displayData(data);

// For adding alternative colors, useful for IE
alternateClass("bindData");

// function for display data on load
function displayData(data) {
	var minLen = 0;
	dataLen = 10;
	loopRec(data, minLen, dataLen);
};

// function for loop records based on data
function loopRec(data, minLen, dataLent) {
	for (var i = minLen; i < dataLent; i++) {
		bindColumn(data[i]);
		document.getElementById('bindData').appendChild(ul);
	}
};

// Add event
function add() {
	if (document.getElementById("firstName").value !== ''
			&& document.getElementById("lastName").value !== ''
			&& document.getElementById("zip").value !== ''
			&& document.getElementById("birtday").value !== ''
			&& document.getElementById("points").value !== '') {
		//increment++
		var len = data.length - 1;
		if (data.length === 0) {
			c = "1";
		} else {
			c = (parseInt(data[len].id) + 1).toString();
		}
		var a = {
			"id" : c,
			"info" : {
				Firstname : document.getElementById("firstName").value,
				LastName : document.getElementById("lastName").value,
				Zip : document.getElementById("zip").value,
				BirthDate : document.getElementById("birtday").value,
				Points : document.getElementById("points").value
			}
		};
		var b = data.push(a);
		bindColumn(a);
		var bindData = document.getElementById('bindData');
		bindData.insertBefore(ul, bindData.firstChild);
		alternateClass("bindData");
		document.getElementById("tableEdiatable").removeAttribute("style");
	} else {
		alert("Please fill all fields");
	}
}

// function for Generating columns
function bindColumn(a) {
	ul = createElem('ul');
	var li = createElem('li'), li2 = createElem('li'), li3 = createElem('li'), li4 = createElem('li'), li5 = createElem('li'), li6 = createElem('li');
	li.innerHTML = "<span class='show-mobile'>First Name</span><label>"
			+ a.info.Firstname + "</label>";
	li2.innerHTML = "<span class='show-mobile'>Last Name</span><label>"
			+ a.info.LastName + "</label>";
	li3.innerHTML = "<span class='show-mobile'>Zip</span><label>" + a.info.Zip
			+ "</label>";
	li4.innerHTML = "<span class='show-mobile'>Birthday</span><label>"
			+ a.info.BirthDate + "</label>";
	li5.innerHTML = "<span class='show-mobile'>Points</span><label>"
			+ a.info.Points + "</label>";
	li6.innerHTML = '<button id="mybtn" onclick="deleteRec(this,'
			+ parseInt(a.id) + ')">X</button>';
	ul.appendChild(li);
	ul.appendChild(li2);
	ul.appendChild(li3);
	ul.appendChild(li4);
	ul.appendChild(li5);
	ul.appendChild(li6);
};

// Delete row and json node
function deleteRec(elm, a) {
	// for removing the html row
	elm.parentNode.parentNode.parentNode.removeChild(elm.parentNode.parentNode);
	alternateClass("bindData");
	// for removing the json object
	
	var objLen = data.length;
	for(var i=0; i < objLen; i++){
		if(parseInt(data[i].id) === a){
			data.splice(i, 1);
			return false;
		}
	}
}

// function for displaying records in scroll
function loadReconScroll() {
	var a = document.getElementById('datawpr');
	var b = a.offsetHeight;
	var c = a.scrollTop;
	if (parseInt(b + c) == parseInt(a.scrollHeight)) {
		// bottom of the scroll
		var minLen = count;
		var dataLent = minLen + 5;
		document.getElementById("loader").style.display = 'block';
		flag++;

		setTimeout(
				function() {
					if (flag === 1) {
						if (data.length > minLen) {
							if (dataLent > data.length) {
								var newDataLent = minLen + dataLent
										- data.length - 1;
								console.log(newDataLent);
								loopRec(data, minLen, newDataLent);
								document.getElementById("loader").style.display = 'none';
								count = count + 5;
							} else {
								loopRec(data, minLen, dataLent);
								document.getElementById("loader").style.display = 'none';
								count = count + 5;
							}
						} else {
							document.getElementById("loader").style.display = 'none';
							document.getElementById("noRecords").style.display = 'block';

						}
					} else {
						document.getElementById("loader").style.display = 'none';
					}
					alternateClass("bindData");
					flag = 1;
				}, timer);
	} else {
		//
	}
}

// for openin form in mobile view
function openForm() {
	document.getElementById("tableEdiatable").style.display = 'block';
};

// for displayin the menu in mobile view
function mobileNav() {

};

// function for closing popup
function closePop() {
	document.getElementById("tableEdiatable").removeAttribute("style");
};

// Create element
function createElem(elemType) {
	return document.createElement(elemType);
}

// scroll events
var a = document.getElementById('datawpr');
if (a.addEventListener) {
	a.addEventListener("scroll", function() {
		loadReconScroll();
		return false;
	});
} else {
	a.attachEvent("onscroll", function() {
		loadReconScroll();
		return false;
	});
}

// function for alternate row color
function alternateClass(IdName) {
	var table = document.getElementById(IdName);
	var rows = table.getElementsByTagName("ul");
	for (i = 0; i < rows.length; i++) {
		// manipulate rows
		if (i % 2 == 0) {
			rows[i].className = "even";
		} else {
			rows[i].className = "odd";
		}
	}
}



