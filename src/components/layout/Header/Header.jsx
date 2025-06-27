import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useResponsive } from "../../../hooks/useResponsive";
import useHeaderLogic from "./useHeaderLogic";
import { DesktopNav, MobileMenuButton, MobileNav } from "./Navigation";

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useResponsive();
  
  const {
    headerStyles,
    navbarStyles,
    logoStyles,
    responsiveNavbarStyles,
    responsiveLogoStyles,
    toggleMobileMenu,
    closeMobileMenu,
    handleOverlayClick,
    isActiveLink
  } = useHeaderLogic(isMobile, isMobileMenuOpen, setIsMobileMenuOpen, location);

  return (
    <header style={headerStyles}>
      <nav style={{...navbarStyles, ...responsiveNavbarStyles}}>
        <Link to="/" style={{...logoStyles, ...responsiveLogoStyles}}>
          LBN
        </Link>
        
        <DesktopNav 
          isMobile={isMobile}
          isActiveLink={isActiveLink}
        />

        <MobileMenuButton
          isMobile={isMobile}
          isMobileMenuOpen={isMobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </nav>

      {/* Mobile Navigation */}
      {isMobile && isMobileMenuOpen && createPortal(
        <MobileNav
          isActiveLink={isActiveLink}
          closeMobileMenu={closeMobileMenu}
          handleOverlayClick={handleOverlayClick}
        />,
        document.body
      )}
    </header>
  );
}
