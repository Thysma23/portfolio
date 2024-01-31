import logoAvailable from "@/components/logo/logoAvailable.type";
import HardSkill from "@/components/skill/HardSkill";

export default function SkillsDataBase() {
    const databaseSkills: logoAvailable[] = [
        "MySQL", "MongoDB", "Oracle Database"];
    return (
        <section className="mt-5">
            <h2>
                Compétences en Base de données
            </h2>
            <p>
                {
                    databaseSkills.map((skill, index) => {
                        return <HardSkill className="mr-2" skill={skill} key={index} />
                    })
                }
            </p>
        </section>
    )
}
