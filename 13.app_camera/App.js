import React, { useState } from "react";
import { SafeAreaView, View, Text, StyleSheet, StatusBar, TouchableOpacity, Modal, Image, PermissionsAndroid, Platform } from "react-native";
import { RNCamera } from "react-native-camera";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
// import ImagePicker from 'react-native-image-picker'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

console.disableYellowBox=true

export default function App () {
  const [type, setType] = useState(RNCamera.Constants.Type.back)
  const [open, setOpen] = useState(false)
  const [capturePhoto, setCapturePhoto] = useState(null)

  async function takePicture (camera) {
    const options = { quality: 0.5, base64: true }
    const data = await camera.takePictureAsync(options)

    setCapturePhoto(data.uri)
    setOpen(true)
    console.log('FOTO TIRADA CÂMERA: ' + data.uri)

    // chama a função salvar a foto no album
    savePicture(data.uri)
  }

  async function hasAndroidPermission () {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
    const hasPermission = await PermissionsAndroid.check(permission)

    if (hasPermission) {
      return true
    }
    const status = await PermissionsAndroid.request(permission)
    return status === 'granted'
  }

  async function savePicture (data) {

    if (Platform.OS === 'android' && !(await hasAndroidPermission())) {
      return
    }
    CameraRoll.save(data, 'photo')
      .then((res) => {
        console.log('Salvo com sucesso: ' + res)
      }).catch((error) => {
        console.log('Error ao Salvar: ' + err)
      })
  }

  function toggleCam () {
    setType(type === RNCamera.Constants.Type.back ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back)
  }

  async function openAlbum () {
    const options = {
      title: 'Selecione uma foto',
      chooseFromLibraryButtonTitle: 'Buscar foto do album..',
      noData: true,
      mediaType: 'photo'
    }

    await launchImageLibrary(options, (response) => {

      if (response.didCancel) {
        console.log('Image Picker cancelado...')
      } else if (response.error) {
        console.log('Gerou algum erro: ' + response.error)
      } else {
        setCapturePhoto(response.assets[0].uri)
        setOpen(true)
      }
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true}/>
      <RNCamera
        style={styles.preview}
        type={ type }
        flashMode={RNCamera.Constants.FlashMode.auto}
        androidCameraPermissionOptions={{
          title: 'Permissão para usar a câmera',
          message: 'Nós precisamos usar sua câmera',
          buttonPositve: 'ok',
          buttonNegative: 'Cancelar'
        }}
      >
        { ({ camera, status, recordAndroidPermissionStatus }) => {
          if (status !== 'READY') return <View/>
          return(
            <View style={styles.myView}>
              <TouchableOpacity onPress={ () => takePicture(camera) } style={styles.capture}>
                <Text style={styles.btnText}>Tirar foto</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={ () => openAlbum() } style={styles.capture}>
                <Text style={styles.btnText}>Album</Text>
              </TouchableOpacity>
            </View>
          )
        }}  
      </RNCamera>
      <View style={styles.camPosition}>
        <TouchableOpacity onPress={ () => toggleCam() } style={styles.camPositionBtn}>
          <Text style={styles.camPositionText}>Trocar Câmera</Text>
        </TouchableOpacity>
      </View>
      {
        capturePhoto &&
        <Modal animationType="slide" transparent={false} visible={open}>
          <View style={styles.viewModal}>
            <TouchableOpacity style={styles.btnFechar} onPress={ () => setOpen(false)}>
              <Text style={styles.btnFecharText}>Fechar</Text>
            </TouchableOpacity>
            <Image 
              resizeMode="contain"
              style={styles.image}
              source={{ uri: capturePhoto }}
            />
          </View>
        </Modal>
      }
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  myView: {
    marginBottom: 35,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },
  capture: {
    flex: 0,
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  btnText: {
    fontSize: 16
  },
  viewModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20
  },
  btnFechar: {
    margin: 10
  },
  btnFecharText: {
    fontSize: 24
  },
  image: {
    width: 350, 
    height: 450,
    borderRadius: 15
  },
  camPosition: {
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    height: 40,
    position: 'absolute',
    right: 5,
    top: 70
  },
  camPositionBtn: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  camPositionText: {
    fontWeight: 'bold'
  }
})