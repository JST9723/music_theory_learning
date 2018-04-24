// MINOR TRIAD
var minor_triad = [0,3,4];
// DEFAULT INSTRUMENT
var currentInstrument = "piano";
            

$(".notes").text("Click on one of the notes to see the illustrations of minor triads.");
$(document).on('click', ".key", function() {
    $(".white").children().css("background-color", "white");
    $(".black").children().css("background-color", "black");
    var midi = $(this)[0].id;
    var notes = "Notes: ";
    var maxMidi = $("#keyboard").children().last()[0].id;
    for(i = 0; i < minor_triad.length; i++){
        midi = parseInt(midi) + minor_triad[i];
        if(midi <= maxMidi){
            document.getElementById(midi).children[0].style.backgroundColor ="orange";
        }
        midi = midi.toString();
        if(currentInstrument=="piano"){
            piano.triggerAttackRelease(Tone.Frequency(midi, "midi").toNote(), 0.3, Tone.now() + 0.2*i);
        }
        else if(currentInstrument=="amsynth"){
            synth.triggerAttackRelease(Tone.Frequency(midi, "midi").toNote(), 0.3, Tone.now() + 0.2*i);
        }
        else if(currentInstrument=="polySynth"){
            polySynth.triggerAttackRelease(Tone.Frequency(midi, "midi").toNote(), 0.3, Tone.now() + 0.2*i);
        }
        else {
            pluck.triggerAttackRelease(Tone.Frequency(midi, "midi").toNote(), 0.3, Tone.now() + 0.2*i);
        }
        if(i == 0){
            notes += Tone.Frequency(midi, "midi").toNote();
        }
        else{
            notes += " - " + Tone.Frequency(midi, "midi").toNote();
        }
    };
    $(".notes").text(notes);
});

// SELECT INSTRUMENT
$("#amsynth").on("click", function(){
    currentInstrument = "amsynth";
    $('.button.active').removeClass('active');
    $(this).addClass('active');
});

$("#piano").on("click", function(){
    $('.button.active').removeClass('active');
    $(this).addClass('active');
    currentInstrument = "piano";
});

$("#polySynth").on("click", function(){
    $('.button.active').removeClass('active');
    $(this).addClass('active');
    currentInstrument = "polySynth";
});

$("#pluck").on("click", function(){
    $('.button.active').removeClass('active');
    $(this).addClass('active');
    currentInstrument = "pluck";
});

// INITIALIZE INSTRUMENT
var synth = new Tone.AMSynth().toMaster();
var pluck = new Tone.PluckSynth().toMaster();
var polySynth = new Tone.PolySynth().toMaster();
var piano = new Tone.Sampler({
    'A0' : 'A0.[mp3|ogg]',
    'C1' : 'C1.[mp3|ogg]',
    'D#1' : 'Ds1.[mp3|ogg]',
    'F#1' : 'Fs1.[mp3|ogg]',
    'A1' : 'A1.[mp3|ogg]',
    'C2' : 'C2.[mp3|ogg]',
    'D#2' : 'Ds2.[mp3|ogg]',
    'F#2' : 'Fs2.[mp3|ogg]',
    'A2' : 'A2.[mp3|ogg]',
    'C3' : 'C3.[mp3|ogg]',
    'D#3' : 'Ds3.[mp3|ogg]',
    'F#3' : 'Fs3.[mp3|ogg]',
    'A3' : 'A3.[mp3|ogg]',
    'C4' : 'C4.[mp3|ogg]',
    'D#4' : 'Ds4.[mp3|ogg]',
    'F#4' : 'Fs4.[mp3|ogg]',
    'A4' : 'A4.[mp3|ogg]',
    'C5' : 'C5.[mp3|ogg]',
    'D#5' : 'Ds5.[mp3|ogg]',
    'F#5' : 'Fs5.[mp3|ogg]',
    'A5' : 'A5.[mp3|ogg]',
    'C6' : 'C6.[mp3|ogg]',
    'D#6' : 'Ds6.[mp3|ogg]',
    'F#6' : 'Fs6.[mp3|ogg]',
    'A6' : 'A6.[mp3|ogg]',
    'C7' : 'C7.[mp3|ogg]',
    'D#7' : 'Ds7.[mp3|ogg]',
    'F#7' : 'Fs7.[mp3|ogg]',
    'A7' : 'A7.[mp3|ogg]',
    'C8' : 'C8.[mp3|ogg]'
}, {
    'release' : 1,
    'baseUrl' : 'lib/audio/salamander/'
}).toMaster();

// KEYBOARD //

var keyboard = Interface.Keyboard();
