// +10 casos por indicador · 5XQ (indicadores propios, parte 2).
// Inspirados en los problemas que reporta DC Samaná, redactados de forma general.
// Cada caso: [1.er porqué, 2.º, 3.º, 4.º, 5.º, causa raíz, acción correctiva]
window.DATOS = window.DATOS || {};
window.DATOS.casos = window.DATOS.casos || {};
window.DATOS.agregar = window.DATOS.agregar || function (clave, casos) {
  (window.DATOS.casos[clave] = window.DATOS.casos[clave] || []).push(...casos);
};

window.DATOS.agregar("5XQ|Recompra", [
  ["La recompra de una zona lejana no se atendió.", "Porque no había camión disponible.", "Porque todos estaban en ruta.", "Porque no hay camión para recompras.", "Porque no se asignó.", "Falta de camión para recompras en zonas lejanas.", "Asignar un camión de recompra para zonas lejanas en días fijos."],
  ["La recompra se canceló.", "Porque el cliente consiguió producto en otro lugar.", "Porque llegamos tarde.", "Porque se esperó llenar el camión.", "Porque no hay tiempo máximo.", "Recompras demoradas por esperar carga completa.", "Definir un tiempo máximo para despachar recompras."],
  ["La recompra llegó incompleta.", "Porque faltaban refrescos.", "Porque estaban en crítica.", "Porque no se avisó a ventas.", "Porque no hay comunicación.", "Crítica no comunicada a ventas.", "Informar la crítica a ventas antes de tomar recompras."],
  ["Hubo recompras con precio errado.", "Porque se facturó con el precio anterior.", "Porque no se actualizó.", "Porque el cambio llegó tarde.", "Porque no hay validación.", "Precios desactualizados en recompras.", "Validar precios antes de facturar recompras."],
  ["La recompra se entregó tarde a un mayorista.", "Porque se priorizaron otras rutas.", "Porque no hay criterio.", "Porque no se definió.", "Porque se atiende por orden de llegada.", "Recompras sin criterio de prioridad.", "Definir un criterio de prioridad para recompras."],
  ["La recompra se duplicó.", "Porque se tomó dos veces.", "Porque el cliente llamó dos veces.", "Porque no se revisó.", "Porque no hay registro.", "Recompras duplicadas sin registro.", "Revisar duplicados antes de despachar."],
  ["La recompra se demoró por falta de chofer.", "Porque el chofer estaba ocupado.", "Porque no hay chofer asignado.", "Porque no se planifica.", "Porque es variable.", "Recompras sin chofer asignado.", "Asignar un chofer para recompras."],
  ["La recompra no llegó en feriado.", "Porque no había personal.", "Porque no se programó.", "Porque no hay guardia.", "Porque no se definió.", "Feriados sin guardia de recompras.", "Programar guardia de recompras en feriados."],
  ["La recompra se entregó al cliente equivocado.", "Porque las órdenes estaban mezcladas.", "Porque no tenían el cliente visible.", "Porque el formato es pequeño.", "Porque no se cambió.", "Órdenes difíciles de identificar.", "Mejorar el formato de la orden."],
  ["La recompra se devolvió.", "Porque el cliente no tenía dinero.", "Porque pidió por impulso.", "Porque no se confirmó.", "Porque no hay confirmación.", "Recompras sin confirmación de pago.", "Confirmar el pago antes de despachar la recompra."]
]);

window.DATOS.agregar("5XQ|Tiempo atencion a recarga T2", [
  ["La recarga de una ruta lejana tardó.", "Porque el camión tuvo que regresar al centro.", "Porque no hay punto de recarga intermedio.", "Porque no se ha evaluado.", "Porque no hay convenio.", "Falta de punto de recarga intermedio.", "Evaluar un punto de recarga intermedio para rutas lejanas."],
  ["La recarga esperó por refrescos.", "Porque no había producto.", "Porque llegó tarde de planta.", "Porque no se coordinó.", "Porque no hay aviso.", "Faltante de refrescos en recargas.", "Reservar producto para recargas."],
  ["La atención de recarga fue lenta por la patana.", "Porque el montacargas estaba descargando.", "Porque coincidió.", "Porque no hay prioridad.", "Porque no se definió.", "Recargas sin prioridad.", "Dar prioridad a las recargas."],
  ["La recarga se demoró por facturación.", "Porque hubo que facturar de nuevo.", "Porque cambió el pedido.", "Porque el mayorista pidió más.", "Porque no hay proceso rápido.", "Refacturación lenta cuando un mayorista amplía su pedido.", "Habilitar facturación rápida para recargas."],
  ["La recarga no se avisó.", "Porque el chofer no tenía señal.", "Porque estaba en zona rural.", "Porque no hay punto de comunicación.", "Porque no se definió.", "Comunicación limitada en zonas sin señal.", "Definir puntos de comunicación en rutas rurales."],
  ["La recarga se atrasó por andén ocupado.", "Porque se cargaba otra ruta.", "Porque no hay andén de recarga.", "Porque no se reservó.", "Porque no se definió.", "Falta de andén de recarga.", "Reservar un andén para recargas."],
  ["La recarga tardó por verificación.", "Porque se revisaron huacales.", "Porque hubo reclamos.", "Porque no hay muestreo.", "Porque no se definió.", "Verificación sin muestreo.", "Definir un muestreo rápido."],
  ["La recarga esperó en cambio de turno.", "Porque no había quien atendiera.", "Porque no hay traslape.", "Porque no se planificó.", "Porque no se definió.", "Cambio de turno sin traslape.", "Definir traslape."],
  ["La recarga tardó por falta de huacales.", "Porque no había vacíos.", "Porque se enviaron a planta.", "Porque no hay mínimo.", "Porque no se definió.", "Huacales sin mínimo.", "Definir un mínimo de huacales."],
  ["La recarga se demoró por lluvia.", "Porque no se podía cargar.", "Porque el andén no tiene techo.", "Porque no se instaló.", "Porque no hay presupuesto.", "Andén de recarga sin techo.", "Usar el andén techado para recargas."]
]);

window.DATOS.agregar("5XQ|Tiempo atencion a recarga Recompra", [
  ["La recarga de recompra se atrasó en temporada.", "Porque hubo muchas recompras.", "Porque subió la venta.", "Porque no se reforzó.", "Porque no se planificó.", "Temporada sin refuerzo de recompras.", "Planificar refuerzo de recompras en temporada."],
  ["La recarga de recompra esperó por precio.", "Porque había que corregir la factura.", "Porque el precio estaba mal.", "Porque no se actualizó.", "Porque no hay validación.", "Precios desactualizados.", "Validar precios antes de facturar."],
  ["La recarga de recompra se demoró por espacio.", "Porque el camión de recompra estaba lleno.", "Porque llevaba envases.", "Porque no se descargaron.", "Porque no hubo tiempo.", "Camión de recompra con envases sin descargar.", "Descargar los envases al regresar."],
  ["La recarga esperó la aprobación de crédito.", "Porque el cliente tenía deuda.", "Porque no se revisó antes.", "Porque no hay información.", "Porque no se comparte.", "Información de crédito no disponible en recompras.", "Revisar el crédito al tomar la recompra."],
  ["La recarga de recompra llegó tarde.", "Porque la ruta era lejana.", "Porque se salió tarde.", "Porque se esperó otro pedido.", "Porque no hay tiempo máximo.", "Recompras que esperan otros pedidos.", "Definir un tiempo máximo de espera."],
  ["Hubo recompras sin atender en el día.", "Porque llegaron después del corte.", "Porque el cliente llamó tarde.", "Porque no conoce el horario.", "Porque no se informó.", "Horario de recompras desconocido.", "Informar el horario de recompras."],
  ["La recarga de recompra se duplicó.", "Porque se preparó dos veces.", "Porque no se marcó.", "Porque no hay registro.", "Porque no se definió.", "Preparación sin registro.", "Marcar en el sistema lo preparado."],
  ["La recarga se demoró por chofer en otra tarea.", "Porque hacía una entrega.", "Porque no hay chofer fijo.", "Porque no se asignó.", "Porque no se planifica.", "Recompras sin chofer fijo.", "Asignar un chofer fijo."],
  ["La recarga de recompra esperó por documentos.", "Porque la impresora falló.", "Porque no hay respaldo.", "Porque no se compró.", "Porque no se planificó.", "Impresora sin respaldo.", "Tener una impresora de respaldo."],
  ["La recarga de recompra se atrasó por falta de verificador.", "Porque estaba en la carga principal.", "Porque coincidió.", "Porque no hay suplente.", "Porque no se capacitó.", "Verificación sin suplente.", "Capacitar un suplente."]
]);

window.DATOS.agregar("5XQ|Productividad de Sorting", [
  ["El sorting fue lento por envases con botellas rotas.", "Porque se mezclaron.", "Porque no se separan en ruta.", "Porque no hay espacio para rotos.", "Porque no se asignó.", "Rotos mezclados con envases.", "Asignar un espacio para rotos en el camión."],
  ["La productividad bajó por envases de zonas lejanas.", "Porque llegaron todos juntos.", "Porque las rutas regresan tarde.", "Porque no hay corte.", "Porque no se planifica.", "Llegada concentrada de envases.", "Planificar el sorting según el regreso de rutas."],
  ["El sorting tuvo errores con envases de refrescos.", "Porque son parecidos a otros.", "Porque no hay guía.", "Porque no se preparó.", "Porque no se pidió.", "Falta de guía de envases.", "Preparar una guía visual."],
  ["El sorting se detuvo por espacio.", "Porque no se retiraron los clasificados.", "Porque no hay responsable.", "Porque no se asignó.", "Porque no se definió.", "Retiro de clasificados sin responsable.", "Asignar el retiro de clasificados."],
  ["La productividad bajó por personal reasignado.", "Porque se movió a la carga.", "Porque la carga estaba atrasada.", "Porque no se balancea.", "Porque no se planifica.", "Personal de sorting reasignado.", "Proteger el personal de sorting en el plan."],
  ["El sorting fue lento por calor.", "Porque el área no tiene sombra.", "Porque está al aire libre.", "Porque no se ha techado.", "Porque no hay presupuesto.", "Área de sorting sin sombra.", "Evaluar sombra para el área."],
  ["El sorting se atrasó por envases sucios.", "Porque había que separarlos.", "Porque venían con residuos.", "Porque no se avisa a los clientes.", "Porque no hay comunicación.", "Envases devueltos sucios.", "Pedir a los clientes devolver envases limpios."],
  ["La productividad bajó por falta de huacales vacíos.", "Porque no había dónde poner los envases.", "Porque se enviaron a planta.", "Porque no hay mínimo.", "Porque no se definió.", "Huacales sin mínimo.", "Definir un mínimo."],
  ["El sorting tuvo reprocesos.", "Porque se clasificó mal.", "Porque el personal era nuevo.", "Porque no tuvo inducción.", "Porque no hay plan.", "Personal nuevo sin inducción.", "Dar inducción de sorting."],
  ["El sorting no se registró.", "Porque se hizo sin documento.", "Porque no hay formato.", "Porque no se creó.", "Porque no se pidió.", "Sorting sin registro.", "Crear un registro simple."]
]);

window.DATOS.agregar("5XQ|Productividad de Refugo", [
  ["El refugo aumentó por botellas explotadas.", "Porque llegaron muchas de las rutas.", "Porque las rutas son largas.", "Porque hace calor.", "Porque no hay protección.", "Botellas explotadas por calor.", "Proteger la carga en rutas largas."],
  ["La productividad de refugo bajó por unidades con bajo líquido.", "Porque había que revisarlas una por una.", "Porque no hay criterio rápido.", "Porque no se definió.", "Porque no se pidió.", "Falta de criterio rápido para bajo líquido.", "Definir un criterio visual rápido."],
  ["El refugo se acumuló.", "Porque no se autorizó la baja.", "Porque requiere firmas.", "Porque el proceso es lento.", "Porque no se ha simplificado.", "Refugo acumulado por esperar varias firmas de autorización.", "Simplificar la autorización."],
  ["El refugo se registró mal.", "Porque se contó al final.", "Porque no se registra al separar.", "Porque no hay registro inmediato.", "Porque no se definió.", "Refugo contado al final del día en lugar de al separarlo.", "Registrar al separar."],
  ["El refugo se mezcló con producto bueno.", "Porque no hay área.", "Porque no se marcó.", "Porque no se definió.", "Porque no se planificó.", "Refugo sin área.", "Marcar un área para refugo."],
  ["La productividad de refugo bajó por personal.", "Porque se reasignó.", "Porque había carga.", "Porque no hay prioridad.", "Porque no está en el plan.", "Refugo fuera del plan.", "Asignar tiempo fijo al refugo."],
  ["El refugo tardó por falta de contenedores.", "Porque no había dónde poner el vidrio.", "Porque no se retiraron.", "Porque no hay contrato.", "Porque no se negoció.", "Falta de retiro de vidrio.", "Acordar retiro periódico de vidrio."],
  ["El refugo creció por roturas de descarga.", "Porque la patana dañaba huacales.", "Porque los perfiles están dañados.", "Porque no se reportó.", "Porque no hay registro.", "Patanas dañadas sin reporte.", "Reportar las patanas dañadas."],
  ["El refugo no se procesó en el fin de semana.", "Porque no hay personal.", "Porque no se programa.", "Porque es secundario.", "Porque no se mide.", "Refugo sin seguimiento.", "Medir y programar el refugo."],
  ["El refugo tuvo errores de clasificación.", "Porque se confundieron motivos.", "Porque no hay guía.", "Porque no se preparó.", "Porque no se pidió.", "Falta de guía de refugo.", "Preparar una guía de clasificación."]
]);

window.DATOS.agregar("5XQ|Preparacion de Pedido", [
  ["La preparación fue lenta por pedidos de mayoristas.", "Porque eran muy grandes.", "Porque se preparaban a mano.", "Porque no se agrupan.", "Porque no hay criterio.", "Pedidos grandes sin agrupar.", "Agrupar por producto."],
  ["Hubo errores por huacales incompletos.", "Porque se completaron con otros.", "Porque faltaba producto.", "Porque no se reportó.", "Porque se buscaba completar.", "Faltantes no reportados.", "Reportar faltantes."],
  ["La preparación se atrasó por refrescos.", "Porque no habían llegado.", "Porque planta despachó tarde.", "Porque no se coordinó.", "Porque no hay aviso.", "Llegadas sin coordinar.", "Coordinar con planta."],
  ["Se preparó una orden anulada.", "Porque no se avisó.", "Porque se anuló tarde.", "Porque estaba duplicada.", "Porque no hay control.", "Anulaciones sin aviso.", "Avisar las anulaciones."],
  ["La preparación se detuvo por film.", "Porque se agotó.", "Porque no se pidió.", "Porque no hay mínimo.", "Porque no se definió.", "Film sin mínimo.", "Fijar un mínimo de film."],
  ["Hubo errores de presentación.", "Porque se confundieron tamaños.", "Porque están juntos.", "Porque no se separan.", "Porque falta espacio.", "Presentaciones juntas.", "Separar presentaciones."],
  ["La preparación fue lenta por pasillos ocupados.", "Porque había devoluciones.", "Porque no se procesaron.", "Porque no hay área.", "Porque no se definió.", "Devoluciones en pasillos.", "Definir un área de devoluciones."],
  ["Se preparó producto con fecha corta.", "Porque no se revisó.", "Porque no hay control.", "Porque no se definió.", "Porque no se pidió.", "Preparación sin control de fechas.", "Revisar fechas al preparar."],
  ["La preparación se atrasó por personal nuevo.", "Porque no conocía ubicaciones.", "Porque no tuvo inducción.", "Porque no hay plan.", "Porque no se preparó.", "Personal nuevo sin inducción.", "Dar inducción de ubicaciones."],
  ["La preparación se demoró por órdenes impresas al final.", "Porque se esperó cerrar todo.", "Porque no se liberan por bloques.", "Porque no se configuró.", "Porque no se pidió.", "Órdenes liberadas al final.", "Liberar por bloques."]
]);

window.DATOS.agregar("5XQ|Edad de Productos (Frescura)", [
  ["Se encontró producto viejo en una zona lejana.", "Porque el cliente rota poco.", "Porque se le entregó mucho.", "Porque el sugerido es alto.", "Porque no se ajusta.", "Sugerido alto en clientes de baja rotación.", "Ajustar el sugerido a la rotación."],
  ["La frescura bajó en refrescos.", "Porque se recibió mucho de una vez.", "Porque planta envió de más.", "Porque no se coordinó.", "Porque no se comparte la venta.", "Envíos de planta sin la venta del centro.", "Compartir la venta con planta."],
  ["Hubo producto viejo después de temporada.", "Porque se pidió para la temporada.", "Porque la venta bajó antes.", "Porque no se ajustó.", "Porque no se revisa.", "Pedidos de temporada sin ajuste.", "Revisar la venta durante la temporada."],
  ["El cliente rechazó producto por fecha.", "Porque estaba cerca de vencer.", "Porque se despachó un lote viejo.", "Porque no se cumple el FEFO.", "Porque el acomodo no ayuda.", "Despacho sin FEFO.", "Acomodar por fecha."],
  ["Hubo producto viejo en devoluciones.", "Porque se reintegró sin revisar.", "Porque no hay revisión.", "Porque no se definió.", "Porque no se pidió.", "Devoluciones sin revisar fecha.", "Revisar fechas en devoluciones."],
  ["La frescura bajó por producto apartado.", "Porque se apartó y se olvidó.", "Porque no tiene seguimiento.", "Porque no hay ubicación.", "Porque no se creó.", "Producto apartado sin seguimiento.", "Dar seguimiento al producto apartado."],
  ["Se encontró producto viejo en el fondo del rack.", "Porque no se movió.", "Porque se guardó nuevo delante.", "Porque no hay regla.", "Porque no se definió.", "Acomodo sin regla de fechas.", "Guardar lo nuevo detrás."],
  ["La frescura bajó por baja venta de una presentación.", "Porque se vende poco.", "Porque el mínimo de planta es alto.", "Porque no se negoció.", "Porque no se ha pedido.", "Mínimo alto para baja venta.", "Negociar mínimos menores."],
  ["Hubo producto viejo en mayoristas.", "Porque compran mucho y rotan lento.", "Porque se les vende por volumen.", "Porque no se revisa su inventario.", "Porque no hay visita de revisión.", "Mayoristas sin revisión de inventario.", "Revisar el inventario de mayoristas."],
  ["La frescura no se controló.", "Porque no hay reporte.", "Porque no se ha creado.", "Porque nadie lo pidió.", "Porque no hay responsable.", "Frescura sin reporte ni responsable.", "Crear un reporte semanal de frescura."]
]);

window.DATOS.agregar("5XQ|Cumpliento FEFO", [
  ["No se cumplió el FEFO en un mayorista.", "Porque se tomó lo más cercano.", "Porque había prisa.", "Porque el pedido era grande.", "Porque no se planificó.", "Prisa en pedidos grandes.", "Planificar la preparación de pedidos grandes."],
  ["El FEFO falló en refrescos.", "Porque las fechas no se ven.", "Porque el film las tapa.", "Porque no se marcan afuera.", "Porque no se definió.", "Fechas no visibles.", "Marcar las fechas afuera."],
  ["El FEFO no se cumplió en la recepción.", "Porque lo nuevo se puso delante.", "Porque había prisa.", "Porque llegaron juntos.", "Porque no hay citas.", "Recepciones con prisa.", "Coordinar citas."],
  ["Hubo incumplimiento de FEFO en el turno de noche.", "Porque el personal no conoce la regla.", "Porque no tuvo inducción.", "Porque no hay plan.", "Porque no se preparó.", "Personal sin inducción en FEFO.", "Dar inducción en FEFO."],
  ["El FEFO falló por falta de espacio.", "Porque no se podía acceder al lote viejo.", "Porque estaba bloqueado.", "Porque el almacén estaba lleno.", "Porque no se despachó.", "Almacén lleno que bloquea el FEFO.", "Liberar espacio para cumplir el FEFO."],
  ["Se despachó un lote fuera de orden.", "Porque el sistema no indica lotes.", "Porque no se registra.", "Porque no se configuró.", "Porque no se pidió.", "Despacho sin registro de lote en el sistema.", "Solicitar el control de lotes."],
  ["El FEFO falló en devoluciones reintegradas.", "Porque se pusieron delante.", "Porque no se revisó la fecha.", "Porque no hay revisión.", "Porque no se definió.", "Devoluciones reintegradas sin FEFO.", "Revisar fechas al reintegrar."],
  ["El FEFO no se cumplió en el picking.", "Porque se reabasteció con lo nuevo.", "Porque estaba más a mano.", "Porque no hay regla.", "Porque no se explicó.", "Reabastecimiento sin FEFO.", "Reabastecer con lo más viejo primero."],
  ["Hubo producto vencido en el almacén.", "Porque no se despachó.", "Porque estaba olvidado.", "Porque no hay revisión.", "Porque no hay responsable.", "Producto sin revisión de fechas.", "Asignar un responsable de fechas."],
  ["El FEFO no se midió.", "Porque no hay indicador.", "Porque no se definió.", "Porque nadie lo pidió.", "Porque no se priorizó.", "FEFO sin indicador.", "Definir y medir el FEFO."]
]);

window.DATOS.agregar("5XQ|Reorganizacion de AG", [
  ["La reorganización se pospuso por temporada.", "Porque hubo mucho volumen.", "Porque no hubo tiempo.", "Porque no se programó antes.", "Porque no se planificó.", "Reorganización sin planificar antes de temporada.", "Reorganizar antes de la temporada."],
  ["La reorganización dejó refrescos lejos.", "Porque no se consideró la venta.", "Porque no se usó el dato.", "Porque no se consultó.", "Porque no hay criterio.", "Reorganización sin dato de venta.", "Usar el dato de venta."],
  ["La reorganización generó diferencias.", "Porque no se registraron movimientos.", "Porque se hizo rápido.", "Porque no hay procedimiento.", "Porque no se definió.", "Reorganización sin registro.", "Registrar cada movimiento."],
  ["La reorganización se detuvo por patana.", "Porque llegó una descarga.", "Porque no se coordinó.", "Porque no hay calendario.", "Porque no se definió.", "Reorganización sin coordinar con descargas.", "Coordinar con el calendario de descargas."],
  ["La reorganización no se terminó.", "Porque faltó montacargas.", "Porque estaba en reparación.", "Porque no se coordinó.", "Porque no se planificó.", "Equipos no planificados.", "Planificar equipos antes."],
  ["La reorganización dejó ubicaciones sin rótulo.", "Porque no se rotularon.", "Porque no había rótulos.", "Porque no se pidieron.", "Porque no se incluyó.", "Rotulado fuera de la reorganización.", "Incluir el rotulado."],
  ["La reorganización empeoró el acceso.", "Porque se bloquearon pasillos.", "Porque se puso producto en el piso.", "Porque faltó espacio.", "Porque no se midió.", "Reorganización sin medir el espacio.", "Medir el espacio antes de reorganizar."],
  ["La reorganización no se comunicó.", "Porque el personal no sabía.", "Porque no se informó.", "Porque no hay canal.", "Porque no se definió.", "Cambios no comunicados.", "Comunicar los cambios al personal."],
  ["La reorganización se hizo sin responsable.", "Porque se repartió entre varios.", "Porque nadie coordinó.", "Porque no se asignó.", "Porque no se definió.", "Reorganización sin responsable.", "Asignar un responsable."],
  ["La reorganización no se evaluó.", "Porque no se midió el resultado.", "Porque no hay indicador.", "Porque no se definió.", "Porque no se pidió.", "Reorganización sin evaluación.", "Medir el resultado de la reorganización."]
]);

window.DATOS.agregar("5XQ|Calidad de Carga T1 y T2", [
  ["La patana llegó con huacales enganchados.", "Porque las paletas venían juntas.", "Porque no había separación.", "Porque no hay estándar.", "Porque no se acordó.", "Paletas sin separación en la patana.", "Acordar con planta una separación mínima."],
  ["La carga T1 llegó con roturas.", "Porque los perfiles de la patana dañaron huacales.", "Porque están doblados.", "Porque no se reportó.", "Porque no hay registro.", "Perfiles de patana dañados.", "Reportar las patanas dañadas."],
  ["La carga T2 llegó desordenada al cliente.", "Porque no se cargó por orden de entrega.", "Porque no se conocía la secuencia.", "Porque no se imprime.", "Porque no se pidió.", "Carga sin secuencia.", "Cargar en orden inverso a la entrega."],
  ["Hubo huacales con huecos en la carga.", "Porque se armaron incompletos.", "Porque faltaba producto.", "Porque no se reportó.", "Porque se completó con otros.", "Faltantes no reportados.", "Reportar faltantes."],
  ["La carga llegó con botellas explotadas.", "Porque estuvo al sol.", "Porque la ruta es larga.", "Porque no hay protección.", "Porque no se evaluó.", "Carga expuesta al calor.", "Proteger la carga."],
  ["La carga T2 tenía paletas inclinadas.", "Porque la base estaba rota.", "Porque no se revisó.", "Porque no hay criterio.", "Porque no se definió.", "Paletas dañadas en la carga.", "Revisar las paletas antes de armar."],
  ["La carga llegó mojada.", "Porque llovió en la carga.", "Porque el andén no tiene techo.", "Porque no se instaló.", "Porque no hay presupuesto.", "Carga mojada por andén sin techo.", "Usar andenes techados."],
  ["Hubo mezcla de presentaciones en la carga.", "Porque se armó con varios productos.", "Porque se aprovechó espacio.", "Porque no hay regla.", "Porque no se definió.", "Mezcla sin regla.", "Definir la regla de mezcla."],
  ["La carga T1 tenía film insuficiente.", "Porque se ahorró material.", "Porque había poco.", "Porque no se repuso.", "Porque no hay mínimo.", "Film sin mínimo.", "Fijar un mínimo de film."],
  ["La calidad de carga no se revisó.", "Porque no hay inspección.", "Porque no se definió.", "Porque nadie lo pidió.", "Porque no hay indicador.", "Calidad de carga sin inspección.", "Hacer una inspección por muestreo."]
]);

window.DATOS.agregar("5XQ|Pre-post uso de MC", [
  ["No se hizo el pre-uso antes de descargar la patana.", "Porque llegó sin aviso.", "Porque se empezó de inmediato.", "Porque había presión.", "Porque no hay regla.", "Descargas urgentes sin pre-uso.", "Hacer el pre-uso aunque haya urgencia."],
  ["El post-uso no reportó daño.", "Porque el operador se fue rápido.", "Porque terminó tarde.", "Porque el turno fue largo.", "Porque hubo atraso.", "Post-uso omitido en turnos largos.", "Hacer el post-uso al entregar el equipo."],
  ["El pre-uso no revisó el gas.", "Porque no está en el formato.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Porque no se evaluó.", "Gas fuera del pre-uso.", "Agregar el gas."],
  ["El post-uso no se hizo.", "Porque otro operador tomó el equipo.", "Porque no hay entrega.", "Porque no se definió.", "Porque no se planificó.", "Entrega de equipo sin post-uso.", "Definir la entrega formal."],
  ["El pre-post uso se llenó de memoria.", "Porque se hizo al final.", "Porque no hay momento definido.", "Porque no se explicó.", "Porque no hay instrucción.", "Momento no definido.", "Definir cuándo se llena."],
  ["El pre-uso no detectó frenos débiles.", "Porque no se probaron.", "Porque se hace visual.", "Porque el formato no lo pide.", "Porque no se actualizó.", "Pre-uso sin prueba de frenos.", "Agregar prueba de frenos."],
  ["El post-uso no reportó la batería baja.", "Porque no está en el formato.", "Porque no se consideró.", "Porque nadie lo pidió.", "Porque no se evaluó.", "Batería fuera del post-uso.", "Agregar la batería."],
  ["El pre-post uso no se revisó.", "Porque el supervisor no lo pide.", "Porque no se mide.", "Porque no hay indicador.", "Porque no se definió.", "Sin seguimiento.", "Revisar cada semana."],
  ["El pre-uso de un montacargas alquilado no se hizo.", "Porque se cree que no aplica.", "Porque no se explicó.", "Porque no hay regla.", "Porque no se definió.", "Equipos alquilados sin pre-uso.", "Aplicar el pre-uso a todos los equipos."],
  ["El pre-post uso no se registró.", "Porque se hizo verbal.", "Porque no había formato.", "Porque no hay digital.", "Porque no se implementó.", "Sin registro.", "Implementar un registro simple."]
]);

window.DATOS.agregar("5XQ|Ejecucion Cambio de Turno", [
  ["El cambio de turno no incluyó la descarga pendiente.", "Porque no se informó.", "Porque fue verbal.", "Porque no hay formato.", "Porque no se creó.", "Pendientes de descarga no informados.", "Incluir las descargas en la entrega de turno."],
  ["El turno empezó sin saber de los faltantes.", "Porque no se comunicaron.", "Porque no hay espacio en la entrega.", "Porque el formato no lo pide.", "Porque no se actualizó.", "Faltantes fuera de la entrega de turno.", "Agregar faltantes al formato."],
  ["El cambio de turno se demoró.", "Porque se esperó al supervisor.", "Porque llegó tarde.", "Porque no hay suplente.", "Porque no se designó.", "Cambio dependiente de una persona.", "Designar un suplente."],
  ["Se perdió información de equipos dañados.", "Porque no se entregó.", "Porque se olvidó.", "Porque no hay lista.", "Porque no se preparó.", "Equipos dañados sin entrega.", "Preparar una lista de equipos."],
  ["El cambio de turno no se ejecutó en feriado.", "Porque había poco personal.", "Porque no se programó.", "Porque no hay plan.", "Porque no se definió.", "Feriados sin plan de cambio de turno.", "Programar el cambio de turno en feriados."],
  ["Hubo tareas repetidas después del cambio.", "Porque el turno nuevo no sabía qué se hizo.", "Porque no se informó.", "Porque la entrega fue rápida.", "Porque no hay revisión.", "Entrega rápida sin revisión.", "Revisar juntos lo hecho y lo pendiente."],
  ["El cambio de turno no tuvo traslape.", "Porque los horarios no se cruzan.", "Porque no se definió.", "Porque no se planificó.", "Porque no se pidió.", "Horarios sin traslape.", "Definir un traslape."],
  ["El cambio de turno omitió las devoluciones.", "Porque no se mencionaron.", "Porque no están en el formato.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Devoluciones fuera de la entrega.", "Agregar devoluciones al formato."],
  ["El cambio de turno no se registró.", "Porque se hizo verbal.", "Porque no hay registro.", "Porque no se creó.", "Porque no se pidió.", "Cambio de turno sin registro.", "Registrar la entrega."],
  ["El cambio de turno no se cumplió en la noche.", "Porque el supervisor de noche no estaba.", "Porque cubría otra área.", "Porque falta personal.", "Porque no se contrató.", "Turno de noche sin supervisor dedicado.", "Asignar un líder de turno de noche."]
]);

window.DATOS.agregar("5XQ|Organizacion Picking", [
  ["El picking estaba desorganizado por refrescos nuevos.", "Porque no tenían ubicación.", "Porque llegaron sin aviso.", "Porque no se informó.", "Porque no hay canal.", "Productos nuevos sin ubicación.", "Asignar ubicación antes de que lleguen."],
  ["Había producto de devolución en el picking.", "Porque no se procesó.", "Porque no hay área.", "Porque no se definió.", "Porque falta espacio.", "Devoluciones en el picking.", "Definir un área de devoluciones."],
  ["Las ubicaciones tenían mezcla de presentaciones.", "Porque se reabasteció mal.", "Porque los rótulos son parecidos.", "Porque no se diferencian.", "Porque no se actualizaron.", "Rótulos parecidos.", "Diferenciar los rótulos."],
  ["El picking tenía paletas vacías.", "Porque no se retiraron.", "Porque no hay responsable.", "Porque no se asignó.", "Porque no hay rutina.", "Paletas vacías acumuladas en el picking por falta de responsable.", "Asignar el retiro."],
  ["Los pasillos estaban obstruidos.", "Porque había producto en el piso.", "Porque se dejó al reabastecer.", "Porque se interrumpió.", "Porque llegó una descarga.", "Reabastecimiento interrumpido.", "Terminar el reabastecimiento antes de cambiar."],
  ["El picking tenía rótulos caídos.", "Porque el adhesivo es débil.", "Porque se compró barato.", "Porque no se evaluó.", "Porque no hay criterio.", "Rótulos de baja calidad.", "Comprar rótulos resistentes."],
  ["El orden del picking no se mantuvo.", "Porque no hay revisión al final.", "Porque no se asignó.", "Porque no hay rutina.", "Porque no se definió.", "Sin revisión del orden.", "Asignar la revisión."],
  ["Había producto con fecha corta en el picking.", "Porque no se retiró.", "Porque no se revisa.", "Porque no hay responsable.", "Porque no se definió.", "Fechas sin revisión en el picking.", "Revisar fechas en el picking."],
  ["El picking no seguía la venta.", "Porque los de alta venta estaban lejos.", "Porque no se reorganizó.", "Porque no hay revisión.", "Porque no se mide.", "Acomodo sin seguir la venta.", "Reorganizar según la venta."],
  ["El picking tenía huacales rotos.", "Porque no se retiraron.", "Porque se dejaron para después.", "Porque no hay área de rotos.", "Porque no se definió.", "Huacales rotos sin retiro.", "Definir un área para rotos."]
]);

window.DATOS.agregar("5XQ|Inventario Devolucion", [
  ["Las devoluciones de zonas lejanas llegaron tarde.", "Porque las rutas regresan tarde.", "Porque no hay quien las reciba.", "Porque no se definió.", "Porque el turno ya cerró.", "Devoluciones tardías sin responsable.", "Definir quién recibe las devoluciones tardías."],
  ["Hubo devoluciones parciales sin registrar.", "Porque el registro es difícil.", "Porque el sistema no lo facilita.", "Porque no se pidió mejora.", "Porque no se priorizó.", "Devoluciones parciales sin registro.", "Definir un registro simple."],
  ["El inventario de devoluciones tenía botellas rotas.", "Porque no se separaron.", "Porque no hay espacio.", "Porque no se asignó.", "Porque no se definió.", "Rotos mezclados en devoluciones.", "Separar los rotos al recibir."],
  ["Las devoluciones se registraron con motivo errado.", "Porque los motivos se confunden.", "Porque no hay guía.", "Porque no se preparó.", "Porque no se pidió.", "Motivos confusos.", "Preparar una guía de motivos."],
  ["El inventario de devoluciones no cuadró.", "Porque se contó sin el chofer.", "Porque se fue antes.", "Porque no hay regla.", "Porque no se definió.", "Conteo sin el chofer.", "Contar las devoluciones con el chofer."],
  ["Las devoluciones se acumularon.", "Porque no se procesan a diario.", "Porque no hay personal.", "Porque se reasigna.", "Porque no tiene prioridad.", "Devoluciones acumuladas por reasignar al personal a otras tareas.", "Procesar cada día."],
  ["Hubo devoluciones con fecha corta reintegradas.", "Porque no se revisaron.", "Porque no hay revisión.", "Porque no se definió.", "Porque no se pidió.", "Devoluciones reintegradas sin revisión.", "Revisar fechas al reintegrar."],
  ["El inventario de devoluciones no tenía ubicación.", "Porque se guardó donde hubo espacio.", "Porque no hay área.", "Porque no se marcó.", "Porque no se definió.", "Devoluciones sin área.", "Marcar un área de devoluciones."],
  ["Hubo devoluciones de mayoristas sin documento.", "Porque se recibieron de palabra.", "Porque el chofer no trajo documento.", "Porque no lo pidió.", "Porque no sabe que es obligatorio.", "Devoluciones sin documento.", "Explicar que toda devolución lleva documento."],
  ["El inventario de devoluciones no se revisó.", "Porque no hay responsable.", "Porque no se asignó.", "Porque no se definió.", "Porque no se priorizó.", "Devoluciones sin responsable.", "Asignar un responsable."]
]);

window.DATOS.agregar("5XQ|Balance de Masa", [
  ["El balance no cuadró por roturas en patana.", "Porque no se registraron.", "Porque se esperó al transporte.", "Porque no hay registro inmediato.", "Porque no se definió.", "Roturas sin registro inmediato.", "Registrar al descargar."],
  ["Hubo diferencia por órdenes duplicadas.", "Porque se descontó dos veces.", "Porque no se anuló.", "Porque no hay control.", "Porque no se revisa.", "Duplicados que afectan el balance.", "Revisar duplicados."],
  ["El balance salió mal por devoluciones parciales.", "Porque no se registraron.", "Porque el registro es difícil.", "Porque no se facilitó.", "Porque no se pidió.", "Devoluciones parciales sin registro.", "Facilitar el registro."],
  ["El balance no cuadró en envases.", "Porque se enviaron a planta sin registro.", "Porque el documento se perdió.", "Porque es papel.", "Porque no hay digital.", "Envíos de envases sin registro.", "Registrar en digital."],
  ["El balance tuvo diferencias por tránsito.", "Porque llegó menos de lo enviado.", "Porque se confirmó sin contar.", "Porque había prisa.", "Porque no hay regla.", "Recepciones sin conteo.", "Contar antes de confirmar."],
  ["El balance no cuadró por producto apartado.", "Porque no se registró.", "Porque no hay ubicación.", "Porque no se creó.", "Porque no se pidió.", "Producto apartado sin ubicación.", "Crear la ubicación."],
  ["El balance salió negativo.", "Porque se despachó sin recibir en sistema.", "Porque la recepción fue de noche.", "Porque no hay acceso.", "Porque no se dio.", "Turno de noche sin acceso para registrar recepciones.", "Dar acceso nocturno."],
  ["El balance no cuadró por refugo.", "Porque no se registró.", "Porque se botó.", "Porque no hay procedimiento.", "Porque no se definió.", "Refugo sin registro.", "Registrar el refugo."],
  ["El balance tuvo ajustes sin documento.", "Porque se ajustó para cerrar.", "Porque no hay control.", "Porque nadie aprueba.", "Porque no se definió.", "Ajustes sin control.", "Exigir aprobación de ajustes."],
  ["El balance no se revisó.", "Porque no hay responsable.", "Porque no se asignó.", "Porque no hay rutina.", "Porque no se definió.", "Balance sin responsable.", "Asignar un responsable semanal."]
]);

window.DATOS.agregar("5XQ|Rotular Almacen", [
  ["Faltaban rótulos para refrescos nuevos.", "Porque llegaron sin aviso.", "Porque no se informó.", "Porque no hay canal.", "Porque no se definió.", "Productos nuevos sin rótulo.", "Rotular antes de que lleguen."],
  ["Los rótulos se dañaron por humedad.", "Porque hay goteras.", "Porque no se repararon.", "Porque no se reportaron.", "Porque no hay revisión.", "Humedad que daña rótulos.", "Reparar las goteras y usar rótulos resistentes."],
  ["Había rótulos con productos equivocados.", "Porque se cambió el producto.", "Porque no se actualizó.", "Porque nadie avisó.", "Porque no hay regla.", "Cambios sin actualizar el rótulo.", "Actualizar el rótulo con cada cambio."],
  ["El rotulado de envases faltaba.", "Porque no se considera.", "Porque no se definió.", "Porque no hay estándar.", "Porque no se pidió.", "Envases sin rótulo.", "Rotular las zonas de envases."],
  ["Los rótulos del área de devoluciones no existían.", "Porque no hay área definida.", "Porque no se marcó.", "Porque falta espacio.", "Porque no se planificó.", "Área de devoluciones sin rótulo.", "Definir y rotular el área."],
  ["Los rótulos no se veían de lejos.", "Porque la letra es pequeña.", "Porque se usa un formato viejo.", "Porque no se cambió.", "Porque no se evaluó.", "Rótulos con letra pequeña.", "Usar letra grande."],
  ["Faltaban rótulos en el turno de noche.", "Porque no hay quien rotule.", "Porque se hace de día.", "Porque no se programó.", "Porque no se definió.", "Rotulado solo de día.", "Programar rotulado en la noche."],
  ["Los rótulos se cayeron en los racks.", "Porque el adhesivo es débil.", "Porque se compró barato.", "Porque no se probó.", "Porque no hay criterio.", "Rótulos de mala adhesión.", "Comprar rótulos de buena adhesión."],
  ["No se rotularon las ubicaciones de apartado.", "Porque no existen en el sistema.", "Porque no se crearon.", "Porque no se pidió.", "Porque no se priorizó.", "Ubicaciones de apartado sin crear.", "Crear y rotular las ubicaciones."],
  ["El rotulado no se revisó.", "Porque no hay responsable.", "Porque no se asignó.", "Porque no hay rutina.", "Porque no se definió.", "Rotulado sin revisión.", "Revisar los rótulos cada mes."]
]);

window.DATOS.agregar("5XQ|Ocupacion Almacen", [
  ["La ocupación subió por refrescos.", "Porque planta envió de más.", "Porque no se coordinó.", "Porque no se comparte la capacidad.", "Porque no hay reunión.", "Envíos sin considerar la capacidad.", "Compartir la capacidad con planta."],
  ["El almacén se llenó en temporada.", "Porque se pidió mucho.", "Porque se esperaba venta alta.", "Porque no se escalonó.", "Porque no se planificó.", "Pedidos de temporada sin escalonar.", "Escalonar los pedidos de temporada."],
  ["La ocupación aumentó por devoluciones.", "Porque no se procesaron.", "Porque no hay personal.", "Porque no se asignó.", "Porque no tiene prioridad.", "Devoluciones sin procesar.", "Procesar las devoluciones cada día."],
  ["Hubo poco espacio por envases.", "Porque no se enviaron a planta.", "Porque no hubo camión.", "Porque no se programó.", "Porque no hay calendario.", "Envases sin envío programado.", "Programar el envío de envases."],
  ["La ocupación fue alta por producto apartado.", "Porque se apartó por calidad.", "Porque no se decidió.", "Porque calidad tardó.", "Porque no hay tiempo de respuesta.", "Producto apartado sin decisión.", "Acordar un tiempo de respuesta con calidad."],
  ["El almacén tenía espacio desaprovechado.", "Porque no se usan los niveles altos.", "Porque faltan paletas buenas.", "Porque no se reponen.", "Porque no hay control.", "Niveles altos sin usar.", "Reponer paletas y usar los niveles."],
  ["La ocupación subió por refugo.", "Porque no se dio de baja.", "Porque falta autorización.", "Porque es lento.", "Porque requiere firmas.", "Refugo acumulado.", "Simplificar la baja del refugo."],
  ["La ocupación fue alta por recepción nocturna.", "Porque se recibió sin guardar.", "Porque no había montacargas.", "Porque estaba en carga.", "Porque no hay prioridad.", "Recepción sin guardar.", "Guardar lo recibido antes de la siguiente tarea."],
  ["El almacén se llenó por pedidos cancelados.", "Porque el producto regresó.", "Porque los clientes no tenían dinero.", "Porque no se confirmó.", "Porque no hay confirmación.", "Pedidos cancelados que regresan.", "Confirmar el pago antes de despachar."],
  ["La ocupación no se midió.", "Porque no hay indicador.", "Porque no se definió.", "Porque nadie lo pidió.", "Porque no hay responsable.", "Ocupación sin medición.", "Medir la ocupación cada semana."]
]);
