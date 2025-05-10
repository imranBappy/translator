import { translateApiV2 } from "@/api/translateApi";
import Header from "@/components/Header";
import baseStyles from "@/styles/baseStyle";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [fromLang, setFromLang] = useState('en-GB');
  const [toLang, setToLang] = useState('bn-IN');
  const [inputText, setInputText] = useState("");

  const swapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const handleTranslate = async () => {
      setIsLoading(true);
      const data = await translateApiV2(inputText, fromLang, toLang);
      setInputText(data);
      setIsLoading(false);
  };

  return (
      <View style={baseStyles.container}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#121212'} />
          {/* Header */}
          <Header />
          {/* Input Text Box */}
          <View
              style={{
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'space-between',
              }}
          >
              <View>
                  <TextInput
                      style={[styles.inputBox, baseStyles.input]}
                      placeholder="Type to translate..."
                      multiline
                      value={inputText}
                      onChangeText={setInputText}
                      placeholderTextColor="gray"
                  />

                  {/* Translate Button */}
                  <TouchableOpacity
                      style={baseStyles.button}
                      onPress={handleTranslate}
                      disabled={isLoading}
                  >
                      <Text
                          style={[
                              baseStyles.buttonText,
                              styles.translateButtonText,
                          ]}
                      >
                          {isLoading ? 'Loading...' : 'Translate'}
                      </Text>
                  </TouchableOpacity>
              </View>

              {/* Language Selectors */}
              <View style={styles.languageRow}>
                  <TouchableOpacity style={baseStyles.button}>
                      <Text style={[baseStyles.buttonText, styles.language]}>
                          {fromLang}
                      </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={swapLanguages}>
                      <Ionicons
                          name="swap-horizontal"
                          size={24}
                          color="#ffffff"
                      />
                  </TouchableOpacity>
                  <TouchableOpacity style={baseStyles.button}>
                      <Text style={[baseStyles.buttonText, styles.language]}>
                          {toLang}
                      </Text>
                  </TouchableOpacity>
              </View>
          </View>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  languageRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 30,
  },
  language: {
    fontSize: 18,
    fontWeight: "600",
    color: "white"
  },
  inputBox: {
    height: 120,
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    textAlignVertical: "top",
    fontSize: 16,
    marginBottom: 20,

  },
  translateButton: {
    backgroundColor: "#007AFF",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  translateButtonText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  outputBox: {
    minHeight: 100,
    borderColor: "#eee",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    backgroundColor: "#f9f9f9",
  },
  outputText: {
    fontSize: 16,
    color: "#333",
  },
});

export default HomeScreen;
