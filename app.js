/* ASTRANAV - Interplanetary & Terrestrial Itinerary Engine Logic */

// --- Expeditions & Presets Database ---
const EXPEDITIONS = [
  {
    id: "elon-moon",
    title: "Elon's 7-Day Starship Lunar Odyssey",
    tag: "SpaceX Starship Exclusive",
    isElon: true,
    category: "moon",
    image: "assets/hero_earth_to_moon.jpg",
    description: "The ultimate Moon itinerary: launch aboard SpaceX Starship Super Heavy, dock at Artemis Gateway, and stay at Luna City Grand Suite.",
    duration: "7 Days / 6 Nights",
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
          { type: "hotel", title: "Earthrise Michelin Fine Dining", desc: "Molecular cuisine while watching Earth rise over the crater rim." }
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
    category: "mars",
    image: "assets/mars_resort.jpg",
    description: "Expedition across the Martian canyons, staying in glowing glass biomes nestled under the stars of Olympus Mons.",
    duration: "14 Days / 13 Nights",
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
    id: "lunar-luxury",
    title: "Lunar Suite Weekend Getaway",
    tag: "Moon Luxury Stay",
    isElon: false,
    category: "moon",
    image: "assets/lunar_hotel.jpg",
    description: "A short 4-day orbital retreat at the Lunar Odyssey Suite with panoramic floor-to-ceiling Earthrise views.",
    duration: "4 Days / 3 Nights",
    gravity: "0.16 g (Moon)",
    price: "⚡ 320,000 Credits",
    days: [
      {
        day: 1,
        location: "Artemis Gateway",
        activities: [
          { type: "hotel", title: "Check-in to Lunar Odyssey Suite", desc: "Panoramic view of Mare Imbrium." }
        ]
      }
    ]
  },
  {
    id: "earth-deluxe",
    title: "Earth Grand Heritage Tour: Tokyo to Swiss Alps",
    tag: "Terrestrial Deluxe",
    isElon: false,
    category: "earth",
    image: "assets/hero_earth_to_moon.jpg",
    description: "Experience Earth's most breathtaking sanctuaries with supersonic sky tours and private Ryokan stays.",
    duration: "6 Days / 5 Nights",
    gravity: "1.00 g (Earth)",
    price: "⚡ 95,000 Credits",
    days: [
      {
        day: 1,
        location: "Kyoto, Japan",
        activities: [
          { type: "hotel", title: "Private Bamboo Ryokan & Onsen", desc: "Traditional luxury in Arashiyama." }
        ]
      }
    ]
  }
];

// --- State Management ---
let currentExpedition = JSON.parse(JSON.stringify(EXPEDITIONS[0])); // Clone Elon Moon trip
let selectedSuit = "obsidian";
let currentWorldFilter = "all";
let orbitalSimSpeed = 1;
let isAudioPlaying = false;
let audioContext = null;
let audioNodes = null;

// --- Initialize App on DOM Load ---
document.addEventListener("DOMContentLoaded", () => {
  initStarfieldCanvas();
  initOrbitSimulatorCanvas();
  renderExpeditionCards();
  renderTimeline();
  updateTelemetryStats();
  
  // Auto-set launch date input to today + 3 months
  const dateInput = document.getElementById("date-input");
  if (dateInput) {
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 2);
    dateInput.value = futureDate.toISOString().split('T')[0];
  }
});

// --- Dynamic Starfield Canvas Background Animation ---
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

      // Slow downward drift
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

// --- Orbital Trajectory Simulator (Canvas 2D) ---
let orbitAnimFrame = null;
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
    const moonX = w - 60;
    const moonY = h / 2;

    // Draw Earth
    ctx.beginPath();
    ctx.arc(earthX, earthY, 22, 0, Math.PI * 2);
    ctx.fillStyle = "#00a8ff";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#00f0ff";
    ctx.fill();

    // Earth Label
    ctx.font = "10px Outfit, sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("EARTH", earthX - 18, earthY + 36);

    // Draw Moon
    ctx.beginPath();
    ctx.arc(moonX, moonY, 14, 0, Math.PI * 2);
    ctx.fillStyle = "#e0e6ed";
    ctx.shadowBlur = 12;
    ctx.shadowColor = "#ffffff";
    ctx.fill();

    // Moon Label
    ctx.fillText("MOON", moonX - 16, moonY + 28);

    // Hohmann Transfer Curve (Dashed)
    ctx.beginPath();
    ctx.setLineDash([4, 4]);
    ctx.moveTo(earthX, earthY);
    ctx.quadraticCurveTo(w / 2, h / 2 - 50 * Math.sin(orbitAngle * 0.5), moonX, moonY);
    ctx.strokeStyle = "rgba(0, 240, 255, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.setLineDash([]);

    // Animated Spacecraft Ship along arc
    orbitAngle += 0.015 * orbitalSimSpeed;
    if (orbitAngle > Math.PI) orbitAngle = 0;

    const t = orbitAngle / Math.PI; // 0 to 1
    const shipX = (1 - t) * (1 - t) * earthX + 2 * (1 - t) * t * (w / 2) + t * t * moonX;
    const shipY = (1 - t) * (1 - t) * earthY + 2 * (1 - t) * t * (h / 2 - 50 * Math.sin(orbitAngle * 0.5)) + t * t * moonY;

    // Ship Icon Glow
    ctx.beginPath();
    ctx.arc(shipX, shipY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#ff007f";
    ctx.shadowBlur = 15;
    ctx.shadowColor = "#ff007f";
    ctx.fill();

    // Trajectory telemetry label
    ctx.fillStyle = "rgba(0, 240, 255, 0.8)";
    ctx.font = "9px monospace";
    ctx.fillText(`🚀 T+${(t * 72).toFixed(1)}h`, shipX - 15, shipY - 12);

    orbitAnimFrame = requestAnimationFrame(drawOrbit);
  }

  drawOrbit();
}

function toggleOrbitalSpeed() {
  orbitalSimSpeed = orbitalSimSpeed === 1 ? 3 : orbitalSimSpeed === 3 ? 6 : 1;
  const label = document.getElementById("sim-speed-label");
  if (label) {
    label.innerText = `Velocity: ${(10.8 * orbitalSimSpeed).toFixed(1)} km/s (Hohmann Transfer x${orbitalSimSpeed})`;
  }
  showToast(`Orbital Simulation Speed set to x${orbitalSimSpeed}`);
}

// --- Render Expedition Cards ---
function renderExpeditionCards() {
  const grid = document.getElementById("expedition-grid");
  if (!grid) return;

  const filtered = currentWorldFilter === "all" 
    ? EXPEDITIONS 
    : EXPEDITIONS.filter(e => e.category === currentWorldFilter);

  grid.innerHTML = filtered.map(exp => `
    <div class="expedition-card ${exp.isElon ? 'featured' : ''}">
      <div class="card-image-wrapper">
        <img src="${exp.image}" class="card-image" alt="${exp.title}">
        <span class="card-tag ${exp.isElon ? 'elon-special' : ''}">${exp.tag}</span>
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

// --- World Selector Filter Switcher ---
function switchWorld(world) {
  currentWorldFilter = world;

  // Active state update
  const buttons = ['all', 'earth', 'moon', 'mars', 'orbit'];
  buttons.forEach(b => {
    const btn = document.getElementById(`btn-world-${b}`);
    if (btn) btn.classList.toggle('active', b === world);
  });

  // Background Theme Switch
  const bgOverlay = document.getElementById("bg-overlay");
  if (bgOverlay) {
    bgOverlay.className = "hero-bg-overlay";
    if (world === "mars") bgOverlay.classList.add("mars-theme");
    if (world === "moon") bgOverlay.classList.add("lunar-theme");
  }

  renderExpeditionCards();
  showToast(`Switched view to ${world.toUpperCase()} Expeditions`);
}

// --- Render Interactive Itinerary Timeline ---
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

// --- Dynamic Telemetry Stats Calculator ---
function updateTelemetryStats() {
  const durationEl = document.getElementById("stat-duration");
  const gravityEl = document.getElementById("stat-gravity");
  const priceEl = document.getElementById("stat-price");

  const numDays = currentExpedition.days.length;
  if (durationEl) durationEl.innerText = `${numDays} Days`;
  if (gravityEl) gravityEl.innerText = currentExpedition.gravity;

  const calculatedPrice = numDays * 65000 + (currentExpedition.category === 'mars' ? 400000 : 80000);
  if (priceEl) priceEl.innerText = `⚡ ${calculatedPrice.toLocaleString()}`;
}

// --- Itinerary Editing Controls ---
function removeActivity(dayIdx, actIdx) {
  currentExpedition.days[dayIdx].activities.splice(actIdx, 1);
  renderTimeline();
  showToast("Activity removed from timeline");
}

function addActivityPrompt(dayIdx) {
  const title = prompt("Enter Activity Title (e.g., 'Zero-G Champagne Toast'):", "Lunar Rover Crater Excursion");
  if (!title) return;
  const desc = prompt("Enter Brief Description:", "Guided tour by Tesla Lunar Rover.");
  
  currentExpedition.days[dayIdx].activities.push({
    type: "rover",
    title: title,
    desc: desc || "Custom astronaut itinerary event."
  });

  renderTimeline();
  showToast("New activity added to day " + (dayIdx + 1));
}

function updateTripTitle() {
  const input = document.getElementById("trip-title");
  if (input) {
    currentExpedition.title = input.value;
    showToast("Updated trip name to " + input.value);
  }
}

// --- Load Presets ---
function loadPreset(presetId) {
  const found = EXPEDITIONS.find(e => e.id === presetId);
  if (found) {
    currentExpedition = JSON.parse(JSON.stringify(found));
    renderTimeline();
    scrollToPlanner();
    showToast(`Loaded ${found.title}`);
  }
}

function loadElonLunarExpedition() {
  loadPreset("elon-moon");
}

function resetToPreset(presetId) {
  loadPreset(presetId);
}

// --- Navigation & Quick Search ---
function handleQuickSearch(e) {
  e.preventDefault();
  const arrival = document.getElementById("arrival-select").value;
  
  if (arrival.includes("moon")) switchWorld("moon");
  else if (arrival.includes("mars")) switchWorld("mars");
  else if (arrival.includes("orbit")) switchWorld("orbit");
  else switchWorld("earth");

  scrollToPlanner();
  showToast("Search executed! Custom trajectory generated.");
}

function scrollToPlanner() {
  const el = document.getElementById("planner");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

function scrollToHotels() {
  switchWorld("moon");
  const el = document.getElementById("featured");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// --- Space Suit Selector ---
function selectSuit(suit) {
  selectedSuit = suit;
  ['obsidian', 'artemis', 'cyber'].forEach(s => {
    const card = document.getElementById(`suit-${s}`);
    if (card) card.classList.toggle('selected', s === suit);
  });
  showToast(`Space Suit fitted: ${suit.toUpperCase()} Edition`);
}

// --- Cosmic Ambient Audio Synthesizer (Web Audio API) ---
function toggleCosmicAudio() {
  const btn = document.getElementById("btn-audio-toggle");
  const icon = document.getElementById("audio-icon");
  const text = document.getElementById("audio-text");

  if (!isAudioPlaying) {
    // Start Audio
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      audioContext = new AudioCtx();

      // Deep space drone oscillator
      const osc1 = audioContext.createOscillator();
      const osc2 = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      osc1.type = "sine";
      osc1.frequency.setValueAtTime(55, audioContext.currentTime); // Low A

      osc2.type = "triangle";
      osc2.frequency.setValueAtTime(110, audioContext.currentTime); // A2

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
      showToast("Cosmic Ambient Synthesizer active 🌌");
    } catch (e) {
      showToast("Audio Context error");
    }
  } else {
    // Stop Audio
    if (audioNodes) {
      audioNodes.osc1.stop();
      audioNodes.osc2.stop();
      audioContext.close();
    }
    isAudioPlaying = false;
    if (btn) btn.classList.remove("playing");
    if (text) text.innerText = "Ambient Sound";
    showToast("Cosmic Ambient sound muted");
  }
}

// --- Space Pass Modal Operations ---
function openSpacePassModal() {
  const modal = document.getElementById("space-pass-modal");
  if (!modal) return;

  // Populate ticket values
  document.getElementById("modal-trip-name").innerText = currentExpedition.title;
  document.getElementById("modal-suit-tier").innerText = `SUIT: ${selectedSuit.toUpperCase()} VIP`;
  document.getElementById("modal-passenger-name").innerText = "ELON MUSK / VIP GUEST";
  document.getElementById("modal-launchpad").innerText = document.getElementById("departure-select").value.toUpperCase();
  document.getElementById("modal-destination").innerText = currentExpedition.days[currentExpedition.days.length - 1]?.location || "LUNA CITY";
  document.getElementById("modal-launch-date").innerText = document.getElementById("date-input").value;
  document.getElementById("modal-gravity-val").innerText = currentExpedition.gravity;
  document.getElementById("modal-duration-val").innerText = `${currentExpedition.days.length} DAYS`;
  document.getElementById("modal-pass-id").innerText = `PASS #AST-${Math.floor(1000 + Math.random() * 9000)}-${currentExpedition.category.toUpperCase()}`;

  modal.classList.add("active");
}

function closeSpacePassModal() {
  const modal = document.getElementById("space-pass-modal");
  if (modal) modal.classList.remove("active");
}

function printSpacePass() {
  window.print();
}

// --- Toast Notification System ---
function showToast(msg) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="font-size: 1.2rem;">🚀</span> <span>${msg}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(100%)";
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
