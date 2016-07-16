
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",1000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",3000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",4000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",5000,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindSymbolAction(compId,symbolName,"creationComplete",function(sym,e){sym.$("ans_a").css({"background-color":"#70969e"});sym.$("ans_b").css({"background-color":"#70969e"});sym.$("ans_c").css({"background-color":"#70969e"});sym.$("ans_aCopy").css({"background-color":"#70969e"});sym.$("ans_bCopy").css({"background-color":"#70969e"});sym.$("ans_cCopy").css({"background-color":"#70969e"});var thecount=0;var totalques=5;sym.$("totalquestions").html(totalques);sym.showscore=function(addscore){thecount=thecount+addscore;sym.$("correct").html(thecount);sym.$("finalscore").html(thecount);}
sym.$("ans_aCopy2").css({"background-color":"#70969e"});sym.$("ans_bCopy2").css({"background-color":"#70969e"});sym.$("ans_cCopy2").css({"background-color":"#70969e"});sym.$("ans_aCopy3").css({"background-color":"#70969e"});sym.$("ans_bCopy3").css({"background-color":"#70969e"});sym.$("ans_cCopy3").css({"background-color":"#70969e"});sym.$("ans_aCopy4").css({"background-color":"#70969e"});sym.$("ans_bCopy4").css({"background-color":"#70969e"});sym.$("ans_cCopy4").css({"background-color":"#70969e"});sym.$("ans_aCopy5").css({"background-color":"#70969e"});sym.$("ans_bCopy5").css({"background-color":"#70969e"});sym.$("ans_cCopy5").css({"background-color":"#70969e"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){sym.$("musica")[0].play();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_inicio}","click",function(sym,e){window.open("index.html","_self");});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_c}","click",function(sym,e){sym.$("ans_c").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_a}","click",function(sym,e){sym.$("ans_a").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_bCopy}","click",function(sym,e){sym.$("ans_bCopy").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_cCopy}","click",function(sym,e){sym.$("ans_cCopy").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_cCopy2}","click",function(sym,e){sym.$("ans_cCopy2").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_aCopy2}","click",function(sym,e){sym.$("ans_aCopy2").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_cCopy3}","click",function(sym,e){sym.$("ans_cCopy3").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_aCopy3}","click",function(sym,e){sym.$("ans_aCopy3").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_cCopy4}","click",function(sym,e){sym.showscore(1);sym.$("ans_cCopy4").css({"background-color":"#6a925d"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_bCopy4}","click",function(sym,e){sym.$("ans_bCopy4").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_b}","click",function(sym,e){sym.showscore(1);sym.$("ans_b").css({"background-color":"#6a925d"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_aCopy}","click",function(sym,e){sym.showscore(1);sym.$("ans_aCopy").css({"background-color":"#6a925d"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_bCopy2}","click",function(sym,e){sym.showscore(1);sym.$("ans_bCopy2").css({"background-color":"#6a925d"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_bCopy3}","click",function(sym,e){sym.showscore(1);sym.$("ans_bCopy3").css({"background-color":"#6a925d"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_ans_aCopy4}","click",function(sym,e){sym.$("ans_baCopy4").css({"background-color":"#b34640"});});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_next}","click",function(sym,e){sym.play();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",6000,function(sym,e){sym.stop();});
//Edge binding end
})("stage");
//Edge symbol end:'stage'
})(jQuery,AdobeEdge,"quizz");