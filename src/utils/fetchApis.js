import React from 'react'
import {Alert} from 'react-native'

export async function responsePeople() {
  try {
    const url = "https://morning-hamlet-18619.herokuapp.com/api/v1/names";

    const data = await fetch(url);
    const response = await data.json();
  
    return response;
  } catch (error) {
    throw new Error(error)
    
  }
 
}

export async function sendForm(params, navigation) {
  try {
    const url = 'https://morning-hamlet-18619.herokuapp.com/api/v1/form'
    const send = await fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    })
    const res = await send.json()
    console.log(res);
    if(res.status === 'error'){
      return Alert.alert('Erro inesteperado', 'Ocurrio un error al enviar sus datos, intentelo de nuevo',[{
        text: 'Intentar de nuevo',
        onPress: () => navigation.navigate('FormRegisterName')
      },{
        text: 'Regresar a inicio',
        onPress: () => navigation.navigate('Home')
      }])
    }
    if(res.success === true){
      return navigation.navigate('Success')
    }
    

  
  } catch (error) {
    throw new Error(error)
  }
  
}