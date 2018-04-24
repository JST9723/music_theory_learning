
/* Music Notation */
VF = Vex.Flow;

// Create an SVG renderer and attach it to the DIV element named "treble".
var div1 = document.getElementById("treble")
var renderer = new VF.Renderer(div1, VF.Renderer.Backends.SVG);

// Configure the rendering context.
renderer.resize(100, 110);
var context = renderer.getContext();
context.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");

// Create a stave of width 90 at position 0, 0 on the canvas.
var stave = new VF.Stave(0, 0, 90);

// Add a clef and time signature.
stave.addClef("treble");

// Connect it to the rendering context and draw!
stave.setContext(context).draw();


// Create an SVG renderer and attach it to the DIV element named "treble-middleC".
var div2 = document.getElementById("treble-middleC")
var renderer2 = new VF.Renderer(div2, VF.Renderer.Backends.SVG);
var context2 = renderer2.getContext();
context2.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
renderer2.resize(185, 100);
var stave2 = new VF.Stave(0, 0, 180);
stave2.addClef("treble").addTimeSignature("4/4");
stave2.setContext(context2).draw();

// Create the notes
var notes = [
  // A quarter-note C.
  new VF.StaveNote({ keys: ["c/4"], duration: "q" }),
  // position of the rest.
  new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),
  new VF.StaveNote({ keys: ["b/4"], duration: "hr" })
];

// Create a voice in 4/4 and add above notes
var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 170);

// Render voice
voice.draw(context2, stave2);

// Bass clef
var div3 = document.getElementById("bass")
var renderer3 = new VF.Renderer(div3, VF.Renderer.Backends.SVG);
renderer3.resize(100, 110);
var context3 = renderer3.getContext();
context3.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
var stave3 = new VF.Stave(0, 0, 90);
stave3.addClef("bass"); // Add bass clef
stave3.setContext(context3).draw();

// Create an SVG renderer and attach it to the DIV element named "bass-middleC".
var div4 = document.getElementById("bass-middleC")
var renderer4 = new VF.Renderer(div4, VF.Renderer.Backends.SVG);
var context4 = renderer4.getContext();
context4.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
renderer4.resize(185, 100);
var stave4 = new VF.Stave(0, 0, 180);
stave4.addClef("bass").addTimeSignature("4/4");
stave4.setContext(context4).draw();
var notes4 = [
  // A quarter-note C.
  new VF.StaveNote({ clef: 'bass', keys: ["c/4"], duration: "q", auto_stem: true }),
  // position of the rest.
  new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),
  new VF.StaveNote({ keys: ["b/4"], duration: "hr" })
];
var voice4 = new VF.Voice({num_beats: 4,  beat_value: 4});
voice4.addTickables(notes4);
var formatter = new VF.Formatter().joinVoices([voice4]).format([voice4], 170);
// Render voice
voice4.draw(context4, stave4);


// Tenor clef
var div5 = document.getElementById("tenor")
var renderer5 = new VF.Renderer(div5, VF.Renderer.Backends.SVG);
renderer5.resize(100, 110);
var context5 = renderer5.getContext();
context5.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
var stave5 = new VF.Stave(0, 0, 90);
stave5.addClef("tenor"); // Add bass clef
stave5.setContext(context5).draw();

// Create an SVG renderer and attach it to the DIV element named "bass-middleC".
var div6 = document.getElementById("tenor-middleC")
var renderer6 = new VF.Renderer(div6, VF.Renderer.Backends.SVG);
var context6 = renderer6.getContext();
context6.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
renderer6.resize(185, 100);
var stave6 = new VF.Stave(0, 0, 180);
stave6.addClef("tenor").addTimeSignature("4/4");
stave6.setContext(context6).draw();
var notes6 = [
  // A quarter-note C.
  new VF.StaveNote({ clef: 'tenor', keys: ["c/4"], duration: "q", auto_stem: true }),
  // position of the rest.
  new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),
  new VF.StaveNote({ keys: ["b/4"], duration: "hr" })
];
var voice6 = new VF.Voice({num_beats: 4,  beat_value: 4});
voice6.addTickables(notes6);
var formatter = new VF.Formatter().joinVoices([voice6]).format([voice6], 170);
// Render voice
voice6.draw(context6, stave6);


// Alto clef
var div7 = document.getElementById("alto")
var renderer7 = new VF.Renderer(div7, VF.Renderer.Backends.SVG);
renderer7.resize(100, 110);
var context7 = renderer7.getContext();
context7.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
var stave7 = new VF.Stave(0, 0, 90);
stave7.addClef("alto"); // Add alto clef
stave7.setContext(context7).draw();

// Create an SVG renderer and attach it to the DIV element named "alto-middleC".
var div8 = document.getElementById("alto-middleC")
var renderer8 = new VF.Renderer(div8, VF.Renderer.Backends.SVG);
var context8 = renderer8.getContext();
context8.setFont("Arial", 10, "").setBackgroundFillStyle("#eed");
renderer8.resize(185, 100);
var stave8 = new VF.Stave(0, 0, 180);
stave8.addClef("alto").addTimeSignature("4/4");
stave8.setContext(context8).draw();
var notes8 = [
  // A quarter-note C.
  new VF.StaveNote({ clef: 'alto', keys: ["c/4"], duration: "q", auto_stem: true }),
  // position of the rest.
  new VF.StaveNote({ keys: ["b/4"], duration: "qr" }),
  new VF.StaveNote({ keys: ["b/4"], duration: "hr" })
];
var voice8 = new VF.Voice({num_beats: 4,  beat_value: 4});
voice8.addTickables(notes8);
var formatter = new VF.Formatter().joinVoices([voice8]).format([voice8], 170);
// Render voice
voice8.draw(context8, stave8);
