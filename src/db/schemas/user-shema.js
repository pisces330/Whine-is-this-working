import { Schema } from "mongoose";

const UserSchema = new Schema({
  //사용자 이름
  name: {
    type: String,
    required: true,
  },
  //이메일
  email: {
    type: String,
    required: true,
  },
  //사용자 비밀번호
  password: {
    type: String,
    required: true,
  },
  //사용자 주소
  address: {
    type: String,
    required: true,
  },
  //우편번호
  postalCode: {
    type: String,
    required: true,
  },
  //전화번호
  phoneNumber: {
    type: String,
    required: true,
  },
  //권한 설정, 기본값은 user , 관리자는 임의로 DB에 직접 ADD DATA 해야합니다.
  role: {
    type: String,
    required: false,
    default: "user",
  },
});

export { UserSchema };
