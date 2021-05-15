const REGEX = /\w*[áàéèíìóòúùãẽĩõũ]+\w*/

const state = {
	file: []
}

const getters = {
	getFile(state) {
		return state.file;
	}
}

const mutations = {
	'UPDATE_FILE'(state, file) {
		state.file = file;
	},
}

function parseLine(line) {
	console.log("log: parsing line");

	const parsedLine = line.replace(REGEX, "<span class=\"errorWord\">$&</span>");

	const lineObject = {
		id: state.file.length,
		line: parsedLine,
		error: line !== parsedLine,
	}

	console.log("Line:", lineObject);

	return lineObject;
}

function parseFile(file) {
	return file.split("\n").map(line => parseLine(line));
}

const actions = {
	updateFile: ({ commit }, file) => {
		console.log("log: updating file");
		// Parse the file into lines

		const newFile = parseFile(file);
		console.log("file: ", newFile);

		commit('UPDATE_FILE', newFile);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}