cadastro.onclick = cadastrar
 
function cadastrar(){
	if (document.getElementById("nome").value.length == '') {
		alert('Por favor, preencha o campo Nome!');
		document.getElementById("nome").focus();
		return false;
	}else{
		if (document.getElementById("descricao").value.length == '') {
			alert('Por favor, preencha o campo Descrição!');
			document.getElementById("descricao").focus();
			return false;
		}else{
			if (document.getElementById("link").value.length == '') {
				alert('Por favor, preencha o campo Link do Projeto!');
				document.getElementById("link").focus();
				return false;
			}else{
				if (document.getElementById("titulo").value.length == '') {
					alert('Por favor, preencha o campo Título!');
					document.getElementById("titulo").focus();
					return false;
				}else{
					if (document.getElementById("topico").value.length == '') {
						alert('Por favor, preencha o campo Tópico!');
						document.getElementById("topico").focus();
						return false;
					}else{
						alert('Cadastro efetuado com Sucesso!');
					}
				}
			}
		}
	}		
}
