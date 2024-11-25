import { React, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import SearchBox from "../components/SearchBox/SearchBox";
import { getProducts, postProducts } from "../redux/actions/product_actions";
import { putPatients } from "../redux/actions/patient_actions";
import { postRecords } from "../redux/actions/record_actions";
import "../styles/PatientSuggestProduct.css";

function PatientSuggestProduct (){
    const location = useLocation();

    const [ products, setProducts ] = useState([]);
    const [ searchArray, setSearchArray ] = useState([]);
    const [suggestProducts, setSuggestProducts] = useState([]);
    const [ patient, setPatient ] = useState(location.state || {});
    const [ record, setRecord ] = useState(location.state || {});
    const [filteredItems, setFilteredItems] = useState([]);
    const [ data, setData ] = useState([]);

    const [ visualSuggestProducts, setVisualSuggestProducts ] = useState([]);

    var product = {id:null};
    var suggestProduct = {id:record.record.suggestProduct};
    console.log(record);

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

    async function onClickConfirm (record){
        console.log(record);
        try {
            const result = await dispatch(postRecords(record.record));
            console.log(result);
            navigate("/patients");
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
                                recordParam = {record}
                                setRecord = {setRecord}
                                setSuggestProducts = {setSuggestProducts}
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
                                recordParam = {record}
                                setRecord = {setRecord}
                                setSuggestProducts = {setSuggestProducts}
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
                    <button className="patient-suggest-product-button" onClick={() => {onClickConfirm(record)}}>Confirmar</button>
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

function ProductCard ({patient, recordParam, setRecord, setSuggestProducts, id, title, subTitle, description}){

    const dispatch = useDispatch();

    const suggestProductCardOnClick = async (id) => {
        console.log(id);

        const date = new Date();
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
        };
        const currentDate = date.toLocaleDateString() + " " + date.toLocaleTimeString('es-ES', options);

        var newRecord = {
            id: recordParam.record.id,
            nombrepaciente: patient.patient.apellido + " " + patient.patient.nombre,
            dnipaciente: recordParam.record.dnipaciente,
            doctorasignado: recordParam.record.doctorasignado,
            fechaemision: currentDate,
            razondevisita: recordParam.record.razondevisita,
            tratamiento: patient.patient.tratamiento,
            indicaciones: recordParam.record.indicaciones, //Agregar input para modificar indicaciones
            suggestProduct: id,
        };
        console.log(newRecord);
        //dispatch(postRecords(newRecord));
        var record = newRecord;
        var suggestProduct = { id: id };
        setRecord({record: record});
        const suggestResult = await dispatch(getProducts(suggestProduct));
        setSuggestProducts(suggestResult.data);
        console.log(suggestProduct);
        //record = newRecord;
        //setVisualSuggestProducts(newRecord);
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