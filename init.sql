-- Database

-- CREATE DATABASE SALUD_DATA_CENTER;
-- USE SALUD_DATA_CENTER;

-- Tabla categoria

CREATE TABLE IF NOT EXISTS categoria
(
    id integer NOT NULL AUTO_INCREMENT,
    tipo character varying(255) COLLATE latin1_general_ci,
    nombre character varying(255) COLLATE latin1_general_ci,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Tabla doctores

CREATE TABLE IF NOT EXISTS doctores
(
    id integer NOT NULL AUTO_INCREMENT,
    matricula character varying(255) COLLATE latin1_general_ci,
    nombreusuario character varying(255) COLLATE latin1_general_ci,
    nombre character varying(255) COLLATE latin1_general_ci,
    contrasena character varying(255) COLLATE latin1_general_ci,
    email character varying(255) COLLATE latin1_general_ci,
    dni integer,
    PRIMARY KEY (id)
);

-- Tabla empresas

CREATE TABLE IF NOT EXISTS empresas
(
    id integer NOT NULL AUTO_INCREMENT,
    name character varying(255) COLLATE latin1_general_ci,
    nombreusuario character varying(255) COLLATE latin1_general_ci,
    contrasena character varying(255) COLLATE latin1_general_ci,
    contact character varying(255) COLLATE latin1_general_ci,
    logo character varying(255) COLLATE latin1_general_ci,
    url character varying(255) COLLATE latin1_general_ci,
    PRIMARY KEY (id)
);

-- Tabla pacientes

CREATE TABLE IF NOT EXISTS pacientes
(
    id integer NOT NULL AUTO_INCREMENT,
    nombre character varying(255) COLLATE latin1_general_ci,
    apellido character varying(255) COLLATE latin1_general_ci,
    dni integer,
    email character varying(255) COLLATE latin1_general_ci,
    telefono integer,
    telefono2 integer,
    sintomas character varying(255) COLLATE latin1_general_ci,
    tratamiento character varying(255) COLLATE latin1_general_ci,
    diagnostico character varying(255) COLLATE latin1_general_ci,
    exp_Medico character varying(255) COLLATE latin1_general_ci,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Tabla productos

CREATE TABLE IF NOT EXISTS productos
(
    id integer NOT NULL AUTO_INCREMENT,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    tipoId integer,
    categoriaId integer,
    CONSTRAINT productos_categoriaId_fkey FOREIGN KEY (categoriaId)
        REFERENCES categoria (id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    CONSTRAINT productos_tipoId_fkey FOREIGN KEY (tipoId)
        REFERENCES tipos (id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    PRIMARY KEY (id)
);

-- Tabla registros

CREATE TABLE IF NOT EXISTS registros
(
    id integer NOT NULL AUTO_INCREMENT,
    nombrepaciente character varying(255) COLLATE latin1_general_ci,
    doctorasignado character varying(255) COLLATE latin1_general_ci,
    fechaemision character varying(255) COLLATE latin1_general_ci,
    razondevisita character varying(255) COLLATE latin1_general_ci,
    tratamiento character varying(255) COLLATE latin1_general_ci,
    indicaciones character varying(255) COLLATE latin1_general_ci,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Tabla subCategorias

CREATE TABLE IF NOT EXISTS sub_categoria
(
    id integer NOT NULL AUTO_INCREMENT,
    tipo character varying(255) COLLATE latin1_general_ci,
    nombre character varying(255) COLLATE latin1_general_ci,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    categoriaId integer,
    PRIMARY KEY (id),
    CONSTRAINT catego FOREIGN KEY (categoriaId)
        REFERENCES categoria (id)
        ON UPDATE CASCADE
        ON DELETE SET NULL,
);

-- Tabla tipo

CREATE TABLE IF NOT EXISTS tipo
(
    id integer NOT NULL AUTO_INCREMENT,
    marca character varying(255) COLLATE latin1_general_ci,
    modelo character varying(255) COLLATE latin1_general_ci,
    anio character varying(255) COLLATE latin1_general_ci,
    precio character varying(255) COLLATE latin1_general_ci,
    descripcion text COLLATE latin1_general_ci,
    ficha_tecnica character varying(255) COLLATE latin1_general_ci,
    imagenes character varying(255) COLLATE latin1_general_ci,
    createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);