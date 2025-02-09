import React from "react";
import { View, FlatList } from "react-native";
import ContactItem from "./ContactItem";
import styles from "./styles";

const contacts = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    position: "Giám đốc",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: "2",
    name: "Trần Thị B",
    email: "tranthib@example.com",
    position: "Nhân viên",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: "3",
    name: "Lê Văn C",
    email: "levanc@example.com",
    position: "Quản lý",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: "4",
    name: "Phạm Thị D",
    email: "phamthid@example.com",
    position: "Thư ký",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const ContactList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ContactItem {...item} />}
      />
    </View>
  );
};

export default ContactList;
