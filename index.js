/* SCRIPT BY BERNKASTEL & shira */
'use strict'

//Lancer Skills
const JOB_LANCER =1;

const S_P =11200;
const S_P2 =11201;
const S_P3 =11202;
const S_P_D =650;
const S_P2_D =1000;
const S_P3_D =1800;
//const SKILL_BLOCK =20200;
const SKILL_BLOCK_D =350;
const S_OnSl = 30200; // shield bash / 25% speed glyph
const S_OnSl_D =940;
const S_OnSl_D2 =505;
const S_OnSl_D3 =510;
const S_OnSl_D4 =500;
const S_OnSl_D5 =390;
const S_OnSl_D6 =740;
const S_ChSh = 40900; // 25% speed glyph
const S_ChSh_D =2190;
const S_SBash =50101;
const S_SBash_2 =50102;
const S_SBash_D =825;
const S_GShout =70300;
const S_GShout_D =565;
const S_ShCo = 81100; //chains from block
const S_ShCo_D =1440;
const S_Leash =90300;
const S_Leash_D =720;
const S_Leash_D2 =850;
const S_Deb =100300;
const S_Deb_D =920;
const S_Retal =111000;
const S_Retal_D =1610;
const S_Infu =120100;
const S_Infu_D =2430;
const S_Spring = 131100; //deb, 4th combo, 2nd shield barrage, shield bash, shield counter
const S_Spring_D =2790;
const SKILL_CHARGING =151000;
const SKILL_CHARGING_DURATION = 1100; //no aspd scaling
const SKILL_CHARGING_DISTANCE =494;
const SKILL_CHARGING_2 =151001;
const SKILL_CHARGING_2_DURATION =930;
const S_Wind =160700;
const S_Wind_D = 690; //no aspd scaling
const S_ARush =170200;
const S_ARush_2 =170240;
const S_ARush_3 =170250;
const S_ARush_D = 690; //no aspd scaling
const S_ShBarrage =181100;
//const S_ShBarrage_D =600;
const S_ShBarrage2 =181101;
const S_ShBarrage2_D =790;
const S_Pledge =190100;
const S_Pledge_D = 980; //no aspd scaling
const S_Menace =200100;
const S_Menace_D = 680; //no aspd 
const S_Menace_D2 = 800; //no aspd
const S_Lockdown =210401;
const S_Lockdown_2 =210402;
const S_Lockdown_D =1390;
const S_IronWill =220600;
const S_IronWill_D = 800; //no aspd
const S_MasLeash =230200;
const S_MasLeash_D =715;
const S_MasLeash_D2 =840;
const S_Giga =240100;
const S_Giga_D =720;
const S_Giga_D2 =840;
const S_Wallop = 251000; //spring, deb 
const S_Wallop_D =2380;
const S_BStep =260100;
const S_BStep_D =730;
const S_RCry =270100;
const S_RCry_D =640;

const S_RightLeap = 280100; //65
const S_RightLeap_D =300;
const S_RightLeap_D2_1 =1095;
const S_RightLeap_D3_1 =3100;
const S_RightLeap_D2_2 =775;
const S_RightLeap_D3_2 =775;
const S_RightLeap_Dist =450;

const S_DivineAegis =300100;
const S_DivineAegis_D =1250;

const S_Bulwark =290100;
const S_Bulwark_D =800;
const BLACKLIST = [110100, 111110, 111111, 111112, 111113, 111114, 111115, 111116, 111117, 111118, 111119, 111120, 111121, 111122, 111124, 111125,
  111126, 111127, 111128, 111129, 111130, 111131, 111134, 111135, 111139, 111140, 111143, 111144, 111145, 111190, 111191, 111193,
  111194, 111195, 111197, 111199, 111202, 111203, 116001, 116002, 116003, 116004, 117002, 117003, 140100, 460100, 480100, 900001,
  111136, 111137, 111138, 111141, 111142, 111147, 111149, 111150, 111151, 111152, 111153, 111154, 111155, 111156, 111157, 111158,
  211141, 211150, 111123, 111132, 111133, 111146, 111148, 111192, 111196, 111198, 211145, 111159, 111160, 111161, 111162, 111163,
  111164, 111165, 111166, 111168, 111169, 111170, 111171, 111172, 111173, 111174, 111175, 111176, 111177, 111178, 111179, 111180,
  111204, 111205, 111206, 111207, 111208, 111209, 111210, 111211, 111212, 111214, 111215, 111216, 111217, 111218, 111219, 111220,
  111221, 111222, 111223, 111224, 111225, 111226, 111227, 111228, 111229, 111230, 111231, 111232, 111233, 111234, 111235, 111236,
  111237, 111238, 111239, 111241, 111242, 111243, 111244, 111245, 111246, 111247, 111248, 111249, 111250, 111251, 111252, 111253,
  111254, 111255, 111256, 111257, 111258, 111259, 111260, 111261, 111262, 111263, 111264, 111265, 111266, 111267, 111268, 111269,
  111270, 111271, 111272, 111273, 111274, 111275, 111276, 111277, 111278, 111279, 111280, 111281, 111282, 111283, 111284, 111285,
  111286, 111287, 111288, 111289, 111290, 111291, 111292, 111293, 111294, 111295, 111296, 111297, 111298, 111299, 111301, 111302, 111310, 111320, 111319, 111324, 111325, 111330, 111305, 111326, 111328, 111314, 111308, 111307, 111327];
module.exports = function lancer(dispatch) {

  let config = {};
  let settingTimeout = null;
  let settingLock = false;

  const path = require('path');
  const fs = require('fs');

  try { config = require('./config.json'); }
  catch (e) {
    config = {};
    settingUpdate();
  }

  function settingUpdate() {
    clearTimeout(settingTimeout);
    settingTimeout = setTimeout(settingSave,1000);
  }

  function settingSave() {
    if (settingLock) {
      settingUpdate();
      return;
    }

    settingLock = false;
    fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(config, undefined, '\t'), err => {
      settingLock = false;
    });
  }


  config.AUTOBLOCKRESET = "h1 command in game toggles block to be dropped and immediately restarted whenever you block an attack. Auto block reset is disabled by default. Is this even useful outside HTL stacking?";
  //settingUpdate();

  //change GLOBAL_LATENCY to your lowest usual ping
  let GLOBAL_LATENCY =0;
  if ("GLOBAL_LATENCY" in config) {
    GLOBAL_LATENCY = config.GLOBAL_LATENCY;
  }
  if (!("GLOBAL_LATENCY" in config)) {
    config.GLOBAL_LATENCY =0;
    config.GLOBAL_LATENCY_DESCRIPTION = "change GLOBAL_LATENCY to your lowest usual ping";
    settingUpdate();
  }

  let BARRAGE_CANCEL_TIME =200;
  if ("BARRAGE_CANCEL_TIME" in config) {
    BARRAGE_CANCEL_TIME = config.BARRAGE_CANCEL_TIME;
  }
  if (!("BARRAGE_CANCEL_TIME" in config)) {
    config.BARRAGE_CANCEL_TIME =200;
    config.BARRAGE_CANCEL_TIME_DESCRIPTION = "Self explanatory. This can be toggled in chat with sbtoggle1 command.";
    settingUpdate();
  }

  let SB_CANCEL_TOGGLE = false;
  if ("SB_CANCEL_TOGGLE" in config) {
    SB_CANCEL_TOGGLE = config.SB_CANCEL_TOGGLE;
  }
  if (!("SB_CANCEL_TOGGLE" in config)) {
    config.SB_CANCEL_TOGGLE = false;
    config.SB_CANCEL_TOGGLE_DESCRIPTION = "If BARRAGE_CANCEL_TIME is active (i.e. not0), setting this to true will disable barrage cancel when movement key is held down.";
    settingUpdate();
  }

  let SPRING_ATTACK_CANCEL_TIME =900;
  if ("SPRING_ATTACK_CANCEL_TIME" in config) {
    SPRING_ATTACK_CANCEL_TIME = config.SPRING_ATTACK_CANCEL_TIME;
  }
  if (!("SPRING_ATTACK_CANCEL_TIME" in config)) {
    config.SPRING_ATTACK_CANCEL_TIME =900;
    config.SPRING_ATTACK_CANCEL_TIME_DESCRIPTION = "Self explanatory";
    settingUpdate();
  }
  let SPRINGAUTOWALLOP_TIME =900;
  if ("SPRINGAUTOWALLOP_TIME" in config) {
    SPRINGAUTOWALLOP_TIME = config.SPRINGAUTOWALLOP_TIME;
  }
  if (!("SPRINGAUTOWALLOP_TIME" in config)) {
    config.SPRINGAUTOWALLOP_TIME =900;
    config.SPRINGAUTOWALLOP_TIME_DESCRIPTION = "NOTE MUST HAVE SPRING_ATTACK_CANCEL_TIME ACTIVE TO TAKE EFFECT.";
    settingUpdate();
  }
  let SPRING_WALLOP_NO_CANCEL = false;
  if ("SPRING_WALLOP_NO_CANCEL" in config) {
    SPRING_WALLOP_NO_CANCEL = config.SPRING_WALLOP_NO_CANCEL;
  }
  if (!("SPRING_WALLOP_NO_CANCEL" in config)) {
    config.SPRING_WALLOP_NO_CANCEL = false;
    config.SPRING_WALLOP_NO_CANCEL_DESCRIPTION = "If this is set to true, spring attack will not auto cancel if wallop is off CD. This feature will disable auto spring -> wallop chain.";
    settingUpdate();
  }
  let LOCKDOWN_CANCEL_TIME =710;
  if ("LOCKDOWN_CANCEL_TIME" in config) {
    LOCKDOWN_CANCEL_TIME = config.LOCKDOWN_CANCEL_TIME;
  }
  if (!("LOCKDOWN_CANCEL_TIME" in config)) {
    config.LOCKDOWN_CANCEL_TIME =710;
    config.LOCKDOWN_CANCEL_TIME_DESCRIPTION = "Self explanatory";
    settingUpdate();
  }
  let WALLOP_CANCEL_TIME_UNCHAINED =1600;
  if ("WALLOP_CANCEL_TIME_UNCHAINED" in config) {
    WALLOP_CANCEL_TIME_UNCHAINED = config.WALLOP_CANCEL_TIME_UNCHAINED;
  }
  if (!("WALLOP_CANCEL_TIME_UNCHAINED" in config)) {
    config.WALLOP_CANCEL_TIME_UNCHAINED =1600; //KEY=24582706191583=0
    config.WALLOP_CANCEL_TIME_UNCHAINED_DESCRIPTION = "NOTE BOTH WALLOP TIME HAVE TO BE ACTIVE TO TAKE EFFECT.";
    settingUpdate();
  }
  let WALLOP_CANCEL_TIME_CHAINED =1200;
  if ("WALLOP_CANCEL_TIME_CHAINED" in config) {
    WALLOP_CANCEL_TIME_CHAINED = config.WALLOP_CANCEL_TIME_CHAINED;
  }
  if (!("WALLOP_CANCEL_TIME_CHAINED" in config)) {
    config.WALLOP_CANCEL_TIME_CHAINED =1200;
    config.WALLOP_CANCEL_TIME_CHAINED_DESCRIPTION = "NOTE BOTH WALLOP TIME HAVE TO BE ACTIVE TO TAKE EFFECT.";
    settingUpdate();
  }
  let DEB_CANCEL_TIME =720;
  if (("DEB_CANCEL_TIME" in config)) {
    DEB_CANCEL_TIME = config.DEB_CANCEL_TIME;
  }
  if (!("DEB_CANCEL_TIME" in config)) {
    config.DEB_CANCEL_TIME =720;
    config.DEB_CANCEL_TIME_DESCRIPTION = "Self explanatory";
    settingUpdate();
  }
  let DEBAUTOSPRING_TIME =720;
  if (("DEBAUTOSPRING_TIME" in config)) {
    DEBAUTOSPRING_TIME = config.DEBAUTOSPRING_TIME;
  }
  if (!("DEBAUTOSPRING_TIME" in config)) {
    config.DEBAUTOSPRING_TIME =720;
    config.DEBAUTOSPRING_TIME_DESCRIPTION = "NOTE MUST HAVE DEB_CANCEL_TIME ACTIVE TO TAKE EFFECT.";
    settingUpdate();
  }
  let S_COUNTER_CANCEL_TIME =750;
  if (("S_COUNTER_CANCEL_TIME" in config)) {
    S_COUNTER_CANCEL_TIME = config.S_COUNTER_CANCEL_TIME;
  }
  if (!("S_COUNTER_CANCEL_TIME" in config)) {
    config.S_COUNTER_CANCEL_TIME =750;
    config.S_COUNTER_CANCEL_TIME_DESCRIPTION = "Self explanatory";
    settingUpdate();
  }
  let S_COUNTER_SPRING_NO_CANCEL = true;
  if (("S_COUNTER_SPRING_NO_CANCEL" in config)) {
    S_COUNTER_SPRING_NO_CANCEL = config.S_COUNTER_SPRING_NO_CANCEL;
  }
  if (!("S_COUNTER_SPRING_NO_CANCEL" in config)) {
    config.S_COUNTER_SPRING_NO_CANCEL = true;
    config.S_COUNTER_SPRING_NO_CANCEL_DESCRIPTION = "If spring attack is off CD, shield counter will not block cancel if this is enabled. This feature is used to stop ghosting if you try to manually override Shield counter block cancel with spring attack.";
    settingUpdate();
  }

  let S_COUNTER_ARUSH_NO_CANCEL = false;
  if (("S_COUNTER_ARUSH_NO_CANCEL" in config)) {
    S_COUNTER_ARUSH_NO_CANCEL = config.S_COUNTER_ARUSH_NO_CANCEL;
  }
  if (!("S_COUNTER_ARUSH_NO_CANCEL" in config)) {
    config.S_COUNTER_ARUSH_NO_CANCEL = false;
    config.S_COUNTER_ARUSH_NO_CANCEL_DESCRIPTION = "If A rush is activated, shield counter will not block cancel if this is enabled.";
    settingUpdate();
  }
  let INFURIATE_CANCEL_TIME =1600;
  if (("INFURIATE_CANCEL_TIME" in config)) {
    INFURIATE_CANCEL_TIME = config.INFURIATE_CANCEL_TIME;
  }
  if (!("INFURIATE_CANCEL_TIME" in config)) {
    config.INFURIATE_CANCEL_TIME =1600;
    config.INFURIATE_CANCEL_TIME_DESCRIPTION = "Self explanatory";
    settingUpdate();
  }
  let BARRAGE_SPRINGLOCK =0;
  if (("BARRAGE_SPRINGLOCK" in config)) {
    BARRAGE_SPRINGLOCK = config.BARRAGE_SPRINGLOCK;
  }
  if (!("BARRAGE_SPRINGLOCK" in config)) {
    config.BARRAGE_SPRINGLOCK =0;
    config.BARRAGE_SPRINGLOCK_DESCRIPTION = "set to lock spring attack for x ms after barrage2. Use this only with barrage auto cancel if you have ghosting issues with spring, this scales with ASPD.";
    settingUpdate();
  }
  let AUTOBLOCKDELAY =1;
  if (("AUTOBLOCKDELAY" in config)) {
    AUTOBLOCKDELAY = config.AUTOBLOCKDELAY;
  }
  if (!("AUTOBLOCKDELAY" in config)) {
    config.AUTOBLOCKDELAY =1;
    config.AUTOBLOCKDELAY_DESCRIPTION = "this is the auto block delay. If set under 30, it will not consume RE.";
    config.AUTOBLOCKDELAY_DESCRIPTION_2 = "NOTE: USING AUTO CANCEL CAN POTENTIALLY BREAK YOUR CHAIN (OBVIOUSLY)";
    config.AUTOBLOCKDELAY_DESCRIPTION_3 = "Set to 0 to disable any of the above auto cancel. This is cancel time in milliseconds and scales with aspd.";
    settingUpdate();
  }
  let WALLOP_AUTO_COUNTER = true;
  if ("WALLOP_AUTO_COUNTER" in config) {
    WALLOP_AUTO_COUNTER = config.WALLOP_AUTO_COUNTER;
  }
  if (!("WALLOP_AUTO_COUNTER" in config)) {
    config.WALLOP_AUTO_COUNTER = true;
    config.WALLOP_AUTO_COUNTER_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto shield counter if wallop blocks, this will delay until after the last hit if auto block cancel is also activated for wallop.";
    settingUpdate();
  }
  let LEAP_AUTO_COUNTER = true;
  if ("LEAP_AUTO_COUNTER" in config) {
    LEAP_AUTO_COUNTER = config.LEAP_AUTO_COUNTER;
  }
  if (!("LEAP_AUTO_COUNTER" in config)) {
    config.LEAP_AUTO_COUNTER = true;
    config.LEAP_AUTO_COUNTER_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto shield counter if righteous leap blocks.";
    settingUpdate();
  }
  let DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD = false;
  if ("DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD" in config) {
    DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD = config.DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD;
  }
  if (!("DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD" in config)) {
    config.DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD = false;
    config.DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD_DESCRIPTION = "Disables WALLOP_AUTO_COUNTER if righteous leap is off cooldown.";
    settingUpdate();
  }
  let OS_AUTO_COUNTER = true;
  if ("OS_AUTO_COUNTER" in config) {
    OS_AUTO_COUNTER = config.OS_AUTO_COUNTER;
  }
  if (!("OS_AUTO_COUNTER" in config)) {
    config.OS_AUTO_COUNTER = true;
    config.OS_AUTO_COUNTER_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto shield counter if onslaught blocks, this will delay until after the last hit if auto block cancel is also activated for OS.";
    settingUpdate();
  }
  let SHIELD_COUNTER_KEY = "4";
  if (("SHIELD_COUNTER_KEY" in config)) {
    SHIELD_COUNTER_KEY = config.SHIELD_COUNTER_KEY;
  }
  if (!("SHIELD_COUNTER_KEY" in config)) {
    config.SHIELD_COUNTER_KEY = "4";
    config.SHIELD_COUNTER_KEY_DESCRIPTION = "Key for shield counter, find keyboard syntax list here http://robotjs.io/docs/syntax";
    settingUpdate();
  }
  let SB_AUTO_ONSLAUGHT = true;
  if ("SB_AUTO_ONSLAUGHT" in config) {
    SB_AUTO_ONSLAUGHT = config.SB_AUTO_ONSLAUGHT;
  }
  if (!("SB_AUTO_ONSLAUGHT" in config)) {
    config.SB_AUTO_ONSLAUGHT = true;
    config.SB_AUTO_ONSLAUGHT_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto onslaught if shield bash. Can be toggled on off with sbos1 command.";
    settingUpdate();
  }
  
  let SBarrage_AUTO_ONSLAUGHT = false;
  if ("SBarrage_AUTO_ONSLAUGHT" in config) {
    SBarrage_AUTO_ONSLAUGHT = config.SBarrage_AUTO_ONSLAUGHT;
  }
  if (!("SBarrage_AUTO_ONSLAUGHT" in config)) {
    config.SBarrage_AUTO_ONSLAUGHT = false;
    config.SBarrage_AUTO_ONSLAUGHT_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto onslaught after shield barrage.";
    settingUpdate();
  }
  
  let ONSLAUGHT_KEY = "5";
  if (("ONSLAUGHT_KEY" in config)) {
    ONSLAUGHT_KEY = config.ONSLAUGHT_KEY;
  }
  if (!("ONSLAUGHT_KEY" in config)) {
    config.ONSLAUGHT_KEY = "5";
    config.ONSLAUGHT_KEY_DESCRIPTION = "Key for onslaught, find keyboard syntax list here http://robotjs.io/docs/syntax";
    settingUpdate();
  }
  let ONSLAUGHT_AUTO_CANCEL = true;
  if ("ONSLAUGHT_AUTO_CANCEL" in config) {
    ONSLAUGHT_AUTO_CANCEL = config.ONSLAUGHT_AUTO_CANCEL;
  }
  if (!("ONSLAUGHT_AUTO_CANCEL" in config)) {
    config.ONSLAUGHT_AUTO_CANCEL = true;
    config.ONSLAUGHT_AUTO_CANCEL_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto block cancel onslaught";
    settingUpdate();
  }
  let ONSLAUGHT_AUTO_CANCEL_DELAY = "2600";
  if (("ONSLAUGHT_AUTO_CANCEL_DELAY" in config)) {
    ONSLAUGHT_AUTO_CANCEL_DELAY = config.ONSLAUGHT_AUTO_CANCEL_DELAY;
  }
  if (!("ONSLAUGHT_AUTO_CANCEL_DELAY" in config)) {
    config.ONSLAUGHT_AUTO_CANCEL_DELAY = "2600";
    config.ONSLAUGHT_AUTO_CANCEL_DELAY_DESCRIPTION = "Onslaught block cancel delay at base aspd";
    settingUpdate();
  }
  
  let ONSLAUGHT_LOCK_DELAY = false;
  if (("ONSLAUGHT_LOCK_DELAY" in config)) {
    ONSLAUGHT_LOCK_DELAY = config.ONSLAUGHT_LOCK_DELAY;
  }
  if (!("ONSLAUGHT_LOCK_DELAY" in config)) {
    config.ONSLAUGHT_LOCK_DELAY = false;
    config.ONSLAUGHT_LOCK_DELAY_DESCRIPTION = "Onslaught cannot be cancelled by anything except block and backstep.";
    settingUpdate();
  }
  
  let BLOCK_KEY = "6";
  if (("BLOCK_KEY" in config)) {
    BLOCK_KEY = config.BLOCK_KEY;
  }
  if (!("BLOCK_KEY" in config)) {
    config.BLOCK_KEY = "6";
    config.BLOCK_KEY_DESCRIPTION = "Key for Stand Fast, find keyboard syntax list here http://robotjs.io/docs/syntax";
    settingUpdate();
  }
  let SB_AUTO_SPRING = true;
  if ("SB_AUTO_SPRING" in config) {
    SB_AUTO_SPRING = config.SB_AUTO_SPRING;
  }
  if (!("SB_AUTO_SPRING" in config)) {
    config.SB_AUTO_SPRING = true;
    config.SB_AUTO_SPRING_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto spring attack after SB, toggle on and off in game with sbspring1";
    settingUpdate();
  }
  
  let COUNTER_AUTO_SPRING = true;
  if ("COUNTER_AUTO_SPRING" in config) {
    COUNTER_AUTO_SPRING = config.COUNTER_AUTO_SPRING;	
  }
  if (!("COUNTER_AUTO_SPRING" in config)) {
    config.COUNTER_AUTO_SPRING = true;
    config.COUNTER_AUTO_SPRING_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto spring attack after shield counter. May bug if S_COUNTER_SPRING_NO_CANCEL is set to false.";
    settingUpdate();
  }
  
  let SPRING_KEY = "7";
  if (("SPRING_KEY" in config)) {
    SPRING_KEY = config.SPRING_KEY;
  }
  if (!("SPRING_KEY" in config)) {
    config.SPRING_KEY = "7";
    config.SPRING_KEY_DESCRIPTION = "Key for spring attack, find keyboard syntax list here http://robotjs.io/docs/syntax";
    settingUpdate();
  }
  let SPRING_BUG_TIME =150;
  if (("SPRING_BUG_TIME" in config)) {
    SPRING_BUG_TIME = config.SPRING_BUG_TIME;
  }
  if (!("SPRING_BUG_TIME" in config)) {
    config.SPRING_BUG_TIME =150;
    config.SPRING_BUG_TIME_DESCRIPTION = "Some people have issues with robotjs being too inhumanly fast and missing a spring tick";
    config.SPRING_BUG_TIME_DESCRIPTION_2 = "this will slow down the SB2 -> Spring timing by this many milliseconds (will scale off aspd).";
    settingUpdate();
  }

  let LOCKDOWN_AUTO_SPRING = false;
  if (("LOCKDOWN_AUTO_SPRING" in config)) {
    LOCKDOWN_AUTO_SPRING = config.LOCKDOWN_AUTO_SPRING;
  }
  if (!("LOCKDOWN_AUTO_SPRING" in config)) {
    config.LOCKDOWN_AUTO_SPRING = false;
    config.LOCKDOWN_AUTO_SPRING_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. If lockdown auto block cancel is enabled, enabling this option will use spring attack instead if available.";
    settingUpdate();
  }

  let AGGRO_SHOUT_AUTO_CANCEL = true;
  if ("AGGRO_SHOUT_AUTO_CANCEL" in config) {
    AGGRO_SHOUT_AUTO_CANCEL = config.AGGRO_SHOUT_AUTO_CANCEL;
  }
  if (!("AGGRO_SHOUT_AUTO_CANCEL" in config)) {
    config.AGGRO_SHOUT_AUTO_CANCEL = true;
    config.AGGRO_SHOUT_AUTO_CANCEL_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto cancels challenging shout";
    settingUpdate();
  }
  let AGGRO_SHOUT_AUTO_CANCEL_DELAY = "1400";
  if (("AGGRO_SHOUT_AUTO_CANCEL_DELAY" in config)) {
    AGGRO_SHOUT_AUTO_CANCEL_DELAY = config.AGGRO_SHOUT_AUTO_CANCEL_DELAY;
  }
  if (!("AGGRO_SHOUT_AUTO_CANCEL_DELAY" in config)) {
    config.AGGRO_SHOUT_AUTO_CANCEL_DELAY = "1400";
    config.AGGRO_SHOUT_AUTO_CANCEL_DELAY_DESCRIPTION = "Challenging shout auto cancel delay";
    settingUpdate();
  }

  let WALLOP_AUTO_LEAP = true;
  if ("WALLOP_AUTO_LEAP" in config) {
    WALLOP_AUTO_LEAP = config.WALLOP_AUTO_LEAP;
  }
  if (!("WALLOP_AUTO_LEAP" in config)) {
    config.WALLOP_AUTO_LEAP = true;
    config.WALLOP_AUTO_LEAP_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto super leap after wallop. Activating this macro will also (obviously) disable wallop auto block cancel when leap is off CD.";
    settingUpdate();
  }

  let LEAP_ARUSH_NO_CANCEL = false;
  if (("LEAP_ARUSH_NO_CANCEL" in config)) {
    LEAP_ARUSH_NO_CANCEL = config.LEAP_ARUSH_NO_CANCEL;
  }
  if (!("LEAP_ARUSH_NO_CANCEL" in config)) {
    config.LEAP_ARUSH_NO_CANCEL = false;
    config.LEAP_ARUSH_NO_CANCEL_DESCRIPTION = "Disables wallop -> superleap if less than x sec left on Arush CD or Arush off CD.";
    settingUpdate();
  }

  let LEAP_ARUSH_NO_CANCEL_TIMER =10000;
  if (("LEAP_ARUSH_NO_CANCEL_TIMER" in config)) {
    LEAP_ARUSH_NO_CANCEL_TIMER = config.LEAP_ARUSH_NO_CANCEL_TIMER;
  }
  if (!("LEAP_ARUSH_NO_CANCEL_TIMER" in config)) {
    config.LEAP_ARUSH_NO_CANCEL_TIMER =10000;
    config.LEAP_ARUSH_NO_CANCEL_TIMER_DESCRIPTION = "Timer for x for above features in milliseconds.";
    settingUpdate();
  }

  let LEAP_KEY = "6";
  if (("LEAP_KEY" in config)) {
    LEAP_KEY = config.LEAP_KEY;
  }
  if (!("LEAP_KEY" in config)) {
    config.LEAP_KEY = "6";
    config.LEAP_KEY_DESCRIPTION = "Key for super leap, find keyboard syntax list here http://robotjs.io/docs/syntax";
    settingUpdate();
  }

  let LEAP_AUTO_CANCEL = true;
  if ("LEAP_AUTO_CANCEL" in config) {
    LEAP_AUTO_CANCEL = config.LEAP_AUTO_CANCEL;
  }
  if (!("LEAP_AUTO_CANCEL" in config)) {
    config.LEAP_AUTO_CANCEL = true;
    config.LEAP_AUTO_CANCEL_DESCRIPTION = "DO NOT USE THIS WITHOUT ROBOTJS. Auto block cancel super leap.";
    settingUpdate();
  }

  let LEAP_AUTO_CANCEL_DELAY = "370";
  if (("LEAP_AUTO_CANCEL_DELAY" in config)) {
    LEAP_AUTO_CANCEL_DELAY = config.LEAP_AUTO_CANCEL_DELAY;
  }
  if (!("LEAP_AUTO_CANCEL_DELAY" in config)) {
    config.LEAP_AUTO_CANCEL_DELAY = "370";
    config.LEAP_AUTO_CANCEL_DELAY_DESCRIPTION = "Leap auto cancel delay";
    settingUpdate();
  }
  
  let AUTO_ATTACK_ONSLAUGHT = false;
	if (("AUTO_ATTACK_ONSLAUGHT" in config)) {
		AUTO_ATTACK_ONSLAUGHT = config.AUTO_ATTACK_ONSLAUGHT;
	}
	if (!("AUTO_ATTACK_ONSLAUGHT" in config)) {
		config.AUTO_ATTACK_ONSLAUGHT = false;
		config.AUTO_ATTACK_ONSLAUGHT_DESCRIPTION = "Auto auto attack -> onslaught, requires robotjs. Does not trigger if you hold down movement key.";
		settingUpdate();
	}
  
  let AUTO_ATTACK_CANCEL = false;
	if (("AUTO_ATTACK_CANCEL" in config)) {
		AUTO_ATTACK_CANCEL = config.AUTO_ATTACK_CANCEL;
	}
	if (!("AUTO_ATTACK_CANCEL" in config)) {
		config.AUTO_ATTACK_CANCEL = false;
		config.AUTO_ATTACK_CANCEL_DESCRIPTION = "Auto block cancel auto attack, requires robotjs. This is for skating.";
		settingUpdate();
	}
	
	let AUTO_ATTACK_CANCEL_DELAY =100;
	if (("AUTO_ATTACK_CANCEL_DELAY" in config)) {
		AUTO_ATTACK_CANCEL_DELAY = config.AUTO_ATTACK_CANCEL_DELAY;
	}
	if (!("AUTO_ATTACK_CANCEL_DELAY" in config)) {
		config.AUTO_ATTACK_CANCEL_DELAY =100;
		config.AUTO_ATTACK_CANCEL_DELAY_DESCRIPTION = "Auto block cancel auto attack delay in milliseconds, scales with aspd.";
		settingUpdate();
	}
	
	let AUTO_CHARGE_LEAP = false;
	if (("AUTO_CHARGE_LEAP" in config)) {
		AUTO_CHARGE_LEAP = config.AUTO_CHARGE_LEAP;
	}
	if (!("AUTO_CHARGE_LEAP" in config)) {
		config.AUTO_CHARGE_LEAP = false;
		config.AUTO_CHARGE_LEAP_DESCRIPTION = "If the last skill is not wallop, enabling this will attempt to instant charging lunge before if you press righteous leap.";
		settingUpdate();
	}
	
	let ARUSH_X = false;
	if (("ARUSH_X" in config)) {
		ARUSH_X = config.ARUSH_X;
	}
	if (!("ARUSH_X" in config)) {
		config.ARUSH_X = false;
		config.ARUSH_X_DESCRIPTION = "Auto use X_KEY when Adrenaline Rush is used. X_KEY must be set. This macro does not work without ROBOTJS.";
		settingUpdate();
	}
	
	let X_KEY = "3";
	if (("X_KEY" in config)) {
		X_KEY = config.X_KEY;
	}
	if (!("X_KEY" in config)) {
		config.X_KEY = "3";
		config.X_KEY_DESCRIPTION = "X Key. Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let Y_KEY = X_KEY;
	if (("Y_KEY" in config)) {
		Y_KEY = config.Y_KEY;
	}
	if (!("Y_KEY" in config)) {
		config.Y_KEY = X_KEY;
		config.Y_KEY_DESCRIPTION = "Y Key (keep the same as X_KEY if you don't want a second skill to activate). Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}
	
	let Z_KEY = X_KEY;
	if (("Z_KEY" in config)) {
		Z_KEY = config.Z_KEY;
	}
	if (!("Z_KEY" in config)) {
		config.Z_KEY = X_KEY;
		config.Z_KEY_DESCRIPTION = "Z Key (keep the same as X_KEY if you don't want a second skill to activate). Find keyboard syntax list here http://robotjs.io/docs/syntax";
		settingUpdate();
	}

  let KR_ONSLAUGHT_TALENT = false;
  
  let SKILL_BLOCK =20200;

  let H1_EXPERIMENT = false;

  let cid;
  let job;
  let model;
  let enabled = false;
  let aspd;

  let atkid = [];
  let atkid_base = 0xFEFEFFEE;

  let S_ShBarrage_D =600;

  let disabSkill = [];
  let startTime = [];
  let timer = [];
  let finishcheck = [];
  let finish = [];
  let charging = false;
  let myRE;

  let Ignore1 = false;
  let Ignore2;
  
  let locking = false;
  let locking2;

  let SBASHAUTOONSLAUGHT_TIME =0;
  let SCHAX =1;

  let SB_AUTO_ONSLAUGHTER = SB_AUTO_ONSLAUGHT;

  let xloc;
  let yloc;
  let zloc;
  let wloc;
  let timeloc;
  let cdCheck = [];

  let permawallop = WALLOP_CANCEL_TIME_UNCHAINED;

  let blockd;

  let punchCounter =0;
  let clearPunchCounter;

  let dstance =0;
  let sBashGlyph = false;
  let onslaughtTimer1;
  let onslaughtTimer2;
  let onslaughtTimer3;
  let onslaughtTimer4;
  let onslaughtTimer5;
  let msgSuppress;
  let canLeash = false;
  let barragelock = true;
  let safetyX = false;
  let WALLOPCANCEL;

  let lastBlock;
  let checkerr =0;
  let lastBulk;

  let lastSkill;
  let lastLastSkill;
  let lastEvent;
  let lastEventTime;
  let currentRe;
  let GLOBAL_LOCK_DELAY =800;
  let blockActive =0;

  let lastSkillTime = [];
  let lastSkillDelay;
  let lastLastSkillDelay;
  let lastSkillStart;
  let lastSkillEvent;
  let RecheckTimer;

  let zzz =0;
  let yyy =1;
  let glyphState = [];

  let failsafe =0;

  let collisionLocX;
  let collisionLocY;
  let collisionLocZ;

  let leapready = false;

  let aRusha = false;

  let darkness =0;
  let light =0;
  let yes11 =0;
  let autoreblock = false;
  let blockstate;
  
  let onslaughtlock = false;

  let zoKk;

  let autoscarray = [];

  let savebarrage = BARRAGE_CANCEL_TIME;


  let backStepStart;

  var atkArr;

  let talentState = [];
  dispatch.hook('S_LOAD_EP_INFO', 2, (event) => {
    if (!enabled) { return };
    talentState = [];
    event.perks.forEach(function (element) {
      talentState[element.id] = element.level;
    });
  });

  dispatch.hook('S_LEARN_EP_PERK', 1, (event) => {
    if (!enabled) { return };
    talentState = [];
    event.perks.forEach(function (element) {
      talentState[element.id] = element.level;
    });
  });

  dispatch.hook('C_CHAT', 1, (event) => {
    if (event.message.includes("sbtoggle1")) {
      if (BARRAGE_CANCEL_TIME ==0) {
        BARRAGE_CANCEL_TIME = savebarrage;
      }
      else if (BARRAGE_CANCEL_TIME !=0) {
        BARRAGE_CANCEL_TIME =0;
      }
      return false;
    }
    if (event.message.includes("h1")) {
      autoreblock = !autoreblock;
      console.log("Auto reblock is set to: " + autoreblock);
      return false;
    }
    if (event.message.includes("sbos1")) {
      SB_AUTO_ONSLAUGHTER = !SB_AUTO_ONSLAUGHTER;
      console.log("Auto SB->Onslaught is set to: " + SB_AUTO_ONSLAUGHTER);
      return false;
    }
  });

  dispatch.hook('S_LOAD_TOPO', 3, (event) => {
    if (event.zone ==118) {
      enabled = false;
    }
    else {
      enabled = [JOB_LANCER].includes(job);
    }
  });

  dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
	  lastBulk = event;
    cid = event.gameId;
    model = event.templateId;
    job = (model -10101) %100;
    enabled = [JOB_LANCER].includes(job);
    disabSkill[977] = true;

    var race = Math.floor((model -10101) /100);

    if (race ==2) {
      S_ShBarrage_D =503;
    }

    if (WALLOP_AUTO_LEAP) {
      WALLOP_CANCEL_TIME_UNCHAINED =0;
    }
  });

  dispatch.hook('C_CHAT', 1, (event) => {
    if (event.message.includes("disable1")) {
      enabled = false;
      console.log("Lancer script disabled");
      return false;
    }
    if (event.message.includes("enable1")) {
      enabled = [JOB_LANCER].includes(job);
      console.log("Lancer script enabled if you are currently logged into lancer");
      return false;
    }
	if (event.message.includes("sbspring1")) {
      SB_AUTO_SPRING = !SB_AUTO_SPRING;
      console.log("SB_AUTO_SPRING is: "+SB_AUTO_SPRING);
      return false;
    }
  });
  
  dispatch.hook('S_RP_SKILL_POLISHING_LIST', 1, (event) => {
		if (!enabled) return;
		SKILL_BLOCK =20200;
		try{
		event.optionEffects.forEach(function(element){
			if(element.id == 17020201 && element.active){
				SKILL_BLOCK =20230;
			}
			if(element.id == 17020202 && element.active){
                SKILL_BLOCK =20240;
            }
		});
		}
		catch (e) { }
	});


  function fakeEnd_sorc(event, duration) {
    collisionLocX = false;
    collisionLocY = false;
    collisionLocZ = false;
    xloc = false;
    yloc = false;
    zloc = false;
    zzz =0;
    yyy =1;
    if (timer[lastSkill]) {
      clearTimeout(timer[lastSkill]);
    }
    var d = new Date();
    lastSkillStart = d.getTime();
    lastLastSkillDelay = lastSkillDelay;
    if (finish[lastSkill] == false) {
      force_end(lastEvent,4);
    }
    finish[SKILL_CHARGING] = true;
    clearTimeout(finishcheck[event.skill.id]);
    finish[event.skill.id] = false;
    atkid[event.skill.id] = atkid_base;
    atkid_base--;
    dispatch.toClient('S_ACTION_STAGE', 9, {
      gameId: cid,
      loc: {
        x: event.loc.x,
        y: event.loc.y,
        z: event.loc.z
      },
      w: event.w,
      templateId: model,
      skill: event.skill.id,
      stage: 0,
      speed: aspd,
      ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
      id: atkid[event.skill.id],
      effectScale: 1.0,
      moving: false,
      dest: { x: 0, y: 0, Z: 0 },
      target: 0n,
      animSeq: [],
    });

    finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / aspd), event);
    lastSkillDelay = duration / aspd;
    setTimeout(function (event) {
      lastSkillEvent = {
        gameId: cid,
        loc: {
          x: collisionLocX || event.loc.x,
          y: collisionLocY || event.loc.y,
          z: collisionLocZ || event.loc.z
        },
        w: event.w,
        templateId: model,
        skill: event.skill.id,
        type: 0,
        id: atkid[event.skill.id],
      };
    }, duration / aspd, event);
    timer[event.skill.id] = setTimeout(
      function (event) {
        if (event.skill.id != S_ShCo && lastSkill == S_ShCo && finish[S_ShCo] == false) {
          return;
        }
        if (lastSkill ==1) { return; }
        if (lastSkill ==2) { return; }
        dispatch.toClient('S_ACTION_END', 5, {
          gameId: cid,
          loc: {
            x: collisionLocX || event.loc.x,
            y: collisionLocY || event.loc.y,
            z: collisionLocZ || event.loc.z
          },
          w: event.w,
          templateId: model,
          skill: event.skill.id,
          type: 0,
          id: atkid[event.skill.id],
        });
      }, duration / aspd, event);
  }

  function charge(event) {
    collisionLocX = false;
    collisionLocY = false;
    collisionLocZ = false;
    xloc = false;
    yloc = false;
    zloc = false;
    zzz =0;
    yyy =1;
    finish[SKILL_CHARGING] = true;
    var d = new Date();
    lastSkillStart = d.getTime();
    lastLastSkillDelay = lastSkillDelay;
    if (timer[lastSkill]) {
      clearTimeout(timer[lastSkill]);
    }
    clearTimeout(finishcheck[event.skill.id]);
    finish[event.skill.id] = false;
    atkid[event.skill.id] = atkid_base;
    atkid_base--;
    dispatch.toClient('S_ACTION_STAGE', 9, {
      gameId: cid,
      loc: {
        x: event.loc.x,
        y: event.loc.y,
        z: event.loc.z
      },
      w: event.w,
      templateId: model,
      skill: event.skill.id,
      stage: 0,
      speed: 1,
      ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
      id: atkid[event.skill.id],
      effectScale: 1.0,
      moving: false,
      dest: { x: 0, y: 0, Z: 0 },
      target: 0n,
      animSeq: [],
    });
    dispatch.toClient('S_INSTANT_DASH', 3, {
      gameId: cid,
      target: 0n,
      unk: 0,
      loc: {
        x: event.dest.x,
        y: event.dest.y,
        z: event.dest.z
      },
      w: event.w,
    });
    var zzzz = Math.pow((Math.pow((event.loc.x - event.dest.x),2) + Math.pow((event.loc.y - event.dest.y),2)), 0.5) / SKILL_CHARGING_DISTANCE * SKILL_CHARGING_DURATION;
    lastSkillDelay = zzzz;
    setTimeout(function (event) {
      lastSkillEvent = {
        gameId: cid,
        loc: {
          x: event.dest.x,
          y: event.dest.y,
          z: event.dest.z
        },
        w: event.w,
        templateId: model,
        skill: event.skill.id,
        type: 39,
        id: atkid[event.skill.id],
      };
    }, zzzz, event);
    timer[event.skill.id] = setTimeout(function (event) {
      if (lastSkill == SKILL_CHARGING) {
        dispatch.toClient('S_ACTION_END', 5, {
          gameId: cid,
          loc: {
            x: event.dest.x,
            y: event.dest.y,
            z: event.dest.z
          },
          w: event.w,
          templateId: model,
          skill: event.skill.id,
          type: 39,
          id: atkid[event.skill.id],
        });
        finish[event.skill.id] = true;
      }
    }, zzzz, event);
  }


  function force_end(event, unkz) {
    dispatch.toClient('S_ACTION_END', 5, {
      gameId: cid,
      loc: {
        x: collisionLocX || event.loc.x,
        y: collisionLocY || event.loc.y,
        z: collisionLocZ || event.loc.z
      },
      w: event.w,
      templateId: model,
      skill: event.skill.id + zzz,
      type: unkz, //0x02
      id: atkid[event.skill.id + zzz],
    });
    clearTimeout(timer[event.skill.id]);
  }

  function force_end2(event, unkz, skillx) {
    dispatch.toClient('S_ACTION_END', 5, {
      gameId: cid,
      loc: {
        x: collisionLocX || event.loc.x,
        y: collisionLocY || event.loc.y,
        z: collisionLocZ || event.loc.z
      },
      w: event.w,
      templateId: model,
      skill: skillx + zzz,
      type: unkz, //0x02
      id: atkid[skillx + zzz],
    });
    clearTimeout(timer[event.skill.id]);
  }

  function stageskill(event, stagex) {
    var dist =0;
    if (stagex == 2 && event.skill.id == S_OnSl) {
      dist = dist +100;
    }
    if (stagex == 3 && event.skill.id == S_OnSl) {
      dist = dist +200;
    }
    if (stagex == 4 && event.skill.id == S_OnSl) {
      dist = dist +300;
    }
    if (stagex == 5 && event.skill.id == S_OnSl) {
      dist = dist +400;
    }
    var newX;
    var newY;
    var angle = parseFloat(event.w);

    newX = Math.cos(angle) * dist;
    newY = Math.sin(angle) * dist;

    dispatch.toClient('S_ACTION_STAGE', 9, {
      gameId: cid,
      loc: {
        x: (collisionLocX) || xloc || (event.loc.x + newX),
        y: (collisionLocY) || yloc || (event.loc.y + newY),
        z: (collisionLocZ) || zloc || (event.loc.z +2)
      },
      w: event.w,
      templateId: model,
      skill: event.skill.id + zzz,
      stage: stagex,
      speed: aspd * yyy,
      ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd * yyy } : 0n),
      id: atkid[event.skill.id + zzz],
      effectScale: 1.0,
      moving: false,
      dest: { x: 0, y: 0, Z: 0 },
      target: 0n,
      animSeq: [],
    });
  }

  function stageskill2(event, stagex) {
    var dist =0;
    var newX;
    var newY;
    var angle = parseFloat(event.w);

    newX = Math.cos(angle) * dist;
    newY = Math.sin(angle) * dist;

    dispatch.toClient('S_ACTION_STAGE', 9, {
      gameId: cid,
      loc: {
        x: (event.loc.x + newX),
        y: (event.loc.y + newY),
        z: (event.loc.z +2)
      },
      w: event.w,
      templateId: model,
      skill: event.skill.id + zzz,
      stage: stagex,
      speed: aspd * yyy,
      ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd * yyy } : 0n),
      id: atkid[event.skill.id + zzz],
      effectScale: 1.0,
      moving: false,
      dest: { x: 0, y: 0, Z: 0 },
      target: 0n,
      animSeq: [],
    });
  }


  function fakeEnd_sorc_dist(event, duration, dist) {
    collisionLocX = false;
    collisionLocY = false;
    collisionLocZ = false;
    xloc = false;
    yloc = false;
    zloc = false;
    if (event.skill.id == S_ShBarrage && duration == S_ShBarrage2_D) {
      event.skill.id = S_ShBarrage2;
      safetyX = true;
    }
    if (timer[lastSkill]) {
      clearTimeout(timer[lastSkill]);
    }
    if (finish[lastSkill] == false) {
      force_end(lastEvent,4);
    }
    var d = new Date();
    lastSkillStart = d.getTime();
    lastLastSkillDelay = lastSkillDelay;
    zzz =0;
    yyy =1;
    if (!(event.skill.id == S_Spring && duration == S_Wallop_D) && event.skill.id != S_RightLeap) {
      disabSkill[977] = true;
    }
    if (event.skill.id == S_Spring && duration == S_Wallop_D) {
      event.skill.id = S_Wallop;
      zzz =30;
      duration =1890;
      clearTimeout(RecheckTimer);
      disabSkill[977] = false;
      setTimeout(function () { disabSkill[977] = true; }, duration / aspd);
    }
    if (event.skill.id == S_Deb && duration == S_Spring_D) {
      event.skill.id = S_Spring;
      zzz =30;
      duration =1840;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_SBash && duration == S_OnSl) {
      event.skill.id = S_OnSl;
      lastSkill = "special4";
      finish["special4"] = false;
    }
    if (event.skill.id == S_OnSl && sBashGlyph) {
      yyy = 1.25;
    }
    if (event.skill.id == S_ChSh && (glyphState[22085] == 1 || glyphState[22056] ==1)) {
      yyy = 1.25;
    }
    if (event.skill.id == S_OnSl && talentState[820320]) {
      yyy = yyy * (1 + talentState[820320] * 5 / 700 + 75 /700);
    }
    if (event.skill.id == S_OnSl && (lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_ShBarrage || lastSkill == S_ShBarrage2 || lastSkill == S_SBash || lastSkill == "special4") && (finish[lastSkill] == false || finish["special"] == false)) {
      zzz =30;
      duration =2650;
      clearTimeout(RecheckTimer);
      //onslaughtTimer1 = setTimeout(function () { stageskill(event,1) }, (670) / (aspd * yyy), event);
      //onslaughtTimer2 = setTimeout(function () { stageskill(event,2) }, (670 +375) / (aspd * yyy), event);
      //onslaughtTimer3 = setTimeout(function () { stageskill(event,3) }, (670 + 375 +380) / (aspd * yyy), event);
      //onslaughtTimer4 = setTimeout(function () { stageskill(event,4) }, (670 + 375 + 380 +375) / (aspd * yyy), event);
      //onslaughtTimer5 = setTimeout(function () { stageskill(event,5) }, (670 + 375 + 380 + 375 +255) / (aspd * yyy), event);
    }
    if (event.skill.id == S_OnSl && ((lastSkill != S_P && lastSkill != S_P2 && lastSkill != S_P3 && lastSkill != S_ShBarrage && lastSkill != S_ShBarrage2 && lastSkill != S_SBash && lastSkill != "special4") || (finish[lastSkill] != false && finish["special"] != false))) {
      clearTimeout(RecheckTimer);
      //onslaughtTimer1 = setTimeout(function () { stageskill(event,1) }, (S_OnSl_D) / (aspd * yyy), event);
      //onslaughtTimer2 = setTimeout(function () { stageskill(event,2) }, (S_OnSl_D + S_OnSl_D2) / (aspd * yyy), event);
      //onslaughtTimer3 = setTimeout(function () { stageskill(event,3) }, (S_OnSl_D + S_OnSl_D2 + S_OnSl_D3) / (aspd * yyy), event);
      //onslaughtTimer4 = setTimeout(function () { stageskill(event,4) }, (S_OnSl_D + S_OnSl_D2 + S_OnSl_D3 + S_OnSl_D4) / (aspd * yyy), event);
      //onslaughtTimer5 = setTimeout(function () { stageskill(event,5) }, (S_OnSl_D + S_OnSl_D2 + S_OnSl_D3 + S_OnSl_D4 + S_OnSl_D5) / (aspd * yyy), event);
    }
    finish["special4"] = true;
    if (event.skill.id == S_Spring && (lastSkill == S_Deb || lastSkill == S_P3 || lastSkill == S_Lockdown || lastSkill == S_ShBarrage || lastSkill == S_ShBarrage2 || lastSkill == S_SBash) && finish[lastSkill] == false) {
      zzz =30;
      duration =1840;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_Spring && finish["special"] == false && lastSkill == S_ShBarrage2) {
      zzz =30;
      duration =1840;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_Lockdown && finish[lastSkill] == false && (lastSkill == S_Deb || lastSkill == S_ShBarrage || lastSkill == S_ShBarrage2 || lastSkill == S_Spring)) {
      zzz =29;
      duration =1335;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_SBash && finish[lastSkill] == false && (lastSkill == S_Deb)) {
      zzz =29;
      duration =700;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_Deb && finish[lastSkill] == false && (lastSkill == S_P || lastSkill == S_P2 || lastSkill == S_P3 || lastSkill == S_ShBarrage || lastSkill == S_ShBarrage2)) {
      zzz =30;
      duration =825;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_Spring && finish[S_ShCo] == false) {
      zzz =30;
      duration =1840;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_Wallop && (lastSkill == S_Spring || lastSkill == S_Deb || lastSkill == S_Lockdown || lastSkill == S_ShBarrage || lastSkill == S_ShBarrage2 || lastSkill == SKILL_CHARGING || lastSkill == SKILL_CHARGING_2) && finish[lastSkill] == false) {
      zzz =30;
      duration =1890;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_Wallop && finish[S_ShCo] == false) {
      zzz =30;
      duration =1890;
      clearTimeout(RecheckTimer);
    }
    if (event.skill.id == S_Wind || event.skill.id == S_ARush || event.skill.id == S_Pledge || event.skill.id == S_Menace || event.skill.id == S_IronWill) {
      yyy = 1 / aspd;
    }
    if (event.skill.id == S_RightLeap && (((lastSkill == S_Wallop || lastSkill == SKILL_CHARGING || lastSkill == SKILL_CHARGING_2) && finish[lastSkill] == false) || !disabSkill[977])) {
      zzz =1;
    }
    if (event.skill.id == S_ShCo && SCHAX !=1) {
      yyy = yyy * SCHAX;
    }
    if (event.skill.id == S_Wallop || event.skill.id == S_OnSl) {
      var d = new Date();
      darkness = d.getTime();
    }
	
	if(event.skill.id == S_RightLeap){
		var d = new Date();
      light = d.getTime();
    }


    finish[SKILL_CHARGING] = true;
    clearTimeout(finishcheck[event.skill.id]);
    finish[event.skill.id] = false;
    atkid[event.skill.id + zzz] = atkid_base;
    atkid_base--;
    var vvv =0;

    dispatch.toClient('S_ACTION_STAGE', 9, {
      gameId: cid,
      loc: {
        x: event.loc.x,
        y: event.loc.y,
        z: event.loc.z
      },
      w: event.w,
      templateId: model,
      skill: event.skill.id + zzz,
      stage: 0,
      speed: aspd * yyy,
      ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd * yyy } : 0n),
      id: atkid[event.skill.id + zzz],
      effectScale: 1.0,
      moving: false,
      dest: { x: 0, y: 0, Z: 0 },
      target: 0n,
      animSeq: [],
    });
	
	if (event.skill.id == S_Wind || event.skill.id == S_ARush || event.skill.id == S_Pledge || event.skill.id == S_Menace || event.skill.id == S_IronWill) {
      yyy =1;
    }

    if (event.skill.id == S_Wallop) {
      if (zzz ==30) {
        WALLOPCANCEL = WALLOP_CANCEL_TIME_CHAINED;
      }
      else {
        WALLOPCANCEL = WALLOP_CANCEL_TIME_UNCHAINED;
      }
    }

    var newX;
    var newY;
    var angle = parseFloat(event.w);

    newX = Math.cos(angle) * dist;
    newY = Math.sin(angle) * dist;

    if (!safetyX) {
      finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (duration / (aspd * yyy)), event);
    }
    safetyX = false;
    lastSkillDelay = duration / aspd;
    setTimeout(function (event) {
      lastSkillEvent = {
        gameId: cid,
        loc: {
          x: collisionLocX || xloc || (event.loc.x + newX),
          y: collisionLocY || yloc || (event.loc.y + newY),
          z: collisionLocZ || zloc || (event.loc.z +2)
        },
        w: event.w,
        templateId: model,
        skill: event.skill.id + zzz,
        type: 0,
        id: atkid[event.skill.id + zzz],
      };
    }, duration / (aspd * yyy), event);
    timer[event.skill.id] = setTimeout(
      function (event) {
        if (event.skill.id == S_Wallop && lastSkill != S_Wallop && lastSkill != S_ShCo && lastSkill != SKILL_BLOCK) { return; }
        if (event.skill.id == S_Lockdown && lastSkill != S_Lockdown && lastSkill != S_ShCo && lastSkill != SKILL_BLOCK) { return; }
        if (event.skill.id == S_Deb && lastSkill != S_Deb && lastSkill != S_ShCo && lastSkill != SKILL_BLOCK) { return; }
        if (lastSkill == SKILL_CHARGING) { return; }
        if (event.skill.id == S_OnSl && lastSkill != S_OnSl && lastSkill != S_ShCo) { return; }
        if (event.skill.id != S_ShCo && lastSkill == S_ShCo && finish[S_ShCo] == false) {
          return;
        }
        if (blockActive == 1 && event.skill.id != S_ShCo && event.skill.id != S_Deb) { return; }
        if (lastSkill ==1) { return; }
        if (lastSkill ==2) { return; }

        dispatch.toClient('S_ACTION_END', 5, {
          gameId: cid,
          loc: {
            x: collisionLocX || xloc || (event.loc.x + newX),
            y: collisionLocY || yloc || (event.loc.y + newY),
            z: collisionLocZ || zloc || (event.loc.z +2)
          },
          w: event.w,
          templateId: model,
          skill: event.skill.id + zzz,
          type: 0,
          id: atkid[event.skill.id + zzz],
        });
      }, duration / (aspd * yyy), event);
  }

  dispatch.hook('S_PLAYER_CHANGE_STAMINA', 1, (event) => {
    if (!enabled) return;
    myRE = event.current;
	/*if(myRE <= 99 && checkerr ==1){
		checkerr =0;
      dispatch.toClient('S_ACTION_END', 5, {
        gameId: cid,
        loc: {
          x: xloc || lastBulk.loc.x,
          y: yloc || lastBulk.loc.y,
          z: zloc || lastBulk.loc.z
        },
        w: wloc || lastBulk.w,
        templateId: model,
        skill: lastBulk.skill.id,
        type: 10,
        id: atkid[lastBulk.skill.id],
      });
	}*/
  });

  dispatch.hook('C_START_TARGETED_SKILL', 7, (event) => {
    if (!enabled) return;
    if (blockActive ==1) {
      return false;
    }
	if(ONSLAUGHT_LOCK_DELAY && onslaughtlock && event.skill.id != S_BStep && event.skill.id != SKILL_BLOCK){
		return false;
	}
    if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
    if (!disabSkill[event.skill.id]) {
      lastSkillDelay =999999;
      if (lastSkill ==1) {
        lastSkill =2;
      }
      setTimeout(function (event) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }, 25, event);
      setTimeout(function (event) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }, 50, event);
      setTimeout(function (event) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }, 75, event);
      setTimeout(function (event) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }, 100, event);
	  setTimeout(function (event) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }, 150, event);
	  setTimeout(function (event) { dispatch.toServer('C_START_TARGETED_SKILL', 7, event); }, 200, event);
      try { clearTimeout(timer[lastSkill]); }
      catch (e) { }
      try { clearTimeout(timer[lastLastSkill]); }
      catch (e) { }
      if (job == JOB_LANCER && event.skill.id == SKILL_CHARGING) {
        charge(event);
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[SKILL_CHARGING] = false; }, GLOBAL_LOCK_DELAY);
      }
      if (job == JOB_LANCER && event.skill.id == S_Leash) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Leash] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, (S_Leash_D + S_Leash_D2),0);
        setTimeout(function (event) { stageskill(event,1); }, (S_Leash_D / aspd), event);
        canLeash = true;
        setTimeout(function () { canLeash = false; },5000);
      }
      if (job == JOB_LANCER && event.skill.id == S_MasLeash && canLeash) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_MasLeash] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, (S_MasLeash_D + S_MasLeash_D2),0);
        setTimeout(function (event) { stageskill(event,1); }, (S_MasLeash_D / aspd), event);
        canLeash = false;
      }
      lastLastSkill = lastSkill;
      lastSkill = event.skill.id;
      lastEvent = event;
    }
  });

  function repeater(key, trigger) {
    if (lastSkill == trigger && failsafe <40) {
		if(lastSkill != S_ShCo || finish[lastSkill] == false){ 
      failsafe++;
      var robot17 = require("robotjs");
      robot17.keyTap(key);
      setTimeout(function (key, trigger) { repeater(key, trigger); }, 50, key, trigger);
		}
    }
  }

  dispatch.hook('S_INSTANT_DASH', 3, (event) => {
    if (!enabled) return;
    if(event.gameId === cid) {
      return false;
    }
  });

  dispatch.hook('S_CREST_INFO', 2, (event) => {
    if (!enabled) { return };
    event.crests.forEach(function (element) {
      glyphState[element.id] = element.enable;
    });
  });

  dispatch.hook('S_CREST_APPLY', 2, (event) => {
    if (!enabled) { return };
    glyphState[event.id] = event.enable;
  });

  dispatch.hook('S_DEFEND_SUCCESS', 3, (event) => {
    if (!enabled) { return };
    if(event.gameId === cid) {
      dstance =1;
      if (autoreblock && blockActive ==1) {
        dstance =0;
        blockstate.press = false;
        dispatch.toServer('C_PRESS_SKILL', 4, blockstate);
        blockstate.press = true;
        dispatch.toServer('C_PRESS_SKILL', 4, blockstate);
      }
      yes11 =0;
      var d = new Date();
      if (lastSkill == S_Wallop && zzz == 0 && ((d.getTime() - darkness) < (Number(WALLOP_CANCEL_TIME_UNCHAINED) / aspd))) {
        yes11 = (Number(WALLOP_CANCEL_TIME_UNCHAINED) / aspd) - (d.getTime() - darkness);
      }
      if (lastSkill == S_Wallop && zzz != 0 && ((d.getTime() - darkness) < (Number(WALLOP_CANCEL_TIME_CHAINED) / aspd))) {
        yes11 = (Number(WALLOP_CANCEL_TIME_CHAINED) / aspd) - (d.getTime() - darkness);
      }
      if (lastSkill == S_OnSl && sBashGlyph && !talentState[820320] && ((d.getTime() - darkness) < (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / aspd / 1.25))) {
        yes11 = (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / aspd / 1.25) - (d.getTime() - darkness);
      }
      if (lastSkill == S_OnSl && !sBashGlyph && !talentState[820320] && ((d.getTime() - darkness) < (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / aspd))) {
        yes11 = (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / aspd) - (d.getTime() - darkness);
      }
	  if (lastSkill == S_OnSl && sBashGlyph && talentState[820320] && ((d.getTime() - darkness) < (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / (aspd * (1.25 * (1 + talentState[820320] * 5 / 700 + 75 /700)))))) {
        yes11 = (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / (aspd * (1.25 * (1 + talentState[820320] * 5 / 700 + 75 /700)))) - (d.getTime() - darkness);
      }
      if (lastSkill == S_OnSl && !sBashGlyph && talentState[820320] && ((d.getTime() - darkness) < (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / (aspd * (1 + talentState[820320] * 5 / 700 + 75 /700))))) {
        yes11 = (Number(ONSLAUGHT_AUTO_CANCEL_DELAY) / (aspd * (1 + talentState[820320] * 5 / 700 + 75 /700))) - (d.getTime() - darkness);
      }
      setTimeout(function () {
        if (lastSkill == S_Wallop && WALLOP_AUTO_COUNTER && (cdCheck[S_RightLeap] == false || !DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD)) {
          var robot222 = require("robotjs");
          robot222.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_Wallop);
        }
      }, (0 + yes11));
      setTimeout(function () {
        if (lastSkill == S_Wallop && WALLOP_AUTO_COUNTER && (cdCheck[S_RightLeap] == false || !DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD)) {
          var robot2 = require("robotjs");
          robot2.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (100 + yes11));
      setTimeout(function () {
        if (lastSkill == S_Wallop && WALLOP_AUTO_COUNTER && (cdCheck[S_RightLeap] == false || !DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD)) {
          var robot3 = require("robotjs");
          robot3.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (200 + yes11));
      setTimeout(function () {
        if (lastSkill == S_Wallop && WALLOP_AUTO_COUNTER && (cdCheck[S_RightLeap] == false || !DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD)) {
          var robot4 = require("robotjs");
          robot4.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (400 + yes11));
      setTimeout(function () {
        if (lastSkill == S_Wallop && WALLOP_AUTO_COUNTER && (cdCheck[S_RightLeap] == false || !DO_NOT_USE_IF_RIGHTEOUS_LEAP_OFF_CD)) {
          var robot5 = require("robotjs");
          robot5.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (600 + yes11));

      setTimeout(function () {
        if (lastSkill == S_OnSl && OS_AUTO_COUNTER) {
          var robot222 = require("robotjs");
          robot222.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_OnSl);
        }
      }, (0 + yes11 -5));
      setTimeout(function () {
        if (lastSkill == S_OnSl && OS_AUTO_COUNTER) {
          var robot2 = require("robotjs");
          robot2.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (100 + yes11 -5));
      setTimeout(function () {
        if (lastSkill == S_OnSl && OS_AUTO_COUNTER) {
          var robot3 = require("robotjs");
          robot3.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (200 + yes11 -5));
      setTimeout(function () {
        if (lastSkill == S_OnSl && OS_AUTO_COUNTER) {
          var robot4 = require("robotjs");
          robot4.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (400 + yes11 -5));
      setTimeout(function () {
        if (lastSkill == S_OnSl && OS_AUTO_COUNTER) {
          var robot5 = require("robotjs");
          robot5.keyTap(SHIELD_COUNTER_KEY);
        }
      }, (600 + yes11 -5));
	  if(lastSkill == S_RightLeap && LEAP_AUTO_COUNTER && (d.getTime() - light) >1230){
	  setTimeout(function () {
        if (lastSkill == S_RightLeap && LEAP_AUTO_COUNTER) {
          var robot2225 = require("robotjs");
          robot2225.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_RightLeap);
        }
      },0);
	  setTimeout(function () {
        if (lastSkill == S_RightLeap && LEAP_AUTO_COUNTER) {
          var robot2226 = require("robotjs");
          robot2226.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_RightLeap);
        }
      },50);
	  setTimeout(function () {
        if (lastSkill == S_RightLeap && LEAP_AUTO_COUNTER) {
          var robot2227 = require("robotjs");
          robot2227.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_RightLeap);
        }
      },100);
    }
	if(lastSkill == S_RightLeap && LEAP_AUTO_COUNTER && (d.getTime() - light) <1230){
		setTimeout(function () {
        if (lastSkill == S_RightLeap && LEAP_AUTO_COUNTER) {
          var robot2225 = require("robotjs");
          robot2225.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_RightLeap);
        }
      }, 1230 / aspd + light - d.getTime());
	  setTimeout(function () {
        if (lastSkill == S_RightLeap && LEAP_AUTO_COUNTER) {
          var robot2226 = require("robotjs");
          robot2226.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_RightLeap);
        }
      }, 1230 / aspd + light - d.getTime() +50);
	  setTimeout(function () {
        if (lastSkill == S_RightLeap && LEAP_AUTO_COUNTER) {
          var robot2227 = require("robotjs");
          robot2227.keyTap(SHIELD_COUNTER_KEY);
		  failsafe =0;
        repeater(SHIELD_COUNTER_KEY, S_RightLeap);
        }
      }, 1230 / aspd + light - d.getTime() +100);
	}
	}
  });

  dispatch.hook('S_EACH_SKILL_RESULT', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
    if(event.target === cid) {
      if (event.reaction.enable == true) {
        lastSkill =1;
        clearTimeout(onslaughtTimer1);
        clearTimeout(onslaughtTimer2);
        clearTimeout(onslaughtTimer3);
        clearTimeout(onslaughtTimer4);
        clearTimeout(onslaughtTimer5);
		blockActive =0;
		  dstance =0;
		  clearTimeout(blockd);
      }
    }
  });

  dispatch.hook('S_CANNOT_START_SKILL', 4, (event) => {
    if (!enabled) { return };
    if (event.skill.id == SKILL_BLOCK && lastSkill == SKILL_BLOCK && zoKk ==0) {
      dispatch.toServer('C_PRESS_SKILL', 4, lastBlock);
      if (blockActive ==0) {
        lastBlock.press = false;
        dispatch.toServer('C_PRESS_SKILL', 4, lastBlock);
        lastSkill =2;
      }
      zoKk++;
    }
	if(event.skill.id == S_Bulwark && lastSkill == S_Bulwark){
		dispatch.toServer('C_PRESS_SKILL', 4, lastBulk);
	}
  });


  dispatch.hook('S_SYSTEM_MESSAGE', 1, (event) => {
    if (!enabled) { return };
    if ((event.message == '@2059' || event.message == '@36' || event.message == '@1677') && (msgSuppress == event.message || lastSkill == S_ShCo)) {
      return false;
    }
    msgSuppress = event.message;
  });

  dispatch.hook('C_START_INSTANCE_SKILL', 7, (event) => {
	  if(ONSLAUGHT_LOCK_DELAY && onslaughtlock && event.skill.id != S_BStep && event.skill.id != SKILL_BLOCK){
		return false;
	}
    if (blockActive ==1) {
      return false;
    }
    if (lastSkill ==1) {
      lastSkill =2;
    }
    if (job == JOB_LANCER && event.skill.id == S_Giga) {
      disabSkill[event.skill.id] = true;
      var timer = setTimeout(function (event) { disabSkill[event.skill.id] = false; }, GLOBAL_LOCK_DELAY, event);
      fakeEnd_sorc_dist(event, (S_Giga_D + S_Giga_D2),0);
      setTimeout(function (event) { stageskill2(event,1); }, (S_Giga_D / aspd), event);
    }
    lastLastSkill = lastSkill;
    lastSkill = event.skill.id;
    lastEvent = event;
  });


  dispatch.hook('C_PRESS_SKILL', 4, (event) => {
    if (!enabled) return;
    lastSkillDelay =999999;
	if(ONSLAUGHT_LOCK_DELAY && onslaughtlock && event.skill.id != S_BStep && event.skill.id != SKILL_BLOCK){
		return false;
	}
    if (lastSkill ==1) {
      lastSkill =2;
    }
    if (blockActive != 1 && event.skill.id == SKILL_BLOCK && event.press == false) { return; }
	//if(finish[S_BStep] == false && event.skill.id == S_Bulwark && event.press == true){ return false;}
    //if((lastSkill == S_ShBarrage || lastSkill == S_ShBarrage2) && (finish[lastSkill] == false || finish["special"] == false) && SB_AUTO_SPRING && event.press == true){
    //  return false;
    //}
    disabSkill[977] = true;
    if (lastEvent) {
      lastEvent.loc = event.loc;
    }
    if (job == JOB_LANCER && event.skill.id == S_Bulwark && event.press == false) {
      checkerr =0;
      dispatch.toClient('S_ACTION_END', 5, {
        gameId: cid,
        loc: {
          x: xloc || event.loc.x,
          y: yloc || event.loc.y,
          z: zloc || event.loc.z
        },
        w: wloc || event.w,
        templateId: model,
        skill: event.skill.id,
        type: 10,
        id: atkid[event.skill.id],
      });
    }

    if (job == JOB_LANCER && event.skill.id == S_Bulwark && event.press == true && myRE >=1) {
		lastBulk = event;
      checkerr =1;
      xloc = false;
      yloc = false;
      zloc = false;
      wloc = false;
      collisionLocX = false;
      collisionLocY = false;
      collisionLocZ = false;
      punchCounter =0;
      force_end(lastEvent,4);
      clearTimeout(onslaughtTimer1);
      clearTimeout(onslaughtTimer2);
      clearTimeout(onslaughtTimer3);
      clearTimeout(onslaughtTimer4);
      clearTimeout(onslaughtTimer5);
      if (timer[lastSkill]) {
        clearTimeout(timer[lastSkill]);
      }
      atkid[event.skill.id] = atkid_base;
      atkid_base--;
      dispatch.toClient('S_ACTION_STAGE', 9, {
        gameId: cid,
        loc: {
          x: event.loc.x,
          y: event.loc.y,
          z: event.loc.z
        },
        w: event.w,
        templateId: model,
        skill: event.skill.id,
        stage: 0,
        speed: 1,
        ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
        id: atkid[event.skill.id],
        effectScale: 1.0,
        moving: false,
        dest: { x: 0, y: 0, Z: 0 },
        target: 0n,
        animSeq: [],
      });
      setTimeout(function (event) {
        if (lastSkill == S_Bulwark && checkerr ==1) {
          dispatch.toClient('S_ACTION_STAGE', 9, {
            gameId: cid,
            loc: {
              x: xloc || event.loc.x,
              y: yloc || event.loc.y,
              z: zloc || event.loc.z
            },
            w: wloc || event.w,
            templateId: model,
            skill: event.skill.id,
            stage: 1,
            speed: 1,
            ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
            id: atkid[event.skill.id],
            effectScale: 1.0,
            moving: false,
            dest: { x: 0, y: 0, Z: 0 },
            target: 0n,
            animSeq: [],
          });
        }
      }, S_Bulwark_D, event);
    }

    if (job == JOB_LANCER && event.skill.id == SKILL_BLOCK && event.press == false) {
      blockActive =0;
      dstance =0;
      clearTimeout(blockd);
      if (finish[S_ShCo] != false) {
        dispatch.toClient('S_ACTION_END', 5, {
          gameId: cid,
          loc: {
            x: xloc || event.loc.x,
            y: yloc || event.loc.y,
            z: zloc || event.loc.z
          },
          w: wloc || event.w,
          templateId: model,
          skill: event.skill.id,
          type: 10,
          id: atkid[event.skill.id],
        });
      }
    }
    if (job == JOB_LANCER && event.skill.id == SKILL_BLOCK && event.press == true) {
	  myRE = myRE -50;
      blockstate = event;
      punchCounter =0;
      xloc = false;
      yloc = false;
      zloc = false;
      wloc = false;
      finish[S_ShCo] = true;
      zoKk =0;
      blockActive =1;
      clearTimeout(blockd);
      blockd = setTimeout(function (event) {
        dispatch.toClient('S_ACTION_STAGE', 9, {
          gameId: cid,
          loc: {
            x: event.loc.x,
            y: event.loc.y,
            z: event.loc.z
          },
          w: event.w,
          templateId: model,
          skill: event.skill.id,
          stage: 1,
          speed: 1,
          ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
          id: atkid[event.skill.id],
          effectScale: 1.0,
          moving: false,
          dest: { x: 0, y: 0, Z: 0 },
          target: 0n,
          animSeq: [],
        });
      }, SKILL_BLOCK_D, event);
      if (finish[S_ShBarrage] == false && !SB_AUTO_SPRING) {
        finish[S_ShBarrage] = true;
        atkid[event.skill.id] = atkid_base;
        atkid_base--;
        if (lastSkill != SKILL_CHARGING) {
          force_end(lastEvent,4);
        }
        if (lastSkill == SKILL_CHARGING) {
          force_end2(event, 4, lastSkill);
        }
        setTimeout(function (event) {
          if (finish[S_ShBarrage2] != false && blockActive ==1) {
            collisionLocX = false;
            collisionLocY = false;
            collisionLocZ = false;
            punchCounter =0;
            force_end(lastEvent,4);
            clearTimeout(onslaughtTimer1);
            clearTimeout(onslaughtTimer2);
            clearTimeout(onslaughtTimer3);
            clearTimeout(onslaughtTimer4);
            clearTimeout(onslaughtTimer5);
            if (timer[lastSkill]) {
              clearTimeout(timer[lastSkill]);
            }
            dispatch.toClient('S_ACTION_STAGE', 9, {
              gameId: cid,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
              templateId: model,
              skill: event.skill.id,
              stage: 0,
              speed: 1,
              ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
              id: atkid[event.skill.id],
              effectScale: 1.0,
              moving: false,
              dest: { x: 0, y: 0, Z: 0 },
              target: 0n,
              animSeq: [],
            });
            lastLastSkill = lastSkill;
            lastSkill = event.skill.id;
            lastEvent = event;
          }
        }, 100, event);
        return;
      }
      collisionLocX = false;
      collisionLocY = false;
      collisionLocZ = false;
      punchCounter =0;
      if (lastSkill != SKILL_CHARGING) {
        try {
          force_end(lastEvent,4);
        }
        catch (e) { }
      }
      if (lastSkill == SKILL_CHARGING) {
        force_end2(event, 4, lastSkill);
      }
      clearTimeout(onslaughtTimer1);
      clearTimeout(onslaughtTimer2);
      clearTimeout(onslaughtTimer3);
      clearTimeout(onslaughtTimer4);
      clearTimeout(onslaughtTimer5);
      if (timer[lastSkill]) {
        clearTimeout(timer[lastSkill]);
      }
      atkid[event.skill.id] = atkid_base;
      atkid_base--;
      dispatch.toClient('S_ACTION_STAGE', 9, {
        gameId: cid,
        loc: {
          x: event.loc.x,
          y: event.loc.y,
          z: event.loc.z
        },
        w: event.w,
        templateId: model,
        skill: event.skill.id,
        stage: 0,
        speed: 1,
        ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
        id: atkid[event.skill.id],
        effectScale: 1.0,
        moving: false,
        dest: { x: 0, y: 0, Z: 0 },
        target: 0n,
        animSeq: [],
      });
    }
    if (event.press == true) {
      lastLastSkill = lastSkill;
      lastSkill = event.skill.id;
      lastEvent = event;
      lastBlock = event;
    }
  });

  dispatch.hook('S_START_COOLTIME_SKILL', 3, (event) => {
    if (!enabled) return;
    cdCheck[event.skill.id] = false;
    if (event.skill.id == S_Wallop) {
      setTimeout(function (event) { cdCheck[event.skill.id] = true; }, (event.cooldown - (SPRINGAUTOWALLOP_TIME / aspd)), event);
    }
    if (event.skill.id == S_ARush) {
      if (leapready && LEAP_ARUSH_NO_CANCEL) { WALLOP_CANCEL_TIME_UNCHAINED = 0; }
      setTimeout(function (event) { cdCheck[event.skill.id] = true; }, (event.cooldown - LEAP_ARUSH_NO_CANCEL_TIMER), event);
    }
    if (event.skill.id == S_Spring) {
      cdCheck["specialspring"] = false;
      setTimeout(function (event) { cdCheck["specialspring"] = true; }, event.cooldown, event);
      setTimeout(function (event) { cdCheck[event.skill.id] = true; }, (event.cooldown - (DEBAUTOSPRING_TIME / aspd)), event);
    }
    if (event.skill.id != S_Wallop && event.skill.id != S_Spring && event.skill.id != S_ARush) {
      setTimeout(function (event) { cdCheck[event.skill.id] = true; }, (event.cooldown), event);
    }
    if (event.skill.id == S_RightLeap && WALLOP_AUTO_LEAP) {
      WALLOP_CANCEL_TIME_UNCHAINED = permawallop;
      leapready = false;
      setTimeout(function () {
        leapready = true;
        if (LEAP_ARUSH_NO_CANCEL && cdCheck[S_ARush]) { return; }
        WALLOP_CANCEL_TIME_UNCHAINED =0;
      }, event.cooldown);
    }
  });

  dispatch.hook('S_ABNORMALITY_BEGIN', 4, (event) => {
    if (!enabled) return;
    if (event.target !== cid) {
      return;
    }
    if (event.id ==88202301) {
      SCHAX = 1.3;
    }
    if (event.id ==88202302) {
      SCHAX = 1.35;
    }
    if (event.id ==88202303) {
      SCHAX = 1.4;
    }
    if (event.id ==88202304) {
      SCHAX = 1.45;
    }
    if (event.id ==88202305) {
      SCHAX = 1.5;
    }
    if (event.id ==88202306) {
      SCHAX = 1.55;
    }
    if (event.id ==88202307) {
      SCHAX = 1.6;
    }
    if (event.id ==88202308) {
      SCHAX = 1.65;
    }
    if (event.id ==88202309) {
      SCHAX = 1.7;
    }
    if (event.id ==88202310) {
      SCHAX = 1.75;
    }
    if (event.id == 200701 && S_COUNTER_ARUSH_NO_CANCEL) {
      aRusha = true;
    }
  });

  dispatch.hook('S_ABNORMALITY_END', 1, (event) => {
    if (!enabled) return;
    if (event.target !== cid) {
      return;
    }
    if (event.id ==88202301) {
      SCHAX =1;
    }
    if (event.id ==88202302) {
      SCHAX =1;
    }
    if (event.id ==88202303) {
      SCHAX =1;
    }
    if (event.id ==88202304) {
      SCHAX =1;
    }
    if (event.id ==88202305) {
      SCHAX =1;
    }
    if (event.id ==88202306) {
      SCHAX =1;
    }
    if (event.id ==88202307) {
      SCHAX =1;
    }
    if (event.id ==88202308) {
      SCHAX =1;
    }
    if (event.id ==88202309) {
      SCHAX =1;
    }
    if (event.id ==88202310) {
      SCHAX =1;
    }
    if (event.id == 200701 && S_COUNTER_ARUSH_NO_CANCEL) {
      aRusha = false;
    }
  });

  dispatch.hook('C_START_SKILL', 7, (event) => {
    if (!enabled) return;
    lastSkillDelay =999999;
    if (lastSkill ==1) {
      lastSkill =2;
    }
    clearTimeout(blockd);
	if(ONSLAUGHT_LOCK_DELAY && onslaughtlock && event.skill.id != S_BStep && event.skill.id != SKILL_BLOCK){
		return false;
	}
	if((event.skill.id == S_ARush || event.skill.id == S_ARush_2 || event.skill.id == S_ARush_3) && locking){
		return false;
	}
    if (event.skill.id == S_Spring && (lastSkill != S_ShCo && lastSkill != SKILL_BLOCK && lastSkill != S_IronWill && lastSkill != S_Pledge && lastSkill != S_Deb && lastSkill != S_Lockdown && lastSkill != S_P3 && lastSkill != S_ShBarrage && lastSkill != S_ShBarrage2 && lastSkill != S_SBash) && finish[lastSkill] == false && finish[S_ShCo] != false) {
      return false;
    }

    if (event.skill.id == S_OnSl && (((lastSkill != S_IronWill && lastSkill != SKILL_BLOCK && lastSkill != S_Pledge && lastSkill != S_SBash && lastSkill != S_P && lastSkill != S_P2 && lastSkill != S_P3 && lastSkill != S_ShBarrage && lastSkill != S_ShBarrage2) && finish[lastSkill] == false) || finish[S_ShCo] == false)) {
      return false;
    }

    if (event.skill.id == S_Wallop && (lastSkill != S_ShCo && lastSkill != SKILL_BLOCK && lastSkill != S_IronWill && lastSkill != S_Pledge && lastSkill != S_Spring && lastSkill != S_Deb && lastSkill != S_Lockdown && lastSkill != S_ShBarrage && lastSkill != S_ShBarrage2 && lastSkill != SKILL_CHARGING && lastSkill != SKILL_CHARGING_2) && finish[lastSkill] == false && finish[S_ShCo] != false) {
      return false;
    }
    if (blockActive == 1 && event.skill.id != S_ShCo && event.skill.id != S_BStep && event.skill.id != S_Deb && event.skill.id != S_OnSl) {
      return false;
    }

    if (event.skill.id == S_Deb && (lastSkill != S_P && lastSkill != S_P2 && lastSkill != S_P3 && lastSkill != S_ShBarrage && lastSkill != S_ShBarrage2) && finish[lastSkill] == false) {
      return false;
    }
    if (event.skill.id == S_Deb && finish["spec5"] == false) {
      return false;
    }
    if (event.skill.id == S_RightLeap && (lastSkill != S_Wallop && lastSkill != SKILL_CHARGING && lastSkill != SKILL_CHARGING_2 && disabSkill[977]) && finish[lastSkill] == false) {
      return false;
    }
    if (disabSkill[S_ShBarrage] == true && BARRAGE_CANCEL_TIME > 0 && event.skill.id == S_ShBarrage && lastSkill == S_ShBarrage2) {
      return false;
    }
	
	if(finish[S_ChSh] == false && lastSkill == S_ChSh && (event.skill.id == S_Leash || event.skill.id == S_MasLeash || event.skill.id == S_Giga || event.skill.id == S_Infu || event.skill.id == S_BStep)){
		return false;
	}

    if (event.skill.id == S_Lockdown_2) {
      event.skill.id = S_Lockdown;
    }
    if (event.skill.id == S_SBash_2) {
      event.skill.id = S_SBash;
    }
	
	if(event.skill.id == S_ARush_2 || event.skill.id == S_ARush_3){
		event.skill.id = S_ARush;
	}

    if (event.skill.id == S_BStep && myRE <700) { return false; }
    if (event.skill.id == S_BStep && myRE < 800 && glyphState[22067] != 1 && glyphState[22089] !=1) { return false; }

    if (disabSkill[event.skill.id] == 'undefined') disabSkill[event.skill.id] = false;
    if (disabSkill[S_Spring] && !(lastSkill != S_ShCo && lastSkill != SKILL_BLOCK && lastSkill != S_IronWill && lastSkill != S_Pledge && lastSkill != S_Deb && lastSkill != S_P3 && lastSkill != S_ShBarrage2 && lastSkill != S_SBash)) { disabSkill[S_Spring] = false; }
    if (!disabSkill[event.skill.id]) {
      msgSuppress =0;
      try { clearTimeout(timer[lastSkill]); }
      catch (e) { }
      try { clearTimeout(timer[lastLastSkill]); }
      catch (e) { }
      //var xzzy = event.skill.id - 0xC000000;
      var xzzy = event.skill.type === 1 && event.skill.id <= 999999 && BLACKLIST.indexOf(event.skill.id) === -1;
      if (xzzy && event.skill.id != S_Retal) {
        setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 25, event);
        setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 50, event);
        setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 75, event);
        setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 100, event);
        setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 150, event);
        setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 200, event);
      }

      if (job == JOB_LANCER && event.skill.id == S_P) {
        if (punchCounter ==0) {
          event.skill.id = S_P;
        }
        if (punchCounter ==1) {
          event.skill.id = S_P2;
        }
        if (punchCounter ==2) {
          event.skill.id = S_P3;
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_P) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_P] = false; },100);
        fakeEnd_sorc_dist(event, S_P_D);
        clearTimeout(clearPunchCounter);
        punchCounter++;
        clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P_D);
      }

      if (job == JOB_LANCER && event.skill.id == S_P2) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_P2] = false; },100);
        fakeEnd_sorc_dist(event, S_P2_D);
        clearTimeout(clearPunchCounter);
        punchCounter++;
        clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P2_D);
      }
      if (job == JOB_LANCER && event.skill.id == S_P3) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_P3] = false; },100);
        fakeEnd_sorc_dist(event, S_P3_D);
        clearTimeout(clearPunchCounter);
        punchCounter =0;
        clearPunchCounter = setTimeout(function () { punchCounter = 0; }, S_P3_D);
      }

      if (job == JOB_LANCER && event.skill.id == S_Retal) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Retal] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_Retal_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == S_RightLeap) {
		  
		  if(AUTO_CHARGE_LEAP && lastSkill != S_Wallop){
			  if(cdCheck[SKILL_CHARGING]){
			  dispatch.toServer('C_START_TARGETED_SKILL', 7, {
				  targets: event.target,
				  skill: SKILL_CHARGING,
				  loc: event.loc,
				  w: event.w,
				  dest: event.dest,
			  });
			  lastSkill = SKILL_CHARGING;
			  finish[lastSkill] = false;
			  }
		  }
		  
		  
		  dstance =0;
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_RightLeap] = false; }, GLOBAL_LOCK_DELAY);
        if (!disabSkill[977] || ((lastSkill == S_Wallop || lastSkill == SKILL_CHARGING || lastSkill == SKILL_CHARGING_2) && finish[lastSkill] == false)) {
          if (LEAP_AUTO_CANCEL) {
            failsafe =0;
            setTimeout(function () { repeater(BLOCK_KEY, S_RightLeap); }, ((S_RightLeap_D + S_RightLeap_D2_2 + Number(LEAP_AUTO_CANCEL_DELAY)) / aspd));
          }
          fakeEnd_sorc_dist(event, (S_RightLeap_D + S_RightLeap_D2_2 + S_RightLeap_D3_2), S_RightLeap_Dist);
          setTimeout(function (event) {
            if (lastSkill == S_RightLeap) {
              var newX;
              var newY;
              var angle = parseFloat(event.w);

              newX = Math.cos(angle) * S_RightLeap_Dist;
              newY = Math.sin(angle) * S_RightLeap_Dist;
              if (collisionLocX) {
                newX =0;
                newY =0;
              }
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: collisionLocX || event.loc.x,
                  y: collisionLocY || event.loc.y,
                  z: collisionLocZ || event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: event.skill.id + 1,
                stage: 1,
                speed: aspd,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
                id: atkid[event.skill.id + 1],
                effectScale: 1.0,
                moving: false,
                dest: {
                  x: collisionLocX || (event.loc.x + newX),
                  y: collisionLocY || (event.loc.y + newY),
                  z: collisionLocZ || event.loc.z
                },
                target: 0n,
                animSeq: [],
              });
            }
          }, S_RightLeap_D / aspd, event);
          setTimeout(function (event) {
            if (lastSkill == S_RightLeap) {
              var newX;
              var newY;
              var angle = parseFloat(event.w);

              newX = Math.cos(angle) * S_RightLeap_Dist;
              newY = Math.sin(angle) * S_RightLeap_Dist;
              if (collisionLocX) {
                newX =0;
                newY =0;
              }
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: collisionLocX || (event.loc.x + newX),
                  y: collisionLocY || (event.loc.y + newY),
                  z: collisionLocZ || event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: event.skill.id + 1,
                stage: 2,
                speed: aspd,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
                id: atkid[event.skill.id + 1],
                effectScale: 1.0,
                moving: false,
                dest: {
                  x: collisionLocX || (event.loc.x + newX),
                  y: collisionLocY || (event.loc.y + newY),
                  z: collisionLocZ || event.loc.z
                },
                target: 0n,
                animSeq: [],
              });
            }
          }, (S_RightLeap_D + S_RightLeap_D2_2) / aspd, event);
        }
        else {
          if (LEAP_AUTO_CANCEL) {
            failsafe =0;
            setTimeout(function () { repeater(BLOCK_KEY, S_RightLeap); }, ((S_RightLeap_D + S_RightLeap_D2_1 + Number(LEAP_AUTO_CANCEL_DELAY) * 1.4) / aspd));
          }
          fakeEnd_sorc_dist(event, (S_RightLeap_D + S_RightLeap_D2_1 + S_RightLeap_D3_1), S_RightLeap_Dist);
          setTimeout(function (event) {
            if (lastSkill == S_RightLeap) {
              var newX;
              var newY;
              var angle = parseFloat(event.w);

              newX = Math.cos(angle) * S_RightLeap_Dist;
              newY = Math.sin(angle) * S_RightLeap_Dist;
              if (collisionLocX) {
                newX =0;
                newY =0;
              }
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: collisionLocX || event.loc.x,
                  y: collisionLocY || event.loc.y,
                  z: collisionLocZ || event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: event.skill.id + 0,
                stage: 1,
                speed: aspd,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
                id: atkid[event.skill.id + 0],
                effectScale: 1.0,
                moving: false,
                dest: {
                  x: collisionLocX || (event.loc.x + newX),
                  y: collisionLocY || (event.loc.y + newY),
                  z: collisionLocZ || event.loc.z
                },
                target: 0n,
                animSeq: [],
              });
            }
          }, S_RightLeap_D / aspd, event);
          setTimeout(function (event) {
            if (lastSkill == S_RightLeap) {
              var newX;
              var newY;
              var angle = parseFloat(event.w);

              newX = Math.cos(angle) * S_RightLeap_Dist;
              newY = Math.sin(angle) * S_RightLeap_Dist;
              if (collisionLocX) {
                newX =0;
                newY =0;
              }
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: collisionLocX || (event.loc.x + newX),
                  y: collisionLocY || (event.loc.y + newY),
                  z: collisionLocZ || event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: event.skill.id + 0,
                stage: 2,
                speed: aspd,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: aspd } : 0n),
                id: atkid[event.skill.id + 0],
                effectScale: 1.0,
                moving: false,
                des: {
                  x: collisionLocX || (event.loc.x + newX),
                  y: collisionLocY || (event.loc.y + newY),
                  z: collisionLocZ || event.loc.z
                },
                target: 0n,
                animSeq: [],
              });
            }
          }, (S_RightLeap_D + S_RightLeap_D2_1) / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_DivineAegis) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_DivineAegis] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_DivineAegis_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == S_OnSl) {
		  dstance =0;
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_OnSl] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, (S_OnSl_D + S_OnSl_D2 + S_OnSl_D3 + S_OnSl_D4 + S_OnSl_D5 + S_OnSl_D6),480);
		onslaughtlock = true;
		if(!sBashGlyph){
			if(talentState[820320]){
				setTimeout(function () { onslaughtlock = false; }, ((ONSLAUGHT_AUTO_CANCEL_DELAY -300) / (aspd * (1 + talentState[820320] * 5 / 700 + 75 /700))));
			}
			if(!talentState[820320]){
				setTimeout(function () { onslaughtlock = false; }, ((ONSLAUGHT_AUTO_CANCEL_DELAY -300) / aspd));
			}
		}
		if(sBashGlyph){
			if(talentState[820320]){
				setTimeout(function () { onslaughtlock = false; }, ((ONSLAUGHT_AUTO_CANCEL_DELAY -300) / (aspd * (1.25 * (1 + talentState[820320] * 5 / 700 + 75 /700)))));
			}
			if(!talentState[820320]){
				setTimeout(function () { onslaughtlock = false; }, ((ONSLAUGHT_AUTO_CANCEL_DELAY -300) / aspd / 1.25));
			}
		}
      }

      if (job == JOB_LANCER && event.skill.id == S_ChSh) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_ChSh] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_ChSh_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == S_SBash) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_SBash] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_SBash_D,0);
        if (glyphState[22035] ==1) {
          sBashGlyph = true;
          setTimeout(function () { sBashGlyph = false; },5000);
        }
        if (SBASHAUTOONSLAUGHT_TIME > 0 && cdCheck[S_OnSl] != false) {
          setTimeout(function (event) {
            if (lastSkill != S_SBash) { return; }
            if (typeof lastEvent != 'undefined') {
              force_end(lastEvent,4);
            }
            dispatch.toServer('C_START_SKILL', 7, {
              skill: S_OnSl,
              w: event.w,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              dest: {
                x: event.dest.x,
                y: event.dest.y,
                z: event.dest.z
              },
              unk: event.unk,
              moving: event.moving,
              continue: event.continue,
              target: event.target,
              unk2: event.unk2,
            });
            if (timer[lastSkill]) {
              clearTimeout(timer[lastSkill]);
            }
            fakeEnd_sorc_dist(event, S_OnSl,480);
            lastLastSkill = lastSkill;
            lastSkill = S_OnSl;
            lastEvent = {
              skill: S_OnSl,
              w: event.w,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              dest: {
                x: event.dest.x,
                y: event.dest.y,
                z: event.dest.z
              },
              unk: event.unk,
              moving: event.moving,
              continue: event.continue,
              target: event.target,
              unk2: event.unk2,
            };
          }, SBASHAUTOONSLAUGHT_TIME / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_GShout) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_GShout] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_GShout_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == S_ShCo && ((dstance == 1 && (finish[S_Wallop] == false || finish[S_RightLeap] == false || finish[S_OnSl] == false || blockActive ==1)))) {
        setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 250, event);
		setTimeout(function (event) { dispatch.toServer('C_START_SKILL', 7, event); }, 300, event);
		disabSkill[event.skill.id] = true;
        disabSkill[9975] = true;
        setTimeout(function () { disabSkill[9975] = false; }, S_ShCo_D / aspd);
        var timer = setTimeout(function () { disabSkill[S_ShCo] = false; }, GLOBAL_LOCK_DELAY);
        clearTimeout(onslaughtTimer1);
        clearTimeout(onslaughtTimer2);
        clearTimeout(onslaughtTimer3);
        clearTimeout(onslaughtTimer4);
        clearTimeout(onslaughtTimer5);
        fakeEnd_sorc_dist(event, S_ShCo_D,0);
        dstance =0;
        if (S_COUNTER_CANCEL_TIME > 0 && myRE > 49 && (!S_COUNTER_SPRING_NO_CANCEL || !cdCheck[S_Spring]) && !aRusha) {
          setTimeout(function (event) {
            if (lastSkill != S_ShCo && lastSkill != SKILL_BLOCK) { return; }
            dispatch.toServer('C_PRESS_SKILL', 4, {
              skill: SKILL_BLOCK,
              press: true,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
            });
            setTimeout(function (event) {
              dispatch.toServer('C_PRESS_SKILL', 4, {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              });
              atkid[SKILL_BLOCK] = atkid_base;
              atkid_base--;
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                stage: 0,
                speed: 1,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                id: atkid[SKILL_BLOCK],
                effectScale: 1.0,
                moving: false,
                dest: { x: 0, y: 0, Z: 0 },
                target: 0n,
                animSeq: [],
              });
              if (typeof lastEvent != 'undefined') {
                force_end(lastEvent,6);
              }
              lastSkill = SKILL_BLOCK;
              lastEvent = {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              };
              setTimeout(function (event) {
                finish[S_ShCo] = true;
                dispatch.toClient('S_ACTION_END', 5, {
                  gameId: cid,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  w: event.w,
                  templateId: model,
                  skill: SKILL_BLOCK,
                  type: 10,
                  id: atkid[SKILL_BLOCK],
                });
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, S_COUNTER_CANCEL_TIME / aspd / yyy, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_Deb) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Deb] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_Deb_D,0);
        if (DEBAUTOSPRING_TIME > 0 && cdCheck[S_Spring] != false) {
          setTimeout(function (event) {
            if (lastSkill != S_Deb) { return; }
            if (typeof lastEvent != 'undefined') {
              force_end(lastEvent,4);
            }
            setTimeout(function (event) {
              dispatch.toServer('C_START_SKILL', 7, {
                skill: S_Spring,
                w: event.w,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                dest: {
                  x: event.dest.x,
                  y: event.dest.y,
                  z: event.dest.z
                },
                unk: event.unk,
                moving: event.moving,
                continue: event.continue,
                target: event.target,
                unk2: event.unk2,
              });
              lastSkill == S_Spring;
              if (DEB_CANCEL_TIME > 0 && myRE >49) {
                setTimeout(function (event) {
                  if (lastSkill != S_Spring) { return; }
                  dispatch.toServer('C_PRESS_SKILL', 4, {
                    skill: SKILL_BLOCK,
                    press: true,
                    loc: {
                      x: event.loc.x,
                      y: event.loc.y,
                      z: event.loc.z
                    },
                    w: event.w,
                  });
                  setTimeout(function (event) {
                    dispatch.toServer('C_PRESS_SKILL', 4, {
                      skill: SKILL_BLOCK,
                      press: false,
                      loc: {
                        x: event.loc.x,
                        y: event.loc.y,
                        z: event.loc.z
                      },
                      w: event.w,
                    });
                    atkid[SKILL_BLOCK] = atkid_base;
                    atkid_base--;
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                      gameId: cid,
                      loc: {
                        x: event.loc.x,
                        y: event.loc.y,
                        z: event.loc.z
                      },
                      w: event.w,
                      templateId: model,
                      skill: SKILL_BLOCK,
                      stage: 0,
                      speed: 1,
                      ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                      id: atkid[SKILL_BLOCK],
                      effectScale: 1.0,
                      moving: false,
                      dest: { x: 0, y: 0, Z: 0 },
                      target: 0n,
                      animSeq: [],
                    });
                    if (typeof lastEvent != 'undefined') {
                      force_end(lastEvent,6);
                    }
                    lastSkill = SKILL_BLOCK;
                    lastEvent = {
                      skill: SKILL_BLOCK,
                      press: false,
                      loc: {
                        x: event.loc.x,
                        y: event.loc.y,
                        z: event.loc.z
                      },
                      w: event.w,
                    };
                    setTimeout(function (event) {
                      dispatch.toClient('S_ACTION_END', 5, {
                        gameId: cid,
                        loc: {
                          x: event.loc.x,
                          y: event.loc.y,
                          z: event.loc.z
                        },
                        w: event.w,
                        templateId: model,
                        skill: SKILL_BLOCK,
                        type: 10,
                        id: atkid[SKILL_BLOCK],
                      });
                    }, AUTOBLOCKDELAY, event);
                  }, AUTOBLOCKDELAY, event);
                  return;
                }, SPRING_ATTACK_CANCEL_TIME / aspd, event);
              }
              setTimeout(function (event) {
                fakeEnd_sorc_dist(event, S_Spring_D,0);
                finish["special3"] = false;
                setTimeout(function () { finish["special3"] = true; }, (S_Deb / aspd));
                lastLastSkill = lastSkill;
                lastSkill = S_Spring;
                lastEvent = {
                  skill: S_Spring,
                  w: event.w,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  dest: {
                    x: event.dest.x,
                    y: event.dest.y,
                    z: event.dest.z
                  },
                  unk: event.unk,
                  moving: event.moving,
                  continue: event.continue,
                  target: event.target,
                  unk2: event.unk2,
                };
                clearTimeout(finishcheck);
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, DEBAUTOSPRING_TIME / aspd, event);
        }

        if (DEB_CANCEL_TIME > 0 && myRE > 49 && (cdCheck[S_Spring] == false || DEBAUTOSPRING_TIME ==0)) {
          setTimeout(function (event) {
            if (lastSkill != S_Deb) { return; }
            dispatch.toServer('C_PRESS_SKILL', 4, {
              skill: SKILL_BLOCK,
              press: true,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
            });
            setTimeout(function (event) {
              dispatch.toServer('C_PRESS_SKILL', 4, {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              });
              atkid[SKILL_BLOCK] = atkid_base;
              atkid_base--;
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                stage: 0,
                speed: 1,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                id: atkid[SKILL_BLOCK],
                effectScale: 1.0,
                moving: false,
                dest: { x: 0, y: 0, Z: 0 },
                target: 0n,
                animSeq: [],
              });
              if (typeof lastEvent != 'undefined') {
                force_end(lastEvent,6);
              }
              lastSkill = SKILL_BLOCK;
              lastEvent = {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              };
              setTimeout(function (event) {
                dispatch.toClient('S_ACTION_END', 5, {
                  gameId: cid,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  w: event.w,
                  templateId: model,
                  skill: SKILL_BLOCK,
                  type: 10,
                  id: atkid[SKILL_BLOCK],
                });
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, DEB_CANCEL_TIME / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_Infu) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Infu] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_Infu_D,0);
        if (INFURIATE_CANCEL_TIME > 0 && myRE >49) {
          setTimeout(function (event) {
            if (lastSkill != S_Infu) { return; }
            dispatch.toServer('C_PRESS_SKILL', 4, {
              skill: SKILL_BLOCK,
              press: true,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
            });
            setTimeout(function (event) {
              dispatch.toServer('C_PRESS_SKILL', 4, {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              });
              atkid[SKILL_BLOCK] = atkid_base;
              atkid_base--;
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                stage: 0,
                speed: 1,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                id: atkid[SKILL_BLOCK],
                effectScale: 1.0,
                moving: false,
                dest: { x: 0, y: 0, Z: 0 },
                target: 0n,
                animSeq: [],
              });
              if (typeof lastEvent != 'undefined') {
                force_end(lastEvent,6);
              }
              lastSkill = SKILL_BLOCK;
              lastEvent = {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              };
              setTimeout(function (event) {
                dispatch.toClient('S_ACTION_END', 5, {
                  gameId: cid,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  w: event.w,
                  templateId: model,
                  skill: SKILL_BLOCK,
                  type: 10,
                  id: atkid[SKILL_BLOCK],
                });
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, INFURIATE_CANCEL_TIME / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_Spring) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Spring] = false; }, GLOBAL_LOCK_DELAY);
        disabSkill[5555] = true;
        var timer2 = setTimeout(function () { disabSkill[5555] = false; }, 500 / aspd);
        fakeEnd_sorc_dist(event, S_Spring_D,0);
        if (SPRINGAUTOWALLOP_TIME > 0 && cdCheck[S_Wallop] != false && !SPRING_WALLOP_NO_CANCEL) {
          setTimeout(function (event) {
            if (lastSkill != S_Spring) { return; }
            if (typeof lastEvent != 'undefined') {
              force_end(lastEvent,4);
            }
            setTimeout(function (event) {
              dispatch.toServer('C_START_SKILL', 7, {
                skill: S_Wallop,
                w: event.w,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                dest: {
                  x: event.dest.x,
                  y: event.dest.y,
                  z: event.dest.z
                },
                unk: event.unk,
                moving: event.moving,
                continue: event.continue,
                target: event.target,
                unk2: event.unk2,
              });
              lastSkill = S_Wallop;
              if (WALLOP_CANCEL_TIME_CHAINED > 0 && myRE > 49 && WALLOP_CANCEL_TIME_UNCHAINED >0) {
                setTimeout(function (event) {
                  if (lastSkill != S_Wallop) { return; }
                  dispatch.toServer('C_PRESS_SKILL', 4, {
                    skill: SKILL_BLOCK,
                    press: true,
                    loc: {
                      x: event.loc.x,
                      y: event.loc.y,
                      z: event.loc.z
                    },
                    w: event.w,
                  });
                  setTimeout(function (event) {
                    dispatch.toServer('C_PRESS_SKILL', 4, {
                      skill: SKILL_BLOCK,
                      press: false,
                      loc: {
                        x: event.loc.x,
                        y: event.loc.y,
                        z: event.loc.z
                      },
                      w: event.w,
                    });
                    atkid[SKILL_BLOCK] = atkid_base;
                    atkid_base--;
                    dispatch.toClient('S_ACTION_STAGE', 9, {
                      gameId: cid,
                      loc: {
                        x: event.loc.x,
                        y: event.loc.y,
                        z: event.loc.z
                      },
                      w: event.w,
                      templateId: model,
                      skill: SKILL_BLOCK,
                      stage: 0,
                      speed: 1,
                      ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                      id: atkid[SKILL_BLOCK],
                      effectScale: 1.0,
                      moving: false,
                      dest: { x: 0, y: 0, Z: 0 },
                      target: 0n,
                      animSeq: [],
                    });
                    if (typeof lastEvent != 'undefined') {
                      force_end(lastEvent,6);
                    }
                    lastSkill = SKILL_BLOCK;
                    lastEvent = {
                      skill: SKILL_BLOCK,
                      press: false,
                      loc: {
                        x: event.loc.x,
                        y: event.loc.y,
                        z: event.loc.z
                      },
                      w: event.w,
                    };
                    setTimeout(function (event) {
                      dispatch.toClient('S_ACTION_END', 5, {
                        gameId: cid,
                        loc: {
                          x: event.loc.x,
                          y: event.loc.y,
                          z: event.loc.z
                        },
                        w: event.w,
                        templateId: model,
                        skill: SKILL_BLOCK,
                        type: 10,
                        id: atkid[SKILL_BLOCK],
                      });
                    }, AUTOBLOCKDELAY, event);
                  }, AUTOBLOCKDELAY, event);
                  return;
                }, WALLOPCANCEL / aspd, event);
              }
              setTimeout(function (event) {
                fakeEnd_sorc_dist(event, S_Wallop_D,100);
                finish["special2"] = false;
                setTimeout(function () { finish["special2"] = true; }, (S_Spring_D / aspd));
                finish["spec5"] = false;
                setTimeout(function () { finish["spec5"] = true; }, (WALLOP_CANCEL_TIME_CHAINED / aspd));
                lastLastSkill = lastSkill;
                lastSkill = S_Wallop;
                if (lastSkill == S_Wallop && WALLOP_AUTO_LEAP) {
                  setTimeout(function () {
                    if (LEAP_ARUSH_NO_CANCEL && cdCheck[S_ARush]) { return; }
                    failsafe =0;
                    repeater(LEAP_KEY, S_Wallop);
                  }, 100 / aspd);
                }
                lastEvent = {
                  skill: S_Wallop,
                  w: event.w,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  dest: {
                    x: event.dest.x,
                    y: event.dest.y,
                    z: event.dest.z
                  },
                  unk: event.unk,
                  moving: event.moving,
                  continue: event.continue,
                  target: event.target,
                  unk2: event.unk2,
                };
                clearTimeout(finishcheck);
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, SPRINGAUTOWALLOP_TIME / aspd, event);
        }

        if (SPRING_ATTACK_CANCEL_TIME > 0 && myRE > 49 && (cdCheck[S_Wallop] == false || SPRINGAUTOWALLOP_TIME ==0) && (!SPRING_WALLOP_NO_CANCEL || (cdCheck[S_Wallop] == false))) {
          setTimeout(function (event) {
            if (lastSkill != S_Spring) { return; }
            dispatch.toServer('C_PRESS_SKILL', 4, {
              skill: SKILL_BLOCK,
              press: true,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
            });
            setTimeout(function (event) {
              dispatch.toServer('C_PRESS_SKILL', 4, {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              });
              atkid[SKILL_BLOCK] = atkid_base;
              atkid_base--;
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                stage: 0,
                speed: 1,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                id: atkid[SKILL_BLOCK],
                effectScale: 1.0,
                moving: false,
                dest: { x: 0, y: 0, Z: 0 },
                target: 0n,
                animSeq: [],
              });
              if (typeof lastEvent != 'undefined') {
                force_end(lastEvent,6);
              }
              lastSkill = SKILL_BLOCK;
              lastEvent = {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              };
              setTimeout(function (event) {
                dispatch.toClient('S_ACTION_END', 5, {
                  gameId: cid,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  w: event.w,
                  templateId: model,
                  skill: SKILL_BLOCK,
                  type: 10,
                  id: atkid[SKILL_BLOCK],
                });
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, SPRING_ATTACK_CANCEL_TIME / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_Wind) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Wind] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_Wind_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == S_ARush) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_ARush] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_ARush_D,0);
			if (ARUSH_X) {
					var robot19 = require("robotjs");
					robot19.keyTap(X_KEY);
					robot19.keyTap(Y_KEY);
					robot19.keyTap(Z_KEY);
				}
      }

      if (job == JOB_LANCER && event.skill.id == S_ShBarrage) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_ShBarrage] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_ShBarrage_D,130);
        if (BARRAGE_CANCEL_TIME > 0 && myRE >49) {
          setTimeout(function (event) {
            if (event.moving == true && SB_CANCEL_TOGGLE) { return; }
            if (lastSkill != S_ShBarrage) { return; }
            if (typeof lastEvent != 'undefined') {
              force_end(lastEvent,4);
            }
            dispatch.toServer('C_PRESS_SKILL', 4, {
              skill: SKILL_BLOCK,
              press: true,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
            });
            setTimeout(function (event) {
              dispatch.toServer('C_PRESS_SKILL', 4, {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              });
              atkid[SKILL_BLOCK] = atkid_base;
              atkid_base--;
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                stage: 0,
                speed: 1,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                id: atkid[SKILL_BLOCK],
                effectScale: 1.0,
                moving: false,
                dest: { x: 0, y: 0, Z: 0 },
                target: 0n,
                animSeq: [],
              });
              dispatch.toClient('S_ACTION_END', 5, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                type: 10,
                id: atkid[SKILL_BLOCK],
              });
              dispatch.toServer('C_START_SKILL', 7, {
                skill: S_ShBarrage2,
                w: event.w,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                dest: {
                  x: event.dest.x,
                  y: event.dest.y,
                  z: event.dest.z
                },
                unk: event.unk,
                moving: event.moving,
                continue: event.continue,
                target: event.target,
                unk2: event.unk2,
              });
              setTimeout(function (event) {
                fakeEnd_sorc_dist(event, S_ShBarrage2_D,100);
                finish["special"] = false;
                finish[S_ShBarrage] = true;
                if (BARRAGE_SPRINGLOCK >0) {
                  disabSkill[S_Spring] = true;
                  setTimeout(function () {
                    disabSkill[S_Spring] = false;
                  }, BARRAGE_SPRINGLOCK / aspd);
                }
                setTimeout(function () { finish["special"] = true; }, (S_ShBarrage2_D / aspd));
                lastLastSkill = lastSkill;
                lastSkill = S_ShBarrage2;
                if (lastSkill == S_ShBarrage2 && SB_AUTO_SPRING) {
                  setTimeout(function () {
                    failsafe =0;
                    repeater(SPRING_KEY, S_ShBarrage2);
                  }, SPRING_BUG_TIME / aspd);
                }
                lastEvent = {
                  skill: S_ShBarrage2,
                  w: event.w,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  dest: {
                    x: event.dest.x,
                    y: event.dest.y,
                    z: event.dest.z
                  },
                  unk: event.unk,
                  moving: event.moving,
                  continue: event.continue,
                  target: event.target,
                  unk2: event.unk2,
                };
                clearTimeout(finishcheck);
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, BARRAGE_CANCEL_TIME / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_ShBarrage2) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_ShBarrage2] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_ShBarrage2_D,100);
      }

      if (job == JOB_LANCER && event.skill.id == S_Pledge) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Pledge] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_Pledge_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == S_Menace) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Menace] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, (S_Menace_D + S_Menace_D2),0);
        setTimeout(function (event) { stageskill(event,1); }, S_Menace_D, event);
      }

      if (job == JOB_LANCER && event.skill.id == S_Lockdown) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Lockdown] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_Lockdown_D,0);
        if (LOCKDOWN_CANCEL_TIME > 0 && myRE >49) {
          setTimeout(function (event) {
            if (lastSkill != S_Lockdown) { return; }
            if (cdCheck["specialspring"] != false && LOCKDOWN_AUTO_SPRING) {
              failsafe =0;
              repeater(SPRING_KEY, S_Lockdown);
              return;
            }
            dispatch.toServer('C_PRESS_SKILL', 4, {
              skill: SKILL_BLOCK,
              press: true,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
            });
            setTimeout(function (event) {
              dispatch.toServer('C_PRESS_SKILL', 4, {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              });
              atkid[SKILL_BLOCK] = atkid_base;
              atkid_base--;
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                stage: 0,
                speed: 1,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                id: atkid[SKILL_BLOCK],
                effectScale: 1.0,
                moving: false,
                dest: { x: 0, y: 0, Z: 0 },
                target: 0n,
                animSeq: [],
              });
              if (typeof lastEvent != 'undefined') {
                force_end(lastEvent,6);
              }
              lastSkill = SKILL_BLOCK;
              lastEvent = {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              };
              setTimeout(function (event) {
                dispatch.toClient('S_ACTION_END', 5, {
                  gameId: cid,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  w: event.w,
                  templateId: model,
                  skill: SKILL_BLOCK,
                  type: 10,
                  id: atkid[SKILL_BLOCK],
                });
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, LOCKDOWN_CANCEL_TIME / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_IronWill) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_IronWill] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_IronWill_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == S_Wallop) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_Wallop] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_Wallop_D,0);
        if (WALLOP_CANCEL_TIME_CHAINED > 0 && myRE > 49 && WALLOP_CANCEL_TIME_UNCHAINED >0) {
          setTimeout(function (event) {
            if (lastSkill != S_Wallop) { return; }
            dstance =0;
            dispatch.toServer('C_PRESS_SKILL', 4, {
              skill: SKILL_BLOCK,
              press: true,
              loc: {
                x: event.loc.x,
                y: event.loc.y,
                z: event.loc.z
              },
              w: event.w,
            });
            setTimeout(function (event) {
              dispatch.toServer('C_PRESS_SKILL', 4, {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              });
              atkid[SKILL_BLOCK] = atkid_base;
              atkid_base--;
              dispatch.toClient('S_ACTION_STAGE', 9, {
                gameId: cid,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
                templateId: model,
                skill: SKILL_BLOCK,
                stage: 0,
                speed: 1,
                ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                id: atkid[SKILL_BLOCK],
                effectScale: 1.0,
                moving: false,
                dest: { x: 0, y: 0, Z: 0 },
                target: 0n,
                animSeq: [],
              });
              if (typeof lastEvent != 'undefined') {
                force_end(lastEvent,6);
              }
              lastSkill = SKILL_BLOCK;
              lastEvent = {
                skill: SKILL_BLOCK,
                press: false,
                loc: {
                  x: event.loc.x,
                  y: event.loc.y,
                  z: event.loc.z
                },
                w: event.w,
              };
              setTimeout(function (event) {
                dispatch.toClient('S_ACTION_END', 5, {
                  gameId: cid,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  w: event.w,
                  templateId: model,
                  skill: SKILL_BLOCK,
                  type: 10,
                  id: atkid[SKILL_BLOCK],
                });
              }, AUTOBLOCKDELAY, event);
            }, AUTOBLOCKDELAY, event);
            return;
          }, WALLOPCANCEL / aspd, event);
        }
      }

      if (job == JOB_LANCER && event.skill.id == S_BStep) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_BStep] = false; }, (S_BStep_D -200) / aspd);
        clearTimeout(onslaughtTimer1);
        clearTimeout(onslaughtTimer2);
        clearTimeout(onslaughtTimer3);
        clearTimeout(onslaughtTimer4);
        clearTimeout(onslaughtTimer5);
        if (timer[lastSkill]) {
          clearTimeout(timer[lastSkill]);
        }
        if (blockActive ==1) {
          blockActive =0;
          dispatch.toClient('S_ACTION_END', 5, {
            gameId: cid,
            loc: {
              x: event.loc.x,
              y: event.loc.y,
              z: event.loc.z
            },
            w: event.w,
            templateId: model,
            skill: SKILL_BLOCK,
            type: 10,
            id: atkid[SKILL_BLOCK],
          });
        }
        fakeEnd_sorc_dist(event, S_BStep_D, -150);
      }

      if (job == JOB_LANCER && event.skill.id == S_RCry) {
        disabSkill[event.skill.id] = true;
        var timer = setTimeout(function () { disabSkill[S_RCry] = false; }, GLOBAL_LOCK_DELAY);
        fakeEnd_sorc_dist(event, S_RCry_D,0);
      }

      if (job == JOB_LANCER && event.skill.id == SKILL_CHARGING_2) {
        fakeEnd_sorc(event, SKILL_CHARGING_2_DURATION);
      }
    }
    lastLastSkill = lastSkill;
    lastSkill = event.skill.id;
    lastEvent = event;
    if (lastSkill == S_SBash && SB_AUTO_ONSLAUGHTER) {
      setTimeout(function () {
        failsafe =0;
        repeater(ONSLAUGHT_KEY, S_SBash);
      }, 300 / aspd);
    }
	if (lastSkill == S_ShCo && COUNTER_AUTO_SPRING) {
      setTimeout(function () {
        failsafe =0;
        repeater(SPRING_KEY, S_ShCo);
      }, SPRING_BUG_TIME / aspd);
    }
    if (lastSkill == S_ShBarrage2 && SB_AUTO_SPRING) {
      setTimeout(function () {
        failsafe =0;
        repeater(SPRING_KEY, S_ShBarrage2);
      }, SPRING_BUG_TIME / aspd);
    }
	if (lastSkill == S_ShBarrage2 && SBarrage_AUTO_ONSLAUGHT) {
      setTimeout(function () {
        failsafe =0;
        repeater(ONSLAUGHT_KEY, S_ShBarrage2);
      }, 0 / aspd);
    }
    if (lastSkill == S_Wallop && WALLOP_AUTO_LEAP) {
      setTimeout(function () {
        if (LEAP_ARUSH_NO_CANCEL && cdCheck[S_ARush]) { return; }
        failsafe =0;
        repeater(LEAP_KEY, S_Wallop);
      }, 100 / aspd);
    }
	if (lastSkill == S_P && AUTO_ATTACK_CANCEL) {
      setTimeout(function () {
        failsafe =0;
        repeater(BLOCK_KEY, S_P);
      }, AUTO_ATTACK_CANCEL_DELAY / aspd);
    }
	if (lastSkill == S_P && AUTO_ATTACK_ONSLAUGHT && lastEvent.moving == false) {
      setTimeout(function () {
        failsafe =0;
        repeater(ONSLAUGHT_KEY, S_P);
      },0);
    }
    if (lastSkill == S_OnSl && ONSLAUGHT_AUTO_CANCEL) {
      if (sBashGlyph) {
        failsafe =0;
		if(ONSLAUGHT_AUTO_CANCEL && dstance !=1){
			if(talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / (aspd * (1.25 * (1 + talentState[820320] * 5 / 700 + 75 /700)))));
			}
			if(!talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / aspd / 1.25));
			}
		}
		if(!ONSLAUGHT_AUTO_CANCEL){
			if(talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / (aspd * (1.25 * (1 + talentState[820320] * 5 / 700 + 75 /700)))));
			}
			if(!talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / aspd / 1.25));
			}
		}
      }
      if (!sBashGlyph) {
        failsafe =0;
		if(ONSLAUGHT_AUTO_CANCEL && dstance !=1){
			if(talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / (aspd * (1 + talentState[820320] * 5 / 700 + 75 /700))));
			}
			if(!talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / aspd));
			}
		}
		if(!ONSLAUGHT_AUTO_CANCEL){
			if(talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / (aspd * (1 + talentState[820320] * 5 / 700 + 75 /700))));
			}
			if(!talentState[820320]){
				setTimeout(function () { repeater(BLOCK_KEY, S_OnSl); }, (ONSLAUGHT_AUTO_CANCEL_DELAY / aspd));
			}
		}
      }
    }
    if (lastSkill == S_ChSh && AGGRO_SHOUT_AUTO_CANCEL) {
      if (glyphState[22085] == 1 || glyphState[22056] ==1) {
        failsafe =0;
        setTimeout(function () { repeater(BLOCK_KEY, S_ChSh); }, (AGGRO_SHOUT_AUTO_CANCEL_DELAY / aspd / 1.25));
      }
      if (glyphState[22085] != 1 && glyphState[22056] !=1) {
        failsafe =0;
        setTimeout(function () { repeater(BLOCK_KEY, S_ChSh); }, (AGGRO_SHOUT_AUTO_CANCEL_DELAY / aspd));
      }
    }
  });

  dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67118112);
    if (!enabled) return;
    if(event.gameId === cid) {
      var d = new Date();
      if (event.stage ==0) {
        lastSkillTime[1] = d.getTime();
        lastSkillTime[3] = event.skill.id;
      }
      //var xzzy = event.skill.id - 0xC000000;
      var xzzy = event.skill.type ===1;

      if (!xzzy) {
        lastSkill =1;
      }
      if (job == JOB_LANCER && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3)) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Retal) {
        if (Ignore1) {
          fakeEnd_sorc_dist(event, S_Retal_D,0);
          lastSkill = S_Retal;
        }
        return false;
      }

      if (job == JOB_LANCER && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING_2)) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == SKILL_BLOCK) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_OnSl || event.skill.id == (S_OnSl +30))) {
        zloc = event.loc.z;
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_ChSh) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_SBash || event.skill.id == S_SBash_2 || event.skill.id == (S_SBash +29))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_GShout) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_ShCo) {
        if (!H1_EXPERIMENT) {
          if (disabSkill[9975] == false) {
            finish[event.skill.id] = false;
            finishcheck[event.skill.id] = setTimeout(function (event) { finish[event.skill.id] = true; }, (S_ShCo_D / event.speed), event);
            lastSkill = event.skill.id;
            disabSkill[9955] = true;

            disabSkill[event.skill.id] = true;
            var timer = setTimeout(function () { disabSkill[S_ShCo] = false; }, GLOBAL_LOCK_DELAY);
            clearTimeout(onslaughtTimer1);
            clearTimeout(onslaughtTimer2);
            clearTimeout(onslaughtTimer3);
            clearTimeout(onslaughtTimer4);
            clearTimeout(onslaughtTimer5);
            dstance =0;
			if (lastSkill == S_ShCo && COUNTER_AUTO_SPRING) {
				  setTimeout(function () {
					failsafe =0;
					repeater(SPRING_KEY, S_ShCo);
				  }, SPRING_BUG_TIME / aspd);
				}
            if (S_COUNTER_CANCEL_TIME > 0 && myRE > 49 && (!S_COUNTER_SPRING_NO_CANCEL || !cdCheck[S_Spring]) && !aRusha) {
              setTimeout(function (event) {
                if (lastSkill != S_ShCo && lastSkill != SKILL_BLOCK) { return; }
                if (!(!S_COUNTER_SPRING_NO_CANCEL || !cdCheck[S_Spring])) { return; }
                dispatch.toServer('C_PRESS_SKILL', 4, {
                  skill: SKILL_BLOCK,
                  press: true,
                  loc: {
                    x: event.loc.x,
                    y: event.loc.y,
                    z: event.loc.z
                  },
                  w: event.w,
                });
                setTimeout(function (event) {
                  dispatch.toServer('C_PRESS_SKILL', 4, {
                    skill: SKILL_BLOCK,
                    press: false,
                    loc: {
                      x: event.loc.x,
                      y: event.loc.y,
                      z: event.loc.z
                    },
                    w: event.w,
                  });
                  atkid[SKILL_BLOCK] = atkid_base;
                  atkid_base--;
                  dispatch.toClient('S_ACTION_STAGE', 9, {
                    gameId: cid,
                    loc: {
                      x: event.loc.x,
                      y: event.loc.y,
                      z: event.loc.z
                    },
                    w: event.w,
                    templateId: model,
                    skill: SKILL_BLOCK,
                    stage: 0,
                    speed: 1,
                    ...(dispatch.majorPatchVersion >= 75 ? { projectileSpeed: 1 } : 0n),
                    id: atkid[SKILL_BLOCK],
                    effectScale: 1.0,
                    moving: false,
                    dest: { x: 0, y: 0, Z: 0 },
                    target: 0n,
                    animSeq: [],
                  });
                  if (typeof lastEvent != 'undefined') {
                    force_end(lastEvent,6);
                  }
                  lastSkill = SKILL_BLOCK;
                  lastEvent = {
                    skill: SKILL_BLOCK,
                    press: false,
                    loc: {
                      x: event.loc.x,
                      y: event.loc.y,
                      z: event.loc.z
                    },
                    w: event.w,
                  };
                  setTimeout(function (event) {
                    finish[S_ShCo] = true;
                    dispatch.toClient('S_ACTION_END', 5, {
                      gameId: cid,
                      loc: {
                        x: event.loc.x,
                        y: event.loc.y,
                        z: event.loc.z
                      },
                      w: event.w,
                      templateId: model,
                      skill: SKILL_BLOCK,
                      type: 10,
                      id: atkid[SKILL_BLOCK],
                    });
                  }, AUTOBLOCKDELAY, event);
                }, AUTOBLOCKDELAY, event);
                return;
              }, S_COUNTER_CANCEL_TIME / aspd / yyy, event);
            }
            return;
          }
        }
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Leash) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Deb || event.skill.id == (S_Deb +30))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Infu) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Spring || event.skill.id == (S_Spring +30))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Wind) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_ARush) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_ShBarrage || event.skill.id == S_ShBarrage2)) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Pledge) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Menace) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Lockdown || event.skill.id == (S_Lockdown +29))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_IronWill) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_MasLeash) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Giga) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Wallop || event.skill.id == (S_Wallop +30))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_BStep) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_RCry) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_RightLeap || event.skill.id == (S_RightLeap +1))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_DivineAegis) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Bulwark) {
        return false;
      }
      //collisionLocX = false;
      //collisionLocY = false;
      //collisionLocZ = false;
    }
  });

  dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108320) console.log("error");
    if (!enabled) return;
    if(event.gameId === cid) {
      var d = new Date();
      lastSkillTime[2] = d.getTime();
      if (((lastSkillTime[2] - lastSkillTime[1]) > lastLastSkillDelay) && (event.skill.id == lastLastSkill || event.skill.id == lastLastSkill +30) && (lastLastSkill == lastSkillTime[3] || lastLastSkill == (lastSkillTime[3] -30))) {
        if (lastSkill == S_ARush || lastLastSkill == S_ARush || lastSkill == S_Infu || lastLastSkill == S_Infu) { return false; }
        if (lastSkill != S_BStep) {
          //clearTimeout(timer[lastSkill]);
        }
        /*RecheckTimer = setTimeout(function(){
          if(lastSkill == S_BStep){
        return;}
          dispatch.toClient('S_ACTION_END', 5, lastSkillEvent);}, (lastSkillDelay + lastSkillStart - lastSkillTime[1] - lastLastSkillDelay));*/
      }

      if (job == JOB_LANCER && (event.skill.id == S_P || event.skill.id == S_P2 || event.skill.id == S_P3)) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Retal) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == SKILL_CHARGING || event.skill.id == SKILL_CHARGING_2)) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == SKILL_BLOCK) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_OnSl || event.skill.id == (S_OnSl +30))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_ChSh) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_SBash || event.skill.id == S_SBash_2 || event.skill.id == (S_SBash +29))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_GShout) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_ShCo) {
        if (disabSkill[9955] == true && lastSkill == S_ShCo) {
          disabSkill[9955] = false;
          return;
        }
        disabSkill[9955] = false;
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Leash) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Deb || event.skill.id == (S_Deb +30))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Infu) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Spring || event.skill.id == (S_Spring +30))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Wind) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_ARush) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_ShBarrage || event.skill.id == S_ShBarrage2)) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Pledge) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Menace) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Lockdown || event.skill.id == (S_Lockdown +29))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_IronWill) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_MasLeash) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Giga) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_Wallop || event.skill.id == (S_Wallop +30))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_BStep) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_RCry) {
        return false;
      }
      if (job == JOB_LANCER && (event.skill.id == S_RightLeap || event.skill.id == (S_RightLeap +1))) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_DivineAegis) {
        return false;
      }
      if (job == JOB_LANCER && event.skill.id == S_Bulwark) {
		  if(checkerr !=1){
        return false;
		  }
      }
    }
  });

  dispatch.hook('S_START_COOLTIME_SKILL', 3, { order: -99999 }, (event) => {
    if (!enabled) return;
    event.cooldown -= GLOBAL_LATENCY;
	
	if(event.skill.id == S_ARush || event.skill.id == S_ARush_2 || event.skill.id == S_ARush_3){
			clearTimeout(locking2);
			locking = true;
			locking2 = setTimeout(function(){locking = false;}, event.cooldown);
		}
	
    return true;
  });


  dispatch.hook('S_PLAYER_STAT_UPDATE', dispatch.majorPatchVersion >= 93 ? 14 : 13, (event) => {
    if (!enabled) return;
    aspd = (event.attackSpeed + event.attackSpeedBonus) / event.attackSpeed;
    if (event.hp ==0) {
      clearTimeout(onslaughtTimer1);
      clearTimeout(onslaughtTimer2);
      clearTimeout(onslaughtTimer3);
      clearTimeout(onslaughtTimer4);
      clearTimeout(onslaughtTimer5);
	  blockActive =0;
      dstance =0;
      clearTimeout(blockd);
    }
  });

  dispatch.hook('C_PLAYER_LOCATION', 5, (event) => {
    if (!enabled) return;
    xloc = event.dest.x;
    yloc = event.dest.y;
    zloc = event.dest.z;
	lastBulk.loc = event.dest;
    wloc = event.w;
    timeloc = event.time +1;
  });

  dispatch.hook('C_NOTIFY_LOCATION_IN_ACTION', 4, (event) => {
    if (!enabled) return;
    collisionLocX = event.loc.x;
    collisionLocY = event.loc.y;
    collisionLocZ = event.loc.z;
    if (event.skill.id == (S_Wallop +30)) {
      setTimeout(function (event) {
        dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
          skill: S_Wallop,
          stage: event.stage,
          loc: {
            x: event.loc.x,
            y: event.loc.y,
            z: event.loc.z
          },
          w: event.w,
        });
      }, 0, event);
      setTimeout(function (event) {
        dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
          skill: S_Wallop,
          stage: event.stage,
          loc: {
            x: event.loc.x,
            y: event.loc.y,
            z: event.loc.z
          },
          w: event.w,
        });
      }, 100, event);
    }
    if (event.skill.id == (S_Wallop)) {
      setTimeout(function (event) {
        dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
          skill: (S_Wallop +30),
          stage: event.stage,
          loc: {
            x: event.loc.x,
            y: event.loc.y,
            z: event.loc.z
          },
          w: event.w,
        });
      }, 0, event);
      setTimeout(function (event) {
        dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
          skill: (S_Wallop +30),
          stage: event.stage,
          loc: {
            x: event.loc.x,
            y: event.loc.y,
            z: event.loc.z
          },
          w: event.w,
        });
      }, 100, event);
    }
    setTimeout(function (event) {
      dispatch.toServer('C_NOTIFY_LOCATION_IN_ACTION', 4, {
        skill: event.skill.id,
        stage: event.stage,
        loc: {
          x: event.loc.x,
          y: event.loc.y,
          z: event.loc.z
        },
        w: event.w,
      });
    }, 100, event);
    //return false;
  });
  dispatch.hook('C_NOTIFY_LOCATION_IN_DASH', 4, (event) => {
    if (!enabled) return;
    collisionLocX = event.loc.x;
    collisionLocY = event.loc.y;
    collisionLocZ = event.loc.z;
    setTimeout(function (event) {
      dispatch.toServer('C_NOTIFY_LOCATION_IN_DASH', 4, {
        skill: event.skill.id,
        stage: event.stage,
        loc: {
          x: event.loc.x,
          y: event.loc.y,
          z: event.loc.z
        },
        w: event.w,
      });
    }, 100, event);
    //return false;
  });

  dispatch.hook('S_ACTION_STAGE', 9, { order: -99999, filter: { fake: true } }, (event) => {
	  //console.log("test: " + event.skill == 67118112);
    if (!enabled) return;
    if (lastSkill ==1) {
      return false;
    }
  });
  dispatch.hook('S_ACTION_STAGE', 9, (event) => {
	  //console.log("test: " + event.skill == 67118112);
    if (!enabled) return;
    if (event.gameId !== cid) {
      return;
    }

    if (event.skill.id ==1080101) {
      disabSkill[S_Retal] = true;
      Ignore1 = true;
    }
  });
  dispatch.hook('S_ACTION_END', 5, (event) => {
	  if(event.skill == 67108320) console.log("error");
    if (!enabled) return;
    if (event.gameId !== cid) {
      return;
    }
    if (event.skill.id ==1080101) {
      disabSkill[S_Retal] = false;
      clearTimeout(Ignore2);
      Ignore2 = setTimeout(function () { Ignore1 = false; },400);
    }
  });
};