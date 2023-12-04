import {useState} from 'react';

const Filter=({
        onSort,
        onSearch,
        sort,
        serachValue,
        categories,
        selectedCategory,
        onSelectCategory
    })=>{
   
return(
<div>
<div className="flex items-center justify-between mb-6">
                <label htmlFor="search-input" className="text-slate-500 text-lg">
                    Search
                    </label>
                <input 
                type="text"
                 name="search-input" 
                 id="search-input"
                  className="bg-transparent rounded-xl border border-slate-500 text-slate-500"
                  value={serachValue}
                  onChange={onSearch}/>
            </div>
           
            <div className="flex items-center justify-between mb-6">
                <label htmlFor="sort-products" className="text-slate-500 text-lg">Sort</label>
                <select 
                name="sort-products" 
                id="sort-products" 
                className="bg-transparent rounded-xl text-slate-400"
                value={sort}
                onChange={onSort}>
          <option className="bg-slate-500 text-slate-300" value="">Select a category</option>
          <option className="bg-slate-500 text-slate-300" value="latest">Latest</option>
          <option className="bg-slate-500 text-slate-300" value="earliest">Earliest</option>
        </select>
            </div>
            <div className="flex items-center justify-between mb-6">
                <label htmlFor="sort-products" className="text-slate-500 text-lg">Category</label>
                <select 
                name="sort-products" 
                id="sort-products" 
                className="bg-transparent rounded-xl text-slate-400"
                value={selectedCategory}
                onChange={onSelectCategory}>
          <option className="bg-slate-500 text-slate-300" value="">Select a category</option>
          {categories.map((category)=>{
            return(
<option className="bg-slate-500 text-slate-300" value= {category.id} key={category.id}>{category.title}</option>
            )
          })}
          
        </select>
            </div>
</div>
)
}
export default Filter