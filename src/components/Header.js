import "./Header.css";

const Baslik = ({ dateProp }) => {
    return (
    <div className="header-title">
        <h1>NASA GÜNLÜKLERİNDE BUGÜN!</h1>
        <h2>Fotoğraf Tarihi: {dateProp}</h2>
    </div>
    )
};

export default Baslik;