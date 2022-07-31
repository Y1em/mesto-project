import { inputName, inputAbout } from "./constants.js";

export function fillProfileInputs(dataUser) {
  inputName.value = dataUser.name;
  inputAbout.value = dataUser.about;
}
