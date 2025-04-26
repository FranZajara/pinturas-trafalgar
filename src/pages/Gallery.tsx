import { Tabs, Tab, Card, CardBody } from "@heroui/react";

const azoteasImages = Object.values(
    import.meta.glob("../images/azoteas/*.jpg", { eager: true, query: "?url", import: "default" })
  );
  
const casaresImages = Object.values(
    import.meta.glob("../images/casares/*.jpg", { eager: true, query: "?url", import: "default" })
  );

const otrosImages = Object.values(
  import.meta.glob("../images/otros/*.jpg", { eager: true, query: "?url", import: "default" })
);

// Data de los proyectos
const projects = [
    {
      key: "azoteas",
      title: "Impermeabilización de azoteas",
      images: azoteasImages,
    },
    {
      key: "casares",
      title: "Obra Casares costa",
      images: casaresImages,
    },
    {
      key: "otros",
      title: "Otros proyectos",
      images: otrosImages,
    },
  ];

export default function Gallery() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Galería de Proyectos</h1>

      <Tabs color="primary" aria-label="Galería de proyectos" classNames={{tab: "whitespace-normal h-auto"}}>
        {projects.map((project) => (
          <Tab key={project.key} title={<span className="whitespace-normal">{project.title}</span>}>
            <Card>
              <CardBody>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {project.images.map((img, index) => (
                    <img
                      key={index}
                      src={img as string}
                      alt={`Imagen ${index + 1} - ${project.title}`}
                      className="w-full h-48 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
                      loading="lazy"
                    />
                  ))}
                </div>
              </CardBody>
            </Card>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
}
