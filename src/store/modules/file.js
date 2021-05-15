const REGEX = /\w*[áàéèíìóòúùãẽĩõũ]+\w*/g

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
	'CLEAR_FILE'(state) {
		state.file = [];
	}
}

function parseLine(line) {
	console.log("log: parsing line");

	const parsedLine = line.replace(REGEX, "<span style=\"color: red; font-weight: bolder;\">$&</span>");

	const lineObject = {
		id: state.file.length,
		line: parsedLine,
		error: line !== parsedLine,
	}

	return lineObject;
}

function parseFile(file) {
	return file.split("\n").map(line => parseLine(line));
}

const actions = {
	updateFile: ({ commit }, file) => {
		console.log("log: updating file");

		commit('CLEAR_FILE')

		// Parse the file into lines
		const newFile = parseFile(file);

		commit('UPDATE_FILE', newFile);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}