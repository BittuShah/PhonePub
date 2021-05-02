import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoute} from './appRoute';
import {Text} from 'react-native';
import {Home, Profile, About} from '../screens';
import theme from '../theme';
import navigation from '../lib/navigationService';

import {Header} from '../components';

import {
  LoginScreen,
  SignupScreen,
  RegisterPhoneScreen,
  ForgotPasswordScreen,
  ResetPasswordScreen,
  LogoScreen,
  HomeScreen,
  ProductDetailScreen,
  OrderScreen,
  BuyNowScreen,
  TestingNisargComponents,
  TestingPratikComponents,
  OtpScreen,
  CartScreen,
  DeliveryAddressScreen,
  AddressScreen,
  TestingParshvComponents,
  PaymentScreen,
  DeliveriesScreen,
} from '../screens';

const Stack = createStackNavigator();

export const PhonePubStackScreen = ({navigation}) => {
  return (
    // Testing Purpose Only
    <Stack.Navigator>
      {/* <Stack.Screen
        name={AppRoute.PARSHV_TEST}
        component={TestingParshvComponents}
        options={{header: props => null}}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.REGISTER_PHONE_SCREEN}
        component={RegisterPhoneScreen}
        options={{header: props => null}}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.RESET_PASSWORD_SCREEN}
        component={ResetPasswordScreen}
        options={{header: props => null}}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.FORGOT_PASSWORD_SCREEN}
        component={ForgotPasswordScreen}
        options={{header: props => null}}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.LOGIN_SCREEN}
        component={LoginScreen}
        options={{header: props => null}}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.SIGNUP_SCREEN}
        component={SignupScreen}
        options={{header: props => null}}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.NISARG_TEST}
        component={TestingNisargComponents}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.DELIVERY_ADDRESS_SCREEN}
        component={DeliveryAddressScreen}
        options={{
          headerShown: false,
        }}
      /> */}

      {/* <Stack.Screen
        name={AppRoute.ADDRESS_SCREEN}
        component={AddressScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.PRODUCT_DETAIL_SCREEN}
        component={ProductDetailScreen}
        options={{
          header: props => null,
        }}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.CART_SCREEN}
        component={CartScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.PAYMENT_SCREEN}
        component={PaymentScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.ORDER_SCREEN}
        component={OrderScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.OTP_SCREEN}
        component={OtpScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      {/* <Stack.Screen
        name={AppRoute.HOME_SCREEN}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name={AppRoute.DELIVERIES_SCREEN}
        component={DeliveriesScreen}
        options={{
          headerShown: false,
        }}
      />
      {/*
      <Stack.Screen
        name={AppRoute.BUY_NOW_SCREEN}
        component={BuyNowScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

// export const DashboardStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={AppRoute.DASHBOARD}
//         component={Dashboard}
//         options={{
//           header: (props) => (
//             <NavHeader
//               {...props}
//               leftIcon="profile"
//               leftIconStyle={{width: 25, height: 25}}
//               center="NAVACE"
//               right="Sign Out"
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.EDIT_PROFILE}
//         component={EditProfile}
//         options={{
//           header: (props) => null,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export const CheckSheetStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={AppRoute.CHECKSHEETS}
//         component={CheckSheets}
//         options={{
//           header: (props) => (
//             <NavHeader
//               {...props}
//               headerColor={theme.colors.ORANGE}
//               leftIcon="back"
//               center="CHECKSHEETS"
//               rightIcon="add"
//               secondRightIcon="camera"
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.NEW_CHECKSHEET}
//         component={NewChecksheet}
//         options={{
//           header: (props) => null,
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.SINGLE_CHECKSHEET}
//         component={SingleChecksheet}
//         options={{
//           header: (props) => (
//             <NavHeader
//               {...props}
//               headerColor={theme.colors.ORANGE}
//               leftIcon="back"
//               center="CHECKSHEET"
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.SELECTION_SCREEN}
//         component={SelectionScreen}
//         options={{
//           header: (props) => null,
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.OPERATOR_DECLARATION}
//         component={OperatorDeclaration}
//         options={{
//           header: () => (
//             <NavHeader
//               headerColor={theme.colors.ORANGE}
//               leftIcon="back"
//               center="Operator declaration"
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.CHECKLIST_SUBMISSION}
//         component={ChecklistSubmission}
//         options={{
//           header: () => (
//             <NavHeader
//               headerColor={theme.colors.ORANGE}
//               leftIcon="back"
//               center="Checklist submission"
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.SCHEDULE_MAINTENANCES}
//         component={ScheduleMaintenances}
//         options={{
//           header: () => (
//             <NavHeader
//               headerColor={theme.colors.ORANGE}
//               leftIcon="back"
//               center="SCHEDULE MAINTENANCES"
//               right="Next"
//               handleRightText={() => {
//                 navigation.navigate(AppRoute.CURRENT_FAULTS);
//               }}
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.CURRENT_FAULTS}
//         component={CurrentFaults}
//         options={{
//           header: () => (
//             <NavHeader
//               headerColor={theme.colors.ORANGE}
//               leftIcon="back"
//               center="CURRENT FAULTS"
//               right="Next"
//               handleRightText={() => {
//                 navigation.navigate(AppRoute.WEEKLY_INSPECTION);
//               }}
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.WEEKLY_INSPECTION}
//         component={WeeklyInspection}
//         options={{
//           header: () => null,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export const ReportIncidentStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={AppRoute.REPORT_INCIDENT}
//         component={ReportIncident}
//         options={{
//           header: (props) => null,
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.SELECTION_SCREEN}
//         component={SelectionScreen}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name={AppRoute.REPORT}
//         component={Report}
//         options={{
//           header: (props) => null,
//         }}
//       />
//       <Stack.Screen
//         name={AppRoute.REPORT_SUBMISSION}
//         component={ReportSubmission}
//         options={{
//           header: (props) => (
//             <NavHeader {...props} leftIcon="back" center="Report submission" />
//           ),
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export const HomeStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={AppRoute.HOME}
//         component={Home}
//         options={{
//           headerTitle: (props) => (
//             <Text style={{fontSize: 18}}>{AppRoute.HOME}</Text>
//           ),
//           headerTitleAlign: 'center',
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export const ProfileStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={AppRoute.PROFILE}
//         component={Profile}
//         options={{
//           headerTitle: (props) => (
//             <Text style={{fontSize: 18}}>{AppRoute.PROFILE}</Text>
//           ),
//           headerTitleAlign: 'center',
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

// export const AboutStackScreen = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name={AppRoute.ABOUT}
//         component={About}
//         options={{
//           headerTitle: (props) => (
//             <Text style={{fontSize: 18}}>{AppRoute.ABOUT}</Text>
//           ),
//           headerTitleAlign: 'center',
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
