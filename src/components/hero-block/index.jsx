const HeroBlock = ({ content }) => (
  <>
    <h1>{content.Heading}</h1>
    <p>{content.main_content}</p>
    {content.linker.map((link) => {
      const cleanLink = link.uri.split("/").slice(1).join("/");
      return (
        <a href={cleanLink} key={link.uri} className="bg-slate-500">
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
