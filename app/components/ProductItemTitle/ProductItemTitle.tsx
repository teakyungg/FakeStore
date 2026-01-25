import styles from "./ProductItemTitle.module.scss";

interface ProductItemTitleType {
  title: string | undefined;
  brand: string | undefined;
}

export function ProductItemTitle({ title, brand }: ProductItemTitleType) {
  return (
    <div className={styles.productItemTitle}>
      {brand && <p className={styles.brand}>{brand}</p>}
      {title && <p className={styles.title}>{title}</p>}
    </div>
  );
}
