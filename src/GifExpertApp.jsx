import { useState } from "react"
import { AddCategory, GifGrid } from './components';
import { sparse, squeeze } from "mathjs";

const GifExpertApp = () => {

  const [ categories, setCategories ] = useState(['One Punch']);

  const onAddCategory = (newCategory) => {

    if(categories.includes(newCategory))return;

    console.log('Hola mundo');

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={onAddCategory}
        // setCategories={setCategories}
      />

      { categories.map(category => (
        <GifGrid
          key={category}
          category={category}
        />
        ))
      }
    </>
  )
}

export default GifExpertApp
