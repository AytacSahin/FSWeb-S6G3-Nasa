import "./Body.css";

const Body = (props) => {
    const {imageURL, titleProp, expProp, copyrightProp, dateProp} = props;
    return (
    <div className="body-container">
        <div className="body-image">
            <img src={imageURL} alt="Arka Plan Resmi"></img>
        </div>
        <div className="body-text">
            <h1>{titleProp}</h1>
            <h2>{copyrightProp + " | " + dateProp}</h2>
            <p>{expProp}</p>
        </div>
    </div>
    )
};

export default Body;