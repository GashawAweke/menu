import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItems) => {
        return <MenuItem key={menuItems.id} {...menuItems} />;
      })}
    </div>
  );
};
export default Menu;
