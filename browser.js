const Audio = require("./lib/Audio.js");
const Notes = require("./lib/Notes.js");

console.log(Audio);

let notes = new Notes();

notes.loadAudio([
	Audio.NOTES_500ms,
	Audio.NOTES_1000ms,
	Audio.NOTES_2000ms
]);

export default notes;