if(!_.table){_.table=1;(function($){var yP=function(a,b){this.Y=a;this.gf=b?wP:xP},zP=function(a){this.Y=a},AP=function(a){$.ud.call(this);this.g=a;this.W=this.P=null},BP=function(a,b,c){AP.call(this,a);this.reset(b,c)},CP=function(a,b){AP.call(this,a);this.he=b;this.b=null},DP=function(a,b){AP.call(this,a);this.he=b;this.b=null},EP=function(a,b){$.X.call(this);this.b=[];this.f=$.so(b,4);this.g=$.so(a,5);this.j=0;this.P=[];this.N=[];this.G=[];this.ea=[];this.W=[];this.D={fill:"none",cellBorder:"black",topPadding:0,rightPadding:0,bottomPadding:0,
leftPadding:0,hAlign:"start",vAlign:"top",enabled:!0,wordWrap:"break-word",wordBreak:"normal"};this.D.fill="#fff"},GP=function(a){if(a.J(2048)){var b=[],c=a.j?a.b.length/a.j:0,d,e,f=Math.min(c,a.g),h=Math.min(a.j,a.f);for(d=0;d<f;d++){for(e=0;e<h;e++)b.push(a.b[d*a.j+e]);for(e=h;e<a.f;e++)b.push(FP(a,d,e));for(e=h;e<a.j;e++){var k=a,l=a.b[d*a.j+e];l.content(null);k.P.push(l)}}for(d=f;d<a.g;d++)for(e=0;e<a.f;e++)b.push(FP(a,d,e));for(d=f;d<c;d++)for(e=0;e<a.j;e++)f=a,h=a.b[d*a.j+e],h.content(null),
f.P.push(h);a.b=b;a.j=window.NaN;a.I(2048);a.o(1984)}},IP=function(a){if(a.J(64)){var b=a.lb(),c=HP(a.f,a.G,a.Mq,a.Lq,a.bI,a.aI,a.$H,b.width,a.W);b=HP(a.g,a.N,a.Er,a.Dr,a.pH,a.fI,a.eI,b.height,a.ea);a.I(64);if(c||b)a.W=c||a.W,a.ea=b||a.ea,a.o(1792)}},KP=function(a,b,c,d,e,f,h){if(f&&"none"!=f){var k=(f.thickness?f.thickness:1)%2?.5:0;b=JP(a,b,c,d,e);c=$.Ml(f);c in a.Mt?a=a.Mt[c]:(d=a.Fm.length?a.Fm.pop():$.Xj(),a.Fb.sc(d),$.D(f)&&"keys"in f&&!$.D(f.mode)&&(f=$.Ll(f),f.mode=a.lb()),d.stroke(f),d.fill(null),
a=a.Mt[c]=d);switch(h){case 0:a.moveTo(b.rb(),b.Tb()+k);a.lineTo(b.Xa()+1,b.Tb()+k);break;case 1:a.moveTo(b.Xa()+k,b.Tb());a.lineTo(b.Xa()+k,b.Na()+1);break;case 2:a.moveTo(b.rb(),b.Na()+k);a.lineTo(b.Xa()+1,b.Na()+k);break;case 3:a.moveTo(b.rb()+k,b.Tb()),a.lineTo(b.rb()+k,b.Na()+1)}}},LP=function(a,b,c){if(b||c){var d;if((d=b&&b.Za("bottomBorder"))||(d=c&&c.Za("topBorder"))||(d=b&&b.Za("border"))||(d=c&&c.Za("border")))return d;if(a.Jm){var e=a.Jm[(b||window.NaN)&&b.f],f=a.Jm[(c||window.NaN)&&c.f];
if((d=e&&e.Za("bottomBorder"))||(d=f&&f.Za("topBorder"))||(d=e&&e.Za("border"))||(d=f&&f.Za("border"))||(d=e&&e.Za("cellBottomBorder"))||(d=f&&f.Za("cellTopBorder"))||(d=e&&e.Za("cellBorder"))||(d=f&&f.Za("cellBorder")))return d}if(e=a.im&&a.im[(b||c).D])if((d=!b&&(e.Za("topBorder")||e.Za("border"))||!c&&(e.Za("bottomBorder")||e.Za("border")))||(d=e.Za("cellBottomBorder"))||(d=e.Za("cellTopBorder"))||(d=e.Za("cellBorder"))||(d=e.Za("cellBorder")))return d;return(d=!b&&(a.Za("topBorder")||a.Za("border"))||
!c&&(a.Za("bottomBorder")||a.Za("border")))||(d=b&&a.Za("cellBottomBorder"))?d:(d=c&&a.Za("cellTopBorder"))?d:a.Za("cellBorder")||"none"}return"none"},MP=function(a,b,c){if(b||c){var d;if((d=b&&b.Za("rightBorder"))||(d=c&&c.Za("leftBorder"))||(d=b&&b.Za("border"))||(d=c&&c.Za("border")))return d;var e=a.Jm&&a.Jm[(b||c).f];if(e&&((d=!b&&(e.Za("leftBorder")||e.Za("border"))||!c&&(e.Za("rightBorder")||e.Za("border")))||(d=e.Za("cellRightBorder"))||(d=e.Za("cellLeftBorder"))||(d=e.Za("cellBorder"))||
(d=e.Za("cellBorder"))))return d;if(a.im){e=a.im[(b||window.NaN)&&b.D];var f=a.im[(c||window.NaN)&&c.D];if((d=e&&e.Za("rightBorder"))||(d=f&&f.Za("leftBorder"))||(d=e&&e.Za("border"))||(d=f&&f.Za("border"))||(d=e&&e.Za("cellRightBorder"))||(d=f&&f.Za("cellLeftBorder"))||(d=e&&e.Za("cellBorder"))||(d=f&&f.Za("cellBorder")))return d}return(d=!b&&(a.Za("leftBorder")||a.Za("border"))||!c&&(a.Za("rightBorder")||a.Za("border")))||(d=b&&a.Za("cellRightBorder"))?d:(d=c&&a.Za("cellLeftBorder"))?d:a.Za("cellBorder")||
"none"}return"none"},NP=function(a,b,c){if($.n(c)){var d=!1;null===c?a.Er&&b in a.Er&&(delete a.Er[b],d=!0):(a.Er||(a.Er=[]),a.Er[b]!=c&&(a.Er[b]=c,d=!0));d&&a.o(64,1);return a}return a.Er&&b in a.Er?a.Er[b]:null},OP=function(a,b,c){if($.n(c)){var d=!1;null===c?a.Dr&&b in a.Dr&&(delete a.Dr[b],d=!0):(a.Dr||(a.Dr=[]),a.Dr[b]!=c&&(a.Dr[b]=c,d=!0));d&&a.o(64,1);return a}return a.Dr&&b in a.Dr?a.Dr[b]:null},PP=function(a,b,c){return $.n(c)?(a.G[b]!=c&&(null===c?delete a.G[b]:a.G[b]=c,a.o(64,1)),a):b in
a.G?a.G[b]:null},QP=function(a,b,c){if($.n(c)){var d=!1;null===c?a.Mq&&b in a.Mq&&(delete a.Mq[b],d=!0):(a.Mq||(a.Mq=[]),a.Mq[b]!=c&&(a.Mq[b]=c,d=!0));d&&a.o(64,1);return a}return a.Mq&&b in a.Mq?a.Mq[b]:null},RP=function(a,b,c){if($.n(c)){var d=!1;null===c?a.Lq&&b in a.Lq&&(delete a.Lq[b],d=!0):(a.Lq||(a.Lq=[]),a.Lq[b]!=c&&(a.Lq[b]=c,d=!0));d&&a.o(64,1);return a}return a.Lq&&b in a.Lq?a.Lq[b]:null},JP=function(a,b,c,d,e,f){GP(a);IP(a);var h=a.lb();f=$.L(f,$.K)?f:new $.K(0,0,0,0);var k=a.W[c-1]+1||
0;c=a.W[Math.min(c+e,a.f)-1];f.width=c-k;f.left=h.left+k;k=a.ea[b-1]+1||0;c=a.ea[Math.min(b+d,a.g)-1];f.height=c-k;f.top=h.top+k;return f},HP=function(a,b,c,d,e,f,h,k,l){var m,p=!1,q=0,r=[],t=[],u=[],v=0;e=$.N(e,k);f=$.N(f,k);h=$.N(h,k);var x=!1;for(m=0;m<a;m++){var w=c?$.N(c[m],k):window.NaN;var y=d?$.N(d[m],k):window.NaN;var B=b[m];var E=w,C=y;B=$.N(B,k);E=$.N(E,k);C=$.N(C,k);(0,window.isNaN)(B)&&(B=e);(0,window.isNaN)(E)&&(E=f);(0,window.isNaN)(C)&&(C=h);(0,window.isNaN)(E)||(B=Math.max(B,E));
(0,window.isNaN)(C)||(B=Math.min(B,C));(0,window.isNaN)(B)?(v++,(0,window.isNaN)(w)?(0,window.isNaN)(f)||(t[m]=f,x=!0):(t[m]=w,x=!0),(0,window.isNaN)(y)?(0,window.isNaN)(h)||(u[m]=h,x=!0):(u[m]=y,x=!0)):(q+=B,r[m]=B)}if(x&&0<v){var O=[];c=v*v;do for(d=!1,b=Math.max(3*v,k-q)/v,m=0;m<a;m++)if(!(m in r))if(m in O){if(O[m]==t[m]&&t[m]<b){q-=t[m];v++;delete O[m];d=!0;break}if(O[m]==u[m]&&u[m]>b){q-=u[m];v++;delete O[m];d=!0;break}}else{if(m in t&&t[m]>b){q+=O[m]=t[m];v--;d=!0;break}if(m in u&&u[m]<b){q+=
O[m]=u[m];v--;d=!0;break}}while(d&&0<v&&c--)}t=0;u=[];b=Math.max(3*v,k-q)/v;for(m=0;m<a;m++)m in r?B=r[m]:O&&m in O?B=O[m]:B=b,t+=B,k=Math.round(t)-1,u[m]=k,k!=l[m]&&(p=!0);return p?u:null},FP=function(a,b,c){return a.P.length?a.P.pop().reset(b,c):new BP(a,b,c)},SP=function(a,b,c,d,e,f){return c.j&&c.j[b]||d&&d.j&&d.j[b]||e&&e.j&&e.j[b]||a.D&&a.D[b]||f},TP=function(a,b){EP.call(this,a,b)};$.Tv.prototype.Vs=$.ca(10,function(){return!0});$.$v.prototype.Vs=$.ca(9,function(){return!1});
var xP=["topBorder","rightBorder","bottomBorder","leftBorder"],wP=["cellTopBorder","cellRightBorder","cellBottomBorder","cellLeftBorder"];yP.prototype.top=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.Y.Za(this.gf[0],a,256)};yP.prototype.right=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.Y.Za(this.gf[1],a,256)};yP.prototype.bottom=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.Y.Za(this.gf[2],a,256)};
yP.prototype.left=function(a,b,c,d,e){null!=a&&(a=$.Zb.apply(null,arguments));return this.Y.Za(this.gf[3],a,256)};var UP=yP.prototype;UP.top=UP.top;UP.right=UP.right;UP.bottom=UP.bottom;UP.left=UP.left;var VP=["topPadding","rightPadding","bottomPadding","leftPadding"];zP.prototype.top=function(a){$.n(a)&&(a=$.po(a)||0);return this.Y.Za(VP[0],a,1024)};zP.prototype.right=function(a){$.n(a)&&(a=$.po(a)||0);return this.Y.Za(VP[1],a,1024)};zP.prototype.bottom=function(a){$.n(a)&&(a=$.po(a)||0);return this.Y.Za(VP[2],a,1024)};zP.prototype.left=function(a){$.n(a)&&(a=$.po(a)||0);return this.Y.Za(VP[3],a,1024)};var WP=zP.prototype;WP.top=WP.top;WP.right=WP.right;WP.bottom=WP.bottom;WP.left=WP.left;$.H(AP,$.ud);$.g=AP.prototype;$.g.Za=function(a,b,c){if($.n(a)){if($.n(b)){var d=!1;null===b?this.j&&this.j[a]&&(delete this.j[a],d=!0):(this.j||(this.j={}),this.j[a]!=b&&(this.j[a]=b,d=!0));d&&this.g.o(+c||1024,1);return this}return this.j&&this.j[a]}return this.j||{}};$.g.fontSize=function(a){$.n(a)&&(a=$.po(a));return this.Za("fontSize",a)};$.g.fontFamily=function(a){$.n(a)&&(a=String(a));return this.Za("fontFamily",a)};$.g.r6=function(a){$.n(a)&&(a=String(a));return this.Za("fontColor",a)};
$.g.t6=function(a){$.n(a)&&(a=$.eb(+a,0,1));return this.Za("fontOpacity",a)};$.g.s6=function(a){$.n(a)&&(a=$.al(a));return this.Za("fontDecoration",a)};$.g.fontStyle=function(a){$.n(a)&&(a=$.bl(a));return this.Za("fontStyle",a)};$.g.fontVariant=function(a){$.n(a)&&(a=$.cl(a));return this.Za("fontVariant",a)};$.g.fontWeight=function(a){$.n(a)&&(a=$.po(a));return this.Za("fontWeight",a)};$.g.letterSpacing=function(a){$.n(a)&&(a=$.po(a));return this.Za("letterSpacing",a)};
$.g.u6=function(a){$.n(a)&&(a=$.dl(a));return this.Za("textDirection",a)};$.g.lineHeight=function(a){$.n(a)&&(a=$.po(a));return this.Za("lineHeight",a)};$.g.textIndent=function(a){$.n(a)&&(a=(0,window.parseFloat)($.po(a)));return this.Za("textIndent",a)};$.g.vAlign=function(a){$.n(a)&&(a=$.$k(a));return this.Za("vAlign",a)};$.g.ql=function(a){$.n(a)&&(a=$.Rk(a));return this.Za("hAlign",a)};$.g.wordWrap=function(a){return this.Za("wordWrap",a)};$.g.wt=function(a){return this.Za("wordBreak",a)};
$.g.textOverflow=function(a){$.n(a)&&(a=String(a));return this.Za("textOverflow",a)};$.g.$l=function(a){$.n(a)&&(a=!!a);return this.Za("selectable",a)};$.g.gd=function(a){$.n(a)&&(a=!!a);return this.Za("disablePointerEvents",a)};$.g.v6=function(a){$.n(a)&&(a=!!a);return this.Za("useHtml",a)};
$.g.q6=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this.g);this.Za("border",a,256);for(var f=0;4>f;f++)this.Za(xP[f],null,256);this.g.ba(!0);return this}return this.P||(this.P=new yP(this,!1))};
$.g.zR=function(a,b,c,d){if($.n(a)){var e,f,h;if($.A(a)){var k=a;a=k[0];b=k[1];c=k[2];d=k[3];k=k.length}else k=arguments.length;if(k)$.D(a)?(e=$.po(a.top)||0,f=$.po(a.right)||0,h=$.po(a.bottom)||0,l=$.po(a.left)||0):1==k?l=h=f=e=$.po(a)||0:2==k?(h=e=$.po(a)||0,l=f=$.po(b)||0):3==k?(e=$.po(a)||0,l=f=$.po(b)||0,h=$.po(c)||0):4<=k&&(e=$.po(a)||0,f=$.po(b)||0,h=$.po(c)||0,l=$.po(d)||0);else var l=h=f=e=0;$.V(this.g);this.Za(VP[0],e,1024);this.Za(VP[1],f,1024);this.Za(VP[2],h,1024);this.Za(VP[3],l,1024);
this.g.ba(!0);return this}return this.W||(this.W=new zP(this))};var XP=AP.prototype;XP.fontSize=XP.fontSize;XP.fontFamily=XP.fontFamily;XP.fontColor=XP.r6;XP.fontOpacity=XP.t6;XP.fontDecoration=XP.s6;XP.fontStyle=XP.fontStyle;XP.fontVariant=XP.fontVariant;XP.fontWeight=XP.fontWeight;XP.letterSpacing=XP.letterSpacing;XP.textDirection=XP.u6;XP.lineHeight=XP.lineHeight;XP.textIndent=XP.textIndent;XP.vAlign=XP.vAlign;XP.hAlign=XP.ql;XP.wordWrap=XP.wordWrap;XP.wordBreak=XP.wt;XP.textOverflow=XP.textOverflow;
XP.selectable=XP.$l;XP.disablePointerEvents=XP.gd;XP.useHtml=XP.v6;XP.border=XP.q6;$.H(BP,AP);$.g=BP.prototype;$.g.reset=function(a,b){($.ea(this.kd)||$.z(this.kd))&&$.vd(this.mh);this.G=this.N=1;this.f=a;this.D=b;this.mh=this.kd=null;this.b=window.NaN;delete this.j;return this};
$.g.content=function(a){if($.n(a)){if(this.kd!=a){this.kd=a;this.mh&&this.g.oD(this.mh);if($.ea(a)||$.z(a)){var b=this.g;b.gh||(b.gh=new $.tt,b.gh.K($.jm("standalones.labelsFactory")),b.gh.anchor("center"),b.gh.position("center"));this.mh=b.gh.add({value:String(a)},{value:{x:0,y:0}})}else $.L(a,$.ng)?(this.mh=$.Uj(),this.mh.sc(a)):this.mh=a;this.g.o(1024,1)}return this}return this.kd};$.g.Zv=function(a){return $.n(a)?(a=$.so(a,this.G),a!=this.G&&(this.G=a,this.g.o(128,1)),this):this.G};
$.g.$v=function(a){return $.n(a)?(a=$.so(a,this.N),a!=this.N&&(this.N=a,this.g.o(128,1)),this):this.N};$.g.y6=function(){return this.f};$.g.x6=function(){return this.D};$.g.Pn=function(){return this.g.Pn(this.f)};$.g.w6=function(){return this.g.FU(this.D)};$.g.cb=function(){return JP(this.g,this.f,this.D,this.N,this.G)};$.g.fill=function(a,b,c,d,e,f,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Za("fill",a,512)};$.g.padding=function(a,b,c,d){return this.zR.apply(this,arguments)};
$.g.U=function(){($.ea(this.kd)||$.z(this.kd))&&$.vd(this.mh);BP.B.U.call(this)};var YP=BP.prototype;YP.content=YP.content;YP.rowSpan=YP.$v;YP.colSpan=YP.Zv;YP.padding=YP.padding;YP.getBounds=YP.cb;YP.getRowNum=YP.y6;YP.getColNum=YP.x6;YP.getRow=YP.Pn;YP.getCol=YP.w6;YP.fill=YP.fill;$.H(CP,AP);$.g=CP.prototype;$.g.C6=function(){return this.he};$.g.B6=function(a){return this.g.Lx(a,this.he)};$.g.width=function(a){return $.n(a)?(PP(this.g,this.he,a),this):PP(this.g,this.he)};$.g.minWidth=function(a){return $.n(a)?(QP(this.g,this.he,a),this):QP(this.g,this.he)};$.g.maxWidth=function(a){return $.n(a)?(RP(this.g,this.he,a),this):RP(this.g,this.he)};$.g.HU=function(a,b,c,d,e,f,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Za("fill",a,512)};
$.g.z6=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this.g);this.Za("cellBorder",a,256);for(var f=0;4>f;f++)this.Za(wP[f],null,256);this.g.ba(!0);return this}return this.b||(this.b=new yP(this,!0))};$.g.A6=function(a,b,c,d){return this.zR.apply(this,arguments)};var ZP=CP.prototype;ZP.width=ZP.width;ZP.maxWidth=ZP.maxWidth;ZP.minWidth=ZP.minWidth;ZP.getCell=ZP.B6;ZP.getColNum=ZP.C6;ZP.cellFill=ZP.HU;ZP.cellBorder=ZP.z6;ZP.cellPadding=ZP.A6;$.H(DP,AP);$.g=DP.prototype;$.g.H6=function(){return this.he};$.g.G6=function(a){return this.g.Lx(this.he,a)};$.g.height=function(a){return $.n(a)?(this.g.GZ(this.he,a),this):this.g.GZ(this.he)};$.g.minHeight=function(a){return $.n(a)?(NP(this.g,this.he,a),this):NP(this.g,this.he)};$.g.maxHeight=function(a){return $.n(a)?(OP(this.g,this.he,a),this):OP(this.g,this.he)};$.g.IU=function(a,b,c,d,e,f,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Za("fill",a,512)};
$.g.D6=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this.g);this.Za("cellBorder",a,256);for(var f=0;4>f;f++)this.Za(wP[f],null,256);this.g.ba(!0);return this}return this.b||(this.b=new yP(this,!0))};$.g.E6=function(a,b,c,d){return this.zR.apply(this,arguments)};var $P=DP.prototype;$P.height=$P.height;$P.maxHeight=$P.maxHeight;$P.minHeight=$P.minHeight;$P.getCell=$P.G6;$P.getRowNum=$P.H6;$P.cellFill=$P.IU;$P.cellBorder=$P.D6;$P.cellPadding=$P.E6;$.H(EP,$.et);$.g=EP.prototype;$.g.ta=$.et.prototype.ta;$.g.na=$.et.prototype.na|4032;$.g.gh=null;$.g.Fb=null;$.g.XC=null;$.g.Mt=null;$.g.iu=null;$.g.Fm=null;$.g.wA=null;$.g.DU=null;$.g.EU=null;$.g.GU=null;$.g.Jm=null;$.g.im=null;$.g.Er=null;$.g.Dr=null;$.g.Mq=null;$.g.Lq=null;$.g.pH=null;$.g.fI=null;$.g.eI=null;$.g.bI=null;$.g.aI=null;$.g.$H=null;$.g.YR=function(a){return $.n(a)?(a=$.so(a,this.g),this.g!=a&&((0,window.isNaN)(this.j)&&(this.j=this.f),this.g=a,this.o(2176,1)),this):this.g};
$.g.ZN=function(a){return $.n(a)?(a=$.so(a,this.f),this.f!=a&&((0,window.isNaN)(this.j)&&(this.j=this.f),this.f=a,this.o(2176,1)),this):this.f};$.g.Lx=function(a,b){GP(this);a=$.so(a,window.NaN,!0);b=$.so(b,window.NaN,!0);return this.b[a*this.f+b]||null};$.g.Pn=function(a){GP(this);a=$.so(a,window.NaN,!0);if((0,window.isNaN)(a)||a>=this.g)return null;this.Jm||(this.Jm=[]);a in this.Jm||(this.Jm[a]=new DP(this,a));return this.Jm[a]};
$.g.FU=function(a){GP(this);a=$.so(a,window.NaN,!0);if((0,window.isNaN)(a)||a>=this.f)return null;this.im||(this.im=[]);a in this.im||(this.im[a]=new CP(this,a));return this.im[a]};$.g.mda=function(a){return $.n(a)?(this.pH!=a&&(this.pH=a,this.o(64,1)),this):this.pH};$.g.oda=function(a){return $.n(a)?(this.fI!=a&&(this.fI=a,this.o(64,1)),this):this.fI};$.g.nda=function(a){return $.n(a)?(this.eI!=a&&(this.eI=a,this.o(64,1)),this):this.eI};
$.g.K7=function(a){return $.n(a)?(this.bI!=a&&(this.bI=a,this.o(64,1)),this):this.bI};$.g.J7=function(a){return $.n(a)?(this.aI!=a&&(this.aI=a,this.o(64,1)),this):this.aI};$.g.I7=function(a){return $.n(a)?(this.$H!=a&&(this.$H=a,this.o(64,1)),this):this.$H};$.g.h6=function(a,b,c,d,e){if($.n(a)){null===a||(a=$.Zb.apply(null,arguments));$.V(this);this.Za("border",a,256);for(var f=0;4>f;f++)this.Za(xP[f],null,256);this.ba(!0);return this}return this.DU||(this.DU=new yP(this,!1))};
$.g.R7=function(a,b){var c;if($.n(a)){var d=!$.A(a);var e=0;if(!d){var f=a.length;for(c=0;c<f;c++){var h=a[c];if($.A(h))h.length>e&&(e=h.length);else{d=!0;break}}}if(!d&&f&&e){$.V(this);this.YR(f);this.ZN(e);if(b)for(c=0;c<f;c++)for(d=0;d<e;d++){var k=this.Lx(c,d);k.$v(1);k.Zv(1)}for(c=0;c<f;c++)for(h=a[c],d=0;d<e;d++){k=this.Lx(c,d);var l=h[d];k.content($.n(l)?l:null)}this.ba(!0)}else $.hl(3);return this}e=[];for(c=0;c<this.g;c++){h=[];for(d=0;d<this.f;d++)h.push(this.Lx(c,d).content());e.push(h)}return e};
$.g.X=function(){if(!this.yc())return this;this.Fb||(this.Fb=$.Uj(),this.XC=this.Fb.xe());var a=this.Fb.ya(),b=a&&!a.Ge();b&&a.suspend();this.J(4)&&(this.o(64),($.mo(this.left())||$.mo(this.top()))&&this.o(1792),this.I(4));this.gh&&$.V(this.gh);GP(this);IP(this);if(this.J(128)){var c,d;for(c=0;c<this.b.length;c++)this.b[c].b=window.NaN;for(var e=0;e<this.g;e++)for(var f=0;f<this.f;f++){var h=e*this.f+f,k=this.b[h];if((0,window.isNaN)(k.b)&&(1<k.Zv()||1<k.$v())){for(c=Math.min(this.g,e+k.$v());c-- >
e;)for(d=Math.min(this.f,f+k.Zv());d-- >f;)this.b[c*this.f+d].b=h;k.b=window.NaN}}this.I(128);this.o(1792)}if(this.J(512)){this.Fm||(this.Fm=[]);if(this.iu)for(var l in this.iu)c=this.iu[l],c.clear(),c.parent(null),this.Fm.push(c),delete this.iu[l];else this.iu={};for(l=0;l<this.g;l++)for(c=0;c<this.f;c++)if(f=this.b[l*this.f+c],(0,window.isNaN)(f.b)){var m=JP(this,l,c,f.$v(),f.Zv(),m);d=l;e=c;d=(f=f.fill())?f:(f=this.Jm&&this.Jm[d]&&this.Jm[d].IU())?f:(f=this.im&&this.im[e]&&this.im[e].HU())?f:(f=
d%2?this.JZ():this.FZ())?f:this.Za("fill");d&&(e=$.Ml(d),e in this.iu?d=this.iu[e]:(f=this.Fm.length?this.Fm.pop():$.Xj(),this.Fb.Ef(f,0),f.fill(d),f.stroke(null),d=this.iu[e]=f),e=m.rb(),f=m.Xa()+1,h=m.Tb(),k=m.Na()+1,d.moveTo(e,h),d.lineTo(f,h),d.lineTo(f,k),d.lineTo(e,k),d.close())}this.I(512)}if(this.J(256)){this.Fm||(this.Fm=[]);if(this.Mt)for(var p in this.Mt)m=this.Mt[p],m.clear(),m.parent(null),this.Fm.push(m),delete this.Mt[p];else this.Mt={};for(m=0;m<this.f;m++)l=this.b[m],(0,window.isNaN)(l.b)&&
KP(this,0,m,1,l.Zv(),LP(this,void 0,l),0);for(p=0;p<this.g;p++)l=this.b[p*this.f],(0,window.isNaN)(l.b)&&KP(this,p,0,l.$v(),1,MP(this,void 0,l),3);for(p=0;p<this.g;p++)for(m=0;m<this.f;m++)d=p*this.f+m,l=this.b[d],(c=this.b[d+this.f])?(0,window.isNaN)(l.b)?(0,window.isNaN)(c.b)||(c.b==d?l=c=void 0:c=this.b[c.b]):(0,window.isNaN)(c.b)?l=this.b[l.b]:l.b==c.b?l=c=void 0:(l=this.b[l.b],c=this.b[c.b]):(0,window.isNaN)(l.b)||(l=this.b[l.b]),KP(this,p,m,1,1,LP(this,l,c),2),d=p*this.f+m,l=this.b[d],(c=m+
1==this.f?void 0:this.b[d+1])?(0,window.isNaN)(l.b)?(0,window.isNaN)(c.b)||(c.b==d?l=c=void 0:c=this.b[c.b]):(0,window.isNaN)(c.b)?l=this.b[l.b]:l.b==c.b?l=c=void 0:(l=this.b[l.b],c=this.b[c.b]):(0,window.isNaN)(l.b)||(l=this.b[l.b]),KP(this,p,m,1,1,MP(this,l,c),1);this.I(256)}if(this.J(1024)){if(this.wA)for(;this.wA.length;){var q=this.wA.pop();$.L(q,$.ng)?q.remove():($.V(q),$.L(q,$.wt)?(f=q,$.Bt(f)&&$.Bt(f).clear(f.ia())):$.L(q,$.iw)?(d=q,$.jw(d)&&$.jw(d).clear(d.ia())):$.L(q,$.X)&&(q.Vs&&q.Vs()&&
(d=q,d.fD(d.TY)),q.O(null),q.remove()),$.Dq(q,this.YP),q.ba(!1))}p=this.g*this.f;for(m=0;m<p;m++)d=this.b[m],!(0,window.isNaN)(d.b)&&(q=d.mh)&&($.L(q,$.Tg)?(q.Qj(),$.vd(q)):($.V(q),$.Dq(q,this.YP),$.L(q,$.wt)||$.L(q,$.iw)?q.enabled(!1):q.Vs&&q.Vs()&&(d=q,d.fD(d.TY)),q.O(null),q.remove(),q.ba(!1)));p=new $.ot;$.V(p);for(m=0;m<this.g;m++)for(l=0;l<this.f;l++)if(d=this.b[m*this.f+l],q=d.mh,c=$.L(q,$.ng),q){e=this.Jm&&this.Jm[m];h=this.im&&this.im[l];c||$.V(q);if((0,window.isNaN)(d.b)){var r=JP(this,
m,l,d.$v(),d.Zv(),r);p.top(this.aJ("topPadding",d,e,h,this));p.right(this.aJ("rightPadding",d,e,h,this));p.bottom(this.aJ("bottomPadding",d,e,h,this));p.left(this.aJ("leftPadding",d,e,h,this));r=p.$i(r);if(c){q.parent(this.XC);f=q.Xd(0);var t=SP(this,"hAlign",d,e,h,"start");k=SP(this,"vAlign",d,e,h,"top");"start"==t?t="rtl"==SP(this,"textDirection",d,e,h,"rtl")?"right":"left":"end"==t&&(t="rtl"==SP(this,"textDirection",d,e,h,"rtl")?"left":"right");switch(t){case "right":d=r.left+r.width-f.dP();break;
case "center":d=r.left+(r.width-f.dP())/2;break;default:d=r.left}switch(k){case "bottom":e=r.top+r.height-f.cP();break;case "middle":e=r.top+(r.height-f.cP())/2;break;default:e=r.top}f.setPosition(d,e);q.clip(r)}else{q.O(this.XC);if($.L(q,$.wt))if(f=q,f.Ac({value:{x:r.left,y:r.top}}),$.Bt(f)==this.gh){f.anchor("left-top");f.width(r.width);f.height(r.height);(q=h&&h.j)&&f.K(q);(q=e&&e.j)&&f.K(q);(q=d.j)&&f.K(q);f.ba(!1);continue}else e=f.u("position")||$.Ct(f)&&$.Ct(f).u("position")||$.Bt(f)&&$.Bt(f).u("position"),
e={value:$.to(r,e)},f.Ac(e),f.X();else $.L(q,$.iw)?(d=q,e=d.position()||$.kw(d)&&$.kw(d).position()||$.jw(d)&&$.jw(d).position(),e={value:$.to(r,e)},d.Ac(e),d.X()):$.L(q,$.X)&&(q.Vs&&q.Vs()&&(d=q,d.TY=d.fD(),d.fD(!1)),d=q,d.ka(r),d.X&&d.X());$.U(q,this.YP)}}c||q.ba(!1)}p.ba(!1);this.gh&&($.V(this.gh),this.gh.K(this.D),this.gh.O(this.XC),this.gh.ka(this.lb()),this.gh.X(),this.gh.ba(!1));this.I(1024)}this.gh&&this.gh.ba(!1);this.J(8)&&(this.Fb.zIndex(this.zIndex()),this.I(8));this.J(2)&&(this.Fb.parent(this.O()),
this.I(2));b&&a.resume();return this};$.g.remove=function(){this.Fb&&this.Fb.parent(null)};$.g.fontSize=function(a){$.n(a)&&(a=$.po(a));return this.Za("fontSize",a)};$.g.fontFamily=function(a){$.n(a)&&(a=String(a));return this.Za("fontFamily",a)};$.g.l6=function(a){$.n(a)&&(a=String(a));return this.Za("fontColor",a)};$.g.n6=function(a){$.n(a)&&(a=$.eb(+a,0,1));return this.Za("fontOpacity",a)};$.g.m6=function(a){$.n(a)&&(a=$.al(a));return this.Za("fontDecoration",a)};
$.g.fontStyle=function(a){$.n(a)&&(a=$.bl(a));return this.Za("fontStyle",a)};$.g.fontVariant=function(a){$.n(a)&&(a=$.cl(a));return this.Za("fontVariant",a)};$.g.fontWeight=function(a){$.n(a)&&(a=$.po(a));return this.Za("fontWeight",a)};$.g.letterSpacing=function(a){$.n(a)&&(a=$.po(a));return this.Za("letterSpacing",a)};$.g.o6=function(a){$.n(a)&&(a=$.dl(a));return this.Za("textDirection",a)};$.g.lineHeight=function(a){$.n(a)&&(a=$.po(a));return this.Za("lineHeight",a)};
$.g.textIndent=function(a){$.n(a)&&(a=(0,window.parseFloat)($.po(a)));return this.Za("textIndent",a)};$.g.vAlign=function(a){$.n(a)&&(a=$.$k(a));return this.Za("vAlign",a)};$.g.ql=function(a){$.n(a)&&(a=$.Rk(a));return this.Za("hAlign",a)};$.g.wt=function(a){return this.Za("wordBreak",a)};$.g.wordWrap=function(a){return this.Za("wordWrap",a)};$.g.textOverflow=function(a){$.n(a)&&(a=String(a));return this.Za("textOverflow",a)};$.g.$l=function(a){$.n(a)&&(a=!!a);return this.Za("selectable",a)};
$.g.gd=function(a){$.n(a)&&(a=!!a);return this.Za("disablePointerEvents",a)};$.g.p6=function(a){$.n(a)&&(a=!!a);return this.Za("useHtml",a)};$.g.j6=function(a,b,c,d,e,f,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Za("fill",a,512)};$.g.JZ=function(a,b,c,d,e,f,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Za("rowOddFill",a,512)};$.g.FZ=function(a,b,c,d,e,f,h){null!=a&&(a=$.Xb.apply(null,arguments));return this.Za("rowEvenFill",a,512)};
$.g.i6=function(a,b,c,d,e){if($.n(a)){a=$.Zb.apply(null,arguments);$.V(this);this.Za("cellBorder",a,256);for(var f=0;4>f;f++)this.Za(wP[f],null,256);this.ba(!0);return this}return this.EU||(this.EU=new yP(this,!0))};
$.g.k6=function(a,b,c,d){if($.n(a)){var e,f,h;if($.A(a)){var k=a;a=k[0];b=k[1];c=k[2];d=k[3];k=k.length}else k=arguments.length;if(k)$.D(a)?(e=$.po(a.top)||0,f=$.po(a.right)||0,h=$.po(a.bottom)||0,l=$.po(a.left)||0):1==k?l=h=f=e=$.po(a)||0:2==k?(h=e=$.po(a)||0,l=f=$.po(b)||0):3==k?(e=$.po(a)||0,l=f=$.po(b)||0,h=$.po(c)||0):4<=k&&(e=$.po(a)||0,f=$.po(b)||0,h=$.po(c)||0,l=$.po(d)||0);else var l=h=f=e=0;$.V(this);this.Za(VP[0],e,1024);this.Za(VP[1],f,1024);this.Za(VP[2],h,1024);this.Za(VP[3],l,1024);
this.ba(!0);return this}return this.GU||(this.GU=new zP(this))};$.g.YP=function(a){$.F(a.target.X)&&a.target.X()};$.g.Za=function(a,b,c){if($.n(a)){if($.n(b)){var d=!1;null===b?this.D[a]&&(delete this.D[a],d=!0):this.D[a]!=b&&(this.D[a]=b,d=!0);d&&this.o(+c||1024,1);return this}return this.D&&this.D[a]}return this.D||{}};$.g.GZ=function(a,b){return $.n(b)?(this.N[a]!=b&&(null===b?delete this.N[a]:this.N[a]=b,this.o(64,1)),this):a in this.N?this.N[a]:null};$.g.oD=function(a){this.wA=this.wA||[];this.wA.push(a)};
$.g.aJ=function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d&&(d=d.Za(a),null!=d))return d}return 0};$.g.U=function(){$.wd(this.b,this.P,this.Jm,this.im,this.iu,this.Mt,this.Fm);$.vd(this.gh);$.vd(this.Fb);$.vd(this.XC);delete this.D;EP.B.U.call(this)};
$.g.al=function(a){var b=$.D(a)?a:{};a=b.rowsSeparator||"\n";$.Ro(a);var c=b.columnsSeparator||",";$.Ro(c);b=b.ignoreFirstRow||!1;var d=this.YR(),e=this.ZN(),f,h,k,l=Array(d);for(f=0;f<d;f++)l[f]=Array(e);var m={},p=[];for(f=0;f<d;f++){for(h=0;h<e;h++)if(!(f*e+h in m)){var q=this.Lx(f,h);var r=q.content();r=$.z(r)||$.ea(r)||$.da(r)?String(r):"";-1!=r.indexOf(c)?(r=r.split('"').join('""'),r='"'+r+'"'):-1!=r.indexOf(a)&&(r=r.split('"').join('""'),r='"'+r+'"');l[f][h]=r;r=q.Zv();var t=q.$v();if(2!=t+
r)for(q=0;q<t;q++)for(k=0;k<r;k++)if(0!=q||0!=k)l[f+q][h+k]="",m[(f+q)*e+(h+k)]=!0}p.push(l[f].join(c))}b&&p.shift();return p.join(a)};$.g.xz=function(a){var b=$.kl.anychart.exports;if(b){var c=this.al({rowsSeparator:"\n",columnsSeparator:",",ignoreFirstRow:!1});b.xz(this,c,a)}else $.hl(4,null,["Exporting"])};$.g.wz=function(a,b){var c=$.kl.anychart.exports;if(c){var d=this.al(a);c.wz(this,d,b)}else $.hl(4,null,["Exporting"])};$.H(TP,EP);$.ft(TP,EP);var aQ=EP.prototype;aQ.rowsCount=aQ.YR;
aQ.colsCount=aQ.ZN;aQ.getCell=aQ.Lx;aQ.getRow=aQ.Pn;aQ.getCol=aQ.FU;aQ.rowsHeight=aQ.mda;aQ.rowsMinHeight=aQ.oda;aQ.rowsMaxHeight=aQ.nda;aQ.colsWidth=aQ.K7;aQ.colsMinWidth=aQ.J7;aQ.colsMaxWidth=aQ.I7;aQ.border=aQ.h6;aQ.contents=aQ.R7;aQ.draw=aQ.X;aQ.fontSize=aQ.fontSize;aQ.fontFamily=aQ.fontFamily;aQ.fontColor=aQ.l6;aQ.fontOpacity=aQ.n6;aQ.fontDecoration=aQ.m6;aQ.fontStyle=aQ.fontStyle;aQ.fontVariant=aQ.fontVariant;aQ.fontWeight=aQ.fontWeight;aQ.letterSpacing=aQ.letterSpacing;aQ.textDirection=aQ.o6;
aQ.lineHeight=aQ.lineHeight;aQ.textIndent=aQ.textIndent;aQ.vAlign=aQ.vAlign;aQ.hAlign=aQ.ql;aQ.wordBreak=aQ.wt;aQ.wordWrap=aQ.wordWrap;aQ.textOverflow=aQ.textOverflow;aQ.selectable=aQ.$l;aQ.disablePointerEvents=aQ.gd;aQ.useHtml=aQ.p6;aQ.cellFill=aQ.j6;aQ.rowEvenFill=aQ.FZ;aQ.rowOddFill=aQ.JZ;aQ.cellBorder=aQ.i6;aQ.cellPadding=aQ.k6;aQ.saveAsPng=aQ.rv;aQ.saveAsJpg=aQ.pv;aQ.saveAsPdf=aQ.qv;aQ.saveAsSvg=aQ.sv;aQ.shareAsPng=aQ.ot;aQ.shareAsJpg=aQ.Gz;aQ.shareAsPdf=aQ.Hz;aQ.shareAsSvg=aQ.Iz;
aQ.getPngBase64String=aQ.zy;aQ.getJpgBase64String=aQ.xy;aQ.getSvgBase64String=aQ.Cy;aQ.getPdfBase64String=aQ.yy;aQ.toSvg=aQ.yp;aQ.parentBounds=aQ.ka;aQ.container=aQ.O;aQ.toCsv=aQ.al;aQ.saveAsCsv=aQ.wz;aQ.saveAsXlsx=aQ.xz;aQ=TP.prototype;aQ.draw=aQ.X;$.G("anychart.standalones.table",function(a,b){return new TP(a,b)});}).call(this,$)}
