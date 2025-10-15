

import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState("");
  const [scrollTop, setScrollTop] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const mobileMenuToggle = (): void => setActiveMenu(!activeMenu);

  useEffect(() => {
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) setScrollTop(true);
      if (currentScrollY > lastScrollY) setScrollUp(true);
      else if (currentScrollY < lastScrollY) setScrollUp(false);
      setScrollTop(false);
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
      dropdownicon: "images/dropdownicon.svg",
      mega: true, // 👈 this one has the mega menu
    },
    { name: "Backed by research", href: "/backed-by-research" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <nav className={`navigations ${activeMenu || scrollUp ? "nav-top-0" : ""}`}>
      <div className={`${isScrolled && !scrollTop ? "bg-black" : ""}`}>
        <div className="navigations-content">
          <ul className="menu-for-desktop flex items-center gap-8">
            <li>
              <a href="/">
                <img src="/images/brainvector_logo.svg" alt="Brainvector logo" />
              </a>
            </li>

            {menuItems.map((item) => (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className={`flex items-center gap-1 ${
                    currentPath === item.href ? "active-menu-white" : ""
                  }`}
                >
                  {item.name}
                  {item.dropdownicon && (
                    <img
                      src={item.dropdownicon}
                      alt="icon"
                      className="inline-block w-[15px]!"
                    />
                  )}
                </a>

                {/* 🧩 Mega Menu */}
                {item.mega && hoveredItem === item.name && (
                  <div className="absolute -left-[542px] w-[1760px] pt-[25px]">
                    <div className="bg-white px-[200px] py-[100px]">
                      <div className="grid grid-cols-3 gap-6">
                      <div>
                        <a href="/reboot">
                        <img src="https://brainvector.dev.karma-dev.com/content/img/Reboot-Corporate.png" alt="reboot" />
                        <p className="text-[26px] font-[Barlow] text-black capitalize font-normal pt-2">Reboot – Corporate Mental Clarity</p>
                        </a>
                      </div>
                      <div>
                        <a href="/realize">
                        <img src="https://brainvector.dev.karma-dev.com/content/img/Realize-dropdown.png" alt="Realize" />
                        <p className="text-[26px] font-[Barlow] text-black capitalize font-normal pt-2">Realize – Elite Performance & Focus</p>
                        </a>
                      </div>
                      <div>
                        <a href="/reset">
                        <img src="https://brainvector.dev.karma-dev.com/content/img/Reset-dropdown.png" alt="Reset" />
                        <p className="text-[26px] font-[Barlow] text-black capitalize font-normal pt-2">Reset - Wellness & Emotional Balance</p>
                        </a>
                      </div>
                    </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <a href="#" className="px-4 py-2 border text-white rounded-full">
            Book a demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
