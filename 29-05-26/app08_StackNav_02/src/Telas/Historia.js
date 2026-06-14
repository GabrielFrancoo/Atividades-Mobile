import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function Historia() {
  return (
    <View style={styles.fundo}>
      <View style={styles.cabecalho}>
        <View style={styles.cabecalhoRow}>
          <Text style={styles.cabecalhoIcon}>📖</Text>
          <View>
            <Text style={styles.cabecalhoTag}>GAMES</Text>
            <Text style={styles.cabecalhoTitulo}>História</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.corpo}>
        <Text style={styles.secaoTitulo}>Introdução:</Text>
        <Text style={styles.paragrafo}>
          Os videogames surgiram na década de 1950 como experimentos acadêmicos.
          O primeiro jogo amplamente reconhecido foi o "Tennis for Two", criado em
          1958 por William Higinbotham em um osciloscópio.
        </Text>

        <Text style={styles.destaque}>
          Mas foi o Pong, lançado pela Atari em 1972, que trouxe os games para o
          público em geral.
        </Text>

        <Text style={styles.secaoTitulo}>Origens</Text>
        <Text style={styles.paragrafo}>
          Em 1972, a Magnavox lançou o Odyssey, o primeiro console doméstico da
          história. Pouco depois, a Atari popularizou os arcades com o Pong,
          iniciando a era de ouro dos fliperamas nos anos 1970 e 1980.
        </Text>

        <Text style={styles.secaoTitulo}>Era de Ouro</Text>
        <Text style={styles.paragrafo}>
          Os anos 80 foram marcados pelo crash dos videogames em 1983, quando o
          mercado americano colapsou. Foi a Nintendo que salvou a indústria com o
          lançamento do NES (Famicom) em 1983 no Japão e 1985 nos EUA, trazendo
          Super Mario Bros. como carro-chefe.
        </Text>

        <Text style={styles.secaoTitulo}>Guerra dos Consoles</Text>
        <Text style={styles.paragrafo}>
          Os anos 90 foram marcados pela famosa guerra entre Nintendo e Sega.
          O Sonic the Hedgehog foi criado especificamente para rivalizar com o
          Mario. Nessa mesma época, a Sony entrou no mercado com o PlayStation
          em 1994, mudando completamente o cenário da indústria.
        </Text>

        <Text style={styles.secaoTitulo}>Era Moderna</Text>
        <Text style={styles.paragrafo}>
          Com a chegada dos anos 2000, os games em 3D se consolidaram. O
          PlayStation 2 se tornou o console mais vendido da história, com mais de
          155 milhões de unidades. Hoje, a indústria de games movimenta mais de
          200 bilhões de dólares por ano globalmente.
        </Text>

        <View style={{ height: 40 }} />
      </ScrollView>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Gabriel Franco</Text>
        <Text style={styles.rodapeTexto}>29/05/2026</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: { flex: 1, backgroundColor: '#0d0d1a' },
  cabecalho: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderBottomWidth: 3,
    borderBottomColor: '#e94560',
  },
  cabecalhoRow: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  cabecalhoIcon: { fontSize: 48 },
  cabecalhoTag: { fontSize: 12, fontWeight: 'bold', color: '#e94560', letterSpacing: 2 },
  cabecalhoTitulo: { fontSize: 28, fontWeight: 'bold', color: '#1a1a2e' },
  corpo: { flex: 1, backgroundColor: '#ffffff', padding: 20 },
  secaoTitulo: { fontSize: 20, fontWeight: 'bold', color: '#e94560', marginTop: 16, marginBottom: 8 },
  paragrafo: { fontSize: 15, color: '#333', lineHeight: 24, textAlign: 'justify' },
  destaque: { fontSize: 18, color: '#0f3460', fontWeight: 'bold', marginVertical: 12, lineHeight: 26 },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  rodapeTexto: { fontSize: 13, color: '#888' },
});
