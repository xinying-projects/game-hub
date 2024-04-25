import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const sortOrders = [
  { label: "Relevance", value: "" },
  { label: "Date Added", value: "-added" },
  { label: "Name", value: "name" },
  { label: "Release Date", value: "-released" },
  { label: "Popularity", value: "-metacritic" },
  { label: "Average Rating", value: "-rating" },
];

interface Props {
  selectedSortOrder: string;
  onSelectSortOrder: (order: string) => void;
}

const SortSelector = ({ selectedSortOrder, onSelectSortOrder }: Props) => {
  const selectedOrder = sortOrders.find(
    (order) => order.value === selectedSortOrder
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
