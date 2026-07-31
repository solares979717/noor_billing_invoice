/* =========================================================
   NOOR BILLING PRO — core state, storage, helpers, icons
   ========================================================= */
const ICONS = {
  dashboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/></svg>',
  invoice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10a1 1 0 0 1 1 1v17l-3-2-2 2-2-2-2 2-2-2-2 2V4a1 1 0 0 1 1-1Z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
  history:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 3"/></svg>',
  customer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z"/><path d="M10 21a2 2 0 0 0 4 0"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/></svg>',
  logout:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  edit:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  trash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>',
  copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  pdf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/></svg>',
  print:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v8H6z"/></svg>',
  whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.4 0-.5C10.1 9 9.5 7.6 9.3 7c-.2-.5-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.6.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4Z"/><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.2 8.2 0 1 1 20.2 12 8.2 8.2 0 0 1 12 20.2Z"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v13"/><path d="m7 11 5 5 5-5"/><path d="M5 21h14"/></svg>',
  moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17h14M5 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm14 0a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM3 17V11l2-5h14l2 5v6"/></svg>',
  gift:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M19 12v9H5v-9"/><path d="M12 8c-1.5 0-3-1-3-2.5S10 3 12 5c0-2 1.5-3.5 3-2.5S13.5 8 12 8Z"/></svg>',
  clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
  wallet:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16v-6"/><path d="M17 12h4v3h-4a1.5 1.5 0 0 1 0-3Z"/><path d="M3 7V6a2 2 0 0 1 2-2h11"/></svg>',
  receipt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3h16v18l-2.5-1.5L15 21l-2.5-1.5L10 21l-2.5-1.5L5 21l-1-18Z"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h16"/></svg>',
  close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  back:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>',
};

const DEFAULT_SETTINGS = {
  companyName: "Noor Mechanical Engineering Services Est.",
  companyNameArabic: "مؤسسة نور للخدمات الميكانيكية الهندسية",
  tagline: "Dubai's Trusted Automotive Repair Specialists",
  address: "Ras Al Khor Industrial Area 1, Near 5 Street & 16A Street, Dubai, United Arab Emirates",
  addressArabic: "منطقة رأس الخور الصناعية 1، بالقرب من شارع 5 وشارع 16أ، دبي، الإمارات العربية المتحدة",
  phone: "+971 50 630 6014",
  whatsapp: "+971 55 544 9111",
  email: "Amjadkhan959515@gmail.com",
  vatNumber: "",
  vatPercent: 5,
  currency: "AED",
  invoicePrefix: "INV-",
  invoiceSeq: 0,
  logoDataUrl: "data:image/png;base64," + LOGO_B64,
  passcode: "noor2026"
};

/* Fixed bilingual invoice vocabulary — matches the wording already used
   on the company's existing printed invoice books, for consistency. */
const AR = {
  taxInvoice: 'فاتورة ضريبية',
  invoiceNo: 'رقم الفاتورة',
  date: 'التاريخ',
  customer: 'السيد / السادة',
  phone: 'الهاتف',
  vehicle: 'المركبة',
  plate: 'رقم اللوحة',
  mileage: 'الممشى',
  description: 'التفاصيل',
  qty: 'الكمية',
  unitPrice: 'السعر',
  amount: 'المبلغ',
  subtotal: 'المجموع',
  discount: 'الخصم',
  vat: 'الضريبة',
  grandTotal: 'المبلغ الإجمالي',
  paymentMethod: 'طريقة الدفع',
  paymentStatus: 'حالة الدفع',
  notes: 'ملاحظات',
  thankYou: 'شكراً لتعاملكم معنا',
  signature: 'التوقيع',
  trn: 'الرقم الضريبي',
};

let DB = { settings: JSON.parse(JSON.stringify(DEFAULT_SETTINGS)), invoices: [] };
let session = { loggedIn: false };
let ui = {
  view: 'login',
  theme: 'light',
  sidebarOpen: false,
  historySearch: '', historyFilter: 'all',
  customerQuery: '', customerResults: null,
  editId: null, viewId: null,
  currentItems: [],
  loginError: '',
  toast: null,
};

/* ---------------- Supabase client ---------------- */
let sb = null;
function initSupabase(){
  if(!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY || window.SUPABASE_URL.includes('YOUR_SUPABASE')){
    document.getElementById('app').innerHTML = `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a1730;color:#fff;font-family:Inter,sans-serif;padding:30px;text-align:center;">
      <div style="max-width:480px;">
        <h2 style="font-family:'Space Grotesk';">Supabase not configured</h2>
        <p style="color:#93a3bd;font-size:14px;">Open <b>config.js</b> and paste your Supabase Project URL and anon public key, then reload this page.</p>
      </div></div>`;
    throw new Error('Supabase not configured');
  }
  sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
}

/* map DB (snake_case) <-> app state (camelCase) */
function settingsFromRow(row){
  return {
    companyName: row.company_name, companyNameArabic: row.company_name_ar || DEFAULT_SETTINGS.companyNameArabic,
    tagline: row.tagline, address: row.address, addressArabic: row.address_ar || DEFAULT_SETTINGS.addressArabic,
    phone: row.phone, whatsapp: row.whatsapp, email: row.email, vatNumber: row.vat_number,
    vatPercent: Number(row.vat_percent), currency: row.currency, invoicePrefix: row.invoice_prefix,
    invoiceSeq: row.invoice_seq, logoDataUrl: row.logo_url || DEFAULT_SETTINGS.logoDataUrl,
  };
}
function settingsToRow(s){
  return {
    id: 1, company_name: s.companyName, company_name_ar: s.companyNameArabic, tagline: s.tagline,
    address: s.address, address_ar: s.addressArabic,
    phone: s.phone, whatsapp: s.whatsapp, email: s.email, vat_number: s.vatNumber,
    vat_percent: s.vatPercent, currency: s.currency, invoice_prefix: s.invoicePrefix,
    invoice_seq: s.invoiceSeq, logo_url: s.logoDataUrl,
  };
}
function invoiceFromRow(row){
  return {
    id: row.id, invoiceNumber: row.invoice_number, customerName: row.customer_name,
    phone: row.phone, email: row.email, vehicleBrand: row.vehicle_brand, vehicleModel: row.vehicle_model,
    plateNumber: row.plate_number, mileage: row.mileage, items: row.items || [],
    discountPercent: Number(row.discount_percent), vatApplied: row.vat_applied,
    totals: row.totals, paymentStatus: row.payment_status, paymentMethod: row.payment_method,
    notes: row.notes, date: row.invoice_date, createdAt: new Date(row.created_at).getTime(),
  };
}
function invoiceToRow(inv){
  return {
    invoice_number: inv.invoiceNumber, customer_name: inv.customerName, phone: inv.phone, email: inv.email,
    vehicle_brand: inv.vehicleBrand, vehicle_model: inv.vehicleModel, plate_number: inv.plateNumber,
    mileage: inv.mileage, items: inv.items, discount_percent: inv.discountPercent, vat_applied: inv.vatApplied,
    totals: inv.totals, payment_status: inv.paymentStatus, payment_method: inv.paymentMethod,
    notes: inv.notes, invoice_date: inv.date,
  };
}

/* ---------------- storage (Supabase) ---------------- */
async function loadDB(){
  const { data: settingsRow, error: sErr } = await sb.from('settings').select('*').eq('id',1).maybeSingle();
  if(settingsRow){ DB.settings = Object.assign({}, DEFAULT_SETTINGS, settingsFromRow(settingsRow)); }
  else {
    await sb.from('settings').insert(settingsToRow(DB.settings));
  }
  const { data: invoiceRows, error: iErr } = await sb.from('invoices').select('*').order('created_at',{ascending:false});
  if(invoiceRows) DB.invoices = invoiceRows.map(invoiceFromRow);
  if(sErr || iErr) showToast('Could not fully load data from Supabase — check console','error');
}
async function persistSettings(){
  const { error } = await sb.from('settings').update(settingsToRow(DB.settings)).eq('id',1);
  if(error) showToast('Could not save settings: '+error.message,'error');
}
async function insertInvoiceRow(inv){
  const { data, error } = await sb.from('invoices').insert(invoiceToRow(inv)).select().single();
  if(error){ showToast('Could not save invoice: '+error.message,'error'); return null; }
  return invoiceFromRow(data);
}
async function updateInvoiceRow(id, inv){
  const { data, error } = await sb.from('invoices').update(invoiceToRow(inv)).eq('id', id).select().single();
  if(error){ showToast('Could not update invoice: '+error.message,'error'); return null; }
  return invoiceFromRow(data);
}
async function deleteInvoiceRow(id){
  const { error } = await sb.from('invoices').delete().eq('id', id);
  if(error){ showToast('Could not delete invoice: '+error.message,'error'); return false; }
  return true;
}

/* ---------------- helpers ---------------- */
function uid(){ return 'id_'+Date.now().toString(36)+Math.random().toString(36).slice(2,8); }
function todayISO(){ return new Date().toISOString().slice(0,10); }
function fmtDate(iso){
  if(!iso) return '—';
  const d = new Date(iso+'T00:00:00');
  return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'});
}
function fmtMoney(n){
  n = Number(n)||0;
  return DB.settings.currency + ' ' + n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
}
function esc(s){ return (s==null?'':String(s)).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function normalizePhone(phone){
  let digits = (phone||'').replace(/\D/g,'');
  if(digits.startsWith('00')) digits = digits.slice(2);
  if(digits.startsWith('971')) return digits;
  if(digits.startsWith('0')) return '971'+digits.slice(1);
  if(digits.length===9) return '971'+digits;
  return digits;
}
function computeTotals(items, discountPct, vatApplied){
  const subtotal = items.reduce((s,it)=> s + (Number(it.qty)||0)*(Number(it.price)||0), 0);
  const discountAmt = subtotal * (Number(discountPct)||0)/100;
  const afterDiscount = subtotal - discountAmt;
  const vatAmt = vatApplied ? afterDiscount * (Number(DB.settings.vatPercent)||0)/100 : 0;
  const grandTotal = afterDiscount + vatAmt;
  return {subtotal, discountAmt, afterDiscount, vatAmt, grandTotal};
}
function statusBadge(status){
  const cls = status==='Paid'?'badge-paid':status==='Partially Paid'?'badge-partial':'badge-unpaid';
  return `<span class="badge ${cls}">${esc(status)}</span>`;
}
function nextInvoiceNumber(){
  const seq = (DB.settings.invoiceSeq||0)+1;
  return { number: DB.settings.invoicePrefix + String(seq).padStart(6,'0'), seq };
}
function showToast(msg, kind){
  ui.toast = {msg, kind: kind||'info'};
  render();
  setTimeout(()=>{ ui.toast=null; const t=document.getElementById('toast'); if(t) t.remove(); }, 3000);
}
function setView(view, params){
  ui.view = view;
  ui.sidebarOpen = false;
  if(params) Object.assign(ui, params);
  window.scrollTo(0,0);
  render();
}
function toggleTheme(){
  ui.theme = ui.theme==='light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', ui.theme);
  render();
}

/* =========================================================
   RENDER: ROOT
   ========================================================= */
function render(){
  const app = document.getElementById('app');
  if(!session.loggedIn){ app.innerHTML = renderLogin(); attachLoginHandlers(); renderToast(); return; }
  app.innerHTML = renderShell();
  attachShellHandlers();
  renderToast();
}
function renderToast(){
  const old = document.getElementById('toast');
  if(old) old.remove();
  if(!ui.toast) return;
  const div = document.createElement('div');
  div.id='toast';
  const colors = {info:'#1E4FA3', success:'#16A34A', error:'#DC2626'};
  div.style.cssText = `position:fixed;bottom:22px;right:22px;z-index:999;background:${colors[ui.toast.kind]||colors.info};color:#fff;padding:12px 18px;border-radius:10px;font-size:13px;font-weight:600;box-shadow:0 10px 26px rgba(0,0,0,.25);font-family:Inter,sans-serif;`;
  div.textContent = ui.toast.msg;
  document.body.appendChild(div);
}

/* =========================================================
   LOGIN VIEW
   ========================================================= */
function renderLogin(){
  return `
  <div class="login-wrap">
    <div class="login-card">
      <div class="login-logo">
        <img src="${DB.settings.logoDataUrl}" alt="logo">
        <div class="name">${esc(DB.settings.companyName)}</div>
        <div class="tag">${esc(DB.settings.tagline)}</div>
      </div>
      ${ui.loginError ? `<div class="login-error">${esc(ui.loginError)}</div>` : ''}
      <form id="loginForm">
        <div class="field" style="margin-bottom:14px;">
          <label>Email</label>
          <input class="input" type="email" id="loginEmail" placeholder="admin@noormechanical.ae" autocomplete="username">
        </div>
        <div class="field" style="margin-bottom:8px;">
          <label>Password</label>
          <input class="input" type="password" id="loginPass" placeholder="Enter password" autocomplete="current-password">
        </div>
        <span class="forgot-link" id="forgotBtn">Forgot password?</span>
        <button type="submit" class="btn btn-primary btn-block" id="loginSubmitBtn">Sign In to Noor Billing Pro</button>
      </form>
      <div class="login-foot">Secure admin access via Supabase Auth · Noor Billing Pro v1.0</div>
    </div>
  </div>`;
}
function attachLoginHandlers(){
  const f = document.getElementById('loginForm');
  f.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPass').value;
    const btn = document.getElementById('loginSubmitBtn');
    btn.disabled = true; btn.textContent = 'Signing in…';
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if(error){
      ui.loginError = error.message;
      render();
      return;
    }
    session.loggedIn = true;
    ui.loginError = '';
    await loadDB();
    setView('dashboard');
  });
  document.getElementById('forgotBtn').addEventListener('click', async ()=>{
    const email = document.getElementById('loginEmail').value.trim();
    if(!email){ ui.loginError = 'Enter your email above first, then click "Forgot password?" again.'; render(); return; }
    const { error } = await sb.auth.resetPasswordForEmail(email);
    ui.loginError = error ? error.message : `Password reset email sent to ${email}.`;
    render();
  });
}

/* =========================================================
   APP SHELL (sidebar + topbar + content)
   ========================================================= */
const NAV_ITEMS = [
  {v:'dashboard', label:'Dashboard', icon:'dashboard'},
  {v:'create', label:'Create Invoice', icon:'invoice'},
  {v:'history', label:'Invoice History', icon:'history'},
  {v:'customer', label:'Customer History', icon:'customer'},
  {v:'reminders', label:'Reminder Center', icon:'bell'},
  {v:'settings', label:'Settings', icon:'settings'},
];
const TITLES = {
  dashboard:['Dashboard','Overview of your workshop billing'],
  create:['Create Invoice','Build a new tax invoice'],
  edit:['Edit Invoice','Update invoice details'],
  view:['Invoice','Structured invoice record'],
  history:['Invoice History','Search and manage past invoices'],
  customer:['Customer History','Look up a customer\'s visit history'],
  reminders:['Customer Reminder Center','Follow up with customers due for service'],
  settings:['Settings','Company profile and system preferences'],
};

function renderShell(){
  const t = TITLES[ui.view] || ['Noor Billing Pro',''];
  return `
  <div class="app-shell">
    <div class="sidebar ${ui.sidebarOpen?'open':''}" id="sidebar">
      <div class="sidebar-brand">
        <img src="${DB.settings.logoDataUrl}" alt="logo">
        <div>
          <div class="name">Noor Billing Pro</div>
          <div class="sub">${esc(DB.settings.companyName.replace(' Est.',''))}</div>
        </div>
      </div>
      <div class="nav">
        <div class="nav-label">Menu</div>
        ${NAV_ITEMS.map(item=>`
          <button class="nav-item ${(ui.view===item.v || (ui.view==='edit'&&item.v==='create') || (ui.view==='view'&&item.v==='history'))?'active':''}" data-nav="${item.v}">
            ${ICONS[item.icon]}<span>${item.label}</span>
          </button>`).join('')}
      </div>
      <div class="sidebar-foot">
        <button class="logout-btn" id="logoutBtn">${ICONS.logout}<span>Logout</span></button>
      </div>
    </div>

    <div class="main">
      <div class="topbar">
        <div style="display:flex;align-items:center;gap:12px;">
          <button class="icon-btn" id="menuToggle" style="display:none;">${ICONS.menu}</button>
          <div>
            <h1>${t[0]}</h1>
            <div class="crumb">${t[1]}</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          <button class="icon-btn" id="themeToggle" title="Toggle theme">${ui.theme==='light'?ICONS.moon:ICONS.sun}</button>
          <button class="btn btn-primary btn-sm" id="quickCreateBtn">${ICONS.plus} New Invoice</button>
        </div>
      </div>
      <div class="content" id="viewContent">
        ${renderCurrentView()}
      </div>
    </div>
  </div>`;
}

function renderCurrentView(){
  switch(ui.view){
    case 'dashboard': return renderDashboard();
    case 'create': case 'edit': return renderInvoiceForm();
    case 'view': return renderInvoiceViewPage();
    case 'history': return renderHistory();
    case 'customer': return renderCustomerHistory();
    case 'reminders': return renderReminders();
    case 'settings': return renderSettings();
    default: return renderDashboard();
  }
}

function attachShellHandlers(){
  document.querySelectorAll('[data-nav]').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const v = btn.getAttribute('data-nav');
      if(v==='create'){ ui.currentItems = [blankItem()]; ui.editId = null; }
      setView(v);
    });
  });
  document.getElementById('logoutBtn').addEventListener('click', async ()=>{
    await sb.auth.signOut();
    session.loggedIn = false;
    setView('login');
  });
  document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  document.getElementById('quickCreateBtn').addEventListener('click', ()=>{
    ui.currentItems = [blankItem()]; ui.editId=null; setView('create');
  });
  const mt = document.getElementById('menuToggle');
  if(mt) mt.addEventListener('click', ()=>{ ui.sidebarOpen = !ui.sidebarOpen; render(); });
  attachViewHandlers();
}

/* =========================================================
   DASHBOARD
   ========================================================= */
function renderDashboard(){
  const today = todayISO();
  const now = new Date();
  const invoices = DB.invoices;
  const todaysSales = invoices.filter(i=>i.date===today).reduce((s,i)=>s+i.totals.grandTotal,0);
  const monthlySales = invoices.filter(i=>{
    const d = new Date(i.date+'T00:00:00');
    return d.getMonth()===now.getMonth() && d.getFullYear()===now.getFullYear();
  }).reduce((s,i)=>s+i.totals.grandTotal,0);
  const pending = invoices.filter(i=>i.paymentStatus!=='Paid').reduce((s,i)=>s+i.totals.grandTotal,0);
  const totalInvoices = invoices.length;

  const recent = [...invoices].sort((a,b)=> (b.createdAt||0)-(a.createdAt||0)).slice(0,6);

  return `
  <div class="grid kpi-grid">
    ${kpiCard("Today's Sales", fmtMoney(todaysSales), fmtDate(today), 'receipt', 'var(--royal-500)')}
    ${kpiCard('Monthly Sales', fmtMoney(monthlySales), now.toLocaleDateString('en-GB',{month:'long',year:'numeric'}), 'wallet', 'var(--amber-500)')}
    ${kpiCard('Pending Payments', fmtMoney(pending), 'Unpaid + partially paid', 'clock', 'var(--danger)')}
    ${kpiCard('Total Invoices', String(totalInvoices), 'All-time records', 'invoice', 'var(--success)')}
  </div>

  <div class="section-title"><div class="tick"></div><h2>Quick Actions</h2></div>
  <div class="grid quick-grid">
    ${quickCard('create','invoice','Create Invoice','Bill a new customer','var(--royal-100)','var(--royal-600)')}
    ${quickCard('history','history','Invoice History','Search & manage records','var(--amber-100)','var(--amber-600)')}
    ${quickCard('reminders','bell','Reminder Center','Follow up on due visits','var(--success-bg)','var(--success)')}
    ${quickCard('settings','settings','Settings','Company & billing setup','var(--ice-100)','var(--slate-600)')}
  </div>

  <div class="section-title"><div class="tick"></div><h2>Recent Invoices</h2></div>
  <div class="card" style="padding:6px;">
    ${recent.length===0 ? emptyState('receipt','No invoices yet','Create your first invoice to see it here.') : `
    <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>Invoice #</th><th>Customer</th><th>Vehicle</th><th>Date</th><th>Status</th><th>Total</th><th></th></tr></thead>
      <tbody>
        ${recent.map(inv=>`
          <tr>
            <td class="inv-num">${esc(inv.invoiceNumber)}</td>
            <td>${esc(inv.customerName)}</td>
            <td>${esc(inv.plateNumber||'—')}</td>
            <td>${fmtDate(inv.date)}</td>
            <td>${statusBadge(inv.paymentStatus)}</td>
            <td class="mono">${fmtMoney(inv.totals.grandTotal)}</td>
            <td><button class="btn btn-ghost btn-sm" data-open-invoice="${inv.id}">${ICONS.eye} View</button></td>
          </tr>`).join('')}
      </tbody>
    </table>
    </div>`}
  </div>`;
}
function kpiCard(label,value,sub,icon,color){
  return `<div class="card kpi-card">
    <div class="kpi-accent" style="background:${color};">${ICONS[icon]}</div>
    <div class="label">${label}</div>
    <div class="value">${value}</div>
    <div class="sub">${sub}</div>
  </div>`;
}
function quickCard(nav,icon,title,sub,bg,fg){
  return `<button class="card quick-card" data-nav-quick="${nav}">
    <div class="qi" style="background:${bg};color:${fg};">${ICONS[icon]}</div>
    <div class="qt">${title}</div>
    <div class="qs">${sub}</div>
  </button>`;
}
function emptyState(icon,title,sub){
  return `<div class="empty-state">${ICONS[icon]}<h3>${title}</h3><p>${sub}</p></div>`;
}

/* =========================================================
   INVOICE FORM (create / edit)
   ========================================================= */
function blankItem(){ return {id: uid(), desc:'', qty:1, price:0}; }

function getEditingInvoice(){
  if(!ui.editId) return null;
  return DB.invoices.find(i=>i.id===ui.editId) || null;
}

function renderInvoiceForm(){
  const editing = getEditingInvoice();
  if(ui.view==='edit' && editing && ui.currentItems.length===0){
    // populated on entry via openEditInvoice(); fallback safety:
    ui.currentItems = editing.items.map(it=>({...it}));
  }
  const iv = editing || {};
  const discount = iv.discountPercent!=null ? iv.discountPercent : 0;
  const vat = iv.vatApplied!=null ? iv.vatApplied : true;
  const totals = computeTotals(ui.currentItems, discount, vat);

  let discountOptions = '';
  for(let p=0;p<=50;p++){ discountOptions += `<option value="${p}" ${p===discount?'selected':''}>${p}%</option>`; }

  return `
  <form id="invoiceForm">
  <div class="panel card">
    <div class="panel-head"><h3>${ICONS.customer} Customer Details</h3></div>
    <div class="form-grid">
      <div class="field"><label>Customer Name <span class="req">*</span></label>
        <input class="input" id="f_customerName" required value="${esc(iv.customerName||'')}" placeholder="e.g. Ahmed Al Falasi"></div>
      <div class="field"><label>Phone Number <span class="req">*</span></label>
        <input class="input" id="f_phone" required value="${esc(iv.phone||'')}" placeholder="050 630 6014"></div>
      <div class="field"><label>Email (Optional)</label>
        <input class="input" type="email" id="f_email" value="${esc(iv.email||'')}" placeholder="customer@email.com"></div>
    </div>
  </div>

  <div class="panel card">
    <div class="panel-head"><h3>${ICONS.car} Vehicle Details</h3></div>
    <div class="form-grid">
      <div class="field"><label>Brand</label><input class="input" id="f_vBrand" value="${esc(iv.vehicleBrand||'')}" placeholder="e.g. Toyota"></div>
      <div class="field"><label>Model</label><input class="input" id="f_vModel" value="${esc(iv.vehicleModel||'')}" placeholder="e.g. Land Cruiser"></div>
      <div class="field"><label>Plate Number</label><input class="input" id="f_plate" value="${esc(iv.plateNumber||'')}" placeholder="e.g. Dubai A 12345"></div>
      <div class="field"><label>Mileage</label><input class="input" id="f_mileage" value="${esc(iv.mileage||'')}" placeholder="e.g. 84,200 km"></div>
    </div>
  </div>

  <div class="panel card">
    <div class="panel-head"><h3>${ICONS.receipt} Billing Items</h3>
      <button type="button" class="btn btn-outline btn-sm add-row-btn" id="addItemBtn">${ICONS.plus} Add Row</button>
    </div>
    <table class="items-table">
      <thead><tr><th>Description</th><th class="col-qty">Qty</th><th class="col-price">Unit Price (${DB.settings.currency})</th><th class="col-total">Total</th><th class="col-del"></th></tr></thead>
      <tbody id="itemsBody">${renderItemsRows()}</tbody>
    </table>

    <div class="form-grid" style="margin-top:18px;">
      <div class="field"><label>Discount</label>
        <select class="input" id="f_discount">${discountOptions}</select>
      </div>
      <div class="field">
        <label>&nbsp;</label>
        <div class="checkbox-row" style="padding-top:10px;">
          <input type="checkbox" id="f_vat" ${vat?'checked':''}>
          <label for="f_vat" style="font-size:13.5px;font-weight:500;color:var(--text);">Apply UAE VAT (${DB.settings.vatPercent}%)</label>
        </div>
      </div>
    </div>

    <div class="totals-box" id="totalsBox">${renderTotalsInner(totals)}</div>
  </div>

  <div class="panel card">
    <div class="panel-head"><h3>${ICONS.wallet} Payment</h3></div>
    <div class="form-grid">
      <div class="field"><label>Payment Status</label>
        <select class="input" id="f_status">
          ${['Paid','Partially Paid','Unpaid'].map(s=>`<option ${iv.paymentStatus===s?'selected':''}>${s}</option>`).join('')}
        </select></div>
      <div class="field"><label>Payment Method</label>
        <select class="input" id="f_method">
          ${['Cash','Card','Bank Transfer','Apple Pay'].map(s=>`<option ${iv.paymentMethod===s?'selected':''}>${s}</option>`).join('')}
        </select></div>
    </div>
    <div class="field" style="margin-top:14px;"><label>Notes</label>
      <textarea class="input" id="f_notes" placeholder="Optional internal notes...">${esc(iv.notes||'')}</textarea>
    </div>
  </div>

  <div style="display:flex;gap:10px;justify-content:flex-end;">
    <button type="button" class="btn btn-outline" id="cancelFormBtn">Cancel</button>
    <button type="submit" class="btn btn-primary">${ICONS.invoice} ${ui.view==='edit'?'Save Changes':'Save Invoice'}</button>
  </div>
  </form>`;
}

function renderItemsRows(){
  return ui.currentItems.map(it=>`
    <tr data-row="${it.id}">
      <td><input class="input" data-field="desc" data-id="${it.id}" value="${esc(it.desc)}" placeholder="e.g. Engine oil change + filter"></td>
      <td class="col-qty"><input class="input" type="number" min="0" step="1" data-field="qty" data-id="${it.id}" value="${it.qty}"></td>
      <td class="col-price"><input class="input" type="number" min="0" step="0.01" data-field="price" data-id="${it.id}" value="${it.price}"></td>
      <td class="col-total row-total" id="rowtotal_${it.id}">${fmtMoney((Number(it.qty)||0)*(Number(it.price)||0))}</td>
      <td class="col-del"><button type="button" class="icon-btn" data-remove-row="${it.id}" title="Remove">${ICONS.trash}</button></td>
    </tr>`).join('');
}
function renderTotalsInner(totals){
  return `
    <div class="totals-line"><span>Subtotal</span><b>${fmtMoney(totals.subtotal)}</b></div>
    <div class="totals-line"><span>Discount</span><b>- ${fmtMoney(totals.discountAmt)}</b></div>
    <div class="totals-line"><span>VAT (${DB.settings.vatPercent}%)</span><b>${fmtMoney(totals.vatAmt)}</b></div>
    <div class="totals-grand"><span>Grand Total</span><span>${fmtMoney(totals.grandTotal)}</span></div>`;
}
function currentFormTotals(){
  const discount = Number(document.getElementById('f_discount')?.value || 0);
  const vat = document.getElementById('f_vat')?.checked || false;
  return computeTotals(ui.currentItems, discount, vat);
}
function updateTotalsUI(){
  const box = document.getElementById('totalsBox');
  if(box) box.innerHTML = renderTotalsInner(currentFormTotals());
}

/* =========================================================
   INVOICE VIEW PAGE (structured record + PDF/Print/WhatsApp)
   ========================================================= */
function renderInvoiceViewPage(){
  const inv = DB.invoices.find(i=>i.id===ui.viewId);
  if(!inv) return emptyState('receipt','Invoice not found','It may have been deleted.');
  return `
  <div style="margin-bottom:14px;">
    <button class="btn btn-ghost btn-sm no-print" id="backToHistory">${ICONS.back} Back</button>
  </div>
  <div class="invoice-view-grid">
    <div class="doc-preview" id="docPreview">
      ${renderDocHTML(inv)}
    </div>
    <div class="side-actions no-print">
      <div class="card" style="padding:16px;">
        <div style="font-size:12px;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Invoice Actions</div>
        <div class="side-actions">
          <button class="btn btn-primary btn-block" data-pdf-action="preview" data-id="${inv.id}">${ICONS.eye} Preview PDF</button>
          <button class="btn btn-outline btn-block" data-pdf-action="download" data-id="${inv.id}">${ICONS.download} Download PDF</button>
          <button class="btn btn-outline btn-block" data-pdf-action="print" data-id="${inv.id}">${ICONS.print} Print</button>
          <button class="btn btn-amber btn-block" data-whatsapp-send="${inv.id}">${ICONS.whatsapp} Send WhatsApp</button>
        </div>
      </div>
      <div class="card" style="padding:16px;">
        <div style="font-size:12px;color:var(--text-muted);font-weight:700;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Manage</div>
        <div class="side-actions">
          <button class="btn btn-outline btn-block" data-edit-invoice="${inv.id}">${ICONS.edit} Edit Invoice</button>
          <button class="btn btn-outline btn-block" data-duplicate-invoice="${inv.id}">${ICONS.copy} Duplicate</button>
          <button class="btn btn-danger btn-block" data-delete-invoice="${inv.id}">${ICONS.trash} Delete</button>
        </div>
      </div>
    </div>
  </div>`;
}

function renderDocHTML(inv){
  const t = inv.totals;
  return `
    <div class="doc-head">
      <div class="co">
        <img src="${DB.settings.logoDataUrl}" alt="logo">
        <div>
          <div class="co-name">${esc(DB.settings.companyName)}</div>
          ${DB.settings.companyNameArabic?`<div class="co-name ar" dir="rtl">${esc(DB.settings.companyNameArabic)}</div>`:''}
          <div class="co-meta">${esc(DB.settings.address)}<br>
          Tel: ${esc(DB.settings.phone)} &nbsp;|&nbsp; ${esc(DB.settings.email)}
          ${DB.settings.vatNumber?`<br>TRN / ${AR.trn}: ${esc(DB.settings.vatNumber)}`:''}</div>
        </div>
      </div>
      <div class="inv-meta">
        <div class="inv-tag mono">${esc(inv.invoiceNumber)}</div>
        <div class="inv-date" style="margin-top:4px;">
          <span class="ar" dir="rtl">${AR.taxInvoice}</span> · TAX INVOICE
        </div>
        <div class="inv-date">
          <span class="ar" dir="rtl">${AR.date}</span> / Date: ${fmtDate(inv.date)}
        </div>
        <div class="inv-date">${statusBadge(inv.paymentStatus)}</div>
      </div>
    </div>
    <div class="doc-grid2">
      <div class="doc-box">
        <div class="h bi-label"><span class="ar" dir="rtl">${AR.customer}</span><span class="en">Customer</span></div>
        <div class="r"><b>${esc(inv.customerName)}</b></div>
        <div class="r">${esc(inv.phone)}</div>
        ${inv.email?`<div class="r">${esc(inv.email)}</div>`:''}
      </div>
      <div class="doc-box">
        <div class="h bi-label"><span class="ar" dir="rtl">${AR.vehicle}</span><span class="en">Vehicle</span></div>
        <div class="r">${esc(inv.vehicleBrand||'—')} ${esc(inv.vehicleModel||'')}</div>
        <div class="r">${AR.plate} / Plate: ${esc(inv.plateNumber||'—')}</div>
        <div class="r">${AR.mileage} / Mileage: ${esc(inv.mileage||'—')}</div>
      </div>
    </div>
    <table class="doc-table">
      <thead><tr>
        <th style="width:46%;"><span class="ar" dir="rtl">${AR.description}</span>Description</th>
        <th><span class="ar" dir="rtl">${AR.qty}</span>Qty</th>
        <th><span class="ar" dir="rtl">${AR.unitPrice}</span>Unit Price</th>
        <th><span class="ar" dir="rtl">${AR.amount}</span>Total</th>
      </tr></thead>
      <tbody>
        ${inv.items.map(it=>`<tr><td>${esc(it.desc)}</td><td>${it.qty}</td><td>${fmtMoney(it.price)}</td><td>${fmtMoney((Number(it.qty)||0)*(Number(it.price)||0))}</td></tr>`).join('')}
      </tbody>
    </table>
    <div class="doc-totals">
      <div class="ln"><span><span class="ar" dir="rtl">${AR.subtotal}</span> / Subtotal</span><span>${fmtMoney(t.subtotal)}</span></div>
      <div class="ln"><span><span class="ar" dir="rtl">${AR.discount}</span> / Discount (${inv.discountPercent}%)</span><span>- ${fmtMoney(t.discountAmt)}</span></div>
      <div class="ln"><span><span class="ar" dir="rtl">${AR.vat}</span> / VAT (${inv.vatApplied?DB.settings.vatPercent:0}%)</span><span>${fmtMoney(t.vatAmt)}</span></div>
      <div class="gt"><span><span class="ar" dir="rtl">${AR.grandTotal}</span> / Grand Total</span><span>${fmtMoney(t.grandTotal)}</span></div>
    </div>
    <div style="margin-top:14px;font-size:12px;color:#555;">
      <span class="ar" dir="rtl">${AR.paymentMethod}</span> / Payment Method: <b>${esc(inv.paymentMethod)}</b>
      ${inv.notes?`<br><span class="ar" dir="rtl">${AR.notes}</span> / Notes: ${esc(inv.notes)}`:''}
      <br><span class="ar" dir="rtl">${AR.signature}</span> / Signature: ______________________
    </div>
    <div class="doc-footer">
      <div class="thanks ar" dir="rtl">${AR.thankYou}</div>
      <div class="thanks">Thank you for choosing ${esc(DB.settings.companyName)}</div>
      <div class="fine">${esc(DB.settings.tagline)} · This is a computer-generated invoice.</div>
    </div>`;
}

/* =========================================================
   INVOICE HISTORY
   ========================================================= */
function filteredHistory(){
  let list = [...DB.invoices];
  const q = ui.historySearch.trim().toLowerCase();
  if(q){
    list = list.filter(i =>
      (i.customerName||'').toLowerCase().includes(q) ||
      (i.phone||'').toLowerCase().includes(q) ||
      (i.plateNumber||'').toLowerCase().includes(q) ||
      (i.invoiceNumber||'').toLowerCase().includes(q) ||
      (i.date||'').includes(q)
    );
  }
  if(ui.historyFilter!=='all'){
    list = list.filter(i=>i.paymentStatus===ui.historyFilter);
  }
  return list.sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
}
function renderHistory(){
  const list = filteredHistory();
  return `
  <div class="filter-bar">
    <div class="search-wrap">${ICONS.search}<input class="input" id="historySearchInput" placeholder="Search by customer, phone, plate, or invoice #..." value="${esc(ui.historySearch)}"></div>
    <button class="chip ${ui.historyFilter==='all'?'active':''}" data-filter="all">All</button>
    <button class="chip ${ui.historyFilter==='Paid'?'active':''}" data-filter="Paid">Paid</button>
    <button class="chip ${ui.historyFilter==='Partially Paid'?'active':''}" data-filter="Partially Paid">Partially Paid</button>
    <button class="chip ${ui.historyFilter==='Unpaid'?'active':''}" data-filter="Unpaid">Unpaid</button>
  </div>
  <div class="card" style="padding:6px;">
    ${list.length===0 ? emptyState('history','No invoices found','Try a different search term or filter.') : `
    <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>Invoice #</th><th>Customer</th><th>Phone</th><th>Plate</th><th>Date</th><th>Status</th><th>Total</th><th>Actions</th></tr></thead>
      <tbody>
        ${list.map(inv=>`
          <tr>
            <td class="inv-num">${esc(inv.invoiceNumber)}</td>
            <td>${esc(inv.customerName)}</td>
            <td>${esc(inv.phone)}</td>
            <td>${esc(inv.plateNumber||'—')}</td>
            <td>${fmtDate(inv.date)}</td>
            <td>${statusBadge(inv.paymentStatus)}</td>
            <td class="mono">${fmtMoney(inv.totals.grandTotal)}</td>
            <td><div class="actions-cell">
              <button class="icon-btn" data-open-invoice="${inv.id}" title="View">${ICONS.eye}</button>
              <button class="icon-btn" data-edit-invoice="${inv.id}" title="Edit">${ICONS.edit}</button>
              <button class="icon-btn" data-duplicate-invoice="${inv.id}" title="Duplicate">${ICONS.copy}</button>
              <button class="icon-btn" data-pdf-action="download" data-id="${inv.id}" title="Download PDF">${ICONS.pdf}</button>
              <button class="icon-btn" data-delete-invoice="${inv.id}" title="Delete">${ICONS.trash}</button>
            </div></td>
          </tr>`).join('')}
      </tbody>
    </table>
    </div>`}
  </div>`;
}

/* =========================================================
   CUSTOMER HISTORY
   ========================================================= */
function renderCustomerHistory(){
  const q = ui.customerQuery.trim().toLowerCase();
  let results = ui.customerResults;
  return `
  <div class="card" style="padding:20px;margin-bottom:20px;">
    <div class="field">
      <label>Search by Phone Number or Plate Number</label>
      <div style="display:flex;gap:10px;margin-top:6px;">
        <div class="search-wrap" style="flex:1;">${ICONS.search}<input class="input" id="customerSearchInput" placeholder="e.g. 0506306014 or Dubai A 12345" value="${esc(ui.customerQuery)}"></div>
        <button class="btn btn-primary" id="customerSearchBtn">Search</button>
      </div>
    </div>
  </div>
  ${results===null ? emptyState('customer','Look up a customer','Search by phone or plate number to see their full visit history.') :
    results.length===0 ? emptyState('customer','No matching visits found','Double-check the phone or plate number and try again.') : `
    <div class="section-title"><div class="tick"></div><h2>${results.length} visit${results.length>1?'s':''} found</h2></div>
    <div class="card" style="padding:6px;">
      <div class="data-table-wrap">
      <table class="data-table">
        <thead><tr><th>Invoice #</th><th>Date</th><th>Vehicle</th><th>Services</th><th>Amount</th><th>Status</th><th></th></tr></thead>
        <tbody>
          ${results.map(inv=>`
            <tr>
              <td class="inv-num">${esc(inv.invoiceNumber)}</td>
              <td>${fmtDate(inv.date)}</td>
              <td>${esc(inv.vehicleBrand||'')} ${esc(inv.vehicleModel||'')} · ${esc(inv.plateNumber||'—')}</td>
              <td>${esc(inv.items.map(it=>it.desc).filter(Boolean).join(', ').slice(0,60) || '—')}</td>
              <td class="mono">${fmtMoney(inv.totals.grandTotal)}</td>
              <td>${statusBadge(inv.paymentStatus)}</td>
              <td><div class="actions-cell">
                <button class="icon-btn" data-open-invoice="${inv.id}" title="View">${ICONS.eye}</button>
                <button class="icon-btn" data-pdf-action="download" data-id="${inv.id}" title="PDF">${ICONS.pdf}</button>
              </div></td>
            </tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>`}
  `;
}
function runCustomerSearch(){
  const q = ui.customerQuery.trim().toLowerCase().replace(/\s+/g,'');
  if(!q){ ui.customerResults = null; render(); return; }
  const results = DB.invoices.filter(inv=>{
    const phone = (inv.phone||'').toLowerCase().replace(/\s+/g,'');
    const plate = (inv.plateNumber||'').toLowerCase().replace(/\s+/g,'');
    return phone.includes(q) || plate.includes(q);
  }).sort((a,b)=>(b.createdAt||0)-(a.createdAt||0));
  ui.customerResults = results;
  render();
}

/* =========================================================
   REMINDER CENTER
   ========================================================= */
function renderReminders(){
  const byPhone = {};
  DB.invoices.forEach(inv=>{
    const key = normalizePhone(inv.phone);
    if(!key) return;
    if(!byPhone[key] || new Date(inv.date) > new Date(byPhone[key].date)) byPhone[key] = inv;
  });
  const now = new Date();
  const due = Object.values(byPhone).map(inv=>{
    const days = Math.floor((now - new Date(inv.date+'T00:00:00'))/86400000);
    let bucket = null;
    if(days>=180) bucket='6+ months';
    else if(days>=90) bucket='3+ months';
    return {inv, days, bucket};
  }).filter(r=>r.bucket).sort((a,b)=>b.days-a.days);

  return `
  ${due.length===0 ? emptyState('bell','No customers due for follow-up','Customers whose last visit was 3+ months ago will appear here automatically.') : `
  <div class="card" style="padding:6px;">
    <div class="data-table-wrap">
    <table class="data-table">
      <thead><tr><th>Customer</th><th>Phone</th><th>Vehicle</th><th>Last Visit</th><th>Last Amount</th><th>Due</th><th>Actions</th></tr></thead>
      <tbody>
        ${due.map(r=>`
          <tr>
            <td>${esc(r.inv.customerName)}</td>
            <td>${esc(r.inv.phone)}</td>
            <td>${esc(r.inv.vehicleBrand||'')} ${esc(r.inv.vehicleModel||'')} ${r.inv.plateNumber?'· '+esc(r.inv.plateNumber):''}</td>
            <td>${fmtDate(r.inv.date)}</td>
            <td class="mono">${fmtMoney(r.inv.totals.grandTotal)}</td>
            <td><span class="badge ${r.bucket==='6+ months'?'badge-unpaid':'badge-partial'}">${r.bucket}</span></td>
            <td><div class="actions-cell">
              <button class="btn btn-outline btn-sm" data-reminder="${r.inv.id}">${ICONS.bell} Reminder</button>
              <button class="btn btn-amber btn-sm" data-offer="${r.inv.id}">${ICONS.gift} Offer</button>
            </div></td>
          </tr>`).join('')}
      </tbody>
    </table>
    </div>
  </div>`}`;
}
function firstName(name){ return (name||'').trim().split(' ')[0] || 'there'; }
function sendReminder(invId, type){
  const inv = DB.invoices.find(i=>i.id===invId);
  if(!inv) return;
  const name = firstName(inv.customerName);
  let msg;
  if(type==='reminder'){
    msg = `Hello ${name},\n\nIt has been a while since your last visit to ${DB.settings.companyName}.\n\nYour vehicle may now be due for maintenance.\n\nWe would be happy to inspect your vehicle. Please contact us to schedule your visit.\n\nRegards,\n${DB.settings.companyName}`;
  } else {
    msg = `Hello ${name},\n\nThank you for choosing ${DB.settings.companyName}.\n\nThis month we are offering a FREE Vehicle Inspection for our valued customers.\n\nVisit our workshop and claim your offer.\n\nWe look forward to seeing you again.\n\nRegards,\n${DB.settings.companyName}`;
  }
  const phone = normalizePhone(inv.phone);
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, '_blank');
}

/* =========================================================
   SETTINGS
   ========================================================= */
function renderSettings(){
  const s = DB.settings;
  return `
  <form id="settingsForm">
  <div class="panel card">
    <div class="panel-head"><h3>${ICONS.dashboard} Company Profile</h3></div>
    <div class="form-grid">
      <div class="field" style="grid-column:1/-1;"><label>Company Name</label><input class="input" id="s_companyName" value="${esc(s.companyName)}"></div>
      <div class="field" style="grid-column:1/-1;"><label>Company Name (Arabic) — shown on invoices for UAE compliance</label><input class="input ar" dir="rtl" id="s_companyNameArabic" value="${esc(s.companyNameArabic)}"></div>
      <div class="field" style="grid-column:1/-1;"><label>Tagline</label><input class="input" id="s_tagline" value="${esc(s.tagline)}"></div>
      <div class="field" style="grid-column:1/-1;"><label>Address</label><textarea class="input" id="s_address">${esc(s.address)}</textarea></div>
      <div class="field" style="grid-column:1/-1;"><label>Address (Arabic)</label><textarea class="input ar" dir="rtl" id="s_addressArabic">${esc(s.addressArabic)}</textarea></div>
      <div class="field"><label>Phone</label><input class="input" id="s_phone" value="${esc(s.phone)}"></div>
      <div class="field"><label>CEO WhatsApp</label><input class="input" id="s_whatsapp" value="${esc(s.whatsapp)}"></div>
      <div class="field"><label>Email</label><input class="input" id="s_email" value="${esc(s.email)}"></div>
      <div class="field"><label>VAT / TRN Number</label><input class="input" id="s_vatNumber" value="${esc(s.vatNumber)}" placeholder="e.g. 100033724400003"></div>
    </div>
    <div class="field" style="margin-top:14px;">
      <label>Company Logo</label>
      <div style="display:flex;align-items:center;gap:14px;margin-top:6px;">
        <img src="${s.logoDataUrl}" style="width:56px;height:56px;border-radius:12px;object-fit:cover;border:1px solid var(--border);" id="logoPreview">
        <input type="file" accept="image/*" id="s_logoFile" class="input" style="max-width:280px;">
      </div>
    </div>
  </div>

  <div class="panel card">
    <div class="panel-head"><h3>${ICONS.wallet} Billing Configuration</h3></div>
    <div class="form-grid">
      <div class="field"><label>Currency</label><input class="input" id="s_currency" value="${esc(s.currency)}"></div>
      <div class="field"><label>VAT Percentage</label><input class="input" type="number" step="0.1" id="s_vatPercent" value="${s.vatPercent}"></div>
      <div class="field"><label>Invoice Prefix</label><input class="input" id="s_invoicePrefix" value="${esc(s.invoicePrefix)}"></div>
      <div class="field"><label>Next Invoice Number (preview)</label><input class="input mono" value="${s.invoicePrefix}${String((s.invoiceSeq||0)+1).padStart(6,'0')}" disabled></div>
    </div>
  </div>

  <div class="panel card">
    <div class="panel-head"><h3>${ICONS.settings} Security</h3></div>
    <div class="form-grid">
      <div class="field" style="grid-column:1/-1;"><p style="font-size:12.5px;color:var(--text-muted);margin:0;">Staff logins are managed in your Supabase project under Authentication → Users. Add a user there to give someone access, or use "Forgot password?" on the login screen to reset a password.</p></div>
    </div>
  </div>

  <div style="display:flex;justify-content:flex-end;">
    <button type="submit" class="btn btn-primary">Save Settings</button>
  </div>
  </form>`;
}

/* =========================================================
   VIEW-SPECIFIC EVENT WIRING
   ========================================================= */
function attachViewHandlers(){
  document.querySelectorAll('[data-open-invoice]').forEach(b=>b.addEventListener('click',()=>{
    setView('view', {viewId: b.getAttribute('data-open-invoice')});
  }));
  document.querySelectorAll('[data-nav-quick]').forEach(b=>b.addEventListener('click',()=>{
    const v = b.getAttribute('data-nav-quick');
    if(v==='create'){ ui.currentItems=[blankItem()]; ui.editId=null; }
    setView(v);
  }));

  if(ui.view==='create' || ui.view==='edit') attachInvoiceFormHandlers();
  if(ui.view==='view') attachInvoiceViewHandlers();
  if(ui.view==='history') attachHistoryHandlers();
  if(ui.view==='customer') attachCustomerHandlers();
  if(ui.view==='reminders') attachReminderHandlers();
  if(ui.view==='settings') attachSettingsHandlers();

  // global delete/edit/duplicate (used across dashboard/history/view)
  document.querySelectorAll('[data-edit-invoice]').forEach(b=>b.addEventListener('click',()=>openEditInvoice(b.getAttribute('data-edit-invoice'))));
  document.querySelectorAll('[data-duplicate-invoice]').forEach(b=>b.addEventListener('click',()=>duplicateInvoice(b.getAttribute('data-duplicate-invoice'))));
  document.querySelectorAll('[data-delete-invoice]').forEach(b=>b.addEventListener('click',()=>deleteInvoice(b.getAttribute('data-delete-invoice'))));
  document.querySelectorAll('[data-pdf-action]').forEach(b=>b.addEventListener('click',()=>{
    const inv = DB.invoices.find(i=>i.id===b.getAttribute('data-id'));
    if(!inv){ showToast('Could not find this invoice in memory — try reloading the page','error'); return; }
    try{ generatePDF(inv, b.getAttribute('data-pdf-action')); }
    catch(err){ console.error(err); showToast('PDF error: '+err.message,'error'); }
  }));
  document.querySelectorAll('[data-whatsapp-send]').forEach(b=>b.addEventListener('click',()=>{
    const inv = DB.invoices.find(i=>i.id===b.getAttribute('data-whatsapp-send'));
    if(!inv){ showToast('Could not find this invoice in memory — try reloading the page','error'); return; }
    const name = firstName(inv.customerName);
    const msg = `Hello ${name},\n\nThank you for choosing ${DB.settings.companyName}.\n\nPlease find your invoice ${inv.invoiceNumber} attached.\n\nRegards,\n${DB.settings.companyName}`;
    // Open WhatsApp immediately (must happen synchronously in the click handler
    // or most browsers' popup blockers will silently block it).
    window.open(`https://wa.me/${normalizePhone(inv.phone)}?text=${encodeURIComponent(msg)}`, '_blank');
    try{
      generatePDF(inv,'download');
      showToast('PDF downloaded — attach it in the WhatsApp chat that just opened','info');
    }catch(err){
      console.error(err);
      showToast('WhatsApp opened, but PDF failed: '+err.message,'error');
    }
  }));
}

function openEditInvoice(id){
  const inv = DB.invoices.find(i=>i.id===id);
  if(!inv) return;
  ui.editId = id;
  ui.currentItems = inv.items.map(it=>({...it}));
  setView('edit');
}
async function duplicateInvoice(id){
  const inv = DB.invoices.find(i=>i.id===id);
  if(!inv) return;
  const {number, seq} = nextInvoiceNumber();
  const copy = JSON.parse(JSON.stringify(inv));
  copy.invoiceNumber = number;
  copy.date = todayISO();
  DB.settings.invoiceSeq = seq;
  await persistSettings();
  const saved = await insertInvoiceRow(copy);
  if(!saved) return;
  DB.invoices.unshift(saved);
  showToast(`Duplicated as ${number}`,'success');
  setView('view', {viewId: saved.id});
}
async function deleteInvoice(id){
  const inv = DB.invoices.find(i=>i.id===id);
  if(!inv) return;
  if(!confirm(`Delete invoice ${inv.invoiceNumber} for ${inv.customerName}? This cannot be undone.`)) return;
  const ok = await deleteInvoiceRow(id);
  if(!ok) return;
  DB.invoices = DB.invoices.filter(i=>i.id!==id);
  showToast('Invoice deleted','success');
  setView(ui.view==='view' ? 'history' : ui.view);
}

/* ---- Invoice form handlers ---- */
function attachInvoiceFormHandlers(){
  document.getElementById('addItemBtn').addEventListener('click',()=>{
    ui.currentItems.push(blankItem());
    document.getElementById('itemsBody').innerHTML = renderItemsRows();
    updateTotalsUI();
  });
  document.getElementById('itemsBody').addEventListener('input', handleItemInput);
  document.getElementById('itemsBody').addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-remove-row]');
    if(!btn) return;
    const id = btn.getAttribute('data-remove-row');
    if(ui.currentItems.length<=1){ showToast('At least one item row is required','error'); return; }
    ui.currentItems = ui.currentItems.filter(it=>it.id!==id);
    document.getElementById('itemsBody').innerHTML = renderItemsRows();
    updateTotalsUI();
  });
  document.getElementById('f_discount').addEventListener('change', updateTotalsUI);
  document.getElementById('f_vat').addEventListener('change', updateTotalsUI);
  document.getElementById('cancelFormBtn').addEventListener('click', ()=> setView(ui.editId?'view':'dashboard', ui.editId?{viewId:ui.editId}:{}));
  document.getElementById('invoiceForm').addEventListener('submit', handleSaveInvoice);
}
function handleItemInput(e){
  const t = e.target;
  if(!t.matches('[data-field]')) return;
  const id = t.getAttribute('data-id');
  const field = t.getAttribute('data-field');
  const item = ui.currentItems.find(it=>it.id===id);
  if(!item) return;
  item[field] = field==='desc' ? t.value : (t.value===''?'':Number(t.value));
  if(field==='qty' || field==='price'){
    const cell = document.getElementById('rowtotal_'+id);
    if(cell) cell.textContent = fmtMoney((Number(item.qty)||0)*(Number(item.price)||0));
    updateTotalsUI();
  }
}
async function handleSaveInvoice(e){
  e.preventDefault();
  const customerName = document.getElementById('f_customerName').value.trim();
  const phone = document.getElementById('f_phone').value.trim();
  if(!customerName || !phone){ showToast('Customer name and phone are required','error'); return; }
  const validItems = ui.currentItems.filter(it=>it.desc && it.desc.trim());
  if(validItems.length===0){ showToast('Add at least one billing item with a description','error'); return; }

  const discountPercent = Number(document.getElementById('f_discount').value);
  const vatApplied = document.getElementById('f_vat').checked;
  const totals = computeTotals(validItems, discountPercent, vatApplied);

  const payload = {
    customerName, phone,
    email: document.getElementById('f_email').value.trim(),
    vehicleBrand: document.getElementById('f_vBrand').value.trim(),
    vehicleModel: document.getElementById('f_vModel').value.trim(),
    plateNumber: document.getElementById('f_plate').value.trim(),
    mileage: document.getElementById('f_mileage').value.trim(),
    items: validItems.map(it=>({desc:it.desc,qty:Number(it.qty)||0,price:Number(it.price)||0})),
    discountPercent, vatApplied, totals,
    paymentStatus: document.getElementById('f_status').value,
    paymentMethod: document.getElementById('f_method').value,
    notes: document.getElementById('f_notes').value.trim(),
  };

  const submitBtn = e.target.querySelector('button[type="submit"]');
  if(submitBtn) submitBtn.disabled = true;

  if(ui.view==='edit' && ui.editId){
    const existing = DB.invoices.find(i=>i.id===ui.editId);
    const merged = Object.assign({}, existing, payload);
    const saved = await updateInvoiceRow(ui.editId, merged);
    if(submitBtn) submitBtn.disabled = false;
    if(!saved) return;
    const idx = DB.invoices.findIndex(i=>i.id===ui.editId);
    if(idx>-1) DB.invoices[idx] = saved;
    showToast('Invoice updated','success');
    setView('view', {viewId: ui.editId});
    return;
  }
  const {number, seq} = nextInvoiceNumber();
  const draft = Object.assign({invoiceNumber: number, date: todayISO()}, payload);
  DB.settings.invoiceSeq = seq;
  await persistSettings();
  const saved = await insertInvoiceRow(draft);
  if(submitBtn) submitBtn.disabled = false;
  if(!saved) return;
  DB.invoices.unshift(saved);
  showToast(`Invoice ${number} saved`,'success');
  setView('view', {viewId: saved.id});
}

/* ---- Invoice view page handlers ---- */
function attachInvoiceViewHandlers(){
  document.getElementById('backToHistory').addEventListener('click', ()=> setView('history'));
}

/* ---- History handlers ---- */
function attachHistoryHandlers(){
  const input = document.getElementById('historySearchInput');
  input.addEventListener('input', ()=>{ ui.historySearch = input.value; renderHistoryOnly(); });
  document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{
    ui.historyFilter = b.getAttribute('data-filter'); render();
  }));
}
function renderHistoryOnly(){
  document.getElementById('viewContent').innerHTML = renderHistory();
  attachHistoryHandlers();
  document.querySelectorAll('[data-open-invoice]').forEach(b=>b.addEventListener('click',()=>setView('view',{viewId:b.getAttribute('data-open-invoice')})));
  document.querySelectorAll('[data-edit-invoice]').forEach(b=>b.addEventListener('click',()=>openEditInvoice(b.getAttribute('data-edit-invoice'))));
  document.querySelectorAll('[data-duplicate-invoice]').forEach(b=>b.addEventListener('click',()=>duplicateInvoice(b.getAttribute('data-duplicate-invoice'))));
  document.querySelectorAll('[data-delete-invoice]').forEach(b=>b.addEventListener('click',()=>deleteInvoice(b.getAttribute('data-delete-invoice'))));
  document.querySelectorAll('[data-pdf-action]').forEach(b=>b.addEventListener('click',()=>{
    const inv = DB.invoices.find(i=>i.id===b.getAttribute('data-id'));
    if(!inv) return;
    try{ generatePDF(inv, b.getAttribute('data-pdf-action')); }
    catch(err){ console.error(err); showToast('PDF error: '+err.message,'error'); }
  }));
  // refocus search field with cursor at end
  const el = document.getElementById('historySearchInput');
  if(el){ el.focus(); const v=el.value; el.value=''; el.value=v; }
}

/* ---- Customer history handlers ---- */
function attachCustomerHandlers(){
  const input = document.getElementById('customerSearchInput');
  input.addEventListener('input', ()=>{ ui.customerQuery = input.value; });
  input.addEventListener('keydown', (e)=>{ if(e.key==='Enter'){ e.preventDefault(); runCustomerSearch(); } });
  document.getElementById('customerSearchBtn').addEventListener('click', runCustomerSearch);
}

/* ---- Reminder handlers ---- */
function attachReminderHandlers(){
  document.querySelectorAll('[data-reminder]').forEach(b=>b.addEventListener('click',()=>sendReminder(b.getAttribute('data-reminder'),'reminder')));
  document.querySelectorAll('[data-offer]').forEach(b=>b.addEventListener('click',()=>sendReminder(b.getAttribute('data-offer'),'offer')));
}

/* ---- Settings handlers ---- */
function attachSettingsHandlers(){
  document.getElementById('s_logoFile').addEventListener('change', (e)=>{
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = ()=>{
      document.getElementById('logoPreview').src = reader.result;
      ui._pendingLogo = reader.result;
    };
    reader.readAsDataURL(file);
  });
  document.getElementById('settingsForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    DB.settings.companyName = document.getElementById('s_companyName').value.trim();
    DB.settings.companyNameArabic = document.getElementById('s_companyNameArabic').value.trim();
    DB.settings.tagline = document.getElementById('s_tagline').value.trim();
    DB.settings.address = document.getElementById('s_address').value.trim();
    DB.settings.addressArabic = document.getElementById('s_addressArabic').value.trim();
    DB.settings.phone = document.getElementById('s_phone').value.trim();
    DB.settings.whatsapp = document.getElementById('s_whatsapp').value.trim();
    DB.settings.email = document.getElementById('s_email').value.trim();
    DB.settings.vatNumber = document.getElementById('s_vatNumber').value.trim();
    DB.settings.currency = document.getElementById('s_currency').value.trim() || 'AED';
    DB.settings.vatPercent = Number(document.getElementById('s_vatPercent').value) || 0;
    DB.settings.invoicePrefix = document.getElementById('s_invoicePrefix').value.trim() || 'INV-';
    if(ui._pendingLogo){ DB.settings.logoDataUrl = ui._pendingLogo; ui._pendingLogo = null; }
    persistSettings();
    showToast('Settings saved','success');
    render();
  });
}

/* =========================================================
   ARABIC TEXT RENDERING FOR PDF
   jsPDF cannot shape Arabic script on its own, so we render
   Arabic text on an offscreen canvas (the browser shapes it
   correctly) and drop the result into the PDF as an image.
   ========================================================= */
function renderArabicPNG(text, opts){
  opts = opts || {};
  const fontPx = opts.fontPx || 64, weight = opts.weight || 700, color = opts.color || '#10254B';
  const canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');
  ctx.font = `${weight} ${fontPx}px Cairo, sans-serif`;
  const metrics = ctx.measureText(text);
  const padX = fontPx*0.12;
  const w = Math.max(1, Math.ceil(metrics.width + padX*2));
  const h = Math.ceil(fontPx*1.5);
  canvas.width = w; canvas.height = h;
  ctx = canvas.getContext('2d'); // context resets after resizing canvas
  ctx.font = `${weight} ${fontPx}px Cairo, sans-serif`;
  ctx.fillStyle = color;
  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, w - padX, h/2);
  return { url: canvas.toDataURL('image/png'), w, h };
}
function addArabic(doc, text, xMM, yTopMM, heightMM, align, opts){
  const png = renderArabicPNG(text, opts);
  const mmW = (png.w/png.h) * heightMM;
  let x = xMM;
  if(align==='right') x = xMM - mmW;
  else if(align==='center') x = xMM - mmW/2;
  doc.addImage(png.url, 'PNG', x, yTopMM, mmW, heightMM);
  return mmW;
}
async function ensureArabicFontLoaded(){
  try{
    await document.fonts.load('700 64px Cairo');
    await document.fonts.load('400 64px Cairo');
    await document.fonts.ready;
  }catch(e){ /* if this fails, canvas falls back to a default font */ }
}

/* =========================================================
   PDF GENERATION (jsPDF) — bilingual Arabic + English,
   generated on demand, never stored
   ========================================================= */
async function generatePDF(inv, action){
 try{
  if(!window.jspdf || !window.jspdf.jsPDF){
    showToast('PDF library failed to load — check your internet connection and reload the page','error');
    return;
  }
  await ensureArabicFontLoaded();
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit:'mm', format:'a4' });
  const s = DB.settings;
  const marginX = 15;
  const pageW = doc.internal.pageSize.getWidth();
  const pageH = doc.internal.pageSize.getHeight();
  let y = 14;

  try{ doc.addImage(s.logoDataUrl, 'PNG', marginX, y-3, 18, 18); }catch(err){}

  doc.setFont('helvetica','bold'); doc.setFontSize(12.5); doc.setTextColor(16,37,75);
  doc.text(s.companyName, marginX+22, y+1);
  if(s.companyNameArabic) addArabic(doc, s.companyNameArabic, 195, y-3.5, 5, 'right', {weight:700});
  doc.setFont('helvetica','normal'); doc.setFontSize(8); doc.setTextColor(90,100,120);
  doc.text(s.tagline, marginX+22, y+5.5);
  const addrLines = doc.splitTextToSize(s.address, 90);
  doc.text(addrLines, marginX+22, y+10);
  let afterAddrY = y+10+addrLines.length*3.5;
  doc.text(`Tel: ${s.phone}  |  ${s.email}`, marginX+22, afterAddrY);
  afterAddrY += 4;
  if(s.vatNumber){ doc.text(`TRN: ${s.vatNumber}`, marginX+22, afterAddrY); }
  if(s.addressArabic) addArabic(doc, s.addressArabic, 195, y+3, 3.6, 'right', {weight:400,color:'#5a6478'});

  addArabic(doc, AR.taxInvoice, 195, y+8.5, 4.4, 'right', {weight:700,color:'#5a6478'});

  doc.setFillColor(16,37,75);
  doc.roundedRect(140, y+13, 55, 9, 1.5, 1.5, 'F');
  doc.setTextColor(255,255,255); doc.setFont('courier','bold'); doc.setFontSize(11);
  doc.text(inv.invoiceNumber, 167.5, y+18.7, {align:'center'});

  y = 48;
  doc.setDrawColor(16,37,75); doc.setLineWidth(0.6);
  doc.line(marginX, y, 195, y);
  y += 6;
  doc.setFontSize(9); doc.setTextColor(90,100,120); doc.setFont('helvetica','normal');
  doc.text(`Date: ${fmtDate(inv.date)}`, marginX, y);
  addArabic(doc, AR.date, marginX+22, y-3, 3.6, 'left', {weight:700,color:'#5a6478'});
  doc.text(`Status: ${inv.paymentStatus}`, 195, y, {align:'right'});
  y += 8;

  doc.setFontSize(8); doc.setTextColor(130,140,160); doc.setFont('helvetica','bold');
  doc.text('CUSTOMER', marginX, y);
  addArabic(doc, AR.customer, marginX+22, y-3, 3.4, 'left', {weight:700,color:'#828fa8'});
  doc.text('VEHICLE', 110, y);
  addArabic(doc, AR.vehicle, 110+18, y-3, 3.4, 'left', {weight:700,color:'#828fa8'});
  y += 5;
  doc.setFont('helvetica','normal'); doc.setFontSize(9.5); doc.setTextColor(30,40,60);
  doc.text(inv.customerName, marginX, y);
  doc.text(`${inv.vehicleBrand||''} ${inv.vehicleModel||''}`.trim() || '—', 110, y);
  y += 5;
  doc.text(inv.phone, marginX, y);
  doc.text(`Plate: ${inv.plateNumber||'—'}`, 110, y);
  y += 5;
  if(inv.email) { doc.text(inv.email, marginX, y); }
  doc.text(`Mileage: ${inv.mileage||'—'}`, 110, y);
  y += 10;

  /* ---- Items table, drawn manually with bilingual header ---- */
  const colX = { desc: marginX, qty: 120, price: 140, total: 168 };
  const colEnd = 195;
  const rowH = 7;
  const headerH = 11;
  function ensureSpace(needed){
    if(y + needed > pageH - 30){
      doc.addPage();
      y = 20;
      return true;
    }
    return false;
  }
  function drawTableHeader(){
    doc.setFillColor(16,37,75);
    doc.rect(marginX, y, colEnd-marginX, headerH, 'F');
    doc.setTextColor(255,255,255); doc.setFont('helvetica','bold'); doc.setFontSize(8.5);
    const enY = y+headerH-2.2;
    doc.text('Description', colX.desc+3, enY);
    doc.text('Qty', colX.qty, enY);
    doc.text('Unit Price', colX.price, enY);
    doc.text('Total', colX.total, enY);
    addArabic(doc, AR.description, colX.desc+3, y+1.3, 3.6, 'left', {weight:700,color:'#ffffff'});
    addArabic(doc, AR.qty, colX.qty, y+1.3, 3.6, 'left', {weight:700,color:'#ffffff'});
    addArabic(doc, AR.unitPrice, colX.price, y+1.3, 3.6, 'left', {weight:700,color:'#ffffff'});
    addArabic(doc, AR.amount, colX.total, y+1.3, 3.6, 'left', {weight:700,color:'#ffffff'});
    y += headerH;
  }
  drawTableHeader();
  doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(30,40,60);
  inv.items.forEach((it, idx)=>{
    const descLines = doc.splitTextToSize(it.desc || '', 98);
    const lineH = Math.max(rowH, descLines.length*4.6 + 2.4);
    if(ensureSpace(lineH)) drawTableHeader();
    if(idx % 2 === 1){ doc.setFillColor(247,249,252); doc.rect(marginX, y, colEnd-marginX, lineH, 'F'); }
    doc.setTextColor(30,40,60);
    doc.text(descLines, colX.desc+3, y+4.6);
    doc.text(String(it.qty), colX.qty, y+4.6);
    doc.text(fmtMoney(it.price), colX.price, y+4.6);
    doc.text(fmtMoney((Number(it.qty)||0)*(Number(it.price)||0)), colX.total, y+4.6);
    doc.setDrawColor(225,230,240); doc.setLineWidth(0.2);
    doc.line(marginX, y+lineH, colEnd, y+lineH);
    y += lineH;
  });
  y += 8;

  ensureSpace(46);
  const t = inv.totals;
  const boxX = 130;
  doc.setFontSize(9.5); doc.setTextColor(80,90,110); doc.setFont('helvetica','normal');
  doc.text('Subtotal', boxX, y); doc.text(fmtMoney(t.subtotal), 195, y, {align:'right'});
  addArabic(doc, AR.subtotal, boxX-3, y-3, 3.6, 'right', {weight:700,color:'#8493a8'});
  y += 5.5;
  doc.text(`Discount (${inv.discountPercent}%)`, boxX, y); doc.text('- '+fmtMoney(t.discountAmt), 195, y, {align:'right'});
  addArabic(doc, AR.discount, boxX-3, y-3, 3.6, 'right', {weight:700,color:'#8493a8'});
  y += 5.5;
  doc.text(`VAT (${inv.vatApplied?s.vatPercent:0}%)`, boxX, y); doc.text(fmtMoney(t.vatAmt), 195, y, {align:'right'});
  addArabic(doc, AR.vat, boxX-3, y-3, 3.6, 'right', {weight:700,color:'#8493a8'});
  y += 4;
  doc.setDrawColor(16,37,75); doc.line(boxX, y, 195, y);
  y += 6;
  doc.setFont('helvetica','bold'); doc.setFontSize(12); doc.setTextColor(16,37,75);
  doc.text('Grand Total', boxX, y); doc.text(fmtMoney(t.grandTotal), 195, y, {align:'right'});
  addArabic(doc, AR.grandTotal, boxX-3, y-4, 4.4, 'right', {weight:700,color:'#10254B'});

  y += 12;
  ensureSpace(24);
  doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(60,70,90);
  doc.text(`Payment Method: ${inv.paymentMethod}`, marginX, y);
  addArabic(doc, AR.paymentMethod, marginX, y-3.4, 3.4, 'left', {weight:700,color:'#8493a8'});
  if(inv.notes){
    y += 6;
    const noteLines = doc.splitTextToSize(`Notes: ${inv.notes}`, 180);
    ensureSpace(noteLines.length*4.5);
    doc.text(noteLines, marginX, y);
    y += noteLines.length*4.5;
  }
  y += 10;
  ensureSpace(10);
  doc.setDrawColor(200,206,220); doc.setLineWidth(0.2);
  doc.line(marginX, y, marginX+60, y);
  doc.setFontSize(8); doc.setTextColor(120,130,150);
  doc.text('Signature', marginX, y+4);
  addArabic(doc, AR.signature, marginX+60, y-4.2, 3.4, 'right', {weight:700,color:'#78869c'});

  const footY = Math.max(y+18, pageH-30);
  if(footY > pageH-15){ doc.addPage(); y = 20; }
  const finalFootY = Math.min(footY, pageH-17);
  doc.setDrawColor(220,225,235); doc.setLineWidth(0.3);
  doc.line(marginX, finalFootY-8, 195, finalFootY-8);
  addArabic(doc, AR.thankYou, 105, finalFootY-6.5, 4.4, 'center', {weight:700,color:'#10254B'});
  doc.setFont('helvetica','bold'); doc.setFontSize(10); doc.setTextColor(16,37,75);
  doc.text(`Thank you for choosing ${s.companyName}`, 105, finalFootY, {align:'center'});
  doc.setFont('helvetica','normal'); doc.setFontSize(7.5); doc.setTextColor(140,150,170);
  doc.text(`${s.tagline} · This is a computer-generated invoice.`, 105, finalFootY+5, {align:'center'});

  const filename = `${inv.invoiceNumber}_${inv.customerName.replace(/\s+/g,'_')}.pdf`;
  if(action==='download'){ doc.save(filename); showToast('PDF downloaded','success'); }
  else if(action==='print'){ doc.autoPrint(); window.open(doc.output('bloburl'), '_blank'); }
  else { window.open(doc.output('bloburl'), '_blank'); }
 }catch(err){
  console.error('PDF generation failed:', err);
  showToast('PDF failed: '+(err && err.message ? err.message : 'unknown error'), 'error');
 }
}

/* =========================================================
   GLOBAL ERROR SURFACING
   Any otherwise-silent JS error shows up as a toast, so issues
   can be diagnosed without opening the browser console.
   ========================================================= */
window.addEventListener('error', (e)=>{
  console.error('Uncaught error:', e.error || e.message);
  showToast('Error: ' + (e.error && e.error.message ? e.error.message : e.message), 'error');
});
window.addEventListener('unhandledrejection', (e)=>{
  console.error('Unhandled promise rejection:', e.reason);
  showToast('Error: ' + (e.reason && e.reason.message ? e.reason.message : String(e.reason)), 'error');
});

/* =========================================================
   BOOTSTRAP
   ========================================================= */
async function init(){
  document.getElementById('app').innerHTML = `<div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--navy-950);color:#fff;font-family:'Space Grotesk';font-size:14px;">Loading Noor Billing Pro…</div>`;
  initSupabase();
  const { data: { session: existingSession } } = await sb.auth.getSession();
  if(existingSession){
    session.loggedIn = true;
    await loadDB();
  }
  render();
}
init();
