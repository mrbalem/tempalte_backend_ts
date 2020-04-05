/** @format */

const {
	TYPE,
	PROJECT_ID,
	PRIVATE_KEY_ID,
	PRIVATE_KEY,
	CLIENT_EMAIL,
	CLIENT_ID,
	AUTH_URI,
	TOKEN_URI,
	AUTH_PROVIDER,
	CLIENT_CERT
} = process.env;

import admin from 'firebase-admin';

const serviceAccount: any = {
	type: 'service_account',
	project_id: 'ecommers-nevado',
	private_key_id: 'd3a50f94874bf901327a5b2b874402a4bec0b5fe',
	private_key:
		'-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC9mzVWHuSItY7V\nEpESWciF07N35PlIq+cuJN8ZlBNiXFwmQuaB9eT0qegHT1/hcDzngBAJQOB/ZJjU\n1EZFfXdokH8vx5OPe2MBnd3cCDqpyCEivbuGhl5tp+esz4frPlQQGXiITFw3m/9Z\nwbszRz14morgOt/3BVn7VU5fJqJtwwBZnICowjQVkkon9IcNFk9OOZS1UOR3D0UA\nPSwvGvq2diCCxzgW2OvIMTFtwXlEZX6FNb/erhT+Q48qM9CxT5/0XJbopBKTl+ua\ntFecm0OK6JzWO8R7mvSiQUSs/eCknYQzc5ZEbSWPDwPFZuGMl5oQMGFe7916CO3m\nY60GBlxpAgMBAAECggEABvsRR0TPJ3Dey725oV40nae+EGyZ2Hj6w5ZIMAAFiC4s\nFt0I8VE5LyBXyngbyLgqB+BtRrfwpAQTQ+e2WB3e0Pbb9emAR2y0qBU0u0KCzWgw\nvx+S6Uimbp1bUF+aKpkyfV7AsyzzirkXuUlij+hgLSHsecW1I/o6lkAtaN+qZIXU\niWdFZfDiQ37cjmI6xrLY/CWIjFKsh4N1lOSPNvqs47l8gTUAp8TaCahQOtznPdDV\n9CLDw2XMH0JQc6aRVTRCXjWMWlypEkui83PKuhbzo4g6elj5ILf+qATxx8mERtdx\nK6pYFrw7oPZgFycChGorZ/zVEyPI4HIPaQSwFJ5YsQKBgQDr0NUURXleY7rfrqeX\nTJoUgyExD9lyOfi83DtutXx4XXOnMMyPiMiD72U6z14WX3mrouHEOBhtN/BaAmUx\nmcebStpOs/v/Y3kzTaJsuMahP3HYGPQ6fqk7IHdaCQ9m6dO/2wcOuvtMkl2OV4b4\nPmGJQ7uu8Rk3ox/lsGj3FFdxsQKBgQDN1dblF01SemfPImO+aTGVd6/7XiU/5ulZ\nx0oFWh6wWgEVZUnBZIoX7Y35fbxgtZEl6/JN8EoV2EntouDOP/wHNjrHbRXyK3gs\ne01/sOXquKcAhGqX9ZV/12zdIM2lEn6K5T2DuOOjaeTDtoOno6BawiplRcnO6iJG\nEhTab4XMOQKBgAlDBHttVxz78cUDSRXKLmsL02vn4XR5DmnshHEOs7rOgNJaOk6Q\n4r870dADgQCD83VoSlG4mkz/23LNkUfncE2LHRPmQcmAEKyRKgX3I+YFZeVE5aK+\ngssNtWJV5ML4ABcS9S4A7gnN3drPWT+6w33uqRpv4burrn8I9LZvmBehAoGABvG2\n7UWq+yRcCjXrzYm4/YTrL/zOHujIaJn7mlCfBm4S6UjggyDEM+h0yL0ANPcLLY9X\nPl/j7/a7D8RV9z9bXlbrBr1cZy4mQMHsLGmoaBHQuIi/G99SKtz2tEMeDPqhwEfZ\nmm8LZwD0kdG/gVFY4Jb6XS5Mj6mAfIKxp2jpx6kCgYBaizmciYCPj2jcWC48LvvE\nT8OTHdQzIJBZE0lUPgy+tBAXccJu7ZoQbNNhuS0LskQm5g9LgHxyXcbRjBx3JHI5\n0x91p+y9JhJtTMKS2dYvt/BgQdyslwoW0UQ/pSTdjIQYyQiRFrkDiiJNNLnmdE6n\noZ8jVBj5kTfXEKuj/FVrsA==\n-----END PRIVATE KEY-----\n',
	client_email:
		'firebase-adminsdk-7326f@ecommers-nevado.iam.gserviceaccount.com',
	client_id: '118120051004619957086',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7326f%40ecommers-nevado.iam.gserviceaccount.com'
};

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://ecommers-nevado.firebaseio.com'
});

// export services

export const { auth } = admin;
export const storage = admin.storage();
export const firestore = admin.firestore();
export const database = admin.database();
export const FieldValue = admin.firestore.FieldValue;
