import React from 'react';

import Post from '../Post/Post.component.jsx';

class PostList extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Vitória ',
          avatar: 'https://i.pravatar.cc/150?img=10'
        },
        date: '04 Jan 2020',
        content:'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.',
        comments: [
          {
            id: 2,
            author: {
              name: 'David Santos',
              avatar: 'https://i.pravatar.cc/150?img=15'
            },
            date: '04 Jan 2019',
            content:
            'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.'
          }
        ]
      },
      {
        id: 3,
        author: {
          name: 'Guilherme Silva',
          avatar: 'https://i.pravatar.cc/150?img=8'
        },
        date: '04 Jan 2020',
        content:
        'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=2'
            },
            date: '04 Jan 2020',
            content:
              'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=17'
            },
            date: '04 Jan 2020',
            content:
              'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.'
          }
        ]
      },
      {
        id: 6,
        author: {
          name: 'Gabriel Lisboa',
          avatar: 'https://i.pravatar.cc/150?img=4'
        },
        date: '05 Jan 2020',
        content:
        'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.',
        comments: [
          {
            id: 4,
            author: {
              name: 'Clara Oliveira',
              avatar: 'https://i.pravatar.cc/150?img=5'
            },
            date: '05 Jan 2020',
            content:
            'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.'
          },
          {
            id: 5,
            author: {
              name: 'Cézar Toledo',
              avatar: 'https://i.pravatar.cc/150?img=17'
            },
            date: '05 Jan 2020',
            content:
            'Lorem ipsum dolor sit amet consectetur veritatis? Est, autem ex.'
          }
        ]
      }
    ]
  }

  render() {
    const posts = this.state.posts;

    return (
      <div className="post-list">
        { posts.map(post => <Post key={post.id} data={post}/>) }
      </div>
    )
  }
}

export default PostList;