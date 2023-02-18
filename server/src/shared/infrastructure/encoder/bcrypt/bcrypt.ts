import { genSalt, hash as _hash, compare } from "bcrypt";
import { Encoder } from "../../../domain/encoder";

export function defineBcryptEncoder(): Encoder {
  return {
    async hash(str) {
      const salt = await genSalt();

      return _hash(str, salt);
    },

    async compare(str, hash) {
      return await compare(str, hash);
    },
  };
}
