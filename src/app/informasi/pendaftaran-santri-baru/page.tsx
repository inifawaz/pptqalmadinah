"use client";
import FooterSection from "@/components/footer-section";
import { useEffect, useState } from "react";

export default function PendaftaranSantriBaru() {
  return (
    <>
      <section
        id="muqodimah"
        className="bg-gradient-to-b from-emerald-900 to-emerald-950 py-20"
      >
        <div className="px-4 max-w-7xl w-full mx-auto">
          <div className="border-l-4 border-yellow-600">
            <h1 className="text-2xl  font-semibold ml-2  text-white mb-8">
              Pendaftaran Santri Baru
            </h1>
          </div>
          <div className="bg-emerald-950 p-5 mb-6">
            <h5 className="mb-4 text-lg text-white font-medium">
              Pendaftaran Santri Baru 2024/2025 (DITUTUP)
            </h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-emerald-900">
                <p>Jumlah Pendaftar</p>
                <p className="text-2xl font-semibold">54</p>
              </div>
              <div className="p-5 bg-emerald-900">
                <p>Pendaftar Diterima</p>
                <p className="text-2xl font-semibold">22</p>
              </div>
            </div>
          </div>
          <div className="bg-emerald-950 p-5">
            <div></div>
            <h5 className="mb-2 text-lg text-white font-medium">
              DIBUKA Pendaftaran Santri Baru Tahun Ajaran 2025/2026 INDEN
            </h5>
            <ul className="list-decimal ml-5 mb-4">
              <li>Pendaftaran ini bersifat inden</li>
              <li>
                Pendaftar akan dimasukkan ke dalam grup setelah PPDB resmi
                dibuka
              </li>
              <li>Pelengkapan berkas dilakukan setelah PPDB resmi dibuka</li>
            </ul>
            <div className="mb-4">
              <h5 className="font-medium text-white">Syarat Pendaftaran :</h5>
              <ul className="ml-5 list-decimal">
                <li>Usia 12 - 15 tahun per-Juli 2025</li>
                <li>Membayar biaya pendaftaran</li>
                <li>Surat Bebas Hepatitis (HBSag)</li>
                <li>Ijazah/Surat Keterangan Aktif Belajar </li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium text-white">Tes Seleksi :</h5>
              <ul className="list-decimal ml-5">
                <li>Kemampuan membaca Al Qur'an</li>
                <li>Menghafal 1 halaman Al Qur'an dalam waktu 60 menit</li>
                <li>Materi diniyyah dasar</li>
                <li>Tulisan Arab & Latin</li>
                <li>Tes IQ</li>
                <li>Tes Wawancara Santri & Wali Santri</li>
              </ul>
            </div>
            <div className="mt-4">
              <p>
                Link Pendaftaran :{" "}
                <span>
                  <a
                    className="text-yellow-600"
                    href="https://forms.gle/ULGimxog4BeviLgP8"
                  >
                    https://forms.gle/ULGimxog4BeviLgP8
                  </a>
                </span>
              </p>
              <p>Informasi lebih lanjut : WhatsApp 08132 7777 364</p>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
