
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("siguiente").hide();sym.$("ambiente_ciudad")[0].play();sym.$("idiomas").hide();sym.$("Text_castellano").show();sym.$("Text_gallego").hide();sym.$("Text_ingles").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetCoche}","click",function(sym,e){sym.$("claxon")[0].play();sym.getSymbol("animacion").play();sym.$("siguiente").show();sym.getSymbol("ayuda_anim").$("Press2").hide();sym.getSymbol("fundido2").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina4.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina 2.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_idioma_white}","click",function(sym,e){if(sym.$("idiomas").is(":visible")){sym.$("idiomas").hide();}else{sym.$("idiomas").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetGallego}","click",function(sym,e){sym.$("Text_ingles").hide();sym.$("Text_castellano").hide();sym.$("Text_gallego").show();sym.$("tap")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetIngles}","click",function(sym,e){sym.$("Text_ingles").show();sym.$("tap")[0].play();sym.$("Text_castellano").hide();sym.$("Text_gallego").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetEspanol}","click",function(sym,e){sym.$("Text_ingles").hide();sym.$("Text_castellano").show();sym.$("Text_gallego").hide();sym.$("tap")[0].play();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'

//=========================================================

//Edge symbol: 'bicho_asustado_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",830,function(sym,e){if(!sym.isPlaying()){sym.play(0);}});
//Edge binding end
})("bicho_asustado_symbol_1");
//Edge symbol end:'bicho_asustado_symbol_1'

//=========================================================

//Edge symbol: 'animacion'
(function(symbolName){})("animacion");
//Edge symbol end:'animacion'

//=========================================================

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'
})(jQuery,AdobeEdge,"pagina3");