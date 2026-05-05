interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
      {title}
    </h2>
  );
}