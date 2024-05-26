import Image from "next/image";
import { BaseButton } from "../BaseButton";
import { FooterForm } from "./FooterForm";
import { global_icons } from "@/icons";

// Define types for the data structures
interface RegionData {
  region: string;
  description: string;
}

interface FaqData {
  link: string;
  description: string;
}

interface TermsData {
  link: string;
  description: string;
}

interface SocialData {
  link: string;
  description: string;
  icon: React.ReactNode; // Ensure icon is a React component
}

// Define data for different sections of the footer
const regionData: RegionData[] = [
  {
    region: "EUROPE",
    description:
      "Vía de las Dos Castillas, 33 Edificio Ática 7, Planta 3 28224 Pozuelo de Alarcón Madrid, Spain",
  },
  {
    region: "USA",
    description: "1101 Brickell Ave Suite N1400 33131, Miami FL, United States",
  },
];

const faqsData: FaqData[] = [
  {
    link: "#",
    description: "Neoprompts",
  },
  {
    link: "#",
    description: "FAQs",
  },
];

const termsData: TermsData[] = [
  {
    link: "#",
    description: "Legal Policy",
  },
  {
    link: "#",
    description: "Privacy Policy",
  },
  {
    link: "#",
    description: "Terms of Service",
  },
];

const socialData: SocialData[] = [
  {
    link: "#",
    description: "linkedin",
    icon: global_icons.linkedinIcon,
  },
  {
    link: "#",
    description: "instagram",
    icon: global_icons.instagramIcon,
  },
  {
    link: "#",
    description: "twitter",
    icon: global_icons.twitterIcon,
  },
];

export function TheFooter() {
  // Utility function to generate lists of footer items
  function footerList<T extends { link: string; description: string }>(
    arr: T[]
  ) {
    return arr.map((e, i) => (
      <li key={i + e.description} className="[&>*]:text-base 2xl:[&>*]:text-lg">
        <BaseButton link={e.link} mode="flat">
          {e.description}
        </BaseButton>
      </li>
    ));
  }

  return (
    <footer className="bg-white p-12 lg:pl-60 dark:bg-gradient-to-r from-[#151D30] via-[#151D30] to-slate-600 2xl:text-lg transition-all">
      <div className="m-auto xl:gap-3 max-w-[90vw] xl:max-w-[1100px]">
        <div className="mx-auto mb-6 min-w-[200px] invert dark:invert-0 xl:mb-8">
          <Image
            src="/Neoprompts.png"
            alt=""
            width={230}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="flex flex-wrap justify-end gap-7 m-auto">
          <div className="flex flex-col lg:grid grid-cols-3 gap-7 max-w-[700px]">
            <div>
              <ul className="flex flex-col gap-6">
                {regionData.map((e) => (
                  <li key={e.region}>
                    <p className="mb-1">
                      <strong>{e.region}</strong>
                    </p>
                    <p>{e.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>{footerList(faqsData)}</ul>
            </div>
            <div>
              <ul>{footerList(termsData)}</ul>
              <ul className="flex gap-6 mt-4">
                {socialData.map((e, i) => (
                  <li key={i + e.description}>
                    <BaseButton link={e.link} mode="flat">
                      {e.icon}
                    </BaseButton>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[700px] w-full xl:w-1/4">
            <FooterForm />
          </div>
        </div>
        <div className="text-center mx-auto mt-5">
          <p className="mb-2">support@neoprompts.ai</p>
          <p>
            Neoprompts is a product of <strong>Neosmart</strong>, all rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
