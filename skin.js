// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: skin.ggsk
// Generated 2020-07-19T17:19:14

function pano2vrSkin(player,base) {
	player.addVariable('opt_3d_preview', 2, true);
	player.addVariable('opt_3d_preview_1', 2, true);
	player.addVariable('vis_image_popup', 2, false);
	player.addVariable('vis_info_popup', 2, false);
	player.addVariable('opt_hotspot_preview', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._blackbg=document.createElement('div');
		el.ggId="blackBg";
		el.ggDx=46.01;
		el.ggDy=40.21;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.588235);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 220%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 220%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._blackbg.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._blackbg.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._blackbg);
		el=me._topbar=document.createElement('div');
		el.ggId="topbar";
		el.ggDx=46.09;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 38px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 0%;';
		hs+='visibility : inherit;';
		hs+='width : 200%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._topbar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._topbar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._topbar);
		el=me._bottombar=document.createElement('div');
		el.ggId="bottombar";
		el.ggDx=46.09;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.196078);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : -0.02%;';
		hs+='cursor : default;';
		hs+='height : 14px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 200%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._bottombar.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._bottombar.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._bottombar);
		el=me._gallery=document.createElement('div');
		els=me._gallery__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="gallery";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -5px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='right: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Art Galery LBR";
		el.appendChild(els);
		me._gallery.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._gallery.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._gallery);
		el=me._artista=document.createElement('div');
		els=me._artista__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="artista";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='bottom : -5px;';
		hs+='height : 20px;';
		hs+='left : 2px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='bottom:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: inherit;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Carlos Medina";
		el.appendChild(els);
		me._artista.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._artista.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._artista);
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGc+CiAgPHBhdGggZD0iTTIxLjA4MSwxTDEsMUwxLDIwLjk0Mkw1LDIwLjk0Mkw1LDcuNDQ0TDExLjI2LDEzLjYyN0wxMy42MjcsMTEuMjAyTDcuNDQ0LDQuOTYyTDIxLjA3MSw1TDIxLjA4MSwxWiIgc3R5bGU9ImZpbGw6d2hpdGU7Ii8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMS4yMjQ2NWUtMTYsLTEuMjI0NjVlLTE2LC0xLDMzLDMyKSI+CiAgIDxwYXRoIGQ9Ik0yMS4wODEsMUwxLDFMMSwyMC45'+
			'NDJMNSwyMC45NDJMNSw3LjQ0NEwxMS4yNiwxMy42MjdMMTMuNjI3LDExLjIwMkw3LjQ0NCw0Ljk2MkwyMS4wNzEsNUwyMS4wODEsMVoiIHN0eWxlPSJmaWxsOndoaXRlOyIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._fullscreen__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="fullScreen";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._fullscreen.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._fullscreen.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._fullscreen.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._fullscreen);
		el=me._infoexpo=document.createElement('div');
		els=me._infoexpo__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNSwwLDAsMS41LC0xLjQ5OTE0LC0xLjk5NzA4KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5'+
			'OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbG'+
			'w6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._infoexpo__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="infoExpo";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 81px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._infoexpo.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infoexpo.onclick=function (e) {
			me._splash.style[domTransition]='none';
			me._splash.style.visibility=(Number(me._splash.style.opacity)>0||!me._splash.style.opacity)?'inherit':'hidden';
			me._splash.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility='hidden';
			me._infoexpo.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility=(Number(me._blackbg.style.opacity)>0||!me._blackbg.style.opacity)?'inherit':'hidden';
			me._blackbg.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility='hidden';
			me._infoartist.ggVisible=false;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility='hidden';
			me._lbr.ggVisible=false;
			me._web.style[domTransition]='none';
			me._web.style.visibility='hidden';
			me._web.ggVisible=false;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility='hidden';
			me._instagram.ggVisible=false;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility='hidden';
			me._facebook.ggVisible=false;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility='hidden';
			me._youtube.ggVisible=false;
		}
		me._infoexpo.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._infoexpo);
		el=me._infoartist=document.createElement('div');
		els=me._infoartist__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPHBhdGggZD0iTTE2LjQ5MSwxLjAwOUM4LjIwNywxLjAwOSAxLjUwOSw3LjcyMSAxLjUwOSwxNkMxLjUwOSwyNC4yNzkgOC4yMDcsMzAuOTkxIDE2LjQ5MSwzMC45OTFDMjQuNzc2LDMwLjk5MSAzMS40OTEsMjQuMjc5IDMxLjQ5MSwxNkMzMS40OTEsNy43MjEgMjQuNzc2LDEuMDA5IDE2LjQ5MSwxLjAwOVpNMTYuNSwxNy4zNjRDMTAuMjEzLDE3LjM2NCA2LjI0MiwxOS45MTIgNi4yNDIsMjMuMDU2TDYuMjQy'+
			'LDI0Ljk1M0wyNi43NTgsMjQuOTUzTDI2Ljc1OCwyMy4wNTZDMjYuNzU4LDE5LjkxMiAyMi43ODcsMTcuMzY0IDE2LjUsMTcuMzY0Wk0xNi41LDMuMzEyQzEzLjM1NiwzLjMxMiAxMC44MDgsNS44NiAxMC44MDgsOS4wMDRDMTAuODA4LDEyLjE0NyAxMy4zNTYsMTQuNjk1IDE2LjUsMTQuNjk1QzE5LjY0NCwxNC42OTUgMjIuMTkyLDEyLjE0NyAyMi4xOTIsOS4wMDRDMjIuMTkyLDUuODYgMTkuNjQ0LDMuMzEyIDE2LjUsMy4zMTJaIiBzdHlsZT0iZmlsbDp3aGl0ZTsiLz4KPC9zdmc+Cg==';
		me._infoartist__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="infoArtist";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 115px;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._infoartist.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._infoartist.onclick=function (e) {
			me._info.style[domTransition]='none';
			me._info.style.visibility=(Number(me._info.style.opacity)>0||!me._info.style.opacity)?'inherit':'hidden';
			me._info.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility='hidden';
			me._infoartist.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility=(Number(me._blackbg.style.opacity)>0||!me._blackbg.style.opacity)?'inherit':'hidden';
			me._blackbg.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility='hidden';
			me._infoexpo.ggVisible=false;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility='hidden';
			me._lbr.ggVisible=false;
			me._web.style[domTransition]='none';
			me._web.style.visibility='hidden';
			me._web.ggVisible=false;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility='hidden';
			me._instagram.ggVisible=false;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility='hidden';
			me._facebook.ggVisible=false;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility='hidden';
			me._youtube.ggVisible=false;
		}
		me._infoartist.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._infoartist);
		el=me._lbr=document.createElement('div');
		els=me._lbr__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4xOTYxMzksMCwwLDAuMTkzMTE1LC0yODQuMzc3LC0yMzIuNjg2KSI+CiAgPHBhdGggZD0iTTE1NTAuMzMsMTI4MC4zM0wxNTUwLjMzLDEzMTZDMTU1MC4zMywxMzIxLjM5IDE1NDguMTksMTMyNi41NyAxNTQ0LjM4LDEzMzAuMzhDMTU0MC41NywxMzM0LjE5IDE1MzUuMzksMTMzNi4zMyAxNTMwLDEzMzYuMzNMMTUwNS44NSwxMzM2LjMzTDE1MDUuODUsMTM2MUMxNTA1'+
			'Ljg1LDEzNjMuOTQgMTUwMy40NiwxMzY2LjMzIDE1MDAuNTIsMTM2Ni4zM0MxNDk3LjU4LDEzNjYuMzMgMTQ5NS4xOSwxMzYzLjk0IDE0OTUuMTksMTM2MUMxNDk1LjE5LDEzNjEgMTQ5NS4xOSwxMjY2Ljg2IDE0OTUuMTksMTIyOS41MkMxNDk1LjE5LDEyMjQuMTMgMTQ5Ny4zMywxMjE4Ljk1IDE1MDEuMTQsMTIxNS4xNEMxNTA0Ljk2LDEyMTEuMzMgMTUxMC4xMywxMjA5LjE5IDE1MTUuNTIsMTIwOS4xOUwxNTMwLDEyMDkuMTlDMTUzNS4zOSwxMjA5LjE5IDE1NDAuNTcsMTIxMS4zMyAxNTQ0LjM4LDEyMTUuMTRDMTU0OC4xOSwxMjE4Ljk1IDE1NTAuMzMsMTIyNC4xMyAxNTUwLjMzLDEyMjkuNT'+
			'JMMTU1MC4zMywxMjY5LjY3TDE1NTUuNjksMTI2OS42N0wxNTU1LjY5LDEyMjkuNTJDMTU1NS43MiwxMjI3LjE4IDE1NTYuMDksMTIyNC44NyAxNTU2Ljg4LDEyMjIuNjZDMTU1OS43MSwxMjE0Ljc3IDE1NjcuMTksMTIwOS41IDE1NzUuNTIsMTIwOS4xOUwxNTc2LjAyLDEyMDkuMTlMMTU5MSwxMjA5LjE5QzE2MDIuMjMsMTIwOS4xOSAxNjExLjMzLDEyMTguMjkgMTYxMS4zMywxMjI5LjUyTDE2MTEuMzMsMTI2MEMxNjExLjMzLDEyNzEuMjMgMTYwMi4yMywxMjgwLjMzIDE1OTEsMTI4MC4zM0wxNTY2LjM1LDEyODAuMzNMMTU2Ni4zNSwxMzYxQzE1NjYuMzMsMTM2MS44MSAxNTY2LjE4LDEzNjIu'+
			'NTggMTU2NS44MywxMzYzLjMxQzE1NjUuNTMsMTM2My45MyAxNTY1LjExLDEzNjQuNDkgMTU2NC42MSwxMzY0Ljk1QzE1NjEuMTgsMTM2OC4wNiAxNTU1LjgsMTM2NS40OSAxNTU1LjY5LDEzNjFMMTU1NS4xNSwxMjgwLjMzTDE1NTAuMzMsMTI4MC4zM1pNMTYwNiwxMzM2LjMzTDE1OTIsMTMzNi4zM0MxNTg2LjYxLDEzMzYuMzMgMTU4MS40MywxMzM0LjE5IDE1NzcuNjIsMTMzMC4zOEMxNTczLjgxLDEzMjYuNTcgMTU3MS42NywxMzIxLjM5IDE1NzEuNjcsMTMxNkMxNTcxLjY3LDEzMDQuOTkgMTU3MS42NywxMjkxLjk1IDE1NzEuNjcsMTI5MS45NUMxNTcxLjY3LDEyODkuMDEgMTU3NC4wNiwxMj'+
			'g2LjYyIDE1NzcsMTI4Ni42MkMxNTc5Ljk0LDEyODYuNjIgMTU4Mi4zMywxMjg5LjAxIDE1ODIuMzMsMTI5MS45NUMxNTgyLjMzLDEyOTEuOTUgMTU4Mi4zMywxMzA0Ljk5IDE1ODIuMzMsMTMxNkMxNTgyLjMzLDEzMTguNTYgMTU4My4zNSwxMzIxLjAyIDE1ODUuMTYsMTMyMi44NEMxNTg2Ljk4LDEzMjQuNjUgMTU4OS40NCwxMzI1LjY3IDE1OTIsMTMyNS42N0wxNjA2LDEzMjUuNjdDMTYwOC45NCwxMzI1LjY3IDE2MTEuMzMsMTMyOC4wNiAxNjExLjMzLDEzMzFDMTYxMS4zMywxMzMzLjk0IDE2MDguOTQsMTMzNi4zMyAxNjA2LDEzMzYuMzNaTTE0ODUuMDQsMTMzNi4zM0wxNDc3LDEzMzYuMzND'+
			'MTQ2NS43NywxMzM2LjMzIDE0NTYuNjcsMTMyNy4yMyAxNDU2LjY3LDEzMTZMMTQ1Ni42NywxMjE2QzE0NTYuNjcsMTIxMy4wNiAxNDU5LjA2LDEyMTAuNjcgMTQ2MiwxMjEwLjY3QzE0NjQuOTQsMTIxMC42NyAxNDY3LjMzLDEyMTMuMDYgMTQ2Ny4zMywxMjE2QzE0NjcuMzMsMTIxNiAxNDY3LjMzLDEyODQuODQgMTQ2Ny4zMywxMzE2QzE0NjcuMzMsMTMyMS4zNCAxNDcxLjY2LDEzMjUuNjcgMTQ3NywxMzI1LjY3TDE0ODUuMDQsMTMyNS42N0MxNDg3Ljk5LDEzMjUuNjcgMTQ5MC4zOCwxMzI4LjA2IDE0OTAuMzgsMTMzMUMxNDkwLjM4LDEzMzMuOTQgMTQ4Ny45OSwxMzM2LjMzIDE0ODUuMDQsMT'+
			'MzNi4zM1pNMTUxNS41MiwxMjE5Ljg1QzE1MTIuOTYsMTIxOS44NSAxNTEwLjUsMTIyMC44NyAxNTA4LjY4LDEyMjIuNjhDMTUwNi44NywxMjI0LjUgMTUwNS44NSwxMjI2Ljk1IDE1MDUuODUsMTIyOS41MkwxNTA1Ljg1LDEzMjUuNjdMMTUzMCwxMzI1LjY3QzE1MzIuNTYsMTMyNS42NyAxNTM1LjAyLDEzMjQuNjUgMTUzNi44NCwxMzIyLjg0QzE1MzguNjUsMTMyMS4wMiAxNTM5LjY3LDEzMTguNTYgMTUzOS42NywxMzE2TDE1MzkuNjcsMTI4MC4zM0wxNTE5LDEyODAuMzNDMTUxOC4yNSwxMjgwLjMxIDE1MTcuNTEsMTI4MC4xOCAxNTE2LjgzLDEyNzkuODdDMTUxNS41OCwxMjc5LjMyIDE1MTQu'+
			'NTYsMTI3OC4yNyAxNTE0LjA1LDEyNzdDMTUxMy44MSwxMjc2LjQgMTUxMy42OSwxMjc1Ljc2IDE1MTMuNjksMTI3NS4xMUMxNTEzLjY5LDEyNzQuNTEgMTUxMy43OSwxMjczLjkxIDE1MTMuOTksMTI3My4zNEMxNTE0LjIyLDEyNzIuNjkgMTUxNC41NywxMjcyLjA4IDE1MTUuMDMsMTI3MS41NUMxNTE1LjUxLDEyNzAuOTkgMTUxNi4xLDEyNzAuNTMgMTUxNi43NiwxMjcwLjJDMTUxNy40NiwxMjY5Ljg2IDE1MTguMjIsMTI2OS42OSAxNTE5LDEyNjkuNjdMMTUzOS45MSwxMjY5LjY3TDE1MzkuNjcsMTIyOS41MkMxNTM5LjY2LDEyMjguNDUgMTUzOS40OSwxMjI3LjM4IDE1MzkuMTQsMTIyNi4zN0'+
			'MxNTM4LjcsMTIyNS4xIDE1MzgsMTIyMy45MyAxNTM3LjA5LDEyMjIuOTRDMTUzNi4wMywxMjIxLjgxIDE1MzQuNzEsMTIyMC45NCAxNTMzLjI2LDEyMjAuNDJDMTUzMi4yMSwxMjIwLjA0IDE1MzEuMTEsMTIxOS44NiAxNTMwLDEyMTkuODVMMTUxNS41MiwxMjE5Ljg1Wk0xNTkxLDEyMTkuODVMMTU3Ni4wMiwxMjE5Ljg1QzE1NzAuNjYsMTIxOS45OSAxNTY2LjQ5LDEyMjQuMTYgMTU2Ni4zNSwxMjI5LjUyTDE1NjYuMzUsMTI2OS42N0wxNTkxLDEyNjkuNjdDMTU5Ni4zNCwxMjY5LjY3IDE2MDAuNjcsMTI2NS4zNCAxNjAwLjY3LDEyNjBMMTYwMC42NywxMjI5LjUyQzE2MDAuNjcsMTIyNC4xOCAx'+
			'NTk2LjM0LDEyMTkuODUgMTU5MSwxMjE5Ljg1WiIgc3R5bGU9ImZpbGw6d2hpdGU7Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._lbr__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="lbr";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 42px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._lbr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._lbr.onclick=function (e) {
			me._artgallerylbr.style[domTransition]='none';
			me._artgallerylbr.style.visibility=(Number(me._artgallerylbr.style.opacity)>0||!me._artgallerylbr.style.opacity)?'inherit':'hidden';
			me._artgallerylbr.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility='hidden';
			me._lbr.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility=(Number(me._blackbg.style.opacity)>0||!me._blackbg.style.opacity)?'inherit':'hidden';
			me._blackbg.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility='hidden';
			me._infoexpo.ggVisible=false;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility='hidden';
			me._infoartist.ggVisible=false;
			me._web.style[domTransition]='none';
			me._web.style.visibility='hidden';
			me._web.ggVisible=false;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility='hidden';
			me._instagram.ggVisible=false;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility='hidden';
			me._facebook.ggVisible=false;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility='hidden';
			me._youtube.ggVisible=false;
		}
		me._lbr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._lbr);
		el=me._artgallerylbr=document.createElement('div');
		els=me._artgallerylbr__img=document.createElement('img');
		els.className='ggskin ggskin_artgallerylbr';
		hs=basePath + 'images/artgallerylbr.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="artgallerylbr";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._artgallerylbr.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._artgallerylbr.onclick=function (e) {
			me._artgallerylbr.style[domTransition]='none';
			me._artgallerylbr.style.visibility='hidden';
			me._artgallerylbr.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._artgallerylbr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._artgallerylbr);
		el=me._web=document.createElement('div');
		els=me._web__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9IndlYiIgdHJhbnNmb3JtPSJtYXRyaXgoMS40OTkwNiwwLDAsMS40OTkwNiwtMS40ODgyOCwtMS45ODU3OCkiPgogIDxwYXRoIGQ9Ik0xNi4zNjEsMTMuOTk4QzE2LjQ0MywxMy4zNDEgMTYuNSwxMi42NzcgMTYuNSwxMS45OThDMTYuNSwxMS4zMTkgMTYuNDQzLDEwLjY1NSAxNi4zNjEsOS45OThMMTkuNzM3LDkuOTk4QzE5LjkwMywxMC42MzggMjAsMTEuMzA2IDIwLDExLjk5OEMyMCwxMi42OSAx'+
			'OS45MDMsMTMuMzU4IDE5LjczNywxMy45OThNMTQuNTkzLDE5LjU1OUMxNS4xOTMsMTguNDQ2IDE1LjY0OSwxNy4yNDggMTUuOTcyLDE1Ljk5OEwxOC45MjEsMTUuOTk4QzE3Ljk2MiwxNy42NTIgMTYuNDMsMTguOTI4IDE0LjU5MywxOS41NTlaTTE0LjMzOSwxMy45OThMOS42NiwxMy45OThDOS41NjUsMTMuMzQzIDkuNSwxMi42NzkgOS41LDExLjk5OEM5LjUsMTEuMzE3IDkuNTY1LDEwLjY1MyA5LjY2LDkuOTk4TDE0LjMzOSw5Ljk5OEMxNC40MzQsMTAuNjUzIDE0LjUsMTEuMzE3IDE0LjUsMTEuOTk4QzE0LjUsMTIuNjc5IDE0LjQzNCwxMy4zNDMgMTQuMzM5LDEzLjk5OFpNMTEuOTk4LDE5Lj'+
			'k2MkMxMS4xNjYsMTguNzYyIDEwLjUxNiwxNy40MjkgMTAuMDg5LDE1Ljk5OEwxMy45MSwxNS45OThDMTMuNDgyLDE3LjQyOSAxMi44MzIsMTguNzYyIDExLjk5OCwxOS45NjJaTTguMDI2LDcuOTk4TDUuMDc3LDcuOTk4QzYuMDM1LDYuMzQyIDcuNTY3LDUuMDY0IDkuNDA1LDQuNDM1QzguODA1LDUuNTQ4IDguMzQ5LDYuNzQ2IDguMDI2LDcuOTk4Wk01LjA3NywxNS45OThMOC4wMjYsMTUuOTk4QzguMzQ5LDE3LjI0OSA4LjgwNSwxOC40NDggOS40MDUsMTkuNTYxQzcuNTY3LDE4LjkzMiA2LjAzNSwxNy42NTQgNS4wNzcsMTUuOTk4Wk00LjI2MSwxMy45OThDNC4wOTYsMTMuMzU4IDQsMTIuNjkg'+
			'NCwxMS45OThDNCwxMS4zMDYgNC4wOTYsMTAuNjM4IDQuMjYxLDkuOTk4TDcuNjM4LDkuOTk4QzcuNTU2LDEwLjY1NSA3LjUsMTEuMzE5IDcuNSwxMS45OThDNy41LDEyLjY3NyA3LjU1NiwxMy4zNDEgNy42MzgsMTMuOTk4TTExLjk5OCw0LjAzNEMxMi44MzIsNS4yMzQgMTMuNDgyLDYuNTY3IDEzLjkxLDcuOTk4TDEwLjA4OSw3Ljk5OEMxMC41MTYsNi41NjcgMTEuMTY2LDUuMjM0IDExLjk5OCw0LjAzNFpNMTguOTIxLDcuOTk4TDE1Ljk3Miw3Ljk5OEMxNS42NDksNi43NDggMTUuMTkzLDUuNTUgMTQuNTkzLDQuNDM3QzE2LjQzLDUuMDY4IDE3Ljk2Miw2LjM0NCAxOC45MjEsNy45OThaTTExLj'+
			'k5NCwxLjk5OEM2LjQ2OCwxLjk5OCAyLDYuNDc1IDIsMTEuOTk4QzIsMTcuNTIxIDYuNDY4LDIxLjk5OCAxMS45OTQsMjEuOTk4QzE3LjUyMSwyMS45OTggMjIsMTcuNTIxIDIyLDExLjk5OEMyMiw2LjQ3NSAxNy41MjEsMS45OTggMTEuOTk0LDEuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._web__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="web";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 78px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._web.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._web.onclick=function (e) {
			player.openUrl("https:\/\/www.carlosmedina.net\/","_blank");
		}
		me._web.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._web);
		el=me._instagram=document.createElement('div');
		els=me._instagram__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9IkFydGJvYXJkMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk2OTcsMCwwLDEsMCwwKSI+CiAgPHJlY3QgeT0iMCIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMzIiBzdHlsZT0iZmlsbDpub25lOyIgeD0iMCIvPgogIDxnIGlkPSJpbnN0YWdyYW0iIHRyYW5zZm9ybT0ibWF0cml4KDEuNTQxNzIsMCwwLDEuNDk1LC0yLjAwMDY4LC0xLjk0MDA3KSI+CiAgIDxwYXRoIGQ9Ik03LjgsMkwxNi4yLDJDMTkuNDAz'+
			'LDIgMjIsNC41OTcgMjIsNy44TDIyLDE2LjJDMjIsMTkuNDAzIDE5LjQwMywyMiAxNi4yLDIyTDcuOCwyMkM0LjU5NywyMiAyLDE5LjQwMyAyLDE2LjJMMiw3LjhDMiw0LjU5NyA0LjU5NywyIDcuOCwyWk03LjYsNEM1LjYxMiw0IDQsNS42MTIgNCw3LjZMNCwxNi40QzQsMTguMzg4IDUuNjEyLDIwIDcuNiwyMEwxNi40LDIwQzE4LjM4OCwyMCAyMCwxOC4zODggMjAsMTYuNEwyMCw3LjZDMjAsNS42MTIgMTguMzg4LDQgMTYuNCw0TDcuNiw0Wk0xNy4yNSw1LjVDMTcuOTQsNS41IDE4LjUsNi4wNiAxOC41LDYuNzVDMTguNSw3LjQ0IDE3Ljk0LDggMTcuMjUsOEMxNi41Niw4IDE2LDcuNDQgMTYsNi'+
			'43NUMxNiw2LjA2IDE2LjU2LDUuNSAxNy4yNSw1LjVaTTEyLDdDMTQuNzYxLDcgMTcsOS4yMzkgMTcsMTJDMTcsMTQuNzYxIDE0Ljc2MSwxNyAxMiwxN0M5LjIzOSwxNyA3LDE0Ljc2MSA3LDEyQzcsOS4yMzkgOS4yMzksNyAxMiw3Wk0xMiw5QzEwLjM0Myw5IDksMTAuMzQzIDksMTJDOSwxMy42NTcgMTAuMzQzLDE1IDEyLDE1QzEzLjY1NywxNSAxNSwxMy42NTcgMTUsMTJDMTUsMTAuMzQzIDEzLjY1Nyw5IDEyLDlaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._instagram__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="instagram";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 41px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._instagram.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._instagram.onclick=function (e) {
			player.openUrl("https:\/\/www.instagram.com\/carlosmedinaescultor\/","_blank");
		}
		me._instagram.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._instagram);
		el=me._facebook=document.createElement('div');
		els=me._facebook__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9IkFydGJvYXJkMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk2OTcsMCwwLDEsMCwwKSI+CiAgPHJlY3QgeT0iMCIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMzIiBzdHlsZT0iZmlsbDpub25lOyIgeD0iMCIvPgogIDxnIGlkPSJmYWNlYm9vay1ib3giIHRyYW5zZm9ybT0ibWF0cml4KDEuNTQxNzIsMCwwLDEuNDk1LC0xLjk5OTc0LC0xLjkzNzE4KSI+CiAgIDxwYXRoIGQ9Ik0xOC45OTksMy45OThMMTgu'+
			'OTk5LDYuOTk4TDE2Ljk5OSw2Ljk5OEMxNi40NDcsNi45OTggMTUuOTk5LDcuNDQ1IDE1Ljk5OSw3Ljk5OEwxNS45OTksOS45OThMMTguOTk5LDkuOTk4TDE4Ljk5OSwxMi45OThMMTUuOTk5LDEyLjk5OEwxNS45OTksMTkuOTk4TDEyLjk5OSwxOS45OThMMTIuOTk5LDEyLjk5OEwxMC45OTksMTIuOTk4TDEwLjk5OSw5Ljk5OEwxMi45OTksOS45OThMMTIuOTk5LDcuNDk4QzEyLjk5OSw1LjU2NCAxNC41NjYsMy45OTggMTYuNDk5LDMuOTk4TTE5Ljk5OSwxLjk5OEwzLjk5OSwxLjk5OEMyLjg5NSwxLjk5OCAyLjAwOSwyLjg5MyAyLjAwOSwzLjk5OEwxLjk5OSwxOS45OThDMS45OTksMjEuMTAyID'+
			'IuODk1LDIxLjk5OCAzLjk5OSwyMS45OThMMTkuOTk5LDIxLjk5OEMyMS4xMDMsMjEuOTk4IDIxLjk5OSwyMS4xMDIgMjEuOTk5LDE5Ljk5OEwyMS45OTksMy45OThDMjEuOTk5LDIuODkzIDIxLjEwMywxLjk5OCAxOS45OTksMS45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._facebook__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="facebook";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._facebook.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._facebook.onclick=function (e) {
			player.openUrl("https:\/\/www.facebook.com\/CarlosMedinaEstudio\/","_blank");
		}
		me._facebook.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._facebook);
		el=me._youtube=document.createElement('div');
		els=me._youtube__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9IkFydGJvYXJkMSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk2OTcsMCwwLDEsMCwwKSI+CiAgPHJlY3QgeT0iMCIgaGVpZ2h0PSIzMiIgd2lkdGg9IjMzIiBzdHlsZT0iZmlsbDpub25lOyIgeD0iMCIvPgogIDxnIGlkPSJ5b3V0dWJlLXBsYXkiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTcxMTIsMCwwLDEuNTIzNTEsLTIuMzQ0NjgsLTIuMjc5MTUpIj4KICAgPHBhdGggZD0iTTkuOTk5LDE2LjQ5OEw5'+
			'Ljk5OSw3LjQ5OEwxNS45OTksMTEuOTk4TTIwLjAwMSw0LjM5OEMxOS4zOTksNC4yMDEgMTUuNzAxLDMuOTk4IDExLjk5OSwzLjk5OEM4LjMsMy45OTggNC42MDEsNC4xODUgMy45OTksNC4zODJDMi40MzUsNC44OTggMS45OTksOC40MDIgMS45OTksMTEuOTk4QzEuOTk5LDE1LjU5NCAyLjQzNSwxOS4wOTggMy45OTksMTkuNjE0QzQuNjAxLDE5LjgxMSA4LjMsMTkuOTk4IDExLjk5OSwxOS45OThDMTUuNzAxLDE5Ljk5OCAxOS4zOTksMTkuODExIDIwLjAwMSwxOS42MTRDMjEuNTYzLDE5LjA5OCAyMS45ODksMTUuNTk0IDIxLjk4OSwxMS45OThDMjEuOTg5LDguNDAyIDIxLjU2Myw0LjkxNCAyMC'+
			'4wMDEsNC4zOThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._youtube__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="youtube";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 43px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 33px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._youtube.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._youtube.onclick=function (e) {
			if (me._video.ggVideoNotLoaded) {
				me._video.ggInitMedia(me._video.ggVideoSource);
			}
			me._video.style[domTransition]='none';
			me._video.style.visibility=(Number(me._video.style.opacity)>0||!me._video.style.opacity)?'inherit':'hidden';
			me._video.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility='hidden';
			me._youtube.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility='hidden';
			me._fullscreen.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility=(Number(me._blackbg.style.opacity)>0||!me._blackbg.style.opacity)?'inherit':'hidden';
			me._blackbg.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility='hidden';
			me._infoartist.ggVisible=false;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility='hidden';
			me._lbr.ggVisible=false;
			me._web.style[domTransition]='none';
			me._web.style.visibility='hidden';
			me._web.ggVisible=false;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility='hidden';
			me._instagram.ggVisible=false;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility='hidden';
			me._facebook.ggVisible=false;
			me._video_close.style[domTransition]='none';
			me._video_close.style.visibility=(Number(me._video_close.style.opacity)>0||!me._video_close.style.opacity)?'inherit':'hidden';
			me._video_close.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility='hidden';
			me._infoexpo.ggVisible=false;
		}
		me._youtube.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._youtube);
		el=me._splash=document.createElement('div');
		el.ggId="splash";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 241px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 321px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._splash.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._splash.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_10.onclick=function (e) {
			me._splash.style[domTransition]='none';
			me._splash.style.visibility='hidden';
			me._splash.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._splash.appendChild(me._image_10);
		el=me._ht_info_close7=document.createElement('div');
		els=me._ht_info_close7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMSIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLT'+
			'AuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4'+
			'Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close7__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TD'+
			'E3LjY5MywxNmwzLjQzOS0zLjQ0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjgtMC40NjcsMC40NjgtMS4yMjYsMC4wMDEtMS42OTNjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkyLDAuMDAxbC0zLjQ0LDMuNDRsLTMuNDQxLTMuNDQxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY4LTAuNDY4LTEuMjI1LTAuNDY3LTEuNjkzLDBjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI1LDAsMS42OTJMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY2LTAuNDY3LDEuMjI0LDAsMS42OTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwLjAwMWwzLjQ0'+
			'LTMuNDRsMy40NCwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNCwwLjQ2NywxLjY5MSwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjEuNTk4LDIwLjY2NCwyMS42LDE5LjkwNywyMS4xMzIsMTkuNDM5eiBNMjQuODM5LDcuMTYxYy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NiwwLDE3LjY3OCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzQuODgyLDQuODgxLDEyLjc5Niw0Ljg4MSwxNy42NzgsMEMyOS43MiwxOS45NTcsMjkuNzIxLDEyLjA0MywyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTksMC01LjE3MS0wLjk4NC03LjE0Ni0yLjk1OSYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7QzYuODc4LDIxLjE3LDUuODk1LDE4LjU5MSw1Ljg5NCwxNmMwLTIuNTkxLDAuOTgzLTUuMTcsMi45NTktNy4xNDdjMS45NzctMS45NzYsNC41NTYtMi45NTksNy4xNDgtMi45NiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTljMS45NzUsMS45NzcsMi45NTcsNC41NTYsMi45NTksNy4xNDdjLTAuMDAxLDIuNTkyLTAuOTg0LDUuMTctMi45Niw3LjE0OCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjE3LDI1LjEyMywxOC41OTEsMjYuMTA3LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIwLjIiLz4K'+
			'IDwvZz4KPC9zdmc+Cg==';
		me._ht_info_close7__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -35px;';
		hs+='top : -28px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close7.onclick=function (e) {
			me._splash.style[domTransition]='none';
			me._splash.style.visibility='hidden';
			me._splash.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close7.onmouseover=function (e) {
			me._ht_info_close7__img.style.visibility='hidden';
			me._ht_info_close7__imgo.style.visibility='inherit';
		}
		me._ht_info_close7.onmouseout=function (e) {
			me._ht_info_close7__img.style.visibility='inherit';
			me._ht_info_close7__imgo.style.visibility='hidden';
		}
		me._ht_info_close7.ggUpdatePosition=function (useTransition) {
		}
		me._splash.appendChild(me._ht_info_close7);
		me.divSkin.appendChild(me._splash);
		el=me._videoini=document.createElement('div');
		me._videoini.seekbars = [];
			me._videoini.ggYoutubeApiReady = function() { me._videoini.ggYoutubeApiLoaded = true;}
		me._videoini.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._videoini.seekbars.length; i++) {
					var seekbar = me.findElements(me._videoini.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._videoini.hasChildNodes()) {
				me._videoini.removeChild(me._videoini.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._videoini.ggVideoNotLoaded ==false && me._videoini.ggDeactivate) { me._videoini.ggDeactivate(); }
				me._videoini.ggVideoNotLoaded = true;
				return;
			}
			me._videoini.ggVideoNotLoaded = false;
			me._videoini__vid=document.createElement('iframe');
			me._videoini__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._videoini__vid.setAttribute('src', ggVideoUrl);
			me._videoini__vid.setAttribute('width', '100%');
			me._videoini__vid.setAttribute('height', '100%');
			me._videoini__vid.setAttribute('allow', 'autoplay');
			me._videoini__vid.setAttribute('allowfullscreen', 'true');
			me._videoini__vid.setAttribute('style', 'border:none; ; ;');
			me._videoini.appendChild(me._videoini__vid);
			me._videoini__vid.id = 'youtube-video';
			me._videoini.ggYoutubeApiReady = function() {
				me._videoini.ggApiPlayerType = 'youtube';
				me._videoini.ggApiPlayerReady = false;
				me._videoini.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._videoini.ggApiPlayerReady = true;
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._videoini.ggMediaEnded) {
								me._videoini.ggMediaEnded();
							}
							if (event.data == 1 && me._videoini.ggActivate) {
								me._videoini.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._videoini.ggDeactivate) {
								me._videoini.ggDeactivate();
							}
						}
					}
				});
			}
			if (me._videoini.ggMediaEnded) {
			}
			me._videoini.ggVideoSource = media;
			if (me._videoini.ggYoutubeApiLoaded && me._videoini.ggYoutubeApiLoaded == true) {me._videoini.ggYoutubeApiReady();}
		}
		el.ggId="VideoIni";
		el.ggDx=0;
		el.ggDy=14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._videoini.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._videoini.ggMediaEnded=function () {
			me._videoini.ggInitMedia('');
			me._videoini.style[domTransition]='none';
			me._videoini.style.visibility='hidden';
			me._videoini.ggVisible=false;
			me._video_closeini.style[domTransition]='none';
			me._video_closeini.style.visibility='hidden';
			me._video_closeini.ggVisible=false;
			me._splash.style[domTransition]='none';
			me._splash.style.visibility=(Number(me._splash.style.opacity)>0||!me._splash.style.opacity)?'inherit':'hidden';
			me._splash.ggVisible=true;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility=(Number(me._blackbg.style.opacity)>0||!me._blackbg.style.opacity)?'inherit':'hidden';
			me._blackbg.ggVisible=true;
		}
		me._videoini.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._videoini);
		el=me._video_closeini=document.createElement('div');
		els=me._video_closeini__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_closeini__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_closeini__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_closeini__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_closeIni";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_closeini.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_closeini.onclick=function (e) {
			me._videoini.ggInitMedia('');
			me._videoini.style[domTransition]='none';
			me._videoini.style.visibility='hidden';
			me._videoini.ggVisible=false;
			me._video_closeini.style[domTransition]='none';
			me._video_closeini.style.visibility='hidden';
			me._video_closeini.ggVisible=false;
			me._splash.style[domTransition]='none';
			me._splash.style.visibility=(Number(me._splash.style.opacity)>0||!me._splash.style.opacity)?'inherit':'hidden';
			me._splash.ggVisible=true;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility=(Number(me._blackbg.style.opacity)>0||!me._blackbg.style.opacity)?'inherit':'hidden';
			me._blackbg.ggVisible=true;
		}
		me._video_closeini.onmouseover=function (e) {
			me._video_closeini__img.style.visibility='hidden';
			me._video_closeini__imgo.style.visibility='inherit';
		}
		me._video_closeini.onmouseout=function (e) {
			me._video_closeini__img.style.visibility='inherit';
			me._video_closeini__imgo.style.visibility='hidden';
		}
		me._video_closeini.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_closeini);
		el=me._video=document.createElement('div');
		me._video.seekbars = [];
			me._video.ggYoutubeApiReady = function() { me._video.ggYoutubeApiLoaded = true;}
		me._video.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video.seekbars.length; i++) {
					var seekbar = me.findElements(me._video.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video.hasChildNodes()) {
				me._video.removeChild(me._video.lastChild);
			}
			if(media == '') {
				notifySeekbars();
			if (me._video.ggVideoNotLoaded ==false && me._video.ggDeactivate) { me._video.ggDeactivate(); }
				me._video.ggVideoNotLoaded = true;
				return;
			}
			me._video.ggVideoNotLoaded = false;
			me._video__vid=document.createElement('iframe');
			me._video__vid.className='ggskin ggskin_video';
			var ggVideoParams = '?autoplay=1&amp;controls=1&amp;loop=0&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + media + ggVideoParams;
			me._video__vid.setAttribute('src', ggVideoUrl);
			me._video__vid.setAttribute('width', '100%');
			me._video__vid.setAttribute('height', '100%');
			me._video__vid.setAttribute('allow', 'autoplay');
			me._video__vid.setAttribute('allowfullscreen', 'true');
			me._video__vid.setAttribute('style', 'border:none; ; ;');
			me._video.appendChild(me._video__vid);
			me._video__vid.id = 'youtube-video';
			me._video.ggYoutubeApiReady = function() {
				me._video.ggApiPlayerType = 'youtube';
				me._video.ggApiPlayerReady = false;
				me._video.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._video.ggApiPlayerReady = true;
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._video.ggMediaEnded) {
								me._video.ggMediaEnded();
							}
							if (event.data == 1 && me._video.ggActivate) {
								me._video.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._video.ggDeactivate) {
								me._video.ggDeactivate();
							}
						}
					}
				});
			}
			if (me._video.ggMediaEnded) {
			}
			me._video.ggVideoSource = media;
			if (me._video.ggYoutubeApiLoaded && me._video.ggYoutubeApiLoaded == true) {me._video.ggYoutubeApiReady();}
		}
		el.ggId="Video";
		el.ggDx=0;
		el.ggDy=14;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 80%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video.ggMediaEnded=function () {
			me._video.ggInitMedia('');
			me._video.style[domTransition]='none';
			me._video.style.visibility='hidden';
			me._video.ggVisible=false;
			me._video_close.style[domTransition]='none';
			me._video_close.style.visibility='hidden';
			me._video_close.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._video.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._video);
		el=me._video_close=document.createElement('div');
		els=me._video_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : 3px;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._video_close.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._video_close.onclick=function (e) {
			me._video.ggInitMedia('');
			me._video.style[domTransition]='none';
			me._video.style.visibility='hidden';
			me._video.ggVisible=false;
			me._video_close.style[domTransition]='none';
			me._video_close.style.visibility='hidden';
			me._video_close.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._video_close.onmouseover=function (e) {
			me._video_close__img.style.visibility='hidden';
			me._video_close__imgo.style.visibility='inherit';
		}
		me._video_close.onmouseout=function (e) {
			me._video_close__img.style.visibility='inherit';
			me._video_close__imgo.style.visibility='hidden';
		}
		me._video_close.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._video_close);
		el=me._info=document.createElement('div');
		el.ggId="info";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 241px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 321px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsCAYAAADtt+XCAAAZZklEQVR4nO3deXhNd+LH8U/ckaTRCLU2yaQRu9j3KcpIE3uIjp0aqtOg6VDTMWNrzBg1iGdkOpgWbVVNq30sUcqUFrEElTTPoDKCxl5E2qFSNVd+f/jlPjn3ZLn5xtKp9+t5PI9z7sm535tw3+eeLV7+/v55AgCglMrd7wEAAP43ERAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGDkJ/d7APfSSy+9pIEDB1rmDRgwQF9++eX9GRAKNWbMGD333HOWeRMmTNDu3bst8zp37qzmzZtr69atOnz48L0cIgCVISBVq1ZV165d1bx5czVs2FCPPfaYcnJylJWVpePHj2vnzp1KTk6+k2Mtsxo1aqh+/fqWeT4+PvdpNGXTr18/9erVyzY/Oztbv/'+
			'vd7zxez5QpU1SrVi3b/AMHDui1114r0xhNValSxfZzqlChgmX6448/Vrt27STdfg1jxozRhg0b7tkYARgGJCYmRvPmzVP16tVtj7Vp00bS7a399evXa9q0aTp9+nTZRgmbpk2batCgQbb5eXl5eu+995SWllbiOqpWrapf//rXeuihh2yPlS9f/r4FpCTdu3d3xUOSHnroIY0aNYqAAPdYqY6BeHt7KyEhQcuXLy80HpYVlyunmJgY7dq1S3369CnTIOE5Ly8vDR061KNlhw0bVmg8fuiqVatmm/ff//73PowEeLCVKiDz58/Xs88+K4fD4fHXVK5cuchPK7g7oqKiPFquZ8+ed3kkd8f777+v/fv3u6ZzcnL0t7/97T6OCHgwebwLKzw8XIMHD7bNX7NmjbZs2aI9e/bo0UcfVevWrRUbG6uQkBDXMoGBgVq4cKGG'+
			'DBlyZ0aNYtWqVUtdu3bVJ598UuQyoaGhat269T0c1Z3z3XffqVu3bnryyScVEBCgnTt36sKFC/d7WMADx+OATJ8+Xb6+vpZ5s2fP1pw5c1zTWVlZSklJ0dtvv629e/cqODjY9VjPnj0VGhrKGU/3yKBBg4oNyPDhw1W+fPl7OKI7y+l0asuWLfd7GMADzaOAtGnTRt27d7fMO3r0qCUeBX3zzTdasmSJZs2a5Zrn5eWlnj17atGiRbbl27Vrp7FjxyosLExBQUGqWLGiLl++rPPnz2vXrl1KSEjQN998Y/u6YcOGaeTIka7p3Nxc9e3bV4MHD9bgwYPVsmVLORwOPf3009q2bZsnL9UiOjpa3bp1U/369VW7dm2VL19eJ06c0LFjx7R7924tX768xHU0btxYEydOVL169RQYGKiKFSvq0qVLOn/+vD7//HMlJCTo3L'+
			'lzpR6bu2+//VZ+fn7y8vKSJHXt2lUOh0NOp7PQ5d1/nlevXpW/v79Hz+Xt7a24uDi1bNlS9erVU0hIiLKzs3X8+HFlZGRo4cKFJZ440b17dw0cOFCNGjVSaGioLly4oC+++ELz5s0r8fnDwsK0ZMkSy7y1a9dq8eLFrumkpCTLBs/SpUu1evVqjRs3Tl27dlWDBg1UvXp1XbhwQUePHlV8fLyOHDlS5HM6HA7FxsaqW7duCgoKUmBgoG7duqULFy7o9OnTeuONN7R+/foSxw78mHgUkHbt2qlcOevhknXr1hX7Ndu2bbMERJLat29vCUhAQICWLFmi7t27246rBAUFKSgoSK1bt9awYcM0bdo0/eMf/7AsExwcrPbt27umnU6nhgwZoldffdWyde3t7e3Jy3Tx8/PT3LlzNXz4cNvrbt68uZo3b64BAwaoT58+iouL'+
			'05kzZwpdz4IFCzRixAjbqcLBwcEKDg5WmzZtNGjQIC1atEizZ88u1Rjd5ebm6sSJE2rSpImk26csx8TE6IMPPrAt27RpU9dykvTVV1/p8uXLCg8PL/F5GjdurMWLF6tZs2aFvqbOnTurb9++mjx5stasWVPoOuLi4vTyyy9bfi5hYWEKCwvTE088oZSUlGLH4OfnZ/m5S7Kddda2bVv5+fm5pvft26fo6GhFR0dblgsNDVVoaKg6dOigsWPHKikpyfZ8ffr00R/+8AfVrl3b9pi/v7/q1q2rrl27as+ePRo+fLguX75c7PiBHwuPAhIWFmabV9I1HocPH9bQoUNdW8TS7YOd+RwOh9544w09+eSTJT5/tWrVNHfuXB05ckTp6elFLudwOPSXv/zFtmumNGfo+Pn5aevWrWrcuHGJy0ZEROjTTz9VTEyMDh06ZHls2r'+
			'RpGjNmTInrqFixoiZPnqyLFy9q6dKlHo/Tna+vrzZt2mQJQ1EBGTZsmOXnsnXrVstpsUWJiIjQm2++qYCAgGKXq1GjhpYtW6ZKlSrZPqVNmDBBM2fOtDx/Qf7+/oqMjCxxLKUVGxtb7DU//v7+mjp1qjZu3Gj51Na2bVstWrSoxNcsSY8//riWLFmiX/ziF3dkzMAPnUdnYRU8IJ7v5MmTJX7dhx9+qA0bNrj+7Nq1y/XY+PHjbfG4ePGi1qxZoxUrVtgOigYEBHi0lV7YaamlCciUKVNs8cjLy9PJkyeVkZFh2yVUo0YNxcfHW+YFBwdr4sSJlnlnzpzR66+/rmnTpmnr1q26ceOG6zEvLy/NnDnTdoypNHx8fLRixQrdvHnTNa9z5856+OGHbcu6v0GvWrWqxOd2OByKj4+3vZHm5OQoNTVVp06dsi3/4osvWtbr'+
			'6+ur2NhYWzxu3rypI0eOKDs7u/gXWQb58fjPf/6jzz//vNBPjQ0bNrTdqSAhIcHymvPy8pSenq6///3v2r59u+XnKN0+A2748OF34RUAPzweBaTgwXBJ+v7773X+/PkyPXHHjh0t07du3dLAgQP1y1/+Us8//7waNmxoe1Nq1KiRR+u+dOmStm/frmXLlmnFihUejzUsLEyjRo2yzMvJyVHfvn3VrFkztWnTRm3atNHx48cty0RGRqp3796u6YiICNunoIkTJ2rSpElKTExU//79bZ8M/P399cQTT3g0zsKUL19ely5dsuz+qVixou3Mt06dOqlOnTqu6WPHjik5ObnEK/J/9atf2XZbbdy4UeHh4erSpYsaN26s3/zmN7p165br8ZCQEE2aNMmyjsDAQMs6Dh8+rPDwcLVv31516tTRuHHjLBG8U/Ly8vTnP//ZtZ'+
			'usSZMmev31123LNWzY0PX3qlWr2nbr7d+/X506ddJLL72k6OhojR8/3raOtm3b3vHxAz9EHu3CqlSpkmU6Nze3yIOzntqxY4floGV2drZSU1Nd006nUzt37rRszVWpUkUNGjTQ0aNHi1zvoUOHFB0dbbQfevTo0bYDyfHx8dq+fbtrOjMzUyNGjFBycrLruI2Xl5dGjx6tDz/8UNLt4zcFOZ1OW3SWLFmi3Nxcy7yyvnFWq1ZN69evV6dOnVzz+vTpY3mjdD8V+6OPPpKkEj+BjBgxwjJ9/vx5xcbG6tq1a655r732mnr06KGIiAjXvC5duuhPf/qTJKlHjx6WdTidTj3zzDOuT5tOp1MrV65Us2bNbPfCKqtPPvnENY7855o+fbpGjx5tOf5W8GdXqVIlJSYmWtazY8cOy/S6des0b948Va5c2TXP/TYswI+VRwEp'+
			'uFUpqcj916VR1IVf3t7eCgsLk4+Pj77++mvb4yEhIcUGJD4+3vggpvuxnuzsbL3zzju25Q4dOqSDBw9atjQL7ubbs2ePZXmHw6GkpCS99dZbWrdunTIyMpSenq4XX3zRaJxFqVy5slatWqUZM2aoYsWKkqSf/exnqlmzpi5cuCCHw2HZbeh0OvX2229LKjkg7rsxk5OTCz0z7tChQ5aAPProo66/16xZ07Jsenp6oWc+3Y2D0O6xlqTr16/rypUrlivbC17wmpmZads9ma9KlSquT+ZXrlyxBKTg34EfM48CcunSJcturAoVKhR7imhpVK9eXc8//7wiIyNVvXp1PfLII6W60t1dWbbi3d8kT506pe+//77QZU+cOGEJSFBQkOt7kpycrNTUVLVs2dL1eHBwsKZOnaqpU6cqKytLaWlp2rlzp1asWFHkc5RWQECArl'+
			'27pu3bt7vONvLx8dHw4cM1f/589erVy/KGnpqaqoyMDPn6+hZ7TUjdunVdQcoXGRlZ6Ju/+00Pa9as6fq+uN+NwH0X5f3gvnHkftZdvs6dOys2NlaNGjVSlSpVbN8P4EHk0TGQs2fPWqYdDod++tOflvnJX3jhBaWlpWnChAkKDw9XtWrVyhSPsnLfP1/wrDF37lvJFSpUUN26dSXd3rIfPnx4kbcYf+yxx9SvXz8tWLBAqampd2x3Tf7uN/fjK/m3LHnqqacs8/NvPli1atVi19u8eXPbvMqVK7tO3S34x33rO/8TZfXq1W27B69cueLBq7q//Pz8lJSUpKSkJPXq1Uu1atUiHsD/8+gTSGFbimFhYcVeVe7r66u4uDjLvNOnT+vdd9+VJPXv318vv/yyZcvX6XQqPT1d586d03fffadatWqpVatWngzxjrh+/bpl'+
			'urgDy+5ne+Xl5VmicubMGXXs2FHjx4/XyJEjXXFxFxISorlz56p8+fJ69dVXyzB6uc642rBhg86dO+cKYosWLdSoUSN16dLFtWxubq5r95X7MS53Zd1lWa5cOV27dk23bt2ybOGX9vqce83hcGj58uWW75t0e9fm4cOHlZ2dLafTqYiICHZb4YHkUUAKO2W3Z8+exd4qo0OHDpo+fbpl3ooVK1wB+f3vf2+Jx9dff62hQ4daTvWdPHnyPQ3ImTNnLLuxHnnkkSKXdd9qv3Tpku1TidPpVGJiohITExUeHq5+/fqpXbt2atWqlWVr3MvLS/Hx8Xr33XfLtP8/PyBOp1Mff/yx6yp9h8OhhIQEy5tccnKy67TZkq5x+Oyzz2zzkpKStGnTJo/GdfbsWV2/fl2XL1+27MaqUqWKR19/v0RGRtpuOPnPf/5TzzzzjOX4z/'+
			'79+wkIHkgeBWTbtm3Kzc21bHV3795dkydP9vhWGZJcp5gGBATYDlh/8MEHlnjcD1lZWXr88cdd03Xq1FFYWJhOnDhhWc7hcNjCVvC6gk6dOlm2tI8fP67Dhw+7dmlVqVJFr7zyiuWMKG9vb0VGRtquti+Nglv0K1eutNzmpUOHDpZl165dW+jXFebEiRPKzs62vOEHBgZq1apVpRrfV199ZQlI06ZN79ixtLuhsIsrJ02aVOjJA8CDyKNjIJmZmbY3tpCQEK1cubLQN5/IyEjLm5d0++D25s2bJd2+HYb7QdvC1uN+TOJuK3iLcOn2tRWTJ0+2LTd+/HjbtTEFr5BfvHix5QLK3/72t5Zls7OzCz27p7Ar/k3t27evyHs7Xb58We+//36p1vfFF19Yplu3bq0JEyYUuuyAAQOUkpJiu27n3//+t2U6KChIo0ePtszz'+
			'9fW9K1eimwgNDbVM37p1y/ZpLSAggE8feGB5fDfe2bNnKyYmxvKfpVevXtq9e7dSU1N19OhR13UaERERtoPhS5cude2eSUtL040bNyzHGPr06aODBw/qvffeU82aNRUXF6enn37aPuCf3L1f4/7mm29q1KhRatq0qWvekCFD9PDDD+ujjz7S1atX9fOf/9wWx5ycHL3yyiuu6UOHDll2hT311FPatGmTK6De3t6Fhqmke0CV1ubNmwu9+HLr1q2lPvNr1qxZSkpKsoR+5syZateunTZv3qysrCw1bdpUrVq1UnR0tBwOh1auXKnevXu7bha5aNEi9evXz/JvY/bs2apdu7Z27dql2rVrq3fv3j+YC/EyMzMt0+XKldOsWbM0Z84c7du3T1FRUZoyZYpq1KhhWe5+nggC3EsevxtfvHhRiYmJmjFjhuWgav369Uu8cO'+
			'rgwYOaMmWKa/r69etKT0+3vFFUrlxZCxcu1Pz584s9pdSTexKZcjqd+uMf/6jVq1dbXmOfPn2K/a2Kixcvttx6ZcGCBXriiSdcxyT8/f21evVqZWZm6urVq6pXr57tdNdTp05ZLli8E1asWKEXXnjBFt3841ClsWfPHr311lt69tlnXfO8vLzUq1evQn83u3R7F+DUqVNdV2sfOHBAn376qeVaFB8fH40bN07jxo0r9Zjutm3btmnSpEmW71+XLl3UpUsX3bx5s8h/p/+Lv+URMFGq30iYkJCg5557rlT3LEpJSdHYsWNt+7mL2pdc8D/lt99+a3u8Vq1apRhx6W3ZskXTp08v9LndOZ1OLVu2TAsWLLDM379/v2bMmGHbyq9Tp45atGhhi0dOTo5Gjhx5x48FnDhxQgcOHLDNK+7kh+JMnz5d77zzjsfjTE9P18yZ'+
			'My3zpk2bpmPHjhX7de5b/vdLSkpKkRe8FvfvtFq1amW6rxnwv6JUAZFub71GRUUpOTm50Kt78506dUpxcXGKiooq9Mrx9PR0jRgxwnL7koI+++wzRUREWG6VIdkPBt8NiYmJ6t27d7F3/j1z5oxGjRqliRMnFro7aOnSperWrZvt1hcF3bhxQ2vXrlV0dLQOHjx4R8buLv9aj3z5u9FMXL9+XWPHjtWIESNst2Yp6NKlS/rrX/+qiIgIXbx40fLYkSNH1KNHjyJPmNi4caMiIyNtF/jdL/Hx8ZozZ06h1wTdvHlTCxYsUEJCgmW+j48Pd+TFA8HL398/z/SLvb291a5dO7Vu3Vp16tTRhQsXdOzYMaWlpSkjI8Pj9fTo0UPNmjVTcHCwTp48qb1792rfvn1yOp2Kioqy7LbKzc113XOqQYMGltuXS7fvVeT+ppWvRY'+
			'sWlhsJSrfvBeUeqYKCg4PVsWNHNWnSRH5+fvrXv/6llJSUYn/5kLtGjRqpRYsWql+/vqpWrapz587pyy+/VEpKivHWdnh4uO34Rlpamm19AQEBlt+RvnfvXtudaKtXr67OnTtb5p06dUr79u0rdgxhYWFq3769GjdurICAAJ0/f14ZGRlav369R8dY6tatq4iICIWHhyszM1Pbt293RTsmJsay66jgz9X9NUm3D9AXDH7//v0txyLOnj1ru8WMdHv3ZMFPC/k34nQXGBioqKgo1a9fX76+vkpLS9OOHTuUlZVV6PfPfTzAj1GZAgIAeHCVehcWAAASAQEAGCIgAAAjBAQAYISAAACMEBAAgBECAgAw4pWXl8d1IACAUuMTCADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACME'+
			'BABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghI'+
			'AAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQ'+
			'EACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQ'+
			'ICADBCQAAARggIAMAIAQEAGCEgAAAjBAQAYISAAACMEBAAgBECAgAwQkAAAEYICADACAEBABghIAAAIwQEAGCEgAAAjBAQAIARAgIAMEJAAABGCAgAwAgBAQAYISAAACMEBABghIAAAIwQEACAEQICADBCQAAARggIAMDI/wH8uye7kDoeewAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 300px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._info.appendChild(me._image_1);
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 240px;';
		hs+='left : -25px;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : inherit;';
		hs+='width : 374px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 374px;';
		hs+='height: 240px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="La geometri\u0301a es un eje reco\u0301ndito de lo natural. Si bien la naturaleza crece y se despliega de manera incesante y libe\u0301rrima, tambie\u0301n es cierto que desde las parti\u0301culas microsco\u0301picas a las formas del macrocosmos, existen estructuras que subrepticiamente parecen dar un sustento anali\u0301tico a muchos de los objetos y feno\u0301menos que pueblan el medio ambiente.<br\/>La celebracio\u0301n del descubrimiento de las fuentes de un ri\u0301o majestuoso y mi\u0301tico como el Orinoco, brinda la oportunidad de imaginar el agua y recrear su esencia i\u0301nfima, la gota, como meta\u0301fora del nacimiento de todo caudal, y como recordatorio del ciclo que propicia la vida.<br\/>La obra reciente del escultor Carlos Medina conjuga estas reflexiones: por una parte, es el resultado de un estudio consecuente sobre la geometri\u0301a de la gota, como forma perfecta y esencial de la naturaleza; por otra, y a pesar de su resolucio\u0301n limpia, brillante, contenida se desvincula de las aproximaciones minimalistas al propiciar relaciones de i\u0301ndole poe\u0301tico, metafo\u0301rico y sensorial.<br\/>El volumen geome\u0301trico nunca ha sido para Medina solo cuerpo, ya que la aproximacio\u0301n del artista a la forma no ha sido desapasionada. Por el contrario, podri\u0301amos afirmar que<br\/>el escultor ha indagado en lo geome\u0301trico como una vi\u0301a que le ha permitido develar \u2013o imaginar- un \u201cintri\u0301nseco orga\u0301nico\u201d, que en su trayectoria ha tenido momentos de inteligente asociacio\u0301n con lo cultural-simbo\u0301lico o con la sensualidad de lo vegetal. Las \u201cgotas\u201d han venido a compilar y a sintetizar muchas de las preocupaciones de Medina en cuanto a la geometri\u0301a y a su sentido. Estas piezas que, a manera de instalaciones, interactu\u0301an de una manera ma\u0301s dina\u0301mica con el espectador, dan paso a lo lu\u0301dico, a la experiencia sensorial, al recurso metafo\u0301rico. En ellas la lluvia surge como una masa transparente, mo\u0301vil, envolvente; otras veces, en las ra\u0301fagas, el espacio se activa por el impacto de las gotas dispuestas diagonalmente, acentuado por la sensacio\u0301n de velocidad, el recuerdo del salpicado, y el establecimiento de un intenso juego de luces y sombras.<br\/>La gota, esa esfera que se prolonga, que cae por definicio\u0301n, que describe una trayectoria y salta, se hace entonces forma perfecta para el arte: es entonces volumen memorioso para la vida, y sacia una sed milenaria, en tiempos en que es necesario restablecer las fuentes que nos conectan con el planeta.<br\/>Katherine Chaco\u0301n Cri\u0301tico de Arte";
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._text_1);
		el=me._ht_info_close6=document.createElement('div');
		els=me._ht_info_close6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close6__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close6__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -33px;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close6.onclick=function (e) {
			me._info.style[domTransition]='none';
			me._info.style.visibility='hidden';
			me._info.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close6.onmouseover=function (e) {
			me._ht_info_close6__img.style.visibility='hidden';
			me._ht_info_close6__imgo.style.visibility='inherit';
		}
		me._ht_info_close6.onmouseout=function (e) {
			me._ht_info_close6__img.style.visibility='inherit';
			me._ht_info_close6__imgo.style.visibility='hidden';
		}
		me._ht_info_close6.ggUpdatePosition=function (useTransition) {
		}
		me._info.appendChild(me._ht_info_close6);
		me.divSkin.appendChild(me._info);
		el=me._information_01=document.createElement('div');
		el.ggId="information_01";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_01.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_01.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_01.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_01.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_01.style[domTransition]='';
				if (me._information_01.ggCurrentLogicStateVisible == 0) {
					me._information_01.style.visibility=(Number(me._information_01.style.opacity)>0||!me._information_01.style.opacity)?'inherit':'hidden';
					me._information_01.ggVisible=true;
				}
				else {
					me._information_01.style.visibility="hidden";
					me._information_01.ggVisible=false;
				}
			}
		}
		me._information_01.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_015=document.createElement('div');
		els=me._image_015__img=document.createElement('img');
		els.className='ggskin ggskin_image_015';
		hs=basePath + 'images/image_015.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_015.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_015.ggUpdatePosition=function (useTransition) {
		}
		me._information_01.appendChild(me._image_015);
		el=me._ht_info_close5=document.createElement('div');
		els=me._ht_info_close5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close5.onclick=function (e) {
			me._information_01.style[domTransition]='none';
			me._information_01.style.visibility='hidden';
			me._information_01.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close5.onmouseover=function (e) {
			me._ht_info_close5__img.style.visibility='hidden';
			me._ht_info_close5__imgo.style.visibility='inherit';
		}
		me._ht_info_close5.onmouseout=function (e) {
			me._ht_info_close5__img.style.visibility='inherit';
			me._ht_info_close5__imgo.style.visibility='hidden';
		}
		me._ht_info_close5.ggUpdatePosition=function (useTransition) {
		}
		me._information_01.appendChild(me._ht_info_close5);
		me.divSkin.appendChild(me._information_01);
		el=me._information_02=document.createElement('div');
		el.ggId="information_02";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_02.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_02.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_02.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_02.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_02.style[domTransition]='';
				if (me._information_02.ggCurrentLogicStateVisible == 0) {
					me._information_02.style.visibility=(Number(me._information_02.style.opacity)>0||!me._information_02.style.opacity)?'inherit':'hidden';
					me._information_02.ggVisible=true;
				}
				else {
					me._information_02.style.visibility="hidden";
					me._information_02.ggVisible=false;
				}
			}
		}
		me._information_02.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_014=document.createElement('div');
		els=me._image_014__img=document.createElement('img');
		els.className='ggskin ggskin_image_014';
		hs=basePath + 'images/image_014.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_014.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_014.ggUpdatePosition=function (useTransition) {
		}
		me._information_02.appendChild(me._image_014);
		el=me._ht_info_close4=document.createElement('div');
		els=me._ht_info_close4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close4.onclick=function (e) {
			me._information_02.style[domTransition]='none';
			me._information_02.style.visibility='hidden';
			me._information_02.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close4.onmouseover=function (e) {
			me._ht_info_close4__img.style.visibility='hidden';
			me._ht_info_close4__imgo.style.visibility='inherit';
		}
		me._ht_info_close4.onmouseout=function (e) {
			me._ht_info_close4__img.style.visibility='inherit';
			me._ht_info_close4__imgo.style.visibility='hidden';
		}
		me._ht_info_close4.ggUpdatePosition=function (useTransition) {
		}
		me._information_02.appendChild(me._ht_info_close4);
		me.divSkin.appendChild(me._information_02);
		el=me._information_03=document.createElement('div');
		el.ggId="information_03";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_03.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_03.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_03.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_03.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_03.style[domTransition]='';
				if (me._information_03.ggCurrentLogicStateVisible == 0) {
					me._information_03.style.visibility=(Number(me._information_03.style.opacity)>0||!me._information_03.style.opacity)?'inherit':'hidden';
					me._information_03.ggVisible=true;
				}
				else {
					me._information_03.style.visibility="hidden";
					me._information_03.ggVisible=false;
				}
			}
		}
		me._information_03.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_013=document.createElement('div');
		els=me._image_013__img=document.createElement('img');
		els.className='ggskin ggskin_image_013';
		hs=basePath + 'images/image_013.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_013.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_013.ggUpdatePosition=function (useTransition) {
		}
		me._information_03.appendChild(me._image_013);
		el=me._ht_info_close3=document.createElement('div');
		els=me._ht_info_close3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close3.onclick=function (e) {
			me._information_03.style[domTransition]='none';
			me._information_03.style.visibility='hidden';
			me._information_03.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close3.onmouseover=function (e) {
			me._ht_info_close3__img.style.visibility='hidden';
			me._ht_info_close3__imgo.style.visibility='inherit';
		}
		me._ht_info_close3.onmouseout=function (e) {
			me._ht_info_close3__img.style.visibility='inherit';
			me._ht_info_close3__imgo.style.visibility='hidden';
		}
		me._ht_info_close3.ggUpdatePosition=function (useTransition) {
		}
		me._information_03.appendChild(me._ht_info_close3);
		me.divSkin.appendChild(me._information_03);
		el=me._information_04=document.createElement('div');
		el.ggId="information_04";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_04.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_04.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_04.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_04.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_04.style[domTransition]='';
				if (me._information_04.ggCurrentLogicStateVisible == 0) {
					me._information_04.style.visibility=(Number(me._information_04.style.opacity)>0||!me._information_04.style.opacity)?'inherit':'hidden';
					me._information_04.ggVisible=true;
				}
				else {
					me._information_04.style.visibility="hidden";
					me._information_04.ggVisible=false;
				}
			}
		}
		me._information_04.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_012=document.createElement('div');
		els=me._image_012__img=document.createElement('img');
		els.className='ggskin ggskin_image_012';
		hs=basePath + 'images/image_012.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_012.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_012.ggUpdatePosition=function (useTransition) {
		}
		me._information_04.appendChild(me._image_012);
		el=me._ht_info_close2=document.createElement('div');
		els=me._ht_info_close2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close2.onclick=function (e) {
			me._information_04.style[domTransition]='none';
			me._information_04.style.visibility='hidden';
			me._information_04.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close2.onmouseover=function (e) {
			me._ht_info_close2__img.style.visibility='hidden';
			me._ht_info_close2__imgo.style.visibility='inherit';
		}
		me._ht_info_close2.onmouseout=function (e) {
			me._ht_info_close2__img.style.visibility='inherit';
			me._ht_info_close2__imgo.style.visibility='hidden';
		}
		me._ht_info_close2.ggUpdatePosition=function (useTransition) {
		}
		me._information_04.appendChild(me._ht_info_close2);
		me.divSkin.appendChild(me._information_04);
		el=me._information_05=document.createElement('div');
		el.ggId="information_05";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_05.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_05.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_05.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_05.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_05.style[domTransition]='';
				if (me._information_05.ggCurrentLogicStateVisible == 0) {
					me._information_05.style.visibility=(Number(me._information_05.style.opacity)>0||!me._information_05.style.opacity)?'inherit':'hidden';
					me._information_05.ggVisible=true;
				}
				else {
					me._information_05.style.visibility="hidden";
					me._information_05.ggVisible=false;
				}
			}
		}
		me._information_05.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_011=document.createElement('div');
		els=me._image_011__img=document.createElement('img');
		els.className='ggskin ggskin_image_011';
		hs=basePath + 'images/image_011.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_011.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_011.ggUpdatePosition=function (useTransition) {
		}
		me._information_05.appendChild(me._image_011);
		el=me._ht_info_close1=document.createElement('div');
		els=me._ht_info_close1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close1.onclick=function (e) {
			me._information_05.style[domTransition]='none';
			me._information_05.style.visibility='hidden';
			me._information_05.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close1.onmouseover=function (e) {
			me._ht_info_close1__img.style.visibility='hidden';
			me._ht_info_close1__imgo.style.visibility='inherit';
		}
		me._ht_info_close1.onmouseout=function (e) {
			me._ht_info_close1__img.style.visibility='inherit';
			me._ht_info_close1__imgo.style.visibility='hidden';
		}
		me._ht_info_close1.ggUpdatePosition=function (useTransition) {
		}
		me._information_05.appendChild(me._ht_info_close1);
		me.divSkin.appendChild(me._information_05);
		el=me._information_06=document.createElement('div');
		el.ggId="information_06";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_06.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_06.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_06.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_06.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_06.style[domTransition]='';
				if (me._information_06.ggCurrentLogicStateVisible == 0) {
					me._information_06.style.visibility=(Number(me._information_06.style.opacity)>0||!me._information_06.style.opacity)?'inherit':'hidden';
					me._information_06.ggVisible=true;
				}
				else {
					me._information_06.style.visibility="hidden";
					me._information_06.ggVisible=false;
				}
			}
		}
		me._information_06.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_010=document.createElement('div');
		els=me._image_010__img=document.createElement('img');
		els.className='ggskin ggskin_image_010';
		hs=basePath + 'images/image_010.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_010.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_010.ggUpdatePosition=function (useTransition) {
		}
		me._information_06.appendChild(me._image_010);
		el=me._ht_info_close0=document.createElement('div');
		els=me._ht_info_close0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close0.onclick=function (e) {
			me._information_06.style[domTransition]='none';
			me._information_06.style.visibility='hidden';
			me._information_06.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close0.onmouseover=function (e) {
			me._ht_info_close0__img.style.visibility='hidden';
			me._ht_info_close0__imgo.style.visibility='inherit';
		}
		me._ht_info_close0.onmouseout=function (e) {
			me._ht_info_close0__img.style.visibility='inherit';
			me._ht_info_close0__imgo.style.visibility='hidden';
		}
		me._ht_info_close0.ggUpdatePosition=function (useTransition) {
		}
		me._information_06.appendChild(me._ht_info_close0);
		me.divSkin.appendChild(me._information_06);
		el=me._information_07=document.createElement('div');
		el.ggId="information_07";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 250px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_07.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_07.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('vis_info_popup') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._information_07.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._information_07.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._information_07.style[domTransition]='';
				if (me._information_07.ggCurrentLogicStateVisible == 0) {
					me._information_07.style.visibility=(Number(me._information_07.style.opacity)>0||!me._information_07.style.opacity)?'inherit':'hidden';
					me._information_07.ggVisible=true;
				}
				else {
					me._information_07.style.visibility="hidden";
					me._information_07.ggVisible=false;
				}
			}
		}
		me._information_07.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._image_01=document.createElement('div');
		els=me._image_01__img=document.createElement('img');
		els.className='ggskin ggskin_image_01';
		hs=basePath + 'images/image_01.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image_01";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 300px;';
		hs+='left : -50px;';
		hs+='position : absolute;';
		hs+='top : -4px;';
		hs+='visibility : inherit;';
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_01.ggUpdatePosition=function (useTransition) {
		}
		me._information_07.appendChild(me._image_01);
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFjLTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAx'+
			'JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Ljg4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuOD'+
			'gxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIu'+
			'OTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiIHN0cm9rZT0iIzNDM0MzQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KIDwvZz4KIDxnPgogIDxwYXRoIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC'+
			'4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4'+
			'OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMTMuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMT'+
			'csMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIGlkPSJMYXllcl8xIiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB3aWR0aD0iMzJweCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMz'+
			'IiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4KIDxnIG9wYWNpdHk9IjAuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5Miww'+
			'LjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4'+
			'LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIgc3Ryb2tlPSIjM0MzQzNDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIi'+
			'BkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40'+
			'NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45OD'+
			'QtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2LjEwNywxNiwyNi4xMDZ6IiBzdHJva2U9IiNmZmZmZmYiIHN0'+
			'cm9rZS13aWR0aD0iMC4yIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='position : absolute;';
		hs+='right : -45px;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._ht_info_close.onclick=function (e) {
			me._information_07.style[domTransition]='none';
			me._information_07.style.visibility='hidden';
			me._information_07.ggVisible=false;
			me._blackbg.style[domTransition]='none';
			me._blackbg.style.visibility='hidden';
			me._blackbg.ggVisible=false;
			me._fullscreen.style[domTransition]='none';
			me._fullscreen.style.visibility=(Number(me._fullscreen.style.opacity)>0||!me._fullscreen.style.opacity)?'inherit':'hidden';
			me._fullscreen.ggVisible=true;
			me._infoartist.style[domTransition]='none';
			me._infoartist.style.visibility=(Number(me._infoartist.style.opacity)>0||!me._infoartist.style.opacity)?'inherit':'hidden';
			me._infoartist.ggVisible=true;
			me._infoexpo.style[domTransition]='none';
			me._infoexpo.style.visibility=(Number(me._infoexpo.style.opacity)>0||!me._infoexpo.style.opacity)?'inherit':'hidden';
			me._infoexpo.ggVisible=true;
			me._lbr.style[domTransition]='none';
			me._lbr.style.visibility=(Number(me._lbr.style.opacity)>0||!me._lbr.style.opacity)?'inherit':'hidden';
			me._lbr.ggVisible=true;
			me._web.style[domTransition]='none';
			me._web.style.visibility=(Number(me._web.style.opacity)>0||!me._web.style.opacity)?'inherit':'hidden';
			me._web.ggVisible=true;
			me._instagram.style[domTransition]='none';
			me._instagram.style.visibility=(Number(me._instagram.style.opacity)>0||!me._instagram.style.opacity)?'inherit':'hidden';
			me._instagram.ggVisible=true;
			me._facebook.style[domTransition]='none';
			me._facebook.style.visibility=(Number(me._facebook.style.opacity)>0||!me._facebook.style.opacity)?'inherit':'hidden';
			me._facebook.ggVisible=true;
			me._youtube.style[domTransition]='none';
			me._youtube.style.visibility=(Number(me._youtube.style.opacity)>0||!me._youtube.style.opacity)?'inherit':'hidden';
			me._youtube.ggVisible=true;
		}
		me._ht_info_close.onmouseover=function (e) {
			me._ht_info_close__img.style.visibility='hidden';
			me._ht_info_close__imgo.style.visibility='inherit';
		}
		me._ht_info_close.onmouseout=function (e) {
			me._ht_info_close__img.style.visibility='inherit';
			me._ht_info_close__imgo.style.visibility='hidden';
		}
		me._ht_info_close.ggUpdatePosition=function (useTransition) {
		}
		me._information_07.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._information_07);
		me._videoini.ggInitMedia('74NzPPXopSE');
		me._video.ggVideoSource = '74NzPPXopSE';
		me._video.ggVideoNotLoaded = true;
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_changenode = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hsimage && hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_configloaded = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_hastouch = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_position();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._hsimage && hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._hsimage.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
				if (hotspotTemplates['ht_node'][i]._ht_node_customimage && hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._ht_node_customimage.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._tt_ht_node && hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible) {
					hotspotTemplates['ht_node'][i]._tt_ht_node.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_01_changenode = function(){
		if(hotspotTemplates['ht_info_01']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_01'].length; i++) {
				if (hotspotTemplates['ht_info_01'][i]._ht_info_image5 && hotspotTemplates['ht_info_01'][i]._ht_info_image5.logicBlock_visible) {
					hotspotTemplates['ht_info_01'][i]._ht_info_image5.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_01_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_01']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_01'].length; i++) {
				if (hotspotTemplates['ht_info_01'][i]._ht_info_image5 && hotspotTemplates['ht_info_01'][i]._ht_info_image5.logicBlock_visible) {
					hotspotTemplates['ht_info_01'][i]._ht_info_image5.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_02_changenode = function(){
		if(hotspotTemplates['ht_info_02']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_02'].length; i++) {
				if (hotspotTemplates['ht_info_02'][i]._ht_info_image4 && hotspotTemplates['ht_info_02'][i]._ht_info_image4.logicBlock_visible) {
					hotspotTemplates['ht_info_02'][i]._ht_info_image4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_02_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_02']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_02'].length; i++) {
				if (hotspotTemplates['ht_info_02'][i]._ht_info_image4 && hotspotTemplates['ht_info_02'][i]._ht_info_image4.logicBlock_visible) {
					hotspotTemplates['ht_info_02'][i]._ht_info_image4.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_03_changenode = function(){
		if(hotspotTemplates['ht_info_03']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_03'].length; i++) {
				if (hotspotTemplates['ht_info_03'][i]._ht_info_image3 && hotspotTemplates['ht_info_03'][i]._ht_info_image3.logicBlock_visible) {
					hotspotTemplates['ht_info_03'][i]._ht_info_image3.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_03_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_03']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_03'].length; i++) {
				if (hotspotTemplates['ht_info_03'][i]._ht_info_image3 && hotspotTemplates['ht_info_03'][i]._ht_info_image3.logicBlock_visible) {
					hotspotTemplates['ht_info_03'][i]._ht_info_image3.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_04_changenode = function(){
		if(hotspotTemplates['ht_info_04']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_04'].length; i++) {
				if (hotspotTemplates['ht_info_04'][i]._ht_info_image2 && hotspotTemplates['ht_info_04'][i]._ht_info_image2.logicBlock_visible) {
					hotspotTemplates['ht_info_04'][i]._ht_info_image2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_04_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_04']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_04'].length; i++) {
				if (hotspotTemplates['ht_info_04'][i]._ht_info_image2 && hotspotTemplates['ht_info_04'][i]._ht_info_image2.logicBlock_visible) {
					hotspotTemplates['ht_info_04'][i]._ht_info_image2.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_05_changenode = function(){
		if(hotspotTemplates['ht_info_05']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_05'].length; i++) {
				if (hotspotTemplates['ht_info_05'][i]._ht_info_image1 && hotspotTemplates['ht_info_05'][i]._ht_info_image1.logicBlock_visible) {
					hotspotTemplates['ht_info_05'][i]._ht_info_image1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_05_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_05']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_05'].length; i++) {
				if (hotspotTemplates['ht_info_05'][i]._ht_info_image1 && hotspotTemplates['ht_info_05'][i]._ht_info_image1.logicBlock_visible) {
					hotspotTemplates['ht_info_05'][i]._ht_info_image1.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_06_changenode = function(){
		if(hotspotTemplates['ht_info_06']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_06'].length; i++) {
				if (hotspotTemplates['ht_info_06'][i]._ht_info_image0 && hotspotTemplates['ht_info_06'][i]._ht_info_image0.logicBlock_visible) {
					hotspotTemplates['ht_info_06'][i]._ht_info_image0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_06_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_06']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_06'].length; i++) {
				if (hotspotTemplates['ht_info_06'][i]._ht_info_image0 && hotspotTemplates['ht_info_06'][i]._ht_info_image0.logicBlock_visible) {
					hotspotTemplates['ht_info_06'][i]._ht_info_image0.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_07_changenode = function(){
		if(hotspotTemplates['ht_info_07']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_07'].length; i++) {
				if (hotspotTemplates['ht_info_07'][i]._ht_info_image && hotspotTemplates['ht_info_07'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info_07'][i]._ht_info_image.logicBlock_visible();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_info_07_activehotspotchanged = function(){
		if(hotspotTemplates['ht_info_07']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_07'].length; i++) {
				if (hotspotTemplates['ht_info_07'][i]._ht_info_image && hotspotTemplates['ht_info_07'][i]._ht_info_image.logicBlock_visible) {
					hotspotTemplates['ht_info_07'][i]._ht_info_image.logicBlock_visible();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=200;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openUrl(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._tt_ht_node.logicBlock_visible();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hsimage=document.createElement('div');
		els=me._hsimage__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDUwIDM1IiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9IkFydGJvYXJkMSIgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMjM4OCwwLDAsMS4wNTE5OCwwLDEuMTk5MDRlLTEzKSI+CiAgPHJlY3QgeT0iMCIgaGVpZ2h0PSIzMy4yNyIgd2lkdGg9IjQ4LjgzNCIgc3R5bGU9ImZpbGw6bm9uZTsiIHg9IjAiLz4KICA8ZyBpZD0iY2xvc2UtY2lyY2xlLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDAuOTc2Njc1LDAsMCwwLjc2MjgxMiw4Ljg4Mjg5ZS0xMywwLjQw'+
			'ODQ2MSkiPgogICA8cGF0aCBkPSJNMTguMDY2LDEwLjAxMkwxOS43NzksMTIuNzQyQzExLjcwNCwxNC40ODIgNS4yNTMsMTkuOTkgNi4zNzMsMjUuNDg5QzcuNzU1LDMyLjI3NSAxNy42ODQsMzUuODM1IDI1LDM1LjgzNUMzMS43ODYsMzUuODM1IDQxLjMwMywzMi4yMTIgNDMuNjI3LDI1LjQ4OUM0NS40NjYsMjAuMTcgMzguNTA1LDE0LjUxOSAzMC4yMTksMTIuNzQ2TDMxLjkzNCwxMC4wMTJDNDIuMDQ5LDExLjk4MiA0OS40MTcsMTguMTU4IDQ5LjQxNywyNS40ODlDNDkuNDE3LDM0LjQxMiAzOC41MDMsNDIuNjI0IDI1LDQyLjYyNEMxMS40OTcsNDIuNjI0IDAuNTgzLDM0LjQxMiAwLjU4MywyNS'+
			'40ODlDMC41ODMsMTguMTU4IDcuOTUxLDExLjk4MiAxOC4wNjYsMTAuMDEyWk0yNy4zNTEsMTcuMzE3QzMxLjAwNSwxNy45OTIgMzMuNjc4LDIwLjIwNiAzMy42NzgsMjIuODM5QzMzLjY3OCwyNi4wMSAyOS43OTksMjguNTc0IDI1LDI4LjU3NEMyMC4yMDEsMjguNTc0IDE2LjMyMiwyNi4wMSAxNi4zMjIsMjIuODM5QzE2LjMyMiwyMC4yMDYgMTguOTk1LDE3Ljk5MiAyMi42NDksMTcuMzE3TDI1LDIxLjA2NEwyNy4zNTEsMTcuMzE3WiIgc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgPC9nPgogIDxnIGlkPSJjbG9zZS1jaXJjbGUtb3V0bGluZTEiIHNlcmlm'+
			'OmlkPSJjbG9zZS1jaXJjbGUtb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMC45NzY2NzUsMCwwLDAuNzYyODEyLDguODgyODllLTEzLC0wLjc0OTg1NCkiPgogICA8cGF0aCBkPSJNMTguMDY2LDEwLjAxMkwxOS43NzksMTIuNzQyQzExLjcwNCwxNC40ODIgNS4yNTMsMTkuOTkgNi4zNzMsMjUuNDg5QzcuNzU1LDMyLjI3NSAxNy42ODQsMzUuODM1IDI1LDM1LjgzNUMzMS43ODYsMzUuODM1IDQxLjMwMywzMi4yMTIgNDMuNjI3LDI1LjQ4OUM0NS40NjYsMjAuMTcgMzguNTA1LDE0LjUxOSAzMC4yMTksMTIuNzQ2TDMxLjkzNCwxMC4wMTJDNDIuMDQ5LDExLjk4MiA0OS40MTcsMTguMTU4IDQ5Lj'+
			'QxNywyNS40ODlDNDkuNDE3LDM0LjQxMiAzOC41MDMsNDIuNjI0IDI1LDQyLjYyNEMxMS40OTcsNDIuNjI0IDAuNTgzLDM0LjQxMiAwLjU4MywyNS40ODlDMC41ODMsMTguMTU4IDcuOTUxLDExLjk4MiAxOC4wNjYsMTAuMDEyWk0yNy4zNTEsMTcuMzE3QzMxLjAwNSwxNy45OTIgMzMuNjc4LDIwLjIwNiAzMy42NzgsMjIuODM5QzMzLjY3OCwyNi4wMSAyOS43OTksMjguNTc0IDI1LDI4LjU3NEMyMC4yMDEsMjguNTc0IDE2LjMyMiwyNi4wMSAxNi4zMjIsMjIuODM5QzE2LjMyMiwyMC4yMDYgMTguOTk1LDE3Ljk5MiAyMi42NDksMTcuMzE3TDI1LDIxLjA2NEwyNy4zNTEsMTcuMzE3Wk0yNSwxNy4z'+
			'MTdMMTUsMS4zNzZMMzUsMS4zNzZMMjUsMTcuMzE3WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._hsimage__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hsimage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : -27px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : -22px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hsimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hsimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._hsimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._hsimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._hsimage.style[domTransition]='';
				if (me._hsimage.ggCurrentLogicStateVisible == 0) {
					me._hsimage.style.visibility="hidden";
					me._hsimage.ggVisible=false;
				}
				else {
					me._hsimage.style.visibility=(Number(me._hsimage.style.opacity)>0||!me._hsimage.style.opacity)?'inherit':'hidden';
					me._hsimage.ggVisible=true;
				}
			}
		}
		me._hsimage.onmouseover=function (e) {
			me._hsimage.style[domTransition]='none';
			me._hsimage.style.opacity='1';
			me._hsimage.style.visibility=me._hsimage.ggVisible?'inherit':'hidden';
		}
		me._hsimage.onmouseout=function (e) {
			me._hsimage.style[domTransition]='none';
			me._hsimage.style.opacity='0.5';
			me._hsimage.style.visibility=me._hsimage.ggVisible?'inherit':'hidden';
		}
		me._hsimage.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hsimage);
		el=me._tt_ht_node=document.createElement('div');
		els=me._tt_ht_node__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="tt_ht_node";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.hotspot.title;
		el.appendChild(els);
		me._tt_ht_node.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._tt_ht_node.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._tt_ht_node.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStatePosition == 0) {
					this.ggDx = 0;
					me._tt_ht_node.style.top='-47px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
				else {
					me._tt_ht_node.ggDx=0;
					me._tt_ht_node.style.top='24px';
					me._tt_ht_node.ggUpdatePosition(true);
				}
			}
		}
		me._tt_ht_node.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == true)) && 
				((player.getVariableValue('opt_hotspot_preview') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else if (
				((me.elementMouseOver['ht_node'] == true)) && 
				((me.hotspot.title != "")) && 
				((player.getIsTour() == false)) && 
				((player.getVariableValue('opt_hotspot_preview') == true))
			)
			{
				newLogicStateVisible = 2;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._tt_ht_node.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._tt_ht_node.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._tt_ht_node.style[domTransition]='left 0s, top 0s';
				if (me._tt_ht_node.ggCurrentLogicStateVisible == 0) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 1) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else if (me._tt_ht_node.ggCurrentLogicStateVisible == 2) {
					me._tt_ht_node.style.visibility=(Number(me._tt_ht_node.style.opacity)>0||!me._tt_ht_node.style.opacity)?'inherit':'hidden';
					me._tt_ht_node.ggVisible=true;
				}
				else {
					me._tt_ht_node.style.visibility="hidden";
					me._tt_ht_node.ggVisible=false;
				}
			}
		}
		me._tt_ht_node.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._ht_node.appendChild(me._tt_ht_node);
		el=me._ht_node_customimage=document.createElement('div');
		els=me._ht_node_customimage__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._ht_node_customimage.ggUpdatePosition();}
		if ((hotspot) && (hotspot.customimage)) {
			el.ggText=hotspot.customimage;
			els.setAttribute('src', hotspot.customimage);
			els.style.width=hotspot.customimagewidth + 'px';
			els.style.height=hotspot.customimageheight + 'px';
			me.ggUse3d = hotspot.use3D;
			me.gg3dDistance = hotspot.distance3D;
		}
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="ht_node_CustomImage";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node_customimage.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_node_customimage.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage == ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_node_customimage.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_node_customimage.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_node_customimage.style[domTransition]='';
				if (me._ht_node_customimage.ggCurrentLogicStateVisible == 0) {
					me._ht_node_customimage.style.visibility="hidden";
					me._ht_node_customimage__img.src = '';
					me._ht_node_customimage.ggVisible=false;
				}
				else {
					me._ht_node_customimage.style.visibility=(Number(me._ht_node_customimage.style.opacity)>0||!me._ht_node_customimage.style.opacity)?'inherit':'hidden';
					me._ht_node_customimage.ggSubElement.src=me._ht_node_customimage.ggText;
					me._ht_node_customimage.ggVisible=true;
				}
			}
		}
		me._ht_node_customimage.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._ht_node_customimage.clientWidth;
			var parentHeight = me._ht_node_customimage.clientHeight;
			var img = me._ht_node_customimage__img;
			var aspectRatioDiv = me._ht_node_customimage.clientWidth / me._ht_node_customimage.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if ((hotspot) && (hotspot.customimage)) {
				currentWidth  = hotspot.customimagewidth;
				currentHeight = hotspot.customimageheight;
			}
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._ht_node.appendChild(me._ht_node_customimage);
		if ((hotspot) && (hotspot.customimage)) {
			el.style.width=hotspot.customimagewidth + 'px';
			el.style.height=hotspot.customimageheight + 'px';
		}
		me.ggUse3d=true;
		me.gg3dDistance=500;
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_info_01(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_01=document.createElement('div');
		el.ggId="ht_info_01";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_01.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_01.onclick=function (e) {
			skin._information_01.style[domTransition]='none';
			skin._information_01.style.visibility=(Number(skin._information_01.style.opacity)>0||!skin._information_01.style.opacity)?'inherit':'hidden';
			skin._information_01.ggVisible=true;
			skin._blackbg.style[domTransition]='none';
			skin._blackbg.style.visibility=(Number(skin._blackbg.style.opacity)>0||!skin._blackbg.style.opacity)?'inherit':'hidden';
			skin._blackbg.ggVisible=true;
			skin._fullscreen.style[domTransition]='none';
			skin._fullscreen.style.visibility='hidden';
			skin._fullscreen.ggVisible=false;
			skin._infoartist.style[domTransition]='none';
			skin._infoartist.style.visibility='hidden';
			skin._infoartist.ggVisible=false;
			skin._infoexpo.style[domTransition]='none';
			skin._infoexpo.style.visibility='hidden';
			skin._infoexpo.ggVisible=false;
			skin._lbr.style[domTransition]='none';
			skin._lbr.style.visibility='hidden';
			skin._lbr.ggVisible=false;
			skin._youtube.style[domTransition]='none';
			skin._youtube.style.visibility='hidden';
			skin._youtube.ggVisible=false;
			skin._web.style[domTransition]='none';
			skin._web.style.visibility='hidden';
			skin._web.ggVisible=false;
			skin._instagram.style[domTransition]='none';
			skin._instagram.style.visibility='hidden';
			skin._instagram.ggVisible=false;
			skin._facebook.style[domTransition]='none';
			skin._facebook.style.visibility='hidden';
			skin._facebook.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_01.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_01.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_01.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_01.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image5=document.createElement('div');
		els=me._ht_info_image5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDYxNjQsMCwwLDEuNDYxNjQsLTEuMDA0NDEsLTAuOTY4MDY2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDEx'+
			'Ljk5OSwzLjk5OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3'+
			'R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+CiA8ZyBpZD0iaW5mb3JtYXRpb24tb3V0bGluZTEiIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ2MTY0LDAsMCwxLjQ2MTY0LC0xLjU2NzI5LC0xLjczNDc2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5OEMxNi40MSwzLjk5OCAx'+
			'OS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydW'+
			'xlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTEuNTAwODMsLTIuNDI5NTUpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEu'+
			'OTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdH'+
			'lsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiLz4KIDwvZz4KIDxnIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSIgc2VyaWY6aWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTIuNDY4NjQsLTMuMTEyMjMpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5'+
			'Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bG'+
			'U6bm9uemVybzsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image5__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image5.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image5.style[domTransition]='';
				if (me._ht_info_image5.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image5.style.visibility="hidden";
					me._ht_info_image5.ggVisible=false;
				}
				else {
					me._ht_info_image5.style.visibility=(Number(me._ht_info_image5.style.opacity)>0||!me._ht_info_image5.style.opacity)?'inherit':'hidden';
					me._ht_info_image5.ggVisible=true;
				}
			}
		}
		me._ht_info_image5.onmouseover=function (e) {
			me._ht_info_image5__img.style.visibility='hidden';
			me._ht_info_image5__imgo.style.visibility='inherit';
		}
		me._ht_info_image5.onmouseout=function (e) {
			me._ht_info_image5__img.style.visibility='inherit';
			me._ht_info_image5__imgo.style.visibility='hidden';
		}
		me._ht_info_image5.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_01.appendChild(me._ht_info_image5);
		me.__div = me._ht_info_01;
	};
	function SkinHotspotClass_ht_info_02(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_02=document.createElement('div');
		el.ggId="ht_info_02";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_02.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_02.onclick=function (e) {
			skin._information_02.style[domTransition]='none';
			skin._information_02.style.visibility=(Number(skin._information_02.style.opacity)>0||!skin._information_02.style.opacity)?'inherit':'hidden';
			skin._information_02.ggVisible=true;
			skin._blackbg.style[domTransition]='none';
			skin._blackbg.style.visibility=(Number(skin._blackbg.style.opacity)>0||!skin._blackbg.style.opacity)?'inherit':'hidden';
			skin._blackbg.ggVisible=true;
			skin._fullscreen.style[domTransition]='none';
			skin._fullscreen.style.visibility='hidden';
			skin._fullscreen.ggVisible=false;
			skin._infoartist.style[domTransition]='none';
			skin._infoartist.style.visibility='hidden';
			skin._infoartist.ggVisible=false;
			skin._infoexpo.style[domTransition]='none';
			skin._infoexpo.style.visibility='hidden';
			skin._infoexpo.ggVisible=false;
			skin._lbr.style[domTransition]='none';
			skin._lbr.style.visibility='hidden';
			skin._lbr.ggVisible=false;
			skin._youtube.style[domTransition]='none';
			skin._youtube.style.visibility='hidden';
			skin._youtube.ggVisible=false;
			skin._web.style[domTransition]='none';
			skin._web.style.visibility='hidden';
			skin._web.ggVisible=false;
			skin._instagram.style[domTransition]='none';
			skin._instagram.style.visibility='hidden';
			skin._instagram.ggVisible=false;
			skin._facebook.style[domTransition]='none';
			skin._facebook.style.visibility='hidden';
			skin._facebook.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_02.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_02.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_02.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_02.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image4=document.createElement('div');
		els=me._ht_info_image4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDYxNjQsMCwwLDEuNDYxNjQsLTEuMDA0NDEsLTAuOTY4MDY2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDEx'+
			'Ljk5OSwzLjk5OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3'+
			'R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+CiA8ZyBpZD0iaW5mb3JtYXRpb24tb3V0bGluZTEiIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ2MTY0LDAsMCwxLjQ2MTY0LC0xLjU2NzI5LC0xLjczNDc2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5OEMxNi40MSwzLjk5OCAx'+
			'OS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydW'+
			'xlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTEuNTAwODMsLTIuNDI5NTUpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEu'+
			'OTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdH'+
			'lsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiLz4KIDwvZz4KIDxnIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSIgc2VyaWY6aWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTIuNDY4NjQsLTMuMTEyMjMpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5'+
			'Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bG'+
			'U6bm9uemVybzsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image4__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image4.style[domTransition]='';
				if (me._ht_info_image4.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image4.style.visibility="hidden";
					me._ht_info_image4.ggVisible=false;
				}
				else {
					me._ht_info_image4.style.visibility=(Number(me._ht_info_image4.style.opacity)>0||!me._ht_info_image4.style.opacity)?'inherit':'hidden';
					me._ht_info_image4.ggVisible=true;
				}
			}
		}
		me._ht_info_image4.onmouseover=function (e) {
			me._ht_info_image4__img.style.visibility='hidden';
			me._ht_info_image4__imgo.style.visibility='inherit';
		}
		me._ht_info_image4.onmouseout=function (e) {
			me._ht_info_image4__img.style.visibility='inherit';
			me._ht_info_image4__imgo.style.visibility='hidden';
		}
		me._ht_info_image4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_02.appendChild(me._ht_info_image4);
		me.__div = me._ht_info_02;
	};
	function SkinHotspotClass_ht_info_03(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_03=document.createElement('div');
		el.ggId="ht_info_03";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_03.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_03.onclick=function (e) {
			skin._information_03.style[domTransition]='none';
			skin._information_03.style.visibility=(Number(skin._information_03.style.opacity)>0||!skin._information_03.style.opacity)?'inherit':'hidden';
			skin._information_03.ggVisible=true;
			skin._blackbg.style[domTransition]='none';
			skin._blackbg.style.visibility=(Number(skin._blackbg.style.opacity)>0||!skin._blackbg.style.opacity)?'inherit':'hidden';
			skin._blackbg.ggVisible=true;
			skin._fullscreen.style[domTransition]='none';
			skin._fullscreen.style.visibility='hidden';
			skin._fullscreen.ggVisible=false;
			skin._infoartist.style[domTransition]='none';
			skin._infoartist.style.visibility='hidden';
			skin._infoartist.ggVisible=false;
			skin._infoexpo.style[domTransition]='none';
			skin._infoexpo.style.visibility='hidden';
			skin._infoexpo.ggVisible=false;
			skin._lbr.style[domTransition]='none';
			skin._lbr.style.visibility='hidden';
			skin._lbr.ggVisible=false;
			skin._youtube.style[domTransition]='none';
			skin._youtube.style.visibility='hidden';
			skin._youtube.ggVisible=false;
			skin._web.style[domTransition]='none';
			skin._web.style.visibility='hidden';
			skin._web.ggVisible=false;
			skin._instagram.style[domTransition]='none';
			skin._instagram.style.visibility='hidden';
			skin._instagram.ggVisible=false;
			skin._facebook.style[domTransition]='none';
			skin._facebook.style.visibility='hidden';
			skin._facebook.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_03.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_03.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_03.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_03.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image3=document.createElement('div');
		els=me._ht_info_image3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDYxNjQsMCwwLDEuNDYxNjQsLTEuMDA0NDEsLTAuOTY4MDY2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDEx'+
			'Ljk5OSwzLjk5OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3'+
			'R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+CiA8ZyBpZD0iaW5mb3JtYXRpb24tb3V0bGluZTEiIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ2MTY0LDAsMCwxLjQ2MTY0LC0xLjU2NzI5LC0xLjczNDc2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5OEMxNi40MSwzLjk5OCAx'+
			'OS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydW'+
			'xlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTEuNTAwODMsLTIuNDI5NTUpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEu'+
			'OTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdH'+
			'lsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiLz4KIDwvZz4KIDxnIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSIgc2VyaWY6aWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTIuNDY4NjQsLTMuMTEyMjMpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5'+
			'Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bG'+
			'U6bm9uemVybzsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image3__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image3.style[domTransition]='';
				if (me._ht_info_image3.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image3.style.visibility="hidden";
					me._ht_info_image3.ggVisible=false;
				}
				else {
					me._ht_info_image3.style.visibility=(Number(me._ht_info_image3.style.opacity)>0||!me._ht_info_image3.style.opacity)?'inherit':'hidden';
					me._ht_info_image3.ggVisible=true;
				}
			}
		}
		me._ht_info_image3.onmouseover=function (e) {
			me._ht_info_image3__img.style.visibility='hidden';
			me._ht_info_image3__imgo.style.visibility='inherit';
		}
		me._ht_info_image3.onmouseout=function (e) {
			me._ht_info_image3__img.style.visibility='inherit';
			me._ht_info_image3__imgo.style.visibility='hidden';
		}
		me._ht_info_image3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_03.appendChild(me._ht_info_image3);
		me.__div = me._ht_info_03;
	};
	function SkinHotspotClass_ht_info_04(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_04=document.createElement('div');
		el.ggId="ht_info_04";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_04.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_04.onclick=function (e) {
			skin._information_04.style[domTransition]='none';
			skin._information_04.style.visibility=(Number(skin._information_04.style.opacity)>0||!skin._information_04.style.opacity)?'inherit':'hidden';
			skin._information_04.ggVisible=true;
			skin._blackbg.style[domTransition]='none';
			skin._blackbg.style.visibility=(Number(skin._blackbg.style.opacity)>0||!skin._blackbg.style.opacity)?'inherit':'hidden';
			skin._blackbg.ggVisible=true;
			skin._fullscreen.style[domTransition]='none';
			skin._fullscreen.style.visibility='hidden';
			skin._fullscreen.ggVisible=false;
			skin._infoartist.style[domTransition]='none';
			skin._infoartist.style.visibility='hidden';
			skin._infoartist.ggVisible=false;
			skin._infoexpo.style[domTransition]='none';
			skin._infoexpo.style.visibility='hidden';
			skin._infoexpo.ggVisible=false;
			skin._lbr.style[domTransition]='none';
			skin._lbr.style.visibility='hidden';
			skin._lbr.ggVisible=false;
			skin._youtube.style[domTransition]='none';
			skin._youtube.style.visibility='hidden';
			skin._youtube.ggVisible=false;
			skin._web.style[domTransition]='none';
			skin._web.style.visibility='hidden';
			skin._web.ggVisible=false;
			skin._instagram.style[domTransition]='none';
			skin._instagram.style.visibility='hidden';
			skin._instagram.ggVisible=false;
			skin._facebook.style[domTransition]='none';
			skin._facebook.style.visibility='hidden';
			skin._facebook.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_04.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_04.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_04.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_04.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image2=document.createElement('div');
		els=me._ht_info_image2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDYxNjQsMCwwLDEuNDYxNjQsLTEuMDA0NDEsLTAuOTY4MDY2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDEx'+
			'Ljk5OSwzLjk5OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3'+
			'R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+CiA8ZyBpZD0iaW5mb3JtYXRpb24tb3V0bGluZTEiIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ2MTY0LDAsMCwxLjQ2MTY0LC0xLjU2NzI5LC0xLjczNDc2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5OEMxNi40MSwzLjk5OCAx'+
			'OS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydW'+
			'xlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTEuNTAwODMsLTIuNDI5NTUpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEu'+
			'OTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdH'+
			'lsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiLz4KIDwvZz4KIDxnIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSIgc2VyaWY6aWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTIuNDY4NjQsLTMuMTEyMjMpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5'+
			'Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bG'+
			'U6bm9uemVybzsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image2.style[domTransition]='';
				if (me._ht_info_image2.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image2.style.visibility="hidden";
					me._ht_info_image2.ggVisible=false;
				}
				else {
					me._ht_info_image2.style.visibility=(Number(me._ht_info_image2.style.opacity)>0||!me._ht_info_image2.style.opacity)?'inherit':'hidden';
					me._ht_info_image2.ggVisible=true;
				}
			}
		}
		me._ht_info_image2.onmouseover=function (e) {
			me._ht_info_image2__img.style.visibility='hidden';
			me._ht_info_image2__imgo.style.visibility='inherit';
		}
		me._ht_info_image2.onmouseout=function (e) {
			me._ht_info_image2__img.style.visibility='inherit';
			me._ht_info_image2__imgo.style.visibility='hidden';
		}
		me._ht_info_image2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_04.appendChild(me._ht_info_image2);
		me.__div = me._ht_info_04;
	};
	function SkinHotspotClass_ht_info_05(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_05=document.createElement('div');
		el.ggId="ht_info_05";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_05.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_05.onclick=function (e) {
			skin._information_05.style[domTransition]='none';
			skin._information_05.style.visibility=(Number(skin._information_05.style.opacity)>0||!skin._information_05.style.opacity)?'inherit':'hidden';
			skin._information_05.ggVisible=true;
			skin._blackbg.style[domTransition]='none';
			skin._blackbg.style.visibility=(Number(skin._blackbg.style.opacity)>0||!skin._blackbg.style.opacity)?'inherit':'hidden';
			skin._blackbg.ggVisible=true;
			skin._fullscreen.style[domTransition]='none';
			skin._fullscreen.style.visibility='hidden';
			skin._fullscreen.ggVisible=false;
			skin._infoartist.style[domTransition]='none';
			skin._infoartist.style.visibility='hidden';
			skin._infoartist.ggVisible=false;
			skin._infoexpo.style[domTransition]='none';
			skin._infoexpo.style.visibility='hidden';
			skin._infoexpo.ggVisible=false;
			skin._lbr.style[domTransition]='none';
			skin._lbr.style.visibility='hidden';
			skin._lbr.ggVisible=false;
			skin._youtube.style[domTransition]='none';
			skin._youtube.style.visibility='hidden';
			skin._youtube.ggVisible=false;
			skin._web.style[domTransition]='none';
			skin._web.style.visibility='hidden';
			skin._web.ggVisible=false;
			skin._instagram.style[domTransition]='none';
			skin._instagram.style.visibility='hidden';
			skin._instagram.ggVisible=false;
			skin._facebook.style[domTransition]='none';
			skin._facebook.style.visibility='hidden';
			skin._facebook.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_05.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_05.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_05.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_05.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image1=document.createElement('div');
		els=me._ht_info_image1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDYxNjQsMCwwLDEuNDYxNjQsLTEuMDA0NDEsLTAuOTY4MDY2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDEx'+
			'Ljk5OSwzLjk5OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3'+
			'R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+CiA8ZyBpZD0iaW5mb3JtYXRpb24tb3V0bGluZTEiIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ2MTY0LDAsMCwxLjQ2MTY0LC0xLjU2NzI5LC0xLjczNDc2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5OEMxNi40MSwzLjk5OCAx'+
			'OS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydW'+
			'xlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTEuNTAwODMsLTIuNDI5NTUpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEu'+
			'OTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdH'+
			'lsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiLz4KIDwvZz4KIDxnIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSIgc2VyaWY6aWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTIuNDY4NjQsLTMuMTEyMjMpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5'+
			'Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bG'+
			'U6bm9uemVybzsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image1__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image1.style[domTransition]='';
				if (me._ht_info_image1.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image1.style.visibility="hidden";
					me._ht_info_image1.ggVisible=false;
				}
				else {
					me._ht_info_image1.style.visibility=(Number(me._ht_info_image1.style.opacity)>0||!me._ht_info_image1.style.opacity)?'inherit':'hidden';
					me._ht_info_image1.ggVisible=true;
				}
			}
		}
		me._ht_info_image1.onmouseover=function (e) {
			me._ht_info_image1__img.style.visibility='hidden';
			me._ht_info_image1__imgo.style.visibility='inherit';
		}
		me._ht_info_image1.onmouseout=function (e) {
			me._ht_info_image1__img.style.visibility='inherit';
			me._ht_info_image1__imgo.style.visibility='hidden';
		}
		me._ht_info_image1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_05.appendChild(me._ht_info_image1);
		me.__div = me._ht_info_05;
	};
	function SkinHotspotClass_ht_info_06(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_06=document.createElement('div');
		el.ggId="ht_info_06";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_06.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_06.onclick=function (e) {
			skin._information_06.style[domTransition]='none';
			skin._information_06.style.visibility=(Number(skin._information_06.style.opacity)>0||!skin._information_06.style.opacity)?'inherit':'hidden';
			skin._information_06.ggVisible=true;
			skin._blackbg.style[domTransition]='none';
			skin._blackbg.style.visibility=(Number(skin._blackbg.style.opacity)>0||!skin._blackbg.style.opacity)?'inherit':'hidden';
			skin._blackbg.ggVisible=true;
			skin._fullscreen.style[domTransition]='none';
			skin._fullscreen.style.visibility='hidden';
			skin._fullscreen.ggVisible=false;
			skin._infoartist.style[domTransition]='none';
			skin._infoartist.style.visibility='hidden';
			skin._infoartist.ggVisible=false;
			skin._infoexpo.style[domTransition]='none';
			skin._infoexpo.style.visibility='hidden';
			skin._infoexpo.ggVisible=false;
			skin._lbr.style[domTransition]='none';
			skin._lbr.style.visibility='hidden';
			skin._lbr.ggVisible=false;
			skin._youtube.style[domTransition]='none';
			skin._youtube.style.visibility='hidden';
			skin._youtube.ggVisible=false;
			skin._web.style[domTransition]='none';
			skin._web.style.visibility='hidden';
			skin._web.ggVisible=false;
			skin._instagram.style[domTransition]='none';
			skin._instagram.style.visibility='hidden';
			skin._instagram.ggVisible=false;
			skin._facebook.style[domTransition]='none';
			skin._facebook.style.visibility='hidden';
			skin._facebook.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_06.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_06.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_06.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_06.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image0=document.createElement('div');
		els=me._ht_info_image0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDYxNjQsMCwwLDEuNDYxNjQsLTEuMDA0NDEsLTAuOTY4MDY2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDEx'+
			'Ljk5OSwzLjk5OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3'+
			'R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+CiA8ZyBpZD0iaW5mb3JtYXRpb24tb3V0bGluZTEiIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ2MTY0LDAsMCwxLjQ2MTY0LC0xLjU2NzI5LC0xLjczNDc2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5OEMxNi40MSwzLjk5OCAx'+
			'OS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydW'+
			'xlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTEuNTAwODMsLTIuNDI5NTUpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEu'+
			'OTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdH'+
			'lsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiLz4KIDwvZz4KIDxnIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSIgc2VyaWY6aWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTIuNDY4NjQsLTMuMTEyMjMpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5'+
			'Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bG'+
			'U6bm9uemVybzsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image0__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image0.style[domTransition]='';
				if (me._ht_info_image0.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image0.style.visibility="hidden";
					me._ht_info_image0.ggVisible=false;
				}
				else {
					me._ht_info_image0.style.visibility=(Number(me._ht_info_image0.style.opacity)>0||!me._ht_info_image0.style.opacity)?'inherit':'hidden';
					me._ht_info_image0.ggVisible=true;
				}
			}
		}
		me._ht_info_image0.onmouseover=function (e) {
			me._ht_info_image0__img.style.visibility='hidden';
			me._ht_info_image0__imgo.style.visibility='inherit';
		}
		me._ht_info_image0.onmouseout=function (e) {
			me._ht_info_image0__img.style.visibility='inherit';
			me._ht_info_image0__imgo.style.visibility='hidden';
		}
		me._ht_info_image0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_06.appendChild(me._ht_info_image0);
		me.__div = me._ht_info_06;
	};
	function SkinHotspotClass_ht_info_07(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_info_07=document.createElement('div');
		el.ggId="ht_info_07";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_07.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_info_07.onclick=function (e) {
			skin._information_07.style[domTransition]='none';
			skin._information_07.style.visibility=(Number(skin._information_07.style.opacity)>0||!skin._information_07.style.opacity)?'inherit':'hidden';
			skin._information_07.ggVisible=true;
			skin._blackbg.style[domTransition]='none';
			skin._blackbg.style.visibility=(Number(skin._blackbg.style.opacity)>0||!skin._blackbg.style.opacity)?'inherit':'hidden';
			skin._blackbg.ggVisible=true;
			skin._fullscreen.style[domTransition]='none';
			skin._fullscreen.style.visibility='hidden';
			skin._fullscreen.ggVisible=false;
			skin._infoartist.style[domTransition]='none';
			skin._infoartist.style.visibility='hidden';
			skin._infoartist.ggVisible=false;
			skin._infoexpo.style[domTransition]='none';
			skin._infoexpo.style.visibility='hidden';
			skin._infoexpo.ggVisible=false;
			skin._lbr.style[domTransition]='none';
			skin._lbr.style.visibility='hidden';
			skin._lbr.ggVisible=false;
			skin._youtube.style[domTransition]='none';
			skin._youtube.style.visibility='hidden';
			skin._youtube.ggVisible=false;
			skin._web.style[domTransition]='none';
			skin._web.style.visibility='hidden';
			skin._web.ggVisible=false;
			skin._instagram.style[domTransition]='none';
			skin._instagram.style.visibility='hidden';
			skin._instagram.ggVisible=false;
			skin._facebook.style[domTransition]='none';
			skin._facebook.style.visibility='hidden';
			skin._facebook.ggVisible=false;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_07.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_07.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_07.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_info_07.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_info_image=document.createElement('div');
		els=me._ht_info_image__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNDYxNjQsMCwwLDEuNDYxNjQsLTEuMDA0NDEsLTAuOTY4MDY2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDEx'+
			'Ljk5OSwzLjk5OEMxNi40MSwzLjk5OCAxOS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3'+
			'R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87Ii8+CiA8L2c+CiA8ZyBpZD0iaW5mb3JtYXRpb24tb3V0bGluZTEiIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjQ2MTY0LDAsMCwxLjQ2MTY0LC0xLjU2NzI5LC0xLjczNDc2KSI+CiAgPHBhdGggZD0iTTEwLjk5OSw4Ljk5OEwxMi45OTksOC45OThMMTIuOTk5LDYuOTk4TDEwLjk5OSw2Ljk5OE0xMS45OTksMTkuOTk4QzcuNTg4LDE5Ljk5OCAzLjk5OSwxNi40MDkgMy45OTksMTEuOTk4QzMuOTk5LDcuNTg3IDcuNTg4LDMuOTk4IDExLjk5OSwzLjk5OEMxNi40MSwzLjk5OCAx'+
			'OS45OTksNy41ODcgMTkuOTk5LDExLjk5OEMxOS45OTksMTYuNDA5IDE2LjQxLDE5Ljk5OCAxMS45OTksMTkuOTk4Wk0xMS45OTksMS45OThDNi40NzYsMS45OTggMS45OTksNi40NzUgMS45OTksMTEuOTk4QzEuOTk5LDE3LjUyMSA2LjQ3NiwyMS45OTggMTEuOTk5LDIxLjk5OEMxNy41MjIsMjEuOTk4IDIxLjk5OSwxNy41MjEgMjEuOTk5LDExLjk5OEMyMS45OTksNi40NzUgMTcuNTIyLDEuOTk4IDExLjk5OSwxLjk5OFpNMTAuOTk5LDE2Ljk5OEwxMi45OTksMTYuOTk4TDEyLjk5OSwxMC45OThMMTAuOTk5LDEwLjk5OEwxMC45OTksMTYuOTk4WiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydW'+
			'xlOm5vbnplcm87Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+Cjxzdmcgdmlld0JveD0iMCAwIDMzIDMyIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcn'+
			'VsZTpldmVub2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPgogPGcgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTEuNTAwODMsLTIuNDI5NTUpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEu'+
			'OTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdH'+
			'lsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiLz4KIDwvZz4KIDxnIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSIgc2VyaWY6aWQ9ImluZm9ybWF0aW9uLW91dGxpbmUiIHRyYW5zZm9ybT0ibWF0cml4KDEuNTU3NjMsMCwwLDEuNTU3NjMsLTIuNDY4NjQsLTMuMTEyMjMpIj4KICA8cGF0aCBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5'+
			'Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIiBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bG'+
			'U6bm9uemVybzsiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._ht_info_image__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_info_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 26px;';
		hs+='left : -15px;';
		hs+='position : absolute;';
		hs+='top : -15px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_info_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_info_image.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.hotspot.customimage != ""))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_info_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_info_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_info_image.style[domTransition]='';
				if (me._ht_info_image.ggCurrentLogicStateVisible == 0) {
					me._ht_info_image.style.visibility="hidden";
					me._ht_info_image.ggVisible=false;
				}
				else {
					me._ht_info_image.style.visibility=(Number(me._ht_info_image.style.opacity)>0||!me._ht_info_image.style.opacity)?'inherit':'hidden';
					me._ht_info_image.ggVisible=true;
				}
			}
		}
		me._ht_info_image.onmouseover=function (e) {
			me._ht_info_image__img.style.visibility='hidden';
			me._ht_info_image__imgo.style.visibility='inherit';
		}
		me._ht_info_image.onmouseout=function (e) {
			me._ht_info_image__img.style.visibility='inherit';
			me._ht_info_image__imgo.style.visibility='hidden';
		}
		me._ht_info_image.ggUpdatePosition=function (useTransition) {
		}
		me._ht_info_07.appendChild(me._ht_info_image);
		me.__div = me._ht_info_07;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_changenode();;
			me.callChildLogicBlocksHotspot_ht_node_configloaded();;
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
			me.callChildLogicBlocksHotspot_ht_node_hastouch();;
			me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();;
			me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview();;
		} else
		if (hotspot.skinid=='ht_info_01') {
			hotspot.skinid = 'ht_info_01';
			hsinst = new SkinHotspotClass_ht_info_01(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_01_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_01_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_02') {
			hotspot.skinid = 'ht_info_02';
			hsinst = new SkinHotspotClass_ht_info_02(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_02_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_02_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_03') {
			hotspot.skinid = 'ht_info_03';
			hsinst = new SkinHotspotClass_ht_info_03(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_03_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_03_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_04') {
			hotspot.skinid = 'ht_info_04';
			hsinst = new SkinHotspotClass_ht_info_04(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_04_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_04_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_05') {
			hotspot.skinid = 'ht_info_05';
			hsinst = new SkinHotspotClass_ht_info_05(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_05_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_05_activehotspotchanged();;
		} else
		if (hotspot.skinid=='ht_info_06') {
			hotspot.skinid = 'ht_info_06';
			hsinst = new SkinHotspotClass_ht_info_06(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_06_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_06_activehotspotchanged();;
		} else
		{
			hotspot.skinid = 'ht_info_07';
			hsinst = new SkinHotspotClass_ht_info_07(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_info_07_changenode();;
			me.callChildLogicBlocksHotspot_ht_info_07_activehotspotchanged();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_01']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_01'].length; i++) {
				hotspotTemplates['ht_info_01'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_02']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_02'].length; i++) {
				hotspotTemplates['ht_info_02'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_03']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_03'].length; i++) {
				hotspotTemplates['ht_info_03'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_04']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_04'].length; i++) {
				hotspotTemplates['ht_info_04'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_05']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_05'].length; i++) {
				hotspotTemplates['ht_info_05'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_06']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_06'].length; i++) {
				hotspotTemplates['ht_info_06'][i] = null;
			}
		}
		if(hotspotTemplates['ht_info_07']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_info_07'].length; i++) {
				hotspotTemplates['ht_info_07'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._information_01.logicBlock_visible();
	me._information_02.logicBlock_visible();
	me._information_03.logicBlock_visible();
	me._information_04.logicBlock_visible();
	me._information_05.logicBlock_visible();
	me._information_06.logicBlock_visible();
	me._information_07.logicBlock_visible();
	player.addListener('changenode', function(args) { me._information_01.logicBlock_visible();me._information_02.logicBlock_visible();me._information_03.logicBlock_visible();me._information_04.logicBlock_visible();me._information_05.logicBlock_visible();me._information_06.logicBlock_visible();me._information_07.logicBlock_visible(); });
	player.addListener('varchanged_vis_info_popup', function(args) { me._information_01.logicBlock_visible();me._information_02.logicBlock_visible();me._information_03.logicBlock_visible();me._information_04.logicBlock_visible();me._information_05.logicBlock_visible();me._information_06.logicBlock_visible();me._information_07.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node_changenode();me.callChildLogicBlocksHotspot_ht_info_01_changenode();me.callChildLogicBlocksHotspot_ht_info_02_changenode();me.callChildLogicBlocksHotspot_ht_info_03_changenode();me.callChildLogicBlocksHotspot_ht_info_04_changenode();me.callChildLogicBlocksHotspot_ht_info_05_changenode();me.callChildLogicBlocksHotspot_ht_info_06_changenode();me.callChildLogicBlocksHotspot_ht_info_07_changenode(); });
	player.addListener('configloaded', function(args) { me.callChildLogicBlocksHotspot_ht_node_configloaded(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('hastouch', function(args) { me.callChildLogicBlocksHotspot_ht_node_hastouch(); });
	player.addListener('activehotspotchanged', function(args) { me.callChildLogicBlocksHotspot_ht_node_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_01_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_02_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_03_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_04_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_05_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_06_activehotspotchanged();me.callChildLogicBlocksHotspot_ht_info_07_activehotspotchanged(); });
	player.addListener('varchanged_opt_hotspot_preview', function(args) { me.callChildLogicBlocksHotspot_ht_node_varchanged_opt_hotspot_preview(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}