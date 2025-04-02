import React from "react";

const menus = [
  { name: "Appliances", url: "#", id: 1 },
  { name: "Groceries", url: "#", id: 2 },
  { name: "Gadgets", url: "#", id: 3 },
  { name: "Clothing", url: "#", id: 4 },
];

function Navigation() {
  return (
    <nav className="navigation">
      {menus.map((menu) => (
        <button key={menu.id} onClick={() => console.log(menu.name)}>
          {menu.name}
        </button>
      ))}
    </nav>
  );
}

export default Navigation;
