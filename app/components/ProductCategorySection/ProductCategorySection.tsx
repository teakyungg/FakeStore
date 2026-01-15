"use client";

import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import styles from "./ProductCategorySection.module.scss";
import { useEffect, useState } from "react";
import { ProductLoadingCard } from "@/app/components/ProductLoadingCard/ProductLoadingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
  const [products, setProducts] = useState<productsType[]>([]);
  const loadingCardLength = 10; // 로딩중 보일 컴포넌트 갯수

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
    <main className={styles.main}>
      <div className={styles.inner}>
        <p className={styles.title}>{categroy}</p>

        {/* 로딩중 */}
        {products.length === 0 && (
          <div className={styles.products}>
            {Array.from({ length: loadingCardLength }).map((_, index) => (
              <ProductLoadingCard key={index} />
            ))}
          </div>
        )}

        {products.length > 0 && (
          <Swiper slidesPerView="auto" spaceBetween={16} freeMode grabCursor style={{ zIndex: 0 }}>
            {products.map((value) => (
              <SwiperSlide key={value.id} style={{ width: "fit-content" }}>
                <ProductCard
                  id={value.id}
                  title={value.title}
                  brand={value.brand}
                  price={value.price}
                  imgurl={value.images[0]}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </main>
  );
}

{
  /* 
 <div className={styles.products} >
            {products.map((value) => (
              <Link key={value.id} href={`/${value.id}`}>
                <ProductCard title={value.title} brand={value.brand} price={value.price} imgurl={value.images[0]} />
              </Link>
            ))}
          </div>
*/
}
