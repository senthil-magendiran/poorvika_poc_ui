import React, { useContext, useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import "./styles.scss";
import companyLogo from "assets/cashify_logo.png";
import appContext from "context/app.context";
import { ProductService } from "services/product.service";

const NavBar: React.FC = () => {
  const { setStep, setViewLoginMenu, isAuthenticated, setIsAuthenticated } = useContext(appContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [location, setLocation] = React.useState<string>("");
  const productService = new ProductService();

  const open = Boolean(anchorEl);

  const getLocation = async (): Promise<void> => {

    const locationResponse: any = await productService.getGeoInfo();
    console.log(locationResponse);
    setLocation(locationResponse?.city)

  }
  const menuClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    getLocation();
  }, [])
  return (
    <div className="navbar">
      <div className="navbar__image">
        <img
          src={companyLogo}
          alt="Company Brand"
          onClick={() => setStep(0)}
          className="cursor-pointer"
        />
      </div>
      <div className="navbar__search__input d-none">
        <input type="text" placeholder="Start Typing..." />
      </div>
      <div className="navbar_location__and__login gap-4">
        <div className="navbar__location flex justify-center items-center cursor-pointer d-none">
          <LocationOnIcon className="clr__primary" />
          <h1 className="text-sm text-black">{location}</h1>
          <KeyboardArrowDownIcon />
        </div>
        {!isAuthenticated ? (
          <button
            className="btn btn__primary btn__login"
            onClick={() => setViewLoginMenu(true)}
          >
            Login
          </button>
        ) : (
          <div
            className="flex items-center cursor-pointer"
          >
            <AccountCircleIcon className="clr__primary" />
            <p className="text-sm px-2 mobile-w-max">Senthil Kumar M</p>
            <div onClick={(event) => menuClickHandler(event)} >
              <KeyboardArrowDownIcon />

            </div>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => { setStep(6); handleClose() }}>My Orders</MenuItem>
              <MenuItem onClick={() => { setIsAuthenticated(false); setStep(0); handleClose() }}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
