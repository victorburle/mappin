import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function App() {

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: -22.985198,
        longitude:  -43.1897198,
        zoom: 17

    });

    return (

        <div className="App">
         <ReactMapGL
         {...viewport}
         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
         onViewportChange={nextViewport => setViewport(nextViewport)}
            />
        </div>
    );
}

export default App;