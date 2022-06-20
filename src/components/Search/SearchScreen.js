import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../HERO/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location=useLocation();
  
  
  const {q=""}=queryString.parse(location.search);

  const heroes=getHeroesByName(q);
  
  const [{ searchText }, HandleInputChange, reset] = useForm({
    searchText: "",
  });
z
  const handleSearch = (e) => {
    e.preventDefault();
    reset();
  
    return navigate(`?q=${searchText.toLowerCase().trim()}`)
     

  };

  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Search a hero.."
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={HandleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {(q==='')?
          
          <div className="alert alert-primary" >Search a hero</div>:
          (heroes.length === 0) && <div className="alert alert-danger">dont found {q}</div>
          }
        
          {
          heroes.map( hero=>(

            <HeroCard key={hero.id} {...hero}/>
          )
          )}
        </div>
        
      </div>
    </>
  );
};
