function Controller(model, view) {

	var self = this;

	view.elements.addBtn.on('click', addItem);
	view.elements.listContainer.on('click', '.item-delete', removeItem);
	view.elements.listContainer.on('click','.item-inner', editItem);


	function addItem(){
		var newItem = view.elements.input.val();
		model.addItem(newItem);
		view.renderList(model.data);
		view.elements.input.val('');
	};

	function removeItem(){

		var item = $(this).attr('data-value');

		model.removeItem(item);
		view.renderList(model.data);

	};

	function editItem(){
		var value = $(this).text();
		var input = $(this).parent().find('.item-edit');
		$(this).css('display','none');
		input.css('display','inline');	
		console.log(this);
		console.log(value);
		input.attr('value', value);
		console.log($(this).parent().parent().find('.item-edit'))
		// $(this).parent().parent().find('.item-edit').select();
		input.select();

		input.keyup(function(e){
		    if(e.keyCode == 13){
		        e.preventDefault();
		        var inputValue = $(this).val();
		        console.log(inputValue);
		        model.updateItem(value, inputValue);
		        view.renderList(model.data);
		    	}
    	});

	};

}