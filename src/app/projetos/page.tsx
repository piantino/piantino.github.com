import Card from "@/components/card";
import Title from "@/components/title";
import projects from "@/data/projects.json";
import ossProjects from "@/data/oss-projects.json";

export default function Projects() {
  return (
    <main className="space-y-8">
      <section className="space-y-7">
        <Title>Projetos</Title>
        <div className="grid grid-cols-3 gap-4">
          {projects.map(oss =>
            <Card key={oss.name} title={oss.name} href={oss.href} image={oss.image}>
              {oss.description}
            </Card>
          )}
        </div>
      </section>
      <section className="space-y-7">
        <Title>Contribuições em projetos Open Source</Title>
        <div className="grid grid-cols-3 gap-4">
          {ossProjects.map(oss =>
            <Card key={oss.name} title={oss.name} href={oss.href} image={oss.image}>
              {oss.description}
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
