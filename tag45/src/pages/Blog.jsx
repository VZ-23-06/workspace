import Data from "../components/Data"
import ArticleCard from "../components/ArticleCard"


const Blog = () => {
    return(
        <section className="blog-section">
            {Data.map((item) =>
                <ArticleCard 
                    key={item.id}
                    id={item.id}
                    img={item.img_url}
                    title={item.title}
                />
            ) }
        </section>
    )
}

export default Blog
