'use client'
import Image from "next/image"
import { useState, useEffect } from 'react'

const CONTACT_PHONE = "+68 685 88666"

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#listings", label: "Listings" },
  { href: "#members", label: "Members" },
  { href: "#blog", label: "Blog" },
  { href: "#pages", label: "Pages" },
  { href: "#contact", label: "Contact" },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(prev => !prev)
  
  const closeMenu = () => setIsMenuOpen(false)

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <nav className="flex_center w-full xl:h-auto z-10 absolute top-0">
      <div className="w-[95%] max-w-[1700px] flex_items py-6 max-sm:px-4">
        
        {/* Left Section */}
        <div className="w-full lg:w-[70%] xl:w-[65%] flex_items max-lg:justify-between">
          
          {/* Logo */}
          <a href="#home" className="logo flex_items gap-4" aria-label="JustHome Homepage">
            <Image
              src="/logo.svg"
              alt="JustHome Logo"
              width={40}
              height={40}
              className="object-contain w-[25px] lg:w-[40px] h-auto"
              priority
            />
            <h3 className="text-white text-[16px] lg:text-[20px]">JustHome</h3>
          </a>

          {/* Navigation Links */}
          <ul 
            className={`menu_links font_medium text-white ml-20 xl:ml-40 flex_center gap-7 absolute lg:relative max-lg:top-full max-lg:bg-[#1A1A1A] max-lg:left-0 max-lg:ml-0 max-lg:flex-col max-lg:w-full transition-all duration-300 ${
              isMenuOpen ? 'active' : ''
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href} 
                  onClick={closeMenu}
                  className="hover:text-gray-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            
            {/* Mobile-only Actions */}
            <li className="lg:hidden w-full flex_center flex-col gap-5 mt-4 ">
              <button 
                className="account flex_center"
                aria-label="Account"
              >
                <Image
                  src="/icons/account.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </button>

              <button className="font_small rounded-full border-white border-[1px] py-2 px-4 black_btn">
                Add Property
              </button>
            </li>
          </ul>

          {/* Mobile Controls */}
          <div className="flex_center gap-8 text-white flex-wrap lg:hidden">
            <a href={`tel:${CONTACT_PHONE}`} className="contact flex_center gap-3">
              <Image
                src="/icons/phone.svg"
                alt=""
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="font_medium">{CONTACT_PHONE}</p>
            </a>
            
            <button
              onClick={toggleMenu}
              className={`menu-button relative ${isMenuOpen ? 'active' : ''}`}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Right Section - Desktop */}
        <div className="lg:w-[35%]  items-center justify-end gap-6 text-white hidden lg:flex flex-wrap">
          <a href={`tel:${CONTACT_PHONE}`} className="contact flex_center gap-3">
            <Image
              src="/icons/phone.svg"
              alt=""
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="font_medium">{CONTACT_PHONE}</p>
          </a>

          <button 
            className="account flex_center cursor-pointer rounded-full duration-300 hover:scale-90"
            aria-label="Account"
          >
            <Image
              src="/icons/account.svg"
              alt=""
              width={50}
              height={50}
              className="object-contain"
            />
          </button>

          <button className="font_small rounded-full border-white border-[1px] py-2 px-4 black_btn hover:bg-white hover:text-black transition-colors max-xl:hidden">
            Add Property
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden -z-10"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}

export default Navbar