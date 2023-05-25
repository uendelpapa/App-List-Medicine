import React from 'react';
import { View, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconTwo from 'react-native-vector-icons/FontAwesome';

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const goToProductsScreen = () => {
    navigation.navigate('Products');
  };

  const goToOtherScreen = () => {
    navigation.navigate('Other');
  };

  const goToTesteScreen = () => {
    navigation.navigate('Teste');
  };

  return (
    <View className='flex-1 justify-center items-center '>

      <View className='flex-1 w-[100%] text-zinc-50 bg-orange-950 justify-center z-10'>
        <Text className="text-zinc-50 text-center text-4xl ">LOGO</Text>
        <Text className="text-xl text-zinc-50 text-center mt-10">Lorem Ipsum is simply the printing and typesetting</Text>
      </View>

      <View className='flex-1 justify-start items-center mt-[-60] z-20'>
        <TouchableOpacity
        className='flex-row w-96 h-24 bg-[#FFDB91] py-2 px-10 rounded-xl justify-start items-center'
        onPress={goToProductsScreen}>
          <View className='bg-zinc-50 w-16 h-16 rounded-full mr-8 justify-center items-center'>
          <Icon name="paw" size={32} color="#4A2605" />
          </View>
          <Text className='font-bold text-center text-2xl'>Linha Pet</Text>
        </TouchableOpacity> 

        <TouchableOpacity
        className='flex-row w-96 h-24 bg-[#FFDB91] py-2 px-10 my-2 rounded-xl justify-start items-center'
        onPress={goToOtherScreen}>
          <View className='bg-zinc-50 w-16 h-16 rounded-full mr-8 justify-center items-center'>
          <Icon name="horse-head" size={32} color="#4A2605" />
          </View>
          <Text className='font-bold text-center text-2xl'>Linha Grandes</Text>
        </TouchableOpacity> 

        {/* <TouchableOpacity
        className='w-96 h-32 bg-[#FFDB91] py-2 my-2 rounded-md justify-center items-center'
        onPress={goToTesteScreen}>

          <Text className='font-bold text-center text-2xl'>Teste</Text>

        </TouchableOpacity>  */}

        {/* <Button title="Medicamentos Animais Grandes" onPress={goToOtherScreen} /> */}

      </View>
      
    </View>
  );
};

export default HomeScreen;
