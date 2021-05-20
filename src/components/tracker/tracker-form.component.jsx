import React from 'react';

import './tracker-form.styles.scss';

class Tracker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: '',
            subtopic: '',
            title: '',
            composer: '',
            notes: ''
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({ topic: '', subtopic: '', title: '', composer: '', notes: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };


    render() {
        return (
            <div className='tracker'>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="topic"
                        type="topic"
                        value={this.state.topic}
                        onChange={this.handleChange}
                    />
                    <label>Topic</label>
                    <input
                        name="subtopic"
                        type="subtopic"
                        value={this.state.subtopic}
                        onChange={this.handleChange}
                    />
                    <label>Subtopic</label>
                    <input
                        name="title"
                        type="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                    />
                    <label>Title</label>
                    <input
                        name="composer"
                        type="composer"
                        value={this.state.composer}
                        onChange={this.handleChange}
                    />
                    <label>Composer</label>
                    <input
                        name="notes"
                        type="notes"
                        value={this.state.notes}
                        onChange={this.handleChange}
                    />
                    <label>Notes</label>

                    <input type='submit' value='Submit Form' />
                </form>
            </div>
        );
    }
}
export default Tracker;