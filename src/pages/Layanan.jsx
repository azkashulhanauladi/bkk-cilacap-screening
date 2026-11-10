import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, AlertCircle, RefreshCw, Activity, ShieldCheck, FileCheck } from 'lucide-react';

export default function Layanan() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchServices = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('/data/services.json');
      setServices(response.data);
    } catch (err) {
      setError('Gagal memuat katalog layanan karantina.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const filteredServices = services.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <header className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900">Katalog Layanan & Edukasi Skrining</h1>
        <p className="text-slate-600 mt-2">Pemeriksaan TB, HIV, dan penerbitan sertifikat medis BKK Cilacap.</p>
      </header>

      <div className="relative w-full md:w-96 mx-auto">
        <Search className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Cari layanan..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-bkk-teal focus:outline-none text-sm"
        />
      </div>

      {error && (
        <div role="alert" className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex justify-between items-center">
          <span>{error}</span>
          <button onClick={fetchServices} className="bg-red-600 text-white px-3 py-1 rounded text-xs">Coba Lagi</button>
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-busy="true">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-48 bg-slate-200 animate-pulse rounded-xl"></div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredServices.map((item) => (
            <article key={item.id} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-700 rounded-full">{item.category}</span>
              <h2 className="text-xl font-bold text-slate-900 mt-3 mb-2">{item.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
              <div className="text-xs text-slate-500 pt-2 border-t">
                <p><strong>Estimasi:</strong> {item.duration}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}