const MenuItem = ({ img, price, title, desc }) => {
  return (
    <article className='menu-items'>
      <img src={img} alt={title} className='img' />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
