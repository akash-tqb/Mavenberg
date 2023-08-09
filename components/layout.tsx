import Footer from "@/sections/footer";
import Navbar from "@/sections/navbar";
import Meta from "./meta";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Navbar />
      <Meta/>
      <main className="bg-maven-bg">{children}</main>
      <Footer />
    </div>
  );
}
