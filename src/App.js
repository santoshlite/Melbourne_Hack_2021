import React from 'react';
import './App.css';
import Row from './Row.js';
import Banner from "./Banner";
import Nav from './Nav';
import './Row.css';
import './Video.css';
import Movie from './Movie';
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import { Link } from "react-router-dom";
import Player from 'griffith';
import playerProps from './playerProps';
import { Text, StyleSheet } from "react-native";

function App() {
  return (
    <Router>
    <div className="app">
    
      <Nav />
      <Switch>
      
      <Route path="/oversimplified">

        <div className="background">
        <div className="videos">       
          <React.Fragment>
            <Player {...playerProps} />
          </React.Fragment>
        </div>
        </div> 
      
      </Route>

      <Route path="/statistics">
        <div className="background">
        <header className="banner_course"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://i.ibb.co/kMcnYwG/pic.jpg)`
        }}>
          <img className="course_title" src="https://i.ibb.co/DkxrLHG/2021-08-20-15h36-06-removebg-preview-2.png"/>
          <div className="details">
          54 Episodes • Liked by 93%
          </div>
          </header>

          <div className="resume">
        In this series, you will dive into <Text style={{fontWeight: "bold", color: "#ffffff", fontSize:18}}>Mr. Eddie Woo's</Text> statistics course. 
          You will learn about <Text style={{fontWeight: "bold", color: "#ffffff", fontSize:18}}>standard deviation</Text>
          , <Text style={{fontWeight: "bold", color: "#ffffff", fontSize:18}}>normal distribution</Text>
          , <Text style={{fontWeight: "bold", color: "#ffffff", fontSize:18}}>data analysis</Text>
          , <Text style={{fontWeight: "bold", color: "#ffffff", fontSize:18}}>cumulative frequency</Text>
          , <Text style={{fontWeight: "bold", color: "#ffffff", fontSize:18}}>parametrics</Text> and 
           <Text style={{fontWeight: "bold", color: "#ffffff", fontSize:18}}> sampling</Text>.
          </div>
          <div className="Box1">
            <img className="icon" src="https://spargle.com/wp-content/uploads/2020/01/white-play-icon-png-6.png"/>
            <div className="play">Play</div>
          </div>
          <div className="Box2">
            <img className="heart" src="https://i.ibb.co/vvXr7xZ/055f25ab9c75e37ea28c2035a74bcaa2-removebg-preview.png"/>
            <div className="like">I Like</div>
          </div>
        </div> 
        <div className="episodes">Episodes</div>
        <div class="row">
        <div class="episodes_section">
        <div className="row__posters">
        <Movie  image="https://i.ytimg.com/vi/q0rsZPp7euY/maxresdefault.jpg"/><span>&nbsp;&nbsp;</span>
        <Movie  image="https://i.ytimg.com/vi/-qlom70xZ90/maxresdefault.jpg"/><span>&nbsp;&nbsp;</span>
        <Movie  image="https://i.ibb.co/5xMGcpD/2021-08-20-22h29-19.png"/><span>&nbsp;&nbsp;</span>
        <Movie  image="https://i.ytimg.com/vi/6dUuBXV1drA/maxresdefault.jpg"/><span>&nbsp;&nbsp;</span>
        </div>
        </div>
        <h3 className="E1">E1: Choosing Statistical Measures</h3>
        <h3 className="E2">E2: Introduction to Data and Statistics (1/4)</h3>
        <h3 className="E3">E3: Data and Statistics (2/4)</h3>
        <h3 className="E4">E4: Data and Statistics (3/4)</h3>

        </div>
        
        <br></br><br></br><br></br><br></br>
      </Route>

      <Route path="/coming-soon">
      <style>{'body { background-color: #05002B; }'}</style>
        <div className="background">
        <div className="gif"><img className="penguin" src="https://media2.giphy.com/media/HHwI031emo0GQ/200w_s.gif"/></div>
        <br></br>
        <h1 className="coming-soon">Coming soon</h1>
        <br></br>
        <h4 className="coming-soon">Meanwhile, check our <Link to="/statistics" style={{ textDecoration: 'none', color: '#33bbff' }}>Statistics</Link> course or go back to the <Link to="/" style={{ textDecoration: 'none', color: '#33bbff' }}>Homepage</Link></h4>

        </div>
        
        <br></br><br></br><br></br><br></br>
      </Route>

      <Route path="/">
      
      <Banner />
      

      <div class="row">
      <h2>🚀STEM</h2>
      <br></br>
      <div className="row__posters">
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/qjxLy3f/cold-smooth-tasty-4.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/W5yDWCZ/cold-smooth-tasty.png"/></Link>
      <Link to="/statistics"><Movie  image="https://i.ibb.co/jrWC1XB/poster-11.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/7VrG9yZ/post.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/yXBNfTt/poster-12.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://image.pbs.org/contentchannels/Odc4dVy-show-poster2x3-dQq3TKE.jpg"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/j5JrJjh/poster.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://image.pbs.org/contentchannels/WlEojCs-show-poster2x3-sW9I0j6.jpg"/></Link>
      <Link to="/coming-soon"><Movie  image="https://image.pbs.org/contentchannels/Q6cP51K-show-poster2x3-sg9T5gg.jpg"/></Link>
      <Link to="/coming-soon"><Movie  image="https://occ-0-300-299.1.nflxso.net/dnm/api/v6/XsrytRUxks8BtTRf9HNlZkW2tvY/AAAABV0dTEeXZH8j8rYAdYmrKsKE-6HvZ_XaIs7OeSF5hU7cAnv8z6hWVMQiSJl3iPoZX6zYiHbLVoJa3eMFJvDVNrxVJ9Vn.jpg"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/rHwGDDZ/poster-2.png"/></Link>
       </div>
       </div>  

      <br></br><br></br>
       <div class="row">
      <h2>🧑‍🤝‍🧑 Social Sciences</h2>
      <br></br>
      <div className="row__posters">
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/ckbS8Fp/image-1.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/ZMKhZ7d/poster-5.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/Y0BmTyh/poster-4.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/fCPgR0x/poster-2.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/YZL3zKR/poster-3.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/T0FSkvY/poster-5.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/VQVbhgs/poster-7.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/pxyjhhy/poster-9.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/NnwTsYQ/poster-10.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTinHj1zcUlOwgWVkBEcH-AfTGdc_fFIqaCkaaxdh3NWe6Lgx13"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/FKNJks1/poster.png"/></Link>
      
       </div>
       </div>  
       <br></br><br></br>
      <div class="row">
      <h2>📺Learn & Chill</h2>
      <br></br>
      <div className="row__posters">
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/Zd0WvyS/poster.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/Qnn64CF/poster-2.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/JjdVdwm/cold-smooth-tasty-1.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://media.senscritique.com/media/000016381617/source_big/Because_Science.jpg"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/1KtfGRh/poster-1.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/C6ZjLYq/poster-3.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/fGWHC3d/poster-11.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/8c2gtSS/poster-4.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/51BxvzB/poster.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/CKSP8sH/poster-2.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/SXdTpgY/poster-1.png"/></Link>
      
       </div>
       </div>  
       <br></br>


       <br></br><br></br>

      <div class="row">
      <h2>🤖Computer Science</h2>
      <br></br>
      <div className="row__posters">
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/930xYBz/cold-smooth-tasty-2.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/sv28kxJ/cold-smooth-tasty-3.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/rtQ1dyD/cpp.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/8KdbrCJ/Cs.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/sC3RFY5/poster-6.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/7WPh4VF/poster-10.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/LQ4hDHh/poster-8.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/ZfSGQ9z/poster-9.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/8sTXBH9/tf.png"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/BwDn2fL/image-1.jpg"/></Link>
      <Link to="/coming-soon"><Movie  image="https://i.ibb.co/2Kv4nhN/poster-7.png"/></Link>

      
       </div>
       </div>  
       <br></br>

</Route>
  </Switch>
   </div>
   </Router>
  );
}

export default App;

//STEM
//Chill&Learn
//History
//Learn how to code
//Learn a new language
