import Navbar from "../components/Navbar";

export default function Chatbot() {
  return (
    <>

      <div className="flex h-[85vh]">

        <div className="w-72 bg-green-800 text-white p-5">

          <button className="w-full bg-green-600 py-3 rounded">
            New Chat
          </button>

        </div>

        <div className="flex-1 flex flex-col">

          <div className="flex-1 p-5 overflow-y-auto">

            <div className="bg-gray-100 p-4 rounded mb-4">
              Hello Farmer 👋
            </div>

          </div>

          <div className="border-t p-4 flex gap-3">

           <select className="border p-2 rounded">
  <option value="English">English</option>
  <option value="Hindi">Hindi</option>
  <option value="Garhwali">Garhwali</option>
  <option value="Kumaoni">Kumaoni</option>
  <option value="Jaunsari">Jaunsari</option>
  <option value="Rangkas">Rangkas</option>
  <option value="Bhotiya">Bhotiya</option>
</select>
            <input
              className="flex-1 border rounded p-3"
              placeholder="Ask anything..."
            />

            <button className="bg-green-600 text-white px-6 rounded">
              Send
            </button>

          </div>

        </div>

      </div>
    </>
  );
}