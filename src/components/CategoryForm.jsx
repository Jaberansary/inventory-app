import {useState} from 'react'

const CategoryForm=({setCategories})=> {
    const [isShow,setIsShow]=useState(false);
    const[categoryFormData,setCategoryFormData]=useState({title:"",description:""});
   

    const changeHandler=(e)=>{
        const {name,value}=e.target;
        setCategoryFormData({...categoryFormData,[name]:value});};
    
    const cancelFormHandler=(e)=>{
        e.preventDefault();
        setIsShow(false);
    };
    const addNewCategoryHandler=(e)=>{
        e.preventDefault();
    const newCategory= {...categoryFormData,
        createdAt:new Date().toISOString(),
    id:new Date().getTime()
    };
    setCategories((prevState)=>[...prevState,newCategory]);
    setCategoryFormData({title:"",description:""})
};
  return (
    <section>
    <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold">Add New Category</h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
            <div>
                <label htmlFor="category-title" className="block mb-1 text-slate-400">Title</label>
                <input 
                type="text"
                 name="title"
                id="category-title" 
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
                value={categoryFormData.title}
                onChange={changeHandler}
                />
            </div>
            <div>
                <label htmlFor="category-description" className="block mb-1 text-slate-400">Description</label>
                <textarea
                type="text"
                name="description" 
                id="category-description" 
                className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
                value={categoryFormData.description}
                onChange={changeHandler}>

                </textarea>
            </div>
            <div className="flex items-center justify-between gap-x-4">
                <button 
                className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2" 
                id="cancel-add-category"
                onClick={cancelFormHandler}>Cancel</button>
                <button 
                id="add-new-category" 
                onClick={addNewCategoryHandler}
                className="flex-1 border border-slate-500 bg-slate-500 text- text-slate-200 rounded-xl py-2">
                    Add NewCategory
                    </button>
            </div>
        </form>
    </div>
    <button
     id="toggle-add-category"
      className="text-slate-400 text-lg mb-4 font-medium"
      onClick={()=>setIsShow((prevState)=>!prevState)}>Add New Category?</button>
</section>
  );
};

export default CategoryForm