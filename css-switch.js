// ==========================================================================
// CSS Switch
// css-switch.js v0.1
// https://github.com/maruthip25/css-switch
// ==========================================================================
// Created By: Maruthi Sharma (http://www.maruthisharma.com)
// ==========================================================================

/* variable to identify the state of the switch - initialized to 0 */
var on = 0;

/* function to switch css files */
function switchCSS(offCSS, onCSS, button) {
var links = document.getElementsByTagName("link");
	for(var i=0; i<links.length; i++){
		if(on==0){
			if(links[i].href.indexOf(offCSS)!=-1){
				links[i].href=onCSS;
				button.style.background="#56aae8";
				button.children[0].style.marginLeft="19px";
				on=1;
			}
		}
		else if(on==1){
			if(links[i].href.indexOf(onCSS)!=-1){
				links[i].href=offCSS;
				button.style.background="#ccc";
				button.children[0].style.marginLeft="0px";
				on=0;
			}
		}
	}
}

/* function to render css-switch element */
function initSwitch(offCSS, onCSS){
	var h = document.getElementsByTagName('head').item(0);
	var l = document.createElement("link");
	l.type = "text/css";
	l.href = offCSS;
	l.rel = "stylesheet";
	h.appendChild(l);
	CreateShadowDom(offCSS,onCSS);
}

function CreateShadowDom(offCSS,onCSS){
	var cssSwitch = document.querySelector('css-switch'); 
	var root = cssSwitch.createShadowRoot();

	var outerdiv = document.createElement('div');
	outerdiv.setAttribute('id','outer-switch');

	outerdiv.style.position="absolute";
	outerdiv.style.width="50px";
	outerdiv.style.height="20px";
	outerdiv.style.background="#ccc";
	outerdiv.style.cursor="pointer";
	outerdiv.style.padding="2.5px";
	outerdiv.style.borderRadius="25px";
	outerdiv.style.boxSizing="border-box";

	var div = document.createElement('div');
	div.setAttribute('id','inner-switch');
	div.setAttribute('style','position:absolute;width:25px; height:25px; border-radius: 30px;margin-left:0px; margin-top: -5px; transition: all .1s ease-in-out; -webkit-transition: all .1s ease-in-out; background: #f4f4f4;');
	outerdiv.appendChild(div);
	root.appendChild(outerdiv);

	outerdiv.addEventListener('click', function(){switchCSS(offCSS,onCSS,this);}, false);	
}
