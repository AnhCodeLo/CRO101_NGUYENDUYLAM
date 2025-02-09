import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const ContactItem = ({ name, email, position, photo }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: photo }} style={styles.photo} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.position}>{position}</Text>
    </View>
    <TouchableOpacity style={styles.callButton}>
      <Ionicons name="call" size={24} color="white" />
    </TouchableOpacity>
  </View>
);

export default ContactItem;
