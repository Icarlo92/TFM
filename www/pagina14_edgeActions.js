
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){sym.getSymbol("ayuda_anim").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina15.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina 13.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("ambiente_pajaros")[0].play();sym.$("idiomas").hide();sym.$("Text_ingles").hide();sym.$("Text_gallego").hide();sym.$("Text_castellano").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_lametazo_symbol_13}","click",function(sym,e){sym.getSymbol("lametazo_symbol_13").play();sym.$("lick")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_idioma_white}","click",function(sym,e){if(sym.$("idiomas").is(":visible")){sym.$("idiomas").hide();}else{sym.$("idiomas").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetGallego}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_gallego").show();sym.$("Text_ingles").hide();sym.$("Text_castellano").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetIngles}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_gallego").hide();sym.$("Text_ingles").show();sym.$("Text_castellano").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetEspanol}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_gallego").hide();sym.$("Text_ingles").hide();sym.$("Text_castellano").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'lenguetazo'
(function(symbolName){})("lenguetazo");
//Edge symbol end:'lenguetazo'

//=========================================================

//Edge symbol: 'press_1'
(function(symbolName){})("press_1");
//Edge symbol end:'press_1'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'

//=========================================================

//Edge symbol: 'lametazo_symbol_1'
(function(symbolName){})("lametazo_symbol_1");
//Edge symbol end:'lametazo_symbol_1'
})(jQuery,AdobeEdge,"pagina14");