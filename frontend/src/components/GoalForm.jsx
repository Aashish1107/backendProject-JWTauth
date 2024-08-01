import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'

function GoalForm() {
  const [title, setTitle] = useState('')
  const [upload,setUpload]= useState(null)
  const [targetgender, setTargetgender] = useState('')
  const [loc, setLoc] = useState('')
  const [agegroup, setAgegroup] = useState('')
  const [desc, setDesc]=useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createGoal( {title,upload,targetgender,loc,agegroup,desc} ))
    setTitle('')
    setUpload(null)
    setTargetgender('')
    setLoc('')
    setAgegroup('')
    setDesc('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Upload Image/Video</label>
          <input 
            type='file'
            name='upload'
            id='upload'
            value={upload}
            onChange={(e)=>setUpload(e.target.value)}
            required
          />
          <input
            type='text'
            name='title'
            id='title'
            value={title}
            placeholder='Title'
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            type='text'
            name='targetgender'
            id='targetgender'
            value={targetgender}
            placeholder='Target Gender'
            onChange={(e) => setTargetgender(e.target.value)}
          />
          <input
            type='text'
            name='loc'
            id='loc'
            value={loc}
            placeholder='Location'
            onChange={(e) => setLoc(e.target.value)}
          />
          <input
            type='text'
            name='agegroup'
            id='agegroup'
            value={agegroup}
            placeholder='Age Group'
            onChange={(e) => setAgegroup(e.target.value)}
          />
          <input
            type='text'
            name='desc'
            id='desc'
            value={desc}
            placeholder='Description'
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Advertisement
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
