import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ShieldAlert, Users, CheckCircle, Anchor, ArrowRight, RefreshCw, Activity } from 'lucide-react';

export default function Home() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/data/stats.json');
      setStats(response.data);
    } catch (err) {
      setError('Gagal memuat statistik skrining real-time.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="space-y-12 pb-12">
      <section className="bg-gradient-to-r from-bkk-blue to-bkk-teal text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 bg-bkk-accent/20 border border-bkk-accent text-bkk-accent rounded-full text-xs font-semibold uppercase tracking-wider">
              Portal Pelayanan Kesehatan Pelabuhan
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Sistem Informasi Skrining Menular (TB & HIV) Terintegrasi
            </h1>
            <p className="text-slate-100 text-base sm:text-lg leading-relaxed">
              Mewujudkan kekarantinaan kesehatan pelabuhan Cilacap yang siaga melalui deteksi dini serta e-sertifikat kesehatan digital.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/skrining"
                className="inline-flex items-center gap-2 bg-bkk-accent hover:bg-cyan-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition shadow-lg"
              >
                Mulai Skrining Mandiri <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/layanan"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-lg border border-white/20 transition"
              >
                Lihat Katalog Layanan
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900">Cakupan Skrining Pelabuhan</h2>
          <p className="text-slate-600 text-sm">Data kumulatif pemeriksaan kesehatan BKK Class I Cilacap</p>
        </header>

        {error && (
          <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex justify-between items-center mb-4">
            <span>{error}</span>
            <button onClick={fetchStats} className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded text-sm">
              <RefreshCw className="w-4 h-4" /> Coba Lagi
            </button>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-busy="true">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="h-28 bg-slate-200 animate-pulse rounded-xl"></div>
            ))}
          </div>
        ) : (
          stats && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <article className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-blue-50 text-bkk-blue rounded-lg"><Users className="w-6 h-6" /></div>
                <div>
                  <span className="block text-2xl font-extrabold text-slate-900">{stats.totalScreened.toLocaleString()}</span>
                  <span className="text-xs text-slate-500 font-medium">Total Terskrining</span>
                </div>
              </article>
              <article className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle className="w-6 h-6" /></div>
                <div>
                  <span className="block text-2xl font-extrabold text-slate-900">{stats.tbCleared.toLocaleString()}</span>
                  <span className="text-xs text-slate-500 font-medium">Bebas TB Paru</span>
                </div>
              </article>
              <article className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-cyan-50 text-bkk-teal rounded-lg"><ShieldAlert className="w-6 h-6" /></div>
                <div>
                  <span className="block text-2xl font-extrabold text-slate-900">{stats.hivScreened.toLocaleString()}</span>
                  <span className="text-xs text-slate-500 font-medium">Tes VCT HIV</span>
                </div>
              </article>
              <article className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
                <div className="p-3 bg-amber-50 text-amber-600 rounded-lg"><Anchor className="w-6 h-6" /></div>
                <div>
                  <span className="block text-2xl font-extrabold text-slate-900">{stats.activePorts}</span>
                  <span className="text-xs text-slate-500 font-medium">Pos Wilker Pelabuhan</span>
                </div>
              </article>
            </div>
          )
        )}
      </section>
    </div>
  );
}