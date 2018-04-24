var natural_minor_scales = [0,2,1,2,2,1,2,2];
var harmonic_minor_scales = [0,2,1,2,2,1,3,1];
var melodic_minor_scales = [0,2,1,2,2,2,2,1];
var currentInstrument = "piano";
var current_scale = natural_minor_scales;
            

$(".notes").text("Click on one of the minors to see the illustrations of minor scales.");
$(document).on('click', ".scale", function() {
    $(".white").children().css("background-color", "white");
    $(".black").children().css("background-color", "black");
    var midi = $(this)[0].id;
    var notes = "Notes: ";
    for(i = 0; i < current_scale.length; i++){
        midi = parseInt(midi) + current_scale[i];
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
        document.getElementById(midi).children[0].style.backgroundColor ="orange";
        if(i == 0){
            notes += Tone.Frequency(midi, "midi").toNote();
        }
        else{
            notes += " - " + Tone.Frequency(midi, "midi").toNote();
        }
    };
    $(".notes").text(notes);
});

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

$("#harmonic").on("click", function(){
    $('.buttons.active').removeClass('active');
    $(this).addClass('active');
    current_scale = harmonic_minor_scales;
});

$("#natural").on("click", function(){
    $('.buttons.active').removeClass('active');
    $(this).addClass('active');
    current_scale = natural_minor_scales;
});

$("#melodic").on("click", function(){
    $('.buttons.active').removeClass('active');
    $(this).addClass('active');
    current_scale = melodic_minor_scales;
});


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

// GUI //

var keyboard = Interface.Keyboard();

keyboard.keyDown = function (note) {
    if(currentInstrument=="piano"){
        piano.triggerAttack(note);
    }
    else if(currentInstrument=="amsynth"){
        synth.triggerAttackRelease(note, 0.3);
    }
    else if(currentInstrument=="polySynth"){
        polySynth.triggerAttack(note);
    }
    else {
        pluck.triggerAttackRelease(note, 1.3);
    }
};

keyboard.keyUp = function (note) {
    if(currentInstrument=="piano"){
        piano.triggerRelease(note);
    }
    else if(currentInstrument=="polySynth"){
        polySynth.triggerRelease(note);
    }
};
