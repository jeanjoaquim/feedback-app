import { useParams } from "react-router-dom";

export default function Post() {
    const params = useParams();

    {/*
        This file has nothing to do with the project,
        It's just an example of how to use params    
    */}

    return(
        <h5>{params.id}</h5>
    )
}