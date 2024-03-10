import Button from "@/components/button";
import Title from "@/components/title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="space-y-7 flex gap-6">

        <div className="flex-1 flex flex-col justify-evenly">
          <div className="space-y-7">

            <Title>Olá! Aqui é o André Piantino.</Title>
            <p>Sou Engenheiro de Software focado em desenvolvimento Web (Full Stack) desde 2004.</p>
            <div>
              <Link href="contato">
                <Button>Meu contato</Button>
              </Link>
            </div>
          </div>
        </div>

        <Image src="/img/piantino.png" alt="Foto de André Piantino no estilo de um adesivo" width={400} height={400}></Image>

      </section>
    </main>
  );
}
