import React, { useState, useEffect } from 'react';

function App() {
  const [meme, setMemes] = useState([]);

  //load images at the start
  useEffect(() => {
    loadMeme();
  }, [])

  function showDiv() {
    var elems = document.getElementsByClassName('row');
    for (var i=0;i<elems.length;i+=1){
      elems[i].style.display = '';
    }
  }

  const loadMeme = async () => {
    const res = await fetch('https://api.imgflip.com/get_memes')
    const result = await res.json();
    setMemes(result.data.memes);
  }

  return (
    <div className='App'>
      <nav class="navbar navbar-light bg-dark">
        <div class="navbar-brand text-light">Meme Gallery</div>
        <button class="btn btn-success my-2 my-sm-0" onClick={() => showDiv()}>Generate</button>
      </nav>
      <div className='row' style={{ display: "none" }}>
        {
          meme.map((memeIndex, index) => {
            return (
              <div key={index} className="col-lg-4 col-md-4 col-sm-12 p-1">
                <img src={memeIndex.url}
                  alt={memeIndex.name}
                  height="300" width="400" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default App;
