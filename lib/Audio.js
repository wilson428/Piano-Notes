const AUDIO = {
	500: require("../data/audio/audio_500.json"),
	1000: require("../data/audio/audio_1000.json"),
	2000: require("../data/audio/audio_2000.json")
}

const Piano_500 = { duration: 500, notes: AUDIO[500] };
const Piano_1000 = { duration: 1000, notes: AUDIO[1000] };
const Piano_2000 = { duration: 2000, notes: AUDIO[2000] };

export { Piano_500, Piano_1000, Piano_2000 }