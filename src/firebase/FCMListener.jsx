import { onMessage } from 'firebase/messaging';
import { messaging } from '@/firebase/firebase';
import { useEffect } from 'react';

export const FCMListener = () => {
  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      console.log('Foreground message received:', payload);
    });

    return () => unsubscribe();
  }, []);

  return null;
};
