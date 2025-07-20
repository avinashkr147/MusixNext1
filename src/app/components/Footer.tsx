

export const Footer = () => {
  return (
    <footer  className="bg-black text-gray-400 py-12 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 sm:gap-x-40
         md:gap-x-18  px-6 sm:px-8 lg:px-10">
            <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="flex flex-col gap-4">
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mt-3 mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div >
          <h2 className="text-white text-lg font-semibold  mt-4 mb-2">Contact Us</h2>
         <div className="flex flex-col gap-4">
         <p>Patna,Bihar, India</p>
          <p>Bihar 844118</p>
          <p>Email: musixschool@gmail.com</p>
          <p>Phone: +91-0000000000</p>
         </div>
        </div>
        </div>
 <p className="text-center text-sm pt-8">© 2025 Musix School. All rights reserved.</p>
    </footer>
  )
}
