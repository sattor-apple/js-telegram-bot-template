const { Telegraf } = require('telegraf');
const sequelize = require('./database/connect');
const startHandler = require('./handlers/start');
const audioHandler = require('./handlers/audio');
const registerMiddleware = require('./middlewares/register');
const configs = require('./configs/conifgs');

const bot = new Telegraf(configs.BOT_TOKEN);

bot.use(registerMiddleware);

bot.start(startHandler);

bot.on('audio', audioHandler);

sequelize.sync()
  .then(() => console.log('Bot started!'))
  .then(() => bot.launch())
  .catch(err => console.error('Failed to start bot:', err));
