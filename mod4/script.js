(function() {
    var names = ["veeru", "Basanti", "JaggaDaku", "Thakur", "RamuKaka", "RaguRangila", "KalluKana", "Jay", "UjadaUmesh", "JabardastJaved"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();