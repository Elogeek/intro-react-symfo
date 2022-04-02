import {useParams} from "react-router-dom";

export const RouteNotFound = function() {
    // je récupère les paramètres de la route pour afficher la page que l'user voulait avoir
    const params = useParams();

    return(
        <div className="route-not-found">
            ERROR 404, la page : <strong>{params["*"]}</strong> n'existe pas !
        </div>
    );
};