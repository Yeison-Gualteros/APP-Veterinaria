import { View } from "react-native";
import { Badge } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AuthScreen } from "../../screens/Auth/AuthScreen";
import { screensName } from "../../utils";
import { HomeStack, WishlistStack, CartStack, AccountStack } from "../stacks";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";


const Tab = createBottomTabNavigator();

export function TabNavigation(){
    return(
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon: (routeStatus) => setIcon(route, routeStatus)
        })}>
            <Tab.Screen
                name={screensName.home.root}
                component={HomeStack}
                options={{title: "inicio"}}
            />
            <Tab.Screen
                name={screensName.wishlist.root}
                component={WishlistStack}
                options={{title: "lista de deseo"}}
            />
            <Tab.Screen
                name={screensName.cart.root}
                component={CartStack}
                options={{title: "carrito"}}
            />
            <Tab.Screen
                name={screensName.account.root}
                component={AccountStack}
                options={{title: "Mi cuenta"}}
            />
        </Tab.Navigator>
        
    )
}

function setIcon(route, routeStatus){
    let iconName= "";
    let color = "#FFF";

    return <AwesomeIcon name="home" color="#Faa"/>
}