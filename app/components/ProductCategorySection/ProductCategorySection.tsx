"use client";

import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import styles from "./ProductCategorySection.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ProductLoadingCard } from "@/app/components/ProductLoadingCard/ProductLoadingCard";

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
}

export function ProductCategorySection({ categroy }: ProductCategorySectionType) {
  const [products, setProducts] = useState<productsType[]>();
  const loadingCardLength = 20;

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

  // 이거 각각 분야 달리해서 캐러셀 형태로 3개 정도 따로 만들어야겠는데
  // 항목은 3개 정도

  // 예시
  // BEAUTY 항목 -> 30개 정도 보이는 캐러셀
  // Fragrances 항목 -> 30개 정도 보이는 캐러셀
  // Groceries 항목 -> 30개 정도 보이는 캐러셀
  // 애초에 무신사에 전체 보는 페이지가 없네

  // 이거 전체 아이템이 아니라 공용 컴포넌트로 바꿔야할꺼 같은데

  return (
    <main className={styles.main}>
      <div className={styles.inner}>
        <p className={styles.title}>{categroy}</p>

        <ul className={styles.products}>
          {!products &&
            Array.from({ length: loadingCardLength }).map((_, index) => (
              <li key={`loading-${index}`}>
                <ProductLoadingCard />
              </li>
            ))}

          {products?.map((value) => (
            <li key={value.id}>
              <Link href={`/${value.id}`}>
                <ProductCard title={value.title} brand={value.brand} price={value.price} imgurl={value.images[0]} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
