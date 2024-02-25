export default function PageTitle({ title }: { title: string }) {
  return (
    <div className="py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">{title}</h1>
    </div>
  );
}
