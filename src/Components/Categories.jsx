import React, { use } from 'react';
import { NavLink } from 'react-router';
 const categoryPomise=fetch('/categories.json').then(res=>res.json())
const Categories = () => {
    const categories=use(categoryPomise);
    
    return (
        <div>
            <h2 className='font-black'>All Categories</h2>
            <div className="grid grid-cols-1 mt-4 gap-3">
                {
               categories.map(categorie=> <NavLink 
                className={'btn border-0 bg-base-100 font-semibold text-accent hover:bg-base-200 ' }
                to={`/category/${categorie.id}`}
                 key={categorie.id}>
                    {categorie.name}
                    </NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;