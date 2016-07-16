
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_ilu10_0001_bicho-copia2}","click",function(sym,e){sym.play();sym.$("cry")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina 8.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina11.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){var ayuda=sym.getSymbol("ayuda_anim");ayuda.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("ambiente_shelter")[0].play();sym.$("idiomas").hide();sym.$("Text_ingles").hide();sym.$("Text_gallego").hide();sym.$("Text_castellano").show();});
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

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'
})(jQuery,AdobeEdge,"pagina10");