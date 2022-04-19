import styled from "styled-components";
import {useState, useEffect, useContext} from 'react';

export const Category = function ({setCategory})  {

    const [categories,setCategories] = useState([]);
    const defaultCategory = {id: 0, name: 'Tout'};

    useEffect( () => {
        async function getCategories() {
            const response = await fetch('/api/categories');
            const data = await response.json();
            setCategories([defaultCategory, ...data]);
        }
        getCategories()
            .catch(() => console.log('Erreur de récupération de catégories'));
            // Here message error plutôt que console.log

    }, []);

    return(
        <div className="Category">
            <div className="select">
                <SelectCategories onChange={(e) => setCategory(parseInt(e.target.value))}>
                    {categories.map(category =>
                        <option value={category.id} key={category.id}>
                            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                        </option>
                    )}
                </SelectCategories>
            </div>
        </div>
    );
};

// Design
const SelectCategories = styled.select`
    border: none;
    border-radius: 10px;
    padding: 15px;
    width: 40%;
    margin: 15px;
    font-size: 20px;
    box-shadow: rgba(0, 0, 0, 0.15) 0 5px 15px 0;
    background-color: ${({theme}) => theme.components.background};
    color: ${({theme}) => theme.components.textColor};;
`;
