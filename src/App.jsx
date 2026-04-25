import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import {CORE_CONCEPTS} from "./data.js";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

/*function CoreConcepts(props) {
    return (
        <li>
            <img src={props.image} alt={props.description}/>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}*/

function CoreConcepts({image, title, description}) { //destructuring concept
    return (
        <li>
            <img src={image} alt={description}/>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

function Header() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom"/>
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app you are going to build!
            </p>
        </header>
    );
}

function App() {
    return (
        <div>
            <Header/>
            <main>
                <section id="core-concepts">
                    <h2>Time to get started!</h2>
                    <ul>
                        {/*<CoreConcepts title="Components" description="The core UI building block." image={componentsImg}/>
                    <CoreConcepts title="Props"/>
                    <CoreConcepts/>
                    <CoreConcepts/>*/}
                        <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description}
                                      image={CORE_CONCEPTS[0].image}/>
                        {/* <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image}/>
                    <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image}/>
                    <CoreConcepts title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image}/>*/}
                        {/*s<CoreConcepts {...CORE_CONCEPTS[0]}/> pread operator to pass all the properties of the object as props to the component*/}
                        <CoreConcepts {...CORE_CONCEPTS[1]}/>
                        <CoreConcepts {...CORE_CONCEPTS[2]}/>
                        <CoreConcepts {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default App;