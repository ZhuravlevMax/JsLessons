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
}

var a = prompt('Введите обязательную статью расходов в этом месяце'),
    b = +prompt('Во сколько обойдется?'),
    c = prompt('Введите обязательную статью расходов в этом месяце'),
    d = +prompt('Во сколько обойдется?');

appData.expenses [a] = b;
appData.expenses [c] = d;

oneDayBudget = (money - b - d)/30;

var x = oneDayBudget;
var y = Math.round(oneDayBudget * 10) / 10; // Округление
alert ('Ваш дневной бюджет составляет - ' + (y));

