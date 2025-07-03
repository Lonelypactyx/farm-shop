import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import Tabs from "/src/components/ui/tabs/tabs";
import {
  StyledProductCard,
  ProductImg,
  ProductTitle,
  PropertiesItem,
  Property,
  Price,
} from "./style";

function PropertiesList({ list = [], delimiter = ": " }) {
  return (
    <ul>
      {list.map((option, index) => (
        <PropertiesItem key={`tab${index * 10}`}>
          <Property>
            {option.property}
            {delimiter}
          </Property>
          {option.value}
        </PropertiesItem>
      ))}
    </ul>
  );
}

function ProductCard({ product }) {
  const tabsData = [
    {
      title: "Oписание",
      content: product.description,
    },
    {
      title: "Характеристики",
      content: <PropertiesList list={product.specifications} />,
    },
    {
      title: "Свойства",
      content: <PropertiesList list={product.structure} />,
    },
  ];
  return (
    <StyledProductCard>
      <ProductImg src={product.image} />
      <ProductTitle as="h3" fontSizeValue={TitleSize.SMALL}>
        {product.name}
      </ProductTitle>
      <Tabs tabsData={tabsData} />
      <Price>
        {product.price} руб. / {product.weight} гр.
      </Price>
    </StyledProductCard>
  );
}

export default ProductCard;
