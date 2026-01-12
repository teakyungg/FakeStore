import styles from "./Footer.module.scss";

export function Footer() {
  const businessInfo = [
    "(주) FakeStore",
    "대표자 : 홍길동",
    "주소 : 서울특별시",
    "호스팅사업자 : FakeStore",
    "통신판매업 : 0000-0000",
    "사업자등록번호 : 0000-11-00000",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <small>© FakeStore ALL RIGHTS RESERVED</small>
        <div>
          <address>
            <ul className={styles.businessInfoBox}>
              {businessInfo.map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </address>

          <p>
            당사는 고객님이 현금 결제한 금액에 대해 우리은행과 채무지급보증 계약을 체결하여 안전거래를 보장하고
            있습니다.&nbsp;
            <span className={styles.underscore}>서비스 가입사실 확인</span>
          </p>
        </div>
        <div className={styles.disclaimer}>
          일부 상품의 경우 주식회사 FakeStore는 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한
          책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
        </div>
      </div>
    </footer>
  );
}
