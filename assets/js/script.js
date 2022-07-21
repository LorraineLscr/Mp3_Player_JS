import { playlist } from "./lib/playlist.js";
import {slider} from "./lib/slider.js"; 
import {play, pause, audioManager} from "./lib/audioManager.js";
import {volumeManager} from "./lib/volumeManager.js"; 
import {timeManager} from "./lib/timeManager.js"; 
import {infosManager} from "./lib/infosManager.js"; 


// déclaration variables
let currentTrack = 0;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev"); 
const playPause = document.querySelector(".playPause");
const volumeDown = document.querySelector(".volumeDown"); 
const volumeUp = document.querySelector(".volumeUp"); 
const time = document.querySelector(".time"); 
//
const sliderDiv = document.querySelector(".slider"); 
const hammerSlider = new Hammer(sliderDiv); 

// les variables à partager entre mes différents modules doivent 
// devenir globales -> globalThis
globalThis.playlist = playlist; 
globalThis.currentTrack = currentTrack; 
globalThis.next = next; 
globalThis.prev = prev; 
globalThis.playPause = playPause; 
globalThis.volumeDown = volumeDown; 
globalThis.volumeUp = volumeUp;  
globalThis.time = time; 
globalThis.infosManager = infosManager; 
globalThis.sliderDiv = sliderDiv; 
globalThis.hammerSlider = hammerSlider; 

// objet audio
let audio = new Audio(playlist[currentTrack].mp3);
globalThis.audio = audio; 


//slider
slider(); 
// audioManager
audioManager(); 
//volumeManager
volumeManager(); 
// temps
timeManager(); 
// infos
infosManager(); 
