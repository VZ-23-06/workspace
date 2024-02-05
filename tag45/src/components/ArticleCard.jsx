import Button from "./Button"

const ArticleCard = ({ id, img, title }) => (

    <article className="article-container">
        <div className="zoom-container">
            <img className="cover img" src={img} alt={title} />
        </div>
        <p>{title}</p>
        <Button id={id} />
    </article>
);

export default ArticleCard