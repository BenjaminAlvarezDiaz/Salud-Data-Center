import { React, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchBox from "../components/SearchBox/SearchBox";
import { getProducts, postProducts } from "../redux/actions/product_actions";
import "../styles/PatientSuggestProduct.css";

function PatientSuggestProduct (){
    const location = useLocation();

    const [ products, setProducts ] = useState([]);
    const [ searchArray, setSearchArray ] = useState([]);
    const [suggestProducts, setSuggestProducts] = useState([]);
    const [ patient, setPatient ] = useState(location.state || {});

    var product = {id:null};
    var suggestProduct = {id:patient.suggestProduct};

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const dispatchProducts = async (product, suggestProduct) => {
        try {
            const result = await dispatch(getProducts(product));
            setProducts(result.data);
            setSearchArray(Object.values(result.data).map(item => item.modelo));
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
                <SearchBox placeHolder={"Buscar producto"} data={searchArray}/>
                <div className="patient-suggest-product-list">
                    {products.map((item, index) => (
                        <ProductCard
                            key = {index}
                            title = {item.modelo + " " + item.marca}
                            subTitle = { "$" + item.precio}
                            description = {item.descripcion}
                        />
                    ))}
                </div>
                <div className="patient-suggest-product-buttons">
                    <button className="patient-suggest-product-button" onClick={onClickCancel}>Cancelar</button>
                    <button className="patient-suggest-product-button" onClick={() => {onClickConfirm(patient)}}>Confirmar</button>
                </div>
                <div className="patient-suggest-product-suggest-label">Producto recomendado:</div>
                <div className="patient-suggest-product-list">
                    {suggestProducts.map((item, index) => (
                        <ProductCard
                            key = {index}
                            title = {item.modelo + " " + item.marca}
                            subTitle = {"$" + item.precio}
                            description = {item.descripcion}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function ProductCard ({title, subTitle, description}){
    return (
        <div className="patient-suggest-product-card">
            <div className="patient-suggest-product-image"><span className="material-icons">image</span></div>
            <div className="patient-suggest-product-card-label">
                <div className="patient-suggest-product-card-title">{(title)}</div>
                <div>{(subTitle)}</div>
                {(description)}
            </div>
        </div>
    );
}

export default PatientSuggestProduct;