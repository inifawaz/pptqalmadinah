import Link from "next/link";
import { TbBrandWhatsapp } from "react-icons/tb";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-900 to-emerald-950 md:py-60 py-40  ">
      <div className="px-4 max-w-7xl w-full mx-auto md:grid grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl text-white font-semibold mb-4">
            Membangun Generasi Pengemban Al Qur'an Yang Rabbani
          </h1>
          <p className="mb-8">
            Kami berkomitmen mendidik putra putri anda untuk mepelajari,
            memahami, dan mengamalkan ilmu agama serta memberikan manfaat kepada
            agama dan bangsa dengan kurikulum yang dirancang khusus untuk visi
            tersebut
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
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
        <div></div>
      </div>
    </section>
  );
}
