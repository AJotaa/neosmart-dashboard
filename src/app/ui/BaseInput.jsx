export const BaseInput = ({ inputData, id, required }) => {
  return (
    <div className="group relative flex items-center w-full">
      <input
        {...inputData}
        className="text-black outline-0 rounded px-2 py-1 hover:bg-amber-200 font-inherit w-full bg-gray-300 dark:bg-white dark:hover:bg-amber-200"
        required={required}
        name={id}
        id={id}
      />
    </div>
  );
};
