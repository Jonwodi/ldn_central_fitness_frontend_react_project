/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";

const standardFeatures = [
  "24/7 Access",
  "No contracts, freeze your accout when you like",
  "Access to the free bicycle stations in London & other major cities",
];
const premiumFeatures = [
  "High quality gym classes included",
  "A 15% discount on monthly gym memberships with our partner gyms",
  "Free nutrition guide and workout templates",
];
const essentialFeatures = [
  "A 10% discount on monthly gym memberships with our partner gyms",
  "Access to the top personal trainers in London",
  "Access to new and modern gym equipment & technology",
  "Access to the top gym & fitness clubs in London",
  "Get news on the latest offers & discounts to email",
];

export default function TailwindPaperForm() {
  return (
    <div className="bg-[#212121] border-t-2 border-t-[#e65100]">
      <div className="pt-24 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-[#1de9b6] uppercase tracking-wider">
            Pricing Plans
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-[#e65100] sm:text-4xl lg:text-5xl">
            The right price for you, whoever you are
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-[#1de9b6] sm:mt-5 sm:text-2xl">
            Join now and get access to the best gyms and fitness clubs in
            London. With perks and discounts.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-[#212121] lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-[#e65100] px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-[#212121]"
                          id="tier-standard">
                          Standard
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-[#212121]">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              £
                            </span>
                            <span className="font-extrabold">15.99</span>
                          </span>
                          <span className="text-xl font-medium text-[#212121]">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-[#212121] p-6 bg-white sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {standardFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-[#e65100]"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-[#212121]">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="/join"
                            className="block w-full text-center rounded-lg border border-transparent bg-[#e65100] px-6 py-3 text-base font-medium text-white  hover:bg-[#1de9b6]"
                            aria-describedby="tier-hobby">
                            JOIN NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-[#e65100]"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-[#e65100] px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Most popular
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#1de9b6] rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3
                        className="text-center text-3xl font-semibold text-[#212121] sm:-mx-6"
                        id="tier-essential">
                        Essential
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-[#212121] sm:text-6xl">
                          <span className="mt-2 mr-2 text-4xl font-medium">
                            £
                          </span>
                          <span className="font-extrabold">27.99</span>
                        </span>
                        <span className="text-2xl font-medium text-[#212121]">
                          /month
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-[#e65100] rounded-b-lg pt-10 pb-8 px-6 bg-white sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {essentialFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon
                              className="flex-shrink-0 h-6 w-6 text-[#e65100]"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="ml-3 text-base font-medium text-[#212121]">
                            {feature}
                          </p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                        <a
                          href="/join"
                          className="block w-full text-center rounded-lg border border-transparent bg-[#1de9b6] px-6 py-4 text-xl leading-6 font-medium text-white hover:opacity-75"
                          aria-describedby="tier-growth">
                          JOIN NOW
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-[#e65100] px-6 py-10">
                      <div>
                        <h3
                          className="text-center text-2xl font-medium text-[#212121]"
                          id="tier-Premium">
                          Premium
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-[#212121]">
                            <span className="mt-2 mr-2 text-4xl font-medium">
                              £
                            </span>
                            <span className="font-extrabold">45.99</span>
                          </span>
                          <span className="text-xl font-medium text-[#212121]">
                            /month
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-[#212121] p-6 bg-white sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {premiumFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon
                                className="flex-shrink-0 h-6 w-6 text-[#e65100]"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="ml-3 text-base font-medium text-[#212121]">
                              {feature}
                            </p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                          <a
                            href="/join"
                            className="block w-full text-center rounded-lg border border-transparent bg-[#e65100] px-6 py-3 text-base font-medium text-white hover:bg-[#1de9b6]"
                            aria-describedby="tier-scale">
                            JOIN NOW
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
