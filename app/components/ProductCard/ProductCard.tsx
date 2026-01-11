import Image from "next/image";
import styles from "./ProductCard.module.scss";

interface ProductCardType {
  imgurl: string;
  brand: string;
  title: string;
  price: string;
}

export function ProductCard({ imgurl, brand, title, price }: ProductCardType) {
  return (
    <article className={styles.productCard}>
      <div className={styles.productImage} style={{ backgroundImage: `url(${imgurl})` }}></div>

      <div className={styles.productDirBox}>
        <div className={styles.productBrand}>{brand}</div>
        <h2 className={styles.productTitle}>{title}</h2>
        <div className={styles.productPrice}>{price}$</div>
      </div>
    </article>
  );
}
