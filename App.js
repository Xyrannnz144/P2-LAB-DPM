import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>MUHAMMAD QODRI</Text>

      {/* Dua kotak dengan FlexBox */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]}>
          <Text style={styles.boxText}>RUNGKAD</Text>
        </View>
        <View style={[styles.box, styles.box2]}>
          <Text style={styles.boxText}>GACOR</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // Latar belakang layar
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3', // Warna abu-abu terang
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Gaya teks di tengah
  text: {
    fontSize: 24, // Ukuran font
    color: 'blue', // Warna font biru
    fontWeight: 'bold', // Teks tebal
    marginBottom: 20, // Jarak dari kotak
  },
  // Container untuk kotak
  boxContainer: {
    flexDirection: 'row', // Susunan horizontal
    justifyContent: 'space-between', // Jarak merata antar kotak
    width: '60%', // Lebar container
  },
  // Gaya dasar kotak
  box: {
    width: 100, // Lebar kotak
    height: 100, // Tinggi kotak
    alignItems: 'center',
    justifyContent: 'center', // Pusatkan teks di dalam kotak
  },
  // Kotak 1
  box1: {
    backgroundColor: 'red', // Warna merah
  },
  // Kotak 2
  box2: {
    backgroundColor: 'green', // Warna hijau
  },
  // Gaya teks di dalam kotak
  boxText: {
    color: 'white', // Warna teks putih
    fontWeight: 'bold', // Teks tebal
  },
});
