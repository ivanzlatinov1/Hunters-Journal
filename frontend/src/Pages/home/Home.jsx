import { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../context';
import './Home.css';

function Body() {
    const { isPlaying, toggleVolume } = useContext(Context);
    const navigate = useNavigate();

    const positionItem1 = { '--position': 1 };
    const positionItem2 = { '--position': 2 };
    const positionItem3 = { '--position': 3 };
    const positionItem4 = { '--position': 4 };
    const [rotation, setRotation] = useState(0);

    const handleRotate = (angle) => {
        setRotation((prevRotation) => prevRotation + angle);
    };

    return (
        <main>
            <section id="screen-1">
                <h2>Welcome, user!</h2>
                <div className="content">DESCRIPTION OF THE SITE</div>
                <button className="left-rotate" onClick={() => handleRotate(90)}></button>
                <div className="banner">
                    <div className="slider" style={{ transform: `perspective(1000px) rotateX(0deg) rotateY(${rotation}deg)` }}>
                        <div className="item" style={positionItem1}><button onClick={() => {navigate("/create")}} className="button-special">Create Monster</button></div>
                        <div className="item" style={positionItem2}><button onClick={() => {navigate("/browse")}} className="button-special">Monsters</button></div>
                        <div className="item" style={positionItem3}><button onClick={() => {navigate("/humans/create")}} className="button-special">Create Human</button></div>
                        <div className="item" style={positionItem4}><button onClick={() => {navigate("/humans")}} className="button-special">Humans</button></div>
                    </div>
                </div>
                <button className="right-rotate" onClick={() => handleRotate(-90)}></button>
                <div className="operation">
                    <h2>CHOOSE OPERATION</h2>
                </div>
                {isPlaying && (
                    <div className="volume-control">
                        <label htmlFor="volume">Volume:</label>
                        <input
                            id="volume"
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            defaultValue="0.2"
                            onChange={toggleVolume}
                        />
                    </div>
                )}
            </section>
        </main>
    );
}

export default Body;
