// +10 casos por indicador · Relatos de Anomalía · ADF.
// Inspirados en las condiciones de rutas largas y zonas rurales como las de DC Samaná.
// Cada caso: [1.er porqué, 2.º, 3.º, 4.º, 5.º, causa raíz, acción correctiva]
window.DATOS = window.DATOS || {};
window.DATOS.casos = window.DATOS.casos || {};
window.DATOS.agregar = window.DATOS.agregar || function (clave, casos) {
  (window.DATOS.casos[clave] = window.DATOS.casos[clave] || []).push(...casos);
};

window.DATOS.agregar("Relatos|ADF|Rescate", [
  ["Un camión necesitó rescate en una zona lejana.", "Porque se dañó la suspensión en un camino rural.", "Porque el camino tenía muchos baches.", "Porque se iba a velocidad normal.", "Porque no hay indicación para caminos rurales.", "Conducción sin ajuste en caminos rurales.", "Indicar reducir la velocidad en caminos rurales y registrar los tramos dañados."],
  ["El rescate tardó mucho en llegar.", "Porque el camión estaba lejos del centro.", "Porque no hay apoyo en la zona.", "Porque no hay convenio con talleres locales.", "Porque no se ha buscado.", "Falta de apoyo mecánico en zonas lejanas.", "Acordar con un taller local apoyo para las rutas lejanas."],
  ["Se pidió rescate por camión atascado en lodo.", "Porque el acceso al cliente era de tierra.", "Porque llovió mucho.", "Porque se intentó entrar igual.", "Porque no hay punto alterno.", "Entregas en accesos de tierra con lluvia sin punto alterno.", "Acordar puntos de entrega alternos para clientes con acceso de tierra."],
  ["Hubo un rescate por recalentamiento en una subida larga.", "Porque el motor trabajó forzado.", "Porque el camión iba muy cargado.", "Porque se cargó al máximo.", "Porque no se considera el terreno.", "Carga máxima en rutas con subidas largas.", "Reducir la carga en rutas con pendientes fuertes."],
  ["Se necesitó rescate por neumático sin repuesto útil.", "Porque el repuesto estaba sin aire.", "Porque no se revisa.", "Porque no está en el pre-uso.", "Porque el formato no lo pide.", "Repuesto de neumático fuera del pre-uso.", "Agregar el repuesto al pre-uso."],
  ["Un camión quedó detenido por falla en el freno de aire.", "Porque el compresor no cargaba.", "Porque tenía una fuga.", "Porque no se detectó.", "Porque no hay revisión de presión.", "Sistema de aire sin revisión de presión.", "Revisar la presión de aire en el pre-uso."],
  ["Hubo rescate por un golpe en el tanque de combustible.", "Porque el camión rozó con una piedra.", "Porque el camino era estrecho.", "Porque no se conocía.", "Porque no hay registro.", "Caminos estrechos sin registrar.", "Registrar los caminos estrechos y evitarlos con camiones grandes."],
  ["Se pidió rescate por falla en un feriado.", "Porque el taller estaba cerrado.", "Porque no hay guardia.", "Porque no se programó.", "Porque no hay plan para feriados.", "Taller sin guardia en feriados.", "Programar una guardia del taller en feriados."],
  ["El camión necesitó rescate por falla en las luces de noche.", "Porque el regreso fue de noche.", "Porque la ruta se alargó.", "Porque las luces no se revisaron.", "Porque no están en el pre-uso.", "Luces sin revisión antes de salir.", "Revisar las luces en el pre-uso."],
  ["Hubo un rescate por llanta pinchada en zona sin señal.", "Porque no se pudo avisar rápido.", "Porque no había señal.", "Porque la zona es rural.", "Porque no hay plan.", "Falta de plan de comunicación en zonas sin señal.", "Definir puntos de comunicación y hora de reporte en rutas sin señal."]
]);

window.DATOS.agregar("Relatos|ADF|Neumático", [
  ["Se dañó un neumático en un camino de tierra.", "Porque había piedras sueltas.", "Porque el camino no está asfaltado.", "Porque no hay otro acceso.", "Porque el cliente está en zona rural.", "Accesos rurales que dañan los neumáticos.", "Usar neumáticos adecuados en las rutas rurales."],
  ["Hubo desgaste rápido en las rutas largas.", "Porque se recorren muchos kilómetros.", "Porque los clientes están dispersos.", "Porque no se ajusta la rotación.", "Porque se rota igual en todos.", "Rotación de neumáticos igual para todas las rutas.", "Ajustar la rotación según el kilometraje de cada ruta."],
  ["El neumático se pinchó en una zona en construcción.", "Porque había clavos en la vía.", "Porque se pasó por la obra.", "Porque no se conocía.", "Porque no hay registro.", "Zonas en obra no registradas.", "Registrar las zonas en obra y avisar a las rutas."],
  ["Hubo un neumático con cortes por bordes de acera.", "Porque el camión subió al borde.", "Porque no había espacio.", "Porque el cliente no tiene parqueo.", "Porque no se evaluó.", "Clientes sin espacio de estacionamiento que obligan a subir a la acera.", "Evaluar el punto de entrega y acordar dónde estacionar."],
  ["Se reventó un neumático por calor.", "Porque la ruta es larga y con sol.", "Porque el neumático tenía baja presión.", "Porque no se midió.", "Porque no hay manómetro.", "Presión baja en rutas largas y calurosas.", "Medir la presión antes de las rutas largas."],
  ["Un neumático se dañó por sobrecarga de un mayorista.", "Porque el camión salió muy cargado.", "Porque se cargó todo el pedido.", "Porque no se revisó el peso.", "Porque no hay límite visible.", "Sobrecarga por pedidos de mayoristas.", "Respetar el límite de carga y dividir los pedidos grandes."],
  ["Hubo neumáticos con poca banda en temporada de lluvia.", "Porque no se cambiaron a tiempo.", "Porque se pospuso la compra.", "Porque no se planificó.", "Porque no se mide.", "Cambio de neumáticos sin planificar antes de la lluvia.", "Revisar la banda antes de la temporada de lluvia."],
  ["Se pinchó un neumático por un tornillo.", "Porque había restos en el patio del cliente.", "Porque el cliente estaba en obra.", "Porque no se revisó.", "Porque no hay evaluación.", "Patios de clientes con restos de obra.", "Evaluar el patio antes de entrar y usar un punto alterno."],
  ["Hubo un neumático mal reparado.", "Porque se reparó en una vulcanizadora local.", "Porque se hizo de emergencia.", "Porque no se revisó después.", "Porque no hay control.", "Reparaciones de emergencia sin revisión posterior.", "Revisar en el taller toda reparación hecha en ruta."],
  ["El neumático de repuesto no servía.", "Porque estaba desgastado.", "Porque se usó varias veces.", "Porque no se reemplazó.", "Porque no hay control.", "Neumático de repuesto sin control de estado.", "Revisar y reemplazar el repuesto cuando se use."]
]);

window.DATOS.agregar("Relatos|ADF|Mantenimiento Correctivo", [
  ["Un camión entró al taller por daño en la suspensión.", "Porque se rompieron los muelles.", "Porque recorre caminos en mal estado.", "Porque no se ajustó el preventivo.", "Porque es igual para todos.", "Preventivo igual para rutas rurales y urbanas.", "Ajustar el preventivo de los camiones de rutas rurales."],
  ["Hubo un correctivo por daño en la carrocería.", "Porque el camión rozó con ramas.", "Porque el camino es estrecho.", "Porque no se poda.", "Porque no se reporta.", "Caminos con ramas que dañan la carrocería.", "Reportar los caminos con ramas a la zona."],
  ["El correctivo se repitió en el mismo camión.", "Porque la falla volvió.", "Porque no se cambió la pieza.", "Porque no había repuesto.", "Porque se reparó provisional.", "Reparaciones provisionales que se repiten.", "Reemplazar la pieza cuando llegue el repuesto."],
  ["Se hizo un correctivo por falla eléctrica en lluvia.", "Porque entró agua al sistema.", "Porque los sellos estaban dañados.", "Porque no se revisan.", "Porque no están en el preventivo.", "Sellos eléctricos fuera del preventivo.", "Agregar los sellos al preventivo."],
  ["Un camión necesitó correctivo por frenos gastados.", "Porque las rutas tienen muchas bajadas.", "Porque se usa mucho el freno.", "Porque no se usa el freno de motor.", "Porque no se ha capacitado.", "Uso excesivo de frenos en bajadas.", "Capacitar en el uso del freno de motor."],
  ["Hubo correctivo del montacargas por golpe.", "Porque chocó con una columna.", "Porque el pasillo es estrecho.", "Porque no hay protección.", "Porque no se ha instalado.", "Columnas sin protección.", "Instalar protecciones en las columnas."],
  ["Se reparó la puerta de la caja.", "Porque se trabó.", "Porque la cerradura se oxidó.", "Porque no se lubrica.", "Porque no está en el preventivo.", "Cerraduras sin lubricar.", "Lubricar las cerraduras en el preventivo."],
  ["Un camión entró al taller por falla del aire acondicionado.", "Porque se dañó el compresor.", "Porque se usa todo el día.", "Porque no se revisa.", "Porque no está en el plan.", "Aire acondicionado sin mantenimiento.", "Agregar el aire acondicionado al plan."],
  ["Hubo correctivo por rotura de espejo.", "Porque chocó en un camino estrecho.", "Porque había vehículos estacionados.", "Porque no se esperó.", "Porque había prisa.", "Maniobras con prisa en caminos estrechos.", "Reforzar la conducción con calma en caminos estrechos."],
  ["Se hizo correctivo por fuga de combustible.", "Porque se aflojó una conexión.", "Porque el camión vibra mucho.", "Porque recorre caminos malos.", "Porque no se revisa.", "Conexiones que se aflojan por vibración sin revisión.", "Revisar las conexiones de combustible en el preventivo."]
]);

window.DATOS.agregar("Relatos|ADF|Mantenimiento Preventivo", [
  ["No se hizo el preventivo de un camión de ruta lejana.", "Porque el camión siempre está en ruta.", "Porque no hay reemplazo.", "Porque no se programó un día libre.", "Porque no se coordina.", "Camiones de rutas lejanas sin día libre para preventivo.", "Programar un día libre al mes para el preventivo."],
  ["El preventivo se atrasó por kilometraje alto.", "Porque el camión recorrió más de lo previsto.", "Porque las rutas son largas.", "Porque el plan es por tiempo.", "Porque no se mide el kilometraje.", "Plan preventivo por tiempo y no por kilometraje.", "Hacer el plan preventivo según el kilometraje."],
  ["El preventivo no se completó por falta de repuestos.", "Porque el proveedor tardó.", "Porque es de otra ciudad.", "Porque no hay proveedor local.", "Porque no se ha buscado.", "Falta de proveedores locales de repuestos.", "Buscar proveedores locales para repuestos de alto uso."],
  ["Se pospuso el preventivo por temporada alta.", "Porque se necesitaban todos los camiones.", "Porque subió la venta.", "Porque no se adelantó.", "Porque no se planificó.", "Preventivos no adelantados antes de temporada alta.", "Adelantar los preventivos antes de la temporada alta."],
  ["El preventivo del montacargas se saltó.", "Porque había descarga de patanas.", "Porque coincidió.", "Porque no se coordinó.", "Porque no hay calendario.", "Preventivo sin coordinar con las descargas.", "Coordinar el preventivo con el calendario de descargas."],
  ["El preventivo no revisó la suspensión.", "Porque no está en la lista.", "Porque la lista es general.", "Porque no se adaptó.", "Porque no se evaluó.", "Lista de preventivo no adaptada a rutas rurales.", "Agregar la suspensión al preventivo de rutas rurales."],
  ["El preventivo se hizo incompleto.", "Porque se hizo de prisa.", "Porque el camión debía salir.", "Porque se entregó tarde.", "Porque no se respetó la hora.", "Entregas tardías al taller.", "Respetar la hora de entrega al taller."],
  ["Hubo preventivos vencidos en el mes.", "Porque no se dio seguimiento.", "Porque no hay tablero.", "Porque se lleva en papel.", "Porque no se ha digitalizado.", "Control de preventivos en papel.", "Llevar el control en una hoja digital."],
  ["El preventivo se pospuso por ausencia del técnico.", "Porque estaba enfermo.", "Porque no hubo reemplazo.", "Porque no hay apoyo.", "Porque no se contrató.", "Taller sin apoyo ante ausencias.", "Acordar apoyo externo para ausencias."],
  ["No se registró el preventivo hecho.", "Porque se olvidó.", "Porque no hay formato.", "Porque no se ha creado.", "Porque no se pidió.", "Preventivos sin registro.", "Crear un formato de registro de preventivos."]
]);

window.DATOS.agregar("Relatos|ADF|Tiempo de Reparacion", [
  ["La reparación tardó por repuestos de otra ciudad.", "Porque no había en la zona.", "Porque el proveedor es lejano.", "Porque no hay inventario.", "Porque no se planifica.", "Repuestos sin inventario local.", "Mantener un inventario de repuestos de alto uso."],
  ["El tiempo de reparación aumentó en temporada de lluvia.", "Porque llegaron muchos camiones.", "Porque hubo más averías.", "Porque no se preparó la flota.", "Porque no hay revisión previa.", "Flota sin preparación para la lluvia.", "Revisar la flota antes de la temporada de lluvia."],
  ["La reparación se demoró por diagnóstico.", "Porque la falla era intermitente.", "Porque no se reprodujo.", "Porque el reporte era vago.", "Porque no hay preguntas guía.", "Reportes de falla poco claros.", "Usar preguntas guía para reportar fallas."],
  ["La reparación en ruta tardó mucho.", "Porque el mecánico tuvo que viajar.", "Porque la zona es lejana.", "Porque no hay taller cerca.", "Porque no hay convenio.", "Falta de taller de apoyo en zonas lejanas.", "Acordar un taller de apoyo en zonas lejanas."],
  ["El camión estuvo días esperando aprobación.", "Porque la reparación era costosa.", "Porque requiere varias firmas.", "Porque no hay límite delegado.", "Porque no se ha definido.", "Aprobaciones sin límite delegado.", "Definir un monto que el jefe de taller pueda aprobar."],
  ["La reparación se alargó por pieza equivocada.", "Porque se pidió con el modelo incorrecto.", "Porque no se verificó.", "Porque no hay datos técnicos del camión.", "Porque no se ha preparado.", "Pedidos de piezas sin datos técnicos.", "Preparar los datos técnicos de cada camión."],
  ["El tiempo de reparación subió por falta de herramientas.", "Porque no había gato hidráulico.", "Porque se dañó.", "Porque no se reemplazó.", "Porque no hay presupuesto.", "Herramientas dañadas sin reemplazo.", "Reponer las herramientas dañadas."],
  ["La reparación del montacargas se demoró.", "Porque el técnico externo tardó.", "Porque no hay contrato de servicio.", "Porque no se ha negociado.", "Porque no se ha priorizado.", "Servicio externo sin tiempo de respuesta.", "Negociar un tiempo de respuesta con el proveedor."],
  ["La reparación se repitió.", "Porque no se probó el camión.", "Porque se entregó rápido.", "Porque había presión.", "Porque no hay prueba de salida.", "Reparaciones sin prueba de salida.", "Probar el camión antes de entregarlo."],
  ["El camión esperó en el patio para entrar al taller.", "Porque el taller estaba lleno.", "Porque había camiones esperando repuestos.", "Porque se dejan dentro.", "Porque no hay área de espera.", "Taller ocupado por camiones en espera.", "Habilitar un área de espera fuera del taller."]
]);

window.DATOS.agregar("Relatos|ADF|Pre-Uso Camion T2", [
  ["El pre-uso no se hizo en una ruta lejana.", "Porque el camión salió de madrugada.", "Porque no había quien recibiera el formato.", "Porque el supervisor no estaba.", "Porque no hay entrega sin supervisor.", "Pre-uso dependiente de la presencia del supervisor.", "Permitir entregar el pre-uso en un buzón o formato digital."],
  ["El pre-uso no detectó neumáticos bajos.", "Porque no se midió la presión.", "Porque no hay manómetro.", "Porque se perdió.", "Porque no se repuso.", "Falta de manómetro para el pre-uso.", "Reponer los manómetros."],
  ["El pre-uso se llenó igual todos los días.", "Porque se copió del día anterior.", "Porque se ve como trámite.", "Porque no se revisa.", "Porque no hay verificación.", "Pre-uso sin verificación.", "Verificar al azar el pre-uso contra el camión."],
  ["No se revisó la carga del extintor.", "Porque no está en el formato.", "Porque el formato es viejo.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Formato sin extintor.", "Agregar el extintor al pre-uso."],
  ["El pre-uso no reportó la falta de lona.", "Porque el chofer no lo consideró parte.", "Porque no está en la lista.", "Porque no se ha agregado.", "Porque no se evaluó.", "Lona fuera del pre-uso.", "Agregar la lona al pre-uso."],
  ["Hubo pre-uso sin firma.", "Porque el chofer lo dejó incompleto.", "Porque salió de prisa.", "Porque la carga terminó tarde.", "Porque hubo atraso.", "Pre-uso incompleto por salidas con prisa.", "Hacer el pre-uso antes de terminar la carga."],
  ["El pre-uso no incluyó el estado de la carretilla.", "Porque no está en la lista.", "Porque no se consideró.", "Porque es del ayudante.", "Porque nadie la revisa.", "Carretilla sin revisión.", "Agregar la carretilla al pre-uso."],
  ["El pre-uso del camión de reemplazo no se hizo.", "Porque se asignó a última hora.", "Porque el titular se dañó.", "Porque no hubo tiempo.", "Porque se priorizó la salida.", "Camiones de reemplazo sin pre-uso.", "Hacer el pre-uso también en camiones de reemplazo."],
  ["El pre-uso no detectó una fuga.", "Porque no se miró debajo del camión.", "Porque no se sabe.", "Porque no se capacitó.", "Porque la capacitación es teórica.", "Capacitación del pre-uso sin práctica.", "Dar capacitación práctica del pre-uso."],
  ["El pre-uso no se entregó en un feriado.", "Porque no había personal administrativo.", "Porque no se recibe.", "Porque no hay buzón.", "Porque no se ha habilitado.", "Falta de punto de entrega del pre-uso.", "Habilitar un buzón para el pre-uso."]
]);

window.DATOS.agregar("Relatos|ADF|Post-Uso Camion T2", [
  ["El post-uso no reportó daños del camino rural.", "Porque el chofer no los notó.", "Porque no revisó al regresar.", "Porque llegó tarde.", "Porque la ruta es larga.", "Inspección de regreso omitida en rutas largas.", "Hacer una inspección rápida al regresar."],
  ["El post-uso se entregó incompleto.", "Porque el chofer estaba cansado.", "Porque la jornada fue larga.", "Porque se excedió.", "Porque la ruta tenía muchos clientes.", "Jornadas largas que afectan el post-uso.", "Simplificar el post-uso a puntos esenciales."],
  ["No se reportó la lona rota.", "Porque no está en el post-uso.", "Porque no se consideró.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Lona fuera del post-uso.", "Agregar la lona al post-uso."],
  ["El post-uso no se hizo en un día de lluvia.", "Porque se quería salir rápido.", "Porque estaba lloviendo.", "Porque no hay área techada.", "Porque no se ha definido.", "Falta de área techada para el post-uso.", "Definir un área techada para el post-uso."],
  ["El post-uso no reportó el nivel de combustible.", "Porque no está en el formato.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Porque no se evaluó.", "Combustible fuera del post-uso.", "Agregar el combustible al post-uso."],
  ["Hubo post-uso sin entregar.", "Porque el chofer se fue directo.", "Porque nadie lo pidió.", "Porque no hay control.", "Porque no se revisa.", "Post-uso sin control al cierre.", "Revisar el post-uso antes de cerrar la liquidación."],
  ["El post-uso no reportó ruidos del motor.", "Porque el chofer no sabía si era importante.", "Porque no hay espacio para comentarios.", "Porque el formato es de casillas.", "Porque no se diseñó.", "Formato sin espacio para comentarios.", "Agregar un espacio para comentarios en el post-uso."],
  ["El post-uso se perdió.", "Porque era en papel.", "Porque se dejó en el camión.", "Porque no hay buzón.", "Porque no se ha habilitado.", "Post-uso en papel sin punto de entrega.", "Habilitar un buzón o formato digital."],
  ["No se reportó la falta del botiquín.", "Porque no se revisa.", "Porque no está en el post-uso.", "Porque no se consideró.", "Porque no se evaluó.", "Botiquín fuera del post-uso.", "Agregar el botiquín al post-uso."],
  ["El post-uso del camión de reemplazo no se hizo.", "Porque se devolvió de prisa.", "Porque se necesitaba en otra ruta.", "Porque no hubo tiempo.", "Porque no se programó.", "Camiones de reemplazo sin post-uso.", "Hacer el post-uso también en camiones de reemplazo."]
]);

window.DATOS.agregar("Relatos|ADF|Pre-Uso Montacargas", [
  ["El pre-uso no se hizo antes de descargar una patana.", "Porque la patana llegó sin aviso.", "Porque se empezó de inmediato.", "Porque había presión.", "Porque no hay regla.", "Descargas urgentes sin pre-uso.", "Hacer el pre-uso aunque haya urgencia."],
  ["El pre-uso no revisó las horquillas.", "Porque no se sabe cómo.", "Porque no se capacitó.", "Porque es teórico.", "Porque no hay práctica.", "Capacitación sin práctica.", "Capacitar de forma práctica."],
  ["Hubo pre-uso sin revisar el gas.", "Porque el operador no lo vio.", "Porque no está en el formato.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Gas fuera del pre-uso.", "Agregar el nivel de gas al pre-uso."],
  ["El pre-uso se hizo de memoria.", "Porque se llenó después.", "Porque se empezó a trabajar.", "Porque había atraso.", "Porque no hay control.", "Pre-uso llenado después de operar.", "Pedir el pre-uso antes de entregar las llaves."],
  ["El pre-uso no detectó la bocina dañada.", "Porque no se probó.", "Porque no está en la lista.", "Porque no se consideró.", "Porque es viejo.", "Bocina fuera del pre-uso.", "Agregar la bocina al pre-uso."],
  ["El pre-uso no se hizo en el turno de noche.", "Porque no había formatos.", "Porque se acabaron.", "Porque no se repusieron.", "Porque no hay responsable.", "Formatos de pre-uso agotados en el turno de noche.", "Asignar la reposición de formatos."],
  ["El pre-uso no revisó las luces.", "Porque es de día.", "Porque no se consideran.", "Porque no se explicó.", "Porque no hay instrucción.", "Luces del montacargas sin revisión.", "Revisar las luces en todo pre-uso."],
  ["El pre-uso lo hizo otra persona.", "Porque el operador llegó tarde.", "Porque se adelantó otro.", "Porque no hay asignación.", "Porque no se define.", "Montacargas sin asignación por operador.", "Asignar cada montacargas a un operador."],
  ["El pre-uso no detectó frenos débiles.", "Porque no se probaron.", "Porque se hace visual.", "Porque no se pide prueba.", "Porque el formato no lo indica.", "Pre-uso sin prueba de frenos.", "Agregar una prueba de frenos al pre-uso."],
  ["El pre-uso no se registró.", "Porque se hizo verbal.", "Porque no había formato.", "Porque no hay digital.", "Porque no se implementó.", "Pre-uso sin registro.", "Implementar un registro digital simple."]
]);

window.DATOS.agregar("Relatos|ADF|Pots-Uso Montacargas", [
  ["El post-uso no reportó daño por la descarga de patana.", "Porque el operador no lo notó.", "Porque no revisó.", "Porque se fue rápido.", "Porque terminó tarde.", "Post-uso omitido al final de turnos largos.", "Hacer el post-uso al entregar el equipo."],
  ["El montacargas quedó sin cargar.", "Porque el post-uso no lo pidió.", "Porque no está en el formato.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Carga de batería fuera del post-uso.", "Agregar la conexión a carga al post-uso."],
  ["El post-uso no se hizo.", "Porque el operador se fue.", "Porque nadie lo pidió.", "Porque no hay entrega.", "Porque no se definió.", "Falta de entrega formal del montacargas.", "Definir la entrega formal entre turnos."],
  ["El post-uso no reportó la fuga.", "Porque el operador no miró el piso.", "Porque no sabe.", "Porque no se capacitó.", "Porque no hay práctica.", "Capacitación sin práctica.", "Dar capacitación práctica del post-uso."],
  ["El montacargas quedó en el pasillo.", "Porque no hay lugar marcado.", "Porque no se definió.", "Porque el área es pequeña.", "Porque no se planificó.", "Falta de lugar marcado para montacargas.", "Marcar un lugar de estacionamiento."],
  ["El post-uso se perdió.", "Porque era en papel.", "Porque se dejó en el equipo.", "Porque no hay buzón.", "Porque no se habilitó.", "Post-uso sin punto de entrega.", "Habilitar un buzón de entrega."],
  ["El post-uso se llenó por otro.", "Porque el operador se fue.", "Porque terminó otra tarea.", "Porque cambió de equipo.", "Porque no hay asignación.", "Equipos sin asignación por operador.", "Asignar el equipo por turno."],
  ["El post-uso no reportó el asiento roto.", "Porque se ve como algo menor.", "Porque no se explica.", "Porque no hay criterio.", "Porque no se definió.", "Criterio poco claro sobre qué reportar.", "Explicar que todo daño se reporta."],
  ["El post-uso no se revisó.", "Porque el supervisor no lo pide.", "Porque no se mide.", "Porque no hay indicador.", "Porque no se definió.", "Falta de revisión semanal del post-uso del montacargas.", "Revisar el post-uso cada semana."],
  ["El post-uso del montacargas de reemplazo no se hizo.", "Porque era alquilado.", "Porque se cree que no aplica.", "Porque no se explicó.", "Porque no hay regla.", "Equipos alquilados sin post-uso.", "Aplicar el post-uso también a equipos alquilados."]
]);
