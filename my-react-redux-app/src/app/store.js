import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from '../features/notifications/notificationsSlice';
import postsReducer from '../features/posts/postSlice';
import userReducer from '../features/users/userSlice';

export default configureStore({
	reducer: {
		posts: postsReducer,
		users: userReducer,
		notifications: notificationsReducer,
	},
});
