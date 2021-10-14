import React from 'react';
import { useDispatch } from 'react-redux';
import { reactionAdded } from './postSlice';

const reactionEmoji = {
	thumbsUp: '👍',
	hooray: '🎉',
	heart: '❤️',
	rocket: '🚀',
	eyes: '👀',
};

export const ReactionButtons = ({ post }) => {
	const dispatch = useDispatch();
	console.log(post);

	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		console.log(name);
		return (
			<button
				key={name}
				type='button'
				className='muted-button reaction-button'
				onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}>
				{emoji} {post.reactions[name]}
			</button>
		);
	});

	return <div>{reactionButtons}</div>;
};
