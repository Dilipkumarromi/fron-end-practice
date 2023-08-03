import CryptoJS from "crypto-js";
const key = process.env.REACT_APP_CODE_SECRET;
const encrypt = (encryptedData) => {
  // Encrypt
  var ciphertext = encodeURIComponent(CryptoJS.AES.encrypt(encryptedData.toString(), key).toString())
  return ciphertext;
};

const decrypt = (decrypt) => {
  const bytes = CryptoJS.AES.decrypt(decrypt, key);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(originalText);
  return originalText;
};
const encryptData = { encrypt, decrypt };
export default encryptData;
