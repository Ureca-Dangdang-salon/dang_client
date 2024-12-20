import { apiClient } from './apiClient';
import { AuthController } from './requestUrls';

export const join = async (role, district_id) => {
  try {
    const { data } = await apiClient.post(AuthController.join, {
      role: role,
      districtId: district_id,
    });
    return data.response === '회원가입에 성공했습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const tokenRefresh = async () => {
  try {
    const { data } = await apiClient.post(AuthController.refresh);
    return data.response === '액세스 토큰 갱신에 성공했습니다.';
  } catch (e) {
    console.error(e);
    return false;
  }
};

export const loginCheck = async () => {
  try {
    const { data } = await apiClient.get(AuthController.checkLogin);
    if (data.response === '로그인이 되어있지 않습니다.') return false;
    return data.response;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const logout = async () => {
  try {
    const { data } = await apiClient.post(AuthController.logout);
    if (data.response === '로그아웃에 성공했습니다.') {
      return true;
    } else return false;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deleteAccount = async () => {
  try {
    const { data } = await apiClient.delete(AuthController.deleteAccount);
    return data.response === '회원탈퇴에 성공했습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};
