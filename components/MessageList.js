import React from 'react'

const DUMMY_DATA = [
    {
        senderId: 'daniel',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great!  How about you?'
    },
    {
        senderId: 'daniel',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div>{message.text}</div>
                    )
                })
                    /* <div className="help-text">MessageList</div> */}
            </div>
        )
    }
}