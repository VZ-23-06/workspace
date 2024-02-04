import { useParams } from "react-router-dom";
import Data from "../components/Data";

const Detail = () => {
    const { detailid } = useParams();
    const detail = Data[detailid];

    
    const { img_url, title, published_date, description, author } = detail;

    return (
        <main className="main-detail">
            <img className="detail-img img-cover" src={img_url} alt={`Bild von ${title}`} />
            <div className="detail-info">
                <div className="flex">
                    <p>{title}</p>
                    <p>{published_date}</p>
                </div>
                <p >{description}</p>
                <p>{author}</p>
            </div>
        </main>
    );
};

export default Detail;
