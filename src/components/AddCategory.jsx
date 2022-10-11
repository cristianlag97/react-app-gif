import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('One Punch');

  const oninputChange = ({ target }) => {
    // console.log(target);
    setInputValue(target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    const input = inputValue.trim();
    if(input.length <= 1) return;

    onNewCategory(input);
    // setCategories( cat => [inputValue, ...cat]);
    // setCategories( cat => [event.target[0].value, ...cat]);
    setInputValue ('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder='Buscar Gifs'
        value={inputValue}
        onChange={oninputChange}
      />
    </form>
  )
}