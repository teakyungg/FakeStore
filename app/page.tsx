import { CategoryNav } from "./components/CategoryNav/CategoryNav";
import { HeaderSearchBar } from "./components/HeaderSearchBar/HeaderSearchBar";

export default function Home() {
  return (
    <div style={{ height: "2000px" }}>
      <HeaderSearchBar />
      <CategoryNav />
    </div>
  );
}
