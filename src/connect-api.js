import axios from "axios";

const URL_API = process.env.REACT_APP_BASE_URL;
const CALENDLY_ACCESS_TOKEN = process.env.REACT_APP_TOKEN_CALENDLY;


export function sendContact( values ) {

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${URL_API}/contacts`,
        method: "POST",
        data: values,
      });
      resolve(response);
    } catch (e) {
      reject(e.response || e);
    }
  });
}
export function getTestimonials(){

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `${URL_API}/testimonials`,
        method: "GET",
      });
      resolve(response);
    } catch (e) {
      reject(e.response || e);
    }
  });
}
export function getUriUser(){
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: `https://api.calendly.com/users/me`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${ CALENDLY_ACCESS_TOKEN }`
       }
      });
      resolve(response);
    } catch (e) {
      reject(e.response || e);
    }
  });
}
export function webhooksSuscription(){

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://api.calendly.com/webhook_subscriptions',
        headers: {
           'Authorization': `Bearer ${CALENDLY_ACCESS_TOKEN}`
        },
        data: {
           url: 'https://tattos-julia-api.onrender.com/api/listening', // Reemplaza con la URL de tu servidor
           events: ['invitee.created',"invitee.canceled"], // Puedes especificar múltiples eventos
           organization: 'https://api.calendly.com/organizations/2ef45c94-d3fc-4beb-a11e-7361a7bb8e98', // Reemplaza con el URI de tu organización
           scope: "organization" // O 'organization' dependiendo de tu necesidad
        }
       });
      resolve(response);
    } catch (e) {
      reject(e.response || e);
    }
  });
}

export function getEventDate(url){

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${ CALENDLY_ACCESS_TOKEN }`
       }
      });
      resolve(response);
    } catch (e) {
      reject(e.response || e);
    }
  });
}
export function getAppointment(url){

  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        url: url,
        method: "GET",
        headers: {
          Authorization: `Bearer ${ CALENDLY_ACCESS_TOKEN }`
       }
      });
      resolve(response);
    } catch (e) {
      reject(e.response || e);
    }
  });
}