export function zoomController() {
    let tt = null; // event targetTouches;
    let procentS = null;
    document.addEventListener('touchmove', function(event) {
        event = event.originalEvent || event;
        tt = event.targetTouches;
        if (tt.length > 1) {
            event.preventDefault();
            document.body.style.zoom = 0.99;
        }
    }, false);
    /*Defining variables*/
    var objzoom = document.getElementById("root");;
    var scaling = false;
    var dist = 0;
    var scale_factor = 1.0;
    var curr_scale = 1.0;
    var max_zoom = 8.0;
    var min_zoom = 0.5
    var s = objzoom.offsetWidth;
    /*We write a function that determines the distance between the fingers*/
    function distance(p1, p2) {
        return (Math.sqrt(Math.pow((p1.clientX - p2.clientX), 2) + Math.pow((p1.clientY - p2.clientY), 2)));
    }
    /*Catching the beginning of touching*/
    objzoom.addEventListener('touchstart', function(evt) {
        tt = evt.targetTouches;
        if (tt.length >= 2) {
            dist = distance(tt[0], tt[1]);
            scaling = true;
        } else {
            scaling = false;
        }
        tt = evt.targetTouches;
        if (tt.length > 1) {
            evt.preventDefault();
        }
    }, false);
    /*Catching the zoom*/
    objzoom.addEventListener('touchmove', function(evt) {
        tt = evt.targetTouches;
        if (tt.length > 1) {
            evt.preventDefault();
        }
        if (scaling) {
            curr_scale = distance(tt[0], tt[1]) / dist * scale_factor;
            if (distance(tt[0], tt[1]) > dist) {
                procentS = (distance(tt[0], tt[1]) / s) * 100
                if (procentS > 25) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS > 10) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS > 35) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS > 45) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS > 55) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS > 65) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS > 75) {
                    document.body.style.zoom = 0.99;
                }
            }
            if (distance(tt[0], tt[1]) < dist) {
                procentS = (distance(tt[0], tt[1]) / s) * 100
                if (procentS < 50) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS < 80) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS < 35) {
                    document.body.style.zoom = 0.99;
                }
                if (procentS < 20) {
                    document.body.style.zoom = 0.99;
                }
            }
            objzoom.style.WebkitTransform = "scale(0.99)";
        }
    }, false);
    /*Catching the end of the touch*/
    objzoom.addEventListener('touchend', function(evt) {
        tt = evt.targetTouches;
        if (tt.length < 2) {
            scaling = false;
            if (curr_scale < min_zoom) {
                scale_factor = min_zoom;
            } else {
                if (curr_scale > max_zoom) {
                    scale_factor = max_zoom;
                } else {
                    scale_factor = curr_scale;
                }
            }
            objzoom.style.WebkitTransform = "scale(0.99)";
        } else {
            scaling = true;
        }
    }, false)

}