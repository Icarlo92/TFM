
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("musica")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetLeer}","click",function(sym,e){sym.getSymbol("leer").play();sym.$("tap")[0].play();window.open("pagina1.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetQuizz}","click",function(sym,e){sym.getSymbol("quizz").play();sym.$("tap")[0].play();window.open("Untitled-1.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_targetCreditos}","click",function(sym,e){sym.getSymbol("creditos").play();sym.$("tap")[0].play();window.open("creditos.html","_self");});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'leer'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_leer}","click",function(sym,e){window.open("pagina1.html","_self");});
//Edge binding end
})("leer");
//Edge symbol end:'leer'

//=========================================================

//Edge symbol: 'quizz'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_quizz}","click",function(sym,e){window.open("Untitled-1.html","_self");});
//Edge binding end
})("quizz");
//Edge symbol end:'quizz'

//=========================================================

//Edge symbol: 'opciones'
////Edge binding end
//})("opciones");
//Edge symbol end:'opciones'

//=========================================================

//Edge symbol: 'creditos'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_creditos}","click",function(sym,e){window.open("creditos.html","_self");});
//Edge binding end
})("creditos");
//Edge symbol end:'creditos'
})(jQuery,AdobeEdge,"index");