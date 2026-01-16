import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import styles from "./ProductCategorySection.module.scss";
import { ProductLoadingCard } from "@/app/components/ProductLoadingCard/ProductLoadingCard";
import ScrollContainer from "react-indiana-drag-scroll";
import { productsType } from "@/app/(page)/(Home)/page";

interface ProductCategorySectionType {
  products: productsType[];
  categroy: string;
  rowLength?: number; // 세로행 갯수
}

export function ProductCategorySection({ categroy, rowLength = 1, products }: ProductCategorySectionType) {
  const loadingCardLength = 10; // 로딩중 보일 컴포넌트 갯수

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
          <ScrollContainer
            horizontal={true}
            vertical={false}
            className={styles.products}
            style={{ gridTemplateRows: `repeat(${rowLength}, auto)` }}
          >
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
