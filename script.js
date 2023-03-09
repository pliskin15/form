function logar(){
	var usuario = document.getElementById('usuario').value;
	var senha = document.getElementById('senha').value;
	
	if(usuario == "admin" && senha == "admin"){
		alert("sucesso");
		location.href = "perfil.html";
	}else{
		alert("Usuario ou senha incorretos");
	}
}