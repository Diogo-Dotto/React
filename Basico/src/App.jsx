import { Component } from "react"

export default class App extends Component {
    state = {
        counter: 0,
        posts: [
            {
                id: 1,
                title: 'O Título 1',
                body: 'O corpo 1'
            },
            {
                id: 2,
                title: 'O Título 2',
                body: 'O corpo 2'
            },
            {
                id: 3,
                title: 'O Título 3',
                body: 'O corpo 3'
            },
        ]
    };

    timeOutUpdate = null;

    componentDidMount() {
        this.handleTimeOut();
    };

    componentDidUpdate() {
        this.handleTimeOut();
    }

    componentWillUnmount() {
        clearTimeout(this.timeOutUpdate)
    }

    handleTimeOut = () => {
        const { posts, counter } = this.state;
        posts[0].title = 'O título mudou';

        this.timeOutUpdate = setTimeout(() => {
            this.setState({ posts, counter: counter + 1 })
        }, 1000);
    };

    render() {
        const { posts, counter } = this.state;

        return (
            <div className="App">
                <h1>{counter}</h1>
                {posts.map(post => (
                    <div key={post.id}>
                        <h1 >{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        )
    };
};