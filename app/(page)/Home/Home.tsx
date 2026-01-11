"use client";

import { CategoryNav } from "@/app/components/CategoryNav/CategoryNav";
import { HeaderSearchBar } from "@/app/components/HeaderSearchBar/HeaderSearchBar";
import { MainMenu } from "@/app/(page)/Home/components/MainMenu/MainMenu";
import { useState } from "react";

export function Home() {
  return (
    <>
      <HeaderSearchBar />
      <CategoryNav />
      <MainMenu />
    </>
  );
}
