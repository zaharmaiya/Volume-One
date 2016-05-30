require(
['jquery','templating','model','view','controller'],
function(){
	$(function(){
	var firstToDoList = ['Выполнить домашнее задание по JS', 'Посмотреть серию Острых козырьков', 'Поехать на курсы'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
	});
}
)