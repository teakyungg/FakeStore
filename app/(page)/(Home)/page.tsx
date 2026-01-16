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
  const categories = ["Beauty", "Fragrances", "Groceries"] as const;

  // "Beauty" | "Fragrances" | "Groceries"
  type Category = (typeof categories)[number];

  // Record<Key, Value> 형태로 타입을 만들어줌
  type mainProductDataType = Record<Category, productsType[]>;

  const initialData = categories.reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {} as mainProductDataType);

  const [mainProductData, setMainProductData] = useState<mainProductDataType>(initialData);

  useEffect(() => {
    const fetchData = async () => {
      for (const category of categories) {
        try {
          const res = await fetch(`${API_URL}/products/category/${category}`);

          if (!res.ok) {
            throw new Error("상품 리스트 불러오기 실패");
          }

          const data = await res.json();
          const productData: productsType[] = data.products;

          setMainProductData((prev) => ({
            ...prev,
            [category]: productData, // key 동적 업데이트
          }));
        } catch {
          alert("잠시 후 다시 시도해 주세요.");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderSearchBar />
      <CategoryNav />
      <main>
        <ProductCategorySection title={"Beauty"} products={mainProductData.Beauty} />
        <ProductCategorySection title={"Fragrances"} products={mainProductData.Fragrances} />
        <ProductCategorySection title={"Groceries"} products={mainProductData.Groceries} rowLength={2} />
      </main>
    </>
  );
}
