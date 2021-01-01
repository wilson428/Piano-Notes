const Audio = require("./lib/Audio.js");
const Notes = require("./lib/Notes.js");

console.log(Audio);

let notes = new Notes();

notes.loadAudio([
	Audio.ms500,
	Audio.ms1000,
	Audio.ms2000
]);

export default notes;