// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: skin.ggsk
// Generated 2020-07-20T16:34:27

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
		el=me._fullscreen=document.createElement('div');
		els=me._fullscreen__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGc+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7IiBkPSJNMjEuMDgxLDFMMSwxTDEsMjAuOTQyTDUsMjAuOTQyTDUsNy40NDRMMTEuMjYsMTMuNjI3TDEzLjYyNywxMS4yMDJMNy40NDQsNC45NjJMMjEuMDcxLDVMMjEuMDgxLDFaIi8+CiAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEsMS4yMjQ2NWUtMTYsLTEuMjI0NjVlLTE2LC0xLDMzLDMyKSI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOndoaXRlOyIgZD0i'+
			'TTIxLjA4MSwxTDEsMUwxLDIwLjk0Mkw1LDIwLjk0Mkw1LDcuNDQ0TDExLjI2LDEzLjYyN0wxMy42MjcsMTEuMjAyTDcuNDQ0LDQuOTYyTDIxLjA3MSw1TDIxLjA4MSwxWiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41LDAsMCwxLjUsLTEuNDk5MTQsLTEuOTk3MDgpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45'+
			'OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC'+
			'45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7IiBkPSJNMTYuNDkxLDEuMDA5QzguMjA3LDEuMDA5IDEuNTA5LDcuNzIxIDEuNTA5LDE2QzEuNTA5LDI0LjI3OSA4LjIwNywzMC45OTEgMTYuNDkxLDMwLjk5MUMyNC43NzYsMzAuOTkxIDMxLjQ5MSwyNC4yNzkgMzEuNDkxLDE2QzMxLjQ5MSw3LjcyMSAyNC43NzYsMS4wMDkgMTYuNDkxLDEuMDA5Wk0xNi41LDE3LjM2NEMxMC4yMTMsMTcuMzY0IDYuMjQyLDE5Ljkx'+
			'MiA2LjI0MiwyMy4wNTZMNi4yNDIsMjQuOTUzTDI2Ljc1OCwyNC45NTNMMjYuNzU4LDIzLjA1NkMyNi43NTgsMTkuOTEyIDIyLjc4NywxNy4zNjQgMTYuNSwxNy4zNjRaTTE2LjUsMy4zMTJDMTMuMzU2LDMuMzEyIDEwLjgwOCw1Ljg2IDEwLjgwOCw5LjAwNEMxMC44MDgsMTIuMTQ3IDEzLjM1NiwxNC42OTUgMTYuNSwxNC42OTVDMTkuNjQ0LDE0LjY5NSAyMi4xOTIsMTIuMTQ3IDIyLjE5Miw5LjAwNEMyMi4xOTIsNS44NiAxOS42NDQsMy4zMTIgMTYuNSwzLjMxMloiLz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC4xOTYxMzksMCwwLDAuMTkzMTE1LC0yODQuMzc3LC0yMzIuNjg2KSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7IiBkPSJNMTU1MC4zMywxMjgwLjMzTDE1NTAuMzMsMTMxNkMxNTUwLjMzLDEzMjEuMzkgMTU0OC4xOSwxMzI2LjU3IDE1NDQuMzgsMTMzMC4zOEMxNTQwLjU3LDEzMzQuMTkgMTUzNS4zOSwxMzM2LjMzIDE1MzAsMTMzNi4zM0wxNTA1Ljg1LDEzMzYu'+
			'MzNMMTUwNS44NSwxMzYxQzE1MDUuODUsMTM2My45NCAxNTAzLjQ2LDEzNjYuMzMgMTUwMC41MiwxMzY2LjMzQzE0OTcuNTgsMTM2Ni4zMyAxNDk1LjE5LDEzNjMuOTQgMTQ5NS4xOSwxMzYxQzE0OTUuMTksMTM2MSAxNDk1LjE5LDEyNjYuODYgMTQ5NS4xOSwxMjI5LjUyQzE0OTUuMTksMTIyNC4xMyAxNDk3LjMzLDEyMTguOTUgMTUwMS4xNCwxMjE1LjE0QzE1MDQuOTYsMTIxMS4zMyAxNTEwLjEzLDEyMDkuMTkgMTUxNS41MiwxMjA5LjE5TDE1MzAsMTIwOS4xOUMxNTM1LjM5LDEyMDkuMTkgMTU0MC41NywxMjExLjMzIDE1NDQuMzgsMTIxNS4xNEMxNTQ4LjE5LDEyMTguOTUgMTU1MC4zMywxMj'+
			'I0LjEzIDE1NTAuMzMsMTIyOS41MkwxNTUwLjMzLDEyNjkuNjdMMTU1NS42OSwxMjY5LjY3TDE1NTUuNjksMTIyOS41MkMxNTU1LjcyLDEyMjcuMTggMTU1Ni4wOSwxMjI0Ljg3IDE1NTYuODgsMTIyMi42NkMxNTU5LjcxLDEyMTQuNzcgMTU2Ny4xOSwxMjA5LjUgMTU3NS41MiwxMjA5LjE5TDE1NzYuMDIsMTIwOS4xOUwxNTkxLDEyMDkuMTlDMTYwMi4yMywxMjA5LjE5IDE2MTEuMzMsMTIxOC4yOSAxNjExLjMzLDEyMjkuNTJMMTYxMS4zMywxMjYwQzE2MTEuMzMsMTI3MS4yMyAxNjAyLjIzLDEyODAuMzMgMTU5MSwxMjgwLjMzTDE1NjYuMzUsMTI4MC4zM0wxNTY2LjM1LDEzNjFDMTU2Ni4zMywx'+
			'MzYxLjgxIDE1NjYuMTgsMTM2Mi41OCAxNTY1LjgzLDEzNjMuMzFDMTU2NS41MywxMzYzLjkzIDE1NjUuMTEsMTM2NC40OSAxNTY0LjYxLDEzNjQuOTVDMTU2MS4xOCwxMzY4LjA2IDE1NTUuOCwxMzY1LjQ5IDE1NTUuNjksMTM2MUwxNTU1LjE1LDEyODAuMzNMMTU1MC4zMywxMjgwLjMzWk0xNjA2LDEzMzYuMzNMMTU5MiwxMzM2LjMzQzE1ODYuNjEsMTMzNi4zMyAxNTgxLjQzLDEzMzQuMTkgMTU3Ny42MiwxMzMwLjM4QzE1NzMuODEsMTMyNi41NyAxNTcxLjY3LDEzMjEuMzkgMTU3MS42NywxMzE2QzE1NzEuNjcsMTMwNC45OSAxNTcxLjY3LDEyOTEuOTUgMTU3MS42NywxMjkxLjk1QzE1NzEuNj'+
			'csMTI4OS4wMSAxNTc0LjA2LDEyODYuNjIgMTU3NywxMjg2LjYyQzE1NzkuOTQsMTI4Ni42MiAxNTgyLjMzLDEyODkuMDEgMTU4Mi4zMywxMjkxLjk1QzE1ODIuMzMsMTI5MS45NSAxNTgyLjMzLDEzMDQuOTkgMTU4Mi4zMywxMzE2QzE1ODIuMzMsMTMxOC41NiAxNTgzLjM1LDEzMjEuMDIgMTU4NS4xNiwxMzIyLjg0QzE1ODYuOTgsMTMyNC42NSAxNTg5LjQ0LDEzMjUuNjcgMTU5MiwxMzI1LjY3TDE2MDYsMTMyNS42N0MxNjA4Ljk0LDEzMjUuNjcgMTYxMS4zMywxMzI4LjA2IDE2MTEuMzMsMTMzMUMxNjExLjMzLDEzMzMuOTQgMTYwOC45NCwxMzM2LjMzIDE2MDYsMTMzNi4zM1pNMTQ4NS4wNCwx'+
			'MzM2LjMzTDE0NzcsMTMzNi4zM0MxNDY1Ljc3LDEzMzYuMzMgMTQ1Ni42NywxMzI3LjIzIDE0NTYuNjcsMTMxNkwxNDU2LjY3LDEyMTZDMTQ1Ni42NywxMjEzLjA2IDE0NTkuMDYsMTIxMC42NyAxNDYyLDEyMTAuNjdDMTQ2NC45NCwxMjEwLjY3IDE0NjcuMzMsMTIxMy4wNiAxNDY3LjMzLDEyMTZDMTQ2Ny4zMywxMjE2IDE0NjcuMzMsMTI4NC44NCAxNDY3LjMzLDEzMTZDMTQ2Ny4zMywxMzIxLjM0IDE0NzEuNjYsMTMyNS42NyAxNDc3LDEzMjUuNjdMMTQ4NS4wNCwxMzI1LjY3QzE0ODcuOTksMTMyNS42NyAxNDkwLjM4LDEzMjguMDYgMTQ5MC4zOCwxMzMxQzE0OTAuMzgsMTMzMy45NCAxNDg3Lj'+
			'k5LDEzMzYuMzMgMTQ4NS4wNCwxMzM2LjMzWk0xNTE1LjUyLDEyMTkuODVDMTUxMi45NiwxMjE5Ljg1IDE1MTAuNSwxMjIwLjg3IDE1MDguNjgsMTIyMi42OEMxNTA2Ljg3LDEyMjQuNSAxNTA1Ljg1LDEyMjYuOTUgMTUwNS44NSwxMjI5LjUyTDE1MDUuODUsMTMyNS42N0wxNTMwLDEzMjUuNjdDMTUzMi41NiwxMzI1LjY3IDE1MzUuMDIsMTMyNC42NSAxNTM2Ljg0LDEzMjIuODRDMTUzOC42NSwxMzIxLjAyIDE1MzkuNjcsMTMxOC41NiAxNTM5LjY3LDEzMTZMMTUzOS42NywxMjgwLjMzTDE1MTksMTI4MC4zM0MxNTE4LjI1LDEyODAuMzEgMTUxNy41MSwxMjgwLjE4IDE1MTYuODMsMTI3OS44N0Mx'+
			'NTE1LjU4LDEyNzkuMzIgMTUxNC41NiwxMjc4LjI3IDE1MTQuMDUsMTI3N0MxNTEzLjgxLDEyNzYuNCAxNTEzLjY5LDEyNzUuNzYgMTUxMy42OSwxMjc1LjExQzE1MTMuNjksMTI3NC41MSAxNTEzLjc5LDEyNzMuOTEgMTUxMy45OSwxMjczLjM0QzE1MTQuMjIsMTI3Mi42OSAxNTE0LjU3LDEyNzIuMDggMTUxNS4wMywxMjcxLjU1QzE1MTUuNTEsMTI3MC45OSAxNTE2LjEsMTI3MC41MyAxNTE2Ljc2LDEyNzAuMkMxNTE3LjQ2LDEyNjkuODYgMTUxOC4yMiwxMjY5LjY5IDE1MTksMTI2OS42N0wxNTM5LjkxLDEyNjkuNjdMMTUzOS42NywxMjI5LjUyQzE1MzkuNjYsMTIyOC40NSAxNTM5LjQ5LDEyMj'+
			'cuMzggMTUzOS4xNCwxMjI2LjM3QzE1MzguNywxMjI1LjEgMTUzOCwxMjIzLjkzIDE1MzcuMDksMTIyMi45NEMxNTM2LjAzLDEyMjEuODEgMTUzNC43MSwxMjIwLjk0IDE1MzMuMjYsMTIyMC40MkMxNTMyLjIxLDEyMjAuMDQgMTUzMS4xMSwxMjE5Ljg2IDE1MzAsMTIxOS44NUwxNTE1LjUyLDEyMTkuODVaTTE1OTEsMTIxOS44NUwxNTc2LjAyLDEyMTkuODVDMTU3MC42NiwxMjE5Ljk5IDE1NjYuNDksMTIyNC4xNiAxNTY2LjM1LDEyMjkuNTJMMTU2Ni4zNSwxMjY5LjY3TDE1OTEsMTI2OS42N0MxNTk2LjM0LDEyNjkuNjcgMTYwMC42NywxMjY1LjM0IDE2MDAuNjcsMTI2MEwxNjAwLjY3LDEyMjku'+
			'NTJDMTYwMC42NywxMjI0LjE4IDE1OTYuMzQsMTIxOS44NSAxNTkxLDEyMTkuODVaIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40OTkwNiwwLDAsMS40OTkwNiwtMS40ODgyOCwtMS45ODU3OCkiIGlkPSJ3ZWIiPgogIDxwYXRoIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwtcnVsZTpub256ZXJvOyIgZD0iTTE2LjM2MSwxMy45OThDMTYuNDQzLDEzLjM0MSAxNi41LDEyLjY3NyAxNi41LDExLjk5OEMxNi41LDExLjMxOSAxNi40NDMsMTAuNjU1IDE2LjM2MSw5Ljk5OEwxOS43MzcsOS45OThDMTkuOTAz'+
			'LDEwLjYzOCAyMCwxMS4zMDYgMjAsMTEuOTk4QzIwLDEyLjY5IDE5LjkwMywxMy4zNTggMTkuNzM3LDEzLjk5OE0xNC41OTMsMTkuNTU5QzE1LjE5MywxOC40NDYgMTUuNjQ5LDE3LjI0OCAxNS45NzIsMTUuOTk4TDE4LjkyMSwxNS45OThDMTcuOTYyLDE3LjY1MiAxNi40MywxOC45MjggMTQuNTkzLDE5LjU1OVpNMTQuMzM5LDEzLjk5OEw5LjY2LDEzLjk5OEM5LjU2NSwxMy4zNDMgOS41LDEyLjY3OSA5LjUsMTEuOTk4QzkuNSwxMS4zMTcgOS41NjUsMTAuNjUzIDkuNjYsOS45OThMMTQuMzM5LDkuOTk4QzE0LjQzNCwxMC42NTMgMTQuNSwxMS4zMTcgMTQuNSwxMS45OThDMTQuNSwxMi42NzkgMT'+
			'QuNDM0LDEzLjM0MyAxNC4zMzksMTMuOTk4Wk0xMS45OTgsMTkuOTYyQzExLjE2NiwxOC43NjIgMTAuNTE2LDE3LjQyOSAxMC4wODksMTUuOTk4TDEzLjkxLDE1Ljk5OEMxMy40ODIsMTcuNDI5IDEyLjgzMiwxOC43NjIgMTEuOTk4LDE5Ljk2MlpNOC4wMjYsNy45OThMNS4wNzcsNy45OThDNi4wMzUsNi4zNDIgNy41NjcsNS4wNjQgOS40MDUsNC40MzVDOC44MDUsNS41NDggOC4zNDksNi43NDYgOC4wMjYsNy45OThaTTUuMDc3LDE1Ljk5OEw4LjAyNiwxNS45OThDOC4zNDksMTcuMjQ5IDguODA1LDE4LjQ0OCA5LjQwNSwxOS41NjFDNy41NjcsMTguOTMyIDYuMDM1LDE3LjY1NCA1LjA3NywxNS45'+
			'OThaTTQuMjYxLDEzLjk5OEM0LjA5NiwxMy4zNTggNCwxMi42OSA0LDExLjk5OEM0LDExLjMwNiA0LjA5NiwxMC42MzggNC4yNjEsOS45OThMNy42MzgsOS45OThDNy41NTYsMTAuNjU1IDcuNSwxMS4zMTkgNy41LDExLjk5OEM3LjUsMTIuNjc3IDcuNTU2LDEzLjM0MSA3LjYzOCwxMy45OThNMTEuOTk4LDQuMDM0QzEyLjgzMiw1LjIzNCAxMy40ODIsNi41NjcgMTMuOTEsNy45OThMMTAuMDg5LDcuOTk4QzEwLjUxNiw2LjU2NyAxMS4xNjYsNS4yMzQgMTEuOTk4LDQuMDM0Wk0xOC45MjEsNy45OThMMTUuOTcyLDcuOTk4QzE1LjY0OSw2Ljc0OCAxNS4xOTMsNS41NSAxNC41OTMsNC40MzdDMTYuND'+
			'MsNS4wNjggMTcuOTYyLDYuMzQ0IDE4LjkyMSw3Ljk5OFpNMTEuOTk0LDEuOTk4QzYuNDY4LDEuOTk4IDIsNi40NzUgMiwxMS45OThDMiwxNy41MjEgNi40NjgsMjEuOTk4IDExLjk5NCwyMS45OThDMTcuNTIxLDIxLjk5OCAyMiwxNy41MjEgMjIsMTEuOTk4QzIyLDYuNDc1IDE3LjUyMSwxLjk5OCAxMS45OTQsMS45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk2OTcsMCwwLDEsMCwwKSIgaWQ9IkFydGJvYXJkMSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZTsiIHk9IjAiIGhlaWdodD0iMzIiIHg9IjAiIHdpZHRoPSIzMyIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTQxNzIsMCwwLDEuNDk1LC0yLjAwMDY4LC0xLjk0MDA3KSIgaWQ9Imluc3RhZ3JhbSI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOndoaXRlO2ZpbGwt'+
			'cnVsZTpub256ZXJvOyIgZD0iTTcuOCwyTDE2LjIsMkMxOS40MDMsMiAyMiw0LjU5NyAyMiw3LjhMMjIsMTYuMkMyMiwxOS40MDMgMTkuNDAzLDIyIDE2LjIsMjJMNy44LDIyQzQuNTk3LDIyIDIsMTkuNDAzIDIsMTYuMkwyLDcuOEMyLDQuNTk3IDQuNTk3LDIgNy44LDJaTTcuNiw0QzUuNjEyLDQgNCw1LjYxMiA0LDcuNkw0LDE2LjRDNCwxOC4zODggNS42MTIsMjAgNy42LDIwTDE2LjQsMjBDMTguMzg4LDIwIDIwLDE4LjM4OCAyMCwxNi40TDIwLDcuNkMyMCw1LjYxMiAxOC4zODgsNCAxNi40LDRMNy42LDRaTTE3LjI1LDUuNUMxNy45NCw1LjUgMTguNSw2LjA2IDE4LjUsNi43NUMxOC41LDcuND'+
			'QgMTcuOTQsOCAxNy4yNSw4QzE2LjU2LDggMTYsNy40NCAxNiw2Ljc1QzE2LDYuMDYgMTYuNTYsNS41IDE3LjI1LDUuNVpNMTIsN0MxNC43NjEsNyAxNyw5LjIzOSAxNywxMkMxNywxNC43NjEgMTQuNzYxLDE3IDEyLDE3QzkuMjM5LDE3IDcsMTQuNzYxIDcsMTJDNyw5LjIzOSA5LjIzOSw3IDEyLDdaTTEyLDlDMTAuMzQzLDkgOSwxMC4zNDMgOSwxMkM5LDEzLjY1NyAxMC4zNDMsMTUgMTIsMTVDMTMuNjU3LDE1IDE1LDEzLjY1NyAxNSwxMkMxNSwxMC4zNDMgMTMuNjU3LDkgMTIsOVoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk2OTcsMCwwLDEsMCwwKSIgaWQ9IkFydGJvYXJkMSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZTsiIHk9IjAiIGhlaWdodD0iMzIiIHg9IjAiIHdpZHRoPSIzMyIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTQxNzIsMCwwLDEuNDk1LC0xLjk5OTc0LC0xLjkzNzE4KSIgaWQ9ImZhY2Vib29rLWJveCI+CiAgIDxwYXRoIHN0eWxlPSJmaWxsOndoaXRlO2Zp'+
			'bGwtcnVsZTpub256ZXJvOyIgZD0iTTE4Ljk5OSwzLjk5OEwxOC45OTksNi45OThMMTYuOTk5LDYuOTk4QzE2LjQ0Nyw2Ljk5OCAxNS45OTksNy40NDUgMTUuOTk5LDcuOTk4TDE1Ljk5OSw5Ljk5OEwxOC45OTksOS45OThMMTguOTk5LDEyLjk5OEwxNS45OTksMTIuOTk4TDE1Ljk5OSwxOS45OThMMTIuOTk5LDE5Ljk5OEwxMi45OTksMTIuOTk4TDEwLjk5OSwxMi45OThMMTAuOTk5LDkuOTk4TDEyLjk5OSw5Ljk5OEwxMi45OTksNy40OThDMTIuOTk5LDUuNTY0IDE0LjU2NiwzLjk5OCAxNi40OTksMy45OThNMTkuOTk5LDEuOTk4TDMuOTk5LDEuOTk4QzIuODk1LDEuOTk4IDIuMDA5LDIuODkzID'+
			'IuMDA5LDMuOTk4TDEuOTk5LDE5Ljk5OEMxLjk5OSwyMS4xMDIgMi44OTUsMjEuOTk4IDMuOTk5LDIxLjk5OEwxOS45OTksMjEuOTk4QzIxLjEwMywyMS45OTggMjEuOTk5LDIxLjEwMiAyMS45OTksMTkuOTk4TDIxLjk5OSwzLjk5OEMyMS45OTksMi44OTMgMjEuMTAzLDEuOTk4IDE5Ljk5OSwxLjk5OFoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMC45Njk2OTcsMCwwLDEsMCwwKSIgaWQ9IkFydGJvYXJkMSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZTsiIHk9IjAiIGhlaWdodD0iMzIiIHg9IjAiIHdpZHRoPSIzMyIvPgogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDEuNTcxMTIsMCwwLDEuNTIzNTEsLTIuMzQ0NjgsLTIuMjc5MTUpIiBpZD0ieW91dHViZS1wbGF5Ij4KICAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7'+
			'ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNOS45OTksMTYuNDk4TDkuOTk5LDcuNDk4TDE1Ljk5OSwxMS45OThNMjAuMDAxLDQuMzk4QzE5LjM5OSw0LjIwMSAxNS43MDEsMy45OTggMTEuOTk5LDMuOTk4QzguMywzLjk5OCA0LjYwMSw0LjE4NSAzLjk5OSw0LjM4MkMyLjQzNSw0Ljg5OCAxLjk5OSw4LjQwMiAxLjk5OSwxMS45OThDMS45OTksMTUuNTk0IDIuNDM1LDE5LjA5OCAzLjk5OSwxOS42MTRDNC42MDEsMTkuODExIDguMywxOS45OTggMTEuOTk5LDE5Ljk5OEMxNS43MDEsMTkuOTk4IDE5LjM5OSwxOS44MTEgMjAuMDAxLDE5LjYxNEMyMS41NjMsMTkuMDk4IDIxLjk4OSwxNS41OTQgMjEuOT'+
			'g5LDExLjk5OEMyMS45ODksOC40MDIgMjEuNTYzLDQuOTE0IDIwLjAwMSw0LjM5OFoiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
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
		els=me._splash__img=document.createElement('img');
		els.className='ggskin ggskin_splash';
		hs=basePath + 'images/splash.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="splash";
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
		me._splash.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._splash.onclick=function (e) {
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'BlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny'+
			'0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEz'+
			'MiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMT'+
			'MuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_closeini__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_closeini__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'BlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNmZmZmZm'+
			'YiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LD'+
			'cuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2'+
			'LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_closeini__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="video_closeIni";
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'BlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny'+
			'0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEz'+
			'MiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMT'+
			'MuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._video_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._video_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'BlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNmZmZmZm'+
			'YiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LD'+
			'cuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2'+
			'LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		el=me._ht_info_close=document.createElement('div');
		els=me._ht_info_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'BlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIG9wYWNpdHk9IjAuNCI+CiAgPHBhdGggc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZT0iIzNDM0MzQyIgZD0iTTIxLjEzMiwxOS40MzlMMTcuNjkyLDE2bDMuNDQtMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNSwwLTEuNjkzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LTAuNDY3LTEuMjI1LTAuNDY3LTEuNjkxLDAuMDAxTDE2LDE0LjMwOGwtMy40NDEtMy40NDFj'+
			'LTAuNDY3LTAuNDY3LTEuMjI0LTAuNDY3LTEuNjkxLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI0LDAsMS42OUwxNC4zMDksMTZsLTMuNDQsMy40NGMtMC40NjcsMC40NjctMC40NjcsMS4yMjYsMCwxLjY5MmMwLjQ2NywwLjQ2NywxLjIyNiwwLjQ2NywxLjY5MiwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDM5LDMuNDM5YzAuNDY4LDAuNDY4LDEuMjI1LDAuNDY4LDEuNjkxLDAuMDAxQzIxLjU5OSwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00Ljg4Mi00Lj'+
			'g4Mi0xMi43OTYtNC44ODItMTcuNjc4LDBjLTQuODgxLDQuODgxLTQuODgxLDEyLjc5NSwwLDE3LjY3OGM0Ljg4MSw0Ljg4LDEyLjc5Niw0Ljg4LDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU2LDI5LjcyLDEyLjA0MiwyNC44MzksNy4xNjF6IE0xNiwyNi4xMDZjLTIuNTg5LTAuMDAxLTUuMTctMC45ODUtNy4xNDYtMi45NjFTNS44OTUsMTguNTksNS44OTQsMTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTIuNTkxLDAuOTg0LTUuMTcsMi45Ni03LjE0N0MxMC44Myw2Ljg3OCwxMy40MDksNS44OTQsMTYsNS44OTRjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1'+
			'OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc2LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTYsNy4xNDdjLTAuMDAxLDIuNTkxLTAuOTg1LDUuMTY5LTIuOTYsNy4xNDhDMjEuMTY5LDI1LjEyMiwxOC41OTEsMjYuMTA2LDE2LDI2LjEwNnoiLz4KIDwvZz4KIDxnPgogIDxwYXRoIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2Utd2lkdGg9IjAuMiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjEiIGQ9Ik0yMS4xMzIsMTkuNDM5TDE3LjY5MiwxNmwzLjQ0LTMuNDRjMC40NjgtMC40NjcsMC40NjgtMS4yMjUsMC0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2Ny'+
			'0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MSwwLjAwMUwxNiwxNC4zMDhsLTMuNDQxLTMuNDQxYy0wLjQ2Ny0wLjQ2Ny0xLjIyNC0wLjQ2Ny0xLjY5MSwwLjAwMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNCwwLDEuNjlMMTQuMzA5LDE2bC0zLjQ0LDMuNDRjLTAuNDY3LDAuNDY3LTAuNDY3LDEuMjI2LDAsMS42OTJjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDMuNDQtMy40NGwzLjQzOSwzLjQzOWMwLjQ2OCwwLjQ2OCwxLjIyNSwwLjQ2OCwxLjY5MSwwLjAwMUMyMS41OTksMjAuNjY0LDIxLjYsMTkuOTA3LDIxLjEz'+
			'MiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTUsMCwxNy42NzhjNC44ODEsNC44OCwxMi43OTYsNC44OCwxNy42NzgsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI5LjcyLDE5Ljk1NiwyOS43MiwxMi4wNDIsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU4OS0wLjAwMS01LjE3LTAuOTg1LTcuMTQ2LTIuOTYxUzUuODk1LDE4LjU5LDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4NC01LjE3LDIuOTYtNy4xNDdDMTAuODMsNi44NzgsMT'+
			'MuNDA5LDUuODk0LDE2LDUuODk0YzIuNTkxLDAuMDAxLDUuMTcsMC45ODQsNy4xNDcsMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjk3NiwxLjk3NywyLjk1Nyw0LjU1NiwyLjk2LDcuMTQ3Yy0wLjAwMSwyLjU5MS0wLjk4NSw1LjE2OS0yLjk2LDcuMTQ4QzIxLjE2OSwyNS4xMjIsMTguNTkxLDI2LjEwNiwxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_close__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeT0iMHB4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'BlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzMiAzMiIgaGVpZ2h0PSIzMnB4IiB4PSIwcHgiIHdpZHRoPSIzMnB4IiB2aWV3Qm94PSIwIDAgMzIgMzIiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIj4KIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE2LDE2KSBzY2FsZSgxLjEpIHRyYW5zbGF0ZSgtMTYsLTE2KSIgb3BhY2l0eT0iMC40Ij4KICA8cGF0aCBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjM0MzQzNDIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NGMwLjQ2OC0wLjQ2NywwLjQ2OC0xLjIyNiwwLjAwMS0xLjY5MyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7Yy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MWMtMC40NjgtMC40NjgtMS4yMjUtMC40NjctMS42OTMsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxYzAuNDY3LDAuNDY3LDEuMjI2LDAuNDY3LDEuNjkyLDAuMDAxJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMEMyMS41OTgsMjAuNjY0LDIxLjYsMTkuOT'+
			'A3LDIxLjEzMiwxOS40Mzl6IE0yNC44MzksNy4xNjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzhjNC44ODIsNC44ODEsMTIuNzk2LDQuODgxLDE3LjY3OCwwJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LDcuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTlDNi44NzgsMjEuMTcsNS44OTUsMTguNTkxLDUuODk0LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5'+
			'LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTZjMi41OTEsMC4wMDEsNS4xNywwLjk4NCw3LjE0NywyLjk1OSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDhDMjEuMTcsMjUuMTIzLDE4LjU5MSwyNi4xMDcsMTYsMjYuMTA2eiIvPgogPC9nPgogPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYsMTYpIHNjYWxlKDEuMSkgdHJhbnNsYXRlKC0xNiwtMTYpIj4KICA8cGF0aCBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlLXdpZHRoPSIwLjIiIGZpbGw9IiNmZmZmZm'+
			'YiIHN0cm9rZT0iI2ZmZmZmZiIgZmlsbC1vcGFjaXR5PSIxIiBkPSJNMjEuMTMyLDE5LjQzOUwxNy42OTMsMTZsMy40MzktMy40NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNDY4LTAuNDY3LDAuNDY4LTEuMjI2LDAuMDAxLTEuNjkzYy0wLjQ2Ny0wLjQ2Ny0xLjIyNS0wLjQ2Ny0xLjY5MiwwLjAwMWwtMy40NCwzLjQ0bC0zLjQ0MS0zLjQ0MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQ2OC0wLjQ2OC0xLjIyNS0wLjQ2Ny0xLjY5MywwYy0wLjQ2NywwLjQ2Ny0wLjQ2NywxLjIyNSwwLDEuNjkyTDE0LjMwOSwxNmwtMy40NCwzLjQ0Yy0wLjQ2NywwLjQ2Ni0wLjQ2NywxLjIyNCwwLDEuNjkxJiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTtjMC40NjcsMC40NjcsMS4yMjYsMC40NjcsMS42OTIsMC4wMDFsMy40NC0zLjQ0bDMuNDQsMy40MzljMC40NjgsMC40NjgsMS4yMjQsMC40NjcsMS42OTEsMCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzIxLjU5OCwyMC42NjQsMjEuNiwxOS45MDcsMjEuMTMyLDE5LjQzOXogTTI0LjgzOSw3LjE2MWMtNC44ODItNC44ODItMTIuNzk2LTQuODgyLTE3LjY3OCwwYy00Ljg4MSw0Ljg4MS00Ljg4MSwxMi43OTYsMCwxNy42NzgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0Ljg4Miw0Ljg4MSwxMi43OTYsNC44ODEsMTcuNjc4LDBDMjkuNzIsMTkuOTU3LDI5LjcyMSwxMi4wNDMsMjQuODM5LD'+
			'cuMTYxeiBNMTYsMjYuMTA2Yy0yLjU5LDAtNS4xNzEtMC45ODQtNy4xNDYtMi45NTkmI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ljg3OCwyMS4xNyw1Ljg5NSwxOC41OTEsNS44OTQsMTZjMC0yLjU5MSwwLjk4My01LjE3LDIuOTU5LTcuMTQ3YzEuOTc3LTEuOTc2LDQuNTU2LTIuOTU5LDcuMTQ4LTIuOTYmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjU5MSwwLjAwMSw1LjE3LDAuOTg0LDcuMTQ3LDIuOTU5YzEuOTc1LDEuOTc3LDIuOTU3LDQuNTU2LDIuOTU5LDcuMTQ3Yy0wLjAwMSwyLjU5Mi0wLjk4NCw1LjE3LTIuOTYsNy4xNDgmI3hkOyYjeGE7JiN4OTsmI3g5O0MyMS4xNywyNS4xMjMsMTguNTkxLDI2'+
			'LjEwNywxNiwyNi4xMDZ6Ii8+CiA8L2c+Cjwvc3ZnPgo=';
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
		hs+='height : 32px;';
		hs+='position : absolute;';
		hs+='right : -34px;';
		hs+='top : -24px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
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
		me._info.appendChild(me._ht_info_close);
		me.divSkin.appendChild(me._info);
		el=me._information_01=document.createElement('div');
		els=me._information_01__img=document.createElement('img');
		els.className='ggskin ggskin_information_01';
		hs=basePath + 'images/information_01.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="information_01";
		el.ggDx=0;
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
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_01.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_01.onclick=function (e) {
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
		me.divSkin.appendChild(me._information_01);
		el=me._information_02=document.createElement('div');
		els=me._information_02__img=document.createElement('img');
		els.className='ggskin ggskin_information_02';
		hs=basePath + 'images/information_02.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="information_02";
		el.ggDx=0;
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
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_02.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_02.onclick=function (e) {
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
		me.divSkin.appendChild(me._information_02);
		el=me._information_03=document.createElement('div');
		els=me._information_03__img=document.createElement('img');
		els.className='ggskin ggskin_information_03';
		hs=basePath + 'images/information_03.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="information_03";
		el.ggDx=0;
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
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_03.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_03.onclick=function (e) {
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
		me.divSkin.appendChild(me._information_03);
		el=me._information_04=document.createElement('div');
		els=me._information_04__img=document.createElement('img');
		els.className='ggskin ggskin_information_04';
		hs=basePath + 'images/information_04.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="information_04";
		el.ggDx=0;
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
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_04.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_04.onclick=function (e) {
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
		me.divSkin.appendChild(me._information_04);
		el=me._information_05=document.createElement('div');
		els=me._information_05__img=document.createElement('img');
		els.className='ggskin ggskin_information_05';
		hs=basePath + 'images/information_05.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="information_05";
		el.ggDx=0;
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
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_05.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_05.onclick=function (e) {
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
		me.divSkin.appendChild(me._information_05);
		el=me._information_06=document.createElement('div');
		els=me._information_06__img=document.createElement('img');
		els.className='ggskin ggskin_information_06';
		hs=basePath + 'images/information_06.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="information_06";
		el.ggDx=0;
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
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_06.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_06.onclick=function (e) {
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
		me.divSkin.appendChild(me._information_06);
		el=me._information_07=document.createElement('div');
		els=me._information_07__img=document.createElement('img');
		els.className='ggskin ggskin_information_07';
		hs=basePath + 'images/information_07.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="information_07";
		el.ggDx=0;
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
		hs+='width : 400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._information_07.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._information_07.onclick=function (e) {
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
		me.divSkin.appendChild(me._information_07);
		me._videoini.ggVideoSource = '-1Pf-hugDLY';
		me._videoini.ggVideoNotLoaded = true;
		me._video.ggVideoSource = '-1Pf-hugDLY';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgNTAgMzUiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS4wMjM4OCwwLDAsMS4wNTE5OCwwLDEuMTk5MDRlLTEzKSIgaWQ9IkFydGJvYXJkMSI+CiAgPHJlY3Qgc3R5bGU9ImZpbGw6bm9uZTsiIHk9IjAiIGhlaWdodD0iMzMuMjciIHg9IjAiIHdpZHRoPSI0OC44MzQiLz4KICA8ZyB0cmFuc2Zvcm09Im1hdHJpeCgwLjk3NjY3NSwwLDAsMC43NjI4MTIsOC44ODI4OWUtMTMsMC40MDg0NjEpIiBpZD0iY2xvc2UtY2lyY2xlLW91'+
			'dGxpbmUiPgogICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xOC4wNjYsMTAuMDEyTDE5Ljc3OSwxMi43NDJDMTEuNzA0LDE0LjQ4MiA1LjI1MywxOS45OSA2LjM3MywyNS40ODlDNy43NTUsMzIuMjc1IDE3LjY4NCwzNS44MzUgMjUsMzUuODM1QzMxLjc4NiwzNS44MzUgNDEuMzAzLDMyLjIxMiA0My42MjcsMjUuNDg5QzQ1LjQ2NiwyMC4xNyAzOC41MDUsMTQuNTE5IDMwLjIxOSwxMi43NDZMMzEuOTM0LDEwLjAxMkM0Mi4wNDksMTEuOTgyIDQ5LjQxNywxOC4xNTggNDkuNDE3LDI1LjQ4OUM0OS40MTcsMzQuNDEyIDM4LjUwMyw0Mi42MjQgMj'+
			'UsNDIuNjI0QzExLjQ5Nyw0Mi42MjQgMC41ODMsMzQuNDEyIDAuNTgzLDI1LjQ4OUMwLjU4MywxOC4xNTggNy45NTEsMTEuOTgyIDE4LjA2NiwxMC4wMTJaTTI3LjM1MSwxNy4zMTdDMzEuMDA1LDE3Ljk5MiAzMy42NzgsMjAuMjA2IDMzLjY3OCwyMi44MzlDMzMuNjc4LDI2LjAxIDI5Ljc5OSwyOC41NzQgMjUsMjguNTc0QzIwLjIwMSwyOC41NzQgMTYuMzIyLDI2LjAxIDE2LjMyMiwyMi44MzlDMTYuMzIyLDIwLjIwNiAxOC45OTUsMTcuOTkyIDIyLjY0OSwxNy4zMTdMMjUsMjEuMDY0TDI3LjM1MSwxNy4zMTdaIi8+CiAgPC9nPgogIDxnIHNlcmlmOmlkPSJjbG9zZS1jaXJjbGUtb3V0bGluZSIg'+
			'dHJhbnNmb3JtPSJtYXRyaXgoMC45NzY2NzUsMCwwLDAuNzYyODEyLDguODgyODllLTEzLC0wLjc0OTg1NCkiIGlkPSJjbG9zZS1jaXJjbGUtb3V0bGluZTEiPgogICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xOC4wNjYsMTAuMDEyTDE5Ljc3OSwxMi43NDJDMTEuNzA0LDE0LjQ4MiA1LjI1MywxOS45OSA2LjM3MywyNS40ODlDNy43NTUsMzIuMjc1IDE3LjY4NCwzNS44MzUgMjUsMzUuODM1QzMxLjc4NiwzNS44MzUgNDEuMzAzLDMyLjIxMiA0My42MjcsMjUuNDg5QzQ1LjQ2NiwyMC4xNyAzOC41MDUsMTQuNTE5IDMwLjIxOSwxMi43NDZMMzEuOTM0LD'+
			'EwLjAxMkM0Mi4wNDksMTEuOTgyIDQ5LjQxNywxOC4xNTggNDkuNDE3LDI1LjQ4OUM0OS40MTcsMzQuNDEyIDM4LjUwMyw0Mi42MjQgMjUsNDIuNjI0QzExLjQ5Nyw0Mi42MjQgMC41ODMsMzQuNDEyIDAuNTgzLDI1LjQ4OUMwLjU4MywxOC4xNTggNy45NTEsMTEuOTgyIDE4LjA2NiwxMC4wMTJaTTI3LjM1MSwxNy4zMTdDMzEuMDA1LDE3Ljk5MiAzMy42NzgsMjAuMjA2IDMzLjY3OCwyMi44MzlDMzMuNjc4LDI2LjAxIDI5Ljc5OSwyOC41NzQgMjUsMjguNTc0QzIwLjIwMSwyOC41NzQgMTYuMzIyLDI2LjAxIDE2LjMyMiwyMi44MzlDMTYuMzIyLDIwLjIwNiAxOC45OTUsMTcuOTkyIDIyLjY0OSwx'+
			'Ny4zMTdMMjUsMjEuMDY0TDI3LjM1MSwxNy4zMTdaTTI1LDE3LjMxN0wxNSwxLjM3NkwzNSwxLjM3NkwyNSwxNy4zMTdaIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS4wMDQ0MSwtMC45NjgwNjYpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2'+
			'LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMT'+
			'IuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+CiA8ZyBzZXJpZjppZD0iaW5mb3JtYXRpb24tb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS41NjcyOSwtMS43MzQ3NikiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcg'+
			'Ny41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLj'+
			'k5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image5__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41NTc2MywwLDAsMS41NTc2MywtMS41MDA4MywtMi40Mjk1NSkiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIj4KICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYu'+
			'NDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi'+
			'45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOTk5LDE2Ljk5OFoiLz4KIDwvZz4KIDxnIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzYzLDAsMCwxLjU1NzYzLC0yLjQ2ODY0LC0zLjExMjIzKSIgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUxIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYuNDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3'+
			'LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOT'+
			'k5LDE2Ljk5OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS4wMDQ0MSwtMC45NjgwNjYpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2'+
			'LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMT'+
			'IuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+CiA8ZyBzZXJpZjppZD0iaW5mb3JtYXRpb24tb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS41NjcyOSwtMS43MzQ3NikiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcg'+
			'Ny41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLj'+
			'k5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image4__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41NTc2MywwLDAsMS41NTc2MywtMS41MDA4MywtMi40Mjk1NSkiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIj4KICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYu'+
			'NDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi'+
			'45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOTk5LDE2Ljk5OFoiLz4KIDwvZz4KIDxnIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzYzLDAsMCwxLjU1NzYzLC0yLjQ2ODY0LC0zLjExMjIzKSIgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUxIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYuNDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3'+
			'LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOT'+
			'k5LDE2Ljk5OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS4wMDQ0MSwtMC45NjgwNjYpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2'+
			'LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMT'+
			'IuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+CiA8ZyBzZXJpZjppZD0iaW5mb3JtYXRpb24tb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS41NjcyOSwtMS43MzQ3NikiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcg'+
			'Ny41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLj'+
			'k5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image3__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41NTc2MywwLDAsMS41NTc2MywtMS41MDA4MywtMi40Mjk1NSkiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIj4KICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYu'+
			'NDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi'+
			'45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOTk5LDE2Ljk5OFoiLz4KIDwvZz4KIDxnIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzYzLDAsMCwxLjU1NzYzLC0yLjQ2ODY0LC0zLjExMjIzKSIgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUxIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYuNDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3'+
			'LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOT'+
			'k5LDE2Ljk5OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS4wMDQ0MSwtMC45NjgwNjYpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2'+
			'LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMT'+
			'IuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+CiA8ZyBzZXJpZjppZD0iaW5mb3JtYXRpb24tb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS41NjcyOSwtMS43MzQ3NikiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcg'+
			'Ny41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLj'+
			'k5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41NTc2MywwLDAsMS41NTc2MywtMS41MDA4MywtMi40Mjk1NSkiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIj4KICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYu'+
			'NDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi'+
			'45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOTk5LDE2Ljk5OFoiLz4KIDwvZz4KIDxnIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzYzLDAsMCwxLjU1NzYzLC0yLjQ2ODY0LC0zLjExMjIzKSIgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUxIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYuNDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3'+
			'LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOT'+
			'k5LDE2Ljk5OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS4wMDQ0MSwtMC45NjgwNjYpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2'+
			'LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMT'+
			'IuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+CiA8ZyBzZXJpZjppZD0iaW5mb3JtYXRpb24tb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS41NjcyOSwtMS43MzQ3NikiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcg'+
			'Ny41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLj'+
			'k5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image1__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41NTc2MywwLDAsMS41NTc2MywtMS41MDA4MywtMi40Mjk1NSkiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIj4KICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYu'+
			'NDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi'+
			'45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOTk5LDE2Ljk5OFoiLz4KIDwvZz4KIDxnIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzYzLDAsMCwxLjU1NzYzLC0yLjQ2ODY0LC0zLjExMjIzKSIgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUxIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYuNDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3'+
			'LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOT'+
			'k5LDE2Ljk5OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS4wMDQ0MSwtMC45NjgwNjYpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2'+
			'LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMT'+
			'IuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+CiA8ZyBzZXJpZjppZD0iaW5mb3JtYXRpb24tb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS41NjcyOSwtMS43MzQ3NikiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcg'+
			'Ny41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLj'+
			'k5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image0__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41NTc2MywwLDAsMS41NTc2MywtMS41MDA4MywtMi40Mjk1NSkiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIj4KICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYu'+
			'NDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi'+
			'45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOTk5LDE2Ljk5OFoiLz4KIDwvZz4KIDxnIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzYzLDAsMCwxLjU1NzYzLC0yLjQ2ODY0LC0zLjExMjIzKSIgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUxIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYuNDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3'+
			'LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOT'+
			'k5LDE2Ljk5OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
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
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS4wMDQ0MSwtMC45NjgwNjYpIiBpZD0iaW5mb3JtYXRpb24tb3V0bGluZSI+CiAgPHBhdGggc3R5bGU9ImZpbGwtb3BhY2l0eTowLjQ7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2'+
			'LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcgNy41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMT'+
			'IuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLjk5OSwxNi45OThaIi8+CiA8L2c+CiA8ZyBzZXJpZjppZD0iaW5mb3JtYXRpb24tb3V0bGluZSIgdHJhbnNmb3JtPSJtYXRyaXgoMS40NjE2NCwwLDAsMS40NjE2NCwtMS41NjcyOSwtMS43MzQ3NikiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lMSI+CiAgPHBhdGggc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1ydWxlOm5vbnplcm87IiBkPSJNMTAuOTk5LDguOTk4TDEyLjk5OSw4Ljk5OEwxMi45OTksNi45OThMMTAuOTk5LDYuOTk4TTExLjk5OSwxOS45OThDNy41ODgsMTkuOTk4IDMuOTk5LDE2LjQwOSAzLjk5OSwxMS45OThDMy45OTksNy41ODcg'+
			'Ny41ODgsMy45OTggMTEuOTk5LDMuOTk4QzE2LjQxLDMuOTk4IDE5Ljk5OSw3LjU4NyAxOS45OTksMTEuOTk4QzE5Ljk5OSwxNi40MDkgMTYuNDEsMTkuOTk4IDExLjk5OSwxOS45OThaTTExLjk5OSwxLjk5OEM2LjQ3NiwxLjk5OCAxLjk5OSw2LjQ3NSAxLjk5OSwxMS45OThDMS45OTksMTcuNTIxIDYuNDc2LDIxLjk5OCAxMS45OTksMjEuOTk4QzE3LjUyMiwyMS45OTggMjEuOTk5LDE3LjUyMSAyMS45OTksMTEuOTk4QzIxLjk5OSw2LjQ3NSAxNy41MjIsMS45OTggMTEuOTk5LDEuOTk4Wk0xMC45OTksMTYuOTk4TDEyLjk5OSwxNi45OThMMTIuOTk5LDEwLjk5OEwxMC45OTksMTAuOTk4TDEwLj'+
			'k5OSwxNi45OThaIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._ht_info_image__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_info_image__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnIHN0YW5kYWxvbmU9J25vJz8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICctLy9XM0MvL0RURCBTVkcgMS4xLy9FTicgJ2h0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCc+CjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxuczpzZXJpZj0iaHR0cDovL3d3dy5zZXJpZi5jb20vIiBzdHlsZT0iZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjI7IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOn'+
			'hsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIiB2aWV3Qm94PSIwIDAgMzMgMzIiIHhtbDpzcGFjZT0icHJlc2VydmUiPgogPGcgdHJhbnNmb3JtPSJtYXRyaXgoMS41NTc2MywwLDAsMS41NTc2MywtMS41MDA4MywtMi40Mjk1NSkiIGlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIj4KICA8cGF0aCBzdHlsZT0iZmlsbC1vcGFjaXR5OjAuNDtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYu'+
			'NDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi'+
			'45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOTk5LDE2Ljk5OFoiLz4KIDwvZz4KIDxnIHNlcmlmOmlkPSJpbmZvcm1hdGlvbi1vdXRsaW5lIiB0cmFuc2Zvcm09Im1hdHJpeCgxLjU1NzYzLDAsMCwxLjU1NzYzLC0yLjQ2ODY0LC0zLjExMjIzKSIgaWQ9ImluZm9ybWF0aW9uLW91dGxpbmUxIj4KICA8cGF0aCBzdHlsZT0iZmlsbDp3aGl0ZTtmaWxsLXJ1bGU6bm9uemVybzsiIGQ9Ik0xMC45OTksOC45OThMMTIuOTk5LDguOTk4TDEyLjk5OSw2Ljk5OEwxMC45OTksNi45OThNMTEuOTk5LDE5Ljk5OEM3LjU4OCwxOS45OTggMy45OTksMTYuNDA5IDMuOTk5LDExLjk5OEMzLjk5OSw3LjU4NyA3'+
			'LjU4OCwzLjk5OCAxMS45OTksMy45OThDMTYuNDEsMy45OTggMTkuOTk5LDcuNTg3IDE5Ljk5OSwxMS45OThDMTkuOTk5LDE2LjQwOSAxNi40MSwxOS45OTggMTEuOTk5LDE5Ljk5OFpNMTEuOTk5LDEuOTk4QzYuNDc2LDEuOTk4IDEuOTk5LDYuNDc1IDEuOTk5LDExLjk5OEMxLjk5OSwxNy41MjEgNi40NzYsMjEuOTk4IDExLjk5OSwyMS45OThDMTcuNTIyLDIxLjk5OCAyMS45OTksMTcuNTIxIDIxLjk5OSwxMS45OThDMjEuOTk5LDYuNDc1IDE3LjUyMiwxLjk5OCAxMS45OTksMS45OThaTTEwLjk5OSwxNi45OThMMTIuOTk5LDE2Ljk5OEwxMi45OTksMTAuOTk4TDEwLjk5OSwxMC45OThMMTAuOT'+
			'k5LDE2Ljk5OFoiLz4KIDwvZz4KPC9zdmc+Cg==';
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