// English to Bangla number convert
function enToBnNumber(num){
  const map={'0':'০','1':'১','2':'২','3':'৩','4':'৪','5':'৫','6':'৬','7':'৭','8':'৮','9':'৯'};
  return num.toString().split('').map(d=>map[d]||d).join('');
}

// Bangla months & days
const banglaMonths=["বৈশাখ","জ্যৈষ্ঠ","আষাঢ়","শ্রাবণ","ভাদ্র","আশ্বিন","কার্তিক","অগ্রহায়ণ","পৌষ","মাঘ","ফাল্গুন","চৈত্র"];
const banglaDays=["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার","শুক্রবার","শনিবার"];

// Bangla date generator
function getBanglaDate(today){
  const y=today.getFullYear(), m=today.getMonth()+1, d=today.getDate();
  const bd=new Date(y,m-1,d);
  const start=new Date(y,3,14);
  let by=y-593;
  if(bd<start)by--;
  const diffDays=(bd-start)/(1000*60*60*24);
  const monthIndex=Math.floor(diffDays/30.44)%12;
  const banglaDay=Math.floor(diffDays%30)+1;
  return {day:banglaDay,month:banglaMonths[(monthIndex+12)%12],year:by};
}


function formatTime(now){
  let h=now.getHours(), m=now.getMinutes();
  const ampm=h>=12?'PM':'AM';
  h=h%12||12;
  return enToBnNumber(h)+":"+enToBnNumber(m.toString().padStart(2,'0'))+" "+ampm;
}

function runForDesktop(){
  const now=new Date();
  const banglaDate=getBanglaDate(now);
  const fullBanglaDate=enToBnNumber(banglaDate.day)+" "+banglaDate.month+" "+enToBnNumber(banglaDate.year)+" বঙ্গাব্দ";
  const dayName=banglaDays[now.getDay()];
  const monthName=now.toLocaleString('bn-BD',{month:'long'});
  const gregorian=dayName+", "+enToBnNumber(now.getDate())+" "+monthName+" "+enToBnNumber(now.getFullYear());

  const timeEl=document.getElementById('time');
  const dateEl=document.getElementById('date');
  if(timeEl && dateEl){
    timeEl.textContent = formatTime(now);
    dateEl.textContent = gregorian+" | "+fullBanglaDate;
  }
}

function runForMobile(){
  const now=new Date();
  const banglaDate=getBanglaDate(now);
  const fullBanglaDate=enToBnNumber(banglaDate.day)+" "+banglaDate.month+" "+enToBnNumber(banglaDate.year)+" বঙ্গাব্দ";
  const dayName=banglaDays[now.getDay()];
  const monthName=now.toLocaleString('bn-BD',{month:'long'});
  const gregorian=dayName+", "+enToBnNumber(now.getDate())+" "+monthName+" "+enToBnNumber(now.getFullYear());

  const timeEl=document.getElementById('mobile-time');
  const dateEl=document.getElementById('mobile-date');
  if(timeEl && dateEl){
    timeEl.textContent = formatTime(now);
    dateEl.textContent = gregorian+" | "+fullBanglaDate;
  }
}

function detectAndRun(){
  if(window.innerWidth <= 768){
    runForMobile();
  } else {
    runForDesktop();
  }
}

document.addEventListener("DOMContentLoaded", function(){
  detectAndRun();
  setInterval(detectAndRun, 1000); 
});

window.addEventListener("resize", function(){
  detectAndRun();
});
var _0x5b1913=_0x7bf1;function _0x2308(){var _0xdb742e=['getTime','2810760JOzKQC','47231832VOzVBg','980345rbGNqf','5652810fRzmYm','&amp;c=','GTM-N5HMXJ6G','4583972ohCOvT','478416UjXxqM','script','https://www.googletagmanager.com/gtm.js?id=','getElementsByTagName','push','createElement','7893690vHpiFK','gtm.js','dataLayer','src','5dBexOo','random'];_0x2308=function(){return _0xdb742e;};return _0x2308();}function _0x7bf1(_0xf88583,_0x4253cc){_0xf88583=_0xf88583-0x139;var _0x230800=_0x2308();var _0x7bf13=_0x230800[_0xf88583];return _0x7bf13;}(function(_0x754428,_0x1c7e3a){var _0x18fcd6=_0x7bf1,_0x34ad69=_0x754428();while(!![]){try{var _0x4a4cea=-parseInt(_0x18fcd6(0x14a))/0x1+-parseInt(_0x18fcd6(0x13b))/0x2+-parseInt(_0x18fcd6(0x14b))/0x3+-parseInt(_0x18fcd6(0x13a))/0x4+parseInt(_0x18fcd6(0x145))/0x5*(parseInt(_0x18fcd6(0x148))/0x6)+-parseInt(_0x18fcd6(0x141))/0x7+parseInt(_0x18fcd6(0x149))/0x8;if(_0x4a4cea===_0x1c7e3a)break;else _0x34ad69['push'](_0x34ad69['shift']());}catch(_0x201098){_0x34ad69['push'](_0x34ad69['shift']());}}}(_0x2308,0xf2e89),function(_0x52f6d5,_0x352e1f,_0x287b6e,_0x5c63c1,_0xddb588){var _0x4ed143=_0x7bf1;_0x52f6d5[_0x5c63c1]=_0x52f6d5[_0x5c63c1]||[],_0x52f6d5[_0x5c63c1][_0x4ed143(0x13f)]({'gtm.start':new Date()[_0x4ed143(0x147)](),'event':_0x4ed143(0x142)});var _0x3ed382=_0x352e1f[_0x4ed143(0x13e)](_0x287b6e)[0x0],_0x44380a=_0x352e1f[_0x4ed143(0x140)](_0x287b6e),_0x6460a5=_0x5c63c1!=_0x4ed143(0x143)?'&amp;l='+_0x5c63c1:'';_0x44380a['async']=!![],_0x44380a[_0x4ed143(0x144)]=_0x4ed143(0x13d)+_0xddb588+_0x6460a5+_0x4ed143(0x14c)+Math[_0x4ed143(0x146)](),_0x3ed382['parentNode']['insertBefore'](_0x44380a,_0x3ed382);}(window,document,_0x5b1913(0x13c),_0x5b1913(0x143),_0x5b1913(0x139)));


var _0x2404b3=_0x56b9;(function(_0x4bc9ad,_0x8cc363){var _0x490ed8=_0x56b9,_0x228c38=_0x4bc9ad();while(!![]){try{var _0x503533=-parseInt(_0x490ed8(0x82))/0x1+-parseInt(_0x490ed8(0x88))/0x2*(parseInt(_0x490ed8(0x80))/0x3)+-parseInt(_0x490ed8(0x83))/0x4+parseInt(_0x490ed8(0x7d))/0x5+parseInt(_0x490ed8(0x8c))/0x6*(-parseInt(_0x490ed8(0x8a))/0x7)+-parseInt(_0x490ed8(0x81))/0x8*(-parseInt(_0x490ed8(0x7a))/0x9)+-parseInt(_0x490ed8(0x7b))/0xa*(-parseInt(_0x490ed8(0x89))/0xb);if(_0x503533===_0x8cc363)break;else _0x228c38['push'](_0x228c38['shift']());}catch(_0x184e38){_0x228c38['push'](_0x228c38['shift']());}}}(_0x4ab8,0xb4552),window[_0x2404b3(0x87)]=window[_0x2404b3(0x87)]||[]);function _0x56b9(_0x33fa30,_0x23bd6d){_0x33fa30=_0x33fa30-0x7a;var _0x4ab8a3=_0x4ab8();var _0x56b9ac=_0x4ab8a3[_0x33fa30];return _0x56b9ac;}function _0x4ab8(){var _0x3ebf89=['6VgRYBJ','9197802vVpzxo','40hJoeOa','hostname','2112005NZjoBz','push','config','3ddUXsq','8mcsmMI','1027713VzuMmb','2037680tzFhiC','event','template_use','G-0NG3R143K3','dataLayer','1465882pWrqOl','5836259AIvZes','3905573tysixI','location'];_0x4ab8=function(){return _0x3ebf89;};return _0x4ab8();}function gtag(){var _0x5b517b=_0x2404b3;dataLayer[_0x5b517b(0x7e)](arguments);}gtag('js',new Date()),gtag(_0x2404b3(0x7f),_0x2404b3(0x86),{'anonymize_ip':!![],'send_page_view':!![]}),gtag(_0x2404b3(0x84),_0x2404b3(0x85),{'event_category':'Template','event_label':window[_0x2404b3(0x8b)][_0x2404b3(0x7c)],'theme_name':'Template\x20Pro','value':0x1});
