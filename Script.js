var money = +prompt ('Ваш бюджет на месяц?');
var time = +prompt ('Введите дату в формате YYYY-MM-DD');
var oneDayBudget;
let appData = {
  budget:money, //Бюджет
  timeData:time, // Данные времени
  expenses: {}, //обязательные платежи
  optionalExpenses:{},// неоязательные расходы
  income:[], //доп.доход
  savings:false
};

for ( let i = 0; i < 2; i++) {
  let a = prompt('Введите обязательную статью расходов в этом месяце'),
      b = +prompt('Во сколько обойдется?');

      if ( (typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50)) {
        console.log ('done');
        appData.expenses[a] = b;
      } else {

      }
}

appData.moneyPerDay = appData.budget/30;

alert ('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
  console.log('Вы нищеброд!');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Вы средний');
} else if (appData.moneyPerDay > 2000) {
  console.log('Вы богач!!!');
} else {
  console.log ('Mistake!!');
}
