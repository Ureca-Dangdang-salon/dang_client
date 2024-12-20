import { apiClient } from './apiClient';
import { NotificationController } from './requestUrls';

export const postFcmToken = async (token) => {
  try {
    const { data } = await apiClient.post(NotificationController.fcmToken, {
      fcmToken: token,
    });
    return data.response === 'FCM 토큰이 성공적으로 등록되었습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const getNotification = async () => {
  try {
    const { data } = await apiClient.get(
      NotificationController.getNotification
    );
    return data.response;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const updateSetting = async (enabled) => {
  try {
    const { data } = await apiClient.post(
      `${NotificationController.updateSetting}/${enabled}`
    );
    return data.response === '알림 설정이 업데이트 되었습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const markAsRead = async (id) => {
  try {
    const { data } = await apiClient.post(
      `${NotificationController.markRead}${id}`
    );
    return data.response === '알림이 성공적으로 읽음 처리되었습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const unreadCount = async () => {
  try {
    const { data } = await apiClient.get(NotificationController.unreadCount);
    return data.response;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const deleteAll = async () => {
  try {
    const { data } = await apiClient.post(NotificationController.markAllRead);
    return data.response === '모든 알림이 읽음 처리되었습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const subscribeTopic = async (token, topic) => {
  try {
    const { data } = await apiClient.post(NotificationController.subscribe, {
      fcmToken: token,
      topic: topic,
    });
    return data.response === '성공적으로 구독되었습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const unsubscribeTopic = async (token, topic) => {
  try {
    const { data } = await apiClient.post(NotificationController.unsubscribe, {
      fcmToken: token,
      topic: topic,
    });
    console.log(data.response);
    return data.response === '구독이 해제되었습니다.';
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const isSubscribed = async (topic) => {
  try {
    const { data } = await apiClient.get(
      `${NotificationController.isSubscribed}${topic}`
    );
    return data.response;
  } catch (e) {
    console.log(e);
    return false;
  }
};
