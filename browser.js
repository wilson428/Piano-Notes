import { Notes } from './lib/Notes';
import { Piano } from './lib/Audio/Audio';
// import { Piano_500 } from './lib/Audio/Audio_500';
// import { Piano_1000 } from './lib/Audio/Audio_1000';
// import { Piano_2000 } from './lib/Audio/Audio_2000';

let notes = new Notes();

console.log(Piano)

notes.loadAudio([
	Piano[500],
	Piano[1000],
	Piano[2000]
]);

export default notes;