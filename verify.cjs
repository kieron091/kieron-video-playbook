const fs=require('fs'),vm=require('vm'),assert=require('assert');
const context=vm.createContext({});
for(const name of ['data','tracker','planners','learn'])vm.runInContext(fs.readFileSync('dist/'+name+'.js','utf8'),context);
vm.runInContext(`for(const v of videos){
 if(!planners[v.id]?.length)throw Error(v.id+' missing planner');
 if(stageGroups[v.id].length!==planners[v.id].length)throw Error(v.id+' stage mismatch');
 for(const stage of referenceStages(v))if(!Number.isFinite(stage.start)||!Number.isFinite(stage.end)||!v.sequence[stage.group])throw Error(v.id+' invalid stage');
 for(let run=0;run<4;run++){const quiz=variedTest(v,run);if(quiz.length!==6||quiz.some(q=>!q.options.includes(q.answer)||q.options.length<2))throw Error(v.id+' invalid quiz');}
}`,context);
for(const name of fs.readdirSync('dist').filter(n=>n.endsWith('.js')))new vm.Script(fs.readFileSync('dist/'+name,'utf8'));
const ids=vm.runInContext('videos.map(v=>v.id)',context);
for(const id of ids)assert(fs.statSync('dist/media/'+id+'.mp4').size>100000,id+' missing media');
console.log('Passed: all 13 media files, planner mappings, timestamp stages, 52 quiz variants, and JavaScript syntax.');
vm.runInContext(fs.readFileSync('dist/lessons-data.js','utf8'),context);
const lessonData=vm.runInContext('lessons',context);
assert.equal(lessonData.length,35);
assert.equal(new Set(lessonData.map(l=>l.id)).size,35);
assert(lessonData.every(l=>/^https:\/\/www.tiktok.com\/@[^/]+\/video\/\d+$/.test(l.url)));
assert(fs.readFileSync('dist/index.html','utf8').includes('href="lessons.html"'));
console.log('Passed: 35 unique TikTok lessons and Lessons tab navigation.');
