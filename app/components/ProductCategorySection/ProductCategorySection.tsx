"use client";

import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import styles from "./ProductCategorySection.module.scss";
import { useEffect, useState } from "react";
import { ProductLoadingCard } from "@/app/components/ProductLoadingCard/ProductLoadingCard";
import ScrollContainer from "react-indiana-drag-scroll";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface productsType {
  id: string;
  brand: string;
  title: string;
  description: string;
  price: string;
  images: string[];
}

interface ProductCategorySectionType {
  categroy: string;
  rowLength?: number; // 세로행 갯수
}

export function ProductCategorySection({ categroy, rowLength = 1 }: ProductCategorySectionType) {
  const [products, setProducts] = useState<productsType[]>([]);
  const loadingCardLength = 10; // 로딩중 보일 컴포넌트 갯수

  // 그리고 서버 데이터 불러오는거 props로 받아야할듯 이거 컴포넌트 늘어날때 마다 계속 서버 호출되는거 늘어나는거 비효울적임
  // 그리고 상품 카드 높이좀 조정해야 할듯 grid로하든 ,저기 변수 파일에 있는걸로 하든

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/products/category/${categroy}?limit=${20}`);

        if (!res.ok) {
          throw new Error("상품 리스트 불러오기 실패");
        }

        const data = await res.json();
        setProducts(data.products);
      } catch {
        alert("잠시 후 다시 시도해 주세요.");
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className={styles.productCategorySection}>
      <div className={styles.inner}>
        <p className={styles.title}>{categroy}</p>
        {/* 로딩중 */}
        {products.length === 0 && (
          <div className={styles.products} style={{ gridTemplateRows: `repeat(${rowLength}, auto)` }}>
            {Array.from({ length: loadingCardLength * 2 }).map((_, index) => (
              <ProductLoadingCard key={index} />
            ))}
          </div>
        )}

        {/* 상품 */}
        {products.length > 0 && (
          <ScrollContainer className={styles.products} style={{ gridTemplateRows: `repeat(${rowLength}, auto)` }}>
            {products.map((value) => (
              <ProductCard
                key={value.id}
                id={value.id}
                title={value.title}
                brand={value.brand}
                price={value.price}
                imgurl={value.images[0]}
              />
            ))}
          </ScrollContainer>
        )}
      </div>
    </div>
  );
}
