(function(A){window.rpnav={$$:function(C,B){return C.getElementsByTagName(B)},menuItems:[],searchTypesOn:0,searchTimer:null,searchFramer:null,loadStrings:function(B){for(var C in B){if(!FriendProjectRes[C]){FriendProjectRes[C]={}}for(var D in B[C]){FriendProjectRes[C][D]=B[C][D]}}},initNavigation:function(){A("#topnav li.dropDown").each(function(){var B=140;A("li",this).each(function(){if(B<A(this).outerWidth()){B=A(this).outerWidth()}}).width(B);A("iframe",this).width(B+2).height(A("ul",this).outerHeight())})},addIE6Events:function(){},applyAlphaImageLoader:function(F,C,E){var D=document.getElementById(F);if(D==null){return}var B=new Image();B.src=C;D.style.backgroundImage="none";A(function(){D.style.filter='progid:DXImagetransform.Microsoft.AlphaImageLoader(enabled="true", src="'+C+'", sizingMethod="'+E+'");'})},openSearchTypes:function(B){var F=(B.toLowerCase()==="header");var E="#srchMenuListBox_"+B;var C=A(E);var D=C[0];if(D==null){return}C.addClass("open");if(F){if(this.searchFramer==null){this.searchFramer=this.$$(D,"IFRAME")[0]}if(this.searchFramer){this.searchFramer.style.width=D.offsetWidth+"px";this.searchFramer.style.height=D.offsetHeight+"px"}}window.clearTimeout(this.searchTimer);this.searchTimer=null},hideSearchTypes:function(C){var B=this;this.searchTimer=setTimeout(function(){var F="srchMenuListBox_"+C;var D=A(F);var E=D[0];if(E==null){return}E.removeClass("open");if(B.searchFramer==null){B.searchFramer=B.$$(E,"IFRAME")[0]}B.searchTimer=null},500)},switchSearchTypeTo:function(C,D){var E=A("#searchTypeValue_Header");A("#search_t_Header").val(C);A("#srchMenuListBox_Header").removeClass("open");var B=A("#"+C+"_Header");E.html(B.html()).append("<small>&#9660;</small>");FriendProject.Header.Search.ORANGESearchBox.set_defaultValue(FriendProjectRes.Header[C+"DefaultText"]||"");window.clearTimeout(this.searchTimer);this.searchTimer=null},srchSubmit:function(B){return((FriendProject.Header.Search.ORANGESearchBox)&&(FriendProject.Header.Search.ORANGESearchBox.get_value().length>0)||(A("#"+B).val()>0))},srchMenuList:function(D,C){var B=this;if(D){window.clearTimeout(this.searchTimer);this.searchTimer=null}else{this.searchTimer=setTimeout(function(){B.searchTimer=null;A("#srchMenuListBox_Header").removeClass("open")},500)}},searchLocation:function(D,H,E,F){var G=A("#"+H);var C=A("#"+E);var B=A("#"+F);if($qryElement.val().length>0){window.location=[D,G.attr("name"),"=",G.val(),"&",C.attr("name"),"=",C.val(),"&",$qryElement.attr("name"),"=",$qryElement.val(),"&submit=Search"].join()}return false},toggleInternationalLinks:function(B){if((A.browser.msie)&&(A.browser.version<7)){return true}A("#footer").toggleClass("intlLinks");B.preventDefault();return false},initializeProfileSearchMenu:function(B){if(!B){return}if(FriendProject.ClientContext.FunctionalContext){if(FriendProject.ClientContext.FunctionalContext==="UserViewProfile"||FriendProject.ClientContext.FunctionalContext==="SitesProfile"){if(FriendProject.ClientContext.ProfileType==="Band"){switchSearchTypeTo("Music","Header")}}}},framer:null,menuTopOffset:(A.browser.msie)?-3:0,menuLeftOffset:(A.browser.msie)?-3:0,linkOffset:(A.browser.msie&&document.compatMode=="BackCompat")?0:-15,timerOut:null,menuOutTime:250,currentItemId:null,toggle:function(E,B){if(B){var C=this.getSubNav(E);if(this.timerOut){clearTimeout(this.timerOut);this.timerOut=null}if(this.currentItemId!=null){var D=this.getItems(this.currentItemId);D.parent.className="";this.framer.style.left="-100000px";D.child.style.left="-100000px";this.currentItemId=null}C.child.style.left=C.childLeft;C.child.style.top=C.childTop;C.parent.className="open";if(this.framer==null){this.framer=document.getElementById("framer")}this.framer.style.left=C.childLeft;this.framer.style.top=C.childTop;this.framer.style.width=C.child.offsetWidth+"px";this.framer.style.height=C.child.offsetHeight+"px";this.framer.style.zIndex=C.child.style.zIndex+1;this.framer.style.display="block";this.currentItemId=E}else{this.timerOut=setTimeout(function(){rpnav.hideDropDown(E)},this.menuOutTime)}},getSubNav:function(E){var B=this.getItems(E);var C={};C.parent=B.parent;C.child=B.child;if(!B.parent.resized){this.fixedSub(C.child,C.parent);B.parent.resized=true}var D=A(B.parent).offset();C.childLeft=D.left+"px";C.childTop=(D.top+B.parent.offsetHeight)+"px";return C},getItems:function(B){return{child:document.getElementById("subNav"+B),parent:document.getElementById("nav"+B)}},fixedSub:function(F,E){var H=document.getElementById("userdisplay");var G=0;if(H&&H.className==="module"&&H.tagName==="DIV"){G=1}var C=F.getElementsByTagName("LI");var B=140;for(var D=0;D<C.length;D++){if(B<C[D].offsetWidth){B=C[D].offsetWidth}}if(B<E.offsetWidth){B=E.offsetWidth}F.style.width=B+"px";for(var D=0;D<C.length;D++){C[D].style.width=B+"px";C[D].getElementsByTagName("A")[0].style.width=(B+this.linkOffset+G)+"px"}},hideDropDown:function(C){var B=this.getItems(C);B.parent.className="";this.framer.style.left="-100000px";this.framer.style.display="none";B.child.style.left="-100000px";this.timerOut=null;this.currentItemId=null},subToggle:function(C,B){if(B){if(this.timerOut){clearTimeout(this.timerOut);this.timerOut=null}}else{this.timerOut=setTimeout(function(){rpnav.hideDropDown(C)},this.menuOutTime)}}}})(jQuery);var offsetxpoint=-60
var offsetypoint=20
var ie=document.all
var ns6=document.getElementById&&!document.all
var enabletip=false
if(ie||ns6)
var tipobj=document.all?document.all["dhtmltooltip"]:document.getElementById?document.getElementById("dhtmltooltip"):""
function ietruebody(){return(document.compatMode&&document.compatMode!="BackCompat")?document.documentElement:document.body}
function ddrivetip(thetext,thecolor,thewidth){if(ns6||ie){if(typeof thewidth!="undefined")tipobj.style.width=thewidth+"px"
if(typeof thecolor!="undefined"&&thecolor!="")tipobj.style.backgroundColor=thecolor
tipobj.innerHTML=thetext
enabletip=true
return false}}
function positiontip(e){if(enabletip){var curX=(ns6)?e.pageX:event.clientX+ietruebody().scrollLeft;var curY=(ns6)?e.pageY:event.clientY+ietruebody().scrollTop;var rightedge=ie&&!window.opera?ietruebody().clientWidth-event.clientX-offsetxpoint:window.innerWidth-e.clientX-offsetxpoint-20
var bottomedge=ie&&!window.opera?ietruebody().clientHeight-event.clientY-offsetypoint:window.innerHeight-e.clientY-offsetypoint-20
var leftedge=(offsetxpoint<0)?offsetxpoint*(-1):-1000
if(rightedge<tipobj.offsetWidth)
tipobj.style.left=ie?ietruebody().scrollLeft+event.clientX-tipobj.offsetWidth+"px":window.pageXOffset+e.clientX-tipobj.offsetWidth+"px"
else if(curX<leftedge)
tipobj.style.left="5px"
else
tipobj.style.left=curX+offsetxpoint+"px"
if(bottomedge<tipobj.offsetHeight)
tipobj.style.top=ie?ietruebody().scrollTop+event.clientY-tipobj.offsetHeight-offsetypoint+"px":window.pageYOffset+e.clientY-tipobj.offsetHeight-offsetypoint+"px"
else
tipobj.style.top=curY+offsetypoint+"px"
tipobj.style.visibility="visible"}}
function hideddrivetip(){if(ns6||ie){enabletip=false
tipobj.style.visibility="hidden"
tipobj.style.left="-1000px"
tipobj.style.backgroundColor=''
tipobj.style.width=''}}
document.onmousemove=positiontip