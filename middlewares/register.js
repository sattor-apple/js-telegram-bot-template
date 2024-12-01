const { User } = require('../database/models/users');

module.exports = async (ctx, next) => {
  const chatId = ctx.chat.id;
  const user = await User.findOne({ where: { userId: chatId } });
  
  if (!user) {
    await User.create({ userId: chatId });
  }
  
  await next();
};
