export const getFilters = (state) => {
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
	const duracion = Math.round((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));

	const params = {
		destinos: destinosIds,
		duracion,
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
	};

	return params;
};
