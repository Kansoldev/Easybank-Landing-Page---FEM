import Header from "./components/Header";
import heroImage from "./assets/image-mockups.png";
import API from "./assets/icon-api.svg";
import Budget from "./assets/icon-budgeting.svg";
import Onboard from "./assets/icon-onboarding.svg";
import Online from "./assets/icon-online.svg";
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

      <section
        className="why-us text-center lg:text-left pt-16 p-7"
        style={{ backgroundColor: "hsl(220, 16%, 96%)" }}
      >
        <div className="container px-4 mx-auto">
          <h2 className="text-5xl mb-6">Why choose Easybank?</h2>

          <p style={{ color: "hsl(233, 8%, 62%)" }}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>

          <div className="md:grid gap-10 md:grid-cols-2 lg:grid-cols-4 sm:px-16 md:px-0 mt-14">
            <div>
              <img src={Online} className="inline-block" alt="" />
              <h3 className="text-2xl mt-7 mb-5">Online Banking</h3>
              <p style={{ color: "hsl(233, 8%, 62%)" }}>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            <div className="mt-14 md:mt-0">
              <img src={Budget} className="inline-block" alt="" />
              <h3 className="text-2xl mt-7 mb-5">Simple Budgeting</h3>
              <p className="mt-3" style={{ color: "hsl(233, 8%, 62%)" }}>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            <div className="mt-14 lg:mt-0">
              <img src={Onboard} className="inline-block" alt="" />
              <h3 className="text-2xl mt-7 mb-5">Fast Onboarding</h3>
              <p className="mt-3" style={{ color: "hsl(233, 8%, 62%)" }}>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>

            <div className="mt-14 lg:mt-0">
              <img src={API} className="inline-block" alt="" />
              <h3 className="text-2xl mt-7 mb-5">Open API</h3>
              <p className="mt-3" style={{ color: "hsl(233, 8%, 62%)" }}>
                Our modern web and mobile applications allow you to keep track
                of your finances wherever you are in the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
