
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("ambiente_noche")[0].play();sym.$("idiomas").hide();sym.$("Text_gallego").hide();sym.$("Text_ingles").hide();sym.$("Text_castellano").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_charco}","click",function(sym,e){var bocado=sym.getSymbol("animacion_bocado");bocado.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina3.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina5.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){sym.getSymbol("ayuda_anim").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
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

//Edge symbol: 'ilu42_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1064,function(sym,e){sym.play();});
//Edge binding end
})("ilu42_symbol_1");
//Edge symbol end:'ilu42_symbol_1'

//=========================================================

//Edge symbol: 'ilu42_symbol_2'
(function(symbolName){})("ilu42_symbol_2");
//Edge symbol end:'ilu42_symbol_2'

//=========================================================

//Edge symbol: 'ilu42_symbol_3'
(function(symbolName){})("ilu42_symbol_3");
//Edge symbol end:'ilu42_symbol_3'

//=========================================================

//Edge symbol: 'ilu42_symbol_4'
(function(symbolName){})("ilu42_symbol_4");
//Edge symbol end:'ilu42_symbol_4'

//=========================================================

//Edge symbol: 'ilu42_symbol_5'
(function(symbolName){})("ilu42_symbol_5");
//Edge symbol end:'ilu42_symbol_5'

//=========================================================

//Edge symbol: 'ilu42_symbol_6'
(function(symbolName){})("ilu42_symbol_6");
//Edge symbol end:'ilu42_symbol_6'

//=========================================================

//Edge symbol: 'ilu42_symbol_7'
(function(symbolName){})("ilu42_symbol_7");
//Edge symbol end:'ilu42_symbol_7'

//=========================================================

//Edge symbol: 'ilu42_symbol_8'
(function(symbolName){})("ilu42_symbol_8");
//Edge symbol end:'ilu42_symbol_8'

//=========================================================

//Edge symbol: 'ilu42_symbol_9'
(function(symbolName){})("ilu42_symbol_9");
//Edge symbol end:'ilu42_symbol_9'

//=========================================================

//Edge symbol: 'ilu42_symbol_10'
(function(symbolName){})("ilu42_symbol_10");
//Edge symbol end:'ilu42_symbol_10'

//=========================================================

//Edge symbol: 'ilu42_symbol_11'
(function(symbolName){})("ilu42_symbol_11");
//Edge symbol end:'ilu42_symbol_11'

//=========================================================

//Edge symbol: 'ilu42_symbol_12'
(function(symbolName){})("ilu42_symbol_12");
//Edge symbol end:'ilu42_symbol_12'

//=========================================================

//Edge symbol: 'ilu42_symbol_13'
(function(symbolName){})("ilu42_symbol_13");
//Edge symbol end:'ilu42_symbol_13'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'

//=========================================================

//Edge symbol: 'animacion_bocado'
(function(symbolName){})("animacion_bocado");
//Edge symbol end:'animacion_bocado'

//=========================================================

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'
})(jQuery,AdobeEdge,"pagina4");