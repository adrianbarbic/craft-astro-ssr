const HeroBlock = ({ content }) => (
  <>
    <h1 className="text-4xl">{content.Heading}</h1>
    <p>{content.main_content}</p>
    {content.linker.map((link) => {
      const cleanLink = link.uri
        .split("/")
        .slice(1)
        .join("/")
        .replace("__home__", "/");
      return (
        <a
          href={cleanLink}
          key={link.uri}
          className="bg-slate-100 text-blue-500"
        >
          {link.title}
        </a>
      );
    })}
  </>
);

HeroBlock.Fragment = `
... on blocks_heroblock_BlockType {
  Heading
  main_content
  typeHandle
  linker {
    title
    slug
    uri
  }
}
  `;

export { HeroBlock };
