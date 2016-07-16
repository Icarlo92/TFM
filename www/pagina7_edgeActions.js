
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("ambiente_vet")[0].play();sym.$("siguiente").hide();sym.$("idiomas").hide();sym.$("Text_ingles").hide();sym.$("Text_gallego").hide();sym.$("Text_castellano").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetBrazo}","click",function(sym,e){var brazo=sym.getSymbol("brazo");brazo.play();sym.$("bip")[0].play();sym.$("siguiente").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina6.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){var ayuda=sym.getSymbol("ayuda_anim");ayuda.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetBrazo}","swiperight",function(sym,e){var brazo=sym.getSymbol("brazo");if(sym.$("siguiente").is(":visible")){sym.$("siguiente").hide();}else{sym.$("siguiente").show();}
brazo.play();sym.$("bip")[0].play();sym.$("siguiente").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina9.html","_self");});
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

//Edge symbol: 'brazo'
(function(symbolName){})("brazo");
//Edge symbol end:'brazo'

//=========================================================

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'

//=========================================================

//Edge symbol: 'targetBrazo'
(function(symbolName){})("targetBrazo");
//Edge symbol end:'targetBrazo'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'
})(jQuery,AdobeEdge,"pagina7");