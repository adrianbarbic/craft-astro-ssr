const HeroBlock = ({ content }) => (
  <div className="p-12 m-4 bg-gray-50 border border-gray-200">
    <h1 className="text-4xl">{content.Heading}</h1>
    <p className="pb-4">{content.main_content}</p>
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
          className="bg-slate-100 p-1 mr-2 text-blue-500 border border-blue-500 rounded-md "
        >
          {link.title}
        </a>
      );
    })}
  </div>
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
