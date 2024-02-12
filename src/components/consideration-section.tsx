import { HiCheckCircle } from "react-icons/hi2";

export default function ConsiderationSection() {
  const content = [
    {
      title: `Kemulian Al Qur'an`,
      desc: `Kami meperiotaskan pembelajaran Al Qur'an dengan menggabungkan
      tradisi pesantren dan pendekatan modern`,
    },
    {
      title: `Kurikulum Komprehensi`,
      desc: `Kurikulum kami mencakup tahfidz Al Qur'an, studi agama Islam, Bahasa Arab, dan pegembangan kepribadian`,
    },
    {
      title: `Tenaga Pengajar Terampil`,
      desc: `Dibimbing oleh para tenaga pengajar yang ahli dibidangnya, termasuk beberapa yang memiliki pengakuan internasional`,
    },
    {
      title: `Ijazah & Sertifikat`,
      desc: `Setiap santri yang lulus akan mendapatkan ijazah yang setara dengan SMP/SMA, ijazah pesantren dan sertifikat-sertifikat yang diakui sesuai dengan program`,
    },
  ];
  return (
    <section className="bg-gradient-to-b from-emerald-900 to-emerald-950 py-20">
      <div className="px-4 max-w-7xl w-full mx-auto">
        <h1 className="text-2xl font-semibold text-center text-white mb-8">
          Mengapa Memilih Kami?
        </h1>
        <div className="bg-emerald-950 p-6">
          <ul className="space-y-4">
            {content.map((e, i) => (
              <li key={i}>
                <h5 className="flex items-center gap-1">
                  <HiCheckCircle className="text-yellow-600 h-7 w-7" />
                  <span className="font-medium text-lg text-white">
                    {e.title}
                  </span>
                </h5>
                <p className="ml-8">{e.desc}</p>
              </li>
            ))}
          </ul>
        </div>
        <div></div>
      </div>
    </section>
  );
}
