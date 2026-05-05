import PageLayout from "../../layouts/PageLayout";
import SectionTitle from "../components/SectionTitle";

export default function Videos() {
  return (
    <PageLayout>
      <SectionTitle title="Vídeos" />

      <div className="text-gray-400 mt-6">
        Em breve: vídeos carregados automaticamente do Instagram.
      </div>
    </PageLayout>
  );
}