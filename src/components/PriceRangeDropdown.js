import React, { useContext, useState } from "react";
import {
  RiHome5Fill,
  RiArrowDownSFill,
  RiArrowUpSLine,
  RiMapPinLine,
  RiArrowDownSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import { HouseContext } from "./HouseContext";

const PriceRangeDropdown = () => {
  const { price, setprice } = useContext(HouseContext);
  const [isopen, setisopen] = useState(false);

  const prices = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 -130000",
    },
    {
      value: "130000 -160000",
    },
    {
      value: "160000 -190000",
    },
    {
      value: "190000 -220000",
    },
    {
      value: "10000 -30000",
    },
    {
      value: "30000 -40000",
    },
  ];

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button
        onClick={() => setisopen(!isopen)}
        className="dropdown-btn w-full text-left"
      >
        <RiHome5Fill className="dropdown-icon-primary " />
        <div>
          <div className="text-[15px] font-medium leading-tight ">
            {" "}
            {price}{" "}
          </div>{" "}
          <div className="text-[13px]"> Choose price range </div>{" "}
          {isopen ? (
            <RiArrowDownSLine className="dropdown-icon-secondary" />
          ) : (
            <RiArrowUpSLine className="dropdown-icon-secondary" />
          )}{" "}
        </div>{" "}
      </Menu.Button>{" "}
      <Menu.Items className="dropdown-menu">
        {" "}
        {prices.map((price, index) => {
          return (
            <Menu.Item
              onClick={() => setprice(price.value)}
              className="cursor-pointer hover:text-violet-700 transition"
              as="li"
              key={index}
            >
              {price.value}{" "}
            </Menu.Item>
          );
        })}{" "}
      </Menu.Items>{" "}
    </Menu>
  );
};

export default PriceRangeDropdown;
