import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import SkillAndTechnologies from "@/components/SkillAndTechnologies";
import Projects from "../components/Projects";
import Experiences from "../components/Experiences";
import GetInTouch from "../components/GetInTouch";

export default async function Home() {

    return (
        <>
            <Hero/>

            <AboutMe/>

            <SkillAndTechnologies/>

            <Projects/>

            <Experiences/>

            <GetInTouch/>
        </>
    );
}
