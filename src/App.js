import { Route, Routes } from 'react-router-dom';
import Article from './Pages/Article';
import Home from './Pages/Home';

function App() {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home></Home>}/>
       <Route path='/article/:id' element={<Article></Article>}/>
       <Route path='/author/:name' element={<Home></Home>}/>
     </Routes>
    </div>
  );
}

export default App;
