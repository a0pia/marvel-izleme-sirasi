// Doomsday'e kadar Marvel izleme sırası
// type: "film" | "dizi"   key: kısa yolda gösterilir   bonus: sadece "Bonus X-Men" açıkken

const PHASES = [
  { id: "bonus", name: "Bonus: Fox X-Men", desc: "İsteğe bağlı · Doomsday'de dönen eski X-Men kadrosu için", color: "#b46cff" },
  { id: 1, name: "Faz 1", desc: "2008 – 2012 · Yenilmezler bir araya geliyor", color: "#e62429" },
  { id: 2, name: "Faz 2", desc: "2013 – 2015 · Sonsuzluk Taşları ortaya çıkıyor", color: "#ff8a3d" },
  { id: 3, name: "Faz 3", desc: "2016 – 2019 · Sonsuzluk Destanı'nın finali", color: "#f5b82e" },
  { id: 4, name: "Faz 4", desc: "2021 – 2022 · Çoklu evren açılıyor", color: "#2ecc71" },
  { id: 5, name: "Faz 5", desc: "2023 – 2025 · Yeni ekipler, yeni tehditler", color: "#3da5ff" },
  { id: 6, name: "Faz 6", desc: "2025 – 2026 · Doomsday'e giden yol", color: "#ff4d6d" },
];

const ITEMS = [
  // Bonus
  { id: "x-men", phase: "bonus", bonus: true, type: "film", en: "X-Men", year: 2000,
    note: "Profesör X, Magneto, Cyclops, Mystique… Doomsday'de geri dönen kadronun ilk filmi." },
  { id: "x2", phase: "bonus", bonus: true, type: "film", en: "X2: X-Men United", year: 2003,
    note: "Nightcrawler (Alan Cumming) burada tanıtılıyor; o da Doomsday kadrosunda." },
  { id: "x-men-last-stand", phase: "bonus", bonus: true, type: "film", en: "X-Men: The Last Stand", year: 2006,
    note: "Eski X-Men üçlemesinin finali. Beast (Kelsey Grammer) burada." },
  { id: "x-men-dofp", phase: "bonus", bonus: true, key: true, type: "film", en: "X-Men: Days of Future Past", year: 2014,
    note: "Eski ve genç kadroyu buluşturan zaman yolculuğu filmi. Sadece birini izleyeceksen bunu izle." },

  // Faz 1
  { id: "iron-man", phase: 1, key: true, type: "film", en: "Iron Man", tr: "Demir Adam", year: 2008,
    note: "Her şeyin başladığı film. Doomsday'de Doktor Doom'u oynayan Robert Downey Jr. ile tanışma." },
  { id: "incredible-hulk", phase: 1, type: "film", en: "The Incredible Hulk", tr: "Yenilmez Hulk", year: 2008,
    note: "Bruce Banner ve General Ross. Ross'un hikâyesi Brave New World'de geri dönüyor." },
  { id: "iron-man-2", phase: 1, type: "film", en: "Iron Man 2", tr: "Demir Adam 2", year: 2010,
    note: "Nick Fury, Black Widow ve S.H.I.E.L.D. büyüyor." },
  { id: "thor", phase: 1, type: "film", en: "Thor", year: 2011,
    note: "Thor ve Loki'nin hikâyesi başlıyor; ikisi de Doomsday'de." },
  { id: "captain-america-tfa", phase: 1, key: true, type: "film", en: "Captain America: The First Avenger", tr: "Kaptan Amerika: İlk Yenilmez", year: 2011,
    note: "Steve Rogers, Bucky Barnes ve Tesseract'ın kökeni." },
  { id: "avengers", phase: 1, key: true, type: "film", en: "The Avengers", tr: "Yenilmezler", year: 2012,
    note: "Takım ilk kez bir arada; karşılarında Loki var." },

  // Faz 2
  { id: "iron-man-3", phase: 2, type: "film", en: "Iron Man 3", tr: "Demir Adam 3", year: 2013,
    note: "New York savaşı sonrası Tony Stark'ın travması." },
  { id: "thor-dark-world", phase: 2, type: "film", en: "Thor: The Dark World", tr: "Thor: Karanlık Dünya", year: 2013,
    note: "Aether — Sonsuzluk Taşlarından biri ortaya çıkıyor." },
  { id: "winter-soldier", phase: 2, key: true, type: "film", en: "Captain America: The Winter Soldier", tr: "Kaptan Amerika: Kış Askeri", year: 2014,
    note: "Kış Askeri Bucky ve Sam Wilson (Falcon) sahnede. İkisi de Doomsday'in merkezinde." },
  { id: "gotg", phase: 2, type: "film", en: "Guardians of the Galaxy", tr: "Galaksinin Koruyucuları", year: 2014,
    note: "Koruyucularla tanışma ve Thanos'a ilk büyük bakış." },
  { id: "age-of-ultron", phase: 2, key: true, type: "film", en: "Avengers: Age of Ultron", tr: "Yenilmezler: Ultron Çağı", year: 2015,
    note: "Ultron, Vision, Wanda ve Wakanda'ya ilk bakış." },
  { id: "ant-man", phase: 2, type: "film", en: "Ant-Man", tr: "Karınca Adam", year: 2015,
    note: "Scott Lang ve Kuantum Âlemi ile tanışma." },

  // Faz 3
  { id: "civil-war", phase: 3, key: true, type: "film", en: "Captain America: Civil War", tr: "Kaptan Amerika: Kahramanların Savaşı", year: 2016,
    note: "Yenilmezler ikiye bölünüyor; Black Panther ve Örümcek-Adam sahneye çıkıyor." },
  { id: "doctor-strange", phase: 3, type: "film", en: "Doctor Strange", year: 2016,
    note: "Büyü, Zaman Taşı ve çoklu evren fikrinin ilk tohumları." },
  { id: "gotg-2", phase: 3, type: "film", en: "Guardians of the Galaxy Vol. 2", tr: "Galaksinin Koruyucuları 2", year: 2017,
    note: "Koruyucuların aile meselesi." },
  { id: "homecoming", phase: 3, type: "film", en: "Spider-Man: Homecoming", tr: "Örümcek-Adam: Eve Dönüş", year: 2017,
    note: "Tom Holland'ın Örümcek-Adam'ı kendi filmiyle." },
  { id: "ragnarok", phase: 3, type: "film", en: "Thor: Ragnarok", year: 2017,
    note: "Thor, Hulk ve Loki birlikte; Asgard'ın sonu. Infinity War'un açılışına bağlanıyor." },
  { id: "black-panther", phase: 3, key: true, type: "film", en: "Black Panther", year: 2018,
    note: "Wakanda, T'Challa, Shuri ve M'Baku. Wakanda Doomsday'de büyük rol oynuyor." },
  { id: "infinity-war", phase: 3, key: true, type: "film", en: "Avengers: Infinity War", tr: "Yenilmezler: Sonsuzluk Savaşı", year: 2018,
    note: "Thanos ve meşhur parmak şıklatması." },
  { id: "ant-man-wasp", phase: 3, type: "film", en: "Ant-Man and the Wasp", tr: "Karınca Adam ve Eşek Arısı", year: 2018,
    note: "Kuantum Âlemi, Endgame için kritik hale geliyor." },
  { id: "captain-marvel", phase: 3, type: "film", en: "Captain Marvel", year: 2019,
    note: "Carol Danvers'ın kökeni (1990'larda geçiyor)." },
  { id: "endgame", phase: 3, key: true, type: "film", en: "Avengers: Endgame", tr: "Yenilmezler: Son Oyun", year: 2019,
    note: "Sonsuzluk Destanı'nın finali. Steve kalkanı Sam'e devrediyor." },
  { id: "far-from-home", phase: 3, type: "film", en: "Spider-Man: Far From Home", tr: "Örümcek-Adam: Evden Uzakta", year: 2019,
    note: "Endgame sonrası dünya ve Mysterio." },

  // Faz 4
  { id: "wandavision", phase: 4, type: "dizi", en: "WandaVision", year: 2021,
    note: "Wanda'nın yası ve Scarlet Witch'in doğuşu." },
  { id: "falcon-ws", phase: 4, key: true, type: "dizi", en: "The Falcon and the Winter Soldier", tr: "Falcon ve Kış Askeri", year: 2021,
    note: "Sam Wilson yeni Kaptan Amerika oluyor; Bucky geçmişiyle yüzleşiyor." },
  { id: "black-widow", phase: 4, type: "film", en: "Black Widow", year: 2021,
    note: "Natasha'nın geçmişi ve Yelena Belova — Thunderbolts'un lideri." },
  { id: "loki-1", phase: 4, key: true, type: "dizi", en: "Loki (1. Sezon)", year: 2021,
    note: "Zaman Değişim Otoritesi (TVA) ve çoklu evrenin patlaması. Doomsday için çok önemli." },
  { id: "shang-chi", phase: 4, type: "film", en: "Shang-Chi and the Legend of the Ten Rings", tr: "Shang-Chi ve On Halka Efsanesi", year: 2021,
    note: "Shang-Chi ile tanışma; Doomsday kadrosunda." },
  { id: "eternals", phase: 4, type: "film", en: "Eternals", year: 2021,
    note: "Kozmik Celestial'lar ve Dünya'nın gizli tarihi." },
  { id: "hawkeye", phase: 4, type: "dizi", en: "Hawkeye", year: 2021,
    note: "Kate Bishop ve Yelena'nın Natasha yası." },
  { id: "no-way-home", phase: 4, key: true, type: "film", en: "Spider-Man: No Way Home", tr: "Örümcek-Adam: Eve Dönüş Yok", year: 2021,
    note: "Çoklu evren kapıları açılıyor, eski Örümcek-Adamlar geliyor ve herkes Peter'ı unutuyor." },
  { id: "multiverse-of-madness", phase: 4, key: true, type: "film", en: "Doctor Strange in the Multiverse of Madness", tr: "Doktor Strange Çoklu Evren Çılgınlığında", year: 2022,
    note: "Çoklu evren, Illuminati ve Patrick Stewart'ın Profesör X'i." },
  { id: "ms-marvel", phase: 4, type: "dizi", en: "Ms. Marvel", year: 2022,
    note: "Kamala Khan — ve MCU'da 'mutant' kelimesinin ilk duyulduğu an." },
  { id: "love-and-thunder", phase: 4, type: "film", en: "Thor: Love and Thunder", tr: "Thor: Aşk ve Gök Gürültüsü", year: 2022,
    note: "Thor'un Endgame sonrası yolculuğu." },
  { id: "wakanda-forever", phase: 4, key: true, type: "film", en: "Black Panther: Wakanda Forever", tr: "Black Panther: Yaşasın Wakanda", year: 2022,
    note: "T'Challa sonrası Wakanda ve Namor. İkisi de Doomsday'de." },

  // Faz 5
  { id: "quantumania", phase: 5, type: "film", en: "Ant-Man and the Wasp: Quantumania", tr: "Karınca Adam ve Eşek Arısı: Quantumania", year: 2023,
    note: "Kuantum Âlemi ve Kang. (Ana kötü rolünü artık Doktor Doom devraldı.)" },
  { id: "gotg-3", phase: 5, type: "film", en: "Guardians of the Galaxy Vol. 3", tr: "Galaksinin Koruyucuları 3", year: 2023,
    note: "Koruyucuların duygusal vedası." },
  { id: "loki-2", phase: 5, key: true, type: "dizi", en: "Loki (2. Sezon)", year: 2023,
    note: "Loki'nin kaderi ve Zaman Ağacı. Doomsday için kritik." },
  { id: "the-marvels", phase: 5, type: "film", en: "The Marvels", year: 2023,
    note: "Carol, Monica ve Kamala. Sahne sonrası sahnede X-Men'den Beast!" },
  { id: "deadpool-wolverine", phase: 5, key: true, type: "film", en: "Deadpool & Wolverine", year: 2024,
    note: "Fox X-Men evreni MCU ile buluşuyor: TVA, Gambit ve çoklu evren." },
  { id: "brave-new-world", phase: 5, key: true, type: "film", en: "Captain America: Brave New World", tr: "Kaptan Amerika: Cesur Yeni Dünya", year: 2025,
    note: "Sam Wilson artık resmen Kaptan Amerika ve Yenilmezler'i yeniden kurmak istiyor." },
  { id: "thunderbolts", phase: 5, key: true, type: "film", en: "Thunderbolts*", year: 2025,
    note: "Yelena, Bucky, Red Guardian ve ekip. Sentry tanıtılıyor; final sahnesi doğrudan Doomsday'e bağlanıyor." },

  // Faz 6
  { id: "fantastic-four", phase: 6, key: true, type: "film", en: "The Fantastic Four: First Steps", tr: "Fantastik Dörtlü: İlk Adımlar", year: 2025,
    note: "Başka bir evrenden Fantastik Dörtlü. Sahne sonrası sahnede Doktor Doom'a ilk bakış." },
  { id: "brand-new-day", phase: 6, type: "film", en: "Spider-Man: Brand New Day", tr: "Örümcek-Adam: Yepyeni Bir Gün", year: 2026,
    note: "No Way Home sonrası, kimsenin Peter Parker'ı hatırlamadığı dünya." },
  { id: "doomsday", phase: 6, finale: true, type: "film", en: "Avengers: Doomsday", year: 2026,
    note: "Yenilmezler, X-Men, Fantastik Dörtlü, Thunderbolts ve Wakanda… Doktor Doom'a karşı. 18 Aralık 2026'da sinemalarda." },
];

const STORE_KEY = "mcu-doomsday-izlendi";
const PREFS_KEY = "mcu-doomsday-ayarlar";
const RELEASE = new Date("2026-12-18T00:00:00+03:00");

const CHECK_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* gizli sekme vb. */ }
}

const watched = new Set(load(STORE_KEY, []));
const prefs = Object.assign(
  { mode: "full", series: true, bonus: false, hideWatched: false },
  load(PREFS_KEY, {})
);

const listEl = document.getElementById("list");

function isVisible(item) {
  if (item.bonus && !prefs.bonus) return false;
  if (item.type === "dizi" && !prefs.series) return false;
  if (prefs.mode === "short" && !item.key && !item.finale) return false;
  return true;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function render() {
  const visible = ITEMS.filter(isVisible);
  let n = 0;
  let html = "";

  for (const phase of PHASES) {
    const items = visible.filter(i => i.phase === phase.id);
    if (!items.length) continue;

    let cards = "";
    for (const item of items) {
      n++;
      const done = watched.has(item.id);
      if (prefs.hideWatched && done && !item.finale) continue;

      const badges = [`<span class="badge">${item.year}</span>`];
      badges.push(item.type === "dizi" ? '<span class="badge series">DİZİ</span>' : '<span class="badge">FİLM</span>');
      if (item.key && !item.finale) badges.push('<span class="badge key">ÖNEMLİ</span>');
      if (item.bonus) badges.push('<span class="badge bonus">BONUS</span>');

      const label = `${item.en} — ${done ? "izlendi" : "izlenmedi"}`;
      cards += `
        <div class="item${done ? " watched" : ""}${item.finale ? " finale" : ""}" data-id="${item.id}"
             role="checkbox" aria-checked="${done}" aria-label="${escapeHtml(label)}" tabindex="0">
          <div class="num">${item.finale ? "★" : n}</div>
          <div>
            <div class="title-row">
              <h4 class="title">${escapeHtml(item.en)}</h4>
              ${item.tr ? `<span class="tr-title">${escapeHtml(item.tr)}</span>` : ""}
            </div>
            <p class="note">${escapeHtml(item.note)}</p>
            <div class="meta">${badges.join("")}</div>
          </div>
          <div class="check">${CHECK_SVG}</div>
        </div>`;
    }

    if (!cards) continue;
    html += `
      <section class="phase" style="--phase-color:${phase.color}">
        <div class="phase-head"><h3>${phase.name}</h3><p>${phase.desc}</p></div>
        <div class="items">${cards}</div>
      </section>`;
  }

  listEl.innerHTML = html || '<div class="empty">Tebrikler, bu listedeki her şeyi izledin! 🎉</div>';
  updateProgress(visible);
}

function updateProgress(visible) {
  const countable = visible.filter(i => !i.finale);
  const done = countable.filter(i => watched.has(i.id)).length;
  const pct = countable.length ? Math.round((done / countable.length) * 100) : 0;
  document.getElementById("progress-count").textContent = `${done} / ${countable.length}`;
  document.getElementById("progress-pct").textContent = `%${pct}`;
  document.getElementById("progress-fill").style.width = pct + "%";
}

function toggleItem(id) {
  if (watched.has(id)) watched.delete(id);
  else watched.add(id);
  save(STORE_KEY, [...watched]);
  render();
}

listEl.addEventListener("click", e => {
  const card = e.target.closest(".item");
  if (card) toggleItem(card.dataset.id);
});

listEl.addEventListener("keydown", e => {
  if (e.key !== " " && e.key !== "Enter") return;
  const card = e.target.closest(".item");
  if (!card) return;
  e.preventDefault();
  const id = card.dataset.id;
  toggleItem(id);
  const again = listEl.querySelector(`[data-id="${id}"]`);
  if (again) again.focus();
});

// Kontroller
const segButtons = document.querySelectorAll(".seg button");
const seriesEl = document.getElementById("show-series");
const bonusEl = document.getElementById("show-bonus");
const hideEl = document.getElementById("hide-watched");

function syncControls() {
  segButtons.forEach(b => b.classList.toggle("active", b.dataset.mode === prefs.mode));
  seriesEl.checked = prefs.series;
  bonusEl.checked = prefs.bonus;
  hideEl.checked = prefs.hideWatched;
}

function setPref(key, value) {
  prefs[key] = value;
  save(PREFS_KEY, prefs);
  syncControls();
  render();
}

segButtons.forEach(b => b.addEventListener("click", () => setPref("mode", b.dataset.mode)));
seriesEl.addEventListener("change", () => setPref("series", seriesEl.checked));
bonusEl.addEventListener("change", () => setPref("bonus", bonusEl.checked));
hideEl.addEventListener("change", () => setPref("hideWatched", hideEl.checked));

document.getElementById("reset").addEventListener("click", () => {
  if (!confirm("İzlediğin tüm işaretler silinsin mi?")) return;
  watched.clear();
  save(STORE_KEY, []);
  render();
});

// Geri sayım
function tick() {
  const diff = RELEASE - Date.now();
  const box = document.getElementById("countdown");
  if (diff <= 0) {
    box.classList.add("released");
    box.querySelector(".cd-label").textContent = "Avengers: Doomsday şimdi sinemalarda!";
    return false;
  }
  const s = Math.floor(diff / 1000);
  const pad = v => String(v).padStart(2, "0");
  document.getElementById("cd-d").textContent = Math.floor(s / 86400);
  document.getElementById("cd-h").textContent = pad(Math.floor((s % 86400) / 3600));
  document.getElementById("cd-m").textContent = pad(Math.floor((s % 3600) / 60));
  document.getElementById("cd-s").textContent = pad(s % 60);
  return true;
}

if (tick()) {
  const timer = setInterval(() => { if (!tick()) clearInterval(timer); }, 1000);
}

syncControls();
render();
