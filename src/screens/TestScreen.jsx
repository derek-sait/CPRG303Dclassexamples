'use client';

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
import MyComponent from '../components/my-component';
import CompWithProps from '../components/simple-props';
import Counter from '../components/counter-comp';
import {useState} from 'react';
import {mainStyles} from '../assets/styles/styles';

export default function TestScreen() {
  let darkModeEnabled = false;
  let dynamicStyles = darkModeEnabled
    ? mainStyles.darkMode
    : mainStyles.lightMode;
  const simpleFunc = () => {
    Alert.alert('Hello World!');
  };
  let data = [];
  for (let i = 0; i < 100; i++) {
    let thisItem = {id: i, text: `Item #${i}`};
    data.push(thisItem);
  }
  function ListItemRenderComp({item}) {
    return <Text style={mainStyles.myCustomText}>{item.text}</Text>;
  }
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  let person = {
    fname: 'Alice',
    age: 25,
    email: 'alice@sait.ca',
  };

  return (
    <View style={{...mainStyles.container, ...dynamicStyles}}>
      {/* <CompWithProps fname={person.fname} age={person.age} email={person.email} /> */}
      <CompWithProps personObj={person} />

      {/* <Text style={ {fontSize:20,color:'blue'} } >Hello World!</Text> */}
      <Text style={mainStyles.myCustomText}>Hello World!</Text>
      <MyComponent />
      <Image
        source={require('../assets/images/duck.jpg')}
        style={mainStyles.myCustomImage}
      />
      {/* <Image source={ {uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sheba1.JPG/800px-Sheba1.JPG'} } style={styles.myCustomImage} /> */}
      <Text>Enter Phone Number:</Text>
      <TextInput
        style={mainStyles.myCustomTextInput}
        placeholder="123-555-6789"
        keyboardType="numeric"
      />
      <Button title="React Native Alert" onPress={simpleFunc} />
      <Pressable
        onPress={openModal}
        style={({pressed}) => [
          mainStyles.btn,
          {backgroundColor: pressed ? 'yellow' : 'green'},
        ]}>
        <Text style={{color: 'white', fontSize: 30}}>Open Modal!</Text>
      </Pressable>
      <Modal
        visible={isModalOpen}
        animationType="slide"
        onRequestClose={closeModal}>
        <View>
          <Text style={mainStyles.myCustomText}>This is a Modal dialog!</Text>
          <Button title="Close Modal" onPress={closeModal} />
        </View>
      </Modal>

      <Counter />

      {/* <FlatList data={data} renderItem={ListItemRenderComp} keyExtractor={ item => item.id.toString() } /> */}
      {/* <ScrollView style={ {width: 200} }>
        <Text style={mainStyles.myCustomText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolore nemo, autem, suscipit modi amet expedita eveniet corporis repudiandae laboriosam omnis eos officia asperiores corrupti totam tempora! Maxime, dolore cupiditate!</Text>
        <Text style={mainStyles.myCustomText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ut tempore et libero iure reiciendis, inventore rerum esse, neque consequatur deleniti quia voluptas laboriosam sequi dolor mollitia consectetur, qui officiis!</Text>
        <Text style={mainStyles.myCustomText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente exercitationem consequatur facilis. Eligendi aperiam veniam nulla sapiente nostrum ipsa, mollitia quibusdam veritatis sed ad nam quo molestiae, culpa accusamus asperiores?</Text>
        <Text style={mainStyles.myCustomText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam incidunt dicta, deserunt suscipit excepturi quae accusamus facere, alias soluta reiciendis laboriosam hic a iusto optio inventore quaerat ex minima cum.</Text>
      </ScrollView> */}
    </View>
  );
}
