import declarativeImage from '../assets/declarative.png';
import componentsImage from '../assets/components.png';
import singleWayImage from '../assets/single-way.png';
import jsxImage from '../assets/jsx.png';

function WebInfo () {
    return (
        <div className='web-info'>
        <div className="declarative"><img src={declarativeImage} alt="" />
        <h2>Declarative</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In dicta blanditiis quia architecto cum provident placeat, possimus repudiandae vero perspiciatis nobis explicabo, amet saepe facere error, id accusamus commodi? Ut?</p>
        </div>
        <div className="components"><img src={componentsImage} alt="" />
        <h2>Components</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore exercitationem minima mollitia enim doloribus ex expedita obcaecati asperiores rerum aut esse, similique illo beatae. Repudiandae sed at in asperiores praesentium;
</p>
        </div>
        <div className="singleWay"><img src={singleWayImage} alt="" />
        <h2>Single-Way</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae ullam odit rem eveniet modi, voluptas repellendus, dicta, accusantium dolor veniam incidunt minus. Excepturi porro veritatis soluta voluptatibus ipsa, tempora accusantium.</p>
        </div>
        <div className="jsx"><img src={jsxImage} alt="" />
        <h2>JSX</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam omnis architecto placeat saepe labore amet ad? Ut neque accusantium, eos, explicabo, est maxime id tempore aspernatur corrupti voluptatibus asperiores mollitia.</p>
        </div>
        </div>
    )
}

export default WebInfo;