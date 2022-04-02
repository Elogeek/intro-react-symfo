import './Category.css';

export const Category = function ({setCategory})  {

    const categories = [
        {id:0, name: 'Tout'},
        {id:1, name: 'wii'},
        {id:2, name: 'Nintedo'},
        {id:3, name: 'Pc'},
        {id:4, name: 'Autres'},
    ];

    return(
        <div className="Category">
            <div className="select">
                <select onChange={(e) => setCategory(parseInt(e.target.value))}>
                    {categories.map(category =>
                        <option value={category.id} key={category.id}>
                            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                        </option>
                    )}
                </select>
            </div>
        </div>
    );
};