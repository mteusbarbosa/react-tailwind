import Input from "../Input/Input";

export default function Form({ onSubmit }) {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = event.target[0].value;
    const email = event.target[1].value;
    onSubmit({ name, email });
  };
  return (
    <form
      onSubmit={safeSubmit}
      className="h-full flex flex-col items-center justify-center gap-10 -mt-20 mx-5"
    >
      <Input type="text"  placeholder="Insira seu nome..." required />
      <Input type="email" placeholder="Insira seu email" required/>
      <button
        type="submit"
        className="bg-alura-100 dark:bg-dark-200 rounded-full text-dark-100 dark:text-gray-200 py-1 px-12 uppercase hover:animate-pulse hover:shadow-sm hover:shadow-gray-500 hover:dark:shadow-black"
      >
        Seguir
      </button>
    </form>
  );
}
