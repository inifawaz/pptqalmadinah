export default function AdvantageSection() {
  const content = [
    {
      title: `Tahfdiz Al Qur'an`,
      desc: `Menghafal dan mentadaburi Al Qur'an dengan sanad yang bersambung sampai kepada Nabi shallahu'alaih wa sallam`,
    },
    {
      title: `Studi Agama Islam`,
      desc: `Aqidah, tafsir, hadits, akhlak, fiqih, sirah, tajwid, dan ilmu bahasa dasar yang in syaa Allah cukup untuk melanjutkan studi ke jenjang yang lebih tinggi`,
    },
    {
      title: `Bahasa Arab Aktif`,
      desc: `Pengjaran Bahasa Arab dengan metode mubasyarah untuk berkomunikasi aktif`,
    },
    {
      title: `Ekstrakurikuler`,
      desc: `Ekstrakurikuler komputer, renang, panahan, dan pelatihan ceramah, khutbah dan imam untuk mewujudkan kemandirian santri dalam berbagai aspek dan bidang`,
    },
  ];
  return (
    <section className="bg-gradient-to-b from-emerald-950 to-emerald-900 py-20">
      <div className="px-4 max-w-7xl w-full mx-auto">
        <div>
          <h1 className="text-2xl text-center font-semibold text-white mb-8">
            Program Unggulan Kami
          </h1>
          <div className="grid md:grid-cols-4 gap-6">
            {content.map((e, i) => (
              <div
                key={i}
                className="p-5 bg-emerald-950 border-2 border-emerald-800"
              >
                <h5 className="text-lg font-medium text-white">{e.title}</h5>
                <p>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
