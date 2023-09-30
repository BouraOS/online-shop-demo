import { useSearchParams } from "react-router-dom";
import Button from "./Button";

const Recommended = () => {

      
  const [search, setSearch] = useSearchParams();

  const filterFn = (value) => {
      if(value.length === 0) {
          search.delete('tagNames')
          setSearch(search, { replace: true });
      }
      if (value) {
          search.set('tagNames', value);
          setSearch(search, { replace: true });
      }
  }
  return (
    <>
      <div className="recommended">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button filterFn={filterFn} value="" title="All Products" />
          <Button filterFn={filterFn} value="Newest" title="Newest" />
          <Button filterFn={filterFn} value="Best_sellers" title="Best-sellers" />
          <Button filterFn={filterFn} value="Great_deals" title="Great-deals" />
        </div>
      </div>
    </>
  );
};

export default Recommended;