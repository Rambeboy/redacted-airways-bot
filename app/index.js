const _0x18bb4d=_0x16c8;function _0x41c9(){const _0xe32ac4=['\x20partner\x20tasks','got_bonus_points','216hoQiRP','Loaded\x20','Task\x20','follow','Authorization','Error\x20reading\x20accounts.js:\x20','info','/partnerActivity','/task/telegram-auth','Error\x20getting\x20partner\x20tasks:\x20','entries','points','Error\x20refreshing\x20tasks:\x20','status','create','Processing\x20account\x20','*/*','like','=====================','message','BASE_URL','ENDPOINTS','Bonus\x20Points:\x20','8cWBwYl','/revalidate','split','utf8','/task/follow','/task/retweet','task_name','No\x20tasks\x20found','USER_INFO','End:\x20','6097860XjBoSl','reset','\x20accounts','Account\x20processing\x20completed','1811092PCHUlI','\x20-\x20Points:\x20','completed','long','flight_start_time','task_action','Telegram\x20Verified:\x20','/user/info','2-digit','10211635PJypfq','flight_end_time','list','accounts.js','accountName','\x20points)','axios','retweet','Error\x20revalidating\x20session:\x20','timer','Bearer\x20','/partners','post','Failed\x20to\x20revalidate\x20session,\x20skipping\x20account','text','success','Failed\x20to\x20get\x20user\x20info,\x20skipping\x20account','en-US,en;q=0.6','Waiting\x20for\x20next\x20task\x20unlock\x20at\x20','toUpperCase','REVALIDATE','headers','partnerId','warn','is_email_verified','Processing\x20partner\x20task\x20for\x20','Wallet\x20ID:\x20','181550QpwNgr','length','Error\x20executing\x20task\x20','PARTNER_ACTIVITY','/task/list','Session\x20revalidated\x20successfully\x20with\x20new\x20token','Processing\x20task:\x20','No\x20available\x20tasks,\x20waiting\x20for\x2024\x20hours...','Task\x20completed\x20successfully:\x20','all','numeric','defaults','\x20completed','389532JhyLgA','get','TELEGRAM_AUTH','telegram-auth','\x20is\x20time-locked\x20until\x20','partnerName','TASK_LIST','isTgVerified','twitter_id','replace','39463533qSJAYS','data','Failed\x20to\x20authenticate\x20session,\x20skipping\x20account','Time\x20until\x20next\x20unlock:\x20','username','tasks','filter','Yes','trim','Error\x20processing\x20account:\x20','Error\x20authenticating\x20session:\x20','Error\x20getting\x20user\x20info:\x20','error','warning','wallet_id','reduce','===\x20Flight\x20Schedule\x20===','/task/like','round','./src/core/countdown','Time\x20until\x20next\x20check:\x20','FOLLOW','gzip,\x20deflate,\x20br,\x20zstd','_id','start','https://quest.redactedairways.com/ecom-gateway','Starting\x20task\x20automation...','HH:mm:ss','userData','readFileSync','Error\x20executing\x20partner\x20task:\x20','task_type','accountInfo','4677126SdtIoN','catch','Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/131.0.0.0\x20Safari/537.36'];_0x41c9=function(){return _0xe32ac4;};return _0x41c9();}function _0x16c8(_0x39dd9e,_0x4d5660){const _0x41c956=_0x41c9();return _0x16c8=function(_0x16c812,_0x5a9d7b){_0x16c812=_0x16c812-0xfb;let _0x3d629b=_0x41c956[_0x16c812];return _0x3d629b;},_0x16c8(_0x39dd9e,_0x4d5660);}(function(_0x4a24fd,_0x123236){const _0x402e4d=_0x16c8,_0x152cbd=_0x4a24fd();while(!![]){try{const _0x1beb4f=parseInt(_0x402e4d(0x11e))/0x1+-parseInt(_0x402e4d(0x173))/0x2+-parseInt(_0x402e4d(0x149))/0x3+-parseInt(_0x402e4d(0x16f))/0x4+parseInt(_0x402e4d(0x111))/0x5*(-parseInt(_0x402e4d(0x14e))/0x6)+parseInt(_0x402e4d(0x17c))/0x7+-parseInt(_0x402e4d(0x165))/0x8*(-parseInt(_0x402e4d(0x128))/0x9);if(_0x1beb4f===_0x123236)break;else _0x152cbd['push'](_0x152cbd['shift']());}catch(_0x197d59){_0x152cbd['push'](_0x152cbd['shift']());}}}(_0x41c9,0xe4c01));const fs=require('fs'),axios=require(_0x18bb4d(0xfc)),displayBanner=require('./src/utils/helper'),colors=require('./src/utils/colors'),CountdownTimer=require(_0x18bb4d(0x13b)),logger=require('./src/utils/logger'),API_CONSTANTS={'BASE_URL':_0x18bb4d(0x141),'ENDPOINTS':{'USER_INFO':_0x18bb4d(0x17a),'TASK_LIST':_0x18bb4d(0x115),'RETWEET':_0x18bb4d(0x16a),'LIKE':_0x18bb4d(0x139),'FOLLOW':_0x18bb4d(0x169),'TELEGRAM_AUTH':_0x18bb4d(0x156),'REVALIDATE':_0x18bb4d(0x166),'AUTH':'/auth','PARTNER_ACTIVITY':_0x18bb4d(0x155),'PARTNERS':_0x18bb4d(0x101)}},TASK_ACTIONS={'RETWEET':_0x18bb4d(0xfd),'LIKE':_0x18bb4d(0x15f),'FOLLOW':_0x18bb4d(0x151),'TELEGRAM_AUTH':_0x18bb4d(0x121)},formatDateTime=_0x26f2b8=>{const _0x5e6112=_0x18bb4d;return new Date(_0x26f2b8)['toLocaleString']('en-US',{'year':_0x5e6112(0x11b),'month':_0x5e6112(0x176),'day':'numeric','hour':'2-digit','minute':_0x5e6112(0x17b),'hour12':!![],'timeZoneName':'short'});},displayUserInfo=_0x49aefc=>{const _0x499819=_0x18bb4d;logger[_0x499819(0x154)]('===\x20User\x20Information\x20==='),logger[_0x499819(0x154)](colors[_0x499819(0x180)]+'Username:\x20'+colors['accountInfo']+_0x49aefc[_0x499819(0x12c)]+colors[_0x499819(0x170)]),logger['info'](colors[_0x499819(0x180)]+'Overall\x20Score:\x20'+colors['accountInfo']+_0x49aefc['overall_score']+colors[_0x499819(0x170)]),logger[_0x499819(0x154)](colors[_0x499819(0x180)]+'Email\x20Verified:\x20'+colors[_0x499819(0x148)]+(_0x49aefc[_0x499819(0x10e)]?_0x499819(0x12f):'No')+colors['reset']),logger[_0x499819(0x154)](colors[_0x499819(0x180)]+_0x499819(0x164)+colors[_0x499819(0x148)]+(_0x49aefc[_0x499819(0x14d)]?_0x499819(0x12f):'No')+colors[_0x499819(0x170)]),logger[_0x499819(0x154)](colors[_0x499819(0x180)]+_0x499819(0x179)+colors['accountInfo']+(_0x49aefc[_0x499819(0x125)]?_0x499819(0x12f):'No')+colors[_0x499819(0x170)]),logger[_0x499819(0x154)](colors[_0x499819(0x180)]+_0x499819(0x110)+colors['accountInfo']+_0x49aefc[_0x499819(0x136)]+colors[_0x499819(0x170)]),logger['info'](_0x499819(0x138)),logger[_0x499819(0x154)](colors[_0x499819(0x180)]+'Start:\x20'+colors[_0x499819(0x148)]+formatDateTime(_0x49aefc[_0x499819(0x177)])+colors[_0x499819(0x170)]),logger[_0x499819(0x154)](colors[_0x499819(0x180)]+_0x499819(0x16e)+colors[_0x499819(0x148)]+formatDateTime(_0x49aefc[_0x499819(0x17d)])+colors['reset']),logger[_0x499819(0x154)](_0x499819(0x160));},createApiClient=_0x31507b=>{const _0x508ef0=_0x18bb4d;return axios[_0x508ef0(0x15c)]({'baseURL':API_CONSTANTS[_0x508ef0(0x162)],'headers':{'Authorization':_0x508ef0(0x100)+_0x31507b,'Accept':_0x508ef0(0x15e),'Accept-Encoding':_0x508ef0(0x13e),'Accept-Language':_0x508ef0(0x107),'User-Agent':_0x508ef0(0x14b)}});},delay=_0x42896c=>new Promise(_0x11f103=>setTimeout(_0x11f103,_0x42896c)),loadTokens=()=>{const _0x320758=_0x18bb4d;try{const _0x4db760=fs[_0x320758(0x145)](_0x320758(0x17f),_0x320758(0x168));return _0x4db760[_0x320758(0x167)]('\x0a')['filter'](_0x50b222=>_0x50b222[_0x320758(0x130)]()!=='');}catch(_0x5acb94){return logger['error'](colors[_0x320758(0x134)]+_0x320758(0x153)+_0x5acb94['message']+colors['reset']),[];}},revalidateSession=async _0x3b8cec=>{const _0x218db8=_0x18bb4d;try{const _0x36a9fb=await _0x3b8cec[_0x218db8(0x102)](API_CONSTANTS['ENDPOINTS'][_0x218db8(0x10a)]);if(_0x36a9fb[_0x218db8(0x129)][_0x218db8(0x15b)]===_0x218db8(0x105)&&_0x36a9fb[_0x218db8(0x129)]['token'])return logger[_0x218db8(0x105)](colors[_0x218db8(0x105)]+_0x218db8(0x116)+colors[_0x218db8(0x170)]),_0x3b8cec[_0x218db8(0x11c)][_0x218db8(0x10b)][_0x218db8(0x152)]=_0x218db8(0x100)+_0x36a9fb[_0x218db8(0x129)]['token'],!![];return![];}catch(_0x80ba3f){return logger[_0x218db8(0x134)](colors['error']+_0x218db8(0xfe)+_0x80ba3f[_0x218db8(0x161)]+colors[_0x218db8(0x170)]),![];}},authenticateSession=async _0x345d93=>{const _0x57bcc4=_0x18bb4d;try{const _0x31324a=await _0x345d93[_0x57bcc4(0x11f)](API_CONSTANTS[_0x57bcc4(0x163)]['AUTH']);if(_0x31324a[_0x57bcc4(0x129)][_0x57bcc4(0x15b)]===_0x57bcc4(0x105))return logger['success'](colors[_0x57bcc4(0x105)]+'Session\x20authenticated\x20successfully'+colors[_0x57bcc4(0x170)]),!![];return![];}catch(_0x5162c3){return logger[_0x57bcc4(0x134)](colors[_0x57bcc4(0x134)]+_0x57bcc4(0x132)+_0x5162c3[_0x57bcc4(0x161)]+colors[_0x57bcc4(0x170)]),![];}},handleTaskExecution=async(_0x3db420,_0x3cccaa)=>{const _0x30e191=_0x18bb4d;try{const _0xb0d35f=API_CONSTANTS[_0x30e191(0x163)][_0x3cccaa['task_action'][_0x30e191(0x109)]()[_0x30e191(0x127)]('-','_')];let _0x3e56dd;_0x3cccaa[_0x30e191(0x178)]===TASK_ACTIONS[_0x30e191(0x13d)]?_0x3e56dd={'taskId':_0x3cccaa[_0x30e191(0x13f)],'twitterId':_0x3cccaa[_0x30e191(0x126)]}:_0x3e56dd={'taskId':_0x3cccaa[_0x30e191(0x13f)],'tweetId':_0x3cccaa['tweet_id']};const _0x24a2d9=await _0x3db420[_0x30e191(0x102)](_0xb0d35f,_0x3e56dd);if(_0x24a2d9[_0x30e191(0x129)][_0x30e191(0x15b)]===_0x30e191(0x105))return logger[_0x30e191(0x105)](colors[_0x30e191(0x105)]+_0x30e191(0x119)+_0x3cccaa[_0x30e191(0x16b)]+_0x30e191(0x174)+_0x24a2d9[_0x30e191(0x129)][_0x30e191(0x159)]+colors[_0x30e191(0x170)]),!![];return![];}catch(_0xb20426){return logger[_0x30e191(0x134)](colors['error']+_0x30e191(0x113)+_0x3cccaa[_0x30e191(0x16b)]+':\x20'+_0xb20426['message']+colors[_0x30e191(0x170)]),![];}},handlePartnerTask=async(_0x64c592,_0x22b227,_0x5f0b33)=>{const _0x4925a8=_0x18bb4d;try{const _0x39965c=await _0x64c592[_0x4925a8(0x102)](API_CONSTANTS['ENDPOINTS'][_0x4925a8(0x114)],{'partnerId':_0x22b227,'taskType':_0x5f0b33});if(_0x39965c[_0x4925a8(0x129)][_0x4925a8(0x15b)]===0xc8)return logger[_0x4925a8(0x105)](colors[_0x4925a8(0x105)]+'Partner\x20task\x20'+_0x5f0b33+'\x20recorded\x20successfully'+colors[_0x4925a8(0x170)]),!![];return![];}catch(_0x198f4d){return logger[_0x4925a8(0x134)](colors[_0x4925a8(0x134)]+_0x4925a8(0x146)+_0x198f4d[_0x4925a8(0x161)]+colors['reset']),![];}},getUserInfo=async _0x8b915c=>{const _0x4e6fd7=_0x18bb4d;try{const _0x1c4bd0=await _0x8b915c['get'](API_CONSTANTS['ENDPOINTS'][_0x4e6fd7(0x16d)]);return _0x1c4bd0[_0x4e6fd7(0x129)][_0x4e6fd7(0x144)];}catch(_0x580a91){return logger['error'](colors[_0x4e6fd7(0x134)]+_0x4e6fd7(0x133)+_0x580a91[_0x4e6fd7(0x161)]+colors[_0x4e6fd7(0x170)]),null;}},getTaskList=async _0x7bdb38=>{const _0x297764=_0x18bb4d;try{const _0x108ec6=await _0x7bdb38[_0x297764(0x11f)](API_CONSTANTS['ENDPOINTS'][_0x297764(0x124)]);return _0x108ec6['data'][_0x297764(0x17e)];}catch(_0x59996b){return logger['error'](colors[_0x297764(0x134)]+'Error\x20getting\x20task\x20list:\x20'+_0x59996b[_0x297764(0x161)]+colors['reset']),[];}},getPartnerTasks=async _0x29898a=>{const _0x138732=_0x18bb4d;try{const _0x3965b6=await _0x29898a[_0x138732(0x11f)](API_CONSTANTS[_0x138732(0x163)]['PARTNERS']);if(_0x3965b6[_0x138732(0x129)][_0x138732(0x15b)]===0xc8){const _0x4aaf64=_0x3965b6[_0x138732(0x129)][_0x138732(0x129)][_0x138732(0x137)]((_0x8789e,_0x58e9a2)=>{const _0x5a2dba=_0x138732,_0x4726e5=_0x58e9a2[_0x5a2dba(0x12d)]['map'](_0x438400=>({..._0x438400,'partnerId':_0x58e9a2[_0x5a2dba(0x13f)],'partnerName':_0x58e9a2['partner_name']}));return[..._0x8789e,..._0x4726e5];},[]);return logger[_0x138732(0x105)](colors[_0x138732(0x105)]+'Successfully\x20fetched\x20'+_0x4aaf64['length']+_0x138732(0x14c)+colors[_0x138732(0x170)]),_0x4aaf64;}return[];}catch(_0x1443f1){return logger[_0x138732(0x134)](colors['error']+_0x138732(0x157)+_0x1443f1[_0x138732(0x161)]+colors['reset']),[];}},findNextUnlockTime=_0xc2c6cd=>{const _0x399334=_0x18bb4d,_0xf399d8=new Date();let _0x4c0e2b=null;const _0x5e16c1=_0xc2c6cd[_0x399334(0x12e)](_0x3a142e=>_0x3a142e[_0x399334(0xff)]&&new Date(_0x3a142e[_0x399334(0xff)])>_0xf399d8&&!_0x3a142e['completed']);return _0x5e16c1[_0x399334(0x112)]>0x0&&(_0x4c0e2b=_0x5e16c1[_0x399334(0x137)]((_0x5a7705,_0x4f450d)=>{const _0x21e680=_0x399334,_0x2a6c29=new Date(_0x4f450d[_0x21e680(0xff)]);return _0x5a7705===null||_0x2a6c29<_0x5a7705?_0x2a6c29:_0x5a7705;},null)),_0x4c0e2b;},processTasks=async(_0x17becb,_0xfbb313,_0x27a657=[])=>{const _0x5a59e5=_0x18bb4d;while(!![]){const _0x31be76=_0xfbb313[_0x5a59e5(0x12e)](_0x25d5e6=>_0x25d5e6[_0x5a59e5(0x178)]!==TASK_ACTIONS[_0x5a59e5(0x120)]),_0x4de2b8=[..._0x31be76,..._0x27a657],_0x401eff=_0x4de2b8[_0x5a59e5(0x112)],_0x5d48da=_0x4de2b8[_0x5a59e5(0x12e)](_0x49c09d=>_0x49c09d[_0x5a59e5(0x175)]||_0x49c09d['status']===_0x5a59e5(0x175))['length'];logger[_0x5a59e5(0x154)](colors[_0x5a59e5(0x154)]+'Task\x20Progress:\x20'+_0x5d48da+'/'+_0x401eff+_0x5a59e5(0x11d)+colors[_0x5a59e5(0x170)]);let _0x1eb378=![];const _0x286490=new Date();for(const _0x40bdbc of _0x4de2b8){if(_0x40bdbc[_0x5a59e5(0x175)]||_0x40bdbc[_0x5a59e5(0x15b)]===_0x5a59e5(0x175))continue;if(_0x40bdbc['timer']&&new Date(_0x40bdbc[_0x5a59e5(0xff)])>_0x286490){logger[_0x5a59e5(0x10d)](colors[_0x5a59e5(0x135)]+_0x5a59e5(0x150)+(_0x40bdbc['task_name']||_0x40bdbc[_0x5a59e5(0x104)])+_0x5a59e5(0x122)+formatDateTime(_0x40bdbc[_0x5a59e5(0xff)])+colors[_0x5a59e5(0x170)]);continue;}const _0x243e06=_0x40bdbc[_0x5a59e5(0x16b)]||_0x40bdbc[_0x5a59e5(0x104)],_0x4dbe45=_0x40bdbc['task_points']||_0x40bdbc[_0x5a59e5(0x159)];_0x40bdbc['partnerId']?(logger[_0x5a59e5(0x154)](colors[_0x5a59e5(0x154)]+_0x5a59e5(0x10f)+_0x40bdbc[_0x5a59e5(0x123)]+':\x20'+_0x243e06+'\x20('+_0x4dbe45+'\x20points)'+colors['reset']),await handlePartnerTask(_0x17becb,_0x40bdbc[_0x5a59e5(0x10c)],_0x40bdbc[_0x5a59e5(0x147)])):(logger['info'](colors[_0x5a59e5(0x154)]+_0x5a59e5(0x117)+_0x243e06+'\x20('+_0x4dbe45+_0x5a59e5(0xfb)+colors[_0x5a59e5(0x170)]),await handleTaskExecution(_0x17becb,_0x40bdbc)),_0x1eb378=!![],await delay(0x7d0);}const _0x5871e9=findNextUnlockTime(_0x4de2b8);if(!_0x1eb378&&_0x5871e9){const _0x23768b=_0x5871e9-_0x286490;logger[_0x5a59e5(0x154)](colors['info']+_0x5a59e5(0x108)+formatDateTime(_0x5871e9)+colors[_0x5a59e5(0x170)]);const _0x188e5b=new CountdownTimer({'message':_0x5a59e5(0x12b),'format':'HH:mm:ss'});await _0x188e5b[_0x5a59e5(0x140)](Math[_0x5a59e5(0x13a)](_0x23768b/0x3e8));}else{if(!_0x1eb378){const _0x38923a=0x18*0x3c*0x3c;logger['info'](colors[_0x5a59e5(0x154)]+_0x5a59e5(0x118)+colors['reset']);const _0xcded7c=new CountdownTimer({'message':_0x5a59e5(0x13c),'format':_0x5a59e5(0x143)});await _0xcded7c[_0x5a59e5(0x140)](_0x38923a);}}try{const [_0x59dff3,_0xa8308]=await Promise[_0x5a59e5(0x11a)]([getTaskList(_0x17becb),getPartnerTasks(_0x17becb)]);_0x59dff3[_0x5a59e5(0x112)]>0x0||_0xa8308[_0x5a59e5(0x112)]>0x0?(_0xfbb313=_0x59dff3,_0x27a657=_0xa8308):(logger[_0x5a59e5(0x10d)](colors['warning']+'Failed\x20to\x20refresh\x20tasks,\x20retrying\x20in\x2030\x20seconds...'+colors[_0x5a59e5(0x170)]),await delay(0x7530));}catch(_0x14d053){logger[_0x5a59e5(0x134)](colors['error']+_0x5a59e5(0x15a)+_0x14d053['message']+',\x20retrying\x20in\x2030\x20seconds...'+colors['reset']),await delay(0x7530);}}},runAutomation=async()=>{const _0x7d4c5c=_0x18bb4d;displayBanner();const _0x5d821d=loadTokens();logger[_0x7d4c5c(0x154)](colors['info']+_0x7d4c5c(0x14f)+_0x5d821d[_0x7d4c5c(0x112)]+_0x7d4c5c(0x171)+colors[_0x7d4c5c(0x170)]);for(const [_0x154bac,_0x391a20]of _0x5d821d[_0x7d4c5c(0x158)]()){logger[_0x7d4c5c(0x154)](colors[_0x7d4c5c(0x154)]+_0x7d4c5c(0x15d)+(_0x154bac+0x1)+'/'+_0x5d821d[_0x7d4c5c(0x112)]+colors['reset']);const _0x2c9a71=createApiClient(_0x391a20);try{const _0xd84e07=await revalidateSession(_0x2c9a71);if(!_0xd84e07){logger[_0x7d4c5c(0x134)](colors[_0x7d4c5c(0x134)]+_0x7d4c5c(0x103)+colors['reset']);continue;}const _0x4f09b6=await authenticateSession(_0x2c9a71);if(!_0x4f09b6){logger[_0x7d4c5c(0x134)](colors[_0x7d4c5c(0x134)]+_0x7d4c5c(0x12a)+colors[_0x7d4c5c(0x170)]);continue;}const _0xb0b30f=await getUserInfo(_0x2c9a71);if(!_0xb0b30f){logger[_0x7d4c5c(0x134)](colors[_0x7d4c5c(0x134)]+_0x7d4c5c(0x106)+colors[_0x7d4c5c(0x170)]);continue;}displayUserInfo(_0xb0b30f);const [_0x1ae063,_0x502758]=await Promise[_0x7d4c5c(0x11a)]([getTaskList(_0x2c9a71),getPartnerTasks(_0x2c9a71)]);if(_0x1ae063[_0x7d4c5c(0x112)]===0x0&&_0x502758[_0x7d4c5c(0x112)]===0x0){logger['error'](colors[_0x7d4c5c(0x134)]+_0x7d4c5c(0x16c)+colors[_0x7d4c5c(0x170)]);continue;}await processTasks(_0x2c9a71,_0x1ae063,_0x502758),logger[_0x7d4c5c(0x105)](colors[_0x7d4c5c(0x105)]+_0x7d4c5c(0x172)+colors[_0x7d4c5c(0x170)]),_0x154bac<_0x5d821d[_0x7d4c5c(0x112)]-0x1&&await delay(0x1388);}catch(_0x3eb74e){logger[_0x7d4c5c(0x134)](colors['error']+_0x7d4c5c(0x131)+_0x3eb74e[_0x7d4c5c(0x161)]+colors[_0x7d4c5c(0x170)]);}}};logger['info'](colors[_0x18bb4d(0x154)]+_0x18bb4d(0x142)+colors[_0x18bb4d(0x170)]),runAutomation()['then'](()=>{const _0x400f19=_0x18bb4d;logger[_0x400f19(0x105)](colors['success']+'Automation\x20completed'+colors[_0x400f19(0x170)]);})[_0x18bb4d(0x14a)](_0x314ccf=>{const _0x4fbb5c=_0x18bb4d;logger[_0x4fbb5c(0x134)](colors['error']+'Fatal\x20error:\x20'+_0x314ccf[_0x4fbb5c(0x161)]+colors[_0x4fbb5c(0x170)]);});