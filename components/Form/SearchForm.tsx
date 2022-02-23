const SearchForm = ({
  getSearch,
  search,
  updateSearch,
  btnText = "Who is this Pokemon?",
}: {
  getSearch: (e: { preventDefault: () => void }) => void;
  search: string;
  updateSearch: (e: {
    target: {
      value: React.SetStateAction<string>;
    };
  }) => void;
  btnText?: string;
}) => {
  return (
    <form
      className=" md:flex items-center justify-center text-center mx-auto mt-10 mb-20 py-2 "
      onSubmit={getSearch}
    >
      <input
        id="search-bar"
        className={`w-1/2 border-2 rounded-md outline-none trnsform hover:border-yellow-400 lowercase`}
        required
        type="text"
        value={search}
        onChange={updateSearch}
      />

      <button
        id="submit-btn"
        className=" mt-2 md:mt-0 mx-2 rounded-md bg-yellow-400 py-1 px-2 text-white hover:bg-yellow-500 "
        type="submit"
      >
        {`${btnText}`}
      </button>
    </form>
  );
};

export default SearchForm;
