import React from "react";
import AlmaBetter from "../assets/almalogo.png";

export const Footer = () => {
  return (
    <footer class="relative text-center text-black-400 lg:text-center md:text-center sm:text-center">
      <footer class="bg-veryDarkBlue">
        {/* <!-- Flex Container --> */}
        <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          {/* <!-- Logo and social links container --> */}
          <div class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div class="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2022, All Rights Reserved
            </div>
            {/* <!-- Logo --> */}
            <div>
              <img src={AlmaBetter} class="h-10 cursor-pointer" alt="" />
            </div>
            {/* <!-- Social Links Container --> */}
            <div class="flex justify-center space-x-4">
              {/* <!-- Link 1 --> */}
              <a href="/">
                <img src="img/icon-facebook.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 2 --> */}
              <a href="/">
                <img src="img/icon-youtube.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 3 --> */}
              <a href="/">
                <img src="img/icon-twitter.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 4 --> */}
              <a href="/">
                <img src="img/icon-pinterest.svg" alt="" class="h-8" />
              </a>
              {/* <!-- Link 5 --> */}
              <a href="/">
                <img src="img/icon-instagram.svg" alt="" class="h-8" />
              </a>
            </div>
          </div>
          {/* <!-- List Container --> */}
          <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
              <a href="/" class="hover:text-brightRed">
                Home
              </a>
              <a href="/" class="hover:text-brightRed">
                About
              </a>
              <a href="/" class="hover:text-brightRed">
                Blog
              </a>
              <a href="/" class="hover:text-brightRed">
                Community
              </a>
            </div>
            <div class="flex flex-col space-y-3 text-white">
              <a href="/" class="hover:text-brightRed">
                AlmaX
              </a>
              <a href="/" class="hover:text-brightRed">
                FAQ
              </a>
              <a href="/" class="hover:text-brightRed">
                Careers
              </a>
              <a href="/" class="hover:text-brightRed">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* <!-- Input Container --> */}
          <div class="flex flex-col justify-between">
            <form>
              <div class="flex space-x-3">
                <input
                  type="text"
                  class="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button class="bg-red-700 px-6 py-2 text-white rounded-full hover:bg-brightRedLight focus:outline-none">
                  Go
                </button>
              </div>
            </form>
            <div class="hidden text-white md:block">
              Copyright &copy; 2023, All Rights Reserved
            </div>
          </div>
        </div>
        {/* Bottom Title */}
        <div className="my-4">
          <h3 className="footer-content font-semibold text-gray-300">
            Made with ❤️{" "}
            <a
              class="link"
              href="https://github.com/pavandeveloperr"
              className="hover:underline hover:text-blue-400"
            >
              Mohamed Naufal{" "}
            </a>
          </h3>
        </div>
        <div className="flex absolute -mt-3 items-center">
          <h3 className="text-[8px] text-gray-300">
            Data Provided By CoinGeckoAPI
          </h3>
        </div>
      </footer>
    </footer>
  );
};
