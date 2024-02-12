"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HiRefresh } from "react-icons/hi";
import { HiBars3, HiChevronDown } from "react-icons/hi2";

export default function NavbarSection() {
  const tentangKamiMenu = [
    {
      href: "/tentang-kami#muqodimah",
      title: "Muqodimah",
    },
    {
      href: "/tentang-kami#profil",
      title: "Profil",
    },
    {
      href: "/tentang-kami#struktur-organisasi",
      title: "Struktur Organisasi",
    },
    {
      href: "/tentang-kami#visi-misi-tujuan",
      title: "Visi, Misi, dan Tujuan",
    },
    {
      href: "/tentang-kami#tenaga-pengajar",
      title: "Tenaga Pengajar",
    },
    {
      href: "/tentang-kami#akademik",
      title: "Akademik",
    },
    {
      href: "/tentang-kami#program-kejar-paket",
      title: "Program Kejar Paket (SMP/SMA)",
    },
    {
      href: "/tentang-kami#program-kurikulum-tahfidz",
      title: "Program Kurikulum Tahfidz",
    },
    {
      href: "/tentang-kami#program-kurikulum-diniyyah",
      title: "Program Kurikulum Diniyyah",
    },
    {
      href: "/tentang-kami#program-ekstrakurikuler",
      title: "Program Ekstrakurikuler",
    },
  ];

  const informasiMenu = [
    {
      href: "/informasi/kegiatan-santri",
      title: "Kegiatan Santri",
    },
    {
      href: "/informasi/program-donasi",
      title: "Program Donasi",
    },
    {
      href: "/informasi/pendaftaran-santri-baru",
      title: "Pendaftaran Santri Baru",
    },
  ];

  const elRef = useRef<HTMLDivElement>(null);

  const showNavResponsive = () => {
    // const el = document.getElementById("navbar-responsive");
    if (elRef?.current) {
      elRef.current.classList.toggle("hidden");
    }
  };

  return (
    <div className="bg-emerald-900 fixed shadow-xl z-50 w-full">
      <div className="max-w-7xl hidden md:flex mx-auto w-full px-4 py-4  justify-between items-center">
        <div>
          <Image
            src={"/logo.png"}
            alt="logo pptq al madinah"
            height={56}
            width={200}
          />
        </div>
        <div className="flex gap-8 items-center">
          <Link className="font-medium text-white" href={"/"}>
            Home
          </Link>
          <div className="relative group ">
            <h5 className="flex gap-1 cursor-default text-white items-center">
              <span>Tentang Kami</span>
              <HiChevronDown className="" strokeWidth={1.5} />
            </h5>
            <div className="absolute z-10 right-0 invisible shadow-2xl group-hover:visible flex flex-col w-80">
              {tentangKamiMenu.map((e, i) => (
                <Link
                  key={i}
                  className="px-4 py-3 hover:bg-emerald-800 transition-colors  bg-emerald-950"
                  href={e.href}
                >
                  {e.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative group">
            <h5 className="flex gap-1 cursor-default text-white items-center">
              <span>Informasi</span>
              <HiChevronDown className="" strokeWidth={1.5} />
            </h5>
            <div className="absolute z-10 right-0 invisible shadow-2xl group-hover:visible flex flex-col w-80">
              {informasiMenu.map((e, i) => (
                <Link
                  key={i}
                  className="px-4 py-3 hover:bg-emerald-800 transition-colors  bg-emerald-950"
                  href={e.href}
                >
                  {e.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Nav Responsive */}
      <div className="max-w-7xl md:hidden flex mx-auto w-full px-4 py-4   justify-between items-center">
        <div>
          <Image
            src={"/logo.png"}
            alt="logo pptq al madinah"
            height={56}
            width={200}
          />
        </div>
        <div
          onClick={showNavResponsive}
          className="bg-emerald-800 p-1 absolute right-4"
        >
          <HiBars3 className="h-8 w-8  text-white" />
        </div>
      </div>
      <div
        ref={elRef}
        id="navbar-responsive"
        onClick={showNavResponsive}
        className="bg-emerald-950 md:hidden  space-y-2"
      >
        <Link href={"/"} className="font-medium text-white block px-4 py-2">
          Home
        </Link>
        <div>
          <p className="text-white px-4 ">Tentang Kami</p>
          <div className="flex flex-col">
            {tentangKamiMenu.map((e, i) => (
              <Link key={i} className="text-sm  px-6 py-1" href={e.href}>
                {e.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-4">
          <p className="text-white px-4 ">Informasi</p>
          <div className="flex flex-col">
            {informasiMenu.map((e, i) => (
              <Link key={i} className="text-sm  px-6 py-1" href={e.href}>
                {e.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
