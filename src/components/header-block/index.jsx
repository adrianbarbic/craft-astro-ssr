const HeaderBlock = ({ content }) => {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <div className="hidden ml-10 space-x-8 lg:block">
              {content?.links?.map((link) => {
                const cleanLink = link.uri
                  .split("/")
                  .slice(1)
                  .join("/")
                  .replace("__home__", "/");
                return (
                  <a
                    key={link.uri}
                    href={cleanLink}
                    className="text-base font-medium text-white hover:text-indigo-50"
                  >
                    {link.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Sign in
            </a>
            <a
              href="#"
              className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Sign up
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {/* {navigation.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-base font-medium text-white hover:text-indigo-50"
            >
              {link.name}
            </a>
          ))} */}
        </div>
      </nav>
    </header>
  );
};

HeaderBlock.Fragment = `
        ... on blocks_headerBlock_BlockType {
          id
          heading
          links {
            title
            slug
            uri
          }
          typeHandle
        }
    `;

export { HeaderBlock };
