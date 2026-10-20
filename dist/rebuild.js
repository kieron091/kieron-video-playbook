// Keep loading, seeking, and recovery consistent across all three replay controls.
let pendingSeek=null;
function seekVideo(time){
 const player=$('player');
 pendingSeek={source:player.getAttribute('src'),time:Math.max(0,Number(time)||0)};
 if(player.readyState>=1)finishSeek();
 else $('media-status').textContent='Loading the selected moment…';
}
function finishSeek(){
 const player=$('player'),request=pendingSeek;
 if(!request)return;
 pendingSeek=null;
 if(request.source!==player.getAttribute('src'))return;
 player.currentTime=Math.min(request.time,Math.max(0,player.duration-.05));
 updateTracker(player.currentTime);
 player.play().catch(()=>{$('media-status').textContent='Press play to watch this moment.';});
}
$('player').addEventListener('loadedmetadata',finishSeek);
$('player').addEventListener('canplay',()=>{$('media-status').textContent='Ready to watch';$('retry-video').hidden=true;});
$('player').addEventListener('error',()=>{$('media-status').textContent='The recording could not load. Retry it; the breakdown and planner are still available.';$('retry-video').hidden=false;pendingSeek=null;});
$('retry-video').onclick=()=>{$('media-status').textContent='Loading recording…';$('player').load();};
// Every existing storage key is retained so the rebuild preserves saved work.
const workKeys=videos.flatMap(v=>['playbook-notes-'+v.id,'playbook-planner-v1-'+v.id,'playbook-learning-v1-'+v.id]);
$('backup-all').onclick=()=>{
 try{
  const entries={};for(const key of workKeys){const value=localStorage.getItem(key);if(value!==null)entries[key]=value;}
  const data={type:'kieron-playbook-backup',version:1,createdAt:new Date().toISOString(),entries};
  const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
  const link=document.createElement('a');link.href=url;link.download='kieron-playbook-backup-'+new Date().toISOString().slice(0,10)+'.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  $('backup-status').textContent='Backup downloaded: '+Object.keys(entries).length+' saved items.';
 }catch{$('backup-status').textContent='Browser storage is unavailable. Use the planner and notes downloads.';}
};
$('restore-backup').onchange=async e=>{
 const file=e.target.files[0];if(!file)return;
 try{
  if(file.size>5*1024*1024)throw Error('This backup is too large.');
  const data=JSON.parse(await file.text());
  if(data.type!=='kieron-playbook-backup'||data.version!==1||!data.entries||typeof data.entries!=='object'||Array.isArray(data.entries))throw Error('Choose a valid Playbook backup.');
  const entries=Object.entries(data.entries);
  for(const [key,value] of entries){
   if(!workKeys.includes(key)||typeof value!=='string')throw Error('This backup contains an unsupported item.');
   if(!key.startsWith('playbook-notes-')){
    const item=JSON.parse(value);
    if(!item||typeof item!=='object'||Array.isArray(item))throw Error('A saved item is invalid.');
    if(key.startsWith('playbook-planner-')&&Object.values(item).some(v=>typeof v!=='string'&&(!v||typeof v!=='object'||Array.isArray(v)||Object.values(v).some(t=>typeof t!=='string'))))throw Error('A draft is invalid.');
   }
  }
  let restored=0,kept=0;
  for(const [key,value] of entries){if(localStorage.getItem(key)!==null){kept++;continue;}localStorage.setItem(key,value);restored++;}
  renderPlanner();resetLearning();$('notes').value=localStorage.getItem('playbook-notes-'+current.id)||'';setWorkspaceView(workspaceView);
  $('backup-status').textContent=restored+' items restored. '+kept+' existing items kept. Restore fills missing work without replacing current drafts.';
 }catch(error){$('backup-status').textContent=error.message||'The backup could not be restored.';}
 finally{e.target.value='';}
};

let recordingRequest=0,recordingBlobUrl=null;
async function prepareRecording(){
 const request=++recordingRequest,player=$('player'),source=player.getAttribute('src');
 try{
  const response=await fetch(source);if(!response.ok)throw Error('Recording request failed');
  const blob=await response.blob();if(request!==recordingRequest)return;
  const requested=pendingSeek?.source===source?pendingSeek.time:null;
  const url=URL.createObjectURL(blob);if(recordingBlobUrl)URL.revokeObjectURL(recordingBlobUrl);recordingBlobUrl=url;
  player.src=url;player.playbackRate=Number($('speed').value);
  if(requested!==null)pendingSeek={source:url,time:requested};
 }catch{if(request===recordingRequest)$('media-status').textContent='Press play to watch. Reload this page if timestamp seeking is unavailable.';}
}
prepareRecording();
window.addEventListener('hashchange',()=>{if(videos.some(v=>v.id===location.hash.slice(1)))prepareRecording();});
