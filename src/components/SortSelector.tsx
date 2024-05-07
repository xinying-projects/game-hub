import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../stores/GameQueryStore";

const sortOrders = [
  { label: "Relevance", value: "" },
  { label: "Date Added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release Date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average Rating", value: "-rating" },
];

const SortSelector = () => {
  const onSelectSortOrder = useGameQueryStore((s) => s.onSelectSortOrder);
  const order = useGameQueryStore((s) => s.gameQuery.order);
  const selectedOrder = sortOrders.find(
    (sortOrder) => sortOrder.value === order
  );

  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: {selectedOrder ? selectedOrder.label : "Relevance"}
        </MenuButton>
        <MenuList>
          {sortOrders.map((order) => (
            <MenuItem
              onClick={() => onSelectSortOrder(order.value)}
              key={order.value}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
