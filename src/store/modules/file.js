const REGEX = /\w*[^\x00-\x7F]+\w*/g
const SPACE = /[ ]/g
const TAB = /\t/g
const HTML_SPACE = "&nbsp;"
const HTML_TAB = "&nbsp;&nbsp;&nbsp;&nbsp;"

const state = {
	rawText: "",
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
	},
	getRawText(state) {
		return state.rawText;
	}
}

const mutations = {
	'UPDATE_FILE'(state, file) {
		state.file = file;
	},
	'UPDATE_RAW_TEXT'(state, file) {
		state.rawText = file;
	},
	'CLEAR_FILE'(state) {
		state.file = [];
		state.rawText = "";
		state.errorCounter = 0;
		state.lineCounter = 0;
	}
}

function parseLine(line) {
	console.log("log: parsing line");

	const numErrors = ((line || '').match(REGEX) || []).length;

	let parsedLine = line.trimEnd()

	parsedLine = parsedLine.replace(SPACE, HTML_SPACE)

	parsedLine = parsedLine.replace(REGEX, "<span style=\"color: #c20000;font-weight: bolder;\">$&</span>");

	parsedLine = parsedLine.replace(TAB, HTML_TAB);

	state.errorCounter += numErrors;

	const lineObject = {
		id: state.lineCounter++,
		line: parsedLine,
		error: numErrors > 0,
	}

	return lineObject;
}

function parseFile(file) {
	return file.split("\n").map(line => parseLine(line));
}

const actions = {
	updateFile: ({ commit }, file) => {
		console.log("log: updating file");

		commit('CLEAR_FILE');

		commit('UPDATE_RAW_TEXT', file);

		// Parse the file into lines
		const newFile = parseFile(file);

		console.log(newFile);

		commit('UPDATE_FILE', newFile);
	}
}

export default {
	state,
	getters,
	mutations,
	actions
}