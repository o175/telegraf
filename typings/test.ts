// This is a test file for the TypeScript typings.
// It is not intended to be used by external users.
import Telegraf from './index';

const randomPhoto = 'https://picsum.photos/200/300/?random'
const sayYoMiddleware = ({ reply }, next) => reply('yo').then(() => next())

const {reply} =  Telegraf;

const bot = new Telegraf(process.env.BOT_TOKEN)

// Logs each request
bot.use(Telegraf.log())

bot.start((ctx) => ctx.reply('Bot started!'));

// Login widget events
bot.on('connected_website', ({ reply }) => reply('Website connected'))

bot.command('cat', ({ replyWithPhoto }) => replyWithPhoto(randomPhoto))

// Look ma, reply middleware factory
bot.command('foo', reply('http://coub.com/view/9cjmt'))

bot.action('bar', reply('i was here'))

bot.telegram.sendMessage(process.env.BOT_CLIENT_ID,"It's work")

// Start https webhook
bot.startWebhook('/secret-path', {}, 8443)

// Http webhook, for nginx/heroku users.
bot.startWebhook('/secret-path', null, 5000)

// Start polling
bot.startPolling()
