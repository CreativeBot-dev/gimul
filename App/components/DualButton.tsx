import { TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import AppButton from "./AppButton";

interface IButton {
  Rname: string;
  RonPress: () => void;
  RfontStyle?: TextStyle;
  RbtnStyle?: ViewStyle;

  Lname: string;
  LonPress: () => void;
  LfontStyle?: TextStyle;
  LbtnStyle?: ViewStyle;
}

export default function DualButton(props: IButton) {
  const {
    Rname,
    RonPress,
    RfontStyle,
    RbtnStyle,
    Lname,
    LonPress,
    LbtnStyle,
    LfontStyle,
  } = props;
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10,
      }}
    >
      <AppButton
        onPress={LonPress}
        name={Lname}
        BtnStyle={LbtnStyle}
        fontStyle={LfontStyle}
      />
      <AppButton
        onPress={RonPress}
        name={Rname}
        BtnStyle={RbtnStyle}
        fontStyle={RfontStyle}
      />
    </View>
    // <TouchableOpacity
    //   onPress={onPress}
    //   style={[
    //     BtnStyle,
    //     {
    //       paddingVertical: 4,
    //       borderRadius: 10,
    //       elevation: 4,
    //     },
    //   ]}
    // >
    //   <Text
    //     style={[
    //       fontStyle,
    //       {
    //         fontSize: 18,
    //         textAlign: "center",
    //         fontFamily: "Poppins-SemiBold",
    //       },
    //     ]}
    //   >
    //     {name}
    //   </Text>
    // </TouchableOpacity>
  );
}
