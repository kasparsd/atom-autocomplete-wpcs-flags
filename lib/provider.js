'use babel';

import wpcsFlags from '../data/wpcs-flags';

class BasicProvider {

	flags = [];

	constructor() {
		// Offer suggestions in comments only.
		this.selector = '.php .comment';

		this.flags = wpcsFlags.map((flag) => {
			return 'WPCS: ' + flag + ' ok.';
		});
	}

	getSuggestions(options) {
		const { prefix } = options;

		if (prefix.length > 1) {
			return this.findMatchingSuggestions(prefix);
		}
	}

	findMatchingSuggestions(prefix) {
		prefix = prefix.toLowerCase();

		let matchingWords = this.flags.filter((flag) => {
			flag = flag.toLowerCase();
			return (flag.startsWith(prefix) || flag.includes(prefix));
		});

		let matchingSuggestions = matchingWords.map((word) => {
			return { text: word };
		});

		return matchingSuggestions;
	}
}

export default new BasicProvider();
