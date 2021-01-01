const AUDIO = {
	500: require("../data/audio/audio_500.json"),
	1000: require("../data/audio/audio_1000.json"),
	2000: require("../data/audio/audio_2000.json")
}

module.exports = { 
	NOTES_500ms: { duration: 500, notes: AUDIO[500] },
	NOTES_1000ms: { duration: 1000, notes: AUDIO[1000] },
	NOTES_2000ms: { duration: 2000, notes: AUDIO[2000] }
}