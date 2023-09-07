window.addEventListener("DOMContentLoaded", function () {
  // Получаем элементы
  var batteryLevel = document.getElementById("battery-level");
  var chargingIndicator = document.getElementById("charging-indicator");
  var chargingIndicatorTwo = document.getElementById("charging-indicator2");
  var chargingIndicatorThree = document.getElementById("charging-indicator3");
  var batteryPercentage = document.getElementById("battery-percentage");

  // Функция для обновления уровня заряда и индикатора
  function updateBatteryStatus() {
    navigator.getBattery().then(function (battery) {
      // Обновляем уровень заряда
      var level = battery.level * 100;
      batteryLevel.style.width = level + "%";
      batteryPercentage.textContent = "Уровень заряда: " + level + "%";

      // Обновляем индикатор зарядки
      if (battery.charging) {
        chargingIndicator.style.backgroundColor = "#0f0"; // Зеленый цвет, когда заряжается
      } else {
        chargingIndicator.style.backgroundColor = "gray"; // Красный цвет, когда не заряжается
      }
      //   ////
      if (battery.charging) {
        chargingIndicatorTwo.style.backgroundColor = "#0f0"; // Зеленый цвет, когда заряжается
      } else {
        chargingIndicatorTwo.style.backgroundColor = "gray"; // Красный цвет, когда не заряжается
      }
      //   /////
      if (battery.charging) {
        chargingIndicatorThree.style.backgroundColor = "#0f0"; // Зеленый цвет, когда заряжается
      } else {
        chargingIndicatorThree.style.backgroundColor = "gray"; // Красный цвет, когда не заряжается
      }
      //   //////
    });
  }

  // Обновляем статус батареи при загрузке страницы и при изменении состояния зарядки
  navigator.getBattery().then(function (battery) {
    updateBatteryStatus();
    battery.addEventListener("chargingchange", updateBatteryStatus);
  });
});
