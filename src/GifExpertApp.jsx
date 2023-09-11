import {useState} from "react";
import { AddCategory, GifGrid } from "./components/index";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Gatitos']);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCategories([newCategory]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory
                onNewCategory={onAddCategory}
            />
            {/* Listado de Gif */}
            {categories.map(category => (<GifGrid key={category} category={category}/>))}
  
        </>
    )
}
