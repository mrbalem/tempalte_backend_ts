/** @format */

import status from 'http-status';
import usersModel from '@models/users';
import has from 'has-keys';

export default {
	async getCalzadosAll(req, res) {
		let prueba = usersModel.getCalzado();
		let observer = prueba.onSnapshot(querySnapshot => {
			querySnapshot.docChanges().forEach(change => {
				if (change.type === 'added') {
					console.log('added: ', change.doc.data());
					res.write(JSON.stringify(change.doc.data()));
				}
				if (change.type === 'modified') {
					console.log('Modified city: ', change.doc.data());
					res.write(JSON.stringify(change.doc.data()));
				}
				if (change.type === 'removed') {
					console.log('Removed city: ', change.doc.data());
					res.write(JSON.stringify(change.doc.data()));
				}
				// if (change.type === 'modified') {
				// 	console.log('Modified city: ', change.doc.data());
				// }
				// if (change.type === 'removed') {
				// 	console.log('Removed city: ', change.doc.data());
				// }
			});

			// done();
			// console.log(ele.size);
			// res.json({ status: false, data: ele.size });
		});

		// if (data.empty) {
		// 	res.json({ status: false, message: 'Calzados not found' });
		// } else {
		// 	let calzados = [];
		// 	data.forEach(ele => {
		// 		calzados.push(ele.data());
		// 	});
		// 	res.json({
		// 		status: true,
		// 		message: 'Returning calzado',
		// 		calzados: calzados
		// 	});
		// }
	},

	async getUserById(req, res) {
		if (!has(req.params, 'id'))
			throw { code: status.BAD_REQUEST, message: 'You must specify the id' };

		let { id } = req.params;

		let data = null;

		if (!data) throw { code: status.BAD_REQUEST, message: 'User not found' };

		res.json({ status: true, message: 'Returning user', data });
	}
};
