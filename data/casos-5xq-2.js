// 5XQ · indicadores de poco uso (5 casos cada uno) y los que comparten lista con Relatos.
// Cada caso: [1.er porqué, 2.º, 3.º, 4.º, 5.º, causa raíz, acción correctiva]
window.DATOS = window.DATOS || {};
window.DATOS.casos = window.DATOS.casos || {};

Object.assign(window.DATOS.casos, {
  "5XQ|Recompra": [
    ["La recompra no se atendió a tiempo.", "Porque el camión de recompra no estaba listo.", "Porque se usó para otra tarea.", "Porque no hay camión fijo.", "Porque no se ha asignado.", "Falta de un camión fijo para la recompra.", "Asignar un camión fijo para la recompra."],
    ["Se atrasó la preparación de la recompra.", "Porque el producto no estaba separado.", "Porque se toma del picking del día.", "Porque no hay área para recompra.", "Porque no se ha definido.", "Falta de un área para preparar la recompra.", "Definir un área con producto de alta venta para la recompra."],
    ["La recompra llegó incompleta.", "Porque faltó un producto.", "Porque estaba en crítica.", "Porque no se avisó a ventas.", "Porque no hay comunicación de crítica.", "Crítica de inventario no comunicada a ventas.", "Informar a ventas la crítica antes de tomar recompras."],
    ["Hubo recompras canceladas.", "Porque el cliente ya no la necesitaba.", "Porque llegó muy tarde.", "Porque se agrupó con otras.", "Porque se esperó a llenar el camión.", "Recompras demoradas por esperar a llenar el camión.", "Definir un tiempo máximo de espera para despachar recompras."],
    ["La recompra se entregó al cliente equivocado.", "Porque las órdenes estaban mezcladas.", "Porque no tenían el nombre visible.", "Porque se imprimieron en un formato pequeño.", "Porque no se ha cambiado.", "Órdenes de recompra difíciles de identificar.", "Mejorar el formato de la orden con el cliente visible."]
  ],

  "5XQ|Tiempo atencion a recarga T2": [
    ["El tiempo de atención a la recarga fue alto.", "Porque la recarga llegó sin aviso.", "Porque el chofer no avisó.", "Porque no hay protocolo.", "Porque no se ha comunicado.", "Recargas sin aviso previo.", "Pedir a los choferes avisar la recarga antes de llegar."],
    ["El camión esperó para recargar.", "Porque el andén estaba ocupado.", "Porque se estaba cargando otra ruta.", "Porque no hay andén para recargas.", "Porque no se ha definido.", "Falta de un andén para recargas.", "Reservar un andén para recargas en el horario de ruta."],
    ["La recarga se demoró por el picking.", "Porque el producto no estaba listo.", "Porque se preparó al llegar.", "Porque no hubo aviso.", "Porque no hay canal.", "Falta de canal para avisar las recargas.", "Crear un canal de aviso de recargas con el almacén."],
    ["La atención de recarga superó la meta.", "Porque no había montacargas.", "Porque estaban en recepción.", "Porque coincidieron.", "Porque no hay prioridad.", "Recargas sin prioridad sobre otras tareas.", "Dar prioridad a las recargas de rutas en curso."],
    ["La recarga tardó por documentos.", "Porque había que facturar de nuevo.", "Porque el pedido cambió.", "Porque el cliente pidió más.", "Porque no hay proceso rápido.", "Facturación lenta en recargas.", "Habilitar un proceso rápido de facturación para recargas."]
  ],

  "5XQ|Tiempo atencion a recarga Recompra": [
    ["La recarga de recompra se atendió tarde.", "Porque el pedido llegó después del corte.", "Porque el vendedor lo tomó tarde.", "Porque el cliente llamó tarde.", "Porque no conoce el horario.", "Clientes que no conocen el horario de recompra.", "Informar a los clientes el horario límite para recompras."],
    ["Hubo demora en la recarga de recompra.", "Porque el producto estaba en lo alto.", "Porque no hay posición baja.", "Porque no se ha reorganizado.", "Porque no se ha evaluado.", "Producto de recompra sin posición accesible.", "Ubicar el producto de recompra en posiciones bajas."],
    ["La recarga de recompra esperó al chofer.", "Porque el chofer estaba en otra entrega.", "Porque no hay chofer asignado.", "Porque se usa el que esté libre.", "Porque no se planifica.", "Recompras sin chofer asignado.", "Asignar un chofer para recompras en cada turno."],
    ["La atención se demoró por falta de camión.", "Porque el camión estaba en taller.", "Porque no hubo reemplazo.", "Porque no hay reserva.", "Porque no se ha definido.", "Falta de camión de reserva para recompras.", "Tener un camión de reserva para recompras."],
    ["Se demoró la recarga por la verificación.", "Porque no había verificador.", "Porque estaba en la carga principal.", "Porque no hay suplente.", "Porque no se ha capacitado.", "Verificación de recompras sin suplente.", "Capacitar a un suplente para verificar recompras."]
  ],

  "5XQ|Productividad de Sorting": [
    ["La productividad de sorting fue baja.", "Porque llegó mucho envase mezclado.", "Porque las rutas no lo separan.", "Porque no se les ha pedido.", "Porque no hay estándar.", "Envases mezclados sin estándar de retorno.", "Definir un estándar de retorno de envases por tipo."],
    ["El sorting se atrasó.", "Porque faltó personal.", "Porque se movió a otra área.", "Porque no se planifica por volumen.", "Porque no se estima.", "Personal de sorting sin planificación.", "Estimar el volumen de envases y asignar personal."],
    ["Hubo reprocesos en el sorting.", "Porque se clasificaron mal.", "Porque había envases parecidos.", "Porque no hay guía visual.", "Porque no se ha hecho.", "Falta de guía visual de clasificación.", "Colocar una guía con fotos de cada envase."],
    ["El sorting fue lento por espacio.", "Porque no había dónde poner los envases clasificados.", "Porque el área estaba llena.", "Porque no se retiran a tiempo.", "Porque no hay responsable.", "Envases clasificados sin retiro oportuno.", "Asignar el retiro de envases clasificados cada hora."],
    ["Bajó la productividad de sorting.", "Porque había envases rotos mezclados.", "Porque no se separan en ruta.", "Porque no hay espacio para rotos.", "Porque no se ha asignado.", "Envases rotos mezclados con los buenos.", "Asignar un espacio para rotos en cada camión."]
  ],

  "5XQ|Productividad de Refugo": [
    ["La productividad de refugo estuvo baja.", "Porque no estaba identificado.", "Porque se mezcló con el bueno.", "Porque no hay área marcada.", "Porque no se ha definido.", "Refugo sin área ni identificación.", "Marcar un área para refugo."],
    ["El refugo se acumuló.", "Porque no se ha procesado.", "Porque falta autorización.", "Porque el proceso es lento.", "Porque depende de varias firmas.", "Autorización lenta del refugo.", "Simplificar las aprobaciones y procesar cada semana."],
    ["Hubo errores en el registro de refugo.", "Porque se registró con cantidad equivocada.", "Porque no se contó al separar.", "Porque se registra al final.", "Porque no hay registro inmediato.", "Registro tardío del refugo.", "Registrar el refugo al separarlo."],
    ["El refugo se procesó tarde.", "Porque el personal estaba en carga.", "Porque se priorizó la operación.", "Porque no hay tiempo asignado.", "Porque no está en el plan.", "Refugo fuera del plan del turno.", "Asignar un tiempo fijo al refugo en el plan semanal."],
    ["La productividad de refugo bajó por falta de equipo.", "Porque no había carretilla disponible.", "Porque estaban en uso.", "Porque no hay equipo asignado.", "Porque no se ha comprado.", "Refugo sin equipo asignado.", "Asignar una carretilla para el área de refugo."]
  ],

  "5XQ|Preparacion de Pedido": [
    ["La preparación de pedidos tomó más tiempo.", "Porque los pedidos llegaron tarde.", "Porque hubo cambios de último momento.", "Porque se aceptan fuera de horario.", "Porque no hay límite.", "Cambios de pedidos fuera de horario.", "Fijar un horario límite para cambios."],
    ["Hubo errores en la preparación.", "Porque se tomaron productos equivocados.", "Porque la orden era confusa.", "Porque mezcla zonas.", "Porque no se ordena por ubicación.", "Órdenes sin ordenar por ubicación.", "Ordenar las órdenes por ubicación del almacén."],
    ["La preparación se detuvo.", "Porque se acabó el film.", "Porque no se repuso.", "Porque no hay mínimo.", "Porque no se ha definido.", "Material de embalaje sin mínimo.", "Fijar un mínimo de film."],
    ["La preparación fue lenta por unidades sueltas.", "Porque hubo que abrir cajas.", "Porque los pedidos traen unidades.", "Porque no hay área de sueltos.", "Porque no se ha creado.", "Falta de área de unidades sueltas.", "Crear un área de unidades sueltas."],
    ["Se preparó un pedido dos veces.", "Porque se imprimió dos veces.", "Porque no se sabía que ya estaba listo.", "Porque no hay marca de pedido preparado.", "Porque no se registra.", "Pedidos preparados sin registro.", "Marcar en el sistema cada pedido preparado."]
  ],

  "5XQ|Edad de Productos (Frescura)": [
    ["Se encontró producto con poca vida útil.", "Porque no se despachó por vencimiento.", "Porque el lote viejo estaba detrás.", "Porque el acomodo no lo permite.", "Porque no se acomoda por fecha.", "Acomodo que impide cumplir el FEFO.", "Acomodar por fecha de vencimiento."],
    ["La edad del producto superó el límite.", "Porque se recibió más de lo que se vende.", "Porque el pedido a planta fue alto.", "Porque no se revisó el inventario.", "Porque no hay revisión previa.", "Pedidos sin revisar el inventario disponible.", "Revisar inventario y venta antes de pedir."],
    ["Hubo producto cerca del vencimiento.", "Porque no se priorizó su venta.", "Porque ventas no lo sabía.", "Porque no se comparte el reporte.", "Porque no hay reporte semanal.", "Falta de reporte de vencimientos para ventas.", "Enviar cada semana a ventas los productos próximos a vencer."],
    ["La frescura bajó en un producto de baja venta.", "Porque se vende poco.", "Porque se pide en cantidades grandes.", "Porque el mínimo de planta es alto.", "Porque no se ha negociado.", "Mínimo de pedido alto para productos de baja venta.", "Negociar mínimos menores o compartir pedidos con otro centro."],
    ["Se detectó producto viejo en devoluciones.", "Porque el producto devuelto se regresó al inventario.", "Porque no se revisó su fecha.", "Porque no hay revisión.", "Porque no se ha definido.", "Devoluciones sin revisión de fecha.", "Revisar la fecha de lo devuelto antes de reintegrarlo."]
  ],

  "5XQ|Cumpliento FEFO": [
    ["No se cumplió el FEFO en el despacho.", "Porque se tomó el lote más nuevo.", "Porque estaba más a mano.", "Porque el viejo estaba arriba.", "Porque no se bajó.", "Lotes viejos sin bajar al picking.", "Bajar primero los lotes de vencimiento más cercano."],
    ["Hubo incumplimiento de FEFO.", "Porque las fechas no se veían.", "Porque la etiqueta estaba tapada.", "Porque el film cubre la fecha.", "Porque no se marca afuera.", "Fecha de vencimiento no visible.", "Marcar la fecha en el exterior de cada paleta."],
    ["El FEFO falló en la recepción.", "Porque se guardó lo nuevo delante.", "Porque había prisa.", "Porque no hay regla de ubicación.", "Porque no se ha definido.", "Ubicación sin regla de fechas.", "Definir que lo nuevo se guarda detrás."],
    ["Se despachó un lote fuera de orden.", "Porque el sistema no indica el lote.", "Porque no se registra el lote.", "Porque no se configura.", "Porque no se ha solicitado.", "Sistema sin control de lotes.", "Solicitar el registro de lotes en el sistema."],
    ["El FEFO no se respetó en el turno de noche.", "Porque el personal no conoce la regla.", "Porque no recibió capacitación.", "Porque entró hace poco.", "Porque no hay inducción.", "Personal sin capacitación en FEFO.", "Incluir el FEFO en la inducción."]
  ],

  "5XQ|Reorganizacion de AG": [
    ["La reorganización del almacén no se completó.", "Porque no hubo tiempo.", "Porque la operación tuvo prioridad.", "Porque no se programó.", "Porque no está en el plan.", "Reorganización sin horario fijo.", "Incluir la reorganización en el plan semanal."],
    ["La reorganización tuvo errores.", "Porque se movió producto sin registrar.", "Porque se hizo con prisa.", "Porque no hay procedimiento.", "Porque no se ha definido.", "Reorganización sin procedimiento.", "Definir un procedimiento de registro de movimientos."],
    ["La reorganización empeoró el picking.", "Porque los productos de alta venta quedaron lejos.", "Porque no se usó el dato de venta.", "Porque no se consultó.", "Porque no hay criterio.", "Reorganización sin criterio de venta.", "Reorganizar usando el dato de venta de cada producto."],
    ["La reorganización se suspendió.", "Porque faltó montacargas.", "Porque estaba en reparación.", "Porque no se coordinó.", "Porque no hay planificación de equipos.", "Reorganización sin planificar equipos.", "Coordinar los equipos antes de programar la reorganización."],
    ["Después de reorganizar hubo diferencias.", "Porque no se actualizaron las ubicaciones.", "Porque quedó pendiente.", "Porque no hay responsable.", "Porque no se asignó.", "Actualización de ubicaciones sin responsable.", "Asignar un responsable de actualizar las ubicaciones."]
  ],

  "5XQ|Calidad de Carga T1 y T2": [
    ["Se reportaron problemas en la calidad de la carga.", "Porque las paletas llegaron mal armadas.", "Porque no se siguió el estándar.", "Porque no se conoce.", "Porque no hubo capacitación.", "Personal sin capacitación en armado.", "Capacitar en el estándar de armado."],
    ["La carga llegó con producto dañado.", "Porque las paletas no tenían film suficiente.", "Porque se ahorró material.", "Porque había poco.", "Porque no se repuso.", "Film insuficiente por falta de material.", "Asegurar el inventario de film y el mínimo de vueltas."],
    ["Hubo carga con presentaciones mezcladas.", "Porque se armó una paleta con varios productos.", "Porque se aprovechó el espacio.", "Porque no hay regla.", "Porque no se ha definido.", "Falta de regla de mezcla.", "Definir cuándo se puede mezclar y cómo identificarlo."],
    ["La carga T2 llegó desordenada al cliente.", "Porque no se cargó por orden de entrega.", "Porque no se conocía la secuencia.", "Porque no se imprime.", "Porque no se ha pedido.", "Carga sin seguir la secuencia de entrega.", "Imprimir la secuencia de entrega para cargar en orden inverso."],
    ["Se encontraron paletas inclinadas en la carga.", "Porque la base estaba mal.", "Porque la paleta de madera estaba rota.", "Porque no se revisó.", "Porque no hay criterio.", "Paletas de madera dañadas en la carga.", "Revisar y descartar paletas dañadas antes de armar."]
  ],

  "5XQ|Pre-post uso de MC": [
    ["No se hizo el pre-uso del montacargas.", "Porque el operador empezó directamente.", "Porque había presión.", "Porque el turno empezó atrasado.", "Porque no se exige.", "Pre-uso no exigido antes de operar.", "Exigir el pre-uso antes de entregar las llaves."],
    ["El post-uso del montacargas quedó sin llenar.", "Porque otra persona usó el equipo.", "Porque no hay asignación.", "Porque se comparte.", "Porque no hay entrega formal.", "Montacargas sin entrega formal entre turnos.", "Hacer la entrega con el post-uso firmado."],
    ["El pre-post uso no reportó una falla.", "Porque el formato no la incluye.", "Porque es viejo.", "Porque no se actualizó.", "Porque nadie lo revisa.", "Formato desactualizado.", "Actualizar el formato con el taller."],
    ["Bajó el cumplimiento del pre-post uso.", "Porque no se revisa.", "Porque el supervisor no lo pide.", "Porque no se mide.", "Porque no hay indicador.", "Pre-post uso sin seguimiento.", "Revisar cada semana el cumplimiento."],
    ["El pre-uso se hizo sin revisar los frenos.", "Porque el operador no sabe revisarlos.", "Porque no se le enseñó.", "Porque la capacitación es teórica.", "Porque no hay práctica.", "Capacitación sin práctica.", "Dar capacitación práctica del pre-uso."]
  ],

  "5XQ|Ejecucion Cambio de Turno": [
    ["El cambio de turno no se ejecutó según el estándar.", "Porque no se hizo la entrega de pendientes.", "Porque el supervisor saliente se fue antes.", "Porque no hay traslape.", "Porque no se ha definido.", "Cambio de turno sin traslape.", "Definir un traslape con entrega por escrito."],
    ["Se perdió información en el cambio de turno.", "Porque la entrega fue verbal.", "Porque no hay formato.", "Porque no se ha creado.", "Porque nadie lo pidió.", "Entregas verbales sin formato.", "Crear un formato simple de entrega de turno."],
    ["El turno empezó atrasado.", "Porque el turno anterior dejó tareas.", "Porque no informó qué faltaba.", "Porque el cambio fue rápido.", "Porque no hay revisión.", "Falta de revisión de pendientes.", "Revisar juntos los pendientes en el cambio de turno."],
    ["El cambio de turno se demoró.", "Porque se esperó al supervisor entrante.", "Porque llegó tarde.", "Porque no hay suplente.", "Porque no se ha designado.", "Cambio de turno dependiente del supervisor.", "Designar un líder suplente para recibir el turno."],
    ["Hubo equipos sin entregar en el cambio de turno.", "Porque los operadores se fueron sin entregar.", "Porque no hay lista de equipos.", "Porque no se ha preparado.", "Porque no se ha pedido.", "Equipos sin control en el cambio de turno.", "Preparar una lista de equipos para entregar en cada turno."]
  ],

  "5XQ|Organizacion Picking": [
    ["El área de picking estaba desorganizada.", "Porque había producto fuera de lugar.", "Porque no se devolvió.", "Porque no hay revisión al final.", "Porque no se asignó.", "Falta de revisión del orden al final del turno.", "Asignar la revisión del orden del picking por turno."],
    ["El picking tenía ubicaciones sin rotular.", "Porque los rótulos se dañaron.", "Porque son de papel.", "Porque no se compró material resistente.", "Porque no se presupuestó.", "Rótulos de material poco resistente.", "Cambiar los rótulos por material resistente."],
    ["Había paletas vacías en el picking.", "Porque no se retiraron.", "Porque no hay responsable.", "Porque no se ha asignado.", "Porque no hay rutina.", "Paletas vacías sin retiro.", "Asignar el retiro de paletas vacías cada hora."],
    ["Los pasillos de picking estaban obstruidos.", "Porque había producto en el piso.", "Porque se dejó al reabastecer.", "Porque no se terminó.", "Porque se interrumpió.", "Reabastecimiento interrumpido que deja producto en el piso.", "Terminar el reabastecimiento antes de cambiar de tarea."],
    ["Se mezclaron productos en una ubicación.", "Porque se reabasteció en la ubicación equivocada.", "Porque los rótulos estaban confusos.", "Porque son parecidos.", "Porque no se ha revisado.", "Rótulos confusos en ubicaciones vecinas.", "Revisar y aclarar los rótulos de ubicaciones vecinas."]
  ],

  "5XQ|Inventario Devolucion": [
    ["El inventario de devolución tuvo diferencias.", "Porque se registró menos de lo recibido.", "Porque no se contó.", "Porque llegaron muchas rutas.", "Porque no hay personal dedicado.", "Recepción de devoluciones sin conteo.", "Asignar personal dedicado en la hora pico."],
    ["La devolución quedó sin registrar.", "Porque llegó después del cierre.", "Porque la ruta regresó tarde.", "Porque no hay quien la reciba.", "Porque no se ha definido.", "Devoluciones fuera de horario sin responsable.", "Definir quién recibe las devoluciones tardías."],
    ["El producto devuelto se mezcló con el bueno.", "Porque no hay área de devoluciones.", "Porque se guarda donde hay espacio.", "Porque no se ha marcado.", "Porque no se ha definido.", "Falta de área de devoluciones.", "Marcar un área exclusiva para devoluciones."],
    ["Hubo devoluciones sin motivo registrado.", "Porque el chofer no lo anotó.", "Porque el formato es largo.", "Porque no se ha simplificado.", "Porque nadie lo ha revisado.", "Formato de devolución largo.", "Simplificar el formato de motivos."],
    ["El inventario de devoluciones se acumuló.", "Porque no se procesa a diario.", "Porque no hay personal.", "Porque se asigna a otras tareas.", "Porque no tiene prioridad.", "Devoluciones sin procesamiento diario.", "Procesar las devoluciones cada día."]
  ],

  "5XQ|Balance de Masa": [
    ["El balance de masa no cuadró.", "Porque hubo movimientos sin registrar.", "Porque se hicieron a mano.", "Porque el sistema estaba caído.", "Porque no se registraron después.", "Movimientos manuales sin registro posterior.", "Registrar los movimientos manuales al volver el sistema."],
    ["Hubo diferencia en el balance de masa.", "Porque no se registraron las roturas.", "Porque se acumularon.", "Porque el registro es lento.", "Porque no se simplificó.", "Registro lento de roturas.", "Simplificar el registro de roturas."],
    ["El balance de masa salió negativo.", "Porque se despachó más de lo recibido.", "Porque una recepción no se registró.", "Porque llegó de noche.", "Porque no hay acceso nocturno.", "Recepciones nocturnas sin registro.", "Dar acceso al turno de noche para registrar recepciones."],
    ["El balance no cuadró en envases.", "Porque se enviaron envases a planta sin registro.", "Porque el documento se perdió.", "Porque es en papel.", "Porque no hay digital.", "Envíos de envases con documento en papel.", "Registrar los envíos de envases en el sistema."],
    ["El balance de masa tuvo diferencias.", "Porque hubo ajustes sin documentar.", "Porque se hicieron para cerrar el mes.", "Porque no hay control de ajustes.", "Porque nadie aprueba.", "Ajustes sin control ni aprobación.", "Exigir documento y aprobación para cada ajuste."]
  ],

  "5XQ|Rotular Almacen": [
    ["Había ubicaciones sin rotular.", "Porque se crearon nuevas.", "Porque se reorganizó.", "Porque el rotulado no estaba en el plan.", "Porque no hay responsable.", "Rotulado fuera del plan.", "Incluir el rotulado en cada reorganización."],
    ["Los rótulos no se podían leer.", "Porque estaban sucios.", "Porque no se limpian.", "Porque no hay rutina.", "Porque no se ha definido.", "Rótulos sin rutina de revisión.", "Revisar y reponer los rótulos cada mes."],
    ["Había rótulos con información vieja.", "Porque cambió el producto de la ubicación.", "Porque no se actualizó.", "Porque nadie lo pidió.", "Porque no hay aviso.", "Cambios de ubicación sin actualizar el rótulo.", "Actualizar el rótulo con cada cambio de producto."],
    ["Faltaban rótulos en los racks altos.", "Porque se cayeron.", "Porque el adhesivo es débil.", "Porque se compró el más barato.", "Porque no se evaluó.", "Material de rótulos de baja calidad.", "Comprar rótulos de mejor adhesión para racks."],
    ["El rotulado se atrasó.", "Porque no había impresora de etiquetas.", "Porque se dañó.", "Porque no se reparó.", "Porque no hay presupuesto asignado.", "Impresora de etiquetas sin reparación.", "Reparar la impresora y tener rótulos de respaldo."]
  ],

  "5XQ|Ocupacion Almacen": [
    ["La ocupación del almacén superó el límite.", "Porque llegó más producto de planta.", "Porque se adelantaron envíos.", "Porque no se coordinó.", "Porque no se comparte la capacidad.", "Envíos sin considerar la capacidad del centro.", "Compartir la capacidad disponible con planificación."],
    ["El almacén quedó con poco espacio.", "Porque había mucho producto obsoleto.", "Porque no se dio de baja.", "Porque falta aprobación.", "Porque el proceso es lento.", "Proceso lento de baja de obsoletos.", "Dar seguimiento mensual a los obsoletos."],
    ["La ocupación fue baja en algunas zonas.", "Porque no se aprovecha la altura.", "Porque faltan paletas buenas.", "Porque no se reponen.", "Porque no hay control.", "Espacio desaprovechado por falta de paletas.", "Reponer las paletas dañadas y usar todos los niveles."],
    ["El almacén se llenó por devoluciones.", "Porque las devoluciones no se procesaron.", "Porque no hay personal.", "Porque se asigna a otras tareas.", "Porque no tienen prioridad.", "Devoluciones acumuladas que ocupan espacio.", "Procesar las devoluciones cada día."],
    ["La ocupación aumentó por envases.", "Porque se acumularon envases vacíos.", "Porque no se enviaron a planta.", "Porque no hubo camión.", "Porque no se programó.", "Envío de envases a planta sin programación.", "Programar el envío de envases a planta cada semana."]
  ]
});

// Indicadores de 5XQ que son lo mismo que uno de Relatos: usan la misma lista de casos.
window.DATOS.igual = Object.assign(window.DATOS.igual || {}, {
  "5XQ|Tiempo medio liberación (TML)": "Relatos|Distribución|TML",
  "5XQ|Tiempo en ruta": "Relatos|Distribución|Tiempo en ruta",
  "5XQ|Tiempo interno": "Relatos|Distribución|Tiempo interno",
  "5XQ|Devolución Hectolitros": "Relatos|Distribución|Devolución Hectolitros",
  "5XQ|Devolución Facturas": "Relatos|Distribución|Devolución facturas",
  "5XQ|Ruta SIF": "Relatos|Distribución|% Rutas SIF",
  "5XQ|Desviación KM": "Relatos|Distribución|Dispersion KM",
  "5XQ|Rotura distribución": "Relatos|Distribución|Roturas",
  "5XQ|Rotura almacén": "Relatos|Almacén|Roturas",
  "5XQ|Efectividad modulación": "Relatos|Distribución|Modulacion de la devolucion",
  "5XQ|TMA (T1)": "Relatos|Almacén|TMA",
  "5XQ|Carga de Camiones": "Relatos|Almacén|Carga de camiones",
  "5XQ|Productividad de Picking": "Relatos|Almacén|Productividad picking",
  "5XQ|Productividad de Reempaque": "Relatos|Almacén|Reempaque",
  "5XQ|Horas extras": "Relatos|Almacén|Horas Extras",
  "5XQ|Mantenimiento Correctivo": "Relatos|ADF|Mantenimiento Correctivo"
});
