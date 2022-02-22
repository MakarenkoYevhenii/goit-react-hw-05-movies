
import {trendsMovie} from '../shared/services/getMovie'
export const App = () => {
  trendsMovie().then(resp=>{
  console.log(resp);
})
  return (
    <div>
      https://api.themoviedb.org/3/movie/550?api_key=4fbe7a50ce1a6bc10e341cdef41a29ce
    </div>
  );
};
