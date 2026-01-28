import { useState } from 'react';
import { Link } from 'react-router-dom';
import svgPaths from "@/imports/svg-d9bod9u3b1";

function IropkeLogo() {
  return (
    <div className="h-[20px] relative shrink-0 w-[106px]" data-name="iropke-logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 20">
        <g id="iropke-logo">
          <path d={svgPaths.pe03c000} fill="var(--fill-0, #4A4C4D)" id="iropke-logo_2" />
        </g>
      </svg>
    </div>
  );
}

function Menu({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="bg-[var(--color-sidebar)] flex items-center justify-center p-[6px] relative rounded-[var(--radius-md)] shrink-0 size-[36px] md:hidden"
      aria-label="Toggle menu"
    >
      <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
        <path d={svgPaths.p2ae90080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    </button>
  );
}

function Navigation({ className = "", onLinkClick }: { className?: string; onLinkClick?: () => void }) {
  const navItems = [
    { label: 'About us', path: '/about' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'News', path: '/news' },
    { label: 'Column', path: '/column' },
    { label: 'Service', path: '/service' },
    { label: 'Contact', path: '/contact' }
  ];
  
  return (
    <nav className={className}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          onClick={onLinkClick}
          className="px-[12px] py-[10px] text-[#232329] font-['Google_Sans',sans-serif] text-[18px] leading-[1.2] hover:text-[var(--color-primary)] transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[var(--color-card)] w-full sticky top-0 z-50 shadow-[var(--shadow-elevation-sm)]">
        <div className="max-w-[1440px] mx-auto px-[10px] md:px-[20px] lg:px-[160px]">
          <div className="py-[15px] md:py-[25px]">
            <div className="bg-white relative rounded-[15px] shadow-[0px_7px_20px_0px_rgba(0,0,0,0.08)]">
              <div aria-hidden="true" className="absolute border border-[#e8eaed] border-solid inset-0 pointer-events-none rounded-[15px]" />
              <div className="flex flex-row items-center size-full">
                <div className="content-stretch flex items-center justify-between p-[15px] relative w-full">
                  <Link to="/" className="flex items-center">
                    <IropkeLogo />
                  </Link>

                  {/* Desktop Navigation */}
                  <Navigation className="hidden lg:flex items-center gap-[5px]" />

                  <div className="flex items-center gap-[10px]">
                    <button className="hidden lg:flex bg-[#43434e] items-center justify-center px-[20px] py-[11px] rounded-[5px] shrink-0 w-[150px] text-white font-['Roboto',sans-serif] text-[14px] leading-[1.5] hover:bg-[#5a5a66] transition-colors">
                      Project Inquiry
                    </button>
                    <Menu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(!isMenuOpen)} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[var(--color-sidebar)] bg-opacity-95 pt-[60px]">
          <Navigation 
            className="flex flex-col items-center gap-[24px] text-[var(--color-sidebar-foreground)]" 
            onLinkClick={() => setIsMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
}
