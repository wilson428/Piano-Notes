import { Notes } from './lib/Notes';
import { Piano_2000 } from './lib/Audio';

let notes = new Notes();

notes.loadAudio([
	Piano_2000
]);

export default notes;