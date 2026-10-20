/* One shared palette for the structure, learning cards and playback tracker. */
const structurePalette=[
 {ink:'#cf1731',marker:'#ff3047',paper:'#fff0f2'},
 {ink:'#007e96',marker:'#00c7e5',paper:'#e9fbff'},
 {ink:'#967100',marker:'#ffe600',paper:'#fffbe0'},
 {ink:'#1756d6',marker:'#2869ff',paper:'#eef3ff'},
 {ink:'#b01bad',marker:'#ef42e8',paper:'#fff0ff'},
 {ink:'#428000',marker:'#8de014',paper:'#f2ffe5'}
];
const structureColour=i=>structurePalette[i%structurePalette.length];
// Planner sections are more detailed than the overview; map each to its actual overview beat.
const stageGroups={
 'reveal-explain':[0,1,2,3,4,2,5,5],
 'test-prove':[0,0,1,2,2,2,3,4,4,5,5],
 'bad-experience':[0,1,2,2,3,4,5,5,5],
 'discovery-proof':[0,1,2,2,3,3,4,4,5,5,5],
 'mistakes-shortcut':[0,1,2,3,4,4,4,5,6,7,7],
 'failed-upgrade':[0,1,1,2,2,3,3,4,4,5,5,6],
 'not-this-reveal':[0,1,2,3,4,4,5,5,5,6,6],
 'secret-bundle':[0,1,1,2,3,4,4,5,5,6,7],
 'story-discovery':[0,1,1,2,2,3,4,5,5,6,7,8,8],
 'wrong-advice':[0,1,2,2,3,3,4,5,5,6],
 'react-correct':[0,1,2,3,4,3,5,5,6,6,7,8]
};
function referenceStages(v){
 return (planners[v.id]||[]).map((s,i)=>{
  let nums=s[1].match(/\d+(?:\.\d+)?/g)||[];
  let start=Number(nums[0]),end=Number(nums[1]);
  if(v.id==='test-prove'&&i===0){start=0;end=4;}
  if(v.id==='test-prove'&&i===1){start=4;end=11;}
  if(i===0)start=0;
  return {index:i,start,end,title:s[0],group:stageGroups[v.id][i]};
 });
}
function referenceThoughts(v,i){
 const stage=referenceStages(v)[i];
 return v.rows.filter(r=>r[0]<stage.end&&r[1]>stage.start).map(r=>`${r[0]}–${r[1]}s: “${r[3]}”`).join('\n\n');
}
function trackerMoment(v,time){
 const stages=referenceStages(v);
 let stage=stages[0];for(const s of stages)if(time>=s.start)stage=s;
 let rowIndex=0;v.rows.forEach((r,i)=>{if(time>=r[0])rowIndex=i;});
 return {stage,row:v.rows[rowIndex],rowIndex};
}
const trackerKinds={open:['○','QUESTION OPENS'],hold:['○','QUESTION STAYS OPEN'],close:['●','ANSWER / PAYOFF'],both:['↔','ANSWER → NEXT QUESTION'],proof:['✓','PROOF / TRUST CUE'],cta:['↗','NEXT ACTION']};
let trackerLast='';
function resetTracker(){
 trackerLast='';
 $('tracker-rail').innerHTML=referenceStages(current).map(s=>{
  const c=structureColour(s.group);
  return `<button type="button" data-tracker-stage="${s.index}" style="--track-ink:${c.ink};--track-marker:${c.marker};--track-paper:${c.paper}" aria-label="Play ${esc(s.title)} at ${s.start} seconds" title="${esc(s.title)}">${s.index+1}</button>`;
 }).join('');
 document.querySelectorAll('[data-tracker-stage]').forEach(b=>b.onclick=()=>trackerSeek(referenceStages(current)[Number(b.dataset.trackerStage)].start));
 $('tracker-prev').onclick=()=>trackerStep(-1);$('tracker-next').onclick=()=>trackerStep(1);
 updateTracker(0);
}
function trackerSeek(time){seekVideo(time);}
function trackerStep(direction){const m=trackerMoment(current,$('player').currentTime);const i=Math.max(0,Math.min(current.rows.length-1,m.rowIndex+direction));trackerSeek(current.rows[i][0]);}
function updateTracker(time){
 if(!current)return;
 const m=trackerMoment(current,time),s=m.stage,r=m.row,c=structureColour(s.group);
 const end=current.rows[current.rows.length-1][1];
 $('tracker-progress').style.width=Math.max(0,Math.min(100,time/end*100))+'%';
 $('tracker-clock').textContent=Math.floor(time)+'s / '+Math.ceil(end)+'s';
 const key=current.id+':'+s.index+':'+m.rowIndex;
 if(key===trackerLast)return;trackerLast=key;
 $('tracker-card').style.setProperty('--track-ink',c.ink);$('tracker-card').style.setProperty('--track-marker',c.marker);$('tracker-card').style.setProperty('--track-paper',c.paper);
 const kind=trackerKinds[r[4]];
 $('tracker-moment').innerHTML=`<div class="tracker-stage-name">${esc(current.sequence[s.group])}</div><p class="tracker-section">${esc(s.title)}</p><div class="tracker-loop"><span class="tracker-symbol" aria-hidden="true">${kind[0]}</span><strong>${kind[1]}</strong><small>${r[0]}–${r[1]}s</small></div><span class="tracker-thought-label">VIEWER MAY BE THINKING</span><p class="tracker-thought">“${esc(r[3])}”</p><details class="tracker-detail"><summary>Why this moment works</summary><p>${esc(r[5])}</p><p><b>Creator says / shows:</b> ${esc(r[2])}</p></details>`;
 document.querySelectorAll('[data-tracker-stage]').forEach(b=>{const on=Number(b.dataset.trackerStage)===s.index;b.setAttribute('aria-current',on?'step':'false');});
 $('tracker-prev').disabled=m.rowIndex===0;$('tracker-next').disabled=m.rowIndex===current.rows.length-1;
}

stageGroups['advice-bundle']=[0,1,2,2,3,4,4,5,5,5,5,5,6,6,7,7];

stageGroups['compare-empathise']=[0,1,1,1,2,2,3,4,4,5,5,5,6,6];
