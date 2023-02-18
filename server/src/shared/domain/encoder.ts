export interface Encoder {
  hash(str: string): Promise<string>;
  compare(str: string, hash: string): Promise<string>;
}
