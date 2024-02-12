export default function VisiMisiTujuanSection() {
  const misi = [
    `Mencetak alumni hafal Al-Qur’an 30 juz mutqin dengan bacaan yang fasih serta memiliki sanad yang bersambung sampai Rasulullah shallallahu ‘alaihi wa sallam.`,
    `Membekali santri dengan pengetahuan Bahasa Arab untuk diterapkan dalam percakapan aktif serta mampu memahami literatur Islam berbahasa Arab.`,
    `Mengajarkan santri ilmu-ilmu dasar agama Islam terutama aqidah yang murni sesuai dengan pemahaman As-Salaf.`,
    `Membangun keterkaitan ilmu dengan referensi kitab otentik ulama ahlus sunnah.`,
    `Menyiapkan santri yang siap untuk melanjutkan belajar kepada  para ulama atau ke jenjang yang lebih tinggi serta bisa berdakwah dan menjadi teladan di tengah masyarakat.`,
    `Menanamkan karakter-karakter islami dalam hubungannya kepada Allah ataupun kepada sesama makhluk.`,
    `Membangun komunikasi baik dan tali persaudaraan yang kuat antara pengajar ataupun sesama santri.`,
    `Membekali santri dengan ketrampilan agar memiliki kemandirian dalam berbagai aspek dan jenisnya.`,
  ];
  const tujuan = [
    `Santri bisa membaca Al-Qur’an dengan benar sesuai kaidah ilmu tajwid.`,
    `Santri hafal 30 juz Al-Qur’an dengan hafalan yang mutqin.`,
    `Santri memiliki sanad bacaan Al-Qur’an sampai kepada Rasullullah shallallahu ‘alaihi wa sallam.`,
    `Santri memiliki aqidah ahlus sunnah yang menyelamatkannya dari api neraka.`,
    `Santri dapat beribadah dengan baik dan benar.`,
    `Santri memahami dasar-dasar dari beberapa cabang ilmu agama.`,
    `Santri mengetahui tafsir ringkas dari surat-surat mufasshal.`,
    `Santri memiliki kemampuan untuk mengikuti pembelajaran dengan pengantar Bahasa Arab.`,
    `Santri mampu berinteraksi dengan kitab-kitab ulama secara langsung.`,
    `Santri dapat melanjutkan menuntut ilmu ke jenjang yang lebih tinggi.`,
    `Santri memiliki peran aktif dalam dakwah dengan mengajarkan ilmu yang telah dipelajari.`,
    `Santri mampu bergaul atau bermuamalah dengan baik dalam kehidupan bermasyarakat sesuai dengan nilai-nilai islami.`,
    `Santri memiliki sikap kemandirian dalam berbagai aspek dan jenisnya.`,
  ];
  return (
    <section
      id="visi-misi-tujuan"
      className="bg-gradient-to-b from-emerald-950 to-emerald-900 py-20"
    >
      <div className="px-4 max-w-7xl w-full mx-auto">
        <div className="border-l-4 border-yellow-600">
          <h1 className="text-2xl  font-semibold ml-2  text-white mb-8">
            Visi, Misi, dan Tujuan
          </h1>
        </div>
        <div className="space-y-4">
          <div>
            <h5 className="text-white text-lg font-medium">Visi</h5>
            <p>Membangun generasi pengemban Al Qur&apos;an yang Rabbani</p>
          </div>
          <div>
            <h5 className="text-white text-lg font-medium">Misi</h5>
            <ol className="list-decimal ml-6">
              {misi.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ol>
          </div>
          <div>
            <h5 className="text-white text-lg font-medium">Tujuan</h5>
            <ol className="list-decimal ml-6">
              {tujuan.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
