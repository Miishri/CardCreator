import {useState} from "react";

function doSomethingWithFiles(fileList) {
    let file = null;

    for (let i = 0; i < fileList.length; i++) {
        if (fileList[i].type.match(/^image\//)) {
            file = fileList[i];
            break;
        }
    }

    if (file !== null) {
        return URL.createObjectURL(file);
    }
}


export default function Card () {

    const [title, setTitle] = useState('Pyonpill');
    const [health, setHealth] = useState('100');
    const [image, setImage] = useState('/logo.png');
    const[background, setBackground] = useState('white');

    const[character, setCharacter] = useState('Vermin');

    const[passiveTitle, setPassiveTitle] = useState('Hungry Flies');
    const [passiveDescription, setPassiveDescription] = useState(' Every damage point recieved spawns one insect. Each spawned insect has a 1/2 chance on each turn to either do -1hp on the opponent or give +1hp on the user. After this action the insect disappears. 1/2 chance the insect does nothing. ');

    const[main, setMain] = useState('');
    const[mainDescription, setMainDescription] = useState('');

    const [ultimate, setUltimate] = useState('');
    const [ultimateDescription, setUltimateDescription] = useState('');

    return <div style={{display: 'flex', justifyContent: "center", margin: "30px"}}>
        <div className={"editor"}>
            <div>
                <label>Title: </label>
                <input className={"edit-heading"} minLength={1} type="text" value={title} onChange={(e) => {
                    setTitle(e.target.value);
                }}></input>
            </div>
            <div>
                <label>HP: </label>
                <input className={"edit-health"} minLength={1} type="number" value={health} onChange={(e) => {
                    setHealth(e.target.value);
                }}></input>
            </div>
            <div>
                <input className={"card-chooser"} type="file" accept="image/*" onChange={(event) => {
                    setImage(doSomethingWithFiles(event.target.files))
                }}/>
            </div>
            <div>
                <input className={"card-color"} type="color" value={background} onChange={(event) => {
                    setBackground(event.target.value)
                    console.log(event.target.value)
                }}/>
            </div>
            <div>
                <label>Character Name: </label>
                <input className={"edit-character"} minLength={1} type="text" value={character}
                       onChange={(e) => {
                           setCharacter(e.target.value);
                       }}></input>
            </div>
            <div>
                <label>Passive Name: </label>
                <input className={"edit-passive"} type="text" value={passiveTitle}
                       onChange={(e) => {
                           setPassiveTitle(e.target.value);
                       }}></input>
            </div>
            <div>
                <label>Passive Description: </label>
                <input className={"edit-passive-description"} minLength={1} type="text"
                       value={passiveDescription}
                       onChange={(e) => {
                           setPassiveDescription(e.target.value);
                       }}></input>
            </div>
            <div>
                <label>Skill Name: </label>
                <input className={"edit-main"} type="text" value={main}
                       onChange={(e) => {
                           setMain(e.target.value);
                       }}></input>
            </div>
            <div>
                <label>Skill Description: </label>
                <input className={"edit-main-description"} minLength={1} type="text"
                       value={mainDescription}
                       onChange={(e) => {
                           setPassiveDescription(e.target.value);
                       }}></input>
            </div>
            <div>
                <label>Ultimate Name: </label>
                <input className={"edit-ultimate"} type="text" value={ultimate}
                       onChange={(e) => {
                           setUltimate(e.target.value);
                       }}></input>
            </div>
            <div>
                <label>Passive Description: </label>
                <input className={"edit-ultimate-description"} minLength={1} type="text"
                       value={ultimateDescription}
                       onChange={(e) => {
                           setUltimateDescription(e.target.value);
                       }}></input>
            </div>
        </div>

        <div className={"card"} style={{backgroundColor: background}}>
            <div className={"card-heading"}>
                <h1 className={"card-name"}>{title}</h1>
                -
                <h1 className={"card-health"}>HP {health}</h1>
            </div>


            <img className={"card-image"} alt={"card image"} src={image}/>

            <div className={"card-title"}>{character}</div>

            <div className={"card-skills"}>
                <div className={"skill-passive"}>
                    <div className={"passive-name"}>Passive : {passiveTitle}</div>
                    <div className={"passive-description"}>{passiveDescription}</div>
                </div>

                <div className={"skill-main"}>
                    <div className={"main-name"}>Skill : {main}</div>
                    <div className={"main-description"}>{mainDescription}</div>
                </div>

                <div className={"skill-ultimate"}>
                    <div className={"ultimate-name"}>Ultimate : {ultimate}</div>
                    <div className={"ultimate-description"}>{ultimateDescription}</div>
                </div>

            </div>

        </div>
    </div>
}