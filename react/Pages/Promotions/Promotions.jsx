import {NavLink, Outlet,useSearchParams} from "react-router-dom";

export const Promotions = function () {
    const [searchParams, setSearchParams] = useSearchParams();
    const [promotions, setPromotions] = useState([])

    return(
        <>
            <h1>nos promos du moment</h1>
            <table className="promo-table">
                <tbody>
                    {promotions.map((product) => (
                        <tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <NavLink
                                    style={({isActive }) => {
                                        return {
                                            color: isActive ? "orange" : "aqua",
                                            background: searchParams.get("color"),
                                        };
                                    }}

                                    to={`/promotions/${product.id}`}
                                >
                                    Voir la description
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Outlet />
        </>
    );
};