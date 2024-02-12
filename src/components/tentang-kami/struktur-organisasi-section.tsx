import { HiUser } from "react-icons/hi2";

export default function StrukturOrganisasiSection() {
  const content = [
    {
      title: "Mudir",
      desc: `Muhammad Na'im, Lc., M.Pd.`,
    },
    {
      title: "Wakil Mudir & Koordinator",
      desc: `Hafidz Cahaya`,
    },
    {
      title: "Bendahara",
      desc: `Abdha Agus`,
    },
    {
      title: "Sekretaris",
      desc: `Depriyanto`,
    },
    {
      title: "Kurikulum",
      desc: `Tim Kurikulum PPTQ Al Madinah`,
    },
    {
      title: "Ketahfidzan",
      desc: `Kholifatul Amin, B.sh`,
    },
    {
      title: "Kesantrian",
      desc: `Ahmad Mahfudj`,
    },
    {
      title: "Humas",
      desc: `Lukman Abdulloh`,
    },
    {
      title: "Sarpras",
      desc: `Fredi Agus`,
    },
    {
      title: "Kesehatan",
      desc: `Azhar`,
    },
  ];
  return (
    <section
      id="struktur-organisasi"
      className="bg-gradient-to-b from-emerald-900 to-emerald-950 py-20"
    >
      <div className="px-4 max-w-7xl w-full mx-auto">
        <div className="border-l-4 border-yellow-600">
          <h1 className="text-2xl  font-semibold ml-2  text-white mb-8">
            Struktur Organisasi
          </h1>
        </div>
        <ul className="space-y-4">
          {content.map((e, i) => (
            <li key={i}>
              <h5 className="text-white font-medium">{e.title}</h5>
              <p className="flex gap-1 items-center">
                <HiUser className="text-yellow-600" />
                <span>{e.desc}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
