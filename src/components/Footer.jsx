import { Link } from "react-scroll";
import { useState } from "react";
import socialMediaLinks from "../assets/socialMedia";

const navigation = {
  menu: [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ],
  projects: [
    {
      name: "Course Store",
      href: "https://github.com/jashezan/Course-Store-with-NodeJS",
    },
    {
      name: "Foodies Website",
      href: "https://icbatch4-shezan-a4.netlify.app/",
    },
    { name: "Todo App", href: "https://github.com/jashezan/React-JS-Todo-App" },
    {
      name: "Breaking Bad Cast",
      href: "https://github.com/jashezan/Breaking-Bad-Cast",
    },
  ],
  social: [
    ...socialMediaLinks
  ],
};

export default function Footer() {
  const [isvalid, setValid] = useState(false)
  const validEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <footer className="backdrop-blur-lg" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-2 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="grid grid-cols-3  gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Menu
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.menu.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        smooth
                        className="text-base text-gray-300 hover:text-white cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Projects
                </h3>
                <ul role="list" className="mt-4 space-y-4">
                  {navigation.projects.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.profileLink}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <img className="h-6 w-6 bg-slate-800" src={item.iconLink} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            Nishant &copy; 2023 Workflow, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
