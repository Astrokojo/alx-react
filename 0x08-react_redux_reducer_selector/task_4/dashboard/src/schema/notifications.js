import * as notificationsItem from '../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define schema entities
const user = new schema.Entity('users');

const message = new schema.Entity(
  'messages',
  {},
  {
    idAttribute: 'guid',
  }
);

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

// Normalize the notifications data
const normalizedData = normalize(notificationsItem.default, [notification]);

// Function to get all notifications by user
export const getAllNotificationsByUser = (userId) => {
  const notifications = normalizedData.entities.notifications;
  const messages = normalizedData.entities.messages;
  const notificationsByUser = [];

  // Iterate through notifications and filter by userId
  for (const property in notifications) {
    if (notifications[property].author === userId) {
      notificationsByUser.push(messages[notifications[property].context]);
    }
  }

  return notificationsByUser;
};

export { normalizedData };
