
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetPuertas}","mousedown",function(sym,e){var puertas=sym.getSymbol("puertas3");puertas.play();sym.$("cerrarPuerta")[0].pause();sym.$("abrirPuerta")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetPuertas}","mouseup",function(sym,e){var puertas=sym.getSymbol("puertas3");puertas.playReverse();sym.$("abrirPuerta")[0].pause();sym.$("cerrarPuerta")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("ambiente_ciudad")[0].play();sym.$("idiomas").hide();sym.$("Text_castellano").show();sym.$("Text_ingles").hide();sym.$("Text_gallego").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetBicho}","click",function(sym,e){sym.$("barf")[0].play();var boca=sym.getSymbol("boca");boca.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina1.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina3.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){var ayuda=sym.getSymbol("ayuda_anim");ayuda.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_idioma_white}","click",function(sym,e){if(sym.$("idiomas").is(":visible")){sym.$("idiomas").hide();}else{sym.$("idiomas").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetGallego}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_ingles").hide();sym.$("Text_castellano").hide();sym.$("Text_gallego").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetIngles}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_ingles").show();sym.$("Text_castellano").hide();sym.$("Text_gallego").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetEspanol}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_ingles").hide();sym.$("Text_castellano").show();sym.$("Text_gallego").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'puertas'
(function(symbolName){})("puertas");
//Edge symbol end:'puertas'

//=========================================================

//Edge symbol: 'boca'
(function(symbolName){})("boca");
//Edge symbol end:'boca'

//=========================================================

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'
})(jQuery,AdobeEdge,"pagina2");