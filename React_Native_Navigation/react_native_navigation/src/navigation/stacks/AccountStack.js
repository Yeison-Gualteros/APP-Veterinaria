import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
    ChangeEmailScreen,
    ChangenameScreen,
    ChangepasswordScreen,
    ChangeusernameScreen,
    AccountScreen,
    OrderScreen,
    OrdersScreen,
    AddEditAdressScreen,
    AdressesScreen,    
} from "../../screens/Account";
import { screensName } from "../../utils";

const stack = createNativeStackNavigator();

export function AccountStack(){
    return (
        <stack.Navigator>
            <stack.Screen
            name={screensName.account.account}
            component={AccountScreen}
            options={{headerShown: false}}
            />
            <stack.Screen
            name={screensName.account.changeName}
            component={ChangenameScreen}
            options={{title:"cambiar nombre y apellidos"}}
            />
            <stack.Screen
            name={screensName.account.changeEmail}
            component={ChangeEmailScreen}
            options={{title:"cambiar correo electronico"}}
            />
            <stack.Screen
            name={screensName.account.changeUsername}
            component={ChangeusernameScreen}
            options={{title:"cambiar nombre de usuario"}}
            />
            <stack.Screen
            name={screensName.account.changePassword}
            component={ChangepasswordScreen}
            options={{title:"cambiar contraseña"}}
            />
            <stack.Screen
            name={screensName.account.addresses}
            component={AdressesScreen}
            options={{title:"Mis direcciones"}}
            />
            <stack.Screen
            name={screensName.account.addEditAddress}
            component={AddEditAdressScreen}
            />
            <stack.Screen
            name={screensName.account.orders}
            component={OrdersScreen}
            options={{title:"Mis pedidos"}}
            />
            <stack.Screen
            name={screensName.account.order}
            component={OrderScreen}
            options={{title:"", presentation:"modal"}}
            />
        </stack.Navigator>
    )
}
