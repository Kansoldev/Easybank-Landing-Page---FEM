import Header from "./components/Header";
import Footer from "./components/Footer";
import heroImage from "./assets/image-mockups.png";
import API from "./assets/icon-api.svg";
import Budget from "./assets/icon-budgeting.svg";
import Onboard from "./assets/icon-onboarding.svg";
import Online from "./assets/icon-online.svg";
import Confetti from "./assets/image-confetti.jpg";
import Currency from "./assets/image-currency.jpg";
import Plane from "./assets/image-plane.jpg";
import Restaurant from "./assets/image-restaurant.jpg";
import "./App.css";

function App() {
  return (
    <>
      <Header />

      <main>
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
                  Take your financial life online. Your Easybank account will be
                  a one-stop shop for spending, saving, budgeting, investing and
                  much more.
                </p>

                <button className="py-3 px-8 text-white font-semibold rounded-3xl bg-gradient-to-r from-[#31d35c] to-[#2bb7da] hover:from-[#46e470] hover:to-[#4ec9e7]">
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

        <section
          className="why-us text-center lg:text-left pt-16 px-4"
          style={{ backgroundColor: "hsl(0, 0%, 98%)" }}
        >
          <div className="container px-4 mx-auto">
            <h2 className="text-5xl mb-10">Latest Articles</h2>

            <div className="grid gap-12 md:gap-8 md:grid-cols-2 lg:grid-cols-4 sm:px-16 md:px-0 mt-14 pb-16">
              <div className="card bg-white">
                <div className="card-header">
                  <img
                    src={Currency}
                    className="inline-block h-[210px] w-full object-cover"
                    alt=""
                  />
                </div>

                <div className="card-body px-6 pb-6">
                  <h3 className="text-xl mt-7 mb-5">
                    Receive money in any currency with no fees
                  </h3>

                  <p
                    className="text-[0.9rem]"
                    style={{ color: "hsl(233, 8%, 62%)" }}
                  >
                    The world is getting smaller and we’re becoming more mobile.
                    So why should you be forced to only receive money in a
                    single …
                  </p>
                </div>
              </div>

              <div className="card bg-white">
                <div className="card-header">
                  <img
                    src={Restaurant}
                    className="inline-block h-[210px] w-full object-cover"
                    alt=""
                  />
                </div>

                <div className="card-body px-6 pb-6">
                  <h3 className="text-xl mt-7 mb-5">
                    Treat yourself without worrying about money
                  </h3>

                  <p
                    className="mt-3 text-[0.9rem]"
                    style={{ color: "hsl(233, 8%, 62%)" }}
                  >
                    Our simple budgeting feature allows you to separate out your
                    spending and set realistic limits each month. That means you
                    …
                  </p>
                </div>
              </div>

              <div className="card bg-white">
                <div className="card-header">
                  <img
                    src={Plane}
                    className="inline-block h-[210px] w-full object-cover"
                    alt=""
                  />
                </div>

                <div className="card-body px-6 pb-6">
                  <h3 className="text-xl mt-7 mb-5">
                    Take your Easybank card wherever you go
                  </h3>

                  <p
                    className="mt-3 text-[0.9rem]"
                    style={{ color: "hsl(233, 8%, 62%)" }}
                  >
                    We want you to enjoy your travels. This is why we don’t
                    charge any fees on purchases while you’re abroad. We’ll even
                    show you …
                  </p>
                </div>
              </div>

              <div className="card bg-white">
                <div className="card-header">
                  <img
                    src={Confetti}
                    className="inline-block h-[210px] w-full object-cover"
                    alt=""
                  />
                </div>

                <div className="card-body px-6 pb-6">
                  <h3 className="text-xl mt-7 mb-5">
                    Our invite-only Beta accounts are now live!
                  </h3>

                  <p
                    className="mt-3 text-[0.9rem]"
                    style={{ color: "hsl(233, 8%, 62%)" }}
                  >
                    After a lot of hard work by the whole team, we’re excited to
                    launch our closed beta. It’s easy to request an invite
                    through the site ...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
