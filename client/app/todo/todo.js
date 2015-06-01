"use strict";
import List from './list/list';

class Todo{
	constructor(title){
		this.title = title;
		this.list = [new List('empty')];
	}
	
	setTitle(newTitle){
		this.title = newTitle;
	}
	addListItem(){
		this.list.push(new List('empty'));
	}
	removeListItem(){
		this.list.pop();
	}
}



export default Todo;