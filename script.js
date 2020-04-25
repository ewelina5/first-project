let familyZone = document.querySelector("#zone-01");
let natureZone = document.querySelector("#zone-02");
let extremeZone = document.querySelector("#zone-03");
let birthdayYear = document.querySelector("#input-year");
let money = document.querySelector("#input-money");
let btnBuy = document.querySelector("#btn-buy");


/* Założenia:
- żeby wejść do Parku Rozrywki musimy posiadać 25 zł

Ograniczenia wiekowe:
- żeby wejść do strefy familijnej - brak ograniczeń wiekowych
- żeby wejść do strefy przyrodniczej musimy mieć minimum 12 lat
- żeby wejść do strefy ekstremalnej musimy mieć minimum 16 lat
*/

const afterClick = () => {
    let wartoscOknaBirthdayYear = birthdayYear.value;
    let wiek = 2020 - wartoscOknaBirthdayYear;
    let wartoscOknaMoney = money.value;
    let wybranaStrefa = -1;

    if (familyZone.checked == true) {
        wybranaStrefa = 1;
      } else if (natureZone.checked == true) {
          wybranaStrefa = 2;
      } else if (extremeZone.checked == true) {
          wybranaStrefa = 3;
      } 

    if (wybranaStrefa == 1 && wartoscOknaMoney >= 25) {
        alert("Pomyślnie zakupiono bilet do strefy familijnej!");
    }   else if (wybranaStrefa == 2 && wartoscOknaMoney >= 25 && wiek >= 12) {
        alert("Pomyślnie zakupiono bilet do strefy przyrodniczej!");
    }   else if (wybranaStrefa == 3 && wartoscOknaMoney >= 25 && wiek >= 16) {
        alert("Pomyślnie zakupiono bilet do strefy ekstremalnej!");
    }   else {
        alert("Zapraszamy Cię następnym razem! Nie udało Ci się zakupić biletu.");
    }
};

btnBuy.addEventListener("click", afterClick);