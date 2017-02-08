function getRandomFace() {
    var faces = [
        'O-O',
        'D?D',
        '<ˇ_ˇ>',
        '((≡^⚲͜^≡))',
        'x_X',
        '(o)*(o)'
    ];

    var index = getRandom(0, faces.length);
    return faces[index];
}

function getRandom(min, max) {
    return Math.floor(Math.random() * max) + min;
}

exports.getRandomFace = getRandomFace;
