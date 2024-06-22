import * as notificationItem from "../../notifications.json";
import { normalize, schema } from 'normalizr';


// Define the users schema
const user = new schema.Entity('users');

// Define the message schema
const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

// Define the notification schema
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

// Normalize the data
export const normalizedData = normalize(notificationItem.default, [notification])

// Function to get all notifications by user ID
export const getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context);
};