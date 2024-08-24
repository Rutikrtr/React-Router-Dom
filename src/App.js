
import { Routes , Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Student from './components/Student.jsx';
import User from './components/User.jsx';
import Posts from './components/Posts.jsx';
import Postpage from './components/Postpage.jsx';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/posts" element={<Posts/>}/>
      <Route path="/post/:postid" element={<Postpage/>}/>
      <Route path="/user/:username" element={<User/>}/>
      <Route path='account' >
        <Route path='student' element={<Student/>}/>
      </Route>
    </Routes>
  );
}

export default App;
