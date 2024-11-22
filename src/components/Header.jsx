import React from "react";

const Header = ({ toogleModel, nbOfContacts }) => {
  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Contact List {nbOfContacts}
          </span>

          <div class="flex items-center lg:order-2">
            <a
              href="#"
              class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Add New Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
