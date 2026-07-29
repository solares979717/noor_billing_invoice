-- =========================================================
-- NOOR BILLING PRO — Supabase Database Schema
-- Noor Mechanical Engineering Services Est.
--
-- HOW TO USE:
-- 1. Open your Supabase project -> SQL Editor -> New query
-- 2. Paste this entire file and click "Run"
-- 3. Go to Authentication -> Users -> Add User to create your first login
-- =========================================================

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------
-- SETTINGS (single row: company profile & billing config)
-- ---------------------------------------------------------
create table if not exists public.settings (
  id int primary key default 1,
  company_name text default 'Noor Mechanical Engineering Services Est.',
  tagline text default 'Dubai''s Trusted Automotive Repair Specialists',
  address text default 'Ras Al Khor Industrial Area 1, Near 5 Street & 16A Street, Dubai, United Arab Emirates',
  phone text default '+971 50 630 6014',
  whatsapp text default '+971 55 544 9111',
  email text default 'Amjadkhan959515@gmail.com',
  vat_number text,
  vat_percent numeric default 5,
  currency text default 'AED',
  invoice_prefix text default 'INV-',
  invoice_seq int default 0,
  logo_url text,
  constraint single_row check (id = 1)
);
insert into public.settings (id) values (1) on conflict (id) do nothing;

-- ---------------------------------------------------------
-- INVOICES
-- Items and totals are stored as JSON — this matches what the
-- app builds in the browser and keeps the schema simple.
-- ---------------------------------------------------------
create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  invoice_number text not null unique,

  customer_name text not null,
  phone text not null,
  email text,
  vehicle_brand text,
  vehicle_model text,
  plate_number text,
  mileage text,

  items jsonb not null default '[]',              -- [{desc, qty, price}, ...]
  discount_percent numeric not null default 0,
  vat_applied boolean not null default true,
  totals jsonb not null default '{}',              -- {subtotal, discountAmt, afterDiscount, vatAmt, grandTotal}

  payment_status text check (payment_status in ('Paid','Partially Paid','Unpaid')) default 'Unpaid',
  payment_method text check (payment_method in ('Cash','Card','Bank Transfer','Apple Pay')),
  notes text,

  invoice_date date not null default current_date,
  created_at timestamptz default now()
);
create index if not exists idx_invoices_phone on public.invoices (phone);
create index if not exists idx_invoices_plate on public.invoices (plate_number);
create index if not exists idx_invoices_date on public.invoices (invoice_date);
create index if not exists idx_invoices_status on public.invoices (payment_status);
create index if not exists idx_invoices_number on public.invoices (invoice_number);

-- =========================================================
-- ROW LEVEL SECURITY
-- Only signed-in staff (any authenticated Supabase Auth user)
-- can read or write. Add users under Authentication -> Users.
-- =========================================================
alter table public.settings enable row level security;
alter table public.invoices enable row level security;

create policy "authenticated can read settings" on public.settings
  for select using (auth.role() = 'authenticated');
create policy "authenticated can update settings" on public.settings
  for update using (auth.role() = 'authenticated');

create policy "authenticated can read invoices" on public.invoices
  for select using (auth.role() = 'authenticated');
create policy "authenticated can insert invoices" on public.invoices
  for insert with check (auth.role() = 'authenticated');
create policy "authenticated can update invoices" on public.invoices
  for update using (auth.role() = 'authenticated');
create policy "authenticated can delete invoices" on public.invoices
  for delete using (auth.role() = 'authenticated');
