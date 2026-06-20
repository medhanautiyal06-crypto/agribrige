import {
  Bot,
  Camera,
  Languages,
  Shield
} from "lucide-react";

const features = [
  {
    icon: <Bot size={40}/>,
    title: "AI Chatbot",
    description:
      "Ask agricultural questions and receive intelligent responses."
  },

  {
    icon: <Camera size={40}/>,
    title: "Disease Detection",
    description:
      "Upload crop images or videos for AI-powered analysis."
  },

  {
    icon: <Languages size={40}/>,
    title: "Multilingual Support",
    description:
      "Interact with AgriBridge in multiple languages."
  },

  {
    icon: <Shield size={40}/>,
    title: "Secure Access",
    description:
      "Protected accounts and personalized recommendations."
  }
];

export default function Features() {
  return (
    <section
      id="features"
      className="max-w-7xl mx-auto py-24 px-6"
    >

      <h2 className="text-4xl font-bold text-center">
        Core Features
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

        {features.map((feature,index)=>(
          <div
            key={index}
            className="bg-white rounded-3xl p-8 shadow-lg hover:-translate-y-2 transition"
          >
            <div className="text-green-600">
              {feature.icon}
            </div>

            <h3 className="text-xl font-bold mt-5">
              {feature.title}
            </h3>

            <p className="text-gray-600 mt-3">
              {feature.description}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}