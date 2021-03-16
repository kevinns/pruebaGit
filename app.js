Bueno lo que hace el error parser es a partir de un mensaje de error que recibe a traves de un request, 

se fija si está mapeado en memoria, y devuelve un mensaje generico para que lo pueda interpretar el usuario.

Si no esta mapeado en memoria, devuelve el mensaje original.

Lo que tiene cargado en memoria es un arreglo, si, es un json que se obtiene de la coleccion errorParserRegexMap.

Y cada uno, cada objeto del json tiene un errorid, una expresion regular que es lo que va a intentar matchear con el mensaje de error y un mensaje generico que va a devolver en el caso que matchee con esa expresion.

Bueno esa tabla, ese arreglo que esta en memoria, se va recargar cada cierto tiempo para el caso en que se haya actualizado algun error o se haya agregado alguno nuevo.

Eso se va a hacer cada cierto tiempo que esta configurado en esta constante regRefreshTimeout








cors
ecma6
get post
use stric
(...)
singleton
