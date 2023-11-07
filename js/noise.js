function generateNoise(opacity) {
    if (!document.createElement('canvas').getContext) {
        return false;
    }

    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext('2d');
    var x, y, r, g, b;
    opacity = opacity || 0.2;

    canvas.width = 100;
    canvas.height = 100;
    ctx = canvas.getContext("2d");

    for (x = 0; x < canvas.width; x++) {
        for (y = 0; y < canvas.height; y++) {
            r = Math.floor(Math.random() * 80);
            g = Math.floor(Math.random() * 80);
            b = Math.floor(Math.random() * 80);
            ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
            ctx.fillRect(x, y, 1, 1);
        }
    }

    document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
}

function UnCryptMailto(s) {
    var n = 0;
    var r = "";
    
    for (var i = 0; i < s.length; i++) {
        n = s.charCodeAt(i);
        if (n >= 8364) {
            n = 128;
        }
        r += String.fromCharCode(n - 1);
    }
    
    return r;
}

function linkTo_UnCryptMailto(s) {
    location.href = UnCryptMailto(s);
}
