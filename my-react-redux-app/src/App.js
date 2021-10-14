import React from 'react';
import './App.css';
import { AddPostForm } from './features/posts/AddPostForm';
import { EditPostForm } from './features/posts/EditPostForm';
import { PostsList } from './features/posts/PostsList';
import { SinglePostPage } from './features/posts/SinglePostPage';
// import Counter from './component/counter';

function App() {
	return (
		<div className='App'>
			{/* Centralized State for child Components */}
			{/* <Counter initialInputValue={2} /> */}
			<React.Fragment>
				<SinglePostPage match={{ params: { postId: 1 } }} />
				<EditPostForm match={{ params: { postID: 1 } }} />
				<AddPostForm />
				<PostsList />
			</React.Fragment>
		</div>
	);
}

export default App;
