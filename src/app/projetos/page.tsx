import Card from "@/components/card";
import Title from "@/components/title";

const openSources = [
  { name: 'keycloak-protocol-cas', href: 'https://github.com/jacekkow/keycloak-protocol-cas', description: 'Melhoria nos Logs do plugin', image:"/img/projects/keycloak-protocol-cas.png" },
  { name: 'qt-common', href: 'https://github.com/open-eid/qt-common', description: 'Tradução para portugês', image:"/img/projects/qt-common.png" },
  { name: 'mkdocs', href: 'https://github.com/mkdocs/mkdocs', description: 'Tradução para portugês', image:"/img/projects/mkdocs.png" },
]

export default function Projects() {
  return (
    <main className="space-y-8">
      <section className="space-y-7">
        <Title>Projetos</Title>
        <div className="grid grid-cols-3 gap-4">
          <Card title="keycloak-db-user-federation" href="https://github.com/piantino/keycloak-db-user-federation" image="/img/projects/keycloak-db-user-federation.png" >
            Plugin para keycloak que importa usuários para dentro da base local.
          </Card>
        </div>
      </section>
      <section className="space-y-7">
        <Title>Contribuições em projetos Open Source</Title>
        <div className="grid grid-cols-3 gap-4">
          {openSources.map(oss =>
            <Card key={oss.name} title={oss.name} href={oss.href} image={oss.image} className="flex-1">
              {oss.description}
            </Card>
          )}
        </div>
      </section>
    </main>
  );
}
