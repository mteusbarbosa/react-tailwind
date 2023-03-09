const Article = ({ title, text, tags, image, alt }) => {
  return (
    <div className="m-5 p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-xl dark:text-gray-200 flex flex-col items-center sm:hover:shadow-black sm:hover:shadow-lg sm:hover:dark:shadow-black">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold ">
        {title}
      </h3>
      <div className="w-full flex justify-end gap-2 pr-5 my-2 hidden sm:flex">
        {tags.map((tag) => (
          <span key={tag} className="bg-alura-100 dark:bg-dark-100 px-4 py-1 rounded-full text-xs uppercase font-bold hover:bg-alura-200 hover:scale-110">{tag}</span>
        ))}
      </div>
      <div className="grid gap-1">
        {text.map((content, index) => (
          <p className="text-alura-200 dark:text-gray-400" key={index}>
            {content}
          </p>
        ))}
      </div>
      {image && <img src={image} alt={alt} className="sm:p-4" />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
};

export default Article;
