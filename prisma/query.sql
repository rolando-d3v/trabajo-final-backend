-- Active: 1698220001086@@10.5.10.7@3306@prueba


-- LINK DE PRISMA CO VARIAS BASE DE DATOS
-- https://github.com/prisma/prisma/issues/2443

-- CMD PARA GENERAR CLIENT PARA VARIOS BASE DE DATOS
-- prisma generate --schema prisma/schema1.prisma
-- prisma generate --schema prisma/schema2.prisma


SELECT * FROM db_personal.nivel_1 WHERE ID_NIVEL1_I = 0;




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