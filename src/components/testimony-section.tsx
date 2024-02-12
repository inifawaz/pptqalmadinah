export default function TestimonySection() {
  const content = [
    {
      title: `Thalhah Ubaidillah - Jawa Tengah`,
      desc: `"Alhamdulillah, dalam waktu satu setengah tahun saya telah hafal 21 juz di pondok ini, dengan kemudahan dan pertolongan dari Allah"`,
    },
    {
      title: `Abdulloh Widodo - Jawa Timur`,
      desc: `"Masya Allah, di pondok ini saya menemukan kenyamanan dengan cara sederhana, melatih keterampilan, dan belajar menjadi orang yang bermanfaat untuk saudaranya"`,
    },
    {
      title: `Ahmad Jibril`,
      desc: `"Alhamdulillah, saya bisa paham aqidah ahlus sunnah di pondok ini, sehingga saya tau penyimpangan-penyimpangan di zaman ini untuk saya hindari"`,
    },
  ];
  return (
    <section className="bg-gradient-to-b from-emerald-900 to-emerald-950 py-20">
      <div className="px-4 max-w-7xl w-full mx-auto">
        <div>
          <h1 className="text-2xl text-center font-semibold text-white mb-8">
            Apa Kata Para Santri?
          </h1>
          <div className="grid md:grid-cols-3 gap-6">
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
      </div>
    </section>
  );
}
