/* This example requires Tailwind CSS v2.0+ */
import { React } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import axios from "axios";

export default function TailwindNavbar() {
  const history = useHistory();

  const { REACT_APP_CLOUD_HOST_URL } = process.env;
  const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      if (process.env.NODE_ENV === "development") {
        await axios.delete("http://localhost:8000/session/", {
          withCredentials: true,
        });
      } else if (process.env.NODE_ENV === "production") {
        await axios.delete(`${cloudBaseUrl}/session/`, {
          withCredentials: true,
        });
      }
      // props.history not used because Navbar is not defined in Routes and doesn't
      // have ...props passed into it
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Disclosure as="nav" className="bg-[#212121]">
      {({ open }) => (
        <>
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h6 className="block h-8 w-auto text-white font-['Lobster-Regular'] text-2xl hover:text-[#e65100]">
                    <a href="/">LDN Central Fitness Club</a>
                  </h6>
                </div>
                <div className="hidden sm:block sm:ml-60">
                  <div className="flex space-x-4">
                    <a
                      href="/"
                      className="text-white hover:bg-[#e65100] px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </a>
                    <a
                      href="/about-us"
                      className="text-white hover:bg-[#e65100] px-3 py-2 rounded-md text-base font-medium">
                      About Us
                    </a>
                    <a
                      href="/gym-partnerships"
                      className="text-white hover:bg-[#e65100] px-3 py-2 rounded-md text-base font-medium">
                      Gym Partnerships
                    </a>
                    <a
                      href="/city-bikes"
                      className="text-white hover:bg-[#e65100] px-3 py-2 rounded-md text-base font-medium">
                      City Bikes
                    </a>
                    <a
                      href="/contact-us"
                      className="text-white hover:bg-[#e65100] px-3 py-2 rounded-md text-base font-medium">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden sm:ml-6 sm:block">
                <div className="flex items-center">
                  <IconButton
                    component={Link}
                    to={"/login"}
                    className="p-1 rounded-full hover:text-white focus:outline-none">
                    <span className="sr-only">Login to session</span>
                    <PersonIcon
                      color="secondary"
                      className="h-6 w-6 hover:text-[#e65100]"
                      aria-hidden="true"
                    />
                  </IconButton>
                  <IconButton
                    onClick={handleLogout}
                    className="p-1 rounded-full hover:text-white focus:outline-none">
                    <span className="sr-only">Log out of session</span>
                    <ExitToAppIcon
                      color="secondary"
                      className="h-6 w-6 hover:text-[#e65100]"
                      aria-hidden="true"
                    />
                  </IconButton>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="-mr-2 flex sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-[#1de9b6] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile nav panel dropdown */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Disclosure.Button
                as="a"
                href="/"
                className="hover:bg-[#1de9b6] text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/about-us"
                className="hover:bg-[#1de9b6] text-white block px-3 py-2 rounded-md text-base font-medium">
                About Us
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/gym-partnerships"
                className="hover:bg-[#1de9b6] text-white block px-3 py-2 rounded-md text-base font-medium">
                Gym Partnerships
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/city-bikes"
                className="hover:bg-[#1de9b6] text-white block px-3 py-2 rounded-md text-base font-medium">
                City Bikes
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/contact-us"
                className="hover:bg-[#1de9b6] text-white block px-3 py-2 rounded-md text-base font-medium">
                Contact Us
              </Disclosure.Button>
            </div>
            <div className="pt-4 pb-3 border-t border-[#e65100]">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                  <IconButton
                    component={Link}
                    to={"/login"}
                    className="h-10 w-10 p-1 rounded-full hover:text-white focus:outline-none">
                    <span className="sr-only">Login to session</span>
                    <PersonIcon
                      color="secondary"
                      className="h-6 w-6 hover:text-[#1de9b6]"
                      aria-hidden="true"
                    />
                  </IconButton>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-white">USER</div>
                  <div className="text-sm font-medium text-[#e65100]">
                    Session Login
                  </div>
                </div>
                <button
                  type="button"
                  className="ml-auto flex-shrink-0 p-1 rounded-full text-white focus:outline-none"
                  onClick={handleLogout}>
                  <span className="sr-only">Log out of session</span>
                  <ExitToAppIcon
                    color="secondary"
                    className="h-6 w-6 hover:text-[#1de9b6]"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
