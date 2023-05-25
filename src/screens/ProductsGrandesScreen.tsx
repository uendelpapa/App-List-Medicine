import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ScrollView, VirtualizedList } from 'react-native';
import {TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';



// Defina alguns dados de exemplo para os produtos
const productsData = [
  { id: 1, name: 'Diclofenaco J.A', type: ['dores', 'febre', 'inflamação'],code:'3999', image: require('../assets/img/diclofenaco.png') },
  { id: 2, name: 'Flumax J.A', type: ['dores'], code:'20', image: require('../assets/img/flumax.png') },
  { id: 3, name: 'Finador OuroFino', type: ['dores', 'febre'], code:'33', image: require('../assets/img/finador.png') },
  { id: 4, name: 'Antitóxico UCBVET', type: ['antitoxico'], code:'15', image: require('../assets/img/antitoxico-ucb.png') },

  
];

const ProductsGrandesScreen: React.FC<any> = ({navigation}) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>('');

  

  // Função para filtrar os produtos com base no tipo selecionado
  const filterProducts = (type: string | null) => {
    setSelectedType(type);
  };

  // Função para renderizar cada card de produto
  const renderProductCard = ({ item }: { item: any }) => (
    <View className='flex-1 m-2 p-2 bg-zinc-50 shadow-md shadow-black rounded-xl justify-center items-center' >
      <Image className='flex w-32 h-32 mb-4' source={item.image}  />
      <Text  className='text-lg font-bold'>{item.name}</Text>
      <Text className='px-1 hidden' >{item.type.join(', ')}</Text>
      <Text className='font-bold pb-4'>Código: {item.code}</Text>
    </View>
  );

  // // Filtra os produtos com base no tipo selecionado
  // const filteredProducts = selectedType
  //   ? productsData.filter((product) => product.type.includes(selectedType))
  //   : productsData;

    // Filtra os produtos com base no tipo selecionado e no texto de busca
  const filteredProducts = productsData.filter((product) => {
    if (selectedType && !product.type.includes(selectedType)) {
      return false;
    }
    if (searchText && !product.code.toLowerCase().includes(searchText.toLowerCase())) {
      return false;
    }
    return true;
  });

  const goToHomeScreen = () => {
    navigation.navigate('Home');
  };

  return (

    
    <ScrollView
    contentContainerStyle={styles.contentContainer}
    showsVerticalScrollIndicator={false}
     >
     
   <View className='text-zinc-50 bg-orange-950 justify-center'>
   <TouchableOpacity className='flex-row space-x-2 w-24 h-10 mx-5 mt-8 bg-[#FFDB91] py-2 rounded-md justify-center items-center' onPress={goToHomeScreen}>
   <Icon name="chevron-circle-left" size={24} color="#4A2605" />
      <Text className='font-bold text-center text-base'>Voltar</Text>
    </TouchableOpacity> 
    
    <Text className='text-start text-2xl font-bold m-5 text-zinc-50'>Linha Grandes</Text>
    <View className=' justify-center items-center'>
    <Image className='flex mb-10 rounded-lg'  
    source={require('../assets/img/bannerGrandes.jpg')}/>
    </View>
   </View>

      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className='mt-4 ml-4 space-x-2' > 

        <TouchableOpacity
          className='w-40 h-12 px-4 py-2 bg-[#FFDB90] border-2  border-[#4A2605] rounded-full '
          onPress={() => filterProducts(null)}
        >
          <Text className='text-center text-lg font-semibold'>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='w-40 h-12 px-4 py-2 bg-[#FFDB90] border-2  border-[#4A2605] rounded-full '
          onPress={() => filterProducts('febre')}
        >
          <Text className='text-center text-lg font-semibold'>Febre</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='w-40 h-12 px-4 py-2 bg-[#FFDB90] border-2  border-[#4A2605] rounded-full '
          onPress={() => filterProducts('dores')}
        >
          <Text className='text-center text-lg font-semibold'>Dores</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='w-40 h-12 px-4 py-2 bg-[#FFDB90] border-2  border-[#4A2605] rounded-full '
          onPress={() => filterProducts('inflamação')}
        >
          <Text className='text-center text-lg font-semibold'>Inflamação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className='w-40 h-12 px-4 py-2 bg-[#FFDB90] border-2  border-[#4A2605] rounded-full '
          onPress={() => filterProducts('antitoxico')}
        >
          <Text className='text-center text-lg font-semibold'>Antitóxico</Text>
        </TouchableOpacity>

       
 
      </ScrollView>

      <TextInput
      className='flex-row px-8 py-2 m-4  border rounded-full'
        placeholder="Pesquisar"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProductCard}
        numColumns={2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  filterButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#e1e1e1',
    borderRadius: 20,
    marginHorizontal: 8,
  },
  selectedFilterButton: {
    backgroundColor: '#aaa',
  },
  filterText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
  },
  selectedFilterText: {
    color: '#fff',
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    margin: 8,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  type: {
    fontSize: 14,
    color: '#888',
  },
  contentContainer: {
    paddingVertical: 20
  }
 
});

export default ProductsGrandesScreen;
