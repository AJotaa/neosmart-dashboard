import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  link?: string;
  mode?: string;
  clickEvent?: React.MouseEventHandler<HTMLButtonElement>;
}

interface BtnStylesType {
  [key: string]: string;
}

export function BaseButton({
  children,
  link,
  mode = "primary",
  clickEvent,
}: ButtonProps) {
  const btnStyle: BtnStylesType = {
    primary:
      "min-w-[120px] px-2 py-1 bg-[#FF901F] text-white rounded inherit block text-center text-sm 2xl:text-base hover:bg-gradient-to-r from-[#F222FF] to-[#FF901F]",
    flat: "w-full text-left text-sm hover:text-[#C21BCC]",
    icon: "block h-8 w-8 rounded-full flex items-center justify-center bg-[#F7F9FD] text-[#353E58] hover:bg-[#2C3445] hover:text-white dark:text-white dark:hover:text-black dark:bg-[#2C3445] dark:hover:bg-white",
  };

  return (
    <>
      {link ? (
        <Link href={link} className={`${btnStyle[mode]} transition-all`}>
          {children}
        </Link>
      ) : (
        <button
          className={`${btnStyle[mode]} transition-all`}
          onClick={clickEvent}
        >
          {children}
        </button>
      )}
    </>
  );
}
