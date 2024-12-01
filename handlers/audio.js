module.exports = async (ctx) => {
    const chatId = ctx.chat.id;
    const audio = ctx.message.audio;
    
    if (audio) {
      ctx.reply('Audio received!');
    }
  };
  