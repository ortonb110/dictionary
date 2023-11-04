import emoji from "../assets/images/emjoi.png";

const NoDefinitionFound = () => {
  return (
    <section className="flex flex-col items-center justify-center mt-[13.2rem] space-y-[2.4rem]">
      <img src={emoji} alt="sad emoji face" className="w-[6.4rem] h-[6.4rem] mb-[2.4rem]" />
      <h2 className="h2 capitalize">no definition found</h2>
      <p className="text-center">
        Sorry pal, we couldn&#39;t find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </section>
  );
};

export default NoDefinitionFound;
