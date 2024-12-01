import React, { useState } from 'react';
import SizedBox from '../components/SizedBox/SizedBox.jsx';
import SearchBox from '../components/SearchBox/SearchBox.jsx';
import AppBar from '../components/AppBar/AppBar.jsx';
import Sidebar from '../components/SideBar/Sidebar.jsx';
import GoogleLoginButton from '../components/GoogleLoginButton/GoogleLoginButton';
import FacebookLoginButton from '../components/FacebookLoginButton/FacebookLoginButton';
import '../styles/ControlPanel.css';
import '../styles/Profile.css';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

function Profile() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const sampleData = [
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Pineapple',
    'Grapes',
    'Strawberry',
    'Blueberry',
    'Watermelon',
    'Papaya'
  ];

  // States for handling input fields
  const [image, setImage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <AppBar 
        toggleSidebar={toggleSidebar} 
        content={
          <div className="searchBox">
            <SizedBox width={"0%"} />
            <SearchBox data={sampleData}/>
          </div>
        }
        contentRight={
          <a href="/">
            <button className="e-commerce">
              E-commerce
            </button>
          </a>
        }
        />

        <div className="profile-container">
        <div className="profile-info">
            {/* Imagen de usuario */}
            <div className="profile-image">
            <input 
                type="file" 
                accept="image/*"
                onChange={handleImageChange}
                id="image-upload"
                style={{ display: 'none' }}
            />
            <label htmlFor="image-upload">
                <div className="image-preview">
                {image ? 
                    <img src={image} alt="User" className="profile-image-preview" /> : 
                    <img 
                    src="https://via.placeholder.com/120?text=Perfil" // Placeholder image URL
                    alt="Placeholder" 
                    className="placeholder-img" 
                    />}
                </div>
            </label>
            </div>

            {/* Información personal */}
            <div className="profile-details">
            <div className="content-item">
                <label>Nombre</label>
                <input type="text" value="Juan Pérez" disabled />
            </div>
            <div className="content-item">
                <label>Sitio Web</label>
                <input type="text" value="https://www.juanperez.com" disabled />
            </div>
            <div className="content-item">
                <label>Contacto</label>
                <input type="text" value="juan@perez.com" disabled />
            </div>
            </div>
        </div>

        {/* Contenedor principal para la configuración de la cuenta */}
        <div className="account-info-container">
            <div className="account-settings">
            {/* Información de la cuenta */}
            <div className="content-item">
                <label>Nombre de Usuario</label>
                <div className="input-with-button">
                <input type="text" />
                <button>Actualizar</button>
                </div>
            </div>

            <div className="content-item">
                <label>Contraseña</label>
                <div className="input-with-button">
                <input type="text" />
                <button>Actualizar</button>
                </div>
            </div>

            <div className="content-item">
                <label>Correo Electrónico</label>
                <div className="input-with-button">
                <input type="text" />
                <button>Actualizar</button>
                </div>
            </div>
            </div>

            {/* Vinculación de cuentas al lado */}
            <div className="account-links">
            <div className="content-item">
                <label>Vincular Cuentas</label>
                <div className="social-icons">
                <GoogleLoginButton />
                <div className="divider" />
                <FacebookLoginButton />
                </div>
            </div>
            </div>
        </div>

        <div className="save-button">
            <button className="save-changes-btn">Guardar Cambios</button>
        </div>
        </div>


      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}


export default Profile;
