import "../../../../global";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Web3 from "web3";

import { Input } from "../../common/input";
import { Button } from "../../common/button";

import styles from "./styles";

const Home = () => {
  const [providerUrl, setProviderUrl] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  const createWeb3 = (url, key) => {
    const provider = new Web3.providers.HttpProvider(url);
    const web3 = new Web3(provider);
    var account = privateKeyToAccount(web3, key);
    web3.eth.defaultAccount = account.address;
    console.log(web3);
    return web3;
  };

  const privateKeyToAccount = (web3, key) => {
    return web3.eth.accounts.privateKeyToAccount(key);
  };

  const handleChangeProviderUrlText = (text) => {
    setProviderUrl(text);
  };

  const handleChangePrivateKeyText = (text) => {
    setPrivateKey(text);
  };

  const handlePress = () => {
    createWeb3(providerUrl, privateKey);
  };

  return (
    <View style={styles.container}>
      <Input
        label="Provider URL"
        onChangeText={handleChangeProviderUrlText}
        value={providerUrl}
      />
      <Input
        style={styles.keyProviderInput}
        label="Private Key"
        onChangeText={handleChangePrivateKeyText}
        value={privateKey}
      />
      <Button
        onPress={handlePress}
        text="Confirm"
        disabled={providerUrl == "" || privateKey == ""}
      />
    </View>
  );
};

export default Home;
