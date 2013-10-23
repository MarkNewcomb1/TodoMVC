var app = {
    init: function(){
     $('.todoText').on('keypress', app.newKeypress);
        
    },    
   newKeypress: function(ev){
    if(ev.which === 13){
        app.addNewItem($('.todoText').val());
    }
   },
  addNewItem: function(label, status){
   console.log($('.templates .todo-item'));
       var newItem = $('.templates .todo-item').clone();
       newItem.find('label').text(label);
       if(status === 'complete'){
           newItem.addClass('complete');
       }
    newItem.appendTo('.todo-list');
    $('.todoText').val('');
   }
}