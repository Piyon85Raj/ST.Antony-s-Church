/* 
  St. Antony's Church, AR Mangalam - Interactive JavaScript Logic
  Handles Hero Slider (4 Slides), TV Marquee News Ticker, Priests Info & Full Photos 1 to 11
*/

// Initial Default State with Photos 1 to 11 and Updated Priests Info
const DEFAULT_DATA = {
  announcement: "புனித அந்தோனியார் ஆலயத்தில் வாரத்தின் எல்லா ஞாயிறும் திருப்பலி காலை 8:30 மணிக்கு சிறப்பு கூட்டு திருப்பலியுடன் ஆரம்பமாகிறது!",
  priestName: "அருட்தந்தை ஆரோக்கியராஜ்",
  builderPriestName: "அருட்தந்தை அன்பரசு",
  history: "ஏ.ஆர். மங்களம் கிராமத்தில் ஆங்கிலேயர் காலத்திற்குப் பிறகு ஆரம்பிக்கப்பட்ட ஒரு சிறிய ஆலயம், இன்று இப்பகுதி மக்களின் நம்பிக்கையின் அடையாளமாகவும், வேண்டியதை நிறைவேற்றும் அருள்மிகு புனித அந்தோனியார் திருத்தலமாகவும் விஸ்வரூபம் எடுத்துள்ளது.",
  schedule: [
    {
      id: "sun",
      day: "ஞாயிறு திருப்பலி",
      time: "காலை 8:30 மணிக்கு",
      desc: "வாராந்திர சிறப்பு கூட்டுத் திருப்பலி, மறைக்கல்வி மன்றம் & தேவ நற்கருணை ஆசீர்வாதம்.",
      icon: "fa-cross"
    },
    {
      id: "tue",
      day: "செவ்வாய்க்கிழமை சிறப்பு வழிபாடு",
      time: "இரவு 6:30 மணிக்கு",
      desc: "புனித அந்தோனியார் சிறப்பு நவநாள் ஜெபம், திருப்பலி, ஆசீர்வதிக்கப்பட்ட எண்ணெய் பூசுதல் & திவ்விய நற்கருணை ஆசீர்.",
      icon: "fa-hands-holding-child"
    },
    {
      id: "thu",
      day: "வியாழக்கிழமை சிறப்பு வழிபாடு",
      time: "இரவு 6:30 மணிக்கு",
      desc: "திவ்விய நற்கருணை ஆராதனை, ஜெப மன்றாட்டு & மாலை திருப்பலி.",
      icon: "fa-hands-praying"
    }
  ],
  branches: [
    {
      id: 1,
      title: "புனித செபஸ்தியார் ஆலயம்",
      village: "மேட்டுக் கற்களத்தூர்",
      patron: "பாதுகாவலர்: புனித செபஸ்தியார்",
      img: "./assets/st_sebastian.png",
      info: "நோய்களிலிருந்து விசுவாசிகளைக் காக்கும் அருள்மிகு புனித செபஸ்தியார் சிற்றாலயம்."
    },
    {
      id: 2,
      title: "ஆரோக்கிய மாதா ஆலயம்",
      village: "அழியாதன் மொழி",
      patron: "பாதுகாவலர்: ஆரோக்கிய அன்னை",
      img: "./assets/arogya_matha.png",
      info: "உடல் மற்றும் ஆன்ம சுகம் அளிக்கும் ஆரோக்கிய மாதாவின் அருள்மிகு கத்தோலிக்க திருக்கோவில்."
    },
    {
      id: 3,
      title: "அடைக்கல மாதா ஆலயம்",
      village: "குலனாத்தி மலரி",
      patron: "பாதுகாவலர்: அடைக்கல மாதா",
      img: "./assets/adaikala_matha.png",
      info: "குடும்பங்களுக்கு அடைக்கலமும் அமைதியும் தரும் அடைக்கல மாதாவின் பாரம்பரிய சிற்றாலயம்."
    },
    {
      id: 4,
      title: "புனித அன்னம்மாள் ஆலயம்",
      village: "வாகைக்குடி",
      patron: "பாதுகாவலர்: புனித அன்னம்மாள்",
      img: "./assets/6.jpeg",
      info: "அருள்மிகு புனித அன்னம்மாள் திருத்தலம் மற்றும் சிற்றாலயம்."
    },
    {
      id: 5,
      title: "புனித அந்தோனியார் ஆலயம்",
      village: "குமிலேந்தல்",
      patron: "பாதுகாவலர்: புனித அந்தோனியார்",
      img: "./assets/st_antony_patron.png",
      info: "அருள்மிகு புனித அந்தோனியார் கிளைக் கிராமத் தேவாலயம்."
    },
    {
      id: 6,
      title: "புனித யோசேப்பு ஆலயம்",
      village: "வெளியகோட்டை",
      patron: "பாதுகாவலர்: புனித யோசேப்பு",
      img: "./assets/1.jpeg",
      info: "திருத்தந்தை புனித யோசேப்புவின் பெயரில் அமைந்துள்ள திருத்தலம்."
    },
    {
      id: 7,
      title: "புனித அந்தோனியார் ஆலயம்",
      village: "ஆலேயந்தல்",
      patron: "பாதுகாவலர்: புனித அந்தோனியார்",
      img: "./assets/10.jpeg",
      info: "பங்குகளுக்கு உட்பட்ட அருள்மிகு புனித அந்தோனியார் ஆலயம்."
    }
  ],
  // All Photos 1 to 11 Included without Any Omission
  gallery: [
    { id: 1, title: "பகல் நேரத்து வெள்ளை நிறக் கோயில் கட்டடத் தோற்றம்", cat: "parish", date: "ஆலய தோற்றம்", img: "./assets/1.jpeg" },
    { id: 2, title: "ஆலய உள் பீட திவ்விய நற்கருணை அழகு", cat: "novena", date: "உள் பீடம்", img: "./assets/2.jpeg" },
    { id: 3, title: "புனித அந்தோனியார் ஆலய அதிகாரப்பூர்வ சின்னம்", cat: "parish", date: "ஆலய சின்னம்", img: "./assets/3.jpeg" },
    { id: 4, title: "முன்னாள் பங்குத்தந்தை அருட்தந்தை அன்பரசு", cat: "parish", date: "பங்குத்தந்தை", img: "./assets/4.jpeg" },
    { id: 5, title: "மக்கள் கொடிமரத்திற்குப் பின்னால் தரையில் அமர்ந்து ஜெபம் செய்யும் காட்சி", cat: "festival", date: "திருவிழா ஜெபம்", img: "./assets/slider_praying.jpg" },
    { id: 6, title: "திருவிழா நள்ளிரவு நேரலைத் திருப்பலியில் விசுவாசிகள்", cat: "festival", date: "திருவிழா கூட்டம்", img: "./assets/5.jpeg" },
    { id: 7, title: "புனித அந்தோனியார் நற்கருணைத் திருவுருவச் சொரூபம்", cat: "novena", date: "சொரூப பீடம்", img: "./assets/6.jpeg" },
    { id: 8, title: "ஆலயக் குடமுழுக்கு விழாப் பெருந்திருப்பலி & குருக்கள்", cat: "festival", date: "குடமுழுக்கு விழா", img: "./assets/7.jpeg" },
    { id: 9, title: "திறப்பு விழா ஊர்வலப் பாதை & கும்மி நடனம்", cat: "cultural", date: "திருவிழா நிகழ்வு", img: "./assets/8.jpeg" },
    { id: 10, title: "திருப்பலியில் அருட்தந்தை அன்பரசு தூபம் காட்டுதல்", cat: "parish", date: "திருப்பலி", img: "./assets/9.jpeg" },
    { id: 11, title: "திருவிழா இரவு வண்ண விளக்கு மின் அலங்காரம்", cat: "festival", date: "மின் அலங்காரம்", img: "./assets/10.jpeg" },
    { id: 12, title: "அருள்மிகு தங்க நற்கருணை பீடம் (Holy Monstrance)", cat: "novena", date: "நற்கருணை வேளை", img: "./assets/11.jpeg" }
  ],
  videos: [
    {
      id: 1,
      title: "புனித அந்தோனியார் பெருவிழா கூட்டு திருப்பலி நேரலை",
      url: "https://youtu.be/yqbLm_SBMA0?si=DwOIMLqTLPSMWEMg",
      desc: "ஏஆர் மங்களம் ஆலயத்தில் நடைபெற்ற சிறப்பு பெருவிழா திருப்பலி."
    },
    {
      id: 2,
      title: "புனித அந்தோனியார் தமிழ் ஆன்மீகப் பாடல்கள்",
      url: "https://youtu.be/WD1TmmlpdUY?si=XLzk27M7wnxzHe2Z",
      desc: "பக்தர்கள் நெஞ்சை உருக்கும் அற்புத நவநாள் பாடல்கள்."
    }
  ]
};

// State Variables
let churchData = JSON.parse(localStorage.getItem('st_antony_church_data')) || DEFAULT_DATA;
let isAdminLoggedIn = sessionStorage.getItem('st_antony_admin_login') === 'true';

// Hero Slider State (4 Slides)
let currentSlide = 0;
let slideTimer = null;
const TOTAL_SLIDES = 4;

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  // Ensure branches list matches latest 7 village names
  if (!churchData.branches || churchData.branches.length !== 7 || churchData.branches[0].village !== "மேட்டுக்கற்களத்தூர்") {
    churchData.branches = DEFAULT_DATA.branches;
    saveData();
  }
  renderAll();
  setupEventListeners();
  startSliderAutoLoop();
  checkAdminState();
});

// Save to LocalStorage
function saveData() {
  localStorage.setItem('st_antony_church_data', JSON.stringify(churchData));
  renderAll();
}

// Render All Page Components
function renderAll() {
  renderAnnouncement();
  renderHistoryAndPriest();
  renderSchedule();
  renderBranches();
  renderFeaturedGallery();
  renderVideos();
  updateCMSFields();
}

/* --- Hero Image Slider Controls (4 Slides) --- */
function goToSlide(index) {
  currentSlide = (index + TOTAL_SLIDES) % TOTAL_SLIDES;
  const wrapper = document.getElementById('sliderWrapper');
  if (wrapper) {
    wrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  const dots = document.querySelectorAll('.slider-dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

function nextSlide() {
  goToSlide(currentSlide + 1);
  resetSliderTimer();
}

function prevSlide() {
  goToSlide(currentSlide - 1);
  resetSliderTimer();
}

function startSliderAutoLoop() {
  slideTimer = setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 5000);
}

function resetSliderTimer() {
  clearInterval(slideTimer);
  startSliderAutoLoop();
}

/* --- Render Page Components --- */
function renderAnnouncement() {
  const marqueeEl = document.getElementById('heroMarqueeText');
  if (marqueeEl) marqueeEl.textContent = churchData.announcement;
}

function renderHistoryAndPriest() {
  const historyEl = document.getElementById('historyMainContent');
  if (historyEl) historyEl.textContent = churchData.history;

  const priestEl = document.getElementById('quickPriestName');
  if (priestEl) priestEl.textContent = churchData.priestName;
}

function renderSchedule() {
  const container = document.getElementById('scheduleCardsContainer');
  if (!container) return;

  container.innerHTML = churchData.schedule.map(item => `
    <div class="schedule-card">
      <div class="schedule-day-icon">
        <i class="fa-solid ${item.icon}"></i>
      </div>
      <h3 class="schedule-day-title">${item.day}</h3>
      <div class="schedule-time"><i class="fa-regular fa-clock"></i> ${item.time}</div>
      <p class="schedule-desc">${item.desc}</p>
    </div>
  `).join('');

  const sunItem = churchData.schedule.find(s => s.id === 'sun');
  const tueItem = churchData.schedule.find(s => s.id === 'tue');
  const thuItem = churchData.schedule.find(s => s.id === 'thu');

  if (sunItem && document.getElementById('quickSunTime')) document.getElementById('quickSunTime').textContent = sunItem.time;
  if (tueItem && document.getElementById('quickTueTime')) document.getElementById('quickTueTime').textContent = tueItem.time;
  if (thuItem && document.getElementById('quickThuTime')) document.getElementById('quickThuTime').textContent = thuItem.time;
}

function renderBranches() {
  const container = document.getElementById('branchesContainer');
  if (!container) return;

  container.innerHTML = churchData.branches.map(b => `
    <div class="branch-card">
      <div class="branch-img-box">
        <img src="${b.img}" alt="${b.title}" class="branch-img" onerror="this.src='./assets/hero_bg.png'">
        <span class="branch-tag"><i class="fa-solid fa-location-dot"></i> கிராமம்: ${b.village}</span>
      </div>
      <div class="branch-body">
        <h3 class="branch-title">${b.title}</h3>
        <div class="branch-patron"><i class="fa-solid fa-map-pin"></i> ${b.village}</div>
        <p class="branch-info">${b.info}</p>
      </div>
    </div>
  `).join('');
}

function renderFeaturedGallery() {
  const grid = document.getElementById('featuredGalleryGrid');
  if (!grid) return;

  const featured = churchData.gallery.slice(0, 6);

  grid.innerHTML = featured.map(g => `
    <div class="gallery-card" onclick="openLightbox('${g.img}', '${g.title}')">
      <div class="gallery-card-img-box">
        <img src="${g.img}" alt="${g.title}" class="gallery-card-img" onerror="this.src='./assets/hero_bg.png'">
        <span class="gallery-card-badge">${getCategoryName(g.cat)}</span>
      </div>
      <div class="gallery-card-body">
        <h4 class="gallery-card-title">${g.title}</h4>
        <span class="gallery-card-date"><i class="fa-regular fa-calendar-days"></i> ${g.date || 'நிகழ்வு'}</span>
      </div>
    </div>
  `).join('');
}

function openFullGalleryModal() {
  filterModalGallery('all');
  document.getElementById('fullGalleryModal').classList.add('active');
}

function closeFullGalleryModal() {
  document.getElementById('fullGalleryModal').classList.remove('active');
}

function filterModalGallery(category, btnElement = null) {
  const grid = document.getElementById('modalGalleryGrid');
  if (!grid) return;

  if (btnElement) {
    document.querySelectorAll('#fullGalleryModal .filter-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
  }

  const filtered = category === 'all' 
    ? churchData.gallery 
    : churchData.gallery.filter(g => g.cat === category);

  grid.innerHTML = filtered.map(g => `
    <div class="gallery-card" onclick="openLightbox('${g.img}', '${g.title}')">
      <div class="gallery-card-img-box">
        <img src="${g.img}" alt="${g.title}" class="gallery-card-img" onerror="this.src='./assets/hero_bg.png'">
        <span class="gallery-card-badge">${getCategoryName(g.cat)}</span>
      </div>
      <div class="gallery-card-body">
        <h4 class="gallery-card-title">${g.title}</h4>
        <span class="gallery-card-date"><i class="fa-regular fa-calendar-days"></i> ${g.date || 'நிகழ்வு'}</span>
      </div>
    </div>
  `).join('');
}

function getCategoryName(cat) {
  switch(cat) {
    case 'cultural': return 'கும்மியாட்டம் & கலைநிகழ்ச்சி';
    case 'christmas': return 'கிறிஸ்துமஸ் / ஈஸ்டர்';
    case 'festival': return 'திருவிழா';
    case 'novena': return 'நவநாள் & நற்கருணை';
    case 'parish': return 'பங்கு நிகழ்வுகள்';
    default: return 'பொது';
  }
}

function renderVideos() {
  const grid = document.getElementById('videosGrid');
  if (!grid) return;

  grid.innerHTML = churchData.videos.map(v => `
    <div class="video-card">
      <div class="video-embed-container">
        <iframe src="${formatEmbedUrl(v.url)}" title="${v.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video-info">
        <h4>${v.title}</h4>
        <p>${v.desc || 'புனித அந்தோனியார் திருத்தல ஆன்மீக வீடியோ.'}</p>
      </div>
    </div>
  `).join('');
}

function formatEmbedUrl(url) {
  if (url.includes('youtube.com/embed/')) return url;
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('watch?v=')) {
    const id = url.split('watch?v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
}

// Setup Event Handlers
function setupEventListeners() {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById('mobileToggleBtn');
  const navLinks = document.getElementById('navLinks');
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('active');
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Slider Pause on Hover
  const sliderEl = document.getElementById('heroSlider');
  if (sliderEl) {
    sliderEl.addEventListener('mouseenter', () => clearInterval(slideTimer));
    sliderEl.addEventListener('mouseleave', () => startSliderAutoLoop());
  }

  // Prayer Request Form Submit - Directly Triggers Mailto link to raj85piyo@gmail.com
  const prayerForm = document.getElementById('prayerRequestForm');
  if (prayerForm) {
    prayerForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('prayerName').value.trim();
      const phone = document.getElementById('prayerPhone').value.trim();
      const intent = document.getElementById('prayerIntent').value.trim();

      const emailSubject = encodeURIComponent(`புனித அந்தோனியார் ஆலய ஜெப விண்ணப்பம் - ${name}`);
      const emailBody = encodeURIComponent(`பெயர்: ${name}\nதொலைபேசி: ${phone}\n\nஜெப விண்ணப்பம்:\n${intent}\n\nபுனித அந்தோனியார் ஆலயம், ஏஆர் மங்களம் பங்கு இணையதளம் வழியாக அனுப்பப்பட்டது.`);

      const mailtoUrl = `mailto:raj85piyo@gmail.com?subject=${emailSubject}&body=${emailBody}`;
      
      showToast(`நன்றி ${name}! உங்கள் விண்ணப்பம் raj85piyo@gmail.com மின்னஞ்சலுக்கு அனுப்பப்படுகிறது...`);
      
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1000);

      prayerForm.reset();
    });
  }

  // Admin Login
  const loginForm = document.getElementById('adminLoginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('adminEmail').value.trim();
      const pass = document.getElementById('adminPassword').value.trim();

      if (email === 'raj85piyo@gmail.com' && pass === '12345689') {
        isAdminLoggedIn = true;
        sessionStorage.setItem('st_antony_admin_login', 'true');
        checkAdminState();
        closeAdminModal();
        showToast('அட்மின் வெற்றிகரமாக உள்நுழைந்தார்!');
        openAdminCMSPanel();
      } else {
        showToast('மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது!', true);
      }
    });
  }

  // CMS Forms
  const cmsAnnForm = document.getElementById('cmsAnnouncementForm');
  if (cmsAnnForm) {
    cmsAnnForm.addEventListener('submit', (e) => {
      e.preventDefault();
      churchData.announcement = document.getElementById('cmsAnnouncementInput').value;
      saveData();
      showToast('ஓடும் செய்தி வாசகம் மாற்றப்பட்டது!');
    });
  }

  const cmsSchForm = document.getElementById('cmsScheduleForm');
  if (cmsSchForm) {
    cmsSchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      churchData.schedule[0].time = document.getElementById('cmsSunTime').value;
      churchData.schedule[1].time = document.getElementById('cmsTueTime').value;
      churchData.schedule[2].time = document.getElementById('cmsThuTime').value;
      saveData();
      showToast('திருப்பலி நேரங்கள் புதுப்பிக்கப்பட்டன!');
    });
  }

  const cmsGalForm = document.getElementById('cmsGalleryForm');
  if (cmsGalForm) {
    cmsGalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('cmsGalleryTitle').value;
      const cat = document.getElementById('cmsGalleryCat').value;
      const img = document.getElementById('cmsGalleryUrl').value;

      churchData.gallery.unshift({
        id: Date.now(),
        title,
        cat,
        date: "புதிய ஈவென்ட்",
        img
      });
      saveData();
      cmsGalForm.reset();
      showToast('புதிய ஈவென்ட் புகைப்படம் சேர்க்கப்பட்டது!');
      updateCMSGalleryList();
    });
  }

  const cmsVidForm = document.getElementById('cmsVideoForm');
  if (cmsVidForm) {
    cmsVidForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('cmsVideoTitle').value;
      const url = document.getElementById('cmsVideoUrl').value;

      churchData.videos.unshift({
        id: Date.now(),
        title,
        url,
        desc: "புதிய நேரலை ஆன்மீக வீடியோ."
      });
      saveData();
      cmsVidForm.reset();
      showToast('யூடியூப் வீடியோ சேர்க்கப்பட்டது!');
      updateCMSVideoList();
    });
  }

  const cmsInfoForm = document.getElementById('cmsInfoForm');
  if (cmsInfoForm) {
    cmsInfoForm.addEventListener('submit', (e) => {
      e.preventDefault();
      churchData.priestName = document.getElementById('cmsPriestName').value;
      churchData.history = document.getElementById('cmsHistoryInput').value;
      saveData();
      showToast('ஆலய விபரங்கள் சேமிக்கப்பட்டன!');
    });
  }
}

// Check Admin Login State
function checkAdminState() {
  const bar = document.getElementById('adminFloatingBar');
  const loginBtn = document.getElementById('adminLoginBtn');

  if (isAdminLoggedIn) {
    if (bar) bar.style.display = 'flex';
    if (loginBtn) {
      loginBtn.innerHTML = '<i class="fa-solid fa-sliders"></i> மேலாண்மைப் பலகை';
      loginBtn.onclick = openAdminCMSPanel;
    }
  } else {
    if (bar) bar.style.display = 'none';
    if (loginBtn) {
      loginBtn.innerHTML = '<i class="fa-solid fa-lock"></i> அட்மின் லாகின்';
      loginBtn.onclick = openAdminModal;
    }
  }
}

function logoutAdmin() {
  isAdminLoggedIn = false;
  sessionStorage.removeItem('st_antony_admin_login');
  checkAdminState();
  closeAdminCMSPanel();
  showToast('அட்மின் கணக்கு வெளியேறியது.');
}

// Update CMS Input Fields
function updateCMSFields() {
  const annInp = document.getElementById('cmsAnnouncementInput');
  if (annInp) annInp.value = churchData.announcement;

  const sunInp = document.getElementById('cmsSunTime');
  const tueInp = document.getElementById('cmsTueTime');
  const thuInp = document.getElementById('cmsThuTime');

  if (sunInp && churchData.schedule[0]) sunInp.value = churchData.schedule[0].time;
  if (tueInp && churchData.schedule[1]) tueInp.value = churchData.schedule[1].time;
  if (thuInp && churchData.schedule[2]) thuInp.value = churchData.schedule[2].time;

  const priestInp = document.getElementById('cmsPriestName');
  if (priestInp) priestInp.value = churchData.priestName;

  const histInp = document.getElementById('cmsHistoryInput');
  if (histInp) histInp.value = churchData.history;

  updateCMSGalleryList();
  updateCMSVideoList();
}

function updateCMSGalleryList() {
  const container = document.getElementById('cmsGalleryList');
  if (!container) return;

  container.innerHTML = churchData.gallery.map(g => `
    <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 6px; font-size: 0.85rem;">
      <span style="color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 250px;">${g.title}</span>
      <button class="btn btn-outline btn-sm" style="color: #e74c3c; border-color: #e74c3c; padding: 2px 8px;" onclick="deleteGalleryItem(${g.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');
}

function deleteGalleryItem(id) {
  churchData.gallery = churchData.gallery.filter(g => g.id !== id);
  saveData();
  showToast('புகைப்படம் நீக்கப்பட்டது.');
}

function updateCMSVideoList() {
  const container = document.getElementById('cmsVideoList');
  if (!container) return;

  container.innerHTML = churchData.videos.map(v => `
    <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.05); padding: 8px 12px; border-radius: 6px; font-size: 0.85rem;">
      <span style="color: #fff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 250px;">${v.title}</span>
      <button class="btn btn-outline btn-sm" style="color: #e74c3c; border-color: #e74c3c; padding: 2px 8px;" onclick="deleteVideoItem(${v.id})"><i class="fa-solid fa-trash"></i></button>
    </div>
  `).join('');
}

function deleteVideoItem(id) {
  churchData.videos = churchData.videos.filter(v => v.id !== id);
  saveData();
  showToast('வீடியோ நீக்கப்பட்டது.');
}

function resetDefaults() {
  if (confirm('அனைத்து தரவுகளையும் இயல்புநிலைக்கு மாற்ற விரும்புகிறீர்களா?')) {
    churchData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    saveData();
    showToast('இயல்புநிலை தரவுகள் அமைக்கப்பட்டன.');
  }
}

function switchAdminTab(tabId) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(content => content.classList.remove('active'));

  event.currentTarget.classList.add('active');
  const target = document.getElementById(tabId);
  if (target) target.classList.add('active');
}

// Modal Controls
function openAdminModal() {
  document.getElementById('adminLoginModal').classList.add('active');
}

function closeAdminModal() {
  document.getElementById('adminLoginModal').classList.remove('active');
}

function openAdminCMSPanel() {
  updateCMSFields();
  document.getElementById('adminCMSModal').classList.add('active');
}

function closeAdminCMSPanel() {
  document.getElementById('adminCMSModal').classList.remove('active');
}

function openNovenaModal() {
  document.getElementById('novenaModal').classList.add('active');
}

function closeNovenaModal() {
  document.getElementById('novenaModal').classList.remove('active');
}

function openLightbox(imgUrl, title) {
  document.getElementById('lightboxImg').src = imgUrl;
  document.getElementById('lightboxTitle').textContent = title;
  document.getElementById('lightboxModal').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightboxModal').classList.remove('active');
}

// Toast System
function showToast(message, isError = false) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  if (isError) toast.style.borderLeftColor = '#e74c3c';
  toast.innerHTML = `<i class="fa-solid ${isError ? 'fa-triangle-exclamation' : 'fa-circle-check'}" style="color: ${isError ? '#e74c3c' : 'var(--primary-gold)'};"></i> <span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-100%)';
    toast.style.transition = 'all 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Dual Action Prayer Request Handlers (Email & WhatsApp)
function sendPrayerEmail() {
  const nameEl = document.getElementById('prayerName');
  const phoneEl = document.getElementById('prayerPhone');
  const intentEl = document.getElementById('prayerIntent');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const intent = intentEl ? intentEl.value.trim() : '';

  if (!name || !phone || !intent) {
    showToast('தயவுசெய்து உங்களது பெயர், தொலைபேசி எண் மற்றும் ஜெபக் கோரிக்கையை நிரப்பவும்!', true);
    return;
  }

  const emailSubject = encodeURIComponent(`புனித அந்தோனியார் ஆலய ஜெப விண்ணப்பம் - ${name}`);
  const emailBody = encodeURIComponent(`அன்பான பங்கு நிர்வாகத்திற்கு,\n\nபுனித அந்தோனியார் ஆலய ஜெப விண்ணப்ப விபரம்:\n\nபெயர்: ${name}\nதொலைபேசி எண்: ${phone}\n\nஜெபத் தேவை / மன்றாட்டு:\n${intent}\n\nபுனித அந்தோனியார் ஆலயம், ஏஆர் மங்களம் பங்கு இணையதளம் வழியாக அனுப்பப்பட்டது.`);

  const mailtoUrl = `mailto:raj85piyo@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  
  showToast(`நன்றி ${name}! உங்கள் விண்ணப்பம் மின்னஞ்சலில் திறக்கப்படுகிறது...`);
  
  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 600);
}

function sendPrayerWhatsApp() {
  const nameEl = document.getElementById('prayerName');
  const phoneEl = document.getElementById('prayerPhone');
  const intentEl = document.getElementById('prayerIntent');

  const name = nameEl ? nameEl.value.trim() : '';
  const phone = phoneEl ? phoneEl.value.trim() : '';
  const intent = intentEl ? intentEl.value.trim() : '';

  if (!name || !phone || !intent) {
    showToast('தயவுசெய்து உங்களது பெயர், தொலைபேசி எண் மற்றும் ஜெபக் கோரிக்கையை நிரப்பவும்!', true);
    return;
  }

  const messageText = `*புனித அந்தோனியார் ஆலயம், ஏஆர் மங்களம்*\n*ஜெப விண்ணப்பம்*\n\n👤 *பெயர்:* ${name}\n📞 *தொலைபேசி:* ${phone}\n\n🙏 *ஜெபத் தேவை / மன்றாட்டு:* \n${intent}\n\n_ஏஆர் மங்களம் பங்கு இணையதளம் வழியாக அனுப்பப்பட்டது._`;

  const waUrl = `https://wa.me/916382183062?text=${encodeURIComponent(messageText)}`;

  showToast(`நன்றி ${name}! உங்கள் விண்ணப்பம் வாட்ஸ்அப்பில் திறக்கப்படுகிறது...`);

  setTimeout(() => {
    window.open(waUrl, '_blank');
  }, 600);
}
