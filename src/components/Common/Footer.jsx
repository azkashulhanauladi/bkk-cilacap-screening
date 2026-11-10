import React from 'react';
import { Shield, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-6 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
            <Shield className="w-6 h-6 text-bkk-accent" />
            <span>Balai Kekarantinaan Kesehatan Class I Cilacap</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Unit Pelaksana Teknis Kementerian Kesehatan pencegahan dan pengendalian penyakit menular (TB & HIV) di Pelabuhan Cilacap.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Kontak Pelabuhan</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-bkk-accent shrink-0 mt-0.5" />
              <span>Jl. Pelabuhan Tanjung Intan No. 1, Cilacap, Jawa Tengah</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-bkk-accent shrink-0" />
              <span>Call Center Karantina Cilacap</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Tautan Cepat</h3>
          <ul className="space-y-1.5 text-sm">
            <li><a href="/skrining" className="hover:text-bkk-accent transition">Form Skrining Mandiri</a></li>
            <li><a href="/layanan" className="hover:text-bkk-accent transition">Katalog Layanan Medis</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 border-t border-slate-800 pt-4 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Balai Kekarantinaan Kesehatan Class I Cilacap.
      </div>
    </footer>
  );
}