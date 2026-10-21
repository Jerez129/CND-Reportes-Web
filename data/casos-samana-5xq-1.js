// +10 casos por indicador · 5XQ (indicadores propios, parte 1).
// Inspirados en los problemas que reporta DC Samaná, redactados de forma general.
// Cada caso: [1.er porqué, 2.º, 3.º, 4.º, 5.º, causa raíz, acción correctiva]
window.DATOS = window.DATOS || {};
window.DATOS.casos = window.DATOS.casos || {};
window.DATOS.agregar = window.DATOS.agregar || function (clave, casos) {
  (window.DATOS.casos[clave] = window.DATOS.casos[clave] || []).push(...casos);
};

window.DATOS.agregar("5XQ|Diferencia de Inventario", [
  ["Hubo diferencia por roturas de la patana.", "Porque las roturas no se registraron al descargar.", "Porque se esperaba el reporte del transporte.", "Porque no hay registro inmediato.", "Porque el proceso no lo pide.", "Roturas de descarga sin registro inmediato.", "Registrar las roturas al momento de la descarga."],
  ["Se encontró diferencia por huacales con huecos.", "Porque se contaron completos.", "Porque no se revisaron.", "Porque se cuentan por huacal.", "Porque no hay muestreo.", "Conteo sin revisar huecos.", "Hacer muestreo de huacales en el conteo."],
  ["Hubo diferencia por una orden duplicada.", "Porque se descontó dos veces.", "Porque no se anuló la original.", "Porque no hay control.", "Porque no se revisa.", "Órdenes duplicadas que descuentan inventario.", "Revisar duplicados antes del despacho."],
  ["La diferencia aumentó por devoluciones parciales.", "Porque no se reintegró lo devuelto.", "Porque el registro es complicado.", "Porque el sistema no lo facilita.", "Porque no se ha pedido mejora.", "Devoluciones parciales sin registro.", "Definir un registro simple de devoluciones parciales."],
  ["Hubo diferencia en refrescos.", "Porque la presentación cambió.", "Porque se contaron con la unidad anterior.", "Porque no se avisó.", "Porque no hay canal.", "Cambios de presentación sin aviso.", "Avisar los cambios de presentación al almacén."],
  ["Se detectó diferencia por producto apartado.", "Porque se apartó por bajo líquido.", "Porque no se registró.", "Porque no hay ubicación.", "Porque no se creó.", "Producto apartado sin ubicación.", "Crear una ubicación para producto apartado."],
  ["Hubo diferencia en el tránsito de planta.", "Porque llegó menos de lo enviado.", "Porque no se reportó.", "Porque se confirmó sin contar.", "Porque había prisa.", "Recepciones confirmadas sin contar.", "Contar antes de confirmar la recepción."],
  ["La diferencia se debió a una venta sin registrar.", "Porque se entregó producto extra a un mayorista.", "Porque lo pidió en ruta.", "Porque no se facturó.", "Porque no hay regla.", "Producto extra entregado a mayoristas sin facturar.", "Prohibir entregas sin factura."],
  ["Hubo diferencia por envases enviados a planta.", "Porque no se registró la salida.", "Porque el documento se perdió.", "Porque es en papel.", "Porque no hay digital.", "Envíos de envases sin registro.", "Registrar los envíos al cargarlos."],
  ["La diferencia no se resolvió.", "Porque se ajustó sin investigar.", "Porque se quería cerrar el mes.", "Porque no hay análisis.", "Porque no hay tiempo asignado.", "Ajustes sin análisis.", "Analizar la causa antes de ajustar."]
]);

window.DATOS.agregar("5XQ|Eficiencia de carga", [
  ["La eficiencia bajó por descarga de patana en horario de carga.", "Porque el personal se movió.", "Porque la patana llegó tarde.", "Porque no se coordinó.", "Porque no hay citas.", "Descargas en horario de carga.", "Coordinar descargas fuera de la carga."],
  ["La eficiencia de carga cayó por pedidos de mayoristas.", "Porque tenían muchos productos.", "Porque se armaron a mano.", "Porque no se agrupan.", "Porque no hay criterio.", "Pedidos grandes sin agrupar.", "Agrupar los pedidos grandes."],
  ["Se cargó solo una parte de los camiones.", "Porque faltaron refrescos.", "Porque no llegaron de planta.", "Porque no se avisó.", "Porque no hay canal.", "Faltantes de planta sin aviso.", "Pedir aviso diario de faltantes."],
  ["La eficiencia bajó por órdenes duplicadas.", "Porque se armó una orden de más.", "Porque no se anuló.", "Porque no se detectó.", "Porque no hay revisión.", "Órdenes duplicadas sin revisión.", "Revisar duplicados antes de liberar."],
  ["La eficiencia de carga no se cumplió por temporada.", "Porque el volumen subió.", "Porque llegaron turistas.", "Porque no se reforzó.", "Porque no se planificó.", "Temporada sin refuerzo de personal.", "Planificar personal para la temporada."],
  ["La eficiencia bajó por cambios de fecha.", "Porque se sacaron pedidos de la carga.", "Porque cobros los movió.", "Porque no se avisó a tiempo.", "Porque no hay canal.", "Cambios de fecha sin aviso.", "Avisar los cambios de fecha antes de la carga."],
  ["Hubo baja eficiencia por falta de huacales.", "Porque no había huacales vacíos.", "Porque se enviaron a planta.", "Porque no se dejó mínimo.", "Porque no hay mínimo.", "Huacales sin mínimo.", "Definir un mínimo de huacales."],
  ["La eficiencia bajó por verificación lenta.", "Porque se revisó cada huacal.", "Porque hubo quejas de huecos.", "Porque no hay muestreo.", "Porque no se definió.", "Verificación sin método de muestreo.", "Definir un muestreo de huacales."],
  ["La eficiencia cayó por lluvia.", "Porque se detuvo la carga.", "Porque no hay techo.", "Porque no se instaló.", "Porque no hay presupuesto.", "Andenes sin techo.", "Priorizar andenes techados."],
  ["La eficiencia bajó en el turno de noche.", "Porque faltó personal.", "Porque hubo ausencias.", "Porque no avisaron.", "Porque no hay protocolo.", "Ausencias sin aviso.", "Definir un protocolo de aviso."]
]);

window.DATOS.agregar("5XQ|Exactitud de Carga", [
  ["Hubo un sobrante en una ruta y un faltante en otra.", "Porque se intercambiaron paletas.", "Porque estaban juntas.", "Porque no tenían rótulo.", "Porque faltan rótulos.", "Paletas sin rótulo de ruta.", "Rotular cada paleta con su ruta."],
  ["Se cargó una paleta de más.", "Porque el conferente confirmó sin contar.", "Porque había prisa.", "Porque el camión debía salir.", "Porque no hay conteo obligatorio.", "Confirmación sin conteo.", "Hacer obligatorio el conteo antes de confirmar."],
  ["La exactitud bajó por huacales con huecos.", "Porque se cargaron incompletos.", "Porque la verificación es por paleta.", "Porque no se revisan.", "Porque no hay muestreo.", "Verificación global.", "Hacer muestreo de huacales."],
  ["Se cargó producto de un pedido anulado.", "Porque la orden estaba duplicada.", "Porque no se avisó al almacén.", "Porque se anuló tarde.", "Porque no hay control.", "Anulaciones sin aviso al almacén.", "Avisar las anulaciones al almacén."],
  ["Hubo error de presentación en refrescos.", "Porque se confundieron tamaños.", "Porque las cajas se parecen.", "Porque están juntas.", "Porque no se separan.", "Presentaciones parecidas juntas.", "Separar las presentaciones parecidas."],
  ["La exactitud de carga falló en un mayorista.", "Porque el pedido era grande.", "Porque se contó una sola vez.", "Porque no hay doble conteo.", "Porque no se exige.", "Pedidos grandes sin doble conteo.", "Hacer doble conteo en pedidos grandes."],
  ["Se cargó producto con fecha corta.", "Porque no se revisó.", "Porque se tomó lo primero.", "Porque no hay control.", "Porque no se definió.", "Carga sin control de fecha.", "Revisar fechas al cargar."],
  ["Hubo faltante por orden impresa vieja.", "Porque la orden cambió.", "Porque no se reimprimió.", "Porque no se avisó.", "Porque no hay control.", "Órdenes desactualizadas.", "Reimprimir y anular la orden anterior."],
  ["La exactitud falló por carga nocturna.", "Porque había poca luz.", "Porque había lámparas dañadas.", "Porque no se reportaron.", "Porque no hay revisión.", "Iluminación deficiente.", "Revisar la iluminación cada semana."],
  ["Hubo error de carga por personal nuevo.", "Porque no conocía los productos.", "Porque no tuvo inducción.", "Porque entró en temporada.", "Porque no hay plan.", "Personal nuevo sin inducción.", "Dar inducción de productos."]
]);

window.DATOS.agregar("5XQ|Descarga de Camiones", [
  ["La descarga de la patana fue lenta.", "Porque los huacales se enganchaban en los perfiles.", "Porque los perfiles están dañados.", "Porque no se reportó.", "Porque no hay registro.", "Perfiles de patana dañados.", "Reportar las patanas con perfiles dañados."],
  ["Se rompieron huacales al descargar.", "Porque la rampa divisora estaba en mal estado.", "Porque no se reparó.", "Porque no se reportó.", "Porque no hay revisión.", "Rampa divisora sin revisión.", "Revisar la rampa divisora cada semana."],
  ["La descarga se demoró por revisión de calidad.", "Porque se revisó el nivel de líquido.", "Porque hubo reportes.", "Porque no hay muestreo rápido.", "Porque no se definió.", "Revisión de calidad sin procedimiento.", "Definir un muestreo rápido."],
  ["La descarga tomó más tiempo por paletas enganchadas.", "Porque estaban muy juntas.", "Porque se cargaron sin separación.", "Porque no hay estándar.", "Porque no se acordó con planta.", "Paletas sin separación desde planta.", "Acordar con planta una separación mínima."],
  ["La descarga se atrasó por falta de personal.", "Porque estaban en la carga.", "Porque la carga estaba atrasada.", "Porque hubo ausencias.", "Porque no hay reserva.", "Ausencias sin reemplazo.", "Tener personal de reserva."],
  ["La descarga se demoró por espacio.", "Porque el almacén estaba lleno.", "Porque había devoluciones.", "Porque no se procesaron.", "Porque no hay personal.", "Devoluciones sin procesar.", "Procesar las devoluciones cada día."],
  ["La descarga se detuvo por lluvia.", "Porque no hay techo.", "Porque no se priorizó el techado.", "Porque estaba ocupado.", "Porque no hay plan.", "Falta de plan para lluvia.", "Priorizar el andén techado para descargar."],
  ["La descarga fue lenta por paletas mixtas.", "Porque había que separar productos.", "Porque venían mezcladas.", "Porque planta las arma así.", "Porque no hay acuerdo.", "Paletas mixtas.", "Acordar paletas de un solo producto."],
  ["La descarga se atrasó por documentos.", "Porque faltaba el documento de tránsito.", "Porque se quedó en planta.", "Porque no se verifica.", "Porque no hay control.", "Documentos no verificados en planta.", "Pedir verificación de documentos en planta."],
  ["La descarga se interrumpió por el montacargas.", "Porque se quedó sin gas.", "Porque no se cambió.", "Porque no había tanques.", "Porque se pidió tarde.", "Gas sin control de pedido.", "Controlar los tanques de gas."]
]);

window.DATOS.agregar("5XQ|TMA (T2)", [
  ["Los camiones esperaron por cargas de mayoristas.", "Porque tomaban más tiempo.", "Porque eran grandes.", "Porque no se prepararon antes.", "Porque se confirmaron tarde.", "Pedidos grandes confirmados tarde.", "Confirmar los pedidos grandes el día anterior."],
  ["El TMA (T2) aumentó por anulación de órdenes.", "Porque se rehizo la carga.", "Porque había una orden duplicada.", "Porque se detectó tarde.", "Porque no hay revisión.", "Duplicados detectados tarde.", "Revisar duplicados antes de liberar."],
  ["Los camiones esperaron por refrescos.", "Porque no habían llegado.", "Porque planta despachó tarde.", "Porque no se coordinó.", "Porque no hay aviso.", "Llegadas de planta sin coordinar.", "Coordinar llegadas antes de la carga."],
  ["El TMA (T2) subió por revisión de huacales.", "Porque se revisaron uno por uno.", "Porque hubo reclamos.", "Porque no hay muestreo.", "Porque no se definió.", "Revisión sin método de muestreo.", "Definir un muestreo de huacales."],
  ["El TMA (T2) aumentó en temporada.", "Porque hubo más rutas.", "Porque subió la venta.", "Porque no se agregaron andenes.", "Porque no se planificó.", "Andenes insuficientes en temporada.", "Planificar el uso de andenes en temporada."],
  ["Los camiones esperaron la liberación de cobros.", "Porque faltaba validar pagos.", "Porque la validación es manual.", "Porque hay una sola persona.", "Porque no hay suplente.", "Validación de pagos sin suplente.", "Capacitar a un suplente."],
  ["El TMA (T2) subió por lluvia.", "Porque se cargaba más lento.", "Porque había que proteger el producto.", "Porque no hay techo.", "Porque no se instaló.", "Andenes sin techo.", "Priorizar andenes techados."],
  ["Los camiones esperaron porque el patio estaba lleno.", "Porque había camiones en reparación.", "Porque no hay área de espera.", "Porque no se definió.", "Porque el patio es pequeño.", "Patio ocupado por camiones fuera de servicio.", "Definir un área para camiones fuera de servicio."],
  ["El TMA (T2) aumentó por falta de verificador.", "Porque estaba en la descarga.", "Porque coincidió.", "Porque no hay suplente.", "Porque no se capacitó.", "Verificador sin suplente.", "Capacitar un verificador suplente."],
  ["La atención fue lenta por cambio de turno.", "Porque no había quien atendiera.", "Porque no hay traslape.", "Porque no se definió.", "Porque no se planificó.", "Cambio de turno sin traslape.", "Definir traslape en el cambio de turno."]
]);

window.DATOS.agregar("5XQ|Ausentismo", [
  ["Hubo ausencias por transporte en zona rural.", "Porque el colaborador vive lejos.", "Porque no hay transporte temprano.", "Porque el turno empieza muy temprano.", "Porque no se ha evaluado.", "Horario que no coincide con el transporte rural.", "Evaluar opciones de transporte para el personal que vive lejos."],
  ["El ausentismo aumentó en temporada de lluvia.", "Porque las vías se dañan.", "Porque no se puede llegar.", "Porque no hay alternativa.", "Porque no hay plan.", "Falta de plan de transporte en temporada de lluvia.", "Coordinar transporte de apoyo en días de lluvia fuerte."],
  ["Hubo ausencias después de feriados locales.", "Porque el personal participó en fiestas.", "Porque no se planificó.", "Porque no se consideró.", "Porque no hay calendario local.", "Festividades locales no consideradas.", "Incluir las festividades locales en la planificación del personal."],
  ["El ausentismo afectó la carga del turno.", "Porque faltaron auxiliares.", "Porque no avisaron.", "Porque no conocen el protocolo.", "Porque no se comunicó.", "Protocolo de aviso desconocido.", "Comunicar el protocolo de aviso."],
  ["Hubo ausencias por lesiones en la descarga.", "Porque se lastimaron cargando huacales.", "Porque no usan faja.", "Porque no se entregó.", "Porque no hay inventario.", "Equipo de protección sin entregar.", "Entregar y controlar el equipo de protección."],
  ["El ausentismo subió en temporada alta.", "Porque el personal estaba cansado.", "Porque trabajó horas extras.", "Porque no se reforzó.", "Porque no se planificó.", "Sobrecarga en temporada alta.", "Planificar refuerzo de personal."],
  ["Hubo ausencias por citas médicas.", "Porque coinciden con el turno.", "Porque no avisan.", "Porque el proceso no es claro.", "Porque no se explicó.", "Citas médicas sin aviso por desconocimiento del proceso de permisos.", "Explicar el proceso de permisos."],
  ["El ausentismo fue alto en un grupo.", "Porque hay conflictos.", "Porque no se atienden.", "Porque el supervisor no los conoce.", "Porque no hay conversación.", "Conflictos repetidos en un grupo sin intervención del supervisor.", "Conversar con el grupo y atender los conflictos."],
  ["Hubo ausencias por diligencias.", "Porque los bancos cierran temprano.", "Porque coincide con el turno.", "Porque no hay permisos cortos.", "Porque no se definieron.", "Falta de permisos cortos programados.", "Permitir permisos cortos programados."],
  ["El ausentismo aumentó por enfermedad.", "Porque hubo un brote.", "Porque no hubo prevención.", "Porque no hay plan.", "Porque no se coordinó.", "Falta de prevención de salud.", "Coordinar charlas de prevención."]
]);

window.DATOS.agregar("5XQ|DASHCAM", [
  ["La cámara registró conducción rápida en camino rural.", "Porque el chofer quería recuperar tiempo.", "Porque la ruta estaba atrasada.", "Porque hubo repasos.", "Porque los clientes no tenían dinero.", "Atrasos por repasos que presionan la conducción.", "Reducir los repasos confirmando el pago antes."],
  ["La cámara no grabó en una ruta lejana.", "Porque se desconectó por la vibración.", "Porque el camino es malo.", "Porque el soporte está flojo.", "Porque no se revisa.", "Soporte de cámara flojo.", "Revisar el soporte de la cámara en el pre-uso."],
  ["Se registró uso del celular manejando.", "Porque el chofer llamó al cliente.", "Porque quería confirmar la entrega.", "Porque no se confirmó antes.", "Porque no hay confirmación previa.", "Confirmaciones de entrega hechas en marcha.", "Confirmar las entregas antes de salir o con el camión detenido."],
  ["La cámara registró cansancio del chofer.", "Porque la jornada fue larga.", "Porque la ruta es lejana.", "Porque no hay pausas.", "Porque no se planifican.", "Rutas largas sin pausas.", "Planificar pausas en rutas largas."],
  ["La cámara registró frenada brusca.", "Porque apareció un animal en la vía.", "Porque es zona rural.", "Porque se iba rápido.", "Porque no se ajusta la velocidad.", "Velocidad no ajustada en zonas rurales.", "Indicar velocidad reducida en zonas rurales."],
  ["La cámara registró adelantamiento peligroso.", "Porque el chofer quería pasar un camión lento.", "Porque la vía es estrecha.", "Porque tenía prisa.", "Porque la ruta estaba atrasada.", "Prisa que lleva a maniobras peligrosas.", "Reforzar que el tiempo no justifica maniobras peligrosas."],
  ["La cámara estaba sucia.", "Porque había polvo del camino.", "Porque no se limpia.", "Porque no está en el pre-uso.", "Porque no se agregó.", "Limpieza de la cámara fuera del pre-uso.", "Agregar la limpieza de la cámara al pre-uso."],
  ["Los videos no se descargaron.", "Porque la memoria se llenó.", "Porque no se revisa.", "Porque no hay responsable.", "Porque no se asignó.", "Videos sin responsable de descarga.", "Asignar un responsable de los videos."],
  ["La cámara registró conducción sin cinturón.", "Porque el chofer se lo quitó entre entregas.", "Porque son paradas cortas.", "Porque es incómodo.", "Porque no se ha explicado el riesgo.", "Uso del cinturón omitido en paradas cortas.", "Explicar el riesgo y exigir el cinturón siempre."],
  ["Los eventos de la cámara no tuvieron seguimiento.", "Porque no se revisan.", "Porque nadie está asignado.", "Porque el sistema es nuevo.", "Porque no hubo capacitación.", "Eventos de cámara sin seguimiento.", "Capacitar a un responsable para revisar los eventos."]
]);

window.DATOS.agregar("5XQ|Calidad Producto", [
  ["Se encontraron unidades con bajo líquido al entregar.", "Porque venían así de planta.", "Porque no se revisaron al recibir.", "Porque se cuentan cajas.", "Porque no hay muestreo.", "Bajo líquido no detectado en la recepción.", "Hacer muestreo de nivel en la recepción."],
  ["Hubo botellas explotadas en la entrega a mayoristas.", "Porque el producto se calentó.", "Porque la ruta es larga.", "Porque el camión estuvo al sol.", "Porque no hay protección.", "Producto expuesto al calor en rutas largas.", "Proteger la carga en rutas largas."],
  ["Se detectaron huacales con oportunidades de calidad.", "Porque había botellas sucias.", "Porque los envases no se lavaron bien.", "Porque la lavadora falló.", "Porque no se revisa.", "Lavado de envases sin control.", "Revisar el resultado del lavado cada turno."],
  ["El cliente reportó faltantes y botellas rotas.", "Porque el huacal llegó dañado.", "Porque se golpeó en el viaje.", "Porque la carga no estaba asegurada.", "Porque no hay equipo de sujeción.", "Carga sin asegurar.", "Asegurar la carga con equipo de sujeción."],
  ["Hubo quejas de etiquetas dañadas.", "Porque el producto se mojó.", "Porque llovió en la descarga.", "Porque no se cubrió.", "Porque no hay lona.", "Producto expuesto a la lluvia.", "Llevar lona para cubrir el producto."],
  ["Se encontraron tapas dañadas.", "Porque se golpearon en la estiba.", "Porque se apiló mal.", "Porque no se respetó el estándar.", "Porque no se conoce.", "Estiba incorrecta.", "Publicar el estándar de estiba."],
  ["El cliente rechazó producto por fecha corta.", "Porque vencía pronto.", "Porque se despachó un lote viejo.", "Porque no se cumple el FEFO.", "Porque no se acomoda por fecha.", "Despacho sin FEFO.", "Acomodar y despachar por fecha de vencimiento."],
  ["Hubo hallazgos de calidad en la inspección en ruta.", "Porque se encontraron botellas con defectos.", "Porque no se detectaron antes.", "Porque no hay revisión.", "Porque no se definió.", "Falta de revisión de calidad antes de salir.", "Hacer una revisión visual de calidad en la carga."],
  ["Se encontraron latas abolladas.", "Porque se cayeron cajas.", "Porque se manipularon con prisa.", "Porque había atraso.", "Porque la carga empezó tarde.", "Manipulación con prisa.", "Organizar la carga para evitar la prisa."],
  ["El cliente reportó producto caliente.", "Porque la entrega fue al mediodía.", "Porque la ruta se atrasó.", "Porque hubo repasos.", "Porque no se confirmó el pago.", "Atrasos por repasos que exponen el producto al calor.", "Confirmar el pago antes para evitar repasos."]
]);

window.DATOS.agregar("5XQ|Conteo inventario", [
  ["El conteo no detectó huecos en los huacales.", "Porque se contó por huacal.", "Porque no se revisaron.", "Porque no hay muestreo.", "Porque no se definió.", "Conteo sin muestreo de huecos.", "Agregar muestreo al conteo."],
  ["El conteo se interrumpió por la descarga de patana.", "Porque el personal se movió.", "Porque la patana llegó.", "Porque no se coordinó.", "Porque no hay calendario.", "Conteo sin coordinar con las descargas.", "Coordinar el conteo con las descargas."],
  ["Hubo errores en el conteo de refrescos.", "Porque la presentación cambió.", "Porque no se avisó.", "Porque no hay canal.", "Porque no se definió.", "Cambios de presentación sin aviso.", "Avisar los cambios de presentación."],
  ["El conteo no incluyó el producto apartado.", "Porque estaba en otra área.", "Porque no tiene ubicación.", "Porque no se creó.", "Porque no se pidió.", "Producto apartado sin ubicación.", "Crear la ubicación de apartado."],
  ["El conteo se atrasó por temporada.", "Porque hubo mucho volumen.", "Porque se suspendió.", "Porque no hay prioridad.", "Porque no se mide.", "Conteo sin seguimiento en temporada.", "Mantener el conteo cíclico en temporada."],
  ["El conteo tuvo diferencias por devoluciones.", "Porque había devoluciones sin procesar.", "Porque llegaron tarde.", "Porque no hay quien las reciba.", "Porque no se definió.", "Devoluciones tardías sin responsable.", "Definir quién recibe las devoluciones tardías."],
  ["El conteo se hizo con el producto en movimiento.", "Porque no se bloqueó la zona.", "Porque no se puede parar.", "Porque se cuenta todo.", "Porque no hay conteo por zonas.", "Conteo sin bloqueo.", "Contar por zonas bloqueando solo la que se cuenta."],
  ["El conteo de envases no cuadró.", "Porque había envases en camiones.", "Porque no se descargaron.", "Porque las rutas llegaron tarde.", "Porque no hay corte.", "Envases en camiones sin incluir en el conteo.", "Incluir los envases en camiones en el conteo."],
  ["El conteo se repitió.", "Porque se perdió la hoja.", "Porque es en papel.", "Porque no hay digital.", "Porque no se implementó.", "Conteo en papel.", "Registrar el conteo en digital."],
  ["El conteo tuvo errores por personal nuevo.", "Porque no conocía las presentaciones.", "Porque no tuvo inducción.", "Porque no hay guía.", "Porque no se preparó.", "Personal nuevo sin guía de conteo.", "Preparar una guía visual de conteo."]
]);
