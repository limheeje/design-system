/*eslint no-useless-escape: "off"*/
const RegExp = Object.freeze({
  // 한글
  kor: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  // 영문만 체크
  en: /[a-zA-Z]/,
  // 숫자
  num: /[^0-9]/,
  // 특수문자만 체크
  special: /[~`'"*+!@#$%^&()_={}[\]:;,.<>\\/?|-]/,
  // 영문 대문자 + 숫자
  engLargeNum: /[^A-Z0-9]/,
  // 영문 대소문자 + 숫자
  engLargeSmallNum: /[^a-zA-Z0-9]/,
  // 영문 대문자 + 숫자 _ 언더바
  engLargeNumUnderbar: /[^A-Z0-9_]/,
  // 영문 + 숫자 + 한글
  engNumKor: /[^a-zA-Z0-9|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/,
  // 이메일주소 : 영문 대소문자 + 숫자 + 특수문자(-,_,@,.)
  engLargeSmallNumSpecial: /^((?=.*[A-Za-z])(?=.*[0-9])(?=.*[~!@#$^*()_-])[A-Za-z0-9~!@#$^*()_-])/,
  // 기안번호 : 영문 대소문자 + 특수문자(-만 허용)
  engLargeSmallNumSpecialCustom: /[^a-zA-Z0-9-]/,
  // 영문 대소문자+숫자+특수문자
  engLargeSmallNumberSpecialText: /[^A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?/~`\-='"]+/g,
  // 이메일주소
  email: /^[A-Za-z0-9_\\.\\-]+@[A-Za-z0-9\\-]+\.[A-Za-z0-9\\-]+/,
  // 영문 대소문자 + 숫자 + 특수문자(-, _, @, .)
  engLargeSmallNumFourSpecial: /[^A-Za-z0-9.@_-]/,
  // String.replace() 한글빼고 다 삭제
  korReplace: /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g,
  // String.replace() 영문빼고 다 삭제
  enReplace: /[^a-zA-Z]/g,
  // String.replace() 숫자빼고 다 삭제
  numReplace: /[^0-9]/g,
  // String.replace() 입력필드에서의 type=Number 값빼고 다 삭제
  numInputReplace: /[^0-9.-]/g,
  // String.replace() 한글+특수문자빼고 다 삭제
  korSpecialReplace: /[^ㄱ-ㅎ|ㅏ-ㅣ|가-힣~`'"*+!@#$%^&()_={}[\]:;,.<>\\/?|-]/g,
  // String.replace() 영문+특수문자빼고 다 삭제
  enSpecialReplace: /[^a-zA-Z~`'"*+!@#$%^&()_={}[\]:;,.<>\\/?|-]/g,
  testFileAcceptDocument:
    /^application\/(pdf|msword|vnd\.ms-excel|vnd\.openxmlformats-officedocument\.(wordprocessingml|spreadsheetml|presentationml)\.document)$|^text\/plain$|^application\/json$/,
  testFileAcceptImage: /^image\/(jpeg|png|gif|bmp|svg\+xml)$/,
  testFileAcceptText: /^text\/.+$|^application\/(json|xml)$/,
  testFileAcceptVideo: /^video\/.+$/,
  testFileAcceptAudio: /^audio\/.+$/,
  testFileAcceptZip: /^application\/(zip|x-rar-compressed|x-7z-compressed)$/
})

export default RegExp
