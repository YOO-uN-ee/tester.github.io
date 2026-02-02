
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const SOCIAL_MEDIA = [
  {
    icon: "fab fa-twitter",
    link,
  },
  {
    icon: "fab fa-facebook-square",
    link,
  },
  {
    icon: "fab fa-dribbble",
    link,
  },
  {
    icon: "fab fa-github",
    link,
  },
  {
    icon: "fab fa-discord",
    link,
  },
];

const COMPANY = [
  {
    name: "About Us",
    link,
  },
  {
    name: "Blog",
    link,
  },
  {
    name: "Github",
    link,
  },
  {
    name: "Free Products",
    link,
  },
];

const HELP = [
  {
    name: "Knowledge Center",
    link,
  },
  {
    name: "Contact Us",
    link,
  },
  {
    name: "Premium Support",
    link,
  },
  {
    name: "Pricing",
    link,
  },
];

const RESOURCES = [
  {
    name: "Documentation",
    link,
  },
  {
    name: "Custom Development",
    link,
  },
  {
    name: "Discord",
    link,
  },
  {
    name: "Tailwind Components",
    link,
  },
];

const TECHS = [
  {
    name: "React",
    link,
  },
  {
    name: "Astro",
    link,
  },
];

export function Footer() {
  return (
    <footer className="relative z-50 bg-white px-8 pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12">
            <Typography
              variant="h4"
              className="mb-2 !font-semibold !text-primary"
            >
              AstroLaunch UI
            </Typography>
            <Typography className="text-md mt-0 mb-2 font-normal !text-gray-600">
              Easy to use for Tailwind CSS and Material Design.
            </Typography>
            <div className="mt-6">
              {SOCIAL_MEDIA.map(({ icon, link }, key) => (
                <a key={key} href={link} target="_blank" rel="noreferrer">
                  <i
                    className={`${icon} font-xl align-center mr-2 inline-block items-center justify-center rounded-full border-[1.5px] border-blue-gray-50 p-3 text-center text-primary outline-none focus:outline-none`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="ml-auto w-full px-4 md:w-7/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-6/12 pt-6 md:ml-auto md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Company
                </span>
                <ul className="list-unstyled">
                  {COMPANY.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Help and Support
                </span>
                <ul className="list-unstyled">
                  {HELP.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Pricing" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Resources
                </span>
                <ul className="list-unstyled">
                  {RESOURCES.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        rel="noreferrer"
                        target={name === "Documentation" ? "_self" : "_blank"}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ml-auto w-6/12 pt-6 md:px-4 md:pt-0 xl:w-3/12">
                <span className="text-md mb-4 block font-medium text-primary">
                  Tehnologies
                </span>
                <ul className="list-unstyled">
                  {TECHS.map(({ name, link }, key) => (
                    <li key={key}>
                      <a
                        href={link}
                        className="block pb-2 text-sm font-normal leading-relaxed text-gray-600 transition-colors hover:text-primary"
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blue-gray-50" />
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between">
          <div className="text-center lg:text-left">
           
            <div className="text-md mt-2 py-1 font-normal text-gray-600">
              Copyright &copy; {YEAR}{" "}
              <a href="/" className="text-inherit transition-all">
                AstroLaunch UI
              </a>{" "}
              by{" "}
              <a
                href="https://www.creative-tim.com?ref=astroLaunch-ui"
                target="_blank"
                rel="noreferrer"
                className="text-inherit transition-all"
              >
                Creative Tim. Made with ❤️ for a better web.
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
