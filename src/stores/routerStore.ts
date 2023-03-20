import { observable, computed, action } from "mobx";

export default class RouterStore {
    @observable routes = [];

    @computed get GET_ROUTES() {
        return this.routes;
    }

    @action addRoute(route: any) {
        this.routes = route
    }
}