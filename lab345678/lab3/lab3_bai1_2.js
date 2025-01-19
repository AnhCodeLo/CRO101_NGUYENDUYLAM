import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";
import { css } from "./stylesBai1_2";

// Định nghĩa hàm colorText
const ColorText = (color) => {
  return { color: color };
};

const SizeText = (size) => {
  return { fontSize: size };
};

const StyleText = (style) => {
  return style;
};

const Lab3Bai1 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView>
      {/* TextInput bên ngoài View chính */}
      <TextInput
        style={[styles.input, css.marginTextInput]}
        placeholder="Nhập họ tên"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={(text) => setPhone(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập mật khẩu"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* View bọc nội dung gốc */}
      <View style={css.container}>
        <Text style={css.baseText}>
          Em vào đời bằng{" "}
          <Text style={[css.boldText, ColorText("red")]}>vang đỏ </Text> anh vào
          đời bằng <Text style={css.boldText}>nước trà </Text>
        </Text>

        <Text style={css.baseText}>
          Bằng cơn mưa thơm{" "}
          <Text style={[css.italicText, SizeText(20), css.boldText]}>
            {" "}
            mùi đất{" "}
          </Text>{" "}
          và{" "}
          <Text style={[css.italicText, SizeText(10)]}>
            bằng hoa dại mọc trước nhà
          </Text>
        </Text>

        <Text
          style={[
            css.italicText,
            css.baseText,
            css.boldText,
            ColorText("gray"),
          ]}
        >
          Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>

        <Text style={[css.baseText]}>
          Lý trí em là{" "}
          <Text
            style={StyleText({
              textDecorationLine: "underline",
              letterSpacing: 20,
              fontWeight: "bold",
            })}
          >
            công cụ{" "}
          </Text>
          còn trái tim anh là
          <Text
            style={StyleText({
              textDecorationLine: "underline",
              letterSpacing: 20,
              fontWeight: "bold",
            })}
          >
            {" "}
            động cơ{" "}
          </Text>
        </Text>

        <Text
          style={[
            css.baseText,
            StyleText({
              textAlign: "center",
              fontWeight: "bold",
              color: "orange",
            }),
          ]}
        >
          Anh chỉ muốn chân mình đạp đất không muốn đạp ai dưới chân mình
        </Text>

        <Text
          style={[
            css.baseText,
            StyleText({
              fontWeight: "bold",
              color: "black",
            }),
          ]}
        >
          Em vào đời bằng <Text style={ColorText("white")}>mây trắng</Text> em
          vào đời bằng <Text style={ColorText("yellow")}>nắng xanh</Text>
        </Text>

        <Text
          style={[
            css.baseText,
            StyleText({
              fontWeight: "bold",
              color: "black",
            }),
          ]}
        >
          Em vào đời bằng <Text style={ColorText("yellow")}>đại lộ</Text> em vào
          đời bằng <Text style={ColorText("white")}>vắng anh</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

// Styles cho TextInput
const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
});

export default Lab3Bai1;
