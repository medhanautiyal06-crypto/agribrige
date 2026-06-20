export default function Login() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Login Page</h1>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 block my-2"
      />

      <input
        type="password"
        placeholder="Password"
        className="border p-2 block my-2"
      />

      <button className="bg-green-600 text-white px-4 py-2">
        Login
      </button>
    </div>
  );
}