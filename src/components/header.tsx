
import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState("");
  const [scrollTop, setScrollTop] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const mobileMenuToggle = (): void => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    // Only runs on client
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) setScrollTop(true);
      else setScrollTop(false);

      if (currentScrollY > lastScrollY) setScrollUp(true);
      else if (currentScrollY < lastScrollY) setScrollUp(false);

      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "How it works", href: "/how-it-works" },
    { 
      name: "Explore our solutions", 
      href: "#", 
      dropdownupicon: "/images/dropdownupicon.svg",
      mega: true,
    },
    { name: "Backed by research", href: "/backed-by-research" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <nav className={`navigations ${activeMenu || scrollUp ? "nav-top-0" : ""}`}>
      <div className={`${isScrolled && !scrollTop ? "bg-black" : ""}`}>
        <div className="navigations-content">
          <ul className="menu-for-desktop">
            <li>
              <a href="/">
                <img src="/images/brainvector_logo.svg" alt="Brainvector logo" />
              </a>
            </li>
            {menuItems.map((item) => (
              <li key={item.href} className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}>
                <a
                  className={currentPath === item.href ? "active-menu-white" : ""}
                  href={item.href}
                >
                  {item.name}
                  {item.dropdownupicon && (
                    <img
                      src={item.dropdownupicon}
                      alt="icon"
                      className="inline-block ml-2 w-[15px]!"
                    />
                  )}
                </a>
                {item.mega && hoveredItem === item.name && (
                  <div className="absolute -left-[550px] pt-[30px]">
                    <div className="w-[1764px] px-[200px] py-[100px] bg-white grid grid-cols-3 gap-6">
                      <a href="/reboot">
                        <img src="images/img/Reboot-Corporate.png" alt="Reboot" />
                        <p className="text-[26px] leading-[26px] font-[Barlow] font-normal pt-[20px] text-black capitalize">Reboot – Corporate Mental Clarity</p>
                      </a>
                      <a href="/realize">
                        <img src="images/img/Realize-dropdown.png" alt="Realize" />
                        <p className="text-[26px] leading-[26px] font-[Barlow] font-normal pt-[20px] text-black capitalize">Realize – Elite Performance & Focus</p>
                      </a>
                      <a href="/reset">
                        <img src="images/img/Reset-dropdown.png" alt="Reset" />
                        <p className="text-[26px] leading-[26px] font-[Barlow] font-normal pt-[20px] text-black capitalize">Reset - Wellness & Emotional Balance</p>
                      </a>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a href="/contact" className="px-5 py-3 border text-white rounded-full font-[Barlow] text-[14px] uppercase hover:bg-white hover:text-black">Book a demo</a>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`menu-for-mobile ${activeMenu ? "bg-black nav-top-0" : "pe-none"}`}>
        <div className={`pe-auto mobile-nav-container ${isScrolled && !scrollTop ? "bg-black" : ""}`}>
          <a href="/">
            <img src="/images/brainvector_logo.svg" alt="Brainvector logo" />
          </a>
          <button onClick={mobileMenuToggle} aria-label="Toggle mobile menu">
            {activeMenu ? (
              <img className="bars" src="/images/close.svg" alt="close" />
            ) : (
              <img className="bars" src="/images/bars.svg" alt="bars" />
            )}
          </button>
        </div>
        <div className={`mobile-menu-items ${activeMenu ? "mobile-menu-items-active" : "pe-none"}`}>
          <ul className={`${activeMenu ? "pe-auto" : ""}`}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  className={currentPath === item.href ? "active-menu-white" : ""}
                  href={item.href}
                  onClick={(e) => {
                    if (item.mega) {
                      e.preventDefault(); // prevent navigation
                      setOpenDropdown(openDropdown === item.name ? null : item.name);
                    } else {
                      setActiveMenu(false);
                    }
                  }}
                >
                  {item.name}
                  {item.dropdownupicon && (
                    openDropdown ? (<img
                      src={item.dropdownupicon}
                      alt="icon"
                      className="inline-block ml-2 w-[15px]! rotate-180" // icon rotate for down
                    />) : (<img
                      src={item.dropdownupicon}
                      alt="icon"
                      className="inline-block ml-2 w-[15px]!"
                    />)
                    
                  )}
                </a>
                {/* Mobile Dropdown */}
                {item.mega && openDropdown === item.name && (
                  <div className="flex flex-col gap-[18px] pt-[18px]">
                    <a href="/reboot" className="text-[12px] font-light! text-[#D8D8D8]! hover:text-white! ">Reboot – Corporate Mental Clarity</a>
                    <a href="/realize" className="text-[12px] font-light! text-[#D8D8D8]! hover:text-white! ">Realize – Elite Performance & Focus</a>
                    <a href="/reset" className="text-[12px] font-light! text-[#D8D8D8]! hover:text-white! ">Reset - Wellness & Emotional Balance</a>
                  </div>
                )}
              </li>
            ))}
            <li>
              <a href="/contact" className="text-[18px] text-white border rounded-full px-8 py-3 hover:bg-white hover:text-black!">
                Book a demo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
