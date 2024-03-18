-- Active: 1683342519514@@127.0.0.1@3306@db_ecommerce

use db_ecommerce;


CREATE TABLE producto (
    ID_PRODUCTO_I INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    TITLE_V VARCHAR(255) NOT NULL,
    DESCRIPTION_V text NOT NULL,
    PRECIO_D DECIMAL NOT NULL,
    URL_FILE_T TEXT NOT NULL,
    ESTADO_B tinyint(1) DEFAULT(true),
    FECHA_PRO_D VARCHAR(50) DEFAULT NULL,
    FECHA_CREATE_D DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FECHA_UPDATE_D TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT `FK_unidad` FOREIGN KEY (UU_ORIGEN_I) REFERENCES `unidad` (ID_UNIDAD_I) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `FK_estado_registro` FOREIGN KEY (ID_ESTADO_REG_I) REFERENCES `estado_registro_ext` (`ID_ESTADO_REG_I`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `FK_tipo_documento` FOREIGN KEY (TIPODOC_ID_I) REFERENCES `tipo_documento` (`ID_TIPODOC_I`) ON DELETE CASCADE ON UPDATE CASCADE, 
    CONSTRAINT `FK_medio_envio` FOREIGN KEY (MEDIO_ENVIO_ID_I) REFERENCES `medio_envio` (`ID_MEDIO_ENVIO_I`) ON DELETE CASCADE ON UPDATE CASCADE, 
    CONSTRAINT `FK_clasificacion` FOREIGN KEY (CLASIFICACION_ID_I) REFERENCES `clasificacion_doc` (`ID_CLASIFI_DOC_I`) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE usuario (
    ID_DNI_C char(8) NOT NULL,
    AP_PATERNO_V varchar(50) NULL,
    AP_MATERNO_V varchar(50) NULL,
    NOMBRE_V varchar(100) NULL,
    CORREO_V VARCHAR(200) NOT NULL,
    PASSWORD_V varchar(255) NOT NULL ,
    FECHA_NAC_D date DEFAULT NULL,
    FOTO_V varchar(100) DEFAULT("user.png"),
    ESTADO_B tinyint(1) DEFAULT(true),
    PRIMARY KEY (ID_DNI_C),
    KEY `FK_grado_id` (GRADO_I), KEY `FK_situacion_id` (SITMIL_I),
    CONSTRAINT `FK_grado_id` FOREIGN KEY (GRADO_I) REFERENCES grado (ID_GRADO_I) 
    ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `FK_situacion_id` FOREIGN KEY (SITMIL_I) REFERENCES situacion_militar (ID_SIMILITAR_I) 
    ON DELETE CASCADE ON UPDATE CASCADE
);






  //?  DERIVA A GRAL O SUB DIE *****************************************************/


--   const derivar = () => {
--     const dataRegis = {
--       USER_REG: dni,
--       PRIORIDAD_DOC_I: id_registro?.PRIORIDAD_DOC_I,
--       NIVEL3_ORIGEN_I: Number(X_NIVEL3),
--       NIVEL3_ACTUAL_I: Number(id_registro?.documento?.NIVEL1_FIRMA_ID_I),
--       DOCUMENTO_ID_I: Number(id_registro?.DOCUMENTO_ID_I),
--       OBSERVACION_T: dataTextArea,
--       ESTADO_REGIS_ID_I: 7, //pendiente firma
--     };

--     console.log(dataRegis);
--     mutationCreateRegExt.mutate(dataRegis);

--     mutationUpdateEstadoDoc.mutate({
--       id_registro: id_registro?.ID_REG_EXT,
--       estado: Number(14), // ESTADO 14 = DERIVADO
--       user_mod: dni,
--     });
--     ToastSuccessFirma("Derivado Correctamente");
--     navigate("/firmar-documentos-jefe");
--   };


DROP PROCEDURE IF EXISTS prueba;

DELIMITER//
CREATE PROCEDURE prueba(IN numero INT ) 
BEGIN 
DECLARE
	EXIT HANDLER FOR SQLEXCEPTION BEGIN SELECT 'ERROR';
	ROLLBACK;
END;
	START TRANSACTION;
    SELECT IFNULL(
    (SELECT idprueba FROM prueba WHERE idprueba = numero),
    'Error: Dato no encontrado'
) AS resultado;
    -- SELECT idprueba FROM prueba WHERE idprueba IN (2);
	SELECT 'OK' AS MESSAJE;
	COMMIT;
END; 



CALL prueba(25);



