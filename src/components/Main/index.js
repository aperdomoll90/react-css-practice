import React, { useEffect, useState } from 'react';

function Main() {
  const [beerList, setBeerList] = useState(null);
  const [type, setType] = useState('ale');
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${type}`)
      .then((response) => response.json())
      .then((data) => setBeerList(data))
      .catch((err) => console.log(err));
  }, [type]);

  const chooseRandomBeer = () => {
    const rando = Math.floor(Math.random() * beerList.length);
    setRandomBeer(beerList[rando].name);
  };

  return (
    <section className="Main">
      <nav className="ButtonBar">
        <button onClick={() => setType('ale')}>ale</button>
        <button onClick={() => setType('stouts')}>stouts</button>
        <button onClick={() => setType('red-ale')}>red-ale</button>
        <div>
          <p>Let your Name Choose a Beer</p>
          <button onClick={() => chooseRandomBeer()}>Choose for me</button>
        </div>
      </nav>

      <section>{randomBeer && <h2>{randomBeer}</h2>}</section>

      <section className="MainField">
        {!beerList ? (
          <p>Pouring...</p>
        ) : (
          beerList.map((beer) => {
            return (
    
              <div class="card">
                <img
                  src="https://img.lovepik.com/element/40030/1024.png_300.png"
                  alt="Beer mug"
                  className="resize"
                />
                <div class="container">
                  <h4 key={beer.id}>
                    <b>{beer.name}</b>
                  </h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
            );
          })
        )}
      </section>
    </section>
  );
}

export default Main;
