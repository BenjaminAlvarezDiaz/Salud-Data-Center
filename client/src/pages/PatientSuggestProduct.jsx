import { React, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchBox from "../components/SearchBox/SearchBox";
import { getProducts, postProducts } from "../redux/actions/product_actions";
import { putPatients } from "../redux/actions/patient_actions";
import "../styles/PatientSuggestProduct.css";

function PatientSuggestProduct (){
    const location = useLocation();

    const [ products, setProducts ] = useState([]);
    const [ searchArray, setSearchArray ] = useState([]);
    const [suggestProducts, setSuggestProducts] = useState([]);
    const [ patient, setPatient ] = useState(location.state || {});
    const [filteredItems, setFilteredItems] = useState([]);
    const [ data, setData ] = useState([]);

    var product = {id:null};
    var suggestProduct = {id:patient.patient.suggestProduct};

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dispatchProducts = async (product, suggestProduct) => {
        console.log(suggestProduct);
        try {
            const result = await dispatch(getProducts(product));
            setProducts(result.data);
            setSearchArray(Object.values(result.data).map(item => item.modelo + " " + item.marca));
            const suggestResult = await dispatch(getProducts(suggestProduct));
            setSuggestProducts(suggestResult.data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay productos para mostrar");
            }
        }
    }

    useEffect(() => {
        dispatchProducts(product, suggestProduct);
    }, []);

    const onFilter = (filteredData) => {
        setFilteredItems(filteredData); // Guarda los datos filtrados en el estado del componente padre
        /*console.log(searchArray.filter(item => item.toLowerCase().includes(filteredItems)));*/
        console.log(filteredData);
        /*setData(searchArray.filter(item => item.toLowerCase().includes(filteredItems)));*/
    };

    /*const createProduct = async () => {
        var newProduct = {
            CategoriaId: null,
            marca: 'axe',
            modelo: 'pulverizador',
            anio: '20/10/2024',
            precio: 500.0,
            descripcion: 'pulverizador anti mosquitos',
            ficha_tecnica: 'contiene alcohol y desinfectante',
            imagenes: 'aaaa',
        };
        try {

            const response = await dispatch(postProducts(newProduct));

        } catch (error){
            console.error("Error al obtener los productos:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay productos para mostrar");
            }
        }
    }*/

    async function onClickConfirm (e, patient){
        e.preventDefault();
        try {
            const result = await dispatch(updatePatient(patient));
            setPatient(result);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay productos para mostrar");
            }
        }
    }

    const onClickCancel = (e) => {
        e.preventDefault();
        navigate(-1);
    }

    return (
        <div className="patient-suggest-product-main-container">
            <h3>Producto</h3>
            <div className="patient-suggest-product-second-container">
                <SearchBox placeHolder={"Buscar producto"} data={searchArray} onFilter={onFilter}/>
                <div className="patient-suggest-product-list">
                    {filteredItems.length > 0? 
                        (products.map((item, index) => (
                            filteredItems == item.modelo + " " + item.marca ||
                            filteredItems == item.modelo + item.marca || 
                            filteredItems == item.modelo || 
                            filteredItems == item.marca? 
                            <ProductCard
                                key = {index}
                                patient = {patient}
                                id = {item.id}
                                title = {item.modelo + " " + item.marca}
                                subTitle = {"$" + item.precio}
                                description = {item.descripcion}
                            /> : null
                        )))
                    : 
                        (products.map((item, index) => (
                            <ProductCard
                                key = {index}
                                patient = {patient}
                                id = {item.id}
                                title = {item.modelo + " " + item.marca}
                                subTitle = {"$" + item.precio}
                                description = {item.descripcion}
                            />
                        )))
                    }
                </div>
                <div className="patient-suggest-product-buttons">
                    <button className="patient-suggest-product-button" onClick={onClickCancel}>Cancelar</button>
                    <button className="patient-suggest-product-button" onClick={() => {onClickConfirm(patient)}}>Confirmar</button>
                </div>
                <div className="patient-suggest-product-suggest-label">Producto recomendado:</div>
                {suggestProduct.id? <div className="patient-suggest-product-list">
                    {suggestProducts.map((item, index) => (
                        <ProductCard
                            key = {index}
                            title = {item.modelo + " " + item.marca}
                            subTitle = {"$" + item.precio}
                            description = {item.descripcion}
                        />
                    ))}
                </div> : (<div>No hay productos aún</div>)}
            </div>
        </div>
    );
}

function ProductCard ({patient, id, title, subTitle, description}){

    const dispatch = useDispatch();

    const suggestProductCardOnClick = (id) => {
        console.log(id);
        var newPatient = {
            id: patient.patient.id,
            nombre: patient.patient.nombre,
            apellido: patient.patient.apellido,
            dni: patient.patient.dni,
            age: patient.patient.age,
            email: patient.patient.email,
            telefono: patient.patient.telefono,
            telefono2: patient.patient.telefono2,
            sintomas: patient.patient.sintomas,
            tratamiento: patient.patient.tratamiento,
            diagnostico: patient.patient.diagnostico,
            exp_Medico: patient.patient.exp_Medico,
            suggestProduct: id,
        };
        /*console.log(newPatient);*/
        dispatch(putPatients(newPatient));
    }

    return (
        <button className="patient-suggest-product-card-button" onClick={() => {id? suggestProductCardOnClick(id) : null}}>
            <div className="patient-suggest-product-card">
                <div className="patient-suggest-product-image"><span className="material-icons">image</span></div>
                <div className="patient-suggest-product-card-label">
                    <div className="patient-suggest-product-card-title">{(title)}</div>
                    <div>{(subTitle)}</div>
                    {(description)}
                </div>
            </div>
        </button>
    );
}

/* {products.map((item, index) => (
                        (filteredItems === item.modelo + item.marca || 
                            filteredItems === item.modelo + " " + item.marca || 
                            filteredItems === item.modelo || filteredItems === item.marca? 
                        (
                            <ProductCard
                                key = {index}
                                patient = {patient}
                                id = {item.id}
                                title = {item.modelo + " " + item.marca}
                                subTitle = { "$" + item.precio}
                                description = {item.descripcion}
                            />
                        ) : null)
                    ))}*/

export default PatientSuggestProduct;