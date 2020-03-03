const startCommand = require("../../commands/start");

it("responds to /start command", () => {
	expect.assertions(3);
	const message = bot.message();
	startCommand(bot)(message);
	expect(bot.sendChatAction.mock.calls.length).toBe(1);
	expect(bot.sendChatAction).toBeCalledWith(message.chat.id, "typing");
	expect(bot.sendMessage.mock.calls.length).toBe(1);
});
