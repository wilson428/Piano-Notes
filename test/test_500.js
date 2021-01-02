import { Notes } from '../lib/Notes';
import { Piano_500 } from '../lib/Audio/Audio_500';

let notes = new Notes();

notes.loadAudio([
	Piano_500
]);

export default notes;