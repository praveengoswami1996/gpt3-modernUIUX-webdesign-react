import './Article.css';

function Article({ image, date, title }) {
    return (
        <div className='gpt3__blog-container_article'>
            <div className='gpt3__blog-container_article-image'>
                <img src={ image } alt="blog pic"/>
            </div>

            <div className='gpt3__blog-container_article-content'>
                <div>
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article;