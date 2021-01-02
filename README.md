# Piano-Notes

JavaScript library for playing high-quality, public-domain piano note samples

# Usage

Install from the repo (with be on npm soon)

	npm install wilson428/Piano-Notes

Then import `Notes` and whichever audio samples you want:

	import { Notes } from '../Piano-Notes'
	import { Piano_500 } from '../Piano-Notes' 	// 500ms samples, ~1MB
	import { Piano_1000 } from '../Piano-Notes'	// 1-second samples, ~2MB
	import { Piano_2000 } from '../Piano-Notes'	// 2-second samples, ~4MB

	let notes = new Notes();

Then, for whichever of the samples you've imported, load them into the `notes` instance:

	notes.loadAudio([ Piano_500, Piano_1000 ]); // can load either one sample or multiple in an array

Then play the notes at your leisure:

	notes.A4.play(500)
	notes.Bb5.play()	// defaults to 1000ms

# Samples

All the samples are loaded as base64 strings in `Piano_500`, etc., so that you don't have to download a bunch of `mp3` files and locate them. The following describes the process for generating these files in case you want to add more samples, but isn't something you need to run otherwise.

## Source

The [University of Iowa Electronic Music Studios](http://theremin.music.uiowa.edu/MISpiano.html) has generously provided free, high-quality `.aiff` files of all 88 notes on a Steinway & Sons Model B. These were downloaded using the [`./samples/download.sh`](./samples/download.sh) script, but you don't need to do this unless you want to format them differently than I have.

## Conversion

We want `mp3` files for maximum [browser compatibility](https://blog.filestack.com/thoughts-and-knowledge/audio-file-format-codec/) and file size. The original sample have a small amount of silence in the beginning that needs to be cut, and they need to be reduced to 1 seconds. This [StackOverflow](https://video.stackexchange.com/questions/23340/how-to-use-ffmpeg-to-fade-in-out-a-veriable-frame-rate-video-clip-with-unknown-d) has useful advice on how to do this with `ffmpeg`:

	ffmpeg -i ./samples/original/Piano.ff.C4.aiff -af loudnorm,silenceremove=start_periods=1:start_silence=0:start_threshold=-40dB,afade=out:st=0.25:d=0.25 -to 0.5 ./samples/test.mp3

You can format them all with [`./samples/format.sh`](./samples/format.sh). This will create three samples for each of the 88 notes: a 500ms, 1-second and 2-second version, all `mp3`s.

## Biniaries

To avoid any lag or complicated paths to the modules, each duration of samples are converted to base64 and wrapped into a JSON file to be imported. To do so--again, you don't have to do this unless you're rebuilding--one runs the Node module [`convertNotes.js`](code/convertNotes.js) in the `code` directory.

This produces three files in the [`data/audio`](data/audio) directory: `audio_500.json`, `audio_1000.json` and `audio_2000.json`. At present, they're 1MB, 2MB and 3.9 MB respectively.

## Building the Distributions

This module can either be imported by another Node module or directly included by a Web page from the `/dist` directory, where you'll find [`Notes.js`](./dist/Notes.js) and [`Notes.min.js`](./dist/Notes.min.js).

If you want to rebuild these, install the [`bundle-module`](https://www.npmjs.com/package/bundle-module) library, which I also wrote, which uses Webpack to bundle a module without requiring you to install all the dependencies:

	npm install -g bundle-module

The run `npm run buile` or `npm run minify`. There's not much difference at all between the two files since the bulk of the file size is the samples.