function toggleUserMenu() {
  var userMenu = document.getElementById("user-menu");
  userMenu.style.display === "none"
    ? (userMenu.style.display = "block")
    : (userMenu.style.display = "none");
}

function logout() {
  alert("Logout realizado com sucesso!");
}

function updateDateTime() {
  var currentDateElement = document.getElementById("current-date");
  var currentTimeElement = document.getElementById("current-time");

  var currentDate = new Date();

  var day = currentDate.getDate();
  var month = currentDate.getMonth(); // Sem a adição de 1 aqui
  var year = currentDate.getFullYear();
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();

  // Formatação para exibição correta
  var monthsArray = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  var monthName = monthsArray[month];

  day = (day < 10 ? "0" : "") + day;
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;

  var dateString = day + " de " + monthName + " de " + year;
  var timeString = hours + ":" + minutes;

  currentDateElement.textContent = dateString;
  currentTimeElement.textContent = timeString;
}

// Chame a função para atualizar a data e a hora imediatamente
updateDateTime();

// Atualize a cada minuto (60000 milissegundos)
setInterval(updateDateTime, 60000);

document.addEventListener("DOMContentLoaded", function () {
  // Botão para adicionar informações manualmente
  var addInfoBtn = document.getElementById("add-info");

  // Formulário para inserir informações manualmente
  var manualInfoForm = document.getElementById("manual-info-form");

  // Ação ao clicar no botão para adicionar informações manualmente
  addInfoBtn.addEventListener("click", function () {
    // Exibe o formulário
    manualInfoForm.style.display = "block";

    // Oculta o restante do conteúdo
    var cityInfo = document.querySelector(".city-info");
    var weatherInfo = document.querySelector(".weather-info");
    cityInfo.style.display = "none";
    weatherInfo.style.display = "none";
  });

  // Ação ao clicar no botão "Salvar" no formulário
  var saveInfoBtn = document.getElementById("save-info-btn");
  saveInfoBtn.addEventListener("click", function (event) {
    event.preventDefault();

    // Após salvar os dados, redirecione de volta para a dashboard padrão
    manualInfoForm.style.display = "none";

    // Exibe o restante do conteúdo
    var cityInfo = document.querySelector(".city-info");
    var weatherInfo = document.querySelector(".weather-info");
    cityInfo.style.display = "block";
    weatherInfo.style.display = "block";
  });
});
