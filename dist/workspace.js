let workspaceView='watch';
function setWorkspaceView(view,scroll=false){
 if(!['watch','breakdown','write','practise'].includes(view))return;
 workspaceView=view;
 document.querySelectorAll('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==view);
 document.querySelectorAll('[data-view]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.view===view)));
 if(view!=='watch')$('player').pause();
 if(view==='practise'){$('learn-panel').hidden=false;$('learn-toggle').setAttribute('aria-expanded','true');$('learn-toggle').textContent='Hide practice ↑';}
 if(scroll)document.querySelector('.view-tabs').scrollIntoView({behavior:'smooth',block:'start'});
}
function setupWorkspace(){document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>setWorkspaceView(b.dataset.view,true));}
