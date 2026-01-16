"use client";

import { CategoryNav } from "@/app/components/CategoryNav/CategoryNav";
import { HeaderSearchBar } from "@/app/components/HeaderSearchBar/HeaderSearchBar";
import { ProductCategorySection } from "@/app/components/ProductCategorySection/ProductCategorySection";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface productsType {
  id: string;
  brand: string;
  title: string;
  description: string;
  price: string;
  images: string[];
}

export default function Main() {
  const [BeautyProduct, setBeautyProduct] = useState<productsType[]>([]);
  const [FragrancesProduct, setFragrancesProduct] = useState<productsType[]>([]);
  const [GroceriesProduct, setGroceriesProduct] = useState<productsType[]>([]);

  useEffect(() => {
    const fetchProducts = async (category: string, setBeautyProduct: (products: productsType[]) => void) => {
      try {
        const res = await fetch(`${API_URL}/products/category/${category}`);

        if (!res.ok) {
          throw new Error("상품 리스트 불러오기 실패");
        }

        const data = await res.json();
        const productData: productsType[] = data.products;

        setBeautyProduct(productData);
      } catch {
        alert("잠시 후 다시 시도해 주세요.");
      }
    };

    fetchProducts("Beauty", setBeautyProduct);
    fetchProducts("Fragrances", setFragrancesProduct);
    fetchProducts("Groceries", setGroceriesProduct);
  }, []);

  return (
    <>
      <HeaderSearchBar />
      <CategoryNav />
      <main>
        <ProductCategorySection categroy={"Beauty"} products={BeautyProduct} />
        <ProductCategorySection categroy={"Fragrances"} products={FragrancesProduct} />
        <ProductCategorySection categroy={"Groceries"} products={GroceriesProduct} rowLength={2} />
      </main>
    </>
  );
}
