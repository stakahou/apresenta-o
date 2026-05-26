import { makeAutoObservable } from "mobx";
import CommonStore from "./CommonStore";

export class RootStore {
  commonStore: CommonStore;

  constructor() {
    this.commonStore = new CommonStore(this);
    makeAutoObservable(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
