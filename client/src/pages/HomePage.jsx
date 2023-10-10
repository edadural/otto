import Header from "../components/header/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="px-14 flex flex-row justify-between grid-cols-2">
        <div className="categories ">
          Categories
        </div>
        <div className="products ">
          Products
        </div>
      </div>
    </>
  )
}

export default HomePage;
