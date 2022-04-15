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
            <Dropdown.Item
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

return (
  <div className={classes.categories} id="categories">
    <h2>Categories:</h2>
    <div className="dropdown">
      <div className="dropdownMain">
        <button>Select a category below:</button>
      {state.categories.map((item) => (
        // {items.filter(item => item.fields.category)}
        <span className="dropdownContent">
          <button
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </button>
        </span>
    ))}
      </div>
    </div>
  </div>
);
}