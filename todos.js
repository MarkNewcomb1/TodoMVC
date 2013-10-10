var app = {
    init: function(){
     $('.todo-list').on('click', '.toggle', app.toggleStatus);   
        
    },    
    toggleStatus: function(ev) {
     $(ev.target).closest('.todo-item').toggleClass('complete');   
    }
}