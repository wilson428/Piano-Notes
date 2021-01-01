import { Notes } from '../lib/Notes';
import { Piano_500 } from '../lib/Audio';

let notes = new Notes();

notes.loadAudio([
	Piano_500
]);

export default notes;