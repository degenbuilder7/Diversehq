import './tokencr.css';
import VanillaTilt from 'vanilla-tilt';

const App = () => {
  const element = document.querySelector(".card");
  VanillaTilt.init((element) ,
    {
      max: 25,
      speed: 400,
      glare: true,
    }
  );
  return(
    <div class="container">
      <div class="card">
        <div class="content">
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/6608.png" alt="token"/>
            <h3>Token details</h3>
            <form action="/">
              <label for="fname">Token name:</label>
              <input type="text" id="fname" name="fname" /><br/>
              <label for="lname">Total supply:</label>
              <input type="character" id="lname" name="lname" />
            </form>
            <a href="#">Submit</a>
        </div>
      </div>
    </div>
  );
}

export default App