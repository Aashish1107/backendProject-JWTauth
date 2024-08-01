import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal } from '../features/goals/goalSlice'
import axios from 'axios'

function GoalForm() {
  const [title, setTitle] = useState('')
  const [img, setImg] = useState(null)
  const [upload,setUpload]= useState(null)
  const [targetgender, setTargetgender] = useState('')
  const [loc, setLoc] = useState('')
  const [agegroup, setAgegroup] = useState('')
  const [desc, setDesc]=useState('')

  const dispatch = useDispatch()

  const uploadFile = async(type) =>{
    const data= new FormData();
    data.append("file", type === 'image' ? 'image' : 'video');
    data.append("upload_preset", type === 'image'? 'image_preset': 'video_preset');
    data.append("api_key", process.env.CLOUDINARY_API_KEY);

    try{
      let cloudName= 'dhotvxifv';
      let resourceType = type === 'image' ? 'image' : 'video';
      let api = 'https://api.cloudinary.com/v1_1/'+cloudName+'/'+resourceType+'/upload';

      const res = await axios.post(api, data);
      const {secure_url}= res.data;
      return {secure_url}
      
    } catch (error){
      console.log(error);
    } 
  }

  const onSubmit = async(e) => {
    e.preventDefault()
    const imgUrl=await uploadFile('image');
    const videoUrl= await uploadFile('video');
    //dispatch(createGoal( {title,imgUrl,videoUrl,targetgender,loc,agegroup,desc} ))
    setTitle('')
    setUpload(null)
    setImg(null)
    setTargetgender('')
    setLoc('')
    setAgegroup('')
    setDesc('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Upload Video</label>
          <input 
            type='file'
            name='upload'
            id='upload'
            accept="video/*"
            onChange={(e)=>setUpload((prev)=>e.target.files[0])}
          />
          <label htmlFor='text'>Upload Image</label>
          <input 
            type='file'
            name='img'
            id='img'
            accept="image/*"
            onChange={(e)=>setImg((prev)=>e.target.files[0])}
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
