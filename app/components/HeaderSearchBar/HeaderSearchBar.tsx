import Link from "next/link";
import styles from "./HeaderSearchBar.module.scss";
import Image from "next/image";

export function HeaderSearchBar() {
  return (
    <div className={styles.headerSearchBar}>
      <div className={styles.inner}>
        <div className={styles.titleBox}>
          <Link href={"/"} className={styles.title}>
            FAKESTORE
          </Link>
          <Image className={styles.bellIcon} src={"/bell_icon.svg"} width={30} height={30} alt="알림 아이콘" />
        </div>
        <div className={styles.searchBox}>
          <button className={styles.inputButton}></button>
          <p className={styles.searchTxt}>💕추천 상품 확인하기</p>
          <Image className={styles.searchIcon} src={"/search_icon.svg"} width={20} height={20} alt="검색 아이콘" />
        </div>
      </div>
    </div>
  );
}
