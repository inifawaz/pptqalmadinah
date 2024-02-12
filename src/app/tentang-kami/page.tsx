import FooterSection from "@/components/footer-section";
import AkademikSection from "@/components/tentang-kami/akademik-section";
import MuqodimahSection from "@/components/tentang-kami/muqadimah-section";
import ProfileSection from "@/components/tentang-kami/profil-section";
import ProgramEkstrakurikulerSection from "@/components/tentang-kami/program-ekstrakurikuler-section";
import ProgramKejarPaketSection from "@/components/tentang-kami/program-kejar-paket-section";
import ProgramKurikulumTahfidzSection from "@/components/tentang-kami/program-kurikulm-tahfidz-section";
import ProgramKurikulumDiniyyahSection from "@/components/tentang-kami/program-kurikulum-diniyah-section";
import StrukturOrganisasiSection from "@/components/tentang-kami/struktur-organisasi-section";
import TeachersSection from "@/components/tentang-kami/teachers-section";
import VisiMisiTujuanSection from "@/components/tentang-kami/visi-misi-tujuan-section";

export default function AboutUs() {
  return (
    <main>
      <MuqodimahSection />
      <ProfileSection />
      <StrukturOrganisasiSection />
      <VisiMisiTujuanSection />
      <TeachersSection />
      <AkademikSection />
      <ProgramKejarPaketSection />
      <ProgramKurikulumTahfidzSection />
      <ProgramKurikulumDiniyyahSection />
      <ProgramEkstrakurikulerSection />
      <FooterSection />
    </main>
  );
}
