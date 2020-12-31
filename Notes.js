const notes = require("./data/notes.json");

const Note = function(note) {
	const that = this;

	that.key = note.name;
	that.number = note.k;

	that.info = {
	    base: "A",
	    natural: "a/0",
	    flat: "bbb/0",
	    sharp: "g##/0",
	    frequency: 27.5
	}

	that.audio = {
		500:  new Audio('./samples/formatted/500/' + noteName + '.mp3'),
		1000: new Audio('./samples/formatted/1000/' + noteName + '.mp3'),
		2000: new Audio('./samples/formatted/2000/' + noteName + '.mp3')		
	}
}

Note.prototype.play = function(duration, callback) {
	const that = this;

	if (!duration || duration !== 500 && duration !== 1000 && duration !== 2000) {
		duration = 1000;
	}

	that.audio[sample].play();

	callback && callback();
}

const Notes = [];

notes.forEach(d => {
	Notes.push(new Note(d));
});

export { Notes }