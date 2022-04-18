function login() {
        
    let user = document.getElementById("usr");
    let pwd = document.getElementById("pwd");
    let comp = document.getElementById("comp");        

    if (user.value == '') {
          alert('Digite seu usuario...');  
          user.focus();
          return;
    }
    else if (pwd.value == '') {
            alert('Digite sua senha...');
            pwd.focus();
            return;
    }
    else if (comp.value == 'opt') {
            alert('Informe a empresa...');
            comp.focus();
            return;
    }
    else if (user.value == "teste", pwd.value == "123456"){

            window.location.href = "load.html";
            return;  
    }else{
            alert('Informe as credenciais corretas');
            return;    
        }   
}
