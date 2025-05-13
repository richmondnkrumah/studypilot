import React from 'react'

type Props = {}

const ChatView = (props: Props) => {
  return (
    <div className='py-3 px-5 flex flex-col gap-5'>
      <div className='grow'></div>
      <div>
        <div>
          <input type="search" name="" placeholder='Enter to send ' id="" />
        </div>
      </div>
    </div>
  )
}

export default ChatView