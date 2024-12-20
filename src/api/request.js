import { apiClient } from './apiClient';
import { RequestController } from './requestUrls';

export const getDogProfiles = async () => {
  try {
    const { data } = await apiClient.get(
      RequestController.estimateRequest + '/dogprofiles'
    );
    return data.response;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const postRequest = async (requestInfo) => {
  try {
    const { data } = await apiClient.post(
      RequestController.estimateRequest,
      requestInfo
    );
    return data.response === '견적 요청 등록에 성공하였습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getRequest = async (groomerProfileId) => {
  try {
    const { data } = await apiClient.get(
      RequestController.estimateRequest + `/${groomerProfileId}`
    );
    return data.response;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getRequestDetail = async (requestId) => {
  try {
    const { data } = await apiClient.get(
      RequestController.estimateRequest + `/detail/${requestId}`
    );
    return data.response;
  } catch (e) {
    console.log(e);
    return false;
  }
};
