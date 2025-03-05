"use client";
import { useState } from "react";

export default function PriceCalculator() {
  const [dimensions, setDimensions] = useState({ width: "", height: "" });
  const [price, setPrice] = useState(null);
  const [material, setMaterial] = useState("mdf"); 
  const MATERIAL_PRICE = {
    mdf: 0.05,      // MDF
    wood: 0.10,     // Ahşap
    medium: 0.08,   // Orta kalite
    expensive: 0.12 // En pahalı
  };

  const handleChange = (e) => {
    const value = e.target.value === "" ? "" : Number(e.target.value);
    setDimensions({ ...dimensions, [e.target.name]: value });
  };

  const handleMaterialChange = (e) => {
    setMaterial(e.target.value);
  };

  const calculatePrice = (e) => {
    e.preventDefault();
    const { width, height } = dimensions;

    if (!width || !height) {
      alert("Lütfen tüm ölçüleri girin.");
      return;
    }

    const area = width * height; // Metrekare hesaplama
    const materialPrice = MATERIAL_PRICE[material]; // Seçilen malzeme fiyatı
    setPrice(area * materialPrice); // Alan ile malzeme fiyatını çarpıyoruz
  };

  return (
    <section className="relative py-12">
      <div className="max-w-md mx-auto p-4 border rounded shadow">
        <h2 className="text-xl font-bold mb-4">Mobilya Fiyat Hesaplama</h2>
        <form onSubmit={calculatePrice} className="space-y-3">
          <input
            type="number"
            name="width"
            placeholder="Genişlik (cm)"
            value={dimensions.width}
            onChange={handleChange}
            className="border p-2 w-full text-black"
          />
          <input
            type="number"
            name="height"
            placeholder="Yükseklik (cm)"
            value={dimensions.height}
            onChange={handleChange}
            className="border p-2 w-full text-black"
          />
          <select
            name="material"
            value={material}
            onChange={handleMaterialChange}
            className="border p-2 w-full text-black"
          >
            <option value="mdf">MDF (En Ucuz)</option>
            <option value="wood">Ahşap (Orta Kalite)</option>
            <option value="medium">Orta Kalite (Daha Ucuz)</option>
            <option value="expensive">En Pahalı Ahşap</option>
          </select>
          <button type="submit" className="bg-cyan-400 text-white p-2 rounded w-full">
            Hesapla
          </button>
        </form>
        {price !== null && (
          <p className="mt-4 text-lg font-semibold">Tahmini Fiyat: {price.toFixed(2)} TL</p>
        )}
      </div>
    </section>
  );
}