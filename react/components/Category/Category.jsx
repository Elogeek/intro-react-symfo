import './Category.css';
import {useState, useEffect} from 'react';

export const Category = function ({setCategory})  {

    const [categories,setCategories] = useState([]);
    useEffect( () => {
        async function getCategories() {
            const data = await fetch('/api/categories');
            setCategories(await data.json());
        }
        getCategories()
            .catch(() => console.log('Erreur de récupération de catégories'));
            // Here message error plutôt que console.log

    }, []);

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