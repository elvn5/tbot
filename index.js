const TelegramBot = require('node-telegram-bot-api');
const token = '1407013955:AAHg0hrT6w8KkXVhvhDOA3itnWDraFrL3y0'
const bot = new TelegramBot(token, {polling: true});
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
  
  bot.onText(/Химия/, (msg) => {
    bot.sendMessage(msg.chat.id, "Выберите класс", {
      "reply_markup": {
          "keyboard": [["8 Класс"], ["9 Класс"],["10 Класс"], ["11 Класс"], ["Назад"]]
          }
      });
    console.log(msg.chat.id)  
});

bot.onText(/8 Класс/,  (msg) => {
  console.log(msg.chat.id)
  bot.sendDocument(msg.chat.id, 'BQACAgIAAxkBAAEIqTVgDxBPLgHhQoQ0s6ACyvas5iTETwAC2QkAAnRueUi0ZtrSExkELh4E')
});


bot.onText(/9 Класс/,  (msg) => {
  console.log(msg.chat.id)
  bot.sendDocument(msg.chat.id, 'BQACAgIAAxkBAAEIlVRgDaOAWpUSOUPIbbIK-zufeAtKSwAC0gkAAlvCkUp8MIneR7LSBB4E')
});

bot.onText(/10 Класс/,  (msg) => {
  console.log(msg.chat.id)
  bot.sendDocument(msg.chat.id, 'BQACAgIAAxkBAAEIqStgDw64KOsES1hw7YPep0Rgw8Aq-AAC1wkAAnRueUgwJr3FaxT5kx4E')
});

bot.onText(/11 Класс/,  (msg) => {
  console.log(msg.chat.id)
  bot.sendDocument(msg.chat.id, 'BQACAgIAAxkBAAEIqSpgDw64clOhvFSxmA3Uh-6DpQaC3QAC1AkAAnRueUjCpjA8Fjgmth4E')
});

bot.onText(/Назад/,  (msg) => {
  bot.sendMessage(msg.chat.id, "Выберите класс", {
    "reply_markup": {
        "keyboard": [["8 Класс"], ["9 Класс"],["10 Класс"], ["11 Класс"], ["Назад"]]
        }
    });
});

