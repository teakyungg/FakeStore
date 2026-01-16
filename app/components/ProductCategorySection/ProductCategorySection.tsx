import { ProductCard } from "@/app/components/ProductCard/ProductCard";
import styles from "./ProductCategorySection.module.scss";
import { ProductLoadingCard } from "@/app/components/ProductLoadingCard/ProductLoadingCard";
import ScrollContainer from "react-indiana-drag-scroll";
import { productsType } from "@/app/(page)/(Home)/page";
import { memo } from "react";

interface ProductCategorySectionType {
  products: productsType[];
  categroy: string;
  rowLength?: number; // 세로행 갯수
}

function ProductCategorySection_({ categroy, rowLength = 1, products }: ProductCategorySectionType) {
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

export const ProductCategorySection = memo(ProductCategorySection_);

/* ex) 3개의 데이터를 서버에서 받아와서 ProductCategorySection 컴포넌트로 렌더링했을 때

memo를 안했을경우
현재 컴포넌트가 데이터에 최소 3번, 최대 4번 정도 리렌더링 되는 것을 확인

memo를 했을경우
현재 컴포넌트가 고정으로 2번만 렌더링되는 것을 확인

*/
