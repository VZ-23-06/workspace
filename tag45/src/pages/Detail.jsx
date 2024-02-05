import { useParams } from "react-router-dom";
import Data from "../components/Data";

const Detail = () => {
    const { detailid } = useParams();
    const detail = Data[detailid];


    const { img_url, title, published_date, description, author } = detail;

    return (
        <main className="mt-[5vh] flex items-end flex-col">
            <img className="h-[83vh] w-[78vw] rounded-tl-[15px] rounded-bl-[15px] object-cover" src={img_url} alt={`Bild von ${title}`} />
            <div className="mr-[15vw] mt-7 w-[900px]">
                <div className="flex justify-between">
                    <p className="text-4xl">{title}</p>
                    <p>{published_date}</p>
                </div>
                <p className="text-[12px]">{description}</p>
                <p>{author}</p>
            </div>
        </main>
    );
};

export default Detail;
