
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("siguiente").hide();sym.$("parque_ambiente")[0].play();sym.$("idiomas").hide();sym.$("siguiente").hide();sym.$("Text_ingles").hide();sym.$("Text_gallego").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){var ayuda=sym.getSymbol("ayuda_anim");ayuda.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina 2.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetAnim}","click",function(sym,e){sym.getSymbol("lanzar_bueno_symbol_1").play();sym.$("siguiente").show();sym.$("lanzar")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetAnim}","swipeleft",function(sym,e){sym.getSymbol("lanzar_bueno_symbol_1").play();sym.$("siguiente").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetIngles}","click",function(sym,e){sym.$("ingles").play;sym.$("tap")[0].play();sym.$("Text_gallego").hide();sym.$("Text_castellano").hide();sym.$("Text_ingles").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetGallego}","click",function(sym,e){sym.$("gallego").play;sym.$("tap")[0].play();sym.$("Text_ingles").hide();sym.$("Text_castellano").hide();sym.$("Text_gallego").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetEspanol}","click",function(sym,e){sym.$("espanol").play;sym.$("tap")[0].play();sym.$("Text_ingles").hide();sym.$("Text_gallego").hide();sym.$("Text_castellano").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_idioma_white}","click",function(sym,e){if(sym.$("idiomas").is(":visible")){sym.$("idiomas").hide();}else{sym.$("idiomas").show();}});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'

//=========================================================

//Edge symbol: 'animacion_bocado'
(function(symbolName){})("animacion_bocado");
//Edge symbol end:'animacion_bocado'

//=========================================================

//Edge symbol: 'lanzar_bueno_symbol_1'
(function(symbolName){})("lanzar_bueno_symbol_1");
//Edge symbol end:'lanzar_bueno_symbol_1'
})(jQuery,AdobeEdge,"pagina1");