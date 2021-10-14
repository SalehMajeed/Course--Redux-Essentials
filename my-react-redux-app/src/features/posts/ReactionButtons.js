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

	const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
		console.log(post);
		console.log(post.id);
		console.log(post.reactions);
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
