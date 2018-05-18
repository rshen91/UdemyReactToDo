var React = require('react');
var moment = require('moment');

var ToDo = React.createClass({

    render: function() {
        var {id, text, completed, createdAt, completedAt} = this.props;
        var renderDate = () => {
            var message = 'Created :';
            var timestamp = createdAt;

            if (completed) {
                message = 'Completed: ';
                timestamp = completedAt;
            }
            return message + moment.unix(timestamp).format('MMM Do YYYY @ h:mm a');
        };
        return (
            <div onClick={() => {
                this.props.onToggle(id);
            }}>
                <input type="checkbox" checked={completed}/>
                <h4>{text}</h4>
                <p>{renderDate()}</p>
            </div>
        )
    }
})

module.exports = ToDo;