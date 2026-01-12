import { ClipLoader } from "react-spinners";
import styles from "./ProductLoadingCard.module.scss";

export function ProductLoadingCard() {
  return (
    <div className={styles.productLoadingCard}>
      <ClipLoader />
    </div>
  );
}
