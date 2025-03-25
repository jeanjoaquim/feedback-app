import { useParams } from "react-router-dom";

export default function Post() {
    const params = useParams();

    return(
        <h5>{params.id}</h5>
    )
}