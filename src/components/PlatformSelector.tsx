import { Button, MenuItemCommand } from "@chakra-ui/react";
import { MenuRoot, MenuContent, MenuItem, MenuTrigger } from "./ui/menu";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <select className="form-select">
      <option value="">Platforms</option>
      {data.map((platform) => (
        <option key={platform.id}>{platform.name}</option>
      ))}
    </select>
  );
};

export default PlatformSelector;
