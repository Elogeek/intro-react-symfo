import loader from "./../../../assets/images/loading.gif";

export const Loader = function () {

    return (
        <div className="loader">
            <img src={loader} alt="Chargement en cours"/>
        </div>
    );
};