import Data from "../components/Data"
import ArticleCard from "../components/ArticleCard"


const Blog = () => {
    return (
        <section className="grid grid-cols-3 gap-20 content-center my-[5vh] mx-[10vw]">
            {Data.map((elm) => (
                <ArticleCard
                    key={elm.id}
                    id={elm.id}
                    img={elm.img_url}
                    title={elm.title}
                />
            ))}
        </section>
    )
}

export default Blog
