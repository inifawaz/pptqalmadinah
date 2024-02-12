import FooterSection from "@/components/footer-section";
import Image from "next/image";

export default function ProgramDonasiSection() {
  return (
    <>
      <section
        id="muqodimah"
        className="bg-gradient-to-b from-emerald-900 to-emerald-950 py-20"
      >
        <div className="px-4 max-w-7xl w-full mx-auto">
          <div className="border-l-4 border-yellow-600">
            <h1 className="text-2xl  font-semibold ml-2  text-white mb-8">
              Mari Berkontribusi Pada Program Donasi Kami
            </h1>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="shadow-2xl bg-emerald-950">
              <div className=" aspect-square relative z-10">
                <Image
                  src={"/puasa.jpg"}
                  alt="Program Donasi Buka Puasa Bersama"
                  fill
                />
              </div>
              <div className="p-5 ">
                <h5 className="text-lg text-white font-medium">
                  Buka Puasa Senin & Kamis
                </h5>
                <p>
                  Diantara amalan sunnah kami arahkan santri untuk
                  mengamalkannya adalah puasa-puasa sunnah.
                </p>
                <br />
                <p>
                  Alhamdulillah, setiap Senin & Kamis ada puluhan santri yang
                  mengamalkan puasa sunnah, kami membuka kesempatan untuk ikut
                  andil dalam amalan yang mulia ini dengan berdonasi untuk
                  tambahan menu buka puasa, agar santri bertambah semangat untuk
                  menjankan sunnah ini.
                </p>
                <br />
                <p>
                  Tranfer Donasi Terbaik Anda melalui rekening : BSI 717 2080
                  131 PPTQ AL MADINAH
                  <br />
                  Konfirmasi : WhatsApp 08132 7777 364
                  <br />
                  Buka Puasa - Kode Transfer : 001
                </p>
              </div>
            </div>
            <div className="shadow-2xl bg-emerald-950">
              <div className=" aspect-square relative">
                <Image
                  src={"/laptop.jpg"}
                  alt="Program Donasi Buka Puasa Bersama"
                  fill
                />
              </div>
              <div className="p-5 ">
                <h5 className="text-lg text-white font-medium">
                  Laptop Pesantren - Ekstrakulikuler
                </h5>
                <p>
                  Tidak diragukan lagi bahwa penguasaan teknologi di masa ini
                  sangat diperlukan, diantara program kami adalah membekali
                  santri penguasaan aplikasi office dalam ekstrakuliler
                  komputer.
                </p>
                <br />
                <p>
                  Setidaknya dibutuhkan 20 laptop agar program bisa efektif dan
                  efisien, Alhamdulillah telah ada 10 unit laptop, kami membuka
                  kesempatan donasi untuk melengkapi unit yang kurang.
                </p>
                <br />
                <p>
                  Tranfer Donasi Terbaik Anda melalui rekening : BSI 717 2080
                  131 PPTQ AL MADINAH
                  <br />
                  Konfirmasi : WhatsApp 08132 7777 364
                  <br />
                  <p>Laptop Ekskul - Kode Transfer : 002</p>
                </p>
              </div>
            </div>
            <div className="shadow-2xl bg-emerald-950">
              <div className=" aspect-square relative">
                <Image
                  src={"/tanah.jpg"}
                  alt="Program Donasi Buka Puasa Bersama"
                  fill
                />
              </div>
              <div className="p-5  ">
                <h5 className="text-lg text-white font-medium">
                  Pembebasan Tanah
                </h5>
                <p>
                  Tanah srategis seluas 3471 m yang terletak berdampingan dengan
                  pesantren (selatan) beberapa kali ditawarkan kepada kami,
                  namun karena tidak adanya dana untuk membeli sampai saat ini
                  belum kami beli.
                </p>
                <br />
                <p>
                  Kami mengajak Anda untuk ikut membebaskan tanah ini, yang in
                  syaa Allah akan menjadi amal jariyyah untuk Anda.
                </p>
                <br />
                <p>
                  Tranfer Donasi Terbaik Anda melalui rekening : BSI 717 2080
                  131 PPTQ AL MADINAH
                  <br />
                  Konfirmasi : WhatsApp 08132 7777 364
                  <br />
                  <p>Wakaf Tanah - Kode Transfer : 003</p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
