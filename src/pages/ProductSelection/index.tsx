import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import "./styles.scss";
import appContext from "context/app.context";
import { ProductService } from "services/product.service";
import { IAPIResponse } from "services/interfaces/common.interface";
import { IProduct } from "services/interfaces/product.interface";

const ProductSelectionPage: React.FC = () => {

  const {setStep, setSelectedProduct} = React.useContext(appContext);

  const [categoryList, setCategoryList] = useState<string[]>([]);
  const [brandList, setBrandList] = useState<string[]>([]);
  const [productList, setProductList]= useState<IProduct[]>([])
  const [category, setCategory] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [product, setProduct] = useState<string>("");

  const productService = new ProductService();
  
  const getProducts = async (): Promise<void> => {

    const productResponse: IAPIResponse = await productService.getCategory(); 

    if(productResponse.status === "success") {
      setCategoryList(productResponse.data.category);
    }

  }

  const getBrandList = async (category: string): Promise<void> => {

    const brandResponse: IAPIResponse = await productService.getBrand(category); 

    if(brandResponse.status === "success") {
      setBrandList(brandResponse.data.brand);
    }
  }

  const getProductList = async (brand: string) : Promise<void> => {
    const productListResponse: IAPIResponse = await productService.getProductList(category, brand); 

    if(productListResponse.status === "success") {
      setProductList(productListResponse.data.products);
    }
  }

  const productSelectionHandler = async (category: string): Promise<void> => {
    setCategory(category);
    getBrandList(category);
  }

  const brandSelectionHandler = async (brand: string) : Promise<void> => {
    setBrand(brand);
    getProductList(brand);
  }

  const initiateSellHandler = () => {
    const selectedProduct = productList.find((prod: IProduct) => prod.model === product);
    if(selectedProduct) {
      setSelectedProduct(selectedProduct);
      setStep(1);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="product__selection bg-[#2c68db]">
      <div className="product__selection__card shadow">
        <div className="product__selection__options">
          <div className="option sell__option">Sell</div>
          <div className="option repair__option">Repair</div>
        </div>
        <FormControl fullWidth className="selection_options">
          <InputLabel id="product">Product</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="category"
            onChange={(event) => productSelectionHandler(event.target.value)}
          >
            {categoryList?.map((item: string) => <MenuItem value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth className="selection_options">
          <InputLabel id="brand">Brand</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={brand}
            label="Brand"
            onChange={(event) => brandSelectionHandler(event.target.value)}
          >
           {brandList?.map((item: string) => <MenuItem value={item}>{item}</MenuItem>)}
          </Select>
        </FormControl>
        <FormControl fullWidth className="selection_options">
          <InputLabel id="model">Select Model</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={product}
            label="Select Model"
            onChange={(event) => setProduct(event.target.value)}
          >
           {productList?.map((item: IProduct) => <MenuItem value={item.model}>{item.model}</MenuItem>)}
          </Select>
        </FormControl>
        <button className="btn btn__primary btn__sell" onClick={() => initiateSellHandler()}>Sell Now</button>
      </div>
    </div>
  );
};

export default ProductSelectionPage;
