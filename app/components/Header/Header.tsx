import styles from "./Header.module.scss";

export function Header() {
  const mainMenu = ["Beauty", "Fragrances", "Groceries", "Home Decoration", "Laptops"];
  const utilityMenu = ["검색", "좋아요", "마이", "장바구니", "로그인/회원가입"];

  return (
    <header className={styles.header}>
      <nav className={styles.inner}>
        <ul>
          {mainMenu.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>

        <ul>
          {utilityMenu.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
