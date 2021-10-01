export const filterOptions = {
	destinos: [
		{
			id: 1,
			pais: 'Peru',
			ciudad: 'Lima',
			region: 'Lima',
			destino: 'Miraflores',
			nombreDestino: 'Miraflores, Lima - Peru',
		},
		{
			id: 1,
			pais: 'Peru',
			ciudad: 'Lima',
			region: 'Lima',
			destino: 'Barranco',
			nombreDestino: 'Barranco, Lima - Peru',
		},
	],
	fechas: {
		fechaInicio: '',
		fechaFin: '',
		duracion: 0,
	},
	personas: {
		adultos: 0,
		ninos: 0,
		bebes: 0,
	},
	activities: [],
	tripProfiles: [],
};

export const adminData = [
	{
		id: '01',
		codigo: 'AAA-PPP',
		titulo: 'Excursion en el Niagara',
		descripcion:
			'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
		duracion: {
			dias: 5,
			noches: 6,
		},
		fechas: {
			fechaInicio: '08/11/2020',
			fechaFin: '04/01/2021',
			duracion: 0,
		},
		idioma: ['espanol', 'ingles'],
		personas: {
			adultos: 0,
			ninos: 0,
			bebes: 0,
		},
		activities: [],
		tripProfiles: [],
	},
];
