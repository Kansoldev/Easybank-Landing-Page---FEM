import Header from "./components/Header";
import heroImage from "./assets/image-mockups.png";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <section className="hero-section bg-no-repeat bg-cover pb-20 lg:pb-0">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-20">
            <div className="hero-image lg:order-2 -mt-32 lg:mt-0">
              <img src={heroImage} alt="" width={1000} />
            </div>

            <div className="hero-content lg:order-1 text-center lg:text-left lg:-mt-24">
              <h1 className="text-4xl md:text-6xl mt-10">
                Next generation digital banking
              </h1>

              <p className="my-7">
                Take your financial life online. Your Easybank account will be a
                one-stop shop for spending, saving, budgeting, investing and
                much more.
              </p>

              <button className="py-3 px-8 text-white font-semibold rounded-3xl bg-gradient-to-r from-[#31d35c] to-[#2bb7da]">
                Request Invite
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
