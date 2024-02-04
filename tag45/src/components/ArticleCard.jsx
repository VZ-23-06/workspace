import Button from "./Button"

const ArticleCard = ({ id, img, title }) => (
    
    <section className="artikle-container">
        <div className="zoom-container">
            <img className="cover img" src={img} alt={title} />
        </div>
        <p>{title}</p>
        <Button id={id}/>
    </section>
);

export default ArticleCard