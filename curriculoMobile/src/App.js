import React from 'react';
import {StyleSheet, View, Image, Text} from 'react';

import foto from './assets/Eu.jpeg';

const App = () => {
  return (
    <>
      <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image souce={foto} style={style.foto} />
          <Text>BenHur Albertassi</Text>
          <Text>Estudante da Trybe</Text>
          <View>
            <Text>github</Text>
            <Text>instagram</Text>
            <Text>linkedin</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#E7E7E7',
    flex: 1,
  },
  container_cabecalho: {
    flex: 1,
    alignItems: 'center',
    justfyContent: 'center',
  },
  foto: {
    width: 250,
    height: 250,
    borderRadius: 125,
  },
});
