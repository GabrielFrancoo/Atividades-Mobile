import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  // FUNDO GERAL
  Tela_Principal_fundo: {
    flex: 1,
    backgroundColor: "#dcdcdc", // cinza claro
    padding: 15,
  },

  // CABEÇALHO
  Tela_Principal_Cab: {
    backgroundColor: "#ffffff",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },

  // TÍTULO PRINCIPAL
  Tela_Principal_Titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginVertical: 5,
  },

  // SUBTÍTULOS
  Tela_Principal_SubTitulo1: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
    marginVertical: 5,
  },

  Tela_Principal_SubTitulo2: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },

  // CORPO
  Tela_Principal_Corpo: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },

  // BOTÕES
  Tela_Principal_Botoes: {
    backgroundColor: "#e0e0e0",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
  },

  // RODAPÉ
  Tela_Principal_Rodape: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderTopWidth: 2,
    borderTopColor: "#d3d3d3", // borda cinza clara
    alignItems: "center",
    borderRadius: 10,
  },

});