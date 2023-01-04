import notes500 from "../../data/audio/audio_500.json" assert { type: "json" };
import notes1000 from "../../data/audio/audio_1000.json" assert { type: "json" };
import notes2000 from "../../data/audio/audio_2000.json" assert { type: "json" };

const Piano = {
	500:  { duration: 500,  notes: notes500 },
	1000: { duration: 1000, notes: notes1000 },
	2000: { duration: 2000, notes: notes2000 },
}

export { Piano }
