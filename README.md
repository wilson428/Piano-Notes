# PianoNotes

JavaScript library for playing high-quality, public domain piano note samples

## Source

The [Univerity of Iowa Electronic Music Studios](http://theremin.music.uiowa.edu/MISpiano.html) has generously provided free, high-quality `.aiff` files of all 88 notes on a Steinway & Sons Model B. These were downloaded using the [./samples/download.sh](./samples/download.sh) script, but you don't need to do this unless you want to format them differently than I have.

## Conversion

We want `mp3` files for maximum [browser compatibility](https://blog.filestack.com/thoughts-and-knowledge/audio-file-format-codec/) and file size. The original sample have a small amount of silence in the beginning that needs to be cut, and they need to be reduced to 1 seconds. This [StackOverflow](https://video.stackexchange.com/questions/23340/how-to-use-ffmpeg-to-fade-in-out-a-veriable-frame-rate-video-clip-with-unknown-d) has useful advice on how to do this with `ffmpeg`:

	ffmpeg -i ./samples/original/Piano.ff.C4.aiff -af loudnorm,silenceremove=start_periods=1:start_silence=0:start_threshold=-40dB,afade=out:st=0.25:d=0.25 -to 0.5 ./samples/test.mp3

You can format them all with `./samples/format.sh`. This will create three samples for each of the 88 notes: a 500ms, 1-second and 2-second version, all `mp3`s.

