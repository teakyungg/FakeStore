import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import styles from "./MainMenu.module.scss";
import { useEffect, useState } from "react";
import Link from "next/link";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface productsType {
  id: string;
  brand: string;
  title: string;
  description: string;
  price: string;
  images: string[];
}

export function MainMenu() {
  const [products, setProducts] = useState<productsType[]>();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${API_URL}/products`); // 임시 데이터

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
        <p className={styles.title}>전체 아이템</p>

        <ul className={styles.products}>
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
