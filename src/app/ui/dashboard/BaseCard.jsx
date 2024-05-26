import Image from "next/image";
import { BaseButton } from "../BaseButton";
import { global_icons } from "@/icons";

const basePath = "/categories/";

export function BaseCard({ data }) {
  const { slug, name, image_path } = data;

  return (
    <li className="h-full rounded-xl overflow-hidden group">
      <div className="flex flex-col justify-between h-full min-h-80 bg-white group-hover:bg-gray-200 dark:bg-[#151D30] dark:group-hover:bg-[#0B0F18] transition-all">
        <div className="min-h-[120px] xl:min-h-[159px] relative">
          <Image
            src={`${basePath}${image_path}`}
            alt={slug}
            fill
            style={{ objectFit: "cover" }}
            sizes="320px, 159px"
          />
        </div>
        <div className="flex flex-col justify-between gap-4 h-full p-6 2xl:p-8">
          <div>
            <div className="flex justify-between items-center mb-6 group-hover:text-[#FF901F] transition-all">
              <p className="text-lg font-semibold 2xl:text-2xl">{name}</p>
              <span>{global_icons[slug]}</span>
            </div>
            <ul>
              {data.options.map((e, i) => (
                <li key={e + i}>
                  <p className="d text-sm 2xl:text-lg">{e}</p>
                  <hr className="text-white my-1" />
                </li>
              ))}
            </ul>
          </div>
          <div className="w-fit mx-auto">
            <BaseButton>SEE MORE CATEGORIES</BaseButton>
          </div>
        </div>
      </div>
    </li>
  );
}
