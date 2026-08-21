/* ASTRANAV - Interplanetary & Terrestrial Itinerary Engine Logic */

// --- Category Datasets for Dynamic Dropdowns ---
const CATEGORY_DROPDOWN_DATA = {
  "all": {
    sources: [
      { value: "cape-canaveral", label: "🚀 Earth — Cape Canaveral Launch Complex 39A", type: "space" },
      { value: "starbase-texas", label: "🚀 Earth — Boca Chica Starbase, Texas", type: "space" },
      { value: "tokyo-haneda", label: "🛫 Earth — Tokyo Haneda Airport (HND)", type: "earth" },
      { value: "paris-cdg", label: "🛫 Earth — Paris Charles de Gaulle (CDG)", type: "earth" },
      { value: "reykjavik-kef", label: "🧗‍♂️ Earth — Reykjavik Keflavik Airport (KEF)", type: "earth" },
      { value: "nairobi-jki", label: "🧗‍♂️ Earth — Nairobi Jomo Kenyatta (NBO)", type: "earth" },
      { value: "artemis-gateway", label: "🛰️ Moon — Artemis Gateway Orbital Hub", type: "space" }
    ],
    destinations: [
      { value: "luna-city", label: "🌕 Moon — Luna City Artemis Base & Grand Hilton", type: "space" },
      { value: "mars-olympus", label: "🪐 Mars — Olympus Mons Bio-Dome Resort", type: "space" },
      { value: "leo-reef", label: "🛰️ Low Earth Orbit — Reef Luxury Hotel (Zero-G)", type: "space" },
      { value: "kyoto-ryokan", label: "✨ Earth — Kyoto Luxury Ryokan & Bamboo Forest", type: "earth-inland" },
      { value: "swiss-alps", label: "✨ Earth — Swiss Alps Heli-Ski Chalet, Zermatt", type: "earth-inland" },
      { value: "iceland-volcano", label: "🧗‍♂️ Earth — Iceland Geldingadalir Volcano Trek", type: "earth-inland" },
      { value: "amazon-safari", label: "🧗‍♂️ Earth — Amazon Rainforest Eco Canopy Lodge", type: "earth-inland" },
      { value: "barrier-reef", label: "🧗‍♂️ Earth — Great Barrier Reef Deep Submersible Dive", type: "earth-ocean" }
    ]
  },
  "earth-luxury": {
    sources: [
      { value: "tokyo-haneda", label: "🛫 Tokyo Haneda International (HND)", type: "earth" },
      { value: "paris-cdg", label: "🛫 Paris Charles de Gaulle (CDG)", type: "earth" },
      { value: "zurich-airport", label: "🛫 Zurich International Airport (ZRH)", type: "earth" },
      { value: "monaco-heliport", label: "🚁 Monaco Monte Carlo Heliport", type: "earth-inland" },
      { value: "newyork-jfk", label: "🛫 New York JFK Executive Terminal", type: "earth" }
    ],
    destinations: [
      { value: "kyoto-ryokan", label: "✨ Kyoto Luxury Bamboo Sanctuary & Onsen Villa", type: "earth-inland" },
      { value: "swiss-alps", label: "✨ Swiss Alps Heli-Ski Luxury Chalet, Zermatt", type: "earth-inland" },
      { value: "amalfi-yacht", label: "✨ Amalfi Coast Private Superyacht Cruise", type: "earth-ocean" },
      { value: "bordeaux-chateau", label: "✨ Bordeaux Private Grand Cru Vineyard Estate", type: "earth-inland" },
      { value: "maldives-bungalow", label: "✨ Maldives Overwater Glass Villa Sanctuary", type: "earth-ocean" }
    ]
  },
  "earth-adventure": {
    sources: [
      { value: "reykjavik-kef", label: "🧗‍♂️ Reykjavik International Airport (KEF)", type: "earth" },
      { value: "nairobi-jki", label: "🧗‍♂️ Nairobi Jomo Kenyatta International (NBO)", type: "earth" },
      { value: "manaus-amazon", label: "🧗‍♂️ Manaus Amazon International Port (MAO)", type: "earth-inland" },
      { value: "cairns-airport", label: "🧗‍♂️ Cairns Great Barrier Reef Base (CNS)", type: "earth" },
      { value: "ushuaia-patagonia", label: "🧗‍♂️ Ushuaia Tierra del Fuego Expedition Port", type: "earth-ocean" }
    ],
    destinations: [
      { value: "iceland-volcano", label: "🌋 Iceland Geldingadalir Volcano & Lava Trek", type: "earth-inland" },
      { value: "amazon-safari", label: "🌿 Amazon Rainforest Deep Canopy Survival Lodge", type: "earth-inland" },
      { value: "barrier-reef", label: "🌊 Great Barrier Reef Submersible Trench Dive", type: "earth-ocean" },
      { value: "serengeti-safari", label: "🦁 Serengeti National Park Night Helicopter Safari", type: "earth-inland" },
      { value: "patagonia-glacier", label: "🧊 Patagonia Perito Moreno Glacier Expedition", type: "earth-inland" }
    ]
  },
  "beyond-earth": {
    sources: [
      { value: "cape-canaveral", label: "🚀 Cape Canaveral SpaceX Pad 39A", type: "space" },
      { value: "starbase-texas", label: "🚀 Boca Chica Starbase Complex, Texas", type: "space" },
      { value: "artemis-gateway", label: "🛰️ Moon — Artemis Gateway Orbital Hub", type: "space" },
      { value: "baikonur-pad", label: "🚀 Baikonur Commercial Orbital Launchpad", type: "space" }
    ],
    destinations: [
      { value: "luna-city", label: "🌕 Luna City Artemis Base & Grand Hilton", type: "space" },
      { value: "mars-olympus", label: "🪐 Mars — Olympus Mons Bio-Dome Resort", type: "space" },
      { value: "leo-reef", label: "🛰️ Low Earth Orbit Reef Hotel (Zero-G)", type: "space" },
      { value: "valles-marineris", label: "🪐 Mars — Valles Marineris Canyon Outpost", type: "space" }
    ]
  }
};

// --- Dynamic Transport Mode Database ---
const TRANSPORT_MODES_DATA = {
  "space": [
    { value: "starship", label: "🚀 SpaceX Starship Super Heavy Mk-IV" },
    { value: "orion", label: "🛰️ Artemis Deep Space Transit Clipper" },
    { value: "aetheris-yacht", label: "✨ Aetheris Executive Zero-G Yacht" }
  ],
  "intercontinental": [
    { value: "supersonic", label: "⚡ Supersonic SkyLiner Executive Jet" },
    { value: "commercial-first", label: "✈️ Commercial First-Class Long-Haul Airliner" },
    { value: "superyacht-ocean", label: "🚢 Trans-Oceanic Luxury Superyacht Cruise" }
  ],
  "inland": [
    { value: "maglev-train", label: "🚆 High-Speed Maglev Bullet Train / Rail" },
    { value: "heli-shuttle", label: "🚁 Private Heli-Ski / VIP Helicopter Shuttle" },
    { value: "rover-4x4", label: "🚜 4x4 Expedition Wilderness Rover" },
    { value: "regional-air", label: "✈️ Regional Air Shuttle" }
  ]
};

// --- Package Days Options (1 to 100 Days) ---
const PACKAGE_DAY_OPTIONS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 15, 18, 20, 21, 25, 30, 45, 60, 90, 100
];

// --- Expeditions Database ---
const EXPEDITIONS = [
  {
    id: "elon-moon",
    title: "Elon's 7-Day Starship Lunar Odyssey",
    tag: "SpaceX Starship Exclusive",
    isElon: true,
    category: "beyond-earth",
    image: "assets/hero_earth_to_moon.jpg",
    description: "The ultimate Moon itinerary: launch aboard SpaceX Starship Super Heavy, dock at Artemis Gateway, and stay at Luna City Grand Suite.",
    duration: "7 Days",
    gravity: "0.16 g (Moon)",
    price: "⚡ 480,000 Credits",
    days: [
      {
        day: 1,
        location: "Cape Canaveral 39A / Earth Orbit",
        activities: [
          { type: "spaceflight", title: "Starship Launch & G-Force Acclimation", desc: "Super Heavy lift-off from Pad 39A into Low Earth Orbit." },
          { type: "zero-g", title: "Zero-G Champagne Welcome Reception", desc: "Float across Starship's panoramic forward observation dome." }
        ]
      },
      {
        day: 2,
        location: "Translunar Injection Transfer",
        activities: [
          { type: "spaceflight", title: "Translunar Injection Engine Burn", desc: "Velocity reaches 10.8 km/s heading toward the Moon." },
          { type: "hotel", title: "Starship VIP Stateroom Rest & Radio Check", desc: "Private pressurized capsule with Earth views." }
        ]
      },
      {
        day: 3,
        location: "Artemis Gateway & Lunar Landing",
        activities: [
          { type: "spaceflight", title: "Lunar Orbit Insertion & Gateway Docking", desc: "Brief layover at NASA/SpaceX Artemis Gateway Hub." },
          { type: "hotel", title: "Luna City Grand Hilton Check-in", desc: "Check-in to your Earthrise Panoramic Suite." }
        ]
      },
      {
        day: 4,
        location: "Luna City & Mare Serenitatis",
        activities: [
          { type: "rover", title: "Pressurized Moon Rover Safari", desc: "Traverse Apollo 11 landing site in Tesla CyberRover." },
          { type: "zero-g", title: "Low-Gravity Trampoline & Gym Session", desc: "Experience 1/6th gravity jumps inside the glass dome." }
        ]
      },
      {
        day: 5,
        location: "Luna Base Alpha",
        activities: [
          { type: "spacewalk", title: "Official EVA Spacewalk & Flag Ceremony", desc: "Don your fitted SpaceX EVA suit for a moonwalk." },
          { type: "hotel", title: "Earthrise Michelin Fine Dining", desc: "Molecular cuisine while watching Earth rise over crater rim." }
        ]
      },
      {
        day: 6,
        location: "Lunar Orbit / Earth Departure",
        activities: [
          { type: "spaceflight", title: "Lunar Liftoff & Trans-Earth Injection", desc: "Starship departs lunar surface for home transit." }
        ]
      },
      {
        day: 7,
        location: "Boca Chica Starbase / Earth",
        activities: [
          { type: "spaceflight", title: "Aerocapture Re-entry & Chopsticks Landing", desc: "Precision landing catch at Starbase, Texas." }
        ]
      }
    ]
  },
  {
    id: "mars-pioneer",
    title: "Mars 14-Day Red Planet Pioneer Voyage",
    tag: "Interplanetary Explorer",
    isElon: false,
    category: "beyond-earth",
    image: "assets/mars_resort.jpg",
    description: "Expedition across Martian canyons, staying in glowing glass biomes under the stars of Olympus Mons.",
    duration: "14 Days",
    gravity: "0.38 g (Mars)",
    price: "⚡ 1,200,000 Credits",
    days: [
      {
        day: 1,
        location: "Boca Chica Starbase, Earth",
        activities: [
          { type: "spaceflight", title: "Interplanetary Fleet Departure", desc: "Board the Ares Trans-Mars Transport." }
        ]
      },
      {
        day: 2,
        location: "Mars Olympus Dome Resort",
        activities: [
          { type: "hotel", title: "Check-in at Aurora Canyon Habitat", desc: "Luxury suite in Valles Marineris." },
          { type: "rover", title: "Martian Sunset Rover Tour", desc: "Watch the blue Martian sunset over red sands." }
        ]
      }
    ]
  },
  {
    id: "earth-heritage-luxury",
    title: "Kyoto & Swiss Alps Imperial Luxury Sanctuary",
    tag: "Earth Luxury Elite",
    isElon: false,
    category: "earth-luxury",
    image: "assets/lunar_hotel.jpg",
    description: "Private supersonic transfer between Kyoto bamboo Ryokan retreats and 5-star Swiss Alpine heli-skiing chalets.",
    duration: "6 Days",
    gravity: "1.00 g (Earth)",
    price: "⚡ 95,000 Credits",
    days: [
      {
        day: 1,
        location: "Kyoto, Japan",
        activities: [
          { type: "hotel", title: "Private Bamboo Ryokan & Thermal Onsen", desc: "Traditional luxury in Arashiyama." },
          { type: "adventure", title: "Private Michelin Kaiseki Ceremony", desc: "Master chef dining experience." }
        ]
      },
      {
        day: 2,
        location: "Zermatt, Swiss Alps",
        activities: [
          { type: "adventure", title: "Helicopter Skiing on Matterhorn Slopes", desc: "Private heli-drop on untouched powder." }
        ]
      }
    ]
  },
  {
    id: "iceland-volcano-adventure",
    title: "Iceland Lava Trek & Great Barrier Trench Dive",
    tag: "Earth Adventurous",
    isElon: false,
    category: "earth-adventure",
    image: "assets/hero_earth_to_moon.jpg",
    description: "High-octane expedition traversing active Icelandic volcanic craters and deep-sea trench submersibles.",
    duration: "8 Days",
    gravity: "1.00 g (Earth)",
    price: "⚡ 75,000 Credits",
    days: [
      {
        day: 1,
        location: "Geldingadalir, Iceland",
        activities: [
          { type: "adventure", title: "Active Volcanic Crater Helicopter Tour", desc: "Fly over active glowing lava rivers." }
        ]
      },
      {
        day: 2,
        location: "Great Barrier Reef, Australia",
        activities: [
          { type: "adventure", title: "Deep Submersible Trench Exploration", desc: "Explore abyss ecosystems at 500m depth." }
        ]
      }
    ]
  }
];

// --- State Management ---
let currentExpedition = JSON.parse(JSON.stringify(EXPEDITIONS[0]));
let selectedSuit = "obsidian";
let currentWorldCategory = "all";
let orbitalSimSpeed = 1;
let selectedPackageDays = 7;
let isAudioPlaying = false;
let audioContext = null;
let audioNodes = null;

// --- Initialize App ---
document.addEventListener("DOMContentLoaded", () => {
  initStarfieldCanvas();
  initOrbitSimulatorCanvas();
  populatePackageDropdown();
  updateDropdownsForCategory("all");
  renderExpeditionCards();
  renderTimeline();
  updateTelemetryStats();
});

// --- Populate Package Dropdown Options (1 to 100 Days) ---
function populatePackageDropdown() {
  const pkgSelect = document.getElementById("package-select");
  if (!pkgSelect) return;

  pkgSelect.innerHTML = PACKAGE_DAY_OPTIONS.map(days => `
    <option value="${days}" ${days === selectedPackageDays ? 'selected' : ''}>
      ${days} ${days === 1 ? 'Day Package' : 'Days Package'}
    </option>
  `).join('');
}

// --- Package Duration Change Handler ---
function handlePackageChange() {
  const pkgSelect = document.getElementById("package-select");
  if (!pkgSelect) return;

  selectedPackageDays = parseInt(pkgSelect.value, 10);
  
  // Adjust days in current expedition
  adjustTimelineDays(selectedPackageDays);

  renderTimeline();
  updateTelemetryStats();
  showToast(`Package set to ${selectedPackageDays} Days`);
}

function adjustTimelineDays(targetDays) {
  const currentLength = currentExpedition.days.length;

  if (targetDays > currentLength) {
    // Append additional days up to targetDays
    for (let i = currentLength + 1; i <= targetDays; i++) {
      currentExpedition.days.push({
        day: i,
        location: `Expedition Stop #${i} (${currentExpedition.category.toUpperCase().replace('-', ' ')})`,
        activities: [
          {
            type: currentExpedition.category === 'beyond-earth' ? 'spaceflight' : 'adventure',
            title: `Day ${i} Specialized Activity`,
            desc: `Custom curated experience for Day ${i} of your package.`
          }
        ]
      });
    }
  } else if (targetDays < currentLength) {
    // Truncate days to targetDays
    currentExpedition.days = currentExpedition.days.slice(0, targetDays);
  }
}

// --- Dynamic Dropdown Populator ---
function updateDropdownsForCategory(category) {
  const depSelect = document.getElementById("departure-select");
  const arrSelect = document.getElementById("arrival-select");
  if (!depSelect || !arrSelect) return;

  const data = CATEGORY_DROPDOWN_DATA[category] || CATEGORY_DROPDOWN_DATA["all"];

  depSelect.innerHTML = data.sources.map(s => `
    <option value="${s.value}" data-type="${s.type}">${s.label}</option>
  `).join('');

  arrSelect.innerHTML = data.destinations.map(d => `
    <option value="${d.value}" data-type="${d.type}">${d.label}</option>
  `).join('');

  updateTransportModes(category);
}

// --- Dynamic Transport Mode Filtering Engine ---
function updateTransportModes(categoryOverride) {
  const category = categoryOverride || currentWorldCategory;
  const depSelect = document.getElementById("departure-select");
  const arrSelect = document.getElementById("arrival-select");
  const vesselSelect = document.getElementById("vessel-select");

  if (!vesselSelect) return;

  const depOpt = depSelect ? depSelect.options[depSelect.selectedIndex] : null;
  const arrOpt = arrSelect ? arrSelect.options[arrSelect.selectedIndex] : null;

  const depType = depOpt ? depOpt.getAttribute("data-type") : "";
  const arrType = arrOpt ? arrOpt.getAttribute("data-type") : "";

  let optionsToRender = [];

  if (category === "beyond-earth" || depType === "space" || arrType === "space") {
    optionsToRender = TRANSPORT_MODES_DATA["space"];
  } else if (depType === "earth-inland" || arrType === "earth-inland") {
    optionsToRender = [...TRANSPORT_MODES_DATA["inland"], TRANSPORT_MODES_DATA["intercontinental"][0]];
  } else {
    optionsToRender = TRANSPORT_MODES_DATA["intercontinental"];
  }

  vesselSelect.innerHTML = optionsToRender.map(v => `
    <option value="${v.value}">${v.label}</option>
  `).join('');
}

function handleLocationChange() {
  updateTransportModes();
  const vesselName = document.getElementById("vessel-select").options[0]?.text || "Transport Mode";
  showToast(`Transport mode updated: ${vesselName.split(' ')[1] || vesselName}`);
}

// --- Menu Tab & Category Switcher ---
function switchWorld(category) {
  currentWorldCategory = category;

  const categories = ['all', 'earth-luxury', 'earth-adventure', 'beyond-earth'];
  categories.forEach(c => {
    const btn = document.getElementById(`btn-world-${c}`);
    if (btn) btn.classList.toggle('active', c === category);

    const navItem = document.getElementById(`nav-${c}`);
    if (navItem) navItem.classList.toggle('active', c === category);
  });

  const bgOverlay = document.getElementById("bg-overlay");
  if (bgOverlay) {
    bgOverlay.className = "hero-bg-overlay";
    if (category === "beyond-earth") bgOverlay.classList.add("beyond-earth-theme");
    if (category === "earth-luxury") bgOverlay.classList.add("earth-luxury-theme");
    if (category === "earth-adventure") bgOverlay.classList.add("earth-adventure-theme");
  }

  const secTitle = document.getElementById("expedition-section-title");
  if (secTitle) {
    secTitle.innerText = category === "all" ? "All Featured Expeditions" 
      : category === "earth-luxury" ? "Earth Luxuries Expeditions" 
      : category === "earth-adventure" ? "Earth Adventurous Expeditions"
      : "Beyond Earth Celestial Expeditions";
  }

  updateDropdownsForCategory(category);
  renderExpeditionCards();

  showToast(`Filter set to: ${category.toUpperCase().replace('-', ' ')}`);
}

// --- Render Expedition Cards ---
function renderExpeditionCards() {
  const grid = document.getElementById("expedition-grid");
  if (!grid) return;

  const filtered = currentWorldCategory === "all" 
    ? EXPEDITIONS 
    : EXPEDITIONS.filter(e => e.category === currentWorldCategory);

  grid.innerHTML = filtered.map(exp => `
    <div class="expedition-card ${exp.isElon ? 'featured' : ''}">
      <div class="card-image-wrapper">
        <img src="${exp.image}" class="card-image" alt="${exp.title}">
        <span class="card-tag ${exp.isElon ? 'elon-special' : exp.category === 'earth-adventure' ? 'adventure-tag' : ''}">${exp.tag}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${exp.title}</h3>
        <p class="card-desc">${exp.description}</p>
        
        <div class="card-highlights">
          <div class="highlight-item"><i data-lucide="clock"></i> ${exp.duration}</div>
          <div class="highlight-item"><i data-lucide="orbit"></i> ${exp.gravity}</div>
        </div>

        <div class="card-footer">
          <div class="price-tag">
            <span class="price-label">Starting From</span>
            <span class="price-val">${exp.price}</span>
          </div>
          <button class="btn-card-action" onclick="loadPreset('${exp.id}')">
            Load Expedition
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// --- Dynamic Starfield Canvas Background ---
function initStarfieldCanvas() {
  const canvas = document.getElementById("starfield-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numStars = 220;
  const stars = [];

  for (let i = 0; i < numStars; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.3,
      alpha: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.15 + 0.05,
      pulse: Math.random() * 0.02
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(star => {
      star.alpha += Math.sin(Date.now() * 0.002 + star.x) * star.pulse;
      star.alpha = Math.max(0.2, Math.min(1, star.alpha));

      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 240, 255, ${star.alpha})`;
      ctx.shadowBlur = star.radius * 3;
      ctx.shadowColor = "#00f0ff";
      ctx.fill();

      star.y += star.speed;
      if (star.y > height) {
        star.y = 0;
        star.x = Math.random() * width;
      }
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// --- Orbital Trajectory Simulator ---
let orbitAngle = 0;

function initOrbitSimulatorCanvas() {
  const canvas = document.getElementById("orbit-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  function drawOrbit() {
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const earthX = 60;
    const earthY = h / 2;
    const destX = w - 60;
    const destY = h / 2;

    ctx.beginPath();
    ctx.arc(earthX, earthY, 22, 0, Math.PI * 2);
    ctx.fillStyle = "#00a8ff";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00f0ff";
    ctx.fill();

    ctx.font = "10px Outfit, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("SOURCE", earthX - 20, earthY + 36);

    ctx.beginPath();
    ctx.arc(destX, destY, 14, 0, Math.PI * 2);
    ctx.fillStyle = currentWorldCategory === "beyond-earth" ? "#ff007f" : "#10b981";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#ffffff";
    ctx.fill();

    ctx.fillText("DESTINATION", destX - 30, destY + 28);

    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(earthX, earthY);
    ctx.quadraticCurveTo(w / 2, h / 2 - 50 * Math.sin(orbitAngle * 0.5), destX, destY);
    ctx.strokeStyle = "rgba(0, 240, 255, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    orbitAngle += 0.015 * orbitalSimSpeed;
    if (orbitAngle > Math.PI) orbitAngle = 0;

    const t = orbitAngle / Math.PI;
    const shipX = (1 - t) * (1 - t) * earthX + 2 * (1 - t) * t * (w / 2) + t * t * destX;
    const shipY = (1 - t) * (1 - t) * earthY + 2 * (1 - t) * t * (h / 2 - 50 * Math.sin(orbitAngle * 0.5)) + t * t * destY;

    ctx.beginPath();
    ctx.arc(shipX, shipY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#ffd700";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ffd700";
    ctx.fill();

    ctx.fillStyle = "rgba(0, 240, 255, 0.8)";
    ctx.font = "9px monospace";
    ctx.fillText(`TRANSIT ${(t * 100).toFixed(0)}%`, shipX - 20, shipY - 12);

    requestAnimationFrame(drawOrbit);
  }

  drawOrbit();
}

function toggleOrbitalSpeed() {
  orbitalSimSpeed = orbitalSimSpeed === 1 ? 3 : orbitalSimSpeed === 3 ? 6 : 1;
  const label = document.getElementById("sim-speed-label");
  if (label) {
    label.innerText = `Velocity Simulation x${orbitalSimSpeed}`;
  }
  showToast(`Speed set to x${orbitalSimSpeed}`);
}

// --- Timeline Render & Editing ---
function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  const tripTitle = document.getElementById("trip-title");
  if (tripTitle) tripTitle.value = currentExpedition.title;

  container.innerHTML = currentExpedition.days.map((dayObj, dayIdx) => `
    <div class="timeline-day">
      <div class="day-header">
        <span class="day-badge">DAY ${dayObj.day}</span>
        <div class="day-location">
          <i data-lucide="map-pin"></i> ${dayObj.location}
        </div>
      </div>

      <div class="activity-list">
        ${dayObj.activities.map((act, actIdx) => `
          <div class="activity-item">
            <div class="activity-info">
              <div class="activity-icon ${act.type}">
                ${act.type === 'spaceflight' ? '🚀' : act.type === 'hotel' ? '🏨' : act.type === 'rover' ? '🏎️' : act.type === 'spacewalk' ? '👩‍🚀' : '✨'}
              </div>
              <div class="activity-details">
                <h4>${act.title}</h4>
                <p>${act.desc}</p>
              </div>
            </div>
            <button class="btn-remove-act" onclick="removeActivity(${dayIdx}, ${actIdx})" title="Remove item">
              <i data-lucide="trash-2"></i>
            </button>
          </div>
        `).join('')}
      </div>

      <button class="btn-add-activity" onclick="addActivityPrompt(${dayIdx})">
        <i data-lucide="plus-circle"></i> Add Custom Activity / Event
      </button>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
  updateTelemetryStats();
}

function updateTelemetryStats() {
  const durationEl = document.getElementById("stat-duration");
  const gravityEl = document.getElementById("stat-gravity");
  const priceEl = document.getElementById("stat-price");

  const numDays = currentExpedition.days.length;
  if (durationEl) durationEl.innerText = `${numDays} Days`;
  if (gravityEl) gravityEl.innerText = currentExpedition.gravity;

  const calculatedPrice = numDays * 45000 + (currentExpedition.category === 'beyond-earth' ? 300000 : 50000);
  if (priceEl) priceEl.innerText = `⚡ ${calculatedPrice.toLocaleString()}`;
}

function removeActivity(dayIdx, actIdx) {
  currentExpedition.days[dayIdx].activities.splice(actIdx, 1);
  renderTimeline();
  showToast("Item removed");
}

function addActivityPrompt(dayIdx) {
  const title = prompt("Enter Activity Title:", "Private Excursion / Tasting");
  if (!title) return;
  const desc = prompt("Enter Brief Description:", "Guided local experience.");
  
  currentExpedition.days[dayIdx].activities.push({
    type: "adventure",
    title: title,
    desc: desc || "Custom itinerary event."
  });

  renderTimeline();
  showToast("Added activity to Day " + (dayIdx + 1));
}

function updateTripTitle() {
  const input = document.getElementById("trip-title");
  if (input) {
    currentExpedition.title = input.value;
    showToast("Updated trip name");
  }
}

function loadPreset(presetId) {
  const found = EXPEDITIONS.find(e => e.id === presetId);
  if (found) {
    currentExpedition = JSON.parse(JSON.stringify(found));
    selectedPackageDays = currentExpedition.days.length;
    const pkgSelect = document.getElementById("package-select");
    if (pkgSelect) pkgSelect.value = selectedPackageDays;

    renderTimeline();
    scrollToPlanner();
    showToast(`Loaded ${found.title}`);
  }
}

function resetToPreset(presetId) {
  loadPreset(presetId);
}

function handleQuickSearch(e) {
  e.preventDefault();
  const dep = document.getElementById("departure-select").options[document.getElementById("departure-select").selectedIndex]?.text;
  const arr = document.getElementById("arrival-select").options[document.getElementById("arrival-select").selectedIndex]?.text;
  const vessel = document.getElementById("vessel-select").options[document.getElementById("vessel-select").selectedIndex]?.text;
  const pkg = document.getElementById("package-select").value;

  scrollToPlanner();
  showToast(`Package: ${pkg} Days | Mode: ${vessel?.split(' ')[1] || vessel}`);
}

function scrollToPlanner() {
  const el = document.getElementById("planner");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function selectSuit(suit) {
  selectedSuit = suit;
  ['obsidian', 'artemis', 'cyber'].forEach(s => {
    const card = document.getElementById(`suit-${s}`);
    if (card) card.classList.toggle('selected', s === suit);
  });
  showToast(`Gear tier updated to ${suit.toUpperCase()}`);
}

function toggleCosmicAudio() {
  const btn = document.getElementById("btn-audio-toggle");
  const text = document.getElementById("audio-text");

  if (!isAudioPlaying) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx();

      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(55, audioContext.currentTime);

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(110, audioContext.currentTime);

      gainNode.gain.setValueAtTime(0.08, audioContext.currentTime);

      osc1.connect(gainNode);
      osc2.connect(gainNode);
      gainNode.connect(audioContext.destination);

      osc1.start();
      osc2.start();

      audioNodes = { osc1, osc2, gainNode };
      isAudioPlaying = true;

      if (btn) btn.classList.add("playing");
      if (text) text.innerText = "Cosmic Sound ON";
      showToast("Cosmic Sound active 🌌");
    } catch (e) {
      showToast("Audio error");
    }
  } else {
    if (audioNodes) {
      audioNodes.osc1.stop();
      audioNodes.osc2.stop();
      audioContext.close();
    }
    isAudioPlaying = false;
    if (btn) btn.classList.remove("playing");
    if (text) text.innerText = "Ambient Sound";
    showToast("Ambient sound muted");
  }
}

function openSpacePassModal() {
  const modal = document.getElementById("space-pass-modal");
  if (!modal) return;

  const depSelect = document.getElementById("departure-select");
  const arrSelect = document.getElementById("arrival-select");
  const vesselSelect = document.getElementById("vessel-select");
  const pkgSelect = document.getElementById("package-select");

  document.getElementById("modal-trip-name").innerText = currentExpedition.title;
  document.getElementById("modal-suit-tier").innerText = `MODE: ${vesselSelect ? vesselSelect.options[vesselSelect.selectedIndex]?.text : "VESSEL"}`;
  document.getElementById("modal-passenger-name").innerText = "VIP EXPLORER";
  document.getElementById("modal-launchpad").innerText = depSelect ? depSelect.options[depSelect.selectedIndex]?.text : "DEPARTURE HUB";
  document.getElementById("modal-destination").innerText = arrSelect ? arrSelect.options[arrSelect.selectedIndex]?.text : "DESTINATION";
  document.getElementById("modal-launch-date").innerText = document.getElementById("date-input").value;
  document.getElementById("modal-gravity-val").innerText = currentExpedition.gravity;
  document.getElementById("modal-duration-val").innerText = `${pkgSelect ? pkgSelect.value : currentExpedition.days.length} DAYS PACKAGE`;
  document.getElementById("modal-pass-id").innerText = `PASS #AST-${Math.floor(1000 + Math.random() * 9000)}-PORTAL`;

  modal.classList.add("active");
}

function closeSpacePassModal() {
  const modal = document.getElementById("space-pass-modal");
  if (modal) modal.classList.remove("active");
}

function printSpacePass() {
  window.print();
}

function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="font-size: 1.2rem;">✨</span> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
