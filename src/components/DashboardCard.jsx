export default function DashboardCard({
  title,
  description,
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
      <h2 className="text-2xl font-bold mb-3">
        {title}
      </h2>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}