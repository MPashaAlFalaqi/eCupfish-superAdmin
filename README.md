# eCupFish - Super Admin Dashboard 🐟

Frontend Dashboard khusus **Super Admin** untuk ekosistem **eCupFish**, dirancang secara spesifik untuk mengelola:
1. **Akun Pembudidaya (Mitra / Breeders)**: Verifikasi izin farm, review KTP, persetujuan/penolakan pendaftaran, dan penangguhan (suspend) akun.
2. **Akun Pembeli (Buyers)**: Pemantauan aktivitas belanja & lelang, penindakan pelanggaran lelang (bid & run), serta pemblokiran/pembukaan blokir akun.

---

## 🔐 Halaman Login Super Admin (`/login`)

Telah dibuat halaman login split-screen sesuai dengan desain screenshot mitra yang dikirimkan:
- **Sisi Kiri (Dark Navy Showcase)**:
  - Menggunakan logo resmi beresolusi tinggi **eCupFish** (ikan cupang emas + cipratan air).
  - Partikel ambient emas dan lekukan ombak elegan di bagian bawah.
  - Slogan: *"Kelola budidaya Anda, dari kolam sampai pasar."*
  - Statistik ekosistem: `2.400+ Pembudidaya aktif` & `18 Prov. Jangkauan terbaik`.
- **Sisi Kanan (Form Login)**:
  - Form modern dengan field *Email atau Username* dan *Kata Sandi* (dengan fitur toggle show/hide).
  - Checkbox *Ingat saya* dan tombol bantuan *Lupa kata sandi?*.
  - Tombol biru elegan *"Masuk ke Dashboard"* yang memvalidasi dan mengarahkan langsung ke dashboard utama.
  - Tombol cepat *"Gunakan Demo"* untuk mengisi kredensial secara instan.

### Akun Demo Super Admin:
- **Email / Username**: `admin@ecupfish.id`
- **Kata Sandi**: `superadmin123`

---

## 🎨 Color Palette & Desain Identitas

- **Sidebar Dark Navy**: `#0B1A30` & `#0E2442`
- **Active Navigation Item**: `#163359` dengan icon emas/amber `#F59E0B`
- **Hero / Highlight Gradient Card**: Gradient `#0B213F` -> `#12386A`
- **Canvas / Background**: Light Cool Gray `#F4F7FB`
- **Card Background**: Clean White `#FFFFFF` dengan soft border `#E2E8F0`
- **Status Badges**:
  - 🟢 **Aktif**: `bg-[#DCFCE7] text-[#15803D]`
  - 🟡 **Menunggu Verifikasi**: `bg-[#FEF3C7] text-[#B45309]` (dengan pulse dot amber)
  - 🔴 **Ditangguhkan / Diblokir**: `bg-[#FEE2E2] text-[#B91C1C]`
  - 🔵 **Mitra & Kemas**: `bg-blue-50 text-blue-700`

---

## 🚀 Fitur Utama Super Admin

### 1. Dashboard Ringkasan (Overview)
- **4 Metric Cards**: Total Pengguna, Mitra Pembudidaya, Akun Pembeli, Akun Ditangguhkan.
- **Grafik Bar 7 Hari Terakhir**: Hari Sabtu di-highlight dengan aksen emas (`#F59E0B`).
- **Verifikasi Prioritas Mitra**: Quick action review berkas mitra teranyar.
- **Tabel Akun Perlu Tindakan Segera**: Daftar cepat pembudidaya/pembeli yang butuh moderasi.
- **Distribusi Sentra Mitra**: Persebaran sentra budidaya per provinsi.

### 2. Kelola Akun Pembudidaya (Mitra)
- Filter: *Semua Mitra*, *Menunggu Verifikasi*, *Aktif*, *Ditangguhkan*.
- Pencarian real-time & sorting performa.
- Review modal: Pratinjau KTP, foto farm, NIK, dan data rekening pencairan bank.
- Aksi: Setujui kemitraan, tolak pendaftaran, suspend akun, buka suspend, tambah mitra manual, dan export CSV.

### 3. Kelola Akun Pembeli
- Filter: *Semua Pembeli*, *Pembeli Aktif*, *Akun Diblokir*.
- Pemantauan histori transaksi nominal rupiah (cth: `Rp 14.500.000`) dan rekam jejak menang lelang.
- Tindakan pemblokiran (ban) akun untuk kasus *bid & run* lelang tanpa pembayaran.
- Tambah akun pembeli manual dan export CSV.

### 4. Log Aktivitas & Audit Akun
- Rekam jejak seluruh keputusan Super Admin (persetujuan, suspend, blokir).

---

## 💻 Cara Menjalankan

```bash
# Masuk ke folder project
cd "C:\Users\pasha\.gemini\antigravity\scratch\ecupfish-superadmin"

# Mode Development
npm run dev
```

Akses:
- **Login Page**: `http://localhost:3000/login`
- **Dashboard**: `http://localhost:3000/`
