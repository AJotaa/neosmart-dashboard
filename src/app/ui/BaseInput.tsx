import { forwardRef } from "react";

interface BaseInputProps {
  inputData?: React.InputHTMLAttributes<HTMLInputElement>;
  id?: string;
  required?: boolean;
}

// Using forwardRef to properly pass the ref to the input element
export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ inputData, id, required }, ref) => {
    return (
      <div className="group relative flex items-center w-full">
        <input
        suppressHydrationWarning
          {...inputData}
          className="text-black outline-0 rounded px-2 py-1 hover:bg-amber-200 font-inherit w-full bg-gray-300 dark:bg-white dark:hover:bg-amber-200"
          required={required}
          name={id}
          id={id}
          ref={ref} // Pass ref directly here
        />
      </div>
    );
  }
);
