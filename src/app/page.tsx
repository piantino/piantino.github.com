import Button from "@/components/button";
import Title from "@/components/title";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="space-y-7">
        <Title>Olá! Aqui é o André Piantino.</Title>
        <p>Sou Engenheiro de Software focado em desenvolvimento Web (Full Stack) desde 2004.</p>
        <div>
          <Link href="contato">
            <Button>Meu contato</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
