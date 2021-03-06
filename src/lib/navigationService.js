let _navigator;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function navigate(routeName, params) {
  _navigator.navigate(routeName, params);
}

function reset(routeName, params) {
  _navigator.reset({
    index: 0,
    routes: [
      {
        name: routeName,
        params,
      },
    ],
  });
}
function goBack() {
  _navigator.goBack();
}

export default {
  setTopLevelNavigator,
  navigate,
  reset,
  goBack,
};
