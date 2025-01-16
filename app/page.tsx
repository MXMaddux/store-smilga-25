import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Suspense } from "react";
import Navbar from "@/components/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
export default HomePage;
