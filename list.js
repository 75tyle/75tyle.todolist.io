$(document).ready(function(){
    var list = []
    $('.add_task').click(function(event){
        var task = $('.user_text').val()
        list.push(task)
        console.log(list)
        list_data()
    })

    function list_data(){
        
        console.log(list[i]);
        var html = '';
        for (var i = 0; i < list.length; i++) {
           var j = i+1

            html+='<tr><td>'+j+'</td><td>'+list[i]+'</td><td><button class="btn btn-info action">edit</button><button class="btn action btn-danger">delete</button></td> </tr>'

          }
          $('.list_data').html(html)

    }
})