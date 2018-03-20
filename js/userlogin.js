function chooseName(){
    var html ='';
          html = '<body><div id="userFormArea" class="row"><div class="col-md-12 login page"><form id="userForm"><div class="form-group form"><h3 class="title">What\'s your nickname?</h3><input class="usernameInput" id="username" /><br /><div type="submit" class="" value=""></div></div></form></div></div><div  id="mainHouse"><p class="list-group" id="users"></p></div><script src="js/client-topbar.js"></script><script src="https://code.jquery.com/jquery-1.10.2.min.js"></script></body>';
          return html;
     
      }

    document.open('text/plain');
    document.write(chooseName());





$(function(){

      var socket = io.connect( 'http://localhost:8080' );
      var $userFormArea = $('#userFormArea');
      var $mainHouse = $('#mainHouse');
      var $userForm = $('#userForm');
      var $users = $('#users');
      var $username = $('#username');
      var html='';

      
      
    

      $userForm.submit(function(e){
        e.preventDefault();
        socket.emit('new user', $username.val(), function(data){
          if(data){
            $userFormArea.hide();
            $mainHouse.show();
          }
        });
        $username.val('');


      });

      socket.on('get user',function(data){
              for(i=0;i<data.length;i++){
                html += '<li>'+data[i]+'</li>';

              }
              $users.html(html);
            });
            
});

