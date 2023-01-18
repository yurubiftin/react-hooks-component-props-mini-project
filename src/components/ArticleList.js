import Article from "./Article"

function ArticleList({posts}) {
     const article = posts.map((article) => {
        return <Article 
        key={article.id} 
        title={article.title} 
        preview={article.preview} 
        date={article.date} 
        minutes={article.minutes}
        />
     });

    return (
        <main>{article}</main>

    )
}
export default ArticleList
