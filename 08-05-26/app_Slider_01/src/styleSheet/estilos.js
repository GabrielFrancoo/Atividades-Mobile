import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  area_fundo: {
    flex: 1,
    backgroundColor: "#86c8e3",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
  },

  area_cabecalho: {
    alignItems: "center",
    marginTop: 10,
  },

  img_cabecalho: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  titulo_cabecalho: {
    fontSize: 30,
    color: "#8b0000",
    fontWeight: "bold",
  },

  area_rodape: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
  },

  texto_rodape: {
    fontSize: 16,
  },

});