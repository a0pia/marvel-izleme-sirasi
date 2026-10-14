// Tüm MCU — hikâyedeki zaman sırası
// type: "film" | "dizi" | "animasyon" | "ozel"   fam: seri ailesi   rel: vizyon yılı   when: hikâye zamanı (yaklaşık)

const FAMILIES = {
  avengers:   { name: "Yenilmezler",                 color: "#facc15" },
  ironman:    { name: "Iron Man",                    color: "#ef4444" },
  cap:        { name: "Kaptan Amerika",              color: "#3b82f6" },
  thor:       { name: "Thor",                        color: "#7dd3fc" },
  hulk:       { name: "Hulk & She-Hulk",             color: "#22c55e" },
  widow:      { name: "Black Widow & Thunderbolts",  color: "#94a3b8" },
  hawkeye:    { name: "Hawkeye & Echo",              color: "#fb923c" },
  antman:     { name: "Karınca Adam",                color: "#a3e635" },
  gotg:       { name: "Galaksinin Koruyucuları",     color: "#2dd4bf" },
  spidey:     { name: "Örümcek-Adam",                color: "#f43f5e" },
  magic:      { name: "Büyü: Strange, Wanda, Agatha", color: "#e879f9" },
  wakanda:    { name: "Wakanda",                     color: "#c084fc" },
  cosmic:     { name: "Kozmik: Marvel'lar & Skrull'lar", color: "#ff7ab6" },
  heroes:     { name: "Yeni Kahramanlar",            color: "#e5e7eb" },
  multiverse: { name: "Çoklu Evren & TVA",           color: "#818cf8" },
};

const ERAS = [
  { id: "tarih",   name: "Tarih boyunca",               desc: "Wakanda'nın geçmişi" },
  { id: "1940",    name: "1940'lar",                    desc: "İkinci Dünya Savaşı" },
  { id: "1990",    name: "1990'lar",                    desc: "Kree–Skrull savaşı Dünya'ya ulaşıyor" },
  { id: "2010",    name: "2010 – 2012",                 desc: "Yenilmezler doğuyor" },
  { id: "2012",    name: "2012 – 2015",                 desc: "Sonsuzluk Taşları ortaya çıkıyor" },
  { id: "2016",    name: "2016 – 2017",                 desc: "Yenilmezler bölünüyor" },
  { id: "2018",    name: "2018",                        desc: "Thanos geliyor" },
  { id: "blip",    name: "2018 – 2023",                 desc: "Blip: kaybolan beş yıl" },
  { id: "tva",     name: "Zamanın dışında",             desc: "Zaman Değişim Otoritesi (TVA)" },
  { id: "2023",    name: "2023 – 2024",                 desc: "Blip sonrası dünya" },
  { id: "2025",    name: "2025",                        desc: "Yeni kahramanlar ortaya çıkıyor" },
  { id: "2026",    name: "2026 ve sonrası",             desc: "Yeni Yenilmezler'e doğru" },
  { id: "multi",   name: "Diğer evrenler",              desc: "Ana zaman çizgisinin dışındaki dünyalar" },
  { id: "next",    name: "Sırada",                      desc: "Çoklu evrenler çarpışıyor" },
];

const CHRONO = [
  { id: "eyes-of-wakanda", era: "tarih", fam: "wakanda", type: "animasyon", en: "Eyes of Wakanda", rel: 2025, when: "Antik çağ – 1800'ler" },

  { id: "captain-america-tfa", era: "1940", fam: "cap", type: "film", en: "Captain America: The First Avenger", tr: "Kaptan Amerika: İlk Yenilmez", rel: 2011, when: "1942 – 1945" },

  { id: "captain-marvel", era: "1990", fam: "cosmic", type: "film", en: "Captain Marvel", rel: 2019, when: "1995" },

  { id: "iron-man", era: "2010", fam: "ironman", type: "film", en: "Iron Man", tr: "Demir Adam", rel: 2008, when: "2010" },
  { id: "iron-man-2", era: "2010", fam: "ironman", type: "film", en: "Iron Man 2", tr: "Demir Adam 2", rel: 2010, when: "2011" },
  { id: "incredible-hulk", era: "2010", fam: "hulk", type: "film", en: "The Incredible Hulk", tr: "Yenilmez Hulk", rel: 2008, when: "2011" },
  { id: "thor", era: "2010", fam: "thor", type: "film", en: "Thor", rel: 2011, when: "2011" },
  { id: "avengers", era: "2010", fam: "avengers", type: "film", en: "The Avengers", tr: "Yenilmezler", rel: 2012, when: "2012" },

  { id: "iron-man-3", era: "2012", fam: "ironman", type: "film", en: "Iron Man 3", tr: "Demir Adam 3", rel: 2013, when: "2012 (Noel)" },
  { id: "thor-dark-world", era: "2012", fam: "thor", type: "film", en: "Thor: The Dark World", tr: "Thor: Karanlık Dünya", rel: 2013, when: "2013" },
  { id: "winter-soldier", era: "2012", fam: "cap", type: "film", en: "Captain America: The Winter Soldier", tr: "Kaptan Amerika: Kış Askeri", rel: 2014, when: "2014" },
  { id: "gotg", era: "2012", fam: "gotg", type: "film", en: "Guardians of the Galaxy", tr: "Galaksinin Koruyucuları", rel: 2014, when: "2014" },
  { id: "gotg-2", era: "2012", fam: "gotg", type: "film", en: "Guardians of the Galaxy Vol. 2", tr: "Galaksinin Koruyucuları 2", rel: 2017, when: "2014" },
  { id: "i-am-groot", era: "2012", fam: "gotg", type: "animasyon", en: "I Am Groot", rel: 2022, when: "2014" },
  { id: "age-of-ultron", era: "2012", fam: "avengers", type: "film", en: "Avengers: Age of Ultron", tr: "Yenilmezler: Ultron Çağı", rel: 2015, when: "2015" },
  { id: "ant-man", era: "2012", fam: "antman", type: "film", en: "Ant-Man", tr: "Karınca Adam", rel: 2015, when: "2015" },

  { id: "civil-war", era: "2016", fam: "cap", type: "film", en: "Captain America: Civil War", tr: "Kaptan Amerika: Kahramanların Savaşı", rel: 2016, when: "2016" },
  { id: "black-widow", era: "2016", fam: "widow", type: "film", en: "Black Widow", rel: 2021, when: "2016" },
  { id: "black-panther", era: "2016", fam: "wakanda", type: "film", en: "Black Panther", rel: 2018, when: "2016" },
  { id: "homecoming", era: "2016", fam: "spidey", type: "film", en: "Spider-Man: Homecoming", tr: "Örümcek-Adam: Eve Dönüş", rel: 2017, when: "2016" },
  { id: "doctor-strange", era: "2016", fam: "magic", type: "film", en: "Doctor Strange", rel: 2016, when: "2016 – 2017" },
  { id: "ragnarok", era: "2016", fam: "thor", type: "film", en: "Thor: Ragnarok", rel: 2017, when: "2017" },

  { id: "ant-man-wasp", era: "2018", fam: "antman", type: "film", en: "Ant-Man and the Wasp", tr: "Karınca Adam ve Eşek Arısı", rel: 2018, when: "2018" },
  { id: "infinity-war", era: "2018", fam: "avengers", type: "film", en: "Avengers: Infinity War", tr: "Yenilmezler: Sonsuzluk Savaşı", rel: 2018, when: "2018" },

  { id: "endgame", era: "blip", fam: "avengers", type: "film", en: "Avengers: Endgame", tr: "Yenilmezler: Son Oyun", rel: 2019, when: "2018 / 2023" },

  { id: "loki-1", era: "tva", fam: "multiverse", type: "dizi", en: "Loki (1. Sezon)", rel: 2021, when: "TVA" },
  { id: "loki-2", era: "tva", fam: "multiverse", type: "dizi", en: "Loki (2. Sezon)", rel: 2023, when: "TVA" },

  { id: "wandavision", era: "2023", fam: "magic", type: "dizi", en: "WandaVision", rel: 2021, when: "2023" },
  { id: "falcon-ws", era: "2023", fam: "cap", type: "dizi", en: "The Falcon and the Winter Soldier", tr: "Falcon ve Kış Askeri", rel: 2021, when: "2024" },
  { id: "shang-chi", era: "2023", fam: "heroes", type: "film", en: "Shang-Chi and the Legend of the Ten Rings", tr: "Shang-Chi ve On Halka Efsanesi", rel: 2021, when: "2024" },
  { id: "eternals", era: "2023", fam: "cosmic", type: "film", en: "Eternals", rel: 2021, when: "2024" },
  { id: "far-from-home", era: "2023", fam: "spidey", type: "film", en: "Spider-Man: Far From Home", tr: "Örümcek-Adam: Evden Uzakta", rel: 2019, when: "2024" },
  { id: "no-way-home", era: "2023", fam: "spidey", type: "film", en: "Spider-Man: No Way Home", tr: "Örümcek-Adam: Eve Dönüş Yok", rel: 2021, when: "2024" },
  { id: "multiverse-of-madness", era: "2023", fam: "magic", type: "film", en: "Doctor Strange in the Multiverse of Madness", tr: "Doktor Strange Çoklu Evren Çılgınlığında", rel: 2022, when: "2024" },
  { id: "hawkeye", era: "2023", fam: "hawkeye", type: "dizi", en: "Hawkeye", rel: 2021, when: "2024 (Noel)" },

  { id: "moon-knight", era: "2025", fam: "heroes", type: "dizi", en: "Moon Knight", tr: "Ay Şövalyesi", rel: 2022, when: "2025" },
  { id: "echo", era: "2025", fam: "hawkeye", type: "dizi", en: "Echo", rel: 2024, when: "2025" },
  { id: "wakanda-forever", era: "2025", fam: "wakanda", type: "film", en: "Black Panther: Wakanda Forever", tr: "Black Panther: Yaşasın Wakanda", rel: 2022, when: "2025" },
  { id: "she-hulk", era: "2025", fam: "hulk", type: "dizi", en: "She-Hulk: Attorney at Law", rel: 2022, when: "2025" },
  { id: "ms-marvel", era: "2025", fam: "cosmic", type: "dizi", en: "Ms. Marvel", rel: 2022, when: "2025" },
  { id: "love-and-thunder", era: "2025", fam: "thor", type: "film", en: "Thor: Love and Thunder", tr: "Thor: Aşk ve Gök Gürültüsü", rel: 2022, when: "2025" },
  { id: "werewolf-by-night", era: "2025", fam: "magic", type: "ozel", en: "Werewolf by Night", rel: 2022, when: "2025" },
  { id: "holiday-special", era: "2025", fam: "gotg", type: "ozel", en: "The Guardians of the Galaxy Holiday Special", tr: "Galaksinin Koruyucuları Tatil Özel", rel: 2022, when: "2025 (Noel)" },
  { id: "quantumania", era: "2025", fam: "antman", type: "film", en: "Ant-Man and the Wasp: Quantumania", tr: "Karınca Adam ve Eşek Arısı: Quantumania", rel: 2023, when: "2025" },

  { id: "gotg-3", era: "2026", fam: "gotg", type: "film", en: "Guardians of the Galaxy Vol. 3", tr: "Galaksinin Koruyucuları 3", rel: 2023, when: "2026" },
  { id: "secret-invasion", era: "2026", fam: "cosmic", type: "dizi", en: "Secret Invasion", rel: 2023, when: "~2026" },
  { id: "the-marvels", era: "2026", fam: "cosmic", type: "film", en: "The Marvels", rel: 2023, when: "~2026" },
  { id: "agatha", era: "2026", fam: "magic", type: "dizi", en: "Agatha All Along", rel: 2024, when: "~2026" },
  { id: "ironheart", era: "2026", fam: "ironman", type: "dizi", en: "Ironheart", rel: 2025, when: "~2026" },
  { id: "daredevil-born-again", era: "2026", fam: "heroes", type: "dizi", en: "Daredevil: Born Again", rel: 2025, when: "~2026 – 2027" },
  { id: "brave-new-world", era: "2026", fam: "cap", type: "film", en: "Captain America: Brave New World", tr: "Kaptan Amerika: Cesur Yeni Dünya", rel: 2025, when: "~2027" },
  { id: "thunderbolts", era: "2026", fam: "widow", type: "film", en: "Thunderbolts*", rel: 2025, when: "~2027" },
  { id: "wonder-man", era: "2026", fam: "heroes", type: "dizi", en: "Wonder Man", rel: 2026, when: "~2027" },
  { id: "brand-new-day", era: "2026", fam: "spidey", type: "film", en: "Spider-Man: Brand New Day", tr: "Örümcek-Adam: Yepyeni Bir Gün", rel: 2026, when: "~2027 ve sonrası" },

  { id: "what-if", era: "multi", fam: "multiverse", type: "animasyon", en: "What If...?", rel: 2021, when: "Alternatif evrenler" },
  { id: "deadpool-wolverine", era: "multi", fam: "multiverse", type: "film", en: "Deadpool & Wolverine", rel: 2024, when: "Dünya-10005 & TVA" },
  { id: "yfnsm", era: "multi", fam: "spidey", type: "animasyon", en: "Your Friendly Neighborhood Spider-Man", rel: 2025, when: "Alternatif evren" },
  { id: "fantastic-four", era: "multi", fam: "multiverse", type: "film", en: "The Fantastic Four: First Steps", tr: "Fantastik Dörtlü: İlk Adımlar", rel: 2025, when: "Dünya-828" },
  { id: "marvel-zombies", era: "multi", fam: "multiverse", type: "animasyon", en: "Marvel Zombies", rel: 2025, when: "Zombi evreni" },

  { id: "doomsday", era: "next", fam: "avengers", type: "film", en: "Avengers: Doomsday", rel: 2026, when: "18 Aralık 2026", upcoming: true },
];

const TYPE_LABEL = { film: "Film", dizi: "Dizi", animasyon: "Animasyon", ozel: "Özel bölüm" };
const FAMILY_ORDER = Object.keys(FAMILIES);

// Ana sayfa ile ortak izleme kaydı
const STORE_KEY = "mcu-doomsday-izlendi";
const PREFS_KEY = "mcu-kronoloji-ayarlar";

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

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

const watched = new Set(load(STORE_KEY, []));
const prefs = Object.assign({ view: "table", type: "all", fam: "all" }, load(PREFS_KEY, {}));

CHRONO.forEach((item, i) => { item.n = i + 1; });

const viewEl = document.getElementById("chrono-view");

function matches(item) {
  if (prefs.fam !== "all" && item.fam !== prefs.fam) return false;
  if (prefs.type === "all") return true;
  if (prefs.type === "other") return item.type === "animasyon" || item.type === "ozel";
  return item.type === prefs.type;
}

function poster(item, cls) {
  return `<img class="${cls}" src="posters/${item.id}.jpg" alt="" loading="lazy">`;
}

function checkAttrs(item) {
  const done = watched.has(item.id);
  return `data-id="${item.id}" role="checkbox" aria-checked="${done}" tabindex="0"
          aria-label="${escapeHtml(item.en)} — ${done ? "izlendi" : "izlenmedi"}"`;
}

// ---------- Tablo görünümü ----------
function renderTable(items) {
  let rows = "";
  for (const era of ERAS) {
    const list = items.filter(i => i.era === era.id);
    if (!list.length) continue;
    rows += `
      <tr class="era-row">
        <td class="c-trunk"><span class="era-node"></span></td>
        <td colspan="6"><span class="era-name">${era.name}</span><span class="era-desc">${era.desc}</span></td>
      </tr>`;
    for (const item of list) {
      const fam = FAMILIES[item.fam];
      const done = watched.has(item.id);
      rows += `
        <tr class="row${done ? " watched" : ""}${item.upcoming ? " upcoming" : ""}" style="--fc:${fam.color}" ${checkAttrs(item)}>
          <td class="c-trunk"><span class="node">${item.n}</span></td>
          <td class="c-title">
            <div class="t-wrap">
              ${poster(item, "thumb")}
              <div>
                <div class="t-en">${escapeHtml(item.en)}</div>
                ${item.tr ? `<div class="t-tr">${escapeHtml(item.tr)}</div>` : ""}
                <div class="t-mobile-meta">
                  <span class="chip type-${item.type}">${TYPE_LABEL[item.type]}</span>
                  <span class="chip when">${escapeHtml(item.when)}</span>
                  <span class="chip fam"><i></i>${fam.name}</span>
                </div>
              </div>
            </div>
          </td>
          <td class="c-type"><span class="chip type-${item.type}">${TYPE_LABEL[item.type]}</span></td>
          <td class="c-when">${escapeHtml(item.when)}</td>
          <td class="c-fam"><span class="chip fam"><i></i>${fam.name}</span></td>
          <td class="c-rel">${item.rel}</td>
          <td class="c-check"><span class="mini-check">${CHECK_SVG}</span></td>
        </tr>`;
    }
  }

  return `
    <div class="table-wrap">
      <table class="chrono-table">
        <thead>
          <tr>
            <th class="c-trunk">#</th>
            <th>Yapım</th>
            <th class="c-type">Tür</th>
            <th class="c-when">Hikâye zamanı</th>
            <th class="c-fam">Seri</th>
            <th class="c-rel">Vizyon</th>
            <th class="c-check"><span class="sr-only">İzlendi</span></th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>`;
}

// ---------- Soy ağacı görünümü ----------
function renderTree(items) {
  let branches = "";
  for (const key of FAMILY_ORDER) {
    const list = items.filter(i => i.fam === key);
    if (!list.length) continue;
    const fam = FAMILIES[key];
    const seen = list.filter(i => watched.has(i.id)).length;

    let twigs = "";
    for (const item of list) {
      const done = watched.has(item.id);
      twigs += `
        <div class="twig${done ? " watched" : ""}${item.upcoming ? " upcoming" : ""}" ${checkAttrs(item)}>
          <div class="twig-poster">
            ${poster(item, "")}
            <span class="twig-n">${item.n}</span>
            <span class="twig-check">${CHECK_SVG}</span>
          </div>
          <div class="twig-title">${escapeHtml(item.en)}</div>
          <div class="twig-when">${escapeHtml(item.when)}</div>
        </div>`;
    }

    branches += `
      <div class="branch" style="--fc:${fam.color}">
        <div class="branch-head">
          <span class="branch-dot"></span>
          <div>
            <div class="branch-name">${fam.name}</div>
            <div class="branch-count">${list.length} yapım · ${seen} izlendi</div>
          </div>
        </div>
        <div class="twigs">${twigs}</div>
      </div>`;
  }

  return `
    <div class="tree">
      <div class="tree-root">
        <span class="root-logo">M</span>
        <div>
          <div class="root-name">Marvel Sinematik Evreni</div>
          <div class="root-sub">${items.length} yapım · seri ailelerine göre</div>
        </div>
      </div>
      <div class="branches">${branches}</div>
    </div>`;
}

function render() {
  const items = CHRONO.filter(matches);
  viewEl.innerHTML = items.length
    ? (prefs.view === "tree" ? renderTree(items) : renderTable(items))
    : '<div class="empty">Bu filtreye uyan yapım yok.</div>';
  updateProgress(items);
}

function updateProgress(items) {
  const done = items.filter(i => watched.has(i.id)).length;
  const pct = items.length ? Math.round((done / items.length) * 100) : 0;
  document.getElementById("progress-count").textContent = `${done} / ${items.length}`;
  document.getElementById("progress-pct").textContent = `%${pct}`;
  document.getElementById("progress-fill").style.width = pct + "%";
}

function toggleItem(id) {
  if (watched.has(id)) watched.delete(id);
  else watched.add(id);
  save(STORE_KEY, [...watched]);
  render();
}

viewEl.addEventListener("click", e => {
  const el = e.target.closest("[data-id]");
  if (el) toggleItem(el.dataset.id);
});

viewEl.addEventListener("keydown", e => {
  if (e.key !== " " && e.key !== "Enter") return;
  const el = e.target.closest("[data-id]");
  if (!el) return;
  e.preventDefault();
  const id = el.dataset.id;
  toggleItem(id);
  const again = viewEl.querySelector(`[data-id="${id}"]`);
  if (again) again.focus();
});

viewEl.addEventListener("error", e => {
  if (e.target.tagName === "IMG") e.target.style.visibility = "hidden";
}, true);

// ---------- Kontroller ----------
function renderLegend() {
  const counts = {};
  CHRONO.forEach(i => { counts[i.fam] = (counts[i.fam] || 0) + 1; });
  let html = `<button type="button" data-fam="all" class="${prefs.fam === "all" ? "active" : ""}">Tüm seriler</button>`;
  for (const key of FAMILY_ORDER) {
    const f = FAMILIES[key];
    html += `<button type="button" data-fam="${key}" style="--fc:${f.color}" class="${prefs.fam === key ? "active" : ""}"><i></i>${f.name}<span>${counts[key]}</span></button>`;
  }
  document.getElementById("legend").innerHTML = html;
}

function syncControls() {
  document.querySelectorAll("[data-view]").forEach(b => b.classList.toggle("active", b.dataset.view === prefs.view));
  document.querySelectorAll("[data-type]").forEach(b => b.classList.toggle("active", b.dataset.type === prefs.type));
  renderLegend();
}

function setPref(key, value) {
  prefs[key] = value;
  save(PREFS_KEY, prefs);
  syncControls();
  render();
}

document.querySelectorAll("[data-view]").forEach(b => b.addEventListener("click", () => setPref("view", b.dataset.view)));
document.querySelectorAll("[data-type]").forEach(b => b.addEventListener("click", () => setPref("type", b.dataset.type)));
document.getElementById("legend").addEventListener("click", e => {
  const b = e.target.closest("[data-fam]");
  if (b) setPref("fam", prefs.fam === b.dataset.fam ? "all" : b.dataset.fam);
});

// İstatistikler
const stat = t => CHRONO.filter(i => i.type === t).length;
document.getElementById("stat-total").textContent = CHRONO.length;
document.getElementById("stat-film").textContent = stat("film");
document.getElementById("stat-dizi").textContent = stat("dizi");
document.getElementById("stat-other").textContent = stat("animasyon") + stat("ozel");

// Mobil: filtre paneli
const toolbarEl = document.getElementById("toolbar");
const filtersBtn = document.getElementById("filters-btn");
filtersBtn.addEventListener("click", () => {
  const open = toolbarEl.classList.toggle("open");
  filtersBtn.setAttribute("aria-expanded", open);
});

// Başa dön
const toTop = document.getElementById("to-top");
window.addEventListener("scroll", () => {
  toTop.classList.toggle("show", window.scrollY > 900);
}, { passive: true });
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

syncControls();
render();
