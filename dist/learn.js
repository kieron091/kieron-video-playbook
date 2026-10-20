// Preserve stage colours when recalling the structure, including in quiz choices.
function learnStructureText(value){
 const text=String(value),stages=current.sequence.map((name,i)=>({name,i})).sort((a,b)=>b.name.length-a.name.length);
 let output='',offset=0;
 while(offset<text.length){
 const stage=stages.find(s=>text.startsWith(s.name,offset));
 if(stage){output+=`<span class="learn-stage-word" style="color:${structureColour(stage.i).ink};--word-marker:${structureColour(stage.i).marker}">${esc(stage.name)}</span>`;offset+=stage.name.length;}
 else{output+=esc(text[offset]);offset++;}
 }
 return output;
}
/* Learning content is drawn from this video's actual analysis, not a generic script. */
const learnKinds={open:'OPEN A QUESTION',hold:'KEEP THE QUESTION OPEN',close:'DELIVER AN ANSWER',both:'ANSWER + NEXT QUESTION',proof:'PROOF / TRUST CUE',cta:'NEXT ACTION'};
function learningContent(v){
 const rows=v.rows;
 const deck=[{id:'structure',tone:'pink',tag:'THE WHOLE FRAMEWORK',q:'Can you recall the structure in order?',a:v.sequence.join(' → '),why:v.lesson}];
 rows.forEach((r,i)=>deck.push({id:'moment-'+i,tone:({open:'yellow',hold:'yellow',close:'green',both:'pink',proof:'cyan',cta:'pink'})[r[4]],tag:r[0]+'–'+r[1]+'s · VIEWER QUESTION',q:r[2]+'\n\nWhat might the viewer be thinking?',a:'“'+r[3]+'”',why:learnKinds[r[4]]+' — '+r[5],time:r[0]}));
 const indexes=[...new Set([0,Math.floor(rows.length/3),Math.floor(rows.length*2/3),rows.length-1])];
 const quiz=indexes.map(i=>({prompt:'What is the most fitting viewer thought at '+rows[i][0]+'–'+rows[i][1]+'s?',context:rows[i][2],answer:rows[i][3],options:[rows[i][3],rows[(i+1)%rows.length][3],rows[(i+Math.floor(rows.length/2))%rows.length][3]],why:rows[i][5],time:rows[i][0]}));
 const j=Math.min(2,v.sequence.length-2);
 quiz.push({prompt:'What comes next in this framework?',context:v.sequence.slice(0,j+1).join(' → ')+' → ?',answer:v.sequence[j+1],options:[v.sequence[j+1],v.sequence[0],v.sequence[j]],why:'Full order: '+v.sequence.join(' → ')});
 const k=rows.findIndex(r=>r[4]==='both')>=0?rows.findIndex(r=>r[4]==='both'):rows.findIndex(r=>r[4]==='close');
 const r=rows[k<0?0:k];
 quiz.push({prompt:'What is this moment doing?',context:r[2],answer:learnKinds[r[4]],options:[learnKinds[r[4]],...Object.keys(learnKinds).filter(t=>t!==r[4]).slice(0,2).map(t=>learnKinds[t])],why:r[5],time:r[0]});
 return {deck,quiz};
}
// Rotate wording on each attempt, and sample different moments from the same framework.
const viewerPrompts=['Put yourself in the viewer’s shoes. Which thought fits this moment?','What would someone watching this be asking themselves?','Which inner reaction best matches what the creator just showed?','Imagine pausing here. What is going through the viewer’s mind?'];
const rolePrompts=['What job does this moment do in the video?','How does this beat move the viewer through the story?','What happens to curiosity or trust at this point?','If you copied this beat, what purpose should it serve?'];
const roleAnswers={open:['It introduces a question the viewer wants answered.','It gives the viewer a new unknown to care about.','It starts a curiosity gap.','It creates a reason to wait for an answer.'],hold:['It keeps an existing question unanswered.','It reminds the viewer of an answer still to come.','It stretches an existing curiosity gap.','It sustains anticipation without delivering the answer yet.'],close:['It delivers an answer or payoff.','It resolves something the viewer was waiting for.','It closes a curiosity gap with an answer.','It gives the viewer the promised information or result.'],both:['It answers one question and raises another.','It pays off one curiosity gap while starting the next.','It resolves one unknown and creates a new one.','It moves from an answer into a fresh reason to keep watching.'],proof:['It adds a demonstration or reason to trust.','It supports a claim with a credibility cue.','It helps address doubt about what is being claimed.','It supplies a proof or trust cue.'],cta:['It asks the viewer to take a next action.','It directs the viewer toward a next step.','It prompts the viewer to act.','It turns attention into an invitation to do something.']};
function variedTest(v,run){
 const n=run%4,rows=v.rows,at=i=>rows[(run*3+i)%rows.length];
 const options=(answer,others)=>[answer,...mix([...new Set(others)].filter(x=>x!==answer)).slice(0,2)];
 const quiz=[0,Math.floor(rows.length/2)].map(i=>{const r=at(i);return {prompt:viewerPrompts[n],context:r[0]+'–'+r[1]+'s: '+r[2],answer:r[3],options:options(r[3],rows.map(x=>x[3])),why:r[5],time:r[0]};});
 const r=at(2);
 quiz.push({prompt:['Which moment would most naturally lead to this viewer thought?','Work backwards: what did the creator show or say to prompt this reaction?','Match the viewer’s inner question to the moment that triggers it.','If this is the viewer’s reaction, which beat best explains it?'][n],context:r[3],answer:r[2],options:options(r[2],rows.map(x=>x[2])),why:r[5],time:r[0]});
 [1,Math.floor(rows.length/2)+1].forEach(i=>{const r=at(i),a=roleAnswers[r[4]][n];quiz.push({prompt:rolePrompts[n],context:r[2],answer:a,options:options(a,Object.keys(roleAnswers).filter(k=>k!==r[4]).map(k=>roleAnswers[k][n])),why:r[5],time:r[0]});});
 const j=1+run%(v.sequence.length-1),a=v.sequence[j];
 quiz.push({prompt:['Which beat follows this part of the framework?','Continue the structure: what comes next?','You have reached this point in the script. Which beat follows?','Rebuild the sequence. What belongs in the next space?'][n],context:v.sequence.slice(0,j).join(' → ')+' → ?',answer:a,options:options(a,v.sequence),why:'Full order: '+v.sequence.join(' → ')});
 return mix(quiz).map(q=>({...q,options:mix(q.options)}));
}
function mix(a){return a.map(x=>({x,n:Math.random()})).sort((a,b)=>a.n-b.n).map(o=>o.x);}
let learnState,learnData,learnCard=0,learnRevealed=false,learnQuiz=[],learnQuestion=0,learnAnswers=[],learnLocked=false,learnMode='cards';
function learnKey(){return 'playbook-learning-v1-'+current.id;}
function learnSave(){try{localStorage.setItem(learnKey(),JSON.stringify(learnState));return true;}catch{return false;}}
function resetLearning(){
 learnData=learningContent(current);learnState={known:[],best:0,attempts:0,runs:0};
 try{const p=JSON.parse(localStorage.getItem(learnKey())||'null');if(p&&Array.isArray(p.known)){learnState.known=p.known.filter(id=>learnData.deck.some(c=>c.id===id));learnState.best=Number(p.best)||0;learnState.attempts=Number(p.attempts)||0;learnState.runs=Math.max(0,Math.floor(Number(p.runs)||0));}}catch{}
 learnCard=0;learnRevealed=false;learnMode='cards';learnQuiz=[];learnAnswers=[];
 $('learn-title').textContent=current.title;$('learn-panel').hidden=true;$('learn-toggle').setAttribute('aria-expanded','false');$('learn-toggle').textContent='Start practising ↓';$('learn-status').textContent='';renderLearning();
}
function learnStats(){ $('learn-progress').textContent=learnState.known.length+'/'+learnData.deck.length+' cards marked known · '+(learnState.attempts?'Best test: '+learnState.best+'/'+learnData.quiz.length:'Test not taken yet'); }
function renderLearning(){
 learnStats();$('learn-cards-mode').setAttribute('aria-pressed',String(learnMode==='cards'));$('learn-test-mode').setAttribute('aria-pressed',String(learnMode==='test'));
 if(learnMode==='test'){renderLearnTest();return;}
 const c=learnData.deck[learnCard];
 $('learn-body').innerHTML=`<div class="learn-count">CARD ${learnCard+1} / ${learnData.deck.length} ${learnState.known.includes(c.id)?' · ✓ KNOWN':''}</div><button class="flash-card ${c.tone}" id="learn-flip" aria-expanded="${learnRevealed}"><span class="learn-tag">${esc(c.tag)}</span><span class="flash-question">${learnStructureText(c.q)}</span><span class="flash-hint">${learnRevealed?'Tap to hide the answer':'Think first. Tap to reveal ↓'}</span></button>${learnRevealed?`<div class="flash-answer" aria-live="polite"><strong>${learnStructureText(c.a)}</strong><p>${learnStructureText(c.why)}</p>${c.time!==undefined?'<button id="learn-watch">Replay this moment ↗</button>':''}</div><div class="learn-controls"><button id="learn-again">Practise again</button><button class="learn-success" id="learn-known">Got it ✓</button></div>`:''}<div class="learn-controls"><button id="learn-prev" ${learnCard===0?'disabled':''}>← Previous</button><button id="learn-next" ${learnCard===learnData.deck.length-1?'disabled':''}>Next →</button><button id="learn-shuffle">Shuffle cards</button></div>`;
 $('learn-flip').onclick=()=>{learnRevealed=!learnRevealed;renderLearning();};
 $('learn-prev').onclick=()=>moveLearn(-1);$('learn-next').onclick=()=>moveLearn(1);
 $('learn-shuffle').onclick=()=>{learnData.deck=mix(learnData.deck);learnCard=0;learnRevealed=false;renderLearning();};
 if(learnRevealed){$('learn-known').onclick=()=>markLearn(true);$('learn-again').onclick=()=>markLearn(false);if(c.time!==undefined)$('learn-watch').onclick=()=>learnReplay(c.time);}
}
function moveLearn(n){learnCard=Math.max(0,Math.min(learnData.deck.length-1,learnCard+n));learnRevealed=false;renderLearning();}
function markLearn(known){const id=learnData.deck[learnCard].id;learnState.known=learnState.known.filter(x=>x!==id);if(known)learnState.known.push(id);const saved=learnSave();learnCard=(learnCard+1)%learnData.deck.length;learnRevealed=false;renderLearning();$('learn-status').textContent=saved?(known?'Marked known. Next card ready.':'Kept for practice. Next card ready.'):'Progress could not save in this browser.';}
function learnReplay(time){setWorkspaceView('watch');seekVideo(time);$('player').scrollIntoView({behavior:'smooth',block:'center'});}
function startLearnTest(){learnMode='test';learnQuestion=0;learnAnswers=[];learnLocked=false;learnQuiz=variedTest(current,learnState.runs++);if(!learnSave())$('learn-status').textContent='This attempt could not be saved. Wording rotation may reset on reload.';renderLearning();}
function renderLearnTest(){
 if(!learnQuiz.length){startLearnTest();return;}
 if(learnQuestion>=learnQuiz.length){
 const score=learnAnswers.filter(a=>a.correct).length;const missed=learnAnswers.filter(a=>!a.correct);
 $('learn-body').innerHTML=`<div class="test-result"><span class="learn-tag">TEST COMPLETE</span><h4>${score} / ${learnQuiz.length}</h4><p>${score===learnQuiz.length?'You matched every answer. Try the structure in your next script.':'You’ve found what to practise next.'}</p></div>${missed.map(a=>`<div class="test-review"><strong>${learnStructureText(a.q.prompt)}</strong><p>${learnStructureText(a.q.context)}</p><p>Your answer: ${learnStructureText(a.choice)}</p><p><b>Best answer: ${learnStructureText(a.q.answer)}</b></p><p>${learnStructureText(a.q.why)}</p></div>`).join('')}<div class="learn-controls"><button id="learn-retry">Try different questions</button><button id="learn-back">Back to flashcards</button></div>`;
 $('learn-retry').onclick=startLearnTest;$('learn-back').onclick=()=>{learnMode='cards';renderLearning();};return;
 }
 const q=learnQuiz[learnQuestion];learnLocked=false;
 $('learn-body').innerHTML=`<div class="learn-count">QUESTION ${learnQuestion+1} / ${learnQuiz.length}</div><div class="quiz-prompt"><h4>${learnStructureText(q.prompt)}</h4><p>${learnStructureText(q.context)}</p></div><label class="recall-label" for="learn-own-words">Say your answer aloud first, or write it in your own words.</label><textarea id="learn-own-words" rows="2" placeholder="What do you think—and why? (Optional, ungraded)"></textarea><details class="learn-choices"><summary>Show answer choices</summary><div class="quiz-options">${q.options.map((o,i)=>`<button data-answer="${i}"><span>${String.fromCharCode(65+i)}</span>${learnStructureText(o)}</button>`).join('')}</div></details><div id="learn-feedback" aria-live="polite"></div>`;
 document.querySelectorAll('#learn-body [data-answer]').forEach(b=>b.onclick=()=>answerLearn(Number(b.dataset.answer)));
}
function answerLearn(i){
 if(learnLocked)return;learnLocked=true;const q=learnQuiz[learnQuestion],choice=q.options[i],correct=choice===q.answer;learnAnswers.push({q,choice,correct});
 document.querySelectorAll('#learn-body [data-answer]').forEach(b=>{b.disabled=true;const o=q.options[Number(b.dataset.answer)];if(o===q.answer)b.classList.add('answer-correct');else if(o===choice)b.classList.add('answer-wrong');});
 $('learn-feedback').innerHTML=`<div class="test-review"><strong>${correct?'✓ Correct':'↻ Not quite'}</strong><p>${learnStructureText(q.why)}</p><p><b>Make it yours:</b> Explain why this answer fits. Then invent a line for your own product that does the same job.</p>${correct?'':'<p>Best answer: '+learnStructureText(q.answer)+'</p>'}<button id="learn-continue">${learnQuestion===learnQuiz.length-1?'See my score':'Next question →'}</button></div>`;
 $('learn-continue').onclick=()=>{learnQuestion++;if(learnQuestion===learnQuiz.length){learnState.attempts++;learnState.best=Math.max(learnState.best,learnAnswers.filter(a=>a.correct).length);if(!learnSave())$('learn-status').textContent='Score could not save in this browser.';}renderLearning();};
}
