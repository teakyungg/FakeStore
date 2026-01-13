import { CategoryNav } from "@/app/components/CategoryNav/CategoryNav";
import { HeaderSearchBar } from "@/app/components/HeaderSearchBar/HeaderSearchBar";
import { MainMenu } from "@/app/(page)/Home/components/MainMenu/MainMenu";

export function Home() {
  return (
    <>
      <HeaderSearchBar />
      <CategoryNav />
      <MainMenu />
    </>
  );
}
