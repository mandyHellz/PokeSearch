const SearchForm = ({
  getSearch,
  search,
  updateSearch,
  btnText = "Get them!",
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
      className="w-full flex flex-col sm:flex-row items-center justify-center text-center mx-auto mt-10 mb-20 p-2 gap-2"
      onSubmit={getSearch}
    >
      <input
        id="search-bar"
        className={`w-full border-2 rounded-md outline-none transform hover:border-yellow-400 lowercase`}
        required
        type="text"
        value={search}
        onChange={updateSearch}
      />

      <button
        id="submit-btn"
        className="rounded-md bg-yellow-400 py-1 px-2 w-40 text-white hover:bg-yellow-500 "
        type="submit"
      >
        {`${btnText}`}
      </button>
    </form>
  );
};

export default SearchForm;
