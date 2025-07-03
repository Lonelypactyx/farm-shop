import React, { useState } from "react";
import {
  BuyPageMain,
  OrderForm,
  Panel,
  OrderPrice,
  OrderButton,
  ProductSwiper,
} from "./style";
import Title, { TitleSize } from "/src/components/ui/title/title";
import TextInput from "/src/components/ui/text-input/text-input";
import ProductCard from "/src/components/ui/product-card/product-card";
import CheckboxList from "/src/components/ui/checkbox-list/checkbox-list";
import productsData from "/src/mocks/products";
import { SwiperSlide } from "swiper/react";
import SwiperCore, { Mousewheel, Scrollbar } from "swiper/core";
import "swiper/swiper-bundle.min.css";
SwiperCore.use([Mousewheel, Scrollbar]);

function PanelTitle({ children }) {
  return (
    <Title as="h2" fontSizeValue={TitleSize.EXTRA_SMALL} marginBottom={12}>
      {children}
    </Title>
  );
}

function BuyPage() {
  const [swiperRef, setSwiperRef] = useState(null);
  const [selectProductIds, setSelectProductIds] = useState([]);

  const fullPrice = selectProductIds
    .reduce((sum, id) => sum + productsData[id].price, 0)
    .toString()
    .replace(/(\d)(?=(\d\d\d)+$)/, "$1 ");

  const [address, setAddress] = useState("");

  const handleBuyClick = () => {
    alert(`Спасибо за заказ, вы купили:\n${selectProductIds.map(
      (id) => `${productsData[id].name} - ${productsData[id].price} руб.\n`
    )}
    Итого: ${fullPrice} руб.
    Доставка по адресу: ${address}.`);
  };

  return productsData && productsData.length ? (
    <BuyPageMain>
      <OrderForm>
        <Panel>
          <PanelTitle>Выберите продукты</PanelTitle>
          <CheckboxList
            options={productsData.map((product) => ({
              value: product.id,
              title: product.name,
            }))}
            selectedValues={selectProductIds}
            onChange={setSelectProductIds}
            swiperRef={swiperRef}
          />
        </Panel>
        <Panel>
          <PanelTitle>Сделать заказ</PanelTitle>
          <TextInput
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            placeholder="Введите адрес доставки"
          />
          <OrderPrice>
            <span>Цена</span>
            <span>{fullPrice} руб.</span>
          </OrderPrice>
          <OrderButton
            maxWidth
            onClick={handleBuyClick}
            disabled={!(selectProductIds.length && address)}
          >
            Купить
          </OrderButton>
        </Panel>
      </OrderForm>
      <ProductSwiper
        onSwiper={setSwiperRef}
        spaceBetween={12}
        direction="vertical"
        slidesPerView="auto"
        scrollbar={{ draggable: true }}
        mousewheel
      >
        {productsData.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </ProductSwiper>
    </BuyPageMain>
  ) : (
    <BuyPageMain>
      <PanelTitle>Продукты были слишком вкусные и их разобрали.</PanelTitle>
    </BuyPageMain>
  );
}

export default BuyPage;
