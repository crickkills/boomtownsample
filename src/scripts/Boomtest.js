var BOOMTEST = BOOMTEST || {};



/**
 * namespace
 *
 * Class Overview
 *
 * Provides functionality to namespace all classes under the BOOMTEST namespace
 * Ensuring all ressources utilized by the project are under 1 namespace
 *------------------------------------------------------------------*/

(function() {

    BOOMTEST.namespace = function() {
        var a = arguments, o = null, i, j, d, l=a.length, dl;
        for (i = 0; i < l; i = i + 1) {
            d = a[i].split(".");
            dl = d.length;
            o = window;
            for (j = 0; j < dl; j = j + 1) {
                o[d[j]] = o[d[j]] || {};
                o = o[d[j]];
            }
        }
        return o;
    };

}());