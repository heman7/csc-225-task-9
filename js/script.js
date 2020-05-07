jQuery(document).ready(function($){
    $('.check').on('click',function(){
        event.preventDefault();
        var input = $('#TextInput').val();
        
        if(input ===''){
            alert(' Please Enter text in the textbox ' );
            
            }
        else{
            $('#tasks').prepend(' '+ input +' ' );
            
             }
             
        
    }); 
});