export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">
          Reset Password
        </h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 border rounded mb-4"
        />

        <button className="w-full bg-green-600 text-white p-3 rounded">
          Send Reset Link
        </button>
      </div>
    </div>
  );
}