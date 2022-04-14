import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownMenu from 'react-bootstrap/DropdownMenu'

return (
    <div className={classes.categories} id="categories">
      <h2>Categories:</h2>
      {state.categories.map((item) => (
        <Dropdown>
        <DropdownButton>
          <DropdownMenu>
            <Dropdown.Item>
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
          </Dropdown.Item>
          </DropdownMenu>
        </DropdownButton>
        </Dropdown>
      ))}
    </div>
  );
}