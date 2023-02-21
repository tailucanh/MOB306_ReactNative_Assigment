import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";
import { styles } from "../Components/Styles/ManagerStyle";
import Items from "../Components/Items";
import { API_SHOP } from "../Components/helper/Api";

import { useEffect, useState } from "react";

export default function Manage({ route, navigation }) {
  const isFocused = useIsFocused();
  const [list, setData] = useState([]);

  const getListShops = () => {
    fetch(API_SHOP)
      .then((res) => res.json())
      .then((data) => {
        const dataWithImages = data.map((item) => ({
          ...item,
          imageSource: { uri: item.logo },
        }));
        setData(data);
      })

      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getListShops();
  }, [isFocused]);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Quản lý cửa hàng",
      headerTransparent: false,
      headerStyle: {
        backgroundColor: "#141927",
        height: 100,
      },
      headerTitleStyle: {
        color: "white",
        fontFamily: "SignikaNegative",
        fontSize: 24,
      },
      headerSearchBarOptions: {
        placeholder: "search",
      },
      headerRight: () => {
        return (
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => navigation.navigate("ScreenAdd")}
          >
            <Text style={styles.textBtn}>+</Text>
          </TouchableOpacity>
        );
      },
    });
  }, [navigation]);

  const onDelete = (deleteId) => {
    Alert.alert("Xác nhận", "Bạn chắc chắn muốn xóa?", [
      { text: "Hủy" },
      {
        text: "Xóa",
        onPress: () => {
          fetch(API_SHOP + "/" + deleteId, { method: "DELETE" }).then((res) =>
            getListShops()
          );
        },
      },
    ]);
  };
  const onEdit = (editId) => {
    //?Cách gọi mới mi
    fetch(`${API_SHOP}/${editId}`).then((res) =>
      res
        .json()
        .then((data) => navigation.navigate("ScreenAdd", { editItem: data }))
    );
  };
  const onShowItem = (idItem) => {
    fetch(`${API_SHOP}/${idItem}`).then((res) =>
      res
        .json()
        .then((data) => navigation.navigate("ScreenShowItem", { item: data }))
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#141927" barStyle={"light-content"} />
      {list.length != 0 ? (
        <FlatList
          style={styles.listContainer}
          data={list}
          renderItem={({ item, index }) => {
            return (
              <Items
                item={item}
                index={index}
                onDelete={() => onDelete(item.id)}
                onEdit={() => onEdit(item.id)}
                onShow={() => onShowItem(item.id)}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        ></FlatList>
      ) : (
        <View style={styles.boxEmptyData}>
          <Image
            style={styles.imgEmpty}
            source={require("../assets/images/empty_data.png")}
          />
          <Text style={styles.textEmpty}>Chưa có dữ liệu, hãy thêm mới</Text>
        </View>
      )}
    </View>
  );
}
