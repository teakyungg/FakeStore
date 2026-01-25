import styles from "./ProductPrice.module.scss";

interface ProductPriceType {
  // 가격
  price: number | undefined;

  // 할인률
  discount?: number;
}

export function ProductPrice({ price = 0, discount = 0 }: ProductPriceType) {
  return (
    <div className={styles.productPrice}>
      {/* 원래 가격 */}
      {price && <s className={styles.price}>{price}$</s>}

      <div className={styles.priceBox}>
        {/* 할인률 */}
        {discount > 0 && <p className={styles.discount}>{discount}%</p>}

        {/* 최종 가격 */}
        <p className={styles.finalPrice}>{(price * (1 - discount / 100)).toFixed(2)}$</p>
      </div>
    </div>
  );
}
