const Birthday = (props) => {
    const {img,names}=props;
  return (
    <>
      <div className='main_div'>
            <img src={img} alt="this is a pic" />
            <b>{names}</b>
        </div>
    </>
  )
}

export default Birthday;