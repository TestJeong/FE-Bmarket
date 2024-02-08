import Footer from "components/footer"
import Header from "components/header"
import Image from "next/image"
import MainHome from "./home/page"

export default function Home() {
  return (
    <main className="max-w-[30rem] h-full mb-8 relative bg-white my-0 mx-auto border border-black">
      <div className=" h-full border-1 flex items-center justify-center flex-col ">
        <header className="w-full">
          <Header />
        </header>

        <section className="mt-[5rem]">
          <MainHome />
        </section>

        <footer className="my-10 w-full ">
          <Footer />
        </footer>
      </div>
    </main>
  )
}
