import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData();
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

export async function loader() {
  const res = await fetch("https://react-fast-pizza-api.jonas.io/api/menu");

  if (!res.ok) {
    throw Error("Failed getting menu");
  } else {
    const {data}  = await res.json();
    return data;
  }
}

export default Menu;
