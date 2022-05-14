/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function TailwindContactUs() {
  let history = useHistory();
  let formFields = {
    first_name: "",
    last_name: "",
    email: "",
    query: "",
    extra_comments: "",
  };

  const [formData, setFormData] = useState(formFields);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formErrors, setFormErrors] = useState(formFields);

  const { REACT_APP_CLOUD_HOST_URL } = process.env;
  const cloudBaseUrl = REACT_APP_CLOUD_HOST_URL;

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(
        process.env.NODE_ENV === "production"
          ? `${cloudBaseUrl}/registrations/`
          : `http://localhost:8000/registrations/`,
        formData,
        { withCredentials: true }
      );
      history.push("/");
    } catch (err) {
      setFormErrors(err.response.data);
    }
  }

  return (
    <div className="bg-[#e65100]">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="relative bg-white shadow-xl">
          <h2 className="sr-only">Contact us</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* Contact information */}
            <div className="relative overflow-hidden py-10 px-6 bg-[#212121] sm:px-10 xl:p-12">
              <div
                className="absolute inset-0 pointer-events-none sm:hidden"
                aria-hidden="true">
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={343}
                  height={388}
                  viewBox="0 0 343 388"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                    fill="url(#linear1)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear1"
                      x1="254.553"
                      y1="107.554"
                      x2="961.66"
                      y2="814.66"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                aria-hidden="true">
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={359}
                  height={339}
                  viewBox="0 0 359 339"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                    fill="url(#linear2)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear2"
                      x1="192.553"
                      y1="28.553"
                      x2="899.66"
                      y2="735.66"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div
                className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                aria-hidden="true">
                <svg
                  className="absolute inset-0 w-full h-full"
                  width={160}
                  height={678}
                  viewBox="0 0 160 678"
                  fill="none"
                  preserveAspectRatio="xMidYMid slice"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                    fill="url(#linear3)"
                    fillOpacity=".1"
                  />
                  <defs>
                    <linearGradient
                      id="linear3"
                      x1="192.553"
                      y1="325.553"
                      x2="899.66"
                      y2="1032.66"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#fff" />
                      <stop offset={1} stopColor="#fff" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-[#e65100]">
                CONTACT INFORMATION
              </h3>
              <p className="mt-6 text-base text-white max-w-3xl">
                Get in touch with LDN Central Fitness Club.
              </p>
              <ul role="list" className="mt-8 flex space-x-12">
                <li>
                  <a className="text-white hover:text-[#e65100]" href="#">
                    <span className="sr-only">Facebook</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/20 00/svg"
                      className="w-6 h-6"
                      aria-hidden="true">
                      <path
                        d="M22.258 1H2.242C1.556 1 1 1.556 1 2.242v20.016c0 .686.556 1.242 1.242 1.242h10.776v-8.713h-2.932V11.39h2.932V8.887c0-2.906 1.775-4.489 4.367-4.489 1.242 0 2.31.093 2.62.134v3.037l-1.797.001c-1.41 0-1.683.67-1.683 1.653v2.168h3.362l-.438 3.396h-2.924V23.5h5.733c.686 0 1.242-.556 1.242-1.242V2.242C23.5 1.556 22.944 1 22.258 1"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a className="text-white hover:text-[#e65100]" href="#">
                    <span className="sr-only">Twitter</span>
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      aria-hidden="true">
                      <path
                        d="M7.548 22.501c9.056 0 14.01-7.503 14.01-14.01 0-.213 0-.425-.015-.636A10.02 10.02 0 0024 5.305a9.828 9.828 0 01-2.828.776 4.94 4.94 0 002.165-2.724 9.867 9.867 0 01-3.127 1.195 4.929 4.929 0 00-8.391 4.491A13.98 13.98 0 011.67 3.9a4.928 4.928 0 001.525 6.573A4.887 4.887 0 01.96 9.855v.063a4.926 4.926 0 003.95 4.827 4.917 4.917 0 01-2.223.084 4.93 4.93 0 004.6 3.42A9.88 9.88 0 010 20.289a13.941 13.941 0 007.548 2.209"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact form */}
            <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
              <h3 className="text-lg font-medium text-[#e65100]">
                Send us a message
              </h3>
              <form
                action="#"
                method="POST"
                className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-[#e65100]">
                    First name*
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first_name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="Enter your first name"
                      className="py-3 px-4 block w-full shadow-sm text-[#212121] focus:ring-[#e65100] focus:border-[#e65100] border-[#e65100] rounded-md"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-[#e65100]">
                    Last name*
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last_name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Enter your last name"
                      className="py-3 px-4 block w-full shadow-sm text-[#212121] focus:ring-[#e65100] focus:border-[#e65100] border-[#e65100] rounded-md"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#e65100]">
                    Email*
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Enter your email address"
                      className="py-3 px-4 block w-full shadow-sm text-[#212121] focus:ring-[#e65100] focus:border-[#e65100] border-[#e65100] rounded-md"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="query"
                    className="block text-sm font-medium text-[#e65100]">
                    Query*
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="query"
                      id="query"
                      placeholder="Enter your query"
                      className="py-3 px-4 block w-full shadow-sm text-[#212121] focus:ring-[#e65100] focus:border-[#e65100] border-[#e65100] rounded-md"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#e65100]">
                      Any other comments?
                    </label>
                    <span id="message-max" className="text-sm text-[#212121]">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="extra_comments"
                      name="extra_comments"
                      rows={4}
                      placeholder="Enter your message"
                      className="py-3 px-4 block w-full shadow-sm text-[#212121] focus:ring-[#e65100] focus:border-[#e65100] border-[#e65100] rounded-md min-h-[125px]"
                      aria-describedby="message-max"
                      defaultValue={""}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2 sm:flex sm:justify-end">
                  <button
                    type="submit"
                    className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#212121] hover:bg-[#e65100] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
