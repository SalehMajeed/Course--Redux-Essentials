import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchNotifications, selectAllNotifications } from '../features/notifications/notificationsSlice';

export const Navbar = () => {
	const dispatch = useDispatch();
	const notifications = useSelector(selectAllNotifications);
	const numUnreadNotification = notifications.filter(n => !n.read).length;

	let numUnreadNotificationBadge;
	if (numUnreadNotification > 0) {
		numUnreadNotificationBadge = <span className='badge'> {numUnreadNotification}</span>;
	}

	const fetchNewNotifications = () => {
		dispatch(fetchNotifications());
	};
	return (
		<nav>
			<section>
				<h1>Redux Essentials Example</h1>
				<div className='navContent'>
					<div className='navLinks'>
						<Link to='/'>Posts</Link>
						<Link to='/users'>Users</Link>
						<Link to='/notifications'>Notifications{numUnreadNotificationBadge}</Link>
					</div>
					<button className='button' onClick={fetchNewNotifications}>
						Refresh Notifications
					</button>
				</div>
			</section>
		</nav>
	);
};
