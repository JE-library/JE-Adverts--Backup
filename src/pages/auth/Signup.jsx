import Footer from "../../components/Footer";
import NavBar from "../../components/Navbar";

const SignUp = () => {
  return (
    <form className="bg-amber-200 p-8 rounded-lg shadow-lg w-full max-w-sm">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

      <div>
        <h4 className="block text-gray-700 mb-2">Sign Up As</h4>
        <select
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name=""
          id=""
        >
          <option value="">Select one</option>
          <option value="">User</option>
          <option value="">Vendor</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Confirm Password</label>
        <input
          type="password"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
