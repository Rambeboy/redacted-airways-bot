const _0x3dfe5f=_0x1d3f;function _0x1d3f(_0x11d81a,_0x3c24f6){const _0x49191e=_0x4919();return _0x1d3f=function(_0x1d3f26,_0x189024){_0x1d3f26=_0x1d3f26-0x152;let _0x2bd5a3=_0x49191e[_0x1d3f26];return _0x2bd5a3;},_0x1d3f(_0x11d81a,_0x3c24f6);}(function(_0x1f20e2,_0xd36605){const _0xe50488=_0x1d3f,_0x14e851=_0x1f20e2();while(!![]){try{const _0x2ce5d0=-parseInt(_0xe50488(0x16c))/0x1*(-parseInt(_0xe50488(0x16d))/0x2)+parseInt(_0xe50488(0x16a))/0x3*(parseInt(_0xe50488(0x15a))/0x4)+-parseInt(_0xe50488(0x15f))/0x5*(parseInt(_0xe50488(0x15b))/0x6)+parseInt(_0xe50488(0x166))/0x7*(parseInt(_0xe50488(0x165))/0x8)+parseInt(_0xe50488(0x157))/0x9+-parseInt(_0xe50488(0x16b))/0xa+-parseInt(_0xe50488(0x167))/0xb;if(_0x2ce5d0===_0xd36605)break;else _0x14e851['push'](_0x14e851['shift']());}catch(_0x5a8865){_0x14e851['push'](_0x14e851['shift']());}}}(_0x4919,0xabe24));const colors=require('../utils/colors');function _0x4919(){const _0x119ef1=['7527390sLhSOp','1001941txrNFK','2NFJxub','\x1b[?25h','MM:SS','padStart','COMPACT','HH:mm:ss','countdown','reset','clearLine','format','Time\x20remaining:\x20','2559024pwUoqg','floor','toString','26068LFrfeB','2352504QmLkJA','options','cursorTo','formatTime','5PaBGXs','stdout','showCursor','write','timerCount','exports','1461248QbMnFp','21LLxEEQ','3782031QowQMW','\x1b[?25l','start','165WjHlzA'];_0x4919=function(){return _0x119ef1;};return _0x4919();}class CountdownTimer{constructor(_0x4627b6={}){const _0x53c6ad=_0x1d3f;this['options']={'showCursor':![],'colors':{'message':colors[_0x53c6ad(0x163)],'timer':colors['timerWarn'],'reset':colors[_0x53c6ad(0x153)]},'format':_0x53c6ad(0x172),'message':_0x53c6ad(0x156),'clearOnComplete':!![],..._0x4627b6};}[_0x3dfe5f(0x15e)](_0x2a8a06,_0x2e2b28=this[_0x3dfe5f(0x15c)][_0x3dfe5f(0x155)]){const _0x3dcd06=_0x3dfe5f,_0x36820a=Math[_0x3dcd06(0x158)](_0x2a8a06/0xe10),_0x52a81a=Math[_0x3dcd06(0x158)](_0x2a8a06%0xe10/0x3c),_0xc2fc39=_0x2a8a06%0x3c,_0x11a68c=_0xf196c7=>_0xf196c7[_0x3dcd06(0x159)]()[_0x3dcd06(0x170)](0x2,'0');switch(_0x2e2b28['toUpperCase']()){case'HH:MM:SS':return _0x11a68c(_0x36820a)+':'+_0x11a68c(_0x52a81a)+':'+_0x11a68c(_0xc2fc39);case _0x3dcd06(0x16f):return _0x11a68c(_0x52a81a)+':'+_0x11a68c(_0xc2fc39);case'SS':return _0x11a68c(_0xc2fc39);case'FULL':return _0x36820a+'h\x20'+_0x52a81a+'m\x20'+_0xc2fc39+'s';case _0x3dcd06(0x171):return _0x36820a>0x0?_0x36820a+'h'+_0x52a81a+'m':_0x52a81a>0x0?_0x52a81a+'m'+_0xc2fc39+'s':_0xc2fc39+'s';default:return _0x11a68c(_0x36820a)+':'+_0x11a68c(_0x52a81a)+':'+_0x11a68c(_0xc2fc39);}}async[_0x3dfe5f(0x169)](_0x48c024,_0x1889f0={}){const _0x3eee96=_0x3dfe5f,_0x53a3a8={...this[_0x3eee96(0x15c)],..._0x1889f0};!_0x53a3a8[_0x3eee96(0x161)]&&process['stdout'][_0x3eee96(0x162)](_0x3eee96(0x168));const {colors:{message:_0x7fc006,timer:_0xb01c4f,reset:_0x1d1dab},message:_0xf8826}=_0x53a3a8;try{for(let _0x5e0333=_0x48c024;_0x5e0333>0x0;_0x5e0333--){process['stdout'][_0x3eee96(0x154)](0x0),process[_0x3eee96(0x160)]['cursorTo'](0x0);const _0x2f4d5b=this[_0x3eee96(0x15e)](_0x5e0333,_0x53a3a8['format']);process[_0x3eee96(0x160)][_0x3eee96(0x162)](''+_0x7fc006+_0xf8826+_0xb01c4f+_0x2f4d5b+_0x1d1dab),await new Promise(_0x50c913=>setTimeout(_0x50c913,0x3e8));}_0x53a3a8['clearOnComplete']&&(process[_0x3eee96(0x160)][_0x3eee96(0x154)](0x0),process[_0x3eee96(0x160)][_0x3eee96(0x15d)](0x0));}finally{!_0x53a3a8['showCursor']&&process['stdout'][_0x3eee96(0x162)](_0x3eee96(0x16e));}}static async[_0x3dfe5f(0x152)](_0x147ff2,_0x564f7e={}){const _0x543831=_0x3dfe5f,_0x4ed908=new CountdownTimer(_0x564f7e);await _0x4ed908[_0x543831(0x169)](_0x147ff2);}}module[_0x3dfe5f(0x164)]=CountdownTimer;