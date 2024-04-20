import Footer from "./(routest)/_components/Footer";
import Navbar from "./(routest)/_components/Navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="pt-[59px] h-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;