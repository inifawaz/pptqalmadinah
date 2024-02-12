import Image from "next/image";
import Link from "next/link";
import {
  TbBrandFacebook,
  TbBrandFacebookFilled,
  TbBrandInstagram,
  TbBrandTelegram,
  TbBrandTiktokFilled,
  TbBrandTwitterFilled,
  TbBrandYoutube,
  TbBrandYoutubeFilled,
} from "react-icons/tb";

export default function FooterSection() {
  return (
    <section className="bg-gray-950 py-20">
      <footer className="px-4 max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
        <div>
          <h5 className="text-lg text-white font-medium">Tentang Kami</h5>
          <div className="flex flex-col">
            <Link href={"/tentang-kami#profil"}>Profil</Link>
            <Link href={"/tentang-kami#struktur-oraganisasi"}>
              Struktur Organisasi
            </Link>
            <Link href={"/tentang-kami#visi-misi-tujuan"}>
              Visi, Misi, dan Tujuan
            </Link>
            <Link href={"/tentang-kami#tenaga-pengajar"}>Tenaga Pengajar</Link>
            <Link href={"/tentang-kami#akademik"}>Akademik</Link>
            <Link href={"/tentang-kami#program-kejar-paket"}>
              Program Kejar Paket
            </Link>
            <Link href={"/tentang-kami#program-kurikulum-tahfidz"}>
              Program Kurikulum Tahfidz
            </Link>
            <Link href={"/tentang-kami#program-kurikulum-diniyyah"}>
              Program Kurikulum Diniyyah
            </Link>
            <Link href={"/tentang-kami#program-ekstrakurikuler"}>
              Program Ekstrakurikuler
            </Link>
          </div>
        </div>
        <div>
          <h5 className="text-lg text-white font-medium">Informasi</h5>
          <div className="flex flex-col">
            <Link href={"/informasi/kegiatan-santri"}>Kegiatan Santri</Link>
            <Link href={"/informasi/program-donasi"}>Program Donasi</Link>
            <Link href={"/informasi/pendaftaran-santri-baru"}>
              Pendaftaran Santri Baru
            </Link>
          </div>
        </div>
        <div>
          <h5 className="text-lg text-white font-medium">
            Alamat dan Nomor Telepon
          </h5>
          <div className="flex flex-col">
            <Link href={"/"}>Jetis, Sawahan, Ngemplak, Boyolali 57375</Link>
            <a href="https://wa.me/6281327777364" target="_blank">
              0813 2777 7364
            </a>
            <p>Jam operasional: sabtu-kamis 08:00-14:00</p>
          </div>
        </div>
        <div>
          <h5 className="text-lg text-white font-medium">Media Sosial Kami</h5>
          <div className="flex gap-4">
            <a
              href={"https://www.instagram.com/pptqalmadinah/"}
              target="_blank"
            >
              <TbBrandInstagram size={"28px"} />
            </a>
            <a
              href={"https://www.facebook.com/pondokpesantrentahfidzulquran/"}
              target="_blank"
            >
              <TbBrandFacebookFilled className=" " size={"28px"} />
            </a>
            <a href={"https://www.youtube.com/@pptqalmadinah"} target="_blank">
              <TbBrandYoutubeFilled className="" size={"28px"} />
            </a>
            <a href={"/"}>
              <TbBrandTwitterFilled className="" size={"28px"} />
            </a>
            <a href={"/"}>
              <TbBrandTelegram className="" size={"28px"} />
            </a>
            <a href={"/"}>
              <TbBrandTiktokFilled className="" size={"28px"} />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
