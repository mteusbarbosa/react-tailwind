const Article = ({title, text, tags, image, alt}) => {
    return <div className="m-5 p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-xl dark:text-gray-200 flex flex-col items-center ">
        <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold ">{title}</h3>
        <div className="grid gap-1">
            {
                text.map((content, index) => <p className="text-alura-200 dark:text-gray-400" key={index}>{content}</p>)
            }
        </div>
    </div>
}

export default Article;