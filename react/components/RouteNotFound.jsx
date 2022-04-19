import {useParams} from "react-router-dom";
import styled from "styled-components";

export const RouteNotFound = function() {
    // je récupère les paramètres de la route pour afficher la page que l'user voulait avoir
    const params = useParams();

    return(
        <Error>
            ERROR 404, la page : <strong>{params["*"]}</strong> n'existe pas !
        </Error>
    );
};

// Design
const Error =styled.h1`
    font-weight: bold;
    text-align: center;
    color: darkred;
`;