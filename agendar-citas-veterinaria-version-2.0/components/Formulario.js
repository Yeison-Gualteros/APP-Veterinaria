import React, { useState } from 'react';
import {Modal,Text,View,StyleSheet,TextInput,ScrollView,Pressable,Alert} from 'react-native';

import DateTimePicker from 'react-native-ui-datepicker';

const Formulario = ({ modalvisible, setmodalvisible, pacientes, setPaciente}) => {
  const [paciente, setpaciente] = useState('');
  const [propietario, setpropietario] = useState('');
  const [email, setemail] = useState('');
  const [telefono, settelefono] = useState('');
  const [fecha, setfecha] = useState('');
  const [sintomas, setsintomas] = useState('');
  console.log(fecha)


  const handelCita=()=>{
    if ([paciente,propietario,email,fecha,sintomas].includes('')){Alert.alert(
      'Error',
      'Todos los campos son obligatorios',
    )
    return
    }
    const nuevoPaciente ={
      id: Date.now(),
      paciente,
      propietario,
      email,
      telefono,
      fecha,
      sintomas
    }
    setPaciente([...paciente, nuevoPaciente])
    setmodalvisible(!modalvisible)

    setPaciente('')
    setpropietario('')
    setemail('')
    settelefono('')
    setfecha(new Date())
    setsintomas('')
  }
  
  
  /*const [errorpaciente, setErrorPaciente] = useState('');
  const [errorpropietario, setErrorPropietario] = useState('');
  const [erroremail, setErrorEmail] = useState('');
  const [errortelefono, setErrorTelefono] = useState('');
  const [errorfecha, setErrorFecha] = useState('');
  const [errorsintomas, setErrorSintomas] = useState('');

  const onChange = (e, type) => {
    setFormData({ ...FormData, [type]: e.nativeEvent.text });
    setErrorPaciente('');
    setErrorPropietario('');
    setErrorEmail('');
    setErrorTelefono('');
    setErrorFecha('');
    setErrorSintomas('');
  };

  const validateData = () => {
    setErrorPaciente('');
    setErrorPropietario('');
    setErrorEmail('');
    setErrorTelefono('');
    setErrorFecha('');
    setErrorSintomas('');
    let isValid = true;

    if (!paciente.trim()) {
      setErrorPaciente('Nombre del paciente es requerido');
      isValid = false;
    }

    if (!propietario.trim()) {
      setErrorPropietario('Nombre del propietario es requerido');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setErrorEmail('Ingrese un correo electrónico válido');
      isValid = false;
    }

    

    if (!fecha.trim()) {
      setErrorFecha('Seleccione una fecha');
      isValid = false;
    }

    if (!sintomas.trim()) {
      setErrorSintomas('Ingrese los síntomas del paciente');
      isValid = false;
    }

    return isValid;
  };

  const registerUser = () => {
    if (!validateData()) {
      return;
    }
    console.log('Datos válidos. Puede continuar con el registro.');
  };*/
  return(
    <Modal animationType='slide' visible={modalvisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {''}
            <Text style={styles.titulobold}>Cita</Text>
          </Text>

          <Pressable
            style={styles.btncancelar}
            onLongPress={() => setmodalvisible(!modalvisible)}>
            <Text style={styles.btncancelartexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre paciente</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre del paciente'
              placeholderTextColor={'#666'}
              value={paciente}
              onChangeText={setpaciente}
            />
            {/*{errorpaciente ? (
              <Text style={styles.errorText}>{errorpaciente}</Text>
            ) : null}*/}
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre Propietario'
              placeholderTextColor={'#666'}
              value={propietario}
              onChangeText={setpropietario}
            />
            {/*{errorpropietario ? (
              <Text style={styles.errorText}>{errorpropietario}</Text>
            ) : null}*/}
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Email Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Email Propietario'
              placeholderTextColor={'#666'}
              keyboardType='email-address'
              value={email}
              onChangeText={setemail}
            />
            {/*{erroremail ? (
              <Text style={styles.errorText}>{erroremail}</Text>
            ) : null}*/}
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Telefono Propietario</Text>
            <TextInput
              style={styles.input}
              placeholder='Telefono Propietario'
              placeholderTextColor={'#666'}
              keyboardType='number-pad'
              value={telefono}
              onChangeText={settelefono}
              maxLength={10}
            />
            {/*{errortelefono ? (
              <Text style={styles.errorText}>{errortelefono}</Text>
            ) : null}*/}
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Fecha Alta</Text>
            <View style={styles.fechacontenedor}>
              <DateTimePicker 
              date={fecha} 
              locale='es' 
              mode='date' 
              onValueChange={(date)=>setfecha(date)}/>
            </View>
            {/*{errorfecha ? (
              <Text style={styles.errorText}>{errorfecha}</Text>
            ) : null}*/}
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Sintomas</Text>
            <TextInput
              style={[styles.input, styles.sintomasinput]}
              placeholder='sintomas'
              placeholderTextColor={'#666'}
              value={sintomas}
              onChangeText={setsintomas}
              multiline={true}
              //numberOfLines={4}
              rows={4}
            />
            
            {/*{errorsintomas ? (
              <Text style={styles.errorText}>{errorsintomas}</Text>
            ) : null}*/}
          </View>

          <Pressable
            style={styles.btnnuevacita}
            onPress={handelCita}>
            <Text style={styles.btnnuevacitaText}>Agregar Paciente</Text>
          </Pressable>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles=StyleSheet.create({
  contenido:{
    backgroundColor: '#00A36C',
    flex:1,
  },
  titulo: {
    fontSize: 30,
    fontWeight:'600',
    textAlign:'center',
    marginTop:30,
    color: '#fff',
  },
  titulobold:{
    fontWeight:'900',
  },
  btncancelar:{
    marginVertical:30,
    backgroundColor:'#014C33',
    marginHorizontal:30,
    padding:15,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#FFF',
  },
  btncancelartexto:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'900',
    fontSize:16,
    textTransform:'uppercase',
  },
  campo:{
    marginTop:10,
    marginHorizontal:30,
  },
  label:{
    color:'#FFF',
    marginBottom:10,
    marginTop:15,
    fontSize:20,
    fontWeight:'600',
  },
  input:{
    backgroundColor:'#FFF',
    padding:15,
    borderRadius:10,
  },
  sintomasinput:{
    height:100,
  },
  fechacontenedor:{
    backgroundColor: '#FFF',
    borderRadius:10,
  },
  btnnuevacita:{
    marginVertical:50,
    backgroundColor:'#00F2A0',
    paddingVertical:10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnnuevacitaText:{
    textAlign:'center',
    color:'#014C33',
    textTransform:'uppercase',
    fontWeight:'900',
    fontSize:16,
  },
  errorText:{
    paddingVertical:5,
    paddingHorizontal: 5,
    borderRadius:5,
    margin:3,
    backgroundColor:'#00B477',
    color: 'red',
    fontSize:16,
    fontWeight:'700',
  }
})

export default Formulario