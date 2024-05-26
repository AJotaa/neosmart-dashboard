import { BaseButton } from "../BaseButton";
import { BaseDropdown } from "../BaseDropdown";

export function SidebarDropdown({ data }) {
  const { title, options } = data;

  return (
    <BaseDropdown title={title}>
      <ul className="w-full flex flex-col gap-1">
        {options.map((opt) => (
          <li key={opt.name}>
            <BaseButton mode="flat">{opt.name}</BaseButton>
          </li>
        ))}
      </ul>
    </BaseDropdown>
  );
}
