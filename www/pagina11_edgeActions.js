
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){yepnope({nope:["jquery-ui-1.10.4.custom.min.js","jquery.ui.touch-punch.min.js"],complete:init});function init(){sym.$("Donut").draggable({opacity:0.5,revert:"invalid"});sym.$("targetDonut").droppable({accept:sym.$("Donut"),drop:function(){sym.getSymbol("Donut").play();sym.$("snap")[0].play();}});sym.$("defaultDonut").droppable({accept:sym.$("Donut"),drop:function(){}});sym.$("Cuerda").draggable({opacity:0.5,revert:"invalid"});sym.$("targetCuerda").droppable({accept:sym.$("Cuerda"),drop:function(){sym.getSymbol("Cuerda").play();sym.$("snap")[0].play();}});sym.$("defaultCuerda").droppable({accept:sym.$("Cuerda"),drop:function(){}});sym.$("Hueso").draggable({opacity:0.5,revert:"invalid"});sym.$("targetHueso").droppable({accept:sym.$("Hueso"),drop:function(){sym.getSymbol("Hueso").play();sym.$("snap")[0].play();}});sym.$("defaultHueso").droppable({accept:sym.$("Hueso"),drop:function(){}});}
sym.$("tormenta")[0].play();sym.getSymbol("lluvia").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_bicho}","click",function(sym,e){sym.$("bicho_llora4")[0].play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_anterior}","click",function(sym,e){window.open("pagina10.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ayuda}","click",function(sym,e){sym.getSymbol("ayuda_animCopy").play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_siguiente}","click",function(sym,e){window.open("pagina12.html","_self");});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3644,function(sym,e){});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_idioma_white}","click",function(sym,e){if(sym.$("idiomas").is(":visible")){sym.$("idiomas").hide();}else{sym.$("idiomas").show();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetGallego}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_gallego").show();sym.$("Text_ingles").hide();sym.$("Text_castellano").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetIngles}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_gallego").hide();sym.$("Text_ingles").show();sym.$("Text_castellano").hide();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetEspanol}","click",function(sym,e){sym.$("tap")[0].play();sym.$("Text_gallego").hide();sym.$("Text_ingles").hide();sym.$("Text_castellano").show();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("idiomas").hide();sym.$("Text_ingles").hide();sym.$("Text_gallego").hide();sym.$("Text_castellano").show();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'Cuerda'
(function(symbolName){})("Cuerda");
//Edge symbol end:'Cuerda'

//=========================================================

//Edge symbol: 'Donut'
(function(symbolName){})("Donut");
//Edge symbol end:'Donut'

//=========================================================

//Edge symbol: 'Hueso'
(function(symbolName){})("Hueso");
//Edge symbol end:'Hueso'

//=========================================================

//Edge symbol: 'fundido'
(function(symbolName){})("fundido");
//Edge symbol end:'fundido'

//=========================================================

//Edge symbol: 'press'
(function(symbolName){})("press");
//Edge symbol end:'press'

//=========================================================

//Edge symbol: 'press_1'
(function(symbolName){})("press_1");
//Edge symbol end:'press_1'

//=========================================================

//Edge symbol: 'lluvia_symbol_1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",125,function(sym,e){sym.play(0);});
//Edge binding end
})("lluvia_symbol_1");
//Edge symbol end:'lluvia_symbol_1'
})(jQuery,AdobeEdge,"pagina11");