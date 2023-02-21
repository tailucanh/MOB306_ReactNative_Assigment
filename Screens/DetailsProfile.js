import {
  View,
  Text,
  Button,
  Pressable,
  TouchableHighlight,
  StatusBar,
  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { styles } from "../Components/Styles/ProfileStyle.js";

export default function DetailsProfile(props) {
  const navigation = props.navigation;

  return (
    <View style={styles.containerDetail}>
      <StatusBar backgroundColor="#141927" barStyle={"light-content"} />
      <TouchableHighlight
        underlayColor="rgba(255, 255, 255, 0)"
        style={styles.touchableIcBack}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../assets/images/icBack.png")}
          style={styles.icBack}
        />
      </TouchableHighlight>
      <View style={styles.boxInfoDetail}>
        <View style={styles.childInfo1}>
          <Image
            source={require("../assets/images/avatar.jpg")}
            style={styles.icAvatarDetail}
          />
          <View>
            <Text style={styles.textTitleName}>Lục Anh Tài</Text>
            <Text style={styles.textContentDetail}>MSSV: PH26495</Text>
            <Text style={styles.textContentDetail}>
              Ngành: Lập trình Mobile
            </Text>
          </View>
        </View>
        <View style={styles.childInfo2}>
          <View>
            <Text style={styles.textChildTitle}>Follow</Text>
            <Text style={styles.textChildContent}>100</Text>
          </View>
          <View>
            <Text style={styles.textChildTitle}>Đánh giá</Text>
            <Text style={styles.textChildContent}>4.9</Text>
          </View>
          <TouchableHighlight underlayColor="#6f86bd">
            <View style={styles.boxBtn}>
              <Image
                source={require("../assets/images/ic_plus.png")}
                style={styles.icPlus}
              />
              <Text style={styles.textButton}>Follow me</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>

      <View style={styles.boxInfoDetail2}>
        <ScrollView>
          <Text style={styles.textTitle2}>🛠 Công cụ và công nghệ 🛠</Text>
          <View style={styles.boxScrollView}>
            <ScrollView horizontal={true}>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/react.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/java.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/flutter.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/android.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/androidStudio.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/vsCode.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/unity.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/GitHub.png")}
                  style={styles.icLogo2}
                />
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="rgba(255, 255, 255, 0)"
                style={styles.touchableLogo}
              >
                <Image
                  source={require("../assets/images/figma.png")}
                  style={styles.icLogo}
                />
              </TouchableHighlight>
            </ScrollView>
          </View>
          <Text style={styles.textTitle2}>🔥 Album ảnh 🔥</Text>
          <View style={styles.album1}>
            <Image
              source={require("../assets/images/smile4.jpg")}
              style={styles.imgAlbum1}
            />
            <View style={styles.childAlbum}>
              <Image
                source={require("../assets/images/smile1.jpg")}
                style={styles.imgAlbum2}
              />
              <Image
                source={require("../assets/images/smile2.jpg")}
                style={styles.imgAlbum3}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
