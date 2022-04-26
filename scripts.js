'use strict';
const inputToDoEl = document.getElementById('inputToDo');
inputToDoEl.addEventListener('input',onInputToDoInput);
const addBtnEl=document.getElementById ('addBtn');
addBtnEl.addEventListener('click', onAddBtnClick);
const errorEl = document.getElementById('error');
const listEl=document.getElementById('list');
let error = null;

function onAddBtnClick () {
const inputToDo=getInputToDo ();	
let inputValue = document.getElementById('inputToDo').value;
if (!error&&inputValue.length>0) {
 getNewElement();
 }	
}
function onInputToDoInput() {
const inputToDo=getInputToDo();
 const error=validateInputToDo(inputToDo);
 	if (error) {
		showError(error);
		} else {			
		clearError(); 
		}	
	}
function getInputToDo() {
	return getInputToDoValue(inputToDoEl);
}	
function getInputToDoValue(el) {
	return el.value;
}	
function validateInputToDo (inputValue) {
	if (error) {	
	inputToDoEl.className='invalid';
	} else {
		inputToDoEl.className='';
	}
	if (inputValue === '') return 'empty string';
	if (inputValue.length<3) return 'string length<3';
	clearError;	
}	
function getNewElement () {
	let li = document.createElement('li');		
	let inputValue = inputToDoEl.value;
	let newText = document.createTextNode(inputValue);
	li.appendChild(newText);			
	listEl.appendChild(li);
	clearError();		
	inputToDoEl.value = "";
	}
function showNewElement(value) {
	listEl.textContent = value;
}
function showError(err) {
	errorEl.textContent = err;
	error = err;
}	
function clearError() {
	errorEl.textContent = '';
	error = null;
}

