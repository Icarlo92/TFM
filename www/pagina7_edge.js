
(function($,Edge,compId){var _=null,y=true,n=false,qw='swing',x82='ellipse',x75='rgb(0, 0, 0)',x84='647px',cl='clip',e31='${_targetEspanol}',e35='${_panel}',x66='1638px',e39='${_Text_gallego}',i='none',x13='rgba(192,192,192,1)',x78='341px',e69='${_fundido}',e25='${_Text_castellano}',x55='ilu7_0000_Capa-20',x74='Rectangle3',om='-ms-transform-origin',x76='828px',x34='rgba(255,255,255,1)',e37='${_idioma_white}',e41='${_Stage}',x21='stage',e46='${_targetBrazo}',x59='229px',x2='4.0.0',c='color',zx='scaleX',x56='822px',oz='-moz-transform-origin',p='px',o='opacity',x68='rgba(0,0,0,1.00)',rbl='border-bottom-left-radius',e62='${symbolSelector}',e103='${_Swipe-Right}',x97='-600px',e47='${_ayuda_anim}',ql='linear',x73='420px',x91='targetBrazo',or='-webkit-transform-origin',x83='275px',e63='${_ilu7_0000_Capa-20}',x51='1172px',e94='${_Rectangle4}',x77='51px',a='Base State',e33='${_tap}',x42='hidden',x10='rgba(255,255,255,1.00)',e22='${_opciones_0006_idioma}',lf='left',x57='426px',e28='${_siguiente}',bp='background-position',bg='background-color',x43='@@0@@% @@1@@%',x53='auto',rbr='border-bottom-right-radius',qe='easeInOutExpo',x102='press',tp='top',x88='554px',x100='0.1',ov='overflow',x61='brazo',x98='-515px',x96='Swipe-Right',zy='scaleY',t='transform',x58='251px',e95='${_Rectangle2}',x4='rgba(0,0,0,0)',e93='${_Ellipse}',e92='${_Rectangle3}',x90='Rectangle2',e29='${_ingles}',r='deg',x70='662px',e40='${_gallego}',x7='43',x49='ilu7_0001_veterinario-brazo',rz='rotateZ',rtl='border-top-left-radius',x30='@@0@@px @@1@@px',x87='452px',x='text',x23='rect(@@0@@px @@1@@px @@2@@px @@3@@px)',e36='${_targetIngles}',x72='377px',e38='${_targetGallego}',x50='0px',x85='Rectangle4',h='height',x71='278px',e32='${_anterior}',x79='314px',s='style',dt='Default Timeline',e44='${_espanol}',x81='Ellipse',on='msTransformOrigin',oo='-o-transform-origin',e24='${_inicio}',x67='fundido',x26='rgba(68,68,68,1.00)',x65='2147px',e64='${_ilu7_0001_veterinario-brazo}',fs='font-size',x80='50%',xc='rgba(0,0,0,1)',e48='${_brazo}',l='normal',x89='288px',x52='972px',x3='4.0.0.359',g='image',x1='acme, sans-serif',rtr='border-top-right-radius',w='width',x86='108px',e27='${_Text_ingles}',e45='${_ayuda}',m='rect',ff='font-family',x99='1200px';var im='images/';var g54='ilu7_0001_veterinario-brazo.png',g19='arrow.svg',g11='opciones_0005_espa%C3%B1ol.png',g17='house.svg',g15='opciones_0003_gallego-.png',g101='Swipe-Right.svg',g14='opciones_0006_idioma.png',g20='arrowBlack.svg',g60='ilu7_0000_Capa-20.png',g16='idioma_white.svg',g5='ilu7_0002_bicho.png',g12='opciones_0004_ingl%C3%A9s.png',g18='eye.svg';var s9="Ó amencer, espertouse cun gran estoupido. <br>Unhas mans o atraparos e o meteron nunha gaiola. <br>Bicho non entendía nada.<br>A gaiola abriuse e pasaronlle algo frío pola espalda. <br>Aquel lugar era muy extraño.",s8="At the crack of dawn, Bicho woke up with a deafening roar.<br>A pair of hands grabbed him and, the next thing he knew, <br>someone was rubbing something cold against his back.",s6="Al amanecer, se despertó con un gran estruendo. <br>Unas manos lo atraparon y lo metieron en una jaula.<br>Bicho no entendía qué estaba pasando. <br>La jaula se abrió y le pasaron algo frío por la espalda. <br>Aquel lugar era muy extraño.<br>";var fonts={};fonts[x1]='<script src=\"http://use.edgefonts.net/acme:n4:all.js\"></script>';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={'gAudioPreloadPreference':'auto','gVideoPreloadPreference':'auto'};var resources=[];var symbols={"stage":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:'ilu7_0002_bicho',t:g,r:['0','0','2048px','1541px','auto','auto'],f:[x4,im+g5,'0px','0px']},{id:'brazo',t:m,r:['273','561','auto','auto','auto','auto']},{id:'bip',t:'audio',tag:'audio',r:['1878','1064','320px','45px','auto','auto'],sr:['media/bip.mp3','media/bip.ogg'],pr:'metadata'},{id:'Text_castellano',t:x,r:['777px','34px','1001px','402px','auto','auto'],text:s6,n:[x1,x7,"rgba(68,68,68,1.00)",l,i,""]},{id:'Text_ingles',t:x,r:['777px','101px','1141px','625px','auto','auto'],text:s8,n:[x1,x7,"rgba(68,68,68,1.00)",l,i,""]},{id:'Text_gallego',t:x,r:['777px','34px','859px','402px','auto','auto'],text:s9,n:[x1,x7,"rgba(68,68,68,1.00)",l,i,""]},{id:'ayuda_anim',t:m,r:['430','1041','auto','auto','auto','auto']},{id:'targetBrazo',t:m,r:['262','801','auto','auto','auto','auto']},{id:'idiomas',t:'group',r:['-161','422','1915','225','auto','auto'],c:[{id:'panel',t:m,r:['718px','149px','879px','425px','auto','auto'],br:["40px 40px","40px 40px","40px 40px","40px 40px"],o:0.86737607758621,f:[x10],s:[0,xc,i]},{id:'espanol',t:g,r:['546px','39px','342px','150px','auto','auto'],f:[x4,im+g11,'0px','0px']},{id:'ingles',t:g,r:['1566px','32px','257px','157px','auto','auto'],f:[x4,im+g12,'0px','0px']},{id:'targetEspanol',t:m,r:['740px','294px','441px','186px','auto','auto'],f:[x13],s:[0,xc,i]},{id:'tap',t:'audio',tag:'audio',r:['-4852px','-2540px','0px','0px','auto','auto'],sr:['media/tap.mp3','media/tap.ogg'],pr:'auto'},{id:'targetIngles',t:m,r:['1291px','395px','212px','90px','auto','auto'],f:[x13],s:[0,xc,i]},{id:'opciones_0006_idioma',t:g,r:['1090px','256px','141px','75px','auto','auto'],cl:['rect(0px 141px 70.3017578125px 0px)'],f:[x4,im+g14,'0px','0px']},{id:'gallego',t:g,r:['1011px','61px','357px','128px','auto','auto'],f:[x4,im+g15,'0px','0px']},{id:'targetGallego',t:m,r:['1043px','395px','212px','90px','auto','auto'],f:[x13],s:[0,xc,i]}]},{id:'idioma_white',t:g,r:['46px','1143px','640px','640px','auto','auto'],f:[x4,im+g16,'0px','0px'],tf:[[],[],[],['0.12','0.12']]},{id:'inicio',t:g,r:['-96px','1137px','640px','640px','auto','auto'],f:[x4,im+g17,'0px','0px'],tf:[[],[],[],['0.14','0.14']]},{id:'ayuda',t:g,r:['-232px','1144px','640px','640px','auto','auto'],f:[x4,im+g18,'0px','0px'],tf:[[],[],[],['0.14','0.14']]},{id:'anterior',t:g,r:['-3165px','-294px','6559px','810px','auto','auto'],f:[x4,im+g19,'0px','0px'],tf:[[],['180'],[],['0.15','0.15']]},{id:'ambiente_vet',t:'audio',tag:'audio',r:['0','0','320px','45px','auto','auto'],ap:'autoplay',lp:'loop',sr:['media/ambiente_vet.mp3','media/ambiente_vet.ogg'],pr:'auto'},{id:'siguiente',t:g,r:['1428px','-300px','980px','810px','auto','auto'],f:[x4,im+g20,'0px','0px'],tf:[[],[],[],['0.15','0.15']]}],sI:[{id:'brazo',sN:'brazo',a:{}},{id:'targetBrazo',sN:'targetBrazo',a:{}},{id:'ayuda_anim',sN:'press',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1918,a:n,tt:[]}}},"brazo":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x49,t:g,r:[x50,x50,x51,x52,x53,x53],f:[x4,im+g54,x50,x50]},{id:x55,t:g,r:[x56,x57,x58,x59,x53,x53],f:[x4,im+g60,x50,x50]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1750,a:n,l:{"fin":1750},tt:[]}}},"fundido":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x50,x50,x65,x66,x53,x53],id:x67,s:[0,xc,i],t:m,f:[x68]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:1750,a:n,tt:[]}}},"targetBrazo":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x70,x71,x72,x73,x53,x53],id:x74,s:[0,x75,i],t:m,f:[x34]},{r:[x76,x77,x78,x79,x53,x53],br:[x80,x80,x80,x80],id:x81,s:[0,x75,i],t:x82,f:[x34]},{r:[x50,x50,x83,x84,x53,x53],id:x85,s:[0,x75,i],t:m,f:[x34]},{r:[x86,x87,x88,x89,x53,x53],id:x90,s:[0,x75,i],t:m,f:[x34]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"press":{v:x2,mv:x2,b:x3,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x96,r:[x97,x98,x99,x99,x53,x53],tf:[[0,0],[],[],[x100,x100]],f:[x4,im+g101,x50,x50]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:685,a:n,tt:[]}}}};var S1=symbols[x21];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e22).P(tp,256).P(zy,1,t,_,"").P(zx,1,t).P(h,75,_,_,p).P(cl,[0,141,70.3017578125,0],_,x23).P(lf,1090).P(w,141);A1.A(e24).P(tp,1137).P(zx,0.14,t,_,"").P(zy,0.14,t).P(lf,-96,_,_,p);A1.A(e25).P(tp,34).P(fs,43).P(c,x26,c).P(ff,x1).P(lf,777).P(w,1001);A1.A(e27).P(tp,101).P(w,1141).P(c,x26,c).P(h,625).P(ff,x1).P(lf,777).P(fs,43);A1.A(e28).P(zx,0.15,t,_,"").P(lf,1428,_,_,p).P(zy,0.15,t,_,"").P(tp,-300,_,_,p);A1.A(e29).P(tp,373).P(zy,1,t,_,"").P(h,76,_,_,p).P(zx,1,t,_,"").P(lf,1383,_,_,p).P(bp,[0,-3.90625],_,x30).P(w,124);A1.A(e31).P(tp,294).P(o,0,_,_,"").P(lf,740,_,_,p);A1.A(e32).P(tp,-294).P(zy,0.15,t,_,"").P(rz,180,t,_,r).P(zx,0.15,t,_,"").P(lf,-3165,_,_,p).P(w,6559);A1.A(e33).P(tp,-2540).P(h,0).P(lf,-4852).P(w,0);A1.A(e35).P(bg,x34,c).P(rtl,[40,40],_,x30).P(rbr,[40,40],_,x30).P(o,0.87,_,_,"").P(rtr,[40,40],_,x30).P(w,879,_,_,p).P(tp,149).P(rbl,[40,40],_,x30).P(h,425).P(lf,718);A1.A(e36).P(tp,395).P(h,90).P(o,0,_,_,"").P(lf,1291,_,_,p).P(w,212);A1.A(e37).P(tp,1143).P(zy,0.12,t,_,"").P(lf,46,_,_,p).P(zx,0.12,t,_,"");A1.A(e38).P(tp,395).P(h,90).P(o,0,_,_,"").P(lf,1043,_,_,p).P(w,212);A1.A(e39).P(tp,34).P(w,859).P(c,x26,c).P(ff,x1).P(lf,777).P(fs,43);A1.A(e40).P(tp,387).P(zy,1,t,_,"").P(zx,1,t).P(h,62,_,_,p).P(lf,1090).P(w,172);A1.A(e41).P(bg,x34,c).P(w,2048).P(h,1536).P(ov,x42);A1.A(e44).P(tp,379).P(zy,1,t,_,"").P(zx,1,t).P(h,72,_,_,p).P(lf,807).P(w,165);A1.A(e45).P(tp,1144).P(zx,0.14,t,_,"").P(zy,0.14,t).P(lf,-232,_,_,p);A1.A(e46).P(o,0,_,_,"").T(0,0);A1.A(e47).P(tp,1193).T(1.918,1193).P(lf,793).T(1.918,793);A1.A(e48).P(or,[18,9.61],_,x43).P(oz,[18,9.61],_,x43).P(om,[18,9.61],_,x43).P(on,[18,9.61],_,x43).P(oo,[18,9.61],_,x43).P(rz,0,t,_,r).P(lf,253,_,_,p).T(0,253).P(tp,551).T(0,551);var S2=symbols[x61];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e62).P(h,972).P(w,1172);A2.A(e63).P(tp,426).P(lf,822).P(o,0,_,_,"").T(1.297,1,0.114,qw).T(1.411,0.49,0.089).T(1.5,1,0.099).T(1.599,0.47,0.069).T(1.668,1,0.082);A2.A(e64).P(h,972).P(or,[18.53,12.98],_,x43).P(oz,[18.53,12.98],_,x43).P(om,[18.53,12.98],_,x43).P(on,[18.53,12.98],_,x43).P(oo,[18.53,12.98],_,x43).P(tp,0).T(0,33,0.375,qw).T(0.375,-6,0.375).T(0.75,20,0.256).T(1.006,0,0.291).P(lf,0).T(0,-11,0.375).T(0.375,2,0.375).T(0.75,-4,0.256).T(1.006,0,0.291).P(rz,0,t,_,r).T(0,-17,0.375).T(0.375,2,0.375).T(0.75,-10,0.256).T(1.006,0,0.291);var S3=symbols[x67];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e62).P(h,1638).P(w,2147);A3.A(e69).P(tp,0).P(lf,0).P(o,1,_,_,"").T(0.203,0,1.547,ql);var S4=symbols[x91];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e92).P(tp,278).P(lf,662);A4.A(e93).P(lf,828).P(tp,51);A4.A(e62).P(h,740).P(w,1169);A4.A(e94).P(lf,0).P(tp,0);A4.A(e95).P(lf,108).P(tp,452);var S5=symbols[x102];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e62).P(h,170).P(w,204);A5.A(e103).P(tp,-515).T(0.131,-515).P(zy,0.19,t,_,"").T(0.58,0.19).P(rz,-34,t,_,r).T(0.131,0,0.5,qe).P(zx,0.19,t,_,"").T(0.58,0.19).P(o,0).T(0.062,1,0.069,qw).T(0.626,0,0.059,qe).P(lf,-600,_,_,p).T(0.131,-467,0.495);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"pagina7");