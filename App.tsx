"use client"

import React, { useState } from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MyComponent from './src/components/my-component';
import CompWithProps from './src/components/simple-props';
import Counter from './src/components/counter-comp';

function App(): React.JSX.Element {
  let darkModeEnabled = false;
  let dynamicStyles = darkModeEnabled ? styles.darkMode : styles.lightMode;
  const simpleFunc = () => { Alert.alert('Hello World!'); };
  let data = [];
  for (let i = 0; i < 100; i++) {
    let thisItem = { id: i, text: `Item #${i}` };
    data.push(thisItem);
  }
  function ListItemRenderComp({item}:{item:{id:number,text:string}}) {
    return <Text style={styles.myCustomText}>{item.text}</Text>;
  }
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  let person = {
    fname: "Alice",
    age: 25,
    email: "alice@sait.ca"
  }

  return (
    <View style={{...styles.container, ...dynamicStyles}}>

      {/* <CompWithProps fname={person.fname} age={person.age} email={person.email} /> */}
      <CompWithProps personObj={person} />

      {/* <Text style={ {fontSize:20,color:'blue'} } >Hello World!</Text> */}
      <Text style={styles.myCustomText}>Hello World!</Text>
      <MyComponent />
      <Image
        source={require('./src/assets/images/duck.jpg')}
        style={styles.myCustomImage}
      />
      {/* <Image source={ {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sheba1.JPG/800px-Sheba1.JPG'} } style={styles.myCustomImage} /> */}
      <Text>Enter Phone Number:</Text>
      <TextInput
        style={styles.myCustomTextInput}
        placeholder="123-555-6789"
        keyboardType="numeric"
      />
      <Button title="React Native Alert" onPress={simpleFunc} />
      <Pressable onPress={openModal} style={ 
        ( {pressed} ) => [styles.btn, { backgroundColor: pressed ? 'yellow' : 'green' } ]
      }>
        <Text style={{color:'white',fontSize:30}}>Open Modal!</Text>
      </Pressable>
      <Modal visible={isModalOpen} animationType='slide' onRequestClose={closeModal}>
        <View>
          <Text style={styles.myCustomText}>This is a Modal dialog!</Text>
          <Button title='Close Modal' onPress={closeModal} />
        </View>
      </Modal>

      <Counter />

      {/* <FlatList data={data} renderItem={ListItemRenderComp} keyExtractor={ item => item.id.toString() } /> */}
      {/* <ScrollView style={ {width: 200} }>
        <Text style={styles.myCustomText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore nemo, autem, suscipit modi amet expedita eveniet corporis repudiandae laboriosam omnis eos officia asperiores corrupti totam tempora! Maxime, dolore cupiditate!</Text>
        <Text style={styles.myCustomText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ut tempore et libero iure reiciendis, inventore rerum esse, neque consequatur deleniti quia voluptas laboriosam sequi dolor mollitia consectetur, qui officiis!</Text>
        <Text style={styles.myCustomText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem consequatur facilis. Eligendi aperiam veniam nulla sapiente nostrum ipsa, mollitia quibusdam veritatis sed ad nam quo molestiae, culpa accusamus asperiores?</Text>
        <Text style={styles.myCustomText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam incidunt dicta, deserunt suscipit excepturi quae accusamus facere, alias soluta reiciendis laboriosam hic a iusto optio inventore quaerat ex minima cum.</Text>
      </ScrollView> */}

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  myCustomTextInput: {
    fontSize: 24,
    backgroundColor: '#aaaaaa',
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 260,
  },
  myCustomImage: {
    width: 200,
    height: 200,
  },
  myCustomText: {
    fontSize: 30,
    color: '#55AA55',
    // textAlign: 'center'
  },
  darkMode: {
    backgroundColor: '#333333',
  },
  lightMode: {
    backgroundColor: '#DDDDDD',
  },
  btn: {
    marginTop: 5,
    padding: 10,
    borderRadius: 5
  }
});

export default App;
