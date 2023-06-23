// @ts-ignore
export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;
// @ts-ignore
export const selectUser = (state) => {
    return { 
        username : state.userAuth.userName,
        email: state.userAuth.email
    }
}
// @ts-ignore
export const selectLoginErrorMessage = (state) => state.userAuth.errorMessage;