import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const FilterMenu: React.FC<any> = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      <TouchableOpacity style={styles.filterItem}>
        <Text style={styles.filterText}>Filtro 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItem}>
        <Text style={styles.filterText}>Filtro 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItem}>
        <Text style={styles.filterText}>Filtro 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItem}>
        <Text style={styles.filterText}>Filtro 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItem}>
        <Text style={styles.filterText}>Filtro 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItem}>
        <Text style={styles.filterText}>Filtro 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.filterItem}>
        <Text style={styles.filterText}>Filtro 4</Text>
      </TouchableOpacity>
      {/* Adicione mais botões de filtro conforme necessário */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  filterItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#e1e1e1',
    marginRight: 8,
  },
  filterText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default FilterMenu;
