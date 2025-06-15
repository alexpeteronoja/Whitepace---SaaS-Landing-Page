import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  return (
    <>
      <div>
        <nav className="bg-[#043873] text-white  border-b ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center min-h-16 ">
              {/* Logo */}
              <div className="text-[28px] font-bold flex items-center space-x-2.5">
                <img src="Logo Icon.png" alt="" className="w-9 h-7" />
                <a href="">whitepace</a>
              </div>

              {/* Hamburger Button (Mobile) */}
              <div className="flex space-x-5 xl:hidden">
                <div className="hidden md:flex space-x-6">
                  <button className="bg-[#FFE492] text-[#043873] h-15 w-31 rounded-[8px] my-4">
                    <a href="" className="hover:text-blue-500">
                      Login
                    </a>
                  </button>

                  <button className="bg-[#4F9CF9] w-57 h-15 rounded-[8px] my-4">
                    <a href="" className="hover:text-blue-500">
                      Try Whitepace free
                    </a>
                  </button>
                </div>

                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none cursor-pointer"
                  aria-label="Toggle menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>

              {/* Navigation Links (Desktop) */}
              <div className="hidden xl:flex items-center space-x-5 dm-sans-font font-medium text-lg">
                <a href="" className=" hover:text-blue-500">
                  Products
                </a>

                <div
                  onMouseOver={() => setDrop(true)}
                  onMouseLeave={() => setDrop(false)}
                  className="relative hover:bg-[#4F9CF9]"
                >
                  <button className="flex items-center space-x-2.5 dropdown-btn outline-0 px-2">
                    <p>Products</p> <img src="images/Down Arrow.png" alt="" />
                  </button>

                  {drop && (
                    <div className="absolute text-black bg-[#4F9CF9] w-full dropdown-content">
                      <a href="" className="block">
                        Link 1
                      </a>
                      <a href="" className="block">
                        Link 1
                      </a>
                      <a href="" className="block">
                        Link 1
                      </a>
                    </div>
                  )}
                </div>

                <a href="" className="hover:text-blue-500">
                  Solutions
                </a>
                <a
                  href=""
                  // state={{ scrollTo: 'project-section' }}
                  className="hover:text-blue-500"
                >
                  Resources
                </a>

                <a href="" className="hover:text-blue-500">
                  Pricing
                </a>

                <div className="hidden lg:flex space-x-6">
                  <button className="bg-[#FFE492] text-[#043873] h-15 w-31 rounded-[8px] my-4">
                    <a href="" className="hover:text-blue-500">
                      Login
                    </a>
                  </button>

                  <button className="bg-[#4F9CF9] w-57 h-15 rounded-[8px] my-4">
                    <a href="" className="hover:text-blue-500">
                      Try Whitepace free
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="xl:hidden flex flex-col px-4 pb-4 space-y-2">
              <a href="" className="hover:text-blue-500 py-1 px-2">
                Solutions
              </a>

              <a
                href=""
                // state={{ scrollTo: 'project-section' }}
                className="hover:text-blue-500 py-1 px-2"
              >
                Resources
              </a>

              <a href="" className="hover:text-blue-500 py-1.5 px-2">
                Pricing
              </a>

              <div className="flex flex-col md:hidden">
                <button className="bg-[#FFE492] text-[#043873] h-15 w-full rounded-[8px] my-3">
                  <a href="" className="hover:text-blue-500">
                    Login
                  </a>
                </button>

                <button className="bg-[#4F9CF9] w-full h-15 rounded-[8px] my-3">
                  <a href="" className="hover:text-blue-500">
                    Try Whitepace free
                  </a>
                </button>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
