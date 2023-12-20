import React from "react"
import profile from "@/assets/profile.png"
import { educationData, skillSet, workExperiences } from "@/utils/profileData"

function CurriculumVitae() {
    return (
        <div className="bg-violet-200 w-screen flex flex-col items-center dark:bg-gray-400">
            <section className="w-11/12 flex justify-evenly mt-3 items-center border-b p-4 border-black">
                <div className="rounded-full overflow-hidden">
                    <img src={profile} alt="profile-image" width={100} />
                </div>
                <div className="ms-5 text-base w-fit md:ms-0">
                    <h1 className="sm:text-2xl font-bold">Jujun Junaedi</h1>
                    <p className="sm:text-base flex flex-col">
                        <span>Cianjur, 11 July 2001</span>
                        <span>jujunjunaedi110107@gmail.com</span>
                        <span>www...</span>
                    </p>
                </div>
            </section>
            <section className="w-11/12 flex justify-evenly mt-3 items-center border-b p-4 border-black">
                <p>I am a passionate tech enthusiast and a proud alum of a vocational high school specializing in computer network technology. My journey into the intricate world of programming began here, where I discovered my love for unraveling complexities and weaving them into seamless connections.</p>
            </section>
            <section className="w-11/12 flex flex-col mt-3 border-b p-4 border-black">
                <h2 className="text-xl font-bold">Educational Background</h2>
                {educationData.map(data => <LisContent key={data.id} title={data.title} description={data.description} years={data.years} />)}
            </section>
            <section className="w-11/12 flex flex-col mt-3 border-b p-4 border-black">
                <h2 className="text-xl font-bold">Tech Passion and Expertise</h2>
                <div className="grid grid-cols-2 gap-1 sm:grid-cols-3">
                    {skillSet.map(data => <LisContent key={data.name} title={data.name} description={data.status} />)}
                </div>
            </section>
            <section className="w-11/12 flex flex-col mt-3 border-b p-4 border-black">
                <h2 className="text-xl font-bold">Experiences</h2>
                <div className="grid grid-cols-1 gap-1">
                    {workExperiences.map(data => <LisContent key={data.id} title={data.title} description={data.description} company={data.company} years={data.years} />)}
                </div>
            </section>
        </div>
    )
}

function LisContent({ title, description, years, company }) {
    return (
        <div className="mt-7">
            <h2 className="font-bold">{title}
            </h2>
            <small>{company}</small>
            <p className="my-3">{description}</p>
            <span className="italic">{years}</span>
        </div>
    )
}

export default CurriculumVitae;