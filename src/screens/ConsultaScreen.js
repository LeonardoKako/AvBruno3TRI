import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

const ConsultaScreen = () => {
  const route = useRoute();
  const { dadosConsulta } = route.params;

  const [nome, setNome] = useState(dadosConsulta.nome);
  const [cpf, setCPF] = useState(dadosConsulta.cpf);
  const [dataNascimento, setDataNascimento] = useState(dadosConsulta.dataNascimento);
  const [tipoConsulta, setTipoConsulta] = useState(dadosConsulta.tipoConsulta);
  const [valorSugerido, setValorSugerido] = useState(0);

  const handleEditar = () => {

    console.log('Nome:', nome);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('Tipo de Consulta:', tipoConsulta);
    console.log('Valor Sugerido: 100');
  }

  return (
    <View style={styles.container}>
        <View style={styles.tituloContainer}> 
        <Text style={styles.titulo}>Seus dados</Text></View>
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

      <Text style={styles.label}>Valor Sugerido: R$100</Text>

      <Button title="Salvar Dados" onPress={handleEditar} />
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

export default ConsultaScreen;
