const fs = require('fs');

const NOTE_NAMES = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

// ordered by frequency, since C4 is lower than B4
const OCTAVE = [
	{ k: null, name: "C",  base: "C", natural: "c",  flat: "dbb", sharp: "b#"  },
	{ k: null, name: "Db", base: "D", natural: null, flat: "db",  sharp: "c#"  },
	{ k: null, name: "D",  base: "D", natural: "d",  flat: "ebb", sharp: "c##" },
	{ k: null, name: "Eb", base: "E", natural: null, flat: "eb",  sharp: "d#"  },
	{ k: null, name: "E",  base: "E", natural: "e",  flat: "fb",  sharp: "d##" },
	{ k: null, name: "F",  base: "F", natural: "f",  flat: "gbb", sharp: "e#"  },
	{ k: null, name: "Gb", base: "G", natural: null, flat: "gb",  sharp: "f#"  },
	{ k: null, name: "G",  base: "G", natural: "g",  flat: "abb", sharp: "f##" },
	{ k: null, name: "Ab", base: "A", natural: null, flat: "ab",  sharp: "g#"  },
	{ k: null, name: "A",  base: "A", natural: "a",  flat: "bbb", sharp: "g##" },
	{ k: null, name: "Bb", base: "B", natural: null, flat: "bb",  sharp: "a#"  },
	{ k: null, name: "B",  base: "B", natural: "b",  flat: "cb",  sharp: "a##" }	
];

// a note refers to a member of the octave and it's place on the keyboard

// e.g. { name: "C4",  base: "C", n: "c/4", f: "dbb/4", s: "b#/3"  },

function generateOctave(octave_number) {
	let o = [];

	OCTAVE.forEach(function(octave_note, n) {
		let note = Object.assign({}, octave_note);

		note.k = octave_number * 12 + n - 8; // key numbers, unlike register numbers, begin on A, not on C
		note.name = note.name + octave_number;
		note.natural = note.natural ? (note.natural + "/" + octave_number) : null;
		note.flat = note.flat + "/" + octave_number;
		note.sharp = n === 0 ? ( note.sharp + "/" + (octave_number - 1 )) : note.sharp + "/" + octave_number;

		o.push(note);
	});

	return o;
}

let keys = [];

for (let c = 0; c <= 8; c += 1) {
	keys = keys.concat(generateOctave(c));
}

keys = keys.filter(d => {
	return d.k > 0 && d.k <= 88;
});

keys.forEach(key => {
	// https://en.wikipedia.org/wiki/Piano_key_frequencies
	key.frequency = +(Math.pow(2, (key.k - 49) / 12) * 440).toPrecision(6);
});

fs.writeFileSync("../data/notes.json", JSON.stringify(keys, null, 2));