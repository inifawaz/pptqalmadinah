import Link from "next/link";
import { TbBrandWhatsapp } from "react-icons/tb";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-950 to-emerald-900 py-20">
      <div className="px-4 max-w-7xl w-full mx-auto">
        <div>
          <h1 className="text-2xl text-center font-semibold text-white mb-8">
            Bergabunglah dengan kami dan jadilah bagian dari perjalan pendidikan
            putra putri anda yang menginspirasi dan memberdayakan. Raih prestesi
            akademis dan keterampilan yang akan membawa kebaikan besar in sya
            Allah
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              href={"/informasi/pendaftaran-santri-baru"}
              className="bg-yellow-600 py-3 px-6 block text-center font-medium text-white "
            >
              Pendaftaran Santri Baru
            </Link>
            <a
              href="https://wa.me/6281327777364"
              target="_blank"
              className="flex gap-2 py-3 px-6 bg-emerald-800 font-medium text-white items-center justify-center"
            >
              <TbBrandWhatsapp className="h-6 w-6" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
