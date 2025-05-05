import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const languages = ["English", "Bengali", "French", "German"];

const HomeScreen = () => {
  const [fromLang, setFromLang] = useState("English");
  const [toLang, setToLang] = useState("Bengali");
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const swapLanguages = () => {
    setFromLang(toLang);
    setToLang(fromLang);
  };

  const translate = () => {
    // This is a placeholder. Replace with actual translation logic.
    setTranslatedText(inputText.split("").reverse().join(""));
  };

  return (
    <View style={styles.container}>
      {/* Language Selectors */}
      <View style={styles.languageRow}>
        <Text style={styles.language}>{fromLang}</Text>
        <TouchableOpacity onPress={swapLanguages}>
          <Ionicons name="swap-horizontal" size={24} color="gray" />
        </TouchableOpacity>
        <Text style={styles.language}>{toLang}</Text>
      </View>

      {/* Input Text Box */}
      <TextInput
        style={styles.inputBox}
        placeholder="Type to translate..."
        multiline
        value={inputText}
        onChangeText={setInputText}
      />

      {/* Translate Button */}
      <TouchableOpacity style={styles.translateButton} onPress={translate}>
        <Text style={styles.translateButtonText}>Translate</Text>
      </TouchableOpacity>

      {/* Output Box */}
      <View style={styles.outputBox}>
        <Text style={styles.outputText}>{translatedText || "Translation appears here"}</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  language: {
    fontSize: 18,
    fontWeight: "600",
  },
  inputBox: {
    height: 120,
    borderColor: "#ccc",
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
    color: "#fff",
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
