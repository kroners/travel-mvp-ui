export const getFilters = (state) => {
	let params;
	const {
		destinos,
		fecha_inicio: fechaInicio,
		fecha_fin: fechaFin,
		precio_min: precioMin,
		precio_max: precioMax,
		adultos,
		ninos,
		bebes,
		servicios,
		tipo_servicio: tipoServicio,
		tipo_hospedaje: tipoHospedaje,
		tipo_habitacion: tipoHabitacion,
		alimentacion,
		actividades,
		perfil_viaje: perfilViaje,
		idioma,
	} = state;

	const destinosIds = destinos.map((destino) => destino.id).join(',');
};
