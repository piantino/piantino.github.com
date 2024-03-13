import Card from "@/components/card";
import Title from "@/components/title";
import recognitions from "@/data/recognitions.json";

export default function About() {
  return (
    <main>
      <section>
        <Title>Reconhecimentos</Title>
        <div className="grid grid-cols-3 gap-4">
          {recognitions.map(oss =>
            <Card key={oss.name} title={oss.name} href={oss.href} image={oss.image}>
              {oss.description}
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
