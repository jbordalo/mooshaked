const REGEX = /\w*[^\x00-\x7F]+\w*/g

const state = {
	file: [],
	errorCounter: 0,
	lineCounter: 0
}

const getters = {
	getFile(state) {
		return state.file;
	},
	getErrors(state) {
		return state.errorCounter;
	}
}

const mutations = {
	'UPDATE_FILE'(state, file) {
		state.file = file;
	},
	'CLEAR_FILE'(state) {
		state.file = [];
		state.errorCounter = 0;
		state.lineCounter = 0;
	}
}

function parseLine(line) {
	console.log("log: parsing line");

	const numErrors = ((line || '').match(REGEX) || []).length;

	const parsedLine = line.replace(REGEX, "<span style=\"color: red; font-weight: bolder;\">$&</span>");

	state.errorCounter += numErrors;

	const lineObject = {
		id: state.lineCounter++,
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