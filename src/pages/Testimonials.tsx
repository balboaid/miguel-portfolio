import PageLayout from "../../layouts/PageLayout";
import SectionTitle from "../components/SectionTitle";

export default function Testimonials() {
  return (
    <PageLayout>
      <SectionTitle title="Depoimentos" />

      <p className="text-gray-400 mt-6">
        Em breve: depoimentos carregados automaticamente do LinkedIn.
      </p>
    </PageLayout>
  );
}