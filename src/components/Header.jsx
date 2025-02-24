import { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "/images/about/logo.png";

const navMenu = [
  { name: "Work", path: "#" },
  { name: "About", path: "/about" },
  {
    name: "Our Expertise",
    path: "#",
    subMenu: [
      { name: "Web Development", path: "/web-development", icon: "/images/icons/expertise/icon1.png" },
      { name: "Mobile App Development", path: "/mobile-app-development", icon: "/images/icons/expertise/icon2.png" },
      { name: "UI/UX Design Consult", path: "/uiux-design-consult", icon: "/images/icons/expertise/icon3.png" },
      { name: "Data Science & AI Development", path: "/data-science-and-ai-development", icon: "/images/icons/expertise/icon4.png" },
      { name: "Custom Software Development", path: "/custom-software-development", icon: "/images/icons/expertise/icon5.png" },
    ],
  },
  {
    name: "Hire Developers",
    path: "#",
    subMenu: [
      { name: "Hire Mobile App Developers", path: "/hire-mobile-app-developers", icon: "/images/icons/hire/icon6.png" },
      { name: "Hire iOS Developers", path: "/hire-ios-developers", icon: "/images/icons/hire/icon7.png" },
      { name: "Hire Android Developers", path: "/hire-android-developers", icon: "/images/icons/hire/icon8.png" },
      { name: "Hire Data Scientists", path: "/hire-data-scientists", icon: "/images/icons/hire/icon9.png" },
      { name: "Hire UI/UX Designers", path: "/hire-uiux-designer", icon: "/images/icons/hire/icon10.png" },
    ],
  },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Contact", path: "/contact-us" },
];

const Header = () => {
  const [dropdown, setDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="header z-10 sticky top-0 px-4 lg:px-6 py-5 bg-white">
      <div className="container mx-auto max-w-screen-xl flex justify-between items-center">
        <Link to="/" className="text-xl font-medium text-black">
          <img className="w-32" src={logo} alt="logo" />
        </Link>

        <button
          className="lg:hidden text-black text-2xl cursor-pointer"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
        </button>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex lg:space-x-8">
          {navMenu.map((item, index) => (
            <div key={index} className="relative" ref={dropdown === index ? dropdownRef : null}>
              {item.path !== "#" ? (
                <Link
                  to={item.path}
                  className={`py-2 px-4 font-medium text-lg hover:text-[#ff0066] ${
                    item.name === "Contact" ? "bg-[#fff] rounded-full text-[#000] text-lg max-w-max hover:bg-[#FF0066] hover:text-[#fff]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  className="flex items-center font-medium text-lg hover:text-[#ff0066]"
                  onMouseEnter={() => setDropdown(index)}
                  onClick={() => setDropdown(dropdown === index ? null : index)}
                >
                  {item.name}
                  {item.subMenu && <RiArrowDropDownLine className={`ml-2 w-6 h-6 transition-transform ${dropdown === index ? "rotate-180" : ""}`} />}
                </button>
              )}
              {/* Dropdown Menu */}
              {item.subMenu && dropdown === index && (
                <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-lg w-82 z-10">
                  {item.subMenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="flex items-center px-4 py-2 hover:text-[#ff0066]">
                      <img src={subItem.icon} alt={subItem.name} className="w-8 h-8 mr-2" />
                      <Link to={subItem.path} className="font-medium text-lg">
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#ff066d] shadow-md transition-all duration-300">
          <nav className="flex flex-col items-start px-4 py-4 space-y-2">
            {navMenu.map((item, index) => (
              <div key={index} className="w-full">
                {item.path !== "#" ? (
                  <Link to={item.path} className="block py-2 px-4 font-medium text-white hover:text-white" onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </Link>
                ) : (
                  <button
                    className="flex justify-between w-full py-2 px-4 font-medium text-white hover:text-white cursor-pointer"
                    onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                  >
                    {item.name}
                    {item.subMenu && <RiArrowDropDownLine className={`w-6 h-6 transition-transform ${mobileDropdown === index ? "rotate-180" : ""}`} />}
                  </button>
                )}
                {/* Mobile Dropdown */}
                {item.subMenu && mobileDropdown === index && (
                  <ul className="bg-[#ff066d] rounded-md">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex} className="flex items-center px-6 py-2 text-white hover:text-white">
                        <img src={subItem.icon} alt={subItem.name} className="w-6 h-6 mr-2" />
                        <Link to={subItem.path} onClick={() => setIsMobileMenuOpen(false)}>
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
