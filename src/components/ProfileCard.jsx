const ProfileCard = ({photo, name, job, bio}) => {
  return (
    <div style={{ 
        width:"240px",
        background:"white",
        margin:"10px 0",
        padding:"20px",
        borderRadius:"15px",
        boxShadow:"0 0 3px #e5e5e5"
     }}>
      <img src={photo} alt="" style={{ borderRadius:"50%", width:"100%", border:"4px solid black" }}/>
      <h3 style={{ color:"black", margin:"5px 0", fontWeight:"bold", fontSize:"20px" }}>{name}</h3>
      <p style={{ color:"black", fontSize:"14px", marginBottom:"10px" }}>{job}</p>
      <p style={{ color:"black", fontSize:"14px", marginBottom:"15px" }}>{bio}</p>
      <button>Follow</button>
    </div>
  )
}

export default ProfileCard
