let money, time;

function start() {
  money = +prompt ('Ваш бюджет на месяц?');
  while (isNaN(money) || money == null || money == '') {
    money = +prompt ('Ваш бюджет на месяц?');
  }
    time = prompt ('Введите дату в формате YYYY-MM-DD');
}
start(); 

var oneDayBudget;
let appData = {
  budget:money, //Бюджет
  timeData:time, // Данные времени
  expenses: {}, //обязательные платежи
  optionalExpenses:{},// неоязательные расходы
  income:[], //доп.доход
  savings:true
};

function chooseExpenses() {
  for ( let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце'),
        b = +prompt('Во сколько обойдется?');
  
        if ( (typeof(a) === 'string' && typeof(a) != null && 
        typeof(b) != null && a != '' && b != '' && a.length < 50)) {
          console.log ('done');
          appData.expenses[a] = b;
        } else {
            i = i - 1;
  
        }
  }

}
chooseExpenses();

function chooseOptExpenses() {
  for ( let i = 0; i < 3; i++) {
    let a = prompt('Введите статью необяхательных расходов');
    appData.optionalExpenses[i] = a; 
  }
}
chooseOptExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget/30).toFixed(1);
alert ('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Вы нищеброд!');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Вы средний');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Вы богач!!!');
  } else {
    console.log ('Mistake!!');
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt ('Под какой процент?');
    appData.mothIncome = save/100/12*percent;
    alert ('Доход в месяц с вашего депозита: ' + appData.mothIncome);
  }
}
checkSavings();

console.log(appData);