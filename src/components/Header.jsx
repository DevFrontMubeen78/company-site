import { useState } from "react";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "/images/about/logo.png";

const navMenu = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Our Expertise",
    path: "#",
    subMenu: [
      { name: "Web Development", path: "/web-development" },
      { name: "Mobile App Development", path: "/mobile-app-development" },
      { name: "UI/UX Design Consult", path: "/uiux-design-consult" },
      { name: "Data Science & AI Development", path: "/data-science-and-ai-development" },
      { name: "Custom Software Development", path: "/custom-software-development" },
    ],
  },
  {
    name: "Hire Developers",
    path: "#",
    subMenu: [
      { name: "Hire Mobile App Developers", path: "/hire-mobile-app-developers" },
      { name: "Hire IOS developers", path: "/hire-ios-developers" },
      { name: "Hire Android developers", path: "/hire-android-developers" },
      { name: "Hire Data Scientists", path: "/hire-data-scientists" },
      { name: "Hire UI/UX Designers", path: "/hire-uiux" },
    ],
  },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Contact", path: "/Contact-us" },
];

const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="header px-4 lg:px-6 py-5 bg-white shadow-md">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-black">
          <img className="w-32" src={logo} alt="logo" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex lg:space-x-8">
          {navMenu.map((item, index) => (
            <div key={index} className="relative">
              {item.path !== "#" ? (
                <Link
                  to={item.path}
                  className="py-2 px-4 font-bold text-lg hover:text-[#ff0066]"
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  className="flex items-center font-bold text-lg hover:text-[#ff0066]"
                  onClick={() => setDropdown(dropdown === index ? null : index)}
                >
                  {item.name}
                  {item.subMenu && (
                    <RiArrowDropDownLine
                      className={`ml-2 w-4 h-4 transition-transform ${dropdown === index ? "rotate-180" : ""}`}
                    />
                  )}
                </button>
              )}
              {item.subMenu && dropdown === index && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-72 z-10">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link
                        to={subItem.path}
                        className="block px-4 py-2 font-bold text-lg hover:text-[#ff0066]"
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-black shadow-md transition-all duration-300">
          <nav className="flex flex-col items-start px-4 py-4 space-y-2">
            {navMenu.map((item, index) => (
              <div key={index} className="w-full">
                {item.path !== "#" ? (
                  <Link
                    to={item.path}
                    className="block py-2 px-4 font-bold text-white hover:text-[#ff0066]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="flex justify-between w-full py-2 px-4 font-bold text-white hover:text-[#ff0066]"
                    onClick={() => setDropdown(dropdown === index ? null : index)}
                  >
                    {item.name}
                    {item.subMenu && (
                      <RiArrowDropDownLine
                        className={`w-4 h-4 transition-transform ${dropdown === index ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>
                )}
                {item.subMenu && dropdown === index && (
                  <ul className="bg-gray-800 rounded-md">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          className="block px-6 py-2 font-bold text-white hover:text-[#ff0066]"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
