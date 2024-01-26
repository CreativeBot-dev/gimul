// Layout.tsx
import React, { ReactNode } from "react";
import { StatusBar, View, ViewStyle } from "react-native";

interface LayoutProps {
  children: ReactNode;
  childStyle?: ViewStyle;
  motherStyle?: ViewStyle;
}

const Layout: React.FC<LayoutProps> = (props: LayoutProps) => {
  const { children, childStyle, motherStyle } = props;
  const statusBarHeight = StatusBar.currentHeight || 0;

  return (
    <View style={[{ height: "100%", paddingHorizontal: 20 }, motherStyle]}>
      <View style={[{ paddingTop: statusBarHeight }, childStyle]}>
        {children}
      </View>
    </View>
  );
};

export default Layout;
