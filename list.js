
var list = []
$(document).ready(function(){
  
    const urlParams = new URLSearchParams(window.location.search);
    const param_x = urlParams.get('status');
    console.log(param_x);
    var tbody = $('.table').children('tbody');
    var table = tbody.length ? tbody : $('.list_data');
 
    $('.add_task').click(function(event){
        var task = $('.user_text').val()
        if(task.length != 0){
            list.push(task)
            console.log(list)
            list_data()
            $('.user_text').val('')
        }else{
            alert("task cannot be empty!")
        }
       
    })
    

   

$('.action').click(function(){
    console.log("sdfsd")
})
   


})
function list_data(){
        
    console.log(list[i]);
    var html = '';
    for (var i = 0; i < list.length; i++) {
       var j = i+1
            var data = i;
        html+='<tr><td>'+j+'</td><td>'+list[i]+'</td><td class="d-flex" ><i class="fa-solid fa-pen p-1"></i> <i class="fa-solid fa-eraser p-1" onclick="delet('+i+')"></i></td> </tr>'

      }
      $('.list_data').html(html)

}
function delet(data){
    
    var removed = list.splice(data,1)
    list_data();
}

