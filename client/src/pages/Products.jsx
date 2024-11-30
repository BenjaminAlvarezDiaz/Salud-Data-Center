import { React, useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import Sidebar from '../components/SideBar/Sidebar';
import SearchBox from '../components/SearchBox/SearchBox';
import { getProducts } from '../redux/actions/product_actions';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import '../styles/Products.css';

function Products (){
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ products, setProducts ] = useState([]);
    var product = { id: null };

    const toggleSidebar = () => {
        //alert('¡Me hiciste click!');
        setSidebarOpen(!isSidebarOpen);
    };

    const dispatchProducts = async () => {
        try {
            const result = await dispatch(getProducts(product));
            setProducts(result.data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
            if (error.response && error.response.status === 404) {
                alert("No hay productos para mostrar");
            }
        }
    }

    useEffect(() => {
        dispatchProducts();
    }, []);

    return (
        <div className='products-main-container'>
            <AppBar 
                content={<SearchBox placeHolder={"Buscar"}/>}
                contentRight={<div className='products-icon-right'>
                    <span className='material-icons icon-app-bar'>notifications</span>
                </div>}
                iconRight={<span className='material-icons icon-app-bar'>store</span>}
            />
            <div className='products-content'>
                <div className='products-content-up'>
                    <div className='products-content-see-items'>
                        <button className='products-content-buttons'>
                            <span className='material-icons products-buttons'>splitscreen</span>
                        </button>
                        <button className='products-content-buttons'>
                            <span className='material-icons products-buttons'>grid_view</span>
                        </button>
                    </div>
                    <SearchBox placeHolder={'Buscar'}/>
                    <div className='products-content-delete'>
                        <button className='products-content-delete-button'>
                            <span className='material-icons'>delete</span>
                        </button>
                    </div>
                    <div className='products-content-filter'>
                        <button className='products-content-filter-button'>
                            <span className='material-icons'>filter_alt</span>
                            Filter
                        </button>
                    </div>
                    <div className='products-content-new-product'>
                        <button className='products-content-new-product-button'>
                            <span className='material-icons'>add</span>
                            Nuevo producto
                        </button>
                    </div>
                </div>
                <div className='products-content-down'>
                    <div className='products-content-down-labels-items'>
                        <LabelsItems/>
                    </div>
                    <div className='products-line'/>
                    <div className='products-content-down-items'>
                        {products.map((item, index) => (
                            <ProductCard
                                key = {index}
                                product = {item}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
    );
}

function LabelsItems (){
    const [] = useState();


    return (
        <div className='products-content-down-labels-items'>
            <div className='products-labels'><span className='material-icons check'>check_box_outline_blank</span>Info Producto<span className='material-icons'>swap_vert</span></div>
            <div className='products-labels'>Precio<span className='material-icons'>swap_vert</span></div>
            <div className='products-labels'>Stock<span className='material-icons'>swap_vert</span></div>
            Publicado
        </div>
    );
}

function ProductCard ({ product }){



    return (
        <div className='products-card-item'>
            <div className='products-card-info'>
                <span className='material-icons check'>check_box_outline_blank</span>
                {/*<span className='material-icons'>medication</span>*/}
                <div className='products-card-model-mark'>
                    <div className='products-card-name'>{product.name}</div>
                    <div className='products-card-model-mark-id'>{product.modelo + " " + product.marca}</div>
                    <div className='products-card-model-mark-id'>ID: {product.id}</div>
                </div>
            </div>
            <div>${product.precio}</div>
            <div>{product.stock}</div>
            <button className='products-card-published-button'>
                {product.published? 
                    (<span className='material-icons'>toggle_on</span>) : 
                    (<span className='material-icons'>toggle_off</span>)
                }
            </button>
        </div>
    );
}

export default Products;