// JavaScript Document
/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

"use strict" ;

// globale declaraties:
// eerst declareren we variabelen voor alle elementen in de HTML die een rol spelen in dit script
var expandcommentsButton = document.querySelector('#expandcomments');
var hidecommentsButton = document.querySelector('#hidecomments');

// eventHandlers:
// deze functie zet de lamp aan, door de .src van het lamp-element uit de HTML aan te passen naar een brandend lampje
function tooncomments() {
	document.body.classList.remove('extracomments');
    document.body.classList.add('verstopdeorigineleknop');
    document.body.classList.add('toonextracomments');

}

function commentsweghalen() {
    document.body.classList.remove('verstopdeorigineleknop');
    document.body.classList.remove('toonextracomments');
}


// eventListeners:
// de aanknop 'luistert' naar de 'click' en als ie een 'click' hoort dan roept ie de eventHandler-functie 'lampaan' aan
expandcommentsButton.addEventListener('click', tooncomments);
hidecommentsButton.addEventListener('click', commentsweghalen);

