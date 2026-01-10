import styles from "./Header.module.scss";

export function Header() {
  const mainMenu = ["Beauty", "Fragrances", "Groceries", "Home Decoration", "Laptops"];
  const utilityMenu = ["검색", "좋아요", "마이", "장바구니", "로그인/회원가입"];

  return (
    <header className={styles.header}>
      <nav className={styles.inner}>
        <ul className={styles.mianMenuBox}>
          {mainMenu.map((data) => (
            <li key={data}>{data}</li>
          ))}
        </ul>

        <ul className={styles.utilityMenuBox}>
          {utilityMenu.map((data) => {
            if (data === "로그인/회원가입") {
              return (
                <li className={styles.login} key={data}>
                  {data}
                </li>
              );
            }
            return <li key={data}>{data}</li>;
          })}
        </ul>
      </nav>
    </header>
  );
}
