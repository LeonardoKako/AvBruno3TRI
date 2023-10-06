import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AgendamentoScreen = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [tipoConsulta, setTipoConsulta] = useState('');

  const navigation = useNavigation();

  const handleAgendar = () => {
    const dadosConsulta = {
      nome,
      cpf,
      dataNascimento,
      tipoConsulta,
    };

    console.log('Dados do Agendamento:', dadosConsulta); // Exibe os dados no console

    navigation.navigate('Consulta', { dadosConsulta });
  }

  return (
    <View style={styles.container}>
       <View style={styles.tituloContainer}> 
        <Text style={styles.titulo}>Faça sua consulta</Text></View>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>CPF:</Text>
      <TextInput
        style={styles.input}
        value={cpf}
        onChangeText={setCPF}
      />

      <Text style={styles.label}>Data de Nascimento:</Text>
      <TextInput
        style={styles.input}
        value={dataNascimento}
        onChangeText={setDataNascimento}
      />

      <Text style={styles.label}>Tipo de Consulta:</Text>
      <TextInput
        style={styles.input}
        value={tipoConsulta}
        onChangeText={setTipoConsulta}
      />

      <Button title="Agendar Consulta" onPress={handleAgendar} style={styles.botao}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  titulo: {
    fontSize: 40,
  },
  tituloContainer: {
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    border: 3,
    borderColor: 'black',
    borderRadius: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
    maxWidth: 400,
  },
  botao: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'green',
  },
});

export default AgendamentoScreen;
