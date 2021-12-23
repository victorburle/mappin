import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import {Room} from "@material-ui/icons";




function App() {

    const [viewport, setViewport] = useState({
        width: "100vw",
        height: "100vh",
        latitude: -22.985198,
        longitude: -43.1897198,
        zoom: 17

    });

    return (

        <div className="App">
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
                <Marker 
                latitude={48.858222} 
                longitude={2.2945} 
                offsetLeft={-20} 
                offsetTop={-10}
                >
                   <Room/>

                </Marker>
            </ReactMapGL>
        </div>
    );
}

export default App;