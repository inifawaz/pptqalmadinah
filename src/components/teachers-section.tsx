import { HiUser, HiUsers } from "react-icons/hi2";

export default function TeachersSection() {
  return (
    <section className="bg-gradient-to-b from-emerald-950 to-emerald-900 py-20">
      <div className="px-4 max-w-7xl w-full mx-auto ">
        <div className="">
          <h1 className="text-2xl text-center font-semibold text-white mb-4">
            Para Tenaga Pengajar
          </h1>
          <div className="mb-8">
            <h5 className="text-xl font-medium  text-white">Tenaga Ahli</h5>
            <p className="mb-2">
              Kami memiliki beberapa tenaga ahli dalam bidang ilmu Al Qur'an
              yang telah diakui keilmuanya di dalam mapund di luar negri
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h6 className="flex items-center gap-1">
                  <HiUser className="text-yellow-600" />
                  <span className="">Ustadz Muhammad Nai'm, Lc., M.Pd.</span>
                </h6>
                <ul className="list-disc ml-10">
                  <li>
                    Murid Syaikh Ubaidullah bin 'Atha' Al Afghaniy rahimahulloh,
                    Ahli Qira'ah terkemuka di kota Madinah KSA
                  </li>
                  <li>Juri musabaqah Qur'an nasional</li>
                </ul>
              </div>
              <div>
                <h6 className="flex items-center gap-1">
                  <HiUser className="text-yellow-600" />
                  <span className="">Ustadz Kholifatul Amin, Lc.</span>
                </h6>
                <ul className="list-disc ml-10">
                  <li>
                    Murid Syaikh Muqri' Muhammad bin Ahmad bin Ibrahim Al
                    Marsyadiy Al Azhariy hafidzahulloh
                  </li>
                  <li>Murid beberapa muqri' di kota Madinah KSA</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <h5 className="text-xl font-medium  text-white">
              Tenaga Pengajar Diniyyah
            </h5>
            <p className="mb-2">
              Pengajar diniyyah adalah para asatidzah pilihan di pesantren Al
              Madinah yang memiliki kompetensi dalam bidang keilmuan yang
              diajarkan
            </p>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-4">
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Ustadz Abu Awanah Jauhari, Lc.</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Ustadz Muhammad Hamid Alwi, Lc.</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Ustadz Irfan Fakhrurrazi, Lc.</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Ustadz Abul Harits Hanif, Lc.</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Ustadz Hanifa, Lc.</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Ustadz Abul Laits Hafidz</span>
              </h6>
            </div>
          </div>
          <div className="mb-8">
            <h5 className="text-xl font-medium  text-white">
              Tenaga pengampu Hafalan
            </h5>
            <p className="mb-2">
              Pengampu hafalan Al Qur'an adalah para huffadz yang memiliki
              pengalaman dalam menghafal Al Qur'an, kebanyakan mereka adalah
              para alumni dari pondok pesantren Al Madinah
            </p>
            <div className="grid md:grid-cols-3 gap-x-6 gap-y-4">
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Abdha Agus Setiawan</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Abdulloh Hasan</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Ahmad Mahfudj</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Azhar</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Depriyanto</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Dimas</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Fredi Agus</span>
              </h6>
              <h6 className="flex items-center gap-1">
                <HiUser className="text-yellow-600" />
                <span className="">Muhaffidz Lukman</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
