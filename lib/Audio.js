const AUDIO = {
	500: require("../data/audio/audio_500.json"),
	1000: require("../data/audio/audio_1000.json"),
	2000: require("../data/audio/audio_2000.json")
}

module.exports = { 
	ms500: { duration: 500, notes: AUDIO[500] },
	ms1000: { duration: 1000, notes: AUDIO[1000] },
	ms2000: { duration: 2000, notes: AUDIO[2000] }
}