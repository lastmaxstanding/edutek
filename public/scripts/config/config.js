requirejs.config({
	// baseUrl: '/../scripts',
	paths: {

		jquery: [
			'https://code.jquery.com/jquery-2.2.3.min',
			'../../public/scripts/jquery/jquery-2.2.3.min'
		],

		bootstrap: [
			'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min',
			'../../public/scripts/bootstrap/bootstrap'
		],

		// orm: '../../../data/orm/orm',

		login: '../../scripts/auth_scripts/login',
		logout: '../../scripts/auth_scripts/logout',
		register: '../../scripts/auth_scripts/register',

		modifygrades: '../../scripts/grades_scripts/modifygrades',
		viewgrades: '../../scripts/grades_scripts/viewgrades',

		handleButtons: '../../scripts/home/handlebuttons',
		homepage: '../../scripts/home/homepage',

		asc_seats: '../../scripts/seating_scripts/asc_seats',
		clearSeats: '../../scripts/seating_scripts/clearseats',
		desc_seats: '../../scripts/seating_scripts/desc_seats',
		randomGroups: '../../scripts/seating_scripts/randomgroups',
		randomPart: '../../scripts/seating_scripts/randomparticipation',
		randomSeats: '../../scripts/seating_scripts/randomseats'
	}
});