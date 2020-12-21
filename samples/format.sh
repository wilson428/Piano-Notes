#!/bin/bash
# declare an array called array and define 3 vales
mkdir -p samples/formatted
mkdir -p samples/formatted/500
mkdir -p samples/formatted/1000
mkdir -p samples/formatted/2000

notes=( A0 Bb0 B0 C1 Db1 D1 Eb1 E1 F1 Gb1 G1 Ab1 A1 Bb1 B1 C2 Db2 D2 Eb2 E2 F2 Gb2 G2 Ab2 A2 Bb2 B2 C3 Db3 D3 Eb3 E3 F3 Gb3 G3 Ab3 A3 Bb3 B3 C4 Db4 D4 Eb4 E4 F4 Gb4 G4 Ab4 A4 Bb4 B4 C5 Db5 D5 Eb5 E5 F5 Gb5 G5 Ab5 A5 Bb5 B5 C6 Db6 D6 Eb6 E6 F6 Gb6 G6 Ab6 A6 Bb6 B6 C7 Db7 D7 Eb7 E7 F7 Gb7 G7 Ab7 A7 Bb7 B7 C8 )
for i in "${notes[@]}"
do
	ffmpeg -i ./samples/original/Piano.ff.$i.aiff -af loudnorm,silenceremove=start_periods=1:start_silence=0:start_threshold=-40dB,afade=out:st=0.25:d=0.25 -to 0.5 ./samples/formatted/500/$i.mp3
	ffmpeg -i ./samples/original/Piano.ff.$i.aiff -af loudnorm,silenceremove=start_periods=1:start_silence=0:start_threshold=-40dB,afade=out:st=0.75:d=0.25 -to 1 ./samples/formatted/1000/$i.mp3
	ffmpeg -i ./samples/original/Piano.ff.$i.aiff -af loudnorm,silenceremove=start_periods=1:start_silence=0:start_threshold=-40dB,afade=out:st=1.75:d=0.25 -to 2 ./samples/formatted/2000/$i.mp3
	echo $i.mp3
done