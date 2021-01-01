const fs = require('fs');

const audio = {
	500: {},
	1000: {},
	2000: {}	
}

const bufferToBase64 = function(buffer) {
    return Buffer.from(buffer).toString('base64');
};

let filenames = {
	500: fs.readdirSync("../samples/formatted/500/").filter(d => /mp3/.test(d)),
	1000: fs.readdirSync("../samples/formatted/1000/").filter(d => /mp3/.test(d)),
	2000: fs.readdirSync("../samples/formatted/2000/").filter(d => /mp3/.test(d))
}

const DURATIONS = [ 500, 1000, 2000 ];

DURATIONS.forEach(DURATION => {
	filenames[DURATION].forEach(filename => {
		let key = filename.split(".")[0];
		audio[DURATION][key] = bufferToBase64(fs.readFileSync(`../samples/formatted/${ DURATION }/${ key }.mp3`));
	});

	fs.writeFileSync(`../data/audio/audio_${ DURATION }.json`, JSON.stringify(audio[DURATION], null, 2))
});
