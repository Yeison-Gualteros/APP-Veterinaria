
import { Text, View, StyleSheet, Pressable, Modal,FlatList } from 'react-native';
import React, {useState} from 'react';
// You can import supported modules from npm
import { Card } from 'react-native-paper';


// or any files within the Snack
import Formulario from './components/Formulario';


const App=()=>{
  const [modalvisible, setmodalvisible]= useState(false)
  const [pacientes,setPaciente]=useState([])
  console.log(modalvisible)
  
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Adminitrador de Ctitas <Text style={styles.titulobold}>Veterinaria</Text>
      </Text>
      <Pressable onPress={()=>setmodalvisible(!modalvisible)} style={styles.btnnuevacita}>
        <Text style={styles.btntextnuevacita}>Nueva Cita</Text>
      </Pressable>
      {pacientes.length===0?
        <Text style={styles.noPaciente}>No hay pacientes aun</Text>:
        <FlatList
          data={pacientes}
          keyExtractor={(item)=>item.id}
          renderItem={({item})=>{
            return(
              <Paciente
                item={item}
              />
            )
          }}  
          />
      }
      <Formulario modalvisible={modalvisible}
      setmodalvisible={setmodalvisible}
      pacientes={pacientes}
      setPaciente={setPaciente}
      />
    </View>
  )
}






const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f6',
    flex: 1,
    padding: 8,
  },
  titulo:{
    margin: 24,
    fontSize:30,
    textTransform:'uppercase',
    fontWeight:600,
    color: '#374151',
    textAlign: 'center',
  },
  titulobold:{
    fontWeight: 900,
    color:'#00A36C'
  },
  btnnuevacita:{
    backgroundColor:'#00A36C',
    padding: 15,
    marginTop:30,
    marginLeft: 20,
    marginRight:20,
    borderRadius:10,
  },
  btntextnuevacita:{
    textAlign:'center',
    color:'#fff',
    fontSize:20,
    fontWeight:900,
    textTransform: 'uppercase'
  },
  noPaciente:{
    marginTop: 40,
    textAlign: 'center',
    fontSize:24,
    fontWeight:'600',
  },
});

export default App;