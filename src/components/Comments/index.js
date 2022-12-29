import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [comment, setComment] = useState('')

  const [List, setList] = useState([])

  const onAddButton = event => {
    event.preventDefault()

    const newComment = {
      id: uuidv4(),
      name,
      comment,
    }
    setName('')
    setComment('')
    setList(prevList => [...prevList, newComment])
  }

  const changeComment = event => {
    setComment(event.target.value)
  }

  const changeName = event => {
    setName(event.target.value)
  }

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onAddButton}>
        <NameInput
          onChange={changeName}
          type="text"
          placeholder="Your name"
          value={name}
        />
        <CommentTextInput
          onChange={changeComment}
          value={comment}
          placeholder="Your comment"
          rows="6"
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {List.map(eachItem => (
          <CommentItem key={eachItem.id} commentDetails={eachItem} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
