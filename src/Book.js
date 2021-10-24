import React from 'react'

const Book = (props) => {
  const { img, title, author } = props;
  const clickHandler = () => {
    alert('Hello');
  };
  return (
    <article className='book'>
      <img src={img} alt=""/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>reference ex</button>
    </article>
  );
};

export default Book
