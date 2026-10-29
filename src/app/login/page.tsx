"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ShieldCheck, Lock, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [emailOrUsername, setEmailOrUsername] = useState("admin@ecupfish.id");
  const [password, setPassword] = useState("superadmin123");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!emailOrUsername || !password) {
      setErrorMessage("Silakan masukkan email/username dan kata sandi.");
      return;
    }

    setIsLoading(true);

    // Simulated login delay
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to main superadmin dashboard
      router.push("/");
    }, 700);
  };

  const handleFillDemo = () => {
    setEmailOrUsername("admin@ecupfish.id");
    setPassword("superadmin123");
    setErrorMessage("");
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white selection:bg-amber-100 selection:text-amber-900">
      {/* LEFT SECTION (Dark Navy Brand Showcase - matching screenshot) */}
      <div className="relative w-full lg:w-1/2 bg-gradient-to-b from-[#07172C] via-[#0A1F3B] to-[#071527] text-white flex flex-col justify-between p-8 sm:p-12 lg:p-16 overflow-hidden min-h-[480px] lg:min-h-screen">
        {/* Subtle decorative glowing background circles */}
        <div className="absolute top-1/4 -left-16 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Ambient golden dust particles (like in user screenshot) */}
        <div className="absolute top-24 right-28 w-2 h-2 rounded-full bg-amber-400/60 blur-[1px]" />
        <div className="absolute top-44 right-16 w-1.5 h-1.5 rounded-full bg-amber-300/40" />
        <div className="absolute top-64 right-36 w-2.5 h-2.5 rounded-full bg-amber-400/50 blur-[0.5px]" />
        <div className="absolute bottom-48 left-20 w-1.5 h-1.5 rounded-full bg-blue-400/40" />

        {/* Top Header Tag */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 tracking-wider uppercase">
              Super Admin Portal
            </span>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline"></span>
        </div>

        {/* Center: Official High-Res eCupFish Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-500">
            <img
              src="/logo.png"
              alt="eCupFish Official Logo"
              className="w-full h-full object-contain select-none"
            />
          </div>
        </div>

        {/* Bottom Headline & Stats (matching screenshot layout) */}
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-extrabold tracking-tight text-white">
              e<span className="text-amber-400">Cup</span>
              <span className="text-[#38BDF8]">Fish</span>
            </span>
            <span className="text-[11px] text-slate-400 border-l border-slate-700 pl-2">
              Administrator Platform
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
            Kelola budidaya Anda, dari kolam sampai pasar.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-lg leading-relaxed">
            Satu dashboard untuk verifikasi mitra pembudidaya, monitoring transaksi lelang,
            dan penertiban akun pembeli eCupFish di seluruh Indonesia.
          </p>

          {/* Stats Bar */}
          <div className="pt-4 border-t border-white/10 flex items-center gap-8 text-white">
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">2.400+</p>
              <p className="text-[11px] text-slate-400 font-medium">Pembudidaya aktif</p>
            </div>
            <div className="w-px h-8 bg-white/15" />
            <div>
              <p className="text-xl sm:text-2xl font-extrabold text-white">18 Prov.</p>
              <p className="text-[11px] text-slate-400 font-medium">Jangkauan terbaik</p>
            </div>
          </div>
        </div>

        {/* Bottom Curved Wave Backdrop Decoration */}
        <div className="absolute -bottom-8 -left-8 -right-8 h-36 bg-gradient-to-t from-[#051121] to-transparent pointer-events-none rounded-t-[50%]" />
      </div>

      {/* RIGHT SECTION (Login Form - matching screenshot) */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-white min-h-[500px]">
        <div className="w-full max-w-md space-y-6">
          {/* Header Title & Subtitle */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Masuk ke akun Anda
            </h1>
            <p className="text-xs sm:text-sm text-[#0284C7] font-medium mt-1">
              Portal Khusus Super Admin eCupFish
            </p>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold animate-in fade-in">
              {errorMessage}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {/* Field 1: Email atau Username */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Email atau Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={emailOrUsername}
                  onChange={(e) => setEmailOrUsername(e.target.value)}
                  placeholder="admin@ecupfish.id"
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0284C7] focus:bg-white focus:ring-2 focus:ring-[#0284C7]/20 transition-all"
                />
              </div>
            </div>

            {/* Field 2: Kata Sandi */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Kata Sandi</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-4 pr-11 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0284C7] focus:bg-white focus:ring-2 focus:ring-[#0284C7]/20 transition-all font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 transition-colors"
                  title={showPassword ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-0 cursor-pointer"
                />
                <span>Ingat saya</span>
              </label>

              <button
                type="button"
                onClick={() => alert("Silakan hubungi tim IT/Devops eCupFish untuk reset akses Super Admin.")}
                className="text-blue-600 hover:text-blue-700 hover:underline font-medium"
              >
                Lupa kata sandi?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 bg-[#2563EB] hover:bg-[#1D4ED8] active:scale-[0.99] text-white font-semibold text-sm rounded-xl transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Memverifikasi Akses...</span>
                </>
              ) : (
                <>
                  <span>Masuk ke Dashboard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Footer Note (matching screenshot) */}
          <div className="pt-2 text-center space-y-3">
            <p className="text-xs text-slate-400 font-medium">
              Akun dibuat dan dikelola oleh admin eCupFish.
            </p>

            {/* Quick Demo Fill Helper Card */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-left text-xs flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-700">Akses Demo Super Admin</p>
                <p className="text-[11px] text-slate-500">Pasha · admin@ecupfish.id</p>
              </div>
              <button
                type="button"
                onClick={handleFillDemo}
                className="px-2.5 py-1 bg-white border border-slate-200 text-blue-600 font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-2xs text-[11px]"
              >
                Gunakan Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
