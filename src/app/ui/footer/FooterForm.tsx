"use client";

import { useFields } from "@/utilities/hooks/useFields";
import { useCheckbox } from "@/utilities/hooks/useCheckbox";
import { BaseButton } from "../BaseButton";
import { BaseInput } from "../BaseInput";
import { BaseCheckbox } from "../BaseCheckbox";

export function FooterForm() {
  const email = useFields({ type: "email" });
  const firstCheckbox = useCheckbox();
  const secondCheckbox = useCheckbox();

  function handleFornm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (firstCheckbox.value && secondCheckbox.value) {
      alert(`
      Email: ${email.value},
      Terms and Conditions: ${firstCheckbox.value},
      Commercial information: ${secondCheckbox.value}
    `);
    } else {
      alert("Please accept the terms and conditions");
    }
  }

  return (
    <form action="" onSubmit={handleFornm}>
      <div className="flex flex-col gap-5 text-sm max-w-[500px]">
        <p className="text-lg font-semibold">
          Enter your email to get updates &#129668;
        </p>
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>

          <BaseInput inputData={email} id="email" required />
        </div>
        <BaseCheckbox
          inputData={firstCheckbox}
          label="I have read and accept the Terms and Conditions and the Privacy Policy"
          id="first"
        />

        <BaseCheckbox
          inputData={secondCheckbox}
          id="second"
          label="I would like to receive commercial information from Neoprompts"
        />
        <BaseButton mode="primary">Register</BaseButton>
      </div>
    </form>
  );
}
