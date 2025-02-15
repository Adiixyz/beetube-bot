const errorHandler = require("../utils/error-handler");
const { settings, keyboard } = require("../utils/bot-helper");

module.exports = class Base {
	constructor(bot) {
		this.bot = bot;
		this.type = "setting";
	}

	/**
	 * Settings
	 * @param  {} {chat
	 * @param  {} message_id}
	 */
	async setting({ chat, message_id }) {
		await this.bot.editMessageText(settings.text, {
			...settings.keyboard,
			message_id,
			chat_id: chat.id,
		});
	}

	/**
	 * @param  {} value
	 */
	toggleFeedbackText(value) {
		return (value ? "\u{2705} En" : "\u{274C} Dis") + "abled";
	}

	/**
	 * Task resolver
	 * @param  {} data
	 * @param  {} message
	 */
	async resolve(data, message) {
		try {
			switch (data.type) {
				case `index_${this.type}`:
					await this.setting(message);
					break;
			}
		} catch (error) {
			errorHandler(this.bot, message.chat.id, error);
		}
	}
};
