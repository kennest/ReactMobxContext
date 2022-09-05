import { observable, decorate, action } from "mobx";
import { createContext } from "react";
import AuthService from "../services/AuthService";

class AuthStore {
    auth = false;
    loading = false;
    data = null;

    doLogin = async () => {
        this.loading = true;
        await AuthService.attemptToLogin().then((value) => {
            console.log("Data Fetched...");
            console.table(value);
            this.auth = true;
            this.loading = false;
            this.data = value;
        }).catch(() => {
            this.auth = false;
            this.loading = false;
        });
        this.loading = false;
    };
    doGetComments = async () => {
        this.loading = true;
        await AuthService.getUserComments().then((value) => {
            this.auth = true;
            this.loading = false;
            this.data = value;
        }).catch(() => {
            this.auth = false;
            this.loading = false;
        });
        this.loading = false;
    };
}

decorate(AuthStore, {
    auth: observable,
    loading: observable,
    data: observable,
    doLogin: action,
    doGetComments: action
});

/* Combine Mobx state+actions with context API */
const AuthContext = createContext(new AuthStore()); // Instanciate the store is MUST
AuthContext.displayName = "AuthContext"; // Just give a better name to debug

export default AuthContext;