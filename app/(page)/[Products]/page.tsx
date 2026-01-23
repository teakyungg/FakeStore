"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ProductItem() {
  const id = useParams().Products;

  // 상품 데이터
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}/products/${id}`);

        if (!res.ok) {
          throw new Error("상품 리스트 불러오기 실패");
        }

        const data = await res.json();
        setProduct(data);
      } catch {
        alert("잠시 후 다시 시도해 주세요.");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* inner */}
      <div>
        <div>상품이미지</div>
        {/* 상품 설명칸 */}
        <div>
          <div>상품 이름</div>
          <div>상품 가격</div>
          <div>장바구니</div>
          <div>결제</div>
        </div>
      </div>
    </div>
  );
}
