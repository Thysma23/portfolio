import logoAvailable from "@/components/logo/logoAvailable.type";
import HardSkill from "@/components/skill/HardSkill";

export default function SkillOthers() {
    const otherSkills: logoAvailable[] = [
        "Git", "Api RESTful"];
    return (
        <section className="mt-5">
            <h2 className="pb-2">
                Autres compétences
            </h2>
                {
                    otherSkills.map((skill, index) => {
                        return <HardSkill className="mr-2" skill={skill} key={index} />
                    })
                }
        </section>
    )
}
