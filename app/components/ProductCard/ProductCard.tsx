import { useEffect, useState } from "react";
import styles from "./ProductCard.module.scss";
import imagesLoaded from "imagesloaded";
import ClipLoader from "react-spinners/ClipLoader";

interface ProductCardType {
  imgurl: string;
  brand: string;
  title: string;
  price: string;
}

export function ProductCard({ imgurl, brand, title, price }: ProductCardType) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    imagesLoaded(`.${styles.productImage}`, { background: true }, function () {
      setLoading(false);
    });
  }, []);

  return (
    <article className={styles.productCard}>
      <div className={styles.loading} style={{ opacity: loading ? 1 : 0 }}></div>
      <div className={styles.productImage} style={{ backgroundImage: `url(${imgurl})` }}></div>

      <div className={styles.productDirBox}>
        {brand && <div className={styles.productBrand}>{brand}</div>}
        <h2 className={styles.productTitle}>{title}</h2>
        <div className={styles.productPrice}>{price}$</div>
      </div>
    </article>
  );
}
