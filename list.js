$('.updt_task').hide()
var list = []
var updt 
$(document).ready(function(){
  
    const urlParams = new URLSearchParams(window.location.search);
    const param_x = urlParams.get('status');
    console.log(param_x);
    var tbody = $('.table').children('tbody');
    var table = tbody.length ? tbody : $('.list_data');
 
    $('.add_task').click(function(event){
        var task = $('.user_text').val()
        if(task.length != 0){
          
            $('.user_text').val('')
            if(task == '//'){
             alert('new feature')
            }else{
                list.push(task)
                $('.user_text').focus()
                console.log(list)
                list_data()
            }
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
        html+='<tr><td>'+j+'</td><td>'+list[i]+'</td><td class="d-flex" ><i class="fa-solid fa-pen p-1" onclick="edit('+i+')"></i> <i class="fa-solid fa-eraser p-1" onclick="delet('+i+')"></i></td> </tr>'

      }
      $('.list_data').html(html)

}

function edit(id){
    console.log(id)
    updt = id
    $('.user_text').val(list[id])
    $('.add_task').hide()
    $('.updt_task').show()
    $('.user_text').focus()
}

function delet(data){
    
    var removed = list.splice(data,1)
    list_data();
}

function update(){
   var updt_list = $('.user_text').val()
   if(updt_list.length != 0){
    list[updt] = updt_list
    $('.user_text').focus()
    console.log(list)
    list_data()
    $('.user_text').val('')
    $('.add_task').show()
    $('.updt_task').hide()
}else{
    alert("task cannot be empty!")
}

}