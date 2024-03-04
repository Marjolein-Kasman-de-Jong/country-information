import './world-map.css';
import worldMap from '../../assets/world_map.png';

const WorldMap = function () {
    return (
        <span className="world-map-wrapper">
            <img src={worldMap} alt="World map" />
        </span>
    );
}

export default WorldMap;