import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const cards = [
    {
      title: "Disease Detection",
      path: "/disease-detection",
      description: "Upload crop images and detect diseases",
    },
    {
      title: "AI Chatbot",
      path: "/chatbot",
      description: "Get farming assistance instantly",
    },
    {
      title: "Weather Updates",
      path: "#",
      description: "Check weather forecasts",
    },
    {
      title: "Recommendations",
      path: "/recommendation",
      description: "AI crop suggestions",
    },
  ];

  return (
    <>

      <div className="min-h-screen bg-green-50 p-10">
        <h1 className="text-4xl font-bold mb-8">
          Farmer Dashboard
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Link key={index} to={card.path}>
              <DashboardCard
                title={card.title}
                description={card.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}