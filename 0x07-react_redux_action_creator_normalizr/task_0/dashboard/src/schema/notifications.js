import * as notificationItem from "../../notifications.json";

export const getAllNotificationsByUser = (userId) => {
  return notificationItem.default
    .filter((notification) => notification.author.id === userId)
    .map(({ context }) => context);
};