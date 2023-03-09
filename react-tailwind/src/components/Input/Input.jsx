export default function Input(props) {
  return (
    <input
      className="py-1 pl-5 w-full max-w-lg dark:bg-dark-200 text-dark-100 dark:text-gray-200 rounded-full outline-none focus:border-2 focus:border-alura-100 placeholder:text-gray-400 placeholder:dark:text-gray-600 placeholder:text-xs placeholder:uppercase placeholder:font-bold focus:dark:border-gray-600 focus:invalid:border-2 focus:invalid:border-red-700 focus:dark:invalid:border-2 focus:dark:invalid:border-red-700"
      {...props}
    />
  );
}
