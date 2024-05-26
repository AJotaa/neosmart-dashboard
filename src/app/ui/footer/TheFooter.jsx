import Image from "next/image";
import { BaseButton } from "../BaseButton";
import { FooterForm } from "./FooterForm";
import { global_icons } from "@/icons";

const regionData = [
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

const faqsData = [
  {
    link: "#",
    description: "Neoprompts",
  },
  {
    link: "#",
    description: "FAQs",
  },
];

const termsData = [
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

const socialData = [
  {
    link: "#",
    description: "linkedin",
    icon: "linkedinIcon",
  },
  {
    link: "#",
    description: "instagram",
    icon: "instagramIcon",
  },
  {
    link: "#",
    description: "twitter",
    icon: "twitterIcon",
  },
];

export function TheFooter() {
  function footerList(arr) {
    return arr.map((e, i) => (
      <li key={i + e.description} className="[&>*]:text-base 2xl:[&>*]:text-lg">
        <BaseButton href={e.link} mode="flat">
          {e.description}
        </BaseButton>
      </li>
    ));
  }

  return (
    <footer className="bg-white lg:pl-60 dark:bg-gradient-to-r from-[#151D30] via-[#151D30] to-slate-600 2xl:text-lg transition-all">
      <div className="m-auto p-10 xl:gap-3 max-w-[90vw] xl:max-w-[1100px]">
        <div className="mx-auto mb-6 min-w-[200px] invert dark:invert-0 xl:mb-16">
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
                    <BaseButton href={e.link} mode="flat">
                      {global_icons[e.icon]}
                    </BaseButton>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="max-w-[700px] w-full xl:w-60">
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
