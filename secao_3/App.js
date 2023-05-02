// import React, { Component } from 'react';
// import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
// import Pessoa from './src/Pessoas';

// ScrollView e FlatList
// export default class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       feed: [
//         {id: '1', nome: 'Weslley',idade: 36, email: 'weslley@weslley.com'},
//         {id: '2', nome: 'Cinthia',idade: 29, email: 'cinthia@cinthia.com'},
//         {id: '3', nome: 'Maia',idade: 5, email: 'maia@maia.com'},
//         {id: '4', nome: 'Aloha',idade: 9, email: 'aloha@aloha.com'},
//         {id: '5', nome: 'Max',idade: 9, email: 'max@max.com'},
//         {id: '6', nome: 'Bob',idade: 6, email: 'bob@bob.com'},
//       ]
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <FlatList 
//           data={this.state.feed}
//           renderItem={ ({item}) => <Pessoa data={item} />  }
//           keyExtractor={(item) => item.id}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   }, 
//   areaPessoa: {
//     backgroundColor: '#222',
//     height: 300,
//     marginBottom: 15
//   },
//   textoPessoa: {
//     color: '#fff',
//     fontSize: 20
//   }
// });

// class Pessoa extends Component {
//   render () {
//     return (
//       <View style={styles.areaPessoa}>
//         <Text style={styles.textoPessoa}>Nome: { this.props.data.nome }</Text>
//         <Text style={styles.textoPessoa}>Idade: { this.props.data.idade }</Text>
//         <Text style={styles.textoPessoa}>Email: { this.props.data.email }</Text>
//       </View>
//     )
//   }
// }


// Separando Componentes
// export default class App extends Component {

// constructor(props) {
//   super(props)
//   this.state = {
//     feed: [
//       {id: '1', nome: 'Weslley',idade: 36, email: 'weslley@weslley.com'},
//       {id: '2', nome: 'Cinthia',idade: 29, email: 'cinthia@cinthia.com'},
//       {id: '3', nome: 'Maia',idade: 5, email: 'maia@maia.com'},
//       {id: '4', nome: 'Aloha',idade: 9, email: 'aloha@aloha.com'},
//       {id: '5', nome: 'Max',idade: 9, email: 'max@max.com'},
//       {id: '6', nome: 'Bob',idade: 6, email: 'bob@bob.com'},
//     ]
//   }
// }

// render() {
//   return (
//     <View style={styles.container}>
//       <FlatList 
//         data={this.state.feed}
//         renderItem={ ({item}) => <Pessoa data={item} />  }
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// }
// }

// const styles = StyleSheet.create({
// container: {
//   flex: 1,
// }, 
// });


// Picker
// import React, { Component } from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import { Picker } from '@react-native-picker/picker'

// export default class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       pizza: 0,
//       pizzas: [
//         {key: 1, nome: 'Strogonoff', valor: 35.90},
//         {key: 2, nome: 'Calabresa', valor: 59.00},
//         {key: 3, nome: '4 Queijos', valor: 37},
//         {key: 4, nome: 'Corn & Bacon', valor: 42.90},
//         {key: 5, nome: 'BBQ Bonanza', valor: 46.90},
//       ]

//     }
//   }

//   render() {
//     let pizzasItem = this.state.pizzas.map((value, key) => {
//       return <Picker.Item key={key} value={key} label={value.nome} />
//     })
//     return (
//       <View style={styles.container}>
//         <Text style={styles.logo}>Menu Pizza</Text>

//         <Picker
//           selectedValue={this.state.pizza}
//           onValueChange={ (itemValue, itemIndex) => this.setState({pizza: itemValue})}
//         >
//           {pizzasItem}
//         </Picker>


//         <Text style={styles.pizzas}>Você escolheu: {this.state.pizzas[this.state.pizza].nome}</Text>
//         <Text style={styles.pizzas}>R$ {this.state.pizzas[this.state.pizza].valor.toFixed(2)}</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 60,
//   },
//   logo: {
//     textAlign: 'center',
//     fontSize: 28,
//     fontWeight: 'bold'
//   },
//   pizzas: {
//     marginTop: 15, 
//     fontSize: 25,
//     textAlign: 'center'
//   }
// })


// Slider
// import React, { Component } from 'react'
// import { View, StyleSheet, Text } from 'react-native'
// import Slider from '@react-native-community/slider'

// export default class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       valor: 0
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Slider 
//           minimumValue={0}
//           maximumValue={100}
//           onValueChange={ (valorSelecionado) => this.setState({valor: valorSelecionado})}
//           value={this.state.valor}
//           minimumTrackTintColor='#00FF00'
//           maximumTrackTintColor='red'
//         />

//         <Text style={{textAlign: "center", fontSize: 30}}>Você tem {this.state.valor.toFixed(0)} Kg</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 60
//   }
// })


// Switch
// import React, { Component } from 'react'
// import { View, StyleSheet, Text, Switch } from 'react-native'

// export default class App extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       status: false
//     }
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Switch
//           value={this.state.status}
//           onValueChange={(valorSwitch) => this.setState({status: valorSwitch})}
//           thumbColor='red'
//         />
//         <Text>{this.state.status ? 'Ativo' : "Desativado" }</Text>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: 60,
//     alignItems: 'center'
//   }
// })


// Desafio
import React, { Component } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { Picker } from '@react-native-picker/picker'

export default class App extends Component{

constructor(props){
  super(props);
  this.state = {
    nome: '',
    idade: '',
    sexo: 0,
    sexos: [
      {sexoNome: 'Masculino', valor: 1},
      {sexoNome: 'Feminino', valor: 2},
    ],
    limite: 250,
    estudante: false,
  };

  this.enviarDados = this.enviarDados.bind(this);

}

//Metodo que é chamado quando você clica no botao Abrir Conta
enviarDados(){

  if(this.state.nome === '' || this.state.idade === '') {
    alert('Preencha todos dados corretamente!')
    return
  }

  alert(
    `Conta Aberta com sucesso! 
    Nome: ${this.state.nome}
    Idade: ${this.state.idade}
    Sexo: ${this.state.sexos[this.state.sexo].sexoNome}
    Limite Conta: ${this.state.limite.toFixed(2)}
    Conta Estudante: ${this.state.estudante ? 'Ativo' : 'Inativo'}`
  )
}

render(){

  let sexoItems = this.state.sexos.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.sexoNome}/>
  }); 

  return(
    <View style={styles.container}>
      <Text style={styles.bancoLogo}>Banco React</Text>

      <View style={styles.areaFormulario}>
        <Text style={styles.textoNome}>Nome:</Text>
        <TextInput style={styles.input}
          placeholder="Digite seu nome"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({nome: texto})}
        />

        <Text style={styles.textoNome}>Idade:</Text>
        <TextInput style={styles.input}
          
          placeholder="Digite sua idade"
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({idade: texto})}
          keyboardType="numeric"
        />
   
        <View style={styles.areaSexo}>  
          <Text style={styles.textoNome}>Sexo:</Text>
          <Picker style={styles.pickerSexo} 
            selectedValue={this.state.sexo} 
            onValueChange={(itemValue, itemIndex) => this.setState({sexo: itemValue})}>  
            {sexoItems}
        </Picker>
      </View>

      <View style={styles.limiteArea}>
        <Text style={styles.textoNome}>Seu Limite:</Text>
        <Text style={styles.limiteTexto}>R$ {this.state.limite.toFixed(0)}</Text>
      </View> 

      <View style={styles.areaSlider}>
        <Slider 
          minimumTrackTintColor="#CF0000" 
          maximumTrackTintColor='#53CEB6'
          minimumValue={250} 
          maximumValue={4000}
          value={this.state.limite}
          onValueChange={(limite)=> this.setState({limite: limite})}
        />
      </View>

      <View style={styles.areaEstudante}>
        <Text style={styles.textoNome}>Estudante: </Text>
        <Switch 
        style={{paddingTop: 15, marginLeft: 15}}
        trackColor="#00c300" 
        value={this.state.estudante} 
        onValueChange={(valorEstudante) => this.setState({estudante: valorEstudante})}
        />
      </View>

      <TouchableOpacity style={styles.botao} onPress={this.enviarDados} underlayColor="#000000">
          <Text style={styles.botaoTexto}>Abrir Conta</Text>
      </TouchableOpacity>
    </View>
    </View>    
  );
}
}

const styles = StyleSheet.create({
container:{
  paddingTop: 65,
  flex: 1,
  backgroundColor: '#0b192eba'
},
areaFormulario:{
  flexDirection: 'column',
  margin: 10,
},
bancoLogo:{
  textAlign: 'center',
  fontSize: 35,
  fontWeight: 'bold',
  color: 'white'
},
textoNome:{
  fontSize: 17,
  color: '#53CEB6',
  fontWeight: 'bold',
},
input:{
  borderWidth: 1,
  borderRadius: 5,
  borderColor: '#53CEB6',
  backgroundColor: '#CCD6F6',
  color: '#000000',
  height: 38,
  padding: 10,
  marginBottom: 5,
  marginTop: 5,
},
areaSexo:{
   flexDirection: 'row',
   alignItems: 'center',
   paddingBottom: 5,
},
pickerSexo:{
  flex:1,
  color: '#53CEB6',
},
limiteArea:{
  flexDirection:'row',
  paddingBottom: 5,
},
limiteTexto:{
color: 'white',
fontSize: 17,
fontWeight: 'bold',
paddingLeft: 5,
},
areaEstudante:{
flexDirection: 'row', 
alignItems: 'center'
},
botao:{
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#CCD6F6',
borderRadius: 150,
margin: 20,

},
botaoTexto:{
 fontSize: 20,
 fontWeight: 'bold',
 color: 'black',
 padding: 20
},
});