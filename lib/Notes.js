import notes from "../data/notes.json" assert { type: "json" };

const Note = function(note) {
	const that = this;

	that.name = note.name;
	that.number = note.k;

	that.info = Object.assign({}, note);

	that.audio = {}
}

Note.prototype.play = function(duration, callbackBefore, callbackAfter) {
	const that = this;

	if (!duration) { // || duration !== 500 && duration !== 1000 && duration !== 2000) {
		duration = 1000;
	}

	if (!that.audio.hasOwnProperty(duration)) {
		console.log(`There's no ${ duration }ms sample for ${ that.name }.`);
		return;
	}

	that.audio[duration].play();

	callbackBefore && callbackBefore();

	if (callbackAfter) {
		setTimeout(function() {
			callbackAfter();
		}, duration);
	}
}

const Notes = function() {
	const that = this;
	that.notes = {};
	that.list = [];
	that.samplesLoaded = {};

	notes.forEach(d => {
		that.notes[d.name] = new Note(d);
		that[d.name] = that.notes[d.name];	// notes can be referrenced either directly or from `.notes`
		that.list.push(that.notes[d.name]);	// or from the array `list`
	});
}

/* 
a sample takes the form of: 
	{
		duration: `MS`,
		notes: { A0: `base64...`, ... }
	}
*/

Notes.prototype.loadAudio = function(samples) {
	const that = this;

	if (!Array.isArray(samples)) {
		samples = [ samples ];
	}

	samples.forEach(sample => {

		that.samplesLoaded[sample.duration] = true;

		Object.keys(sample.notes).forEach(key => {
			let b64 = sample.notes[key];
			if (b64.indexOf("data:audio/mpeg;base64,") === -1) {
				b64 = "data:audio/mpeg;base64," + b64;
			}

			that.notes[key].audio[sample.duration] = new Audio(b64);
		});

		console.log("Loaded duration", sample.duration)
	})
}

export { Notes };
