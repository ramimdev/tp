
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

// Update date & time
function updateDateTime(){
  const now=new Date();
  const banglaDate=getBanglaDate(now);
  const fullBanglaDate=enToBnNumber(banglaDate.day)+" "+banglaDate.month+" "+enToBnNumber(banglaDate.year)+" বঙ্গাব্দ";
  const dayName=banglaDays[now.getDay()];
  const monthName=now.toLocaleString('bn-BD',{month:'long'});
  const gregorian=dayName+", "+enToBnNumber(now.getDate())+" "+monthName+" "+enToBnNumber(now.getFullYear());
  let h=now.getHours(),m=now.getMinutes(),s=now.getSeconds();
  const ampm=h>=12?'PM':'AM';
  h=h%12||12;
  const timeStr=enToBnNumber(h)+":"+enToBnNumber(m.toString().padStart(2,'0'))+":"+enToBnNumber(s.toString().padStart(2,'0'))+" "+ampm;
  document.getElementById('time').textContent=timeStr;
  document.getElementById('date').textContent=gregorian+" | "+fullBanglaDate;
}

document.addEventListener("DOMContentLoaded",function(){
  updateDateTime();
  setInterval(updateDateTime,1000);
});
