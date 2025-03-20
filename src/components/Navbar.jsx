// components/Navbar.jsx
import logo from "../assets/logo_64x64.png";

const Navbar = () => (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white h-[10vh] p-4 flex justify-between items-center w-full shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-3">
            <img src={logo} alt="Brhymn Devices Logo" className="h-12 w-12" />
            <h1 className="text-2xl font-bold">Brhymn Devices</h1>
        </div>
        <div className="flex space-x-6">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <a href="/about" className="hover:text-yellow-300">About</a>
            <a href="/products" className="hover:text-yellow-300">Products</a>
            <a href="/careers" className="hover:text-yellow-300">Careers</a>
            <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </div>
    </nav>
);



export default Navbar;