import { makeAutoObservable } from "mobx";
import type { RootStore } from "./RootStore";

class CommonStore {
  private readonly rootStore: RootStore;

  test = "I am a test string from CommonStore!";

  constructor(rootStore: RootStore) {
    this.rootStore! = rootStore;
    makeAutoObservable(this);
  }
}

export default CommonStore;
