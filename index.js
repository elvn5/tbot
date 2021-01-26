const TelegramBot = require('node-telegram-bot-api');
const token = '1407013955:AAHg0hrT6w8KkXVhvhDOA3itnWDraFrL3y0'
var port = process.env.PORT || 8443;
var host = process.env.HOST;
const bot = new TelegramBot(token, {polling: true, webHook:{port:port,host:host}});
let books = {
  fizika8: 'BQACAgIAAxkBAAEIqSdgDw64qc5gA7vTXmxLDUVoKSUAAfMAAtEJAAJ0bnlINTqtfxgfxhUeBA',
  fizika9: 'BQACAgIAAxkBAAEIqSZgDw64h9X-xyHq1Iz4D6PAhhrTEAAC0AkAAnRueUhCyHEgx7GsrR4E',
  fizika10: 'BQACAgIAAxkBAAEIqSVgDw646fqy6rqC6VDVqQVjpb2fkAACzwkAAnRueUi6m-pLxILWpx4E',
  fizika11: 'BQACAgIAAxkBAAEIqSRgDw646GukixoVSXLp4OLsSbKtAgACzgkAAnRueUgEmQE_hxHk4h4E',
  chemistry8: 'BQACAgIAAxkBAAEIqTVgDxBPLgHhQoQ0s6ACyvas5iTETwAC2QkAAnRueUi0ZtrSExkELh4E',
  chemistry9: 'BQACAgIAAxkBAAEIlVRgDaOAWpUSOUPIbbIK-zufeAtKSwAC0gkAAlvCkUp8MIneR7LSBB4E',
  chemistry10: 'BQACAgIAAxkBAAEIqStgDw64KOsES1hw7YPep0Rgw8Aq-AAC1wkAAnRueUgwJr3FaxT5kx4E',
  chemistry11: 'BQACAgIAAxkBAAEIqSpgDw64clOhvFSxmA3Uh-6DpQaC3QAC1AkAAnRueUjCpjA8Fjgmth4E'
}

bot.on('sticker', msg => bot.sendMessage(msg.chat.id, 'Роботам стикеры не нужны'))

bot.on('message', (msg) => {
  //anything
});
bot.on("polling_error", (err) => console.log(err));
bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "Добро пожаловать, я могу отправить книгу по нужному", {
  "reply_markup": {
      "keyboard": [["Химия"],   ["Физика"]]
      }
  });
      
  });
  
  bot.onText(/^Химия$/, (msg) => {
    bot.sendMessage(msg.chat.id, "Выберите класс", {
      "reply_markup": {
          "keyboard": [["Химия 8 Класс"], ["Химия 9 Класс"],["Химия 10 Класс"], ["Химия 11 Класс"], ["Главное меню"]]
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

bot.onText(/^Главное меню$/,  (msg) => {
  bot.sendMessage(msg.chat.id, "Вы в главном меню", {
    "reply_markup": {
        "keyboard": [["Химия"],   ["Физика"]]
        }
    });
});

