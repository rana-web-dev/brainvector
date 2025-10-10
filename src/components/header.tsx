import React, { useState, useEffect } from "react";

const Navigation: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollUp, setScrollUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentPath, setCurrentPath] = useState("");
  console.log(currentPath);

  const mobileMenuToggle = (): void => {
    setActiveMenu(!activeMenu);
  };

  useEffect(() => {
    // Only runs on client
    setCurrentPath(window.location.pathname);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollUp(false);
      } else if (currentScrollY < lastScrollY) {
        setScrollUp(true);
      }

      setIsScrolled(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const menuItems = [
    { name: "How it works", href: "/how-it-works" },
    { name: "Explore our solutions", href: "#" },
    { name: "Backed by research", href: "/backed-by-research" },
    { name: "About Us", href: "/about-us" },
  ];

  return (
    <nav className={`navigations ${activeMenu || scrollUp ? "pe-auto nav-top-0" : ""}`}>
      <div className={`${activeMenu || scrollUp ? "" : "bg-black"}`}>
        <div className="navigations-content">
          <ul className="menu-for-desktop">
            <li>
              <a href="/">
                <img src="/images/brainvector_logo.svg" alt="Brainvector logo" />
              </a>
            </li>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a className={currentPath === item.href ? "active-menu-white" : ""} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#" className="book-a-demo">Book a demo</a>
        </div>
      </div>
      <div className={`menu-for-mobile ${activeMenu ? "bg-black nav-top-0" : ""}`}>
        <div className={`pe-auto mobile-nav-container ${isScrolled ? "bg-black" : ""}`}>
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

        <div className={`mobile-menu-items ${activeMenu ? "mobile-menu-items-active" : ""}`}>
          <ul>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a className={currentPath === item.href ? "active-menu-white" : ""} href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
            <li className="book-a-demo-mobile-li">
              <a href="/about-us" className="book-a-demo-mobile">
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
