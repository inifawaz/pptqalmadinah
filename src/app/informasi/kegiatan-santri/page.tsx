import FooterSection from "@/components/footer-section";

export default function KegiatanSantri() {
  const content = [
    `Hafalan Al Qur’an`,
    `Ujian Kenaikan Juz`,
    `Ujian Kenaikan Marhalah Qur’an`,
    `Tahsin Jama’iy`,
    `Tahsin Fardiy`,
    `Hafalan Matan`,
    `Ujian Kenaikan Marhalah Matan`,
    `Pelajaran Diniyyah Khusus`,
    `Kajian Umum`,
    `Ekstrakurikuler Futsal`,
    `Ekstrakurikuler Panahan`,
    `Ekstrakurikuler Komputer`,
    `Ekstrakurikuler Pelatihan Imam, Ceramah, dan Khutbah`,
    `Piket Kebersihan Harian`,
    `Kerja Bakti Akbar – Bulanan`,
    `Shalat Malam`,
    `Menunggu Iqamah dengan Tilawah & Doa`,
    `Buka Puasa`,
    `Tarawih Ramadhan 30 Juz`,
    `Membaca Surah Al Kahfi`,
  ];
  return (
    <>
      <section
        id="muqodimah"
        className="bg-gradient-to-b from-emerald-900 to-emerald-950 py-20"
      >
        <div className="px-4 max-w-7xl w-full mx-auto">
          <div className="border-l-4 border-yellow-600">
            <h1 className="text-2xl  font-semibold ml-2  text-white mb-8">
              Kegiatan Santri
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {content.map((e, i) => (
              <div
                key={i}
                className="shadow-2xl bg-emerald-900 overflow-hidden"
              >
                <div className=" aspect-square relative">
                  {/* <Image
                  src={"/puasa.jpg"}
                  alt="Program Donasi Buka Puasa Bersama"
                  fill
                /> */}
                </div>
                <div className="p-5 bg-emerald-950 h-full ">
                  <h5 className=" text-white font-medium">{e}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
