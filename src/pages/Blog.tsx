import PageLayout from "../../layouts/PageLayout";
import SectionTitle from "../components/SectionTitle";

export default function Blog() {
  return (
    <PageLayout>
      <SectionTitle title="Blog" />

      <div className="text-gray-400 mt-6">
        Em breve: artigos, insights e conteúdos sobre tecnologia, negócios e criação digital.
      </div>
    </PageLayout>
  );
}