export const selectIsLoggedIn = (state : any) => state.userAuth.isLoggedIn;
export const selectUser = (state: any) => {
    return { 
        username : state.userAuth.userName,
        email: state.userAuth.email
    }
}