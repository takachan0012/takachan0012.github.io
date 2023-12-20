import { React } from "react"
import Header from "@/components/shared/header"
import Hero from "@/components/hero"
import TechStack from "@/components/techStack"
import Education from "@/components/education"
import Footer from "@/components/shared/footer"

function Home() {
    console.log("run")

    return (
        <div className="bg-violet-200 w-screen h-full flex justify-center dark:bg-slate-900">
            <section>
                <Header />
                <Hero />
                <TechStack />
                <Education />
                <Footer />
            </section>
        </div>
    )
}

export default Home;