const byId=id=>document.getElementById(id);
const html=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const lessonKey=id=>'playbook-lesson-v1-'+id;
let selectedLesson;
function lessonDraft(id){try{const value=JSON.parse(localStorage.getItem(lessonKey(id))||'{}');return value&&typeof value==='object'&&!Array.isArray(value)?value:{};}catch{return {};}}
function lessonList(){
 const query=byId('lesson-search').value.trim().toLowerCase(),filter=byId('lesson-filter').value;
 const matches=lessons.filter(l=>(l.title+' '+l.creator).toLowerCase().includes(query)&&(filter==='all'||Boolean(lessonDraft(l.id).done)===(filter==='done')));
 byId('lesson-count').textContent=matches.length+' of '+lessons.length+' lessons';
 byId('lesson-list').innerHTML=matches.map(l=>`<a class="card ${l.id===selectedLesson?.id?'active':''}" href="#${l.id}" ${l.id===selectedLesson?.id?'aria-current="true"':''}><span class="card-index">${lessonDraft(l.id).done?'✓':String(l.index).padStart(2,'0')}</span><span class="card-copy"><small>@${html(l.creator)}</small><strong>${html(l.title)}</strong></span></a>`).join('')||'<p class="empty">No matching lessons. Try another search or filter.</p>';
 byId('lesson-progress').textContent=lessons.filter(l=>lessonDraft(l.id).done).length+' / '+lessons.length+' lessons studied';
}
function selectLesson(){
 const lesson=lessons.find(l=>l.id===location.hash.slice(1))||lessons[0];
 if(selectedLesson?.id===lesson.id)return;
 selectedLesson=lesson;const draft=lessonDraft(lesson.id);
 byId('lesson-title').textContent=lesson.title;byId('lesson-author').textContent='LESSON '+String(lesson.index).padStart(2,'0')+' · @'+lesson.creator;
 byId('lesson-takeaway').value=typeof draft.takeaway==='string'?draft.takeaway:'';byId('lesson-action').value=typeof draft.action==='string'?draft.action:'';byId('lesson-complete').checked=Boolean(draft.done);byId('lesson-saved').textContent='';
 byId('lesson-notice').hidden=!lesson.notice;byId('lesson-notice').textContent=lesson.notice;byId('lesson-open').href=lesson.url;
 byId('lesson-embed').innerHTML='<p>Load the original TikTok lesson here.</p><button id="lesson-load">Load video</button>';
 byId('lesson-load').onclick=()=>{const frame=document.createElement('iframe');frame.src='https://www.tiktok.com/player/v1/'+lesson.id+'?autoplay=0';frame.title=lesson.title;frame.allow='fullscreen; encrypted-media';frame.allowFullscreen=true;byId('lesson-embed').replaceChildren(frame);};
 byId('lesson-prev').disabled=lesson.index===1;byId('lesson-next').disabled=lesson.index===lessons.length;
 document.title=lesson.title+' | Playbook Lessons';lessonList();
}
function saveLesson(){try{localStorage.setItem(lessonKey(selectedLesson.id),JSON.stringify({takeaway:byId('lesson-takeaway').value,action:byId('lesson-action').value,done:byId('lesson-complete').checked}));byId('lesson-saved').textContent='Saved on this device';}catch{byId('lesson-saved').textContent='Unable to save here. Download your notes to keep them.';}lessonList();}
byId('lesson-search').oninput=lessonList;byId('lesson-filter').onchange=lessonList;
for(const id of ['lesson-takeaway','lesson-action'])byId(id).oninput=saveLesson;
byId('lesson-complete').onchange=saveLesson;
byId('lesson-prev').onclick=()=>{location.hash=lessons[selectedLesson.index-2].id;};byId('lesson-next').onclick=()=>{location.hash=lessons[selectedLesson.index].id;};
byId('lesson-download').onclick=()=>{const text=['# '+selectedLesson.title,'Source: '+selectedLesson.url,'','## What I learned',byId('lesson-takeaway').value,'','## What I will try',byId('lesson-action').value,'','Studied: '+(byId('lesson-complete').checked?'Yes':'No')].join('\n');const url=URL.createObjectURL(new Blob([text],{type:'text/plain'}));const a=document.createElement('a');a.href=url;a.download='lesson-'+selectedLesson.id+'.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
window.addEventListener('hashchange',selectLesson);selectLesson();
