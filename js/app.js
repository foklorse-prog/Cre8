/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const CATS = [
  { id:'print', name:'Print', ico:'🖨️',
    svg:`<svg viewBox="0 0 120 80" fill="none" style="opacity:.7">
      <rect x="24" y="10" width="72" height="60" rx="3" fill="#313139" stroke="#42424e" stroke-width="1.2"/>
      <rect x="32" y="18" width="56" height="9" rx="2" fill="#7c6af5" opacity=".75"/>
      <rect x="32" y="32" width="42" height="3.5" rx="2" fill="#55556a"/>
      <rect x="32" y="39" width="50" height="3" rx="1.5" fill="#42424e"/>
      <rect x="32" y="45" width="44" height="3" rx="1.5" fill="#42424e"/>
      <rect x="32" y="55" width="32" height="8" rx="3" fill="#42424e"/>
    </svg>`,
    types:[
      {id:'poster',n:'Poster',ico:'🪧',dim:'Large format'},
      {id:'flyer',n:'Flyer',ico:'📋',dim:'A5 · Letter'},
      {id:'menu',n:'Menu',ico:'🍽️',dim:'A4 · A5'},
      {id:'invitation',n:'Invitation',ico:'✉️',dim:'5×7" · A6'},
      {id:'banner',n:'Banner',ico:'🏮',dim:'Wide format'},
      {id:'certificate',n:'Certificate',ico:'🏅',dim:'Landscape'},
      {id:'resume',n:'Resume / CV',ico:'📄',dim:'A4 · Letter'},
    ]
  },
  { id:'multipage', name:'Multi-Page', ico:'📚',
    svg:`<svg viewBox="0 0 120 80" fill="none" style="opacity:.7">
      <rect x="8" y="12" width="50" height="58" rx="3" fill="#313139" stroke="#42424e" stroke-width="1.2"/>
      <rect x="62" y="12" width="50" height="58" rx="3" fill="#313139" stroke="#42424e" stroke-width="1.2"/>
      <rect x="14" y="20" width="38" height="6" rx="2" fill="#7c6af5" opacity=".6"/>
      <rect x="14" y="30" width="32" height="3" rx="1.5" fill="#55556a"/>
      <rect x="14" y="36" width="36" height="3" rx="1.5" fill="#42424e"/>
      <rect x="14" y="42" width="28" height="3" rx="1.5" fill="#42424e"/>
      <rect x="68" y="20" width="38" height="28" rx="2" fill="#42424e" opacity=".4"/>
      <rect x="68" y="52" width="32" height="3" rx="1.5" fill="#42424e"/>
      <rect x="68" y="58" width="26" height="3" rx="1.5" fill="#42424e"/>
    </svg>`,
    types:[
      {id:'brochure-bi',n:'Bi-fold',ico:'📰',dim:'A4 · Letter'},
      {id:'brochure-tri',n:'Tri-fold',ico:'📂',dim:'6 panels'},
      {id:'magazine',n:'Magazine',ico:'📖',dim:'A4 · Letter'},
      {id:'report',n:'Report',ico:'📊',dim:'A4 · Letter'},
      {id:'portfolio',n:'Portfolio',ico:'🎨',dim:'A4 · Square'},
      {id:'catalog',n:'Catalog',ico:'🗂️',dim:'A4 · Letter'},
      {id:'booklet',n:'Booklet',ico:'📔',dim:'A5 · Half-ltr'},
    ]
  },
  { id:'stationery', name:'Stationery & ID', ico:'💼',
    svg:`<svg viewBox="0 0 120 80" fill="none" style="opacity:.7">
      <rect x="26" y="24" width="68" height="40" rx="3" fill="#313139" stroke="#42424e" stroke-width="1.2"/>
      <rect x="26" y="24" width="68" height="9" rx="2" fill="#7c6af5" opacity=".5"/>
      <rect x="32" y="38" width="22" height="3.5" rx="2" fill="#55556a"/>
      <rect x="32" y="44" width="48" height="2.5" rx="1.5" fill="#42424e"/>
      <rect x="32" y="49" width="40" height="2.5" rx="1.5" fill="#42424e"/>
      <rect x="10" y="14" width="34" height="22" rx="2" fill="#28282f" stroke="#42424e" stroke-width="1.2"/>
      <rect x="14" y="18" width="12" height="7" rx="1.5" fill="#7c6af5" opacity=".4"/>
      <rect x="14" y="27" width="22" height="2" rx="1" fill="#42424e"/>
    </svg>`,
    types:[
      {id:'biz-card',n:'Business Card',ico:'🪪',dim:'3.5×2" · 85×55mm'},
      {id:'letterhead',n:'Letterhead',ico:'📝',dim:'A4 · Letter'},
      {id:'envelope',n:'Envelope',ico:'🫅',dim:'#10 · DL · C5'},
    ]
  },
  { id:'digital', name:'Digital & Social', ico:'📱',
    svg:`<svg viewBox="0 0 120 80" fill="none" style="opacity:.7">
      <rect x="40" y="6" width="40" height="68" rx="6" fill="#313139" stroke="#42424e" stroke-width="1.2"/>
      <rect x="44" y="14" width="32" height="32" rx="2" fill="#42424e" opacity=".5"/>
      <rect x="44" y="50" width="22" height="4" rx="2" fill="#7c6af5" opacity=".8"/>
      <rect x="44" y="57" width="28" height="2.5" rx="1.5" fill="#42424e"/>
      <rect x="44" y="62" width="20" height="2.5" rx="1.5" fill="#42424e"/>
    </svg>`,
    types:[
      {id:'social-post',n:'Social Post',ico:'📸',dim:'Feed · Story'},
      {id:'thumbnail',n:'Thumbnail',ico:'▶️',dim:'YouTube · Reels'},
      {id:'infographic',n:'Infographic',ico:'📊',dim:'Tall · Wide'},
      {id:'digital-poster',n:'Digital Poster',ico:'🖥️',dim:'FHD · 4K'},
      {id:'email-header',n:'Email Header',ico:'📧',dim:'600px wide'},
    ]
  },
  { id:'product', name:'Product', ico:'📦',
    svg:`<svg viewBox="0 0 120 80" fill="none" style="opacity:.7">
      <rect x="30" y="18" width="60" height="46" rx="4" fill="#313139" stroke="#42424e" stroke-width="1.2"/>
      <rect x="30" y="18" width="60" height="14" rx="3" fill="#7c6af5" opacity=".5"/>
      <circle cx="60" cy="50" r="11" fill="#28282f" stroke="#42424e" stroke-width="1.2"/>
      <rect x="38" y="43" width="44" height="3" rx="1.5" fill="#42424e" opacity=".5"/>
      <rect x="42" y="49" width="36" height="2.5" rx="1.5" fill="#42424e"/>
    </svg>`,
    types:[
      {id:'sticker',n:'Sticker',ico:'🔖',dim:'Circle · Die-cut'},
      {id:'packaging',n:'Packaging',ico:'📦',dim:'Custom dieline'},
      {id:'label',n:'Product Label',ico:'🏷️',dim:'Custom'},
    ]
  },
  { id:'events', name:'Events & Promo', ico:'🎉',
    svg:`<svg viewBox="0 0 120 80" fill="none" style="opacity:.7">
      <rect x="14" y="10" width="92" height="60" rx="4" fill="#313139" stroke="#42424e" stroke-width="1.2"/>
      <rect x="14" y="10" width="92" height="24" rx="3" fill="#42424e" opacity=".35"/>
      <circle cx="38" cy="22" r="9" fill="#7c6af5" opacity=".4"/>
      <rect x="52" y="17" width="40" height="5" rx="2.5" fill="#7c6af5" opacity=".8"/>
      <rect x="52" y="25" width="28" height="3" rx="1.5" fill="#55556a"/>
      <rect x="20" y="42" width="32" height="4" rx="2" fill="#55556a"/>
      <rect x="20" y="49" width="52" height="2.5" rx="1.5" fill="#42424e"/>
      <rect x="20" y="54" width="40" height="2.5" rx="1.5" fill="#42424e"/>
      <rect x="64" y="47" width="28" height="11" rx="3.5" fill="#7c6af5" opacity=".6"/>
    </svg>`,
    types:[
      {id:'event-poster',n:'Event Poster',ico:'🎪',dim:'A3 · 18×24"'},
      {id:'event-flyer',n:'Event Flyer',ico:'🎫',dim:'A5 · Half-ltr'},
      {id:'social-event',n:'Social Event Card',ico:'📣',dim:'1080×1080'},
      {id:'ticket',n:'Ticket',ico:'🎟️',dim:'5.5×2"'},
    ]
  },
];

const SIZES_DB = {
  poster:[
    {n:'A3',w:297,h:420,u:'mm',r:.707,ctx:'Standard wall poster'},
    {n:'A2',w:420,h:594,u:'mm',r:.707,ctx:'Large venue display'},
    {n:'18×24"',w:18,h:24,u:'in',r:.75,ctx:'US concert / movie'},
    {n:'24×36"',w:24,h:36,u:'in',r:.667,ctx:'US large-format'},
  ],
  flyer:[
    {n:'A5',w:148,h:210,u:'mm',r:.704,ctx:'Half of A4 sheet'},
    {n:'Letter',w:8.5,h:11,u:'in',r:.773,ctx:'US standard page'},
    {n:'Half-letter',w:5.5,h:8.5,u:'in',r:.647,ctx:'Compact handout'},
  ],
  menu:[
    {n:'A4',w:210,h:297,u:'mm',r:.707,ctx:'Standard restaurant menu'},
    {n:'A5',w:148,h:210,u:'mm',r:.704,ctx:'Compact café menu'},
    {n:'4.25×11"',w:4.25,h:11,u:'in',r:.386,ctx:'Narrow tri-fold panel'},
  ],
  invitation:[
    {n:'5×7"',w:5,h:7,u:'in',r:.714,ctx:'Classic invitation card'},
    {n:'A6',w:105,h:148,u:'mm',r:.709,ctx:'Postcard size'},
    {n:'4×6"',w:4,h:6,u:'in',r:.667,ctx:'Small greeting card'},
  ],
  banner:[
    {n:'2×6 ft',w:2,h:6,u:'ft',r:.333,ctx:'Retractable pull-up'},
    {n:'3×6 ft',w:3,h:6,u:'ft',r:.5,ctx:'Standard backdrop'},
    {n:'4×8 ft',w:4,h:8,u:'ft',r:.5,ctx:'Large event banner'},
    {n:'8×4 ft',w:8,h:4,u:'ft',r:2,ctx:'Wide tarpaulin'},
  ],
  certificate:[
    {n:'A4 Landscape',w:297,h:210,u:'mm',r:1.414,ctx:'Standard certificate'},
    {n:'Letter Landscape',w:11,h:8.5,u:'in',r:1.294,ctx:'US certificate size'},
  ],
  resume:[
    {n:'A4',w:210,h:297,u:'mm',r:.707,ctx:'International standard'},
    {n:'Letter',w:8.5,h:11,u:'in',r:.773,ctx:'US / Canada standard'},
  ],
  'brochure-bi':[
    {n:'A4 Bi-fold',w:420,h:297,u:'mm',r:1.414,ctx:'Opens to A3 spread'},
    {n:'Letter Bi-fold',w:11,h:8.5,u:'in',r:1.294,ctx:'US standard fold'},
  ],
  'brochure-tri':[
    {n:'A4 Tri-fold',w:630,h:297,u:'mm',r:2.12,ctx:'3 equal panels'},
    {n:'Letter Tri-fold',w:8.5,h:11,u:'in',r:.773,ctx:'US rack brochure'},
  ],
  magazine:[
    {n:'A4',w:210,h:297,u:'mm',r:.707,ctx:'International magazine'},
    {n:'8.5×11"',w:8.5,h:11,u:'in',r:.773,ctx:'US magazine standard'},
    {n:'Digest 5.5×8.5"',w:5.5,h:8.5,u:'in',r:.647,ctx:'Compact digest size'},
  ],
  report:[
    {n:'A4',w:210,h:297,u:'mm',r:.707,ctx:'International standard'},
    {n:'Letter',w:8.5,h:11,u:'in',r:.773,ctx:'US standard'},
  ],
  portfolio:[
    {n:'A4',w:210,h:297,u:'mm',r:.707,ctx:'Print portfolio standard'},
    {n:'Letter',w:8.5,h:11,u:'in',r:.773,ctx:'US portfolio'},
    {n:'Square 8×8"',w:8,h:8,u:'in',r:1,ctx:'Square book format'},
  ],
  catalog:[
    {n:'A4',w:210,h:297,u:'mm',r:.707,ctx:'Product catalog standard'},
    {n:'Letter',w:8.5,h:11,u:'in',r:.773,ctx:'US catalog'},
  ],
  booklet:[
    {n:'A5',w:148,h:210,u:'mm',r:.704,ctx:'Half A4, saddle-stitch'},
    {n:'Half-letter',w:5.5,h:8.5,u:'in',r:.647,ctx:'US booklet size'},
  ],
  'biz-card':[
    {n:'Standard 3.5×2"',w:3.5,h:2,u:'in',r:1.75,ctx:'Universal wallet size'},
    {n:'Square 2.5×2.5"',w:2.5,h:2.5,u:'in',r:1,ctx:'Square card format'},
    {n:'EU 85×55mm',w:85,h:55,u:'mm',r:1.545,ctx:'European standard'},
  ],
  letterhead:[
    {n:'A4',w:210,h:297,u:'mm',r:.707,ctx:'International letterhead'},
    {n:'Letter',w:8.5,h:11,u:'in',r:.773,ctx:'US letterhead'},
  ],
  envelope:[
    {n:'#10 Envelope',w:9.5,h:4.13,u:'in',r:2.3,ctx:'Standard US business'},
    {n:'DL (110×220mm)',w:220,h:110,u:'mm',r:2,ctx:'EU standard, fits A4 tri-fold'},
    {n:'C5 (162×229mm)',w:162,h:229,u:'mm',r:.708,ctx:'Fits A5 or folded A4'},
  ],
  sticker:[
    {n:'Circle 2"',w:2,h:2,u:'in',r:1,ctx:'Standard round sticker'},
    {n:'Rect 3×4"',w:4,h:3,u:'in',r:1.333,ctx:'Label or packaging'},
    {n:'A6 Sheet',w:148,h:105,u:'mm',r:1.41,ctx:'Full sticker sheet'},
  ],
  packaging:[{n:'Custom',w:0,h:0,u:'mm',r:1,ctx:'Set your own dimensions'}],
  label:[{n:'Custom',w:0,h:0,u:'mm',r:1,ctx:'Set your own dimensions'}],
  'social-post':[
    {n:'Instagram Square',w:1080,h:1080,u:'px',r:1,ctx:'Standard IG feed post'},
    {n:'Instagram Portrait',w:1080,h:1350,u:'px',r:.8,ctx:'Best reach on IG feed'},
    {n:'Instagram Story',w:1080,h:1920,u:'px',r:.5625,ctx:'IG / FB / TikTok story'},
    {n:'Facebook Post',w:1200,h:628,u:'px',r:1.91,ctx:'FB news feed link'},
    {n:'Twitter / X Post',w:1600,h:900,u:'px',r:1.78,ctx:'Twitter in-stream image'},
    {n:'LinkedIn Post',w:1200,h:627,u:'px',r:1.91,ctx:'LinkedIn feed post'},
  ],
  thumbnail:[
    {n:'YouTube 720p',w:1280,h:720,u:'px',r:1.778,ctx:'Standard HD thumbnail'},
    {n:'YouTube 1080p',w:1920,h:1080,u:'px',r:1.778,ctx:'Full HD thumbnail'},
  ],
  infographic:[
    {n:'Tall 800×2000',w:800,h:2000,u:'px',r:.4,ctx:'Vertical scroll infographic'},
    {n:'Wide 1200×628',w:1200,h:628,u:'px',r:1.91,ctx:'Social share graphic'},
    {n:'Square 1080×1080',w:1080,h:1080,u:'px',r:1,ctx:'Social feed infographic'},
  ],
  'digital-poster':[
    {n:'FHD 1920×1080',w:1920,h:1080,u:'px',r:1.778,ctx:'TV / presentation screen'},
    {n:'4K 3840×2160',w:3840,h:2160,u:'px',r:1.778,ctx:'4K display / digital signage'},
    {n:'Square 1080×1080',w:1080,h:1080,u:'px',r:1,ctx:'Square screen display'},
  ],
  'email-header':[
    {n:'600×200px',w:600,h:200,u:'px',r:3,ctx:'Standard email header'},
    {n:'600×300px',w:600,h:300,u:'px',r:2,ctx:'Taller email hero banner'},
  ],
  'event-poster':[
    {n:'A3',w:297,h:420,u:'mm',r:.707,ctx:'Standard event poster'},
    {n:'A2',w:420,h:594,u:'mm',r:.707,ctx:'Large venue poster'},
    {n:'18×24"',w:18,h:24,u:'in',r:.75,ctx:'US gig poster size'},
  ],
  'event-flyer':[
    {n:'A5',w:148,h:210,u:'mm',r:.704,ctx:'Handout flyer'},
    {n:'Half-letter',w:5.5,h:8.5,u:'in',r:.647,ctx:'US handout size'},
  ],
  'social-event':[
    {n:'1080×1080px',w:1080,h:1080,u:'px',r:1,ctx:'Square event card'},
    {n:'1080×1920px',w:1080,h:1920,u:'px',r:.5625,ctx:'Story / portrait card'},
  ],
  ticket:[
    {n:'5.5×2"',w:5.5,h:2,u:'in',r:2.75,ctx:'Standard event ticket'},
    {n:'A7 (105×74mm)',w:105,h:74,u:'mm',r:1.419,ctx:'Small ticket / voucher'},
  ],
};

// Canvas display px
const CPX = {
  poster:{w:580,h:820},flyer:{w:480,h:680},menu:{w:560,h:794},
  invitation:{w:420,h:588},banner:{w:900,h:300},certificate:{w:794,h:560},
  resume:{w:560,h:794},'brochure-bi':{w:900,h:636},'brochure-tri':{w:1100,h:518},
  magazine:{w:560,h:794},report:{w:560,h:794},portfolio:{w:560,h:560},
  catalog:{w:560,h:794},booklet:{w:480,h:680},'biz-card':{w:420,h:240},
  letterhead:{w:560,h:794},envelope:{w:720,h:313},sticker:{w:300,h:300},
  packaging:{w:600,h:600},label:{w:480,h:240},'social-post':{w:600,h:600},
  thumbnail:{w:720,h:405},infographic:{w:480,h:900},'digital-poster':{w:800,h:450},
  'email-header':{w:600,h:200},'event-poster':{w:580,h:820},'event-flyer':{w:480,h:680},
  'social-event':{w:600,h:600},ticket:{w:660,h:240},
};

const INTENTS=[
  {id:'announce',l:'Announce an event',ico:'📣'},
  {id:'promote',l:'Promote something',ico:'🚀'},
  {id:'inform',l:'Share information',ico:'📚'},
  {id:'sell',l:'Sell a product',ico:'🛒'},
  {id:'brand',l:'Build brand presence',ico:'✨'},
  {id:'celebrate',l:'Celebrate something',ico:'🎉'},
  {id:'showcase',l:'Showcase my work',ico:'🎨'},
  {id:'instruct',l:'Give instructions',ico:'📌'},
];

const PALETTES=[
  {id:'midnight',n:'Night',c:['#0a0a1a','#1a1a3e','#2d2d6b','#9898d0']},
  {id:'ember',n:'Ember',c:['#1a0800','#6b2300','#c44a00','#ff8040']},
  {id:'sage',n:'Sage',c:['#0d1a0f','#1e4a28','#3a8a4e','#7ac48e']},
  {id:'coastal',n:'Sea',c:['#0a1a2e','#0d4a7a','#1a8ac8','#70c4f0']},
  {id:'terra',n:'Terra',c:['#1a0a00','#6b2a14','#c4673a','#e8b090']},
  {id:'nordic',n:'Nordic',c:['#f0eeea','#d4d0ca','#a8a49e','#4a4842']},
  {id:'gold',n:'Gold',c:['#0a0800','#3a2800','#c89400','#f0d060']},
  {id:'rose',n:'Rose',c:['#1a080c','#6b1a2e','#c43a5e','#f0a0b8']},
  {id:'violet',n:'Violet',c:['#0f0a1e','#2a1a5e','#7c6af5','#c4b8ff']},
  {id:'tropic',n:'Tropic',c:['#0a1a0a','#0d6b3a','#00c46a','#b0f4d0']},
];

/* ═══════════════════════════════════════════
   STATE
═══════════════════════════════════════════ */
const S={
  name:'Untitled_Project',
  cat:null,type:null,sizeObj:null,
  customW:null,customH:null,customUnit:'mm',
  intent:null,
  images:[],palette:null,customColors:[],
  rawText:'',parsedText:[],
  pages:1,generated:false,
};
let pendingImgIdx=null, cvEl=null, theme='dark';

const $=id=>document.getElementById(id);

/* ═══════════════════════════════════════════
   THEME TOGGLE
═══════════════════════════════════════════ */
$('btn-theme').addEventListener('click',()=>{
  theme=theme==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',theme);
  $('btn-theme').textContent=theme==='dark'?'🌙':'☀️';
});

/* ═══════════════════════════════════════════
   RESIZABLE PANELS
═══════════════════════════════════════════ */
function makeResizable(handle,panel,side){
  let dragging=false,startX=0,startW=0;
  handle.addEventListener('mousedown',e=>{
    dragging=true;startX=e.clientX;startW=panel.offsetWidth;
    document.body.style.cursor='col-resize';document.body.style.userSelect='none';
    e.preventDefault();
  });
  document.addEventListener('mousemove',e=>{
    if(!dragging)return;
    const dx=side==='left'?e.clientX-startX:startX-e.clientX;
    const nw=Math.max(220,Math.min(500,startW+dx));
    panel.style.width=nw+'px';
    document.getElementById('shell').style.gridTemplateColumns=
      side==='left'
        ? `${nw}px 1fr ${$('right').offsetWidth}px`
        : `${$('left').offsetWidth}px 1fr ${nw}px`;
  });
  document.addEventListener('mouseup',()=>{
    if(dragging){dragging=false;document.body.style.cursor='';document.body.style.userSelect='';}
  });
}
makeResizable($('rh-left'),$('left'),'left');
makeResizable($('rh-right'),$('right'),'right');

/* ═══════════════════════════════════════════
   PANEL TABS
═══════════════════════════════════════════ */
document.querySelectorAll('.ptab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelectorAll('.ptab').forEach(x=>x.classList.remove('on'));t.classList.add('on');
  $('tab-setup').style.display=t.dataset.tab==='setup'?'flex':'none';
  $('tab-layers').style.display=t.dataset.tab==='layers'?'flex':'none';
  $('tab-pages').style.display=t.dataset.tab==='pages'?'flex':'none';
}));
$('tab-setup').style.display='flex';

/* ═══════════════════════════════════════════
   TOOL BUTTONS
═══════════════════════════════════════════ */
document.querySelectorAll('.tbtn[data-t]').forEach(b=>b.addEventListener('click',()=>{
  document.querySelectorAll('.tbtn[data-t]').forEach(x=>x.classList.remove('on'));b.classList.add('on');
}));

/* ═══════════════════════════════════════════
   FILENAME
═══════════════════════════════════════════ */
const fnEl=$('fname');
fnEl.addEventListener('input',()=>{S.name=fnEl.textContent.trim()||'Untitled_Project';updateDocInfo();});
fnEl.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();fnEl.blur();}});

/* ═══════════════════════════════════════════
   STEP REVEAL HELPER
═══════════════════════════════════════════ */
function revealStep(id){
  const el=$(id);
  if(!el.classList.contains('visible')){
    el.classList.add('visible');
    el.scrollIntoView({behavior:'smooth',block:'nearest'});
  }
}
function markStepDone(id){
  const num=$(id).querySelector('.step-head-num');
  if(num)num.textContent='✓';
  $(id).classList.add('done');
}

/* ═══════════════════════════════════════════
   STEP 1: CATEGORY CARDS
═══════════════════════════════════════════ */
function buildCatGrid(){
  const el=$('cat-grid');
  el.innerHTML=CATS.map(c=>`
    <div class="cat-card${S.cat===c.id?' on':''}" data-id="${c.id}">
      <div class="cat-sel-dot"></div>
      <div class="cat-preview">${c.svg}</div>
      <div class="cat-foot"><span class="cat-ico">${c.ico}</span><span class="cat-name">${c.name}</span></div>
    </div>`).join('');
  el.querySelectorAll('.cat-card').forEach(card=>card.addEventListener('click',()=>{
    el.querySelectorAll('.cat-card').forEach(x=>x.classList.remove('on'));
    card.classList.add('on');S.cat=card.dataset.id;S.type=null;S.sizeObj=null;
    markStepDone('step-cat');
    buildTypeGrid();
    revealStep('step-type');
    $('step-type-title').textContent=CATS.find(c=>c.id===S.cat)?.name+' formats';
    updateDocInfo();validate();
    showPlaceholder();
  }));
}

/* ═══════════════════════════════════════════
   STEP 2: TYPE CHIPS
═══════════════════════════════════════════ */
function buildTypeGrid(){
  const cat=CATS.find(c=>c.id===S.cat);if(!cat)return;
  const el=$('type-grid');
  el.innerHTML=cat.types.map(t=>`
    <div class="type-chip${S.type===t.id?' on':''}" data-id="${t.id}">
      <div class="tc-dot"></div>
      <span class="tc-ico">${t.ico}</span>
      <div><span class="tc-name">${t.n}</span><span class="tc-dim">${t.dim}</span></div>
    </div>`).join('');
  el.querySelectorAll('.type-chip').forEach(c=>c.addEventListener('click',()=>{
    el.querySelectorAll('.type-chip').forEach(x=>x.classList.remove('on'));
    c.classList.add('on');S.type=c.dataset.id;S.sizeObj=null;
    markStepDone('step-type');
    buildSizeGrid();
    revealStep('step-size');
    updateDocInfo();validate();
    showPlaceholder();
  }));
}

/* ═══════════════════════════════════════════
   STEP 3: SIZE CARDS
═══════════════════════════════════════════ */
function buildSizeGrid(){
  const sizes=(S.type&&SIZES_DB[S.type])||[];
  const el=$('size-grid');
  el.innerHTML=sizes.map((s,i)=>{
    const r=s.r;let rw,rh;
    if(r>=1){rw=36;rh=Math.max(6,Math.round(36/r));}
    else{rh=36;rw=Math.max(6,Math.round(36*r));}
    rw=Math.min(rw,52);rh=Math.min(rh,52);
    return `<div class="size-card${S.sizeObj&&S.sizeObj.n===s.n?' on':''}" data-i="${i}">
      <div class="size-card-dot"></div>
      <div class="size-preview-box"><div class="size-rect-el" style="width:${rw}px;height:${rh}px"></div></div>
      <div class="size-name">${s.n}</div>
      <div class="size-dims">${s.w}${s.u==='px'?'px':s.u} × ${s.h}${s.u==='px'?'px':s.u}</div>
      <div class="size-context">${s.ctx}</div>
    </div>`;
  }).join('');
  el.querySelectorAll('.size-card').forEach((c,i)=>c.addEventListener('click',()=>{
    el.querySelectorAll('.size-card').forEach(x=>x.classList.remove('on'));
    c.classList.add('on');S.sizeObj=sizes[i];S.customW=null;S.customH=null;
    $('csr').classList.remove('open');
    markStepDone('step-size');
    revealStep('step-intent');
    updateDocInfo();validate();showPlaceholder();
  }));
}

// Custom size
$('csr').querySelector('.csr-label').addEventListener('click',()=>$('csr').classList.add('open'));
function updateCustomSize(){
  const w=parseFloat($('cdw').value),h=parseFloat($('cdh').value),u=$('cdu').value;
  if(w>0&&h>0){
    S.customW=w;S.customH=h;S.customUnit=u;S.sizeObj=null;
    $('size-grid').querySelectorAll('.size-card').forEach(x=>x.classList.remove('on'));
    markStepDone('step-size');revealStep('step-intent');
    updateDocInfo();validate();showPlaceholder();
  }
}
$('cdw').addEventListener('input',updateCustomSize);
$('cdh').addEventListener('input',updateCustomSize);
$('cdu').addEventListener('change',updateCustomSize);

/* ═══════════════════════════════════════════
   STEP 4: INTENT
═══════════════════════════════════════════ */
function buildIntentGrid(){
  const el=$('intent-grid');
  el.innerHTML=INTENTS.map(i=>`
    <div class="intent-chip${S.intent===i.id?' on':''}" data-id="${i.id}">
      <span>${i.ico}</span><span>${i.l}</span>
    </div>`).join('');
  el.querySelectorAll('.intent-chip').forEach(c=>c.addEventListener('click',()=>{
    el.querySelectorAll('.intent-chip').forEach(x=>x.classList.remove('on'));
    c.classList.add('on');S.intent=c.dataset.id;
    markStepDone('step-intent');
    revealStep('step-stuff');
    updateDocInfo();validate();
  }));
}

/* ═══════════════════════════════════════════
   STUFF CARDS TOGGLE
═══════════════════════════════════════════ */
['sc-img','sc-col','sc-txt'].forEach(id=>{
  const sc=$(id);
  sc.querySelector('.sc-head').addEventListener('click',()=>{
    sc.classList.toggle('open');
    sc.querySelector('.sc-arr').style.transform=sc.classList.contains('open')?'rotate(90deg)':'';
  });
});
$('sc-img').classList.add('open');
$('sc-img').querySelector('.sc-arr').style.transform='rotate(90deg)';

/* ═══════════════════════════════════════════
   IMAGES
═══════════════════════════════════════════ */
const dz=$('dz'),fi=$('fi');
dz.addEventListener('click',()=>fi.click());
dz.addEventListener('dragover',e=>{e.preventDefault();dz.classList.add('over');});
dz.addEventListener('dragleave',()=>dz.classList.remove('over'));
dz.addEventListener('drop',e=>{
  e.preventDefault();dz.classList.remove('over');
  Array.from(e.dataTransfer.files).forEach(f=>{
    if(f.type.startsWith('image/')){const r=new FileReader();r.onload=ev=>addImg(ev.target.result);r.readAsDataURL(f);}
  });
});
fi.addEventListener('change',()=>{Array.from(fi.files).forEach(f=>{const r=new FileReader();r.onload=ev=>addImg(ev.target.result);r.readAsDataURL(f);});fi.value='';});
$('url-btn').addEventListener('click',()=>{const u=$('url-inp').value.trim();if(u){addImg(u);$('url-inp').value='';}});
$('url-inp').addEventListener('keydown',e=>{if(e.key==='Enter')$('url-btn').click();});

function addImg(url){
  const img=new Image();img.crossOrigin='anonymous';
  const done=()=>{
    S.images.push({url,role:S.images.length===0?'focal':'support',imgEl:img});
    renderImgs();if(S.images.length===1)suggestPalFromImg();
    updateStuff();validate();redrawLive();
  };
  img.onload=done;
  img.onerror=()=>{
    const i2=new Image();
    i2.onload=()=>{S.images.push({url,role:S.images.length===0?'focal':'support',imgEl:i2});renderImgs();if(S.images.length===1)suggestPalFromImg();updateStuff();validate();redrawLive();};
    i2.onerror=()=>alert('Could not load that image.');i2.src=url;
  };
  img.src=url;
}

function renderImgs(){
  const el=$('img-grid');el.innerHTML='';
  const n=S.images.length;
  $('img-status').textContent=n?`${n} image${n>1?'s':''} added`:'Drop a photo or paste a URL';
  $('sc-img').classList.toggle('filled',n>0);
  S.images.forEach((im,i)=>{
    const d=document.createElement('div');d.className='img-th';
    const cls=im.role==='background'?'rt-bg':im.role==='support'?'rt-support':'rt-focal';
    d.innerHTML=`<img src="${im.url}" alt=""/><div class="img-ov"><span class="img-role-tag ${cls}">${im.role}</span><span class="img-rm">✕</span></div>`;
    d.querySelector('.img-rm').addEventListener('click',e=>{e.stopPropagation();S.images.splice(i,1);renderImgs();updateStuff();validate();redrawLive();});
    d.querySelector('img').addEventListener('click',()=>{pendingImgIdx=i;$('role-img').src=im.url;$('role-modal').classList.add('open');$('role-modal').querySelectorAll('.ro').forEach(r=>r.classList.toggle('on',r.dataset.r===im.role));});
    el.appendChild(d);
  });
}

function suggestPalFromImg(){
  if(!S.palette){
    S.palette='coastal';renderPalGrid();
    $('col-status').textContent='Colors suggested from your image';
    $('sc-col').classList.add('filled');$('ud-col').classList.add('has');
    $('extracted-note').style.display='flex';
    if(S.generated)showToast('🎨','Your image has great tones in it. Here are a couple of ways to use them in your palette.',
      [{label:'Keep suggestion',action:null},{label:'Browse palettes',action:()=>{$('sc-col').classList.add('open');$('sc-col').querySelector('.sc-arr').style.transform='rotate(90deg)';}}]);
  }
}

$('role-modal').querySelectorAll('.ro').forEach(r=>r.addEventListener('click',()=>{
  if(pendingImgIdx!==null)S.images[pendingImgIdx].role=r.dataset.r;
  $('role-modal').classList.remove('open');renderImgs();redrawLive();
}));
$('role-modal').addEventListener('click',e=>{if(e.target===$('role-modal'))$('role-modal').classList.remove('open');});

/* ═══════════════════════════════════════════
   COLORS
═══════════════════════════════════════════ */
function renderPalGrid(){
  const el=$('pal-grid');
  el.innerHTML=PALETTES.map(p=>`
    <div class="pal-chip${S.palette===p.id?' on':''}" data-id="${p.id}" title="${p.n}">
      <div class="pal-swatches">${p.c.map(c=>`<div class="pal-sw" style="background:${c}"></div>`).join('')}</div>
      <div class="pal-lbl">${p.n}</div>
    </div>`).join('');
  el.querySelectorAll('.pal-chip').forEach(c=>c.addEventListener('click',()=>{
    el.querySelectorAll('.pal-chip').forEach(x=>x.classList.remove('on'));
    c.classList.add('on');S.palette=c.dataset.id;S.customColors=[];
    $('ccr').querySelectorAll('.csw').forEach(s=>s.remove());
    $('col-status').textContent=PALETTES.find(p=>p.id===S.palette)?.n+' palette';
    $('sc-col').classList.add('filled');$('ud-col').classList.add('has');
    $('extracted-note').style.display='none';
    updateStuff();validate();redrawLive();
  }));
}

$('add-col').addEventListener('click',()=>{
  const sw=document.createElement('div');sw.className='csw';
  const inp=document.createElement('input');inp.type='color';
  inp.value='#'+Math.floor(Math.random()*0xffffff).toString(16).padStart(6,'0');
  inp.style.cssText='position:absolute;inset:-3px;width:calc(100%+6px);height:calc(100%+6px);border:none;padding:0;cursor:pointer;border-radius:0';
  inp.addEventListener('input',()=>{
    S.palette=null;$('pal-grid').querySelectorAll('.pal-chip').forEach(x=>x.classList.remove('on'));
    const c=[];$('ccr').querySelectorAll('input[type=color]').forEach(i=>c.push(i.value));S.customColors=c;
    $('sc-col').classList.add('filled');$('ud-col').classList.add('has');
    updateStuff();validate();redrawLive();
  });
  sw.appendChild(inp);$('ccr').insertBefore(sw,$('add-col'));
});

/* ═══════════════════════════════════════════
   MAGIC TEXT
═══════════════════════════════════════════ */
$('magic-ta').addEventListener('input',e=>{
  S.rawText=e.target.value;
  $('parse-btn').style.display=S.rawText.trim().length>10?'flex':'none';
  $('sc-txt').classList.toggle('filled',S.rawText.trim().length>0);
  $('ud-txt').classList.toggle('has',S.rawText.trim().length>0);
  $('txt-status').textContent=S.rawText.trim()?'Content added':'Paste anything — we\'ll sort it out';
  updateStuff();validate();
});

$('parse-btn').addEventListener('click',()=>{
  S.parsedText=magicParse(S.rawText);
  renderParsed();
  $('parsed-out').style.display='block';
  $('parse-btn').style.display='none';
  redrawLive();
  showToast('✦',`Parsed ${S.parsedText.length} content blocks. Everything editable after Generate.`,[
    {label:'Looks good',action:null},
    {label:'Re-parse',action:()=>{$('parse-btn').style.display='flex';$('parsed-out').style.display='none';}}
  ]);
});

function magicParse(text){
  const lines=text.split('\n').map(l=>l.trim()).filter(Boolean);
  const result=[];
  const dateRx=/\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\.?\s+\d{1,2}(?:st|nd|rd|th)?,?\s*\d{4})/i;
  const timeRx=/\b\d{1,2}:\d{2}\s*(?:am|pm)?\b|\b\d{1,2}\s*(?:am|pm)\b/i;
  const listRx=/^[-•·*]\s+.+/;
  const allCaps=s=>s.length>2&&s===s.toUpperCase()&&/[A-Z]/.test(s);
  const isShort=s=>s.split(' ').length<=7;
  let hasTitle=false;
  lines.forEach((line,idx)=>{
    if(dateRx.test(line)||timeRx.test(line)){result.push({tag:'date',val:line});return;}
    if(listRx.test(line)){result.push({tag:'list',val:line.replace(/^[-•·*]\s+/,'')});return;}
    if(!hasTitle&&(idx===0||allCaps(line))&&isShort(line)){result.push({tag:'title',val:line});hasTitle=true;return;}
    if(isShort(line)&&idx<4&&!hasTitle){result.push({tag:'heading',val:line});return;}
    if(isShort(line)&&idx<3){result.push({tag:'heading',val:line});return;}
    result.push({tag:'body',val:line});
  });
  return result;
}

function renderParsed(){
  const el=$('parsed-out');
  el.innerHTML='<div class="parsed-preview">'+
    S.parsedText.map(p=>`<div class="pi"><span class="pt pt-${p.tag}">${p.tag}</span><span class="pv">${p.val}</span></div>`).join('')+
  '</div>';
}

/* ═══════════════════════════════════════════
   UNLOCK STATE
═══════════════════════════════════════════ */
function updateStuff(){
  const hi=S.images.length>0,hc=!!(S.palette||S.customColors.length),ht=S.rawText.trim().length>0;
  $('ud-img').classList.toggle('has',hi);
  $('ud-col').classList.toggle('has',hc);
  $('ud-txt').classList.toggle('has',ht);
  const any=hi||hc||ht;
  $('u-txt').className='u-txt'+(any?' ready':'');
  $('u-txt').textContent=any?'✓ Ready — more content = better results':'Add at least one to unlock Generate';
}

function validate(){
  const ok=S.type&&(S.sizeObj||(S.customW&&S.customH))&&(S.images.length||S.palette||S.customColors.length||S.rawText.trim());
  $('btn-gen').disabled=!ok;
}

function updateDocInfo(){
  $('di-file').textContent=S.name||'—';
  let tn='—';CATS.forEach(c=>c.types.forEach(t=>{if(t.id===S.type)tn=`${t.ico} ${t.n}`;}));
  $('di-type').textContent=tn;
  let sn='—';
  if(S.sizeObj)sn=S.sizeObj.n;
  else if(S.customW&&S.customH)sn=`${S.customW}×${S.customH} ${S.customUnit}`;
  $('di-size').textContent=sn;
  $('di-pages').textContent=S.pages;
  const it=INTENTS.find(i=>i.id===S.intent);
  $('di-intent').textContent=it?it.l:'—';
}

/* ═══════════════════════════════════════════
   PLACEHOLDER CANVAS
═══════════════════════════════════════════ */
function showPlaceholder(){
  if(!S.type)return;
  const sz=CPX[S.type]||{w:560,h:794};
  const area=$('canvas-area');
  const vw=area.clientWidth-60,vh=area.clientHeight-60;
  const sc=Math.min(vw/sz.w,vh/sz.h,.9);
  const dw=Math.round(sz.w*sc),dh=Math.round(sz.h*sc);
  cvEl=$('canvas-el');
  cvEl.width=dw;cvEl.height=dh;
  cvEl.style.width=dw+'px';cvEl.style.height=dh+'px';
  cvEl.style.opacity='1';
  $('cw').style.width=dw+'px';$('cw').style.height=dh+'px';
  $('canvas-ph').classList.add('gone');
  // Draw skeleton
  const ctx=cvEl.getContext('2d');
  ctx.fillStyle=theme==='dark'?'#1c1c24':'#f5f4fa';
  ctx.fillRect(0,0,dw,dh);
  const acc='#7c6af5';
  // Accent bar
  ctx.fillStyle=acc;ctx.fillRect(0,0,dw*.38,Math.max(3,dh*.004));
  // Skeleton blocks
  const bx=dw*.07,bw=dw*.86;
  const baseCol=theme==='dark'?'#252530':'#e4e2ee';
  const baseCol2=theme==='dark'?'#1e1e28':'#eceaf6';
  [[dh*.12,dh*.09,bw,.9],[dh*.25,dh*.04,bw*.6,.7],[dh*.33,dh*.025,bw*.9,.5],[dh*.37,dh*.025,bw*.85,.5],[dh*.41,dh*.025,bw*.75,.5],[dh*.5,dh*.32,bw,.4]].forEach(([y,h,w,op])=>{
    ctx.fillStyle=baseCol;ctx.globalAlpha=op;
    if(ctx.roundRect)ctx.roundRect(bx,y,w,h,3);else ctx.rect(bx,y,w,h);
    ctx.fill();ctx.globalAlpha=1;
  });
  ctx.fillStyle=acc;ctx.globalAlpha=.15;ctx.fillRect(0,dh-Math.max(3,dh*.004),dw*.18,Math.max(3,dh*.004));ctx.globalAlpha=1;
  ctx.fillStyle=theme==='dark'?'#404055':'#aaa8c0';
  ctx.font=`${Math.round(dh*.016)}px 'DM Mono',monospace`;
  ctx.textAlign='center';ctx.fillText('Add content then hit Generate',dw/2,dh*.91);ctx.textAlign='left';
}

/* ═══════════════════════════════════════════
   GENERATE
═══════════════════════════════════════════ */
$('btn-gen').addEventListener('click',()=>{
  if(!S.type)return;
  S.generated=true;
  const sz=CPX[S.type]||{w:560,h:794};
  const area=$('canvas-area');
  const vw=area.clientWidth-60,vh=area.clientHeight-60;
  const sc=Math.min(vw/sz.w,vh/sz.h,.9);
  const dw=Math.round(sz.w*sc),dh=Math.round(sz.h*sc);
  cvEl=$('canvas-el');
  cvEl.width=dw;cvEl.height=dh;
  cvEl.style.width=dw+'px';cvEl.style.height=dh+'px';
  cvEl.style.opacity='1';
  $('cw').style.width=dw+'px';$('cw').style.height=dh+'px';
  $('canvas-ph').classList.add('gone');
  drawDesign(cvEl,dw,dh);
  $('status-badge').textContent='LIVE';$('status-badge').className='badge live';
  $('btn-exp').disabled=false;
  $('props-sec').style.display='block';
  $('hint-card').style.display='none';
  buildLayersList();updateDocInfo();
  setTimeout(()=>showToast('✦','Design generated! Adjust any input on the left and your canvas updates automatically.',
    [{label:'Got it',action:null}]),500);
});

/* ═══════════════════════════════════════════
   DRAW
═══════════════════════════════════════════ */
function getPal(){
  if(S.customColors.length)return S.customColors;
  if(S.palette){const p=PALETTES.find(x=>x.id===S.palette);if(p)return p.c;}
  return['#1a1a2e','#16213e','#0f3460','#7c6af5'];
}
function isLight(hex){
  try{const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return(r*299+g*587+b*114)/1000>128;}catch{return false;}
}
function wrapTxt(ctx,text,x,y,mw,lh){
  if(!text)return y;
  const words=text.split(' ');let line='',cy=y;
  for(let i=0;i<words.length;i++){
    const tl=line+words[i]+' ';
    if(ctx.measureText(tl).width>mw&&i>0){ctx.fillText(line.trim(),x,cy);line=words[i]+' ';cy+=lh;}
    else line=tl;
  }
  if(line.trim())ctx.fillText(line.trim(),x,cy);
  return cy+lh;
}

function drawDesign(canvas,W,H){
  const ctx=canvas.getContext('2d');
  const pal=getPal();
  const bg=pal[0]||'#1a1a2e',acc=pal[pal.length-1]||'#7c6af5',mid=pal[Math.floor(pal.length/2)]||pal[1]||acc;
  const bgIsLight=isLight(bg);
  const textCol=bgIsLight?'#111111':'#ffffff';
  ctx.clearRect(0,0,W,H);
  // BG
  const g=ctx.createLinearGradient(0,0,W*.5,H);g.addColorStop(0,bg);g.addColorStop(1,pal[1]||bg);
  ctx.fillStyle=g;ctx.fillRect(0,0,W,H);
  // Grid
  ctx.globalAlpha=.045;ctx.strokeStyle=acc;ctx.lineWidth=1;
  const gs=Math.round(Math.min(W,H)/10);
  for(let x=0;x<W;x+=gs){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,H);ctx.stroke();}
  for(let y=0;y<H;y+=gs){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
  ctx.globalAlpha=1;
  // Circles
  ctx.globalAlpha=.09;ctx.strokeStyle=mid;ctx.lineWidth=Math.max(1.5,W*.0025);
  ctx.beginPath();ctx.arc(W*.82,H*.18,Math.min(W,H)*.28,0,Math.PI*2);ctx.stroke();
  ctx.globalAlpha=.06;ctx.strokeStyle=acc;
  ctx.beginPath();ctx.arc(W*.1,H*.88,Math.min(W,H)*.17,0,Math.PI*2);ctx.stroke();
  ctx.globalAlpha=1;
  // Accent bars
  const bh=Math.max(3,Math.round(H*.005));
  ctx.fillStyle=acc;ctx.fillRect(0,0,W*.38,bh);
  ctx.fillStyle=mid;ctx.fillRect(W*.38,0,W*.2,bh);
  // BG image
  const bgI=S.images.find(a=>a.role==='background');
  if(bgI&&bgI.imgEl){ctx.globalAlpha=.22;ctx.drawImage(bgI.imgEl,0,0,W,H);ctx.globalAlpha=1;}
  // Focal image
  const foc=S.images.find(a=>a.role==='focal');
  if(foc&&foc.imgEl){
    const ar=foc.imgEl.naturalWidth/foc.imgEl.naturalHeight;
    const fw=Math.round(W*.42),fh=Math.round(fw/ar),fx=Math.round(W*.54);
    const fhc=Math.min(fh,H*.85),fy=Math.round((H-fhc)/2);
    ctx.save();ctx.beginPath();
    if(ctx.roundRect)ctx.roundRect(fx,fy,fw,fhc,fw*.022);else ctx.rect(fx,fy,fw,fhc);
    ctx.clip();ctx.drawImage(foc.imgEl,fx,fy,fw,fhc);ctx.restore();
  }
  // Text
  const hasFoc=!!(foc&&foc.imgEl);
  const tw=hasFoc?W*.46:W*.88,tx=W*.07;
  let ty=H*.2;
  const titleItem=S.parsedText.find(p=>p.tag==='title');
  const headItem=S.parsedText.find(p=>p.tag==='heading');
  const bodyItems=S.parsedText.filter(p=>['body','list','date'].includes(p.tag));
  const titleTxt=titleItem?titleItem.val:(S.rawText?S.rawText.split('\n')[0].trim():'');
  const headTxt=headItem?headItem.val:'';
  if(titleTxt){
    const sz=Math.min(Math.round(H*.085),Math.round(W*.1),62);
    ctx.font=`bold ${sz}px 'Cormorant Garamond',Georgia,serif`;
    ctx.fillStyle=textCol;ctx.globalAlpha=.95;
    ty=wrapTxt(ctx,titleTxt,tx,ty+sz,tw,sz*1.18)+sz*.06;ctx.globalAlpha=1;
  }
  if(headTxt){
    const sz=Math.min(Math.round(H*.032),21);
    ctx.font=`700 ${sz}px 'Nunito',sans-serif`;
    ctx.fillStyle=acc;ctx.globalAlpha=.9;
    ty=wrapTxt(ctx,headTxt,tx,ty+sz*.6,tw,sz*1.5)+sz*.2;ctx.globalAlpha=1;
  }
  bodyItems.slice(0,5).forEach(item=>{
    if(!item.val)return;
    const sz=Math.min(Math.round(H*.019),13);
    if(item.tag==='date'){
      ctx.font=`700 ${sz}px 'DM Mono',monospace`;ctx.fillStyle=acc;ctx.globalAlpha=.85;
    }else{
      ctx.font=`400 ${sz}px 'Nunito',sans-serif`;ctx.fillStyle=textCol;ctx.globalAlpha=.52;
    }
    ty=wrapTxt(ctx,(item.tag==='list'?'• ':'')+item.val,tx,ty+sz*.5,tw,sz*1.65)+sz*.3;
    ctx.globalAlpha=1;
  });
  // Watermark
  const wsz=Math.max(7,Math.round(H*.012));
  ctx.font=`400 ${wsz}px 'DM Mono',monospace`;ctx.fillStyle=textCol;ctx.globalAlpha=.12;
  ctx.fillText(S.name||'Untitled',tx,H-wsz*2);ctx.globalAlpha=1;
  ctx.fillStyle=acc;ctx.globalAlpha=.45;ctx.fillRect(0,H-bh,W*.16,bh);ctx.globalAlpha=1;
}

function redrawLive(){if(S.generated&&cvEl)drawDesign(cvEl,cvEl.width,cvEl.height);}

/* ═══════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════ */
$('btn-exp').addEventListener('click',()=>{
  if(!cvEl)return;
  const a=document.createElement('a');a.download=(S.name||'cre8')+'.png';a.href=cvEl.toDataURL('image/png');a.click();
});

/* ═══════════════════════════════════════════
   LAYERS
═══════════════════════════════════════════ */
function buildLayersList(){
  const el=$('tab-layers');el.innerHTML='';
  [['🖼️','Background'],['📷','Focal Image'],['🔤','Title'],['✏️','Heading'],['📝','Body Copy'],['▭','Accent Shapes'],['📐','Layout Grid']].forEach(([ico,n],i)=>{
    const d=document.createElement('div');d.className='layer-row'+(i===2?' on':'');
    d.innerHTML=`<span style="font-size:13px">${ico}</span><span style="flex:1">${n}</span><span class="lvis">👁</span>`;
    d.addEventListener('click',()=>{document.querySelectorAll('.layer-row').forEach(x=>x.classList.remove('on'));d.classList.add('on');$('props-sec').style.display='block';});
    el.appendChild(d);
  });
}

/* ═══════════════════════════════════════════
   PAGES
═══════════════════════════════════════════ */
$('add-pg').addEventListener('click',()=>{
  S.pages++;$('di-pages').textContent=S.pages;
  const d=document.createElement('div');d.className='page-item';
  d.innerHTML=`<span>📄</span><span style="flex:1">Page ${S.pages}</span>`;
  d.addEventListener('click',()=>{document.querySelectorAll('.page-item').forEach(x=>x.classList.remove('on'));d.classList.add('on');});
  $('pages-list').appendChild(d);
});

/* ═══════════════════════════════════════════
   TOASTS
═══════════════════════════════════════════ */
function showToast(ico,msg,opts=[]){
  const c=$('toasts');
  const t=document.createElement('div');t.className='toast';
  t.innerHTML=`<div class="t-ico">${ico}</div><div class="t-body"><div class="t-msg">${msg}</div>${opts.length?`<div class="t-opts">${opts.map((o,i)=>`<button class="t-opt${i===0?' primary':''}" data-i="${i}">${o.label}</button>`).join('')}</div>`:''}</div><button class="t-close">×</button>`;
  t.querySelectorAll('.t-opt').forEach((b,i)=>b.addEventListener('click',()=>{if(opts[i].action)opts[i].action();dismiss(t);}));
  t.querySelector('.t-close').addEventListener('click',()=>dismiss(t));
  c.appendChild(t);
  setTimeout(()=>dismiss(t),9000);
}
function dismiss(t){t.classList.add('out');setTimeout(()=>t.remove(),240);}

/* ═══════════════════════════════════════════
   RESIZE CANVAS ON WINDOW RESIZE
═══════════════════════════════════════════ */
window.addEventListener('resize',()=>{
  if(!S.type)return;
  if(S.generated&&cvEl){
    const sz=CPX[S.type]||{w:560,h:794};
    const a=$('canvas-area');const vw=a.clientWidth-60,vh=a.clientHeight-60;
    const sc=Math.min(vw/sz.w,vh/sz.h,.9);
    const dw=Math.round(sz.w*sc),dh=Math.round(sz.h*sc);
    cvEl.width=dw;cvEl.height=dh;cvEl.style.width=dw+'px';cvEl.style.height=dh+'px';
    $('cw').style.width=dw+'px';$('cw').style.height=dh+'px';
    drawDesign(cvEl,dw,dh);
  } else {
    showPlaceholder();
  }
});

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
buildCatGrid();
buildIntentGrid();
renderPalGrid();
updateStuff();
updateDocInfo();
validate();
setTimeout(()=>$('splash').classList.add('out'),1500);
