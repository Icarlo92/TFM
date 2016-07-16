
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina 13.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina11.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){var ayuda=sym.getSymbol("ayuda_anim");ayuda.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("ambiente_pajaros")[0].play();sym.$("siguiente").hide();sym.$("idiomas").hide();sym.$("Text_gallego").hide();sym.$("Text_ingles").hide();sym.$("Text_castellano").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_chica}","click",function(sym,e){sym.getSymbol("chica").play();sym.play();sym.getSymbol("pelota").play();sym.$("siguiente").show();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4333,function(sym,e){sym.stop();});
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

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'

//=========================================================

//Edge symbol: 'chica'
(function(symbolName){})("chica");
//Edge symbol end:'chica'

//=========================================================

//Edge symbol: '_00000_1x53_symbol_1'
(function(symbolName){})("_00000_1x53_symbol_1");
//Edge symbol end:'_00000_1x53_symbol_1'

//=========================================================

//Edge symbol: 'pelota'
(function(symbolName){})("pelota");
//Edge symbol end:'pelota'
})(jQuery,AdobeEdge,"pagina12");