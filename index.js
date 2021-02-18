const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios').default;
const token = 'TOKEN'
var port = process.env.PORT || 8443;
var host = process.env.HOST;
var bot = new TelegramBot(token, {webHook: {port: port, host: host}});
bot.startPolling()
const mainMenu = {
  "reply_markup": {
      "keyboard": [["Химия", "Физика"],   ["Алгебра", "Геометрия"]]
      }
  }
let books = {
  fizika8: 'BQACAgIAAxkBAAEIqSdgDw64qc5gA7vTXmxLDUVoKSUAAfMAAtEJAAJ0bnlINTqtfxgfxhUeBA',
  fizika9: 'BQACAgIAAxkBAAEIqSZgDw64h9X-xyHq1Iz4D6PAhhrTEAAC0AkAAnRueUhCyHEgx7GsrR4E',
  fizika10: 'BQACAgIAAxkBAAEIqSVgDw646fqy6rqC6VDVqQVjpb2fkAACzwkAAnRueUi6m-pLxILWpx4E',
  fizika11: 'BQACAgIAAxkBAAEIqSRgDw646GukixoVSXLp4OLsSbKtAgACzgkAAnRueUgEmQE_hxHk4h4E',
  chemistry8: 'BQACAgIAAxkBAAEIqTVgDxBPLgHhQoQ0s6ACyvas5iTETwAC2QkAAnRueUi0ZtrSExkELh4E',
  chemistry9: 'BQACAgIAAxkBAAEI0RJgG7BB2h6cUcYTsP441g7e5i3SkgACzQkAAnRueUg1aCirKunNPh4E',
  chemistry10: 'BQACAgIAAxkBAAEIqStgDw64KOsES1hw7YPep0Rgw8Aq-AAC1wkAAnRueUgwJr3FaxT5kx4E',
  chemistry11: 'BQACAgIAAxkBAAEIqSpgDw64clOhvFSxmA3Uh-6DpQaC3QAC1AkAAnRueUjCpjA8Fjgmth4E',
  algebra7: 'BQACAgIAAxkBAAEIxlRgGDCnSBiIlWEQ6X-XZoL748P6yQAC3woAAswAAclIHswwPTvvqcQeBA',
  algebra8: 'BQACAgIAAxkBAAEIxl1gGDGt_wABMnt9g2ojzkapDY8SsLQAAuYKAALMAAHJSDvzJL34qIXHHgQ',
  algebra9: 'BQACAgIAAxkBAAEIxlhgGDGtoDAzLyI7RK_SmRX9SuS9pQAC4QoAAswAAclIjJrR3cno_MAeBA',
  algebra10_11: 'BQACAgIAAxkBAAEIxmxgGDJ3GCWaovGcRS0AAS4CWivQtdIAAuIKAALMAAHJSK57hBYEU6ePHgQ',
  geometry10_11: 'BQACAgIAAxkBAAEIxm5gGDK9SbqJFQAB4wRs8D6i121hHowAAuMKAALMAAHJSMn38cHOkvWsHgQ',
  geometry7_9: 'BQACAgIAAxkBAAEIxm9gGDK9dvudIIwPs_fI8tF1HgnangAC5AoAAswAAclIsa6X5z5RKpMeBA'

}


bot.on('message', (msg) => {
  bot.sendMessage(434413828, `${msg.text}, ${msg.chat.first_name}, ${msg.chat.last_name}, ${msg.chat.username} chat id: ${msg.chat.id}`)
  axios.post('https://tbot-c3534-default-rtdb.firebaseio.com/id.json', {
    id: msg.chat.id
  })
  .then(function (response) {
    
  })
  .catch(function (error) {
 
  });
});
bot.on("polling_error", (err) => console.log(err));
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Добро пожаловать, я могу отправить книгу по нужному предмету", mainMenu);
      
  });
  
  bot.onText(/^Химия$/, (msg) => {
    bot.sendMessage(msg.chat.id, "Выберите класс", {
      "reply_markup": {
          "keyboard": [["Химия 8 Класс"], ["Химия 9 Класс"],["Химия 10 Класс"], ["Химия 11 Класс"], ["Главное меню"]]
          }
      });
  
});

bot.onText(/^Геометрия$/, (msg) => {
  bot.sendMessage(msg.chat.id, "Выберите класс", {
    "reply_markup": {
        "keyboard": [["Геометрия 7-9 Класс"], ["Геометрия 10-11 Класс"], ["Главное меню"]]
        }
    });
});

bot.onText(/^Алгебра$/, (msg) => {
  bot.sendMessage(msg.chat.id, "Выберите класс", {
    "reply_markup": {
        "keyboard": [["Алгебра 7 Класс"], ["Алгебра 8 Класс"], ["Алгебра 9 Класс"], ["Алгебра 10-11 Класс"], ["Главное меню"]]
        }
    });
});

bot.onText(/^Физика$/, (msg) => {
  bot.sendMessage(msg.chat.id, "Выберите класс", {
    "reply_markup": {
        "keyboard": [["Физика 8 Класс"], ["Физика 9 Класс"],["Физика 10 Класс"], ["Физика 11 Класс"], ["Главное меню"]]
        }
    });

});

bot.onText(/^Химия 8 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.chemistry8)
});


bot.onText(/^Химия 9 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.chemistry9)
});

bot.onText(/^Химия 10 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.chemistry10)
});

bot.onText(/^Химия 11 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.chemistry11)
});


bot.onText(/^Физика 8 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.fizika8)
});

bot.onText(/^Физика 9 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.fizika9)
});

bot.onText(/^Физика 10 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.fizika10)
});

bot.onText(/^Физика 11 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.fizika11)
});

bot.onText(/^Алгебра 7 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.algebra7)
});

bot.onText(/^Алгебра 8 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.algebra8)
});

bot.onText(/^Алгебра 9 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.algebra9)
});

bot.onText(/^Алгебра 10-11 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.algebra10_11)
});

bot.onText(/^Геометрия 7-9 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.geometry7_9)
});

bot.onText(/^Геометрия 10-11 Класс$/,  (msg) => {

  bot.sendDocument(msg.chat.id, books.geometry10_11)
});



bot.onText(/^Главное меню$/,  (msg) => {
  bot.sendMessage(msg.chat.id, "Вы в главном меню", mainMenu);
});

