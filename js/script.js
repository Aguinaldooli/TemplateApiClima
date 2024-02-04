// Função para simular o login
function fakeLogin() {
  // Obtenha os valores do usuário e senha
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Simule a autenticação (pode ser adaptada conforme necessário)
  if (username === "usuario" && password === "senha") {
    // Se o login for bem-sucedido, redirecione para a dashboard
    window.location.href = "pages/dashboard.html";
  } else {
    // Se o login falhar, exiba uma mensagem (pode ser personalizada)
    alert("Usuário ou senha incorretos. Tente novamente.");
  }
}
