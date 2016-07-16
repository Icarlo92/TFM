
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("ambiente_noche")[0].play();sym.$("ambiente_dark")[0].play();sym.$("idiomas").hide();sym.$("Text_ingles2").hide();sym.$("Text_castellano2").show();sym.$("Text_gallego2").hide();yepnope({nope:["jquery-ui-1.10.4.custom.min.js","jquery.ui.touch-punch.min.js"],complete:init});function init(){sym.$("botella").draggable({opacity:0.5,revert:"invalid"});sym.$("targetBotella").droppable({accept:sym.$("botella"),drop:function(){sym.getSymbol("botella").play();sym.$("snap")[0].play();}});sym.$("defaultBotella").droppable({accept:sym.$("botella"),drop:function(){}});sym.$("lata").draggable({opacity:0.5,revert:"invalid"});sym.$("target").droppable({accept:sym.$("lata"),drop:function(){sym.getSymbol("lata").play();sym.$("snap")[0].play();}});sym.$("defaultLata").droppable({accept:sym.$("lata"),drop:function(){}});}
var fundido=sym.getSymbol("fundido");fundido.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anim}","click",function(sym,e){var bicho=sym.getSymbol("anim");bicho.play();sym.$("snif")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina4.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina6.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){var ayuda=sym.getSymbol("ayuda_anim");ayuda.play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_idioma_white}","click",function(sym,e){if(sym.$("idiomas").is(":visible")){sym.$("idiomas").hide();}else{sym.$("idiomas").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetEspanol}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_castellano2").show();sym.$("Text_ingles2").hide();sym.$("Text_gallego2").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetGallego}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_castellano2").hide();sym.$("Text_ingles2").hide();sym.$("Text_gallego2").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetIngles}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_castellano2").hide();sym.$("Text_ingles2").show();sym.$("Text_gallego2").hide();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'lata'
(function(symbolName){})("lata");
//Edge symbol end:'lata'

//=========================================================

//Edge symbol: 'botella'
(function(symbolName){})("botella");
//Edge symbol end:'botella'

//=========================================================

//Edge symbol: 'anim_bicho_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1916,function(sym,e){sym.stop(0);});
//Edge binding end
})("anim_bicho_symbol_1");
//Edge symbol end:'anim_bicho_symbol_1'

//=========================================================

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'
})(jQuery,AdobeEdge,"pagina5");