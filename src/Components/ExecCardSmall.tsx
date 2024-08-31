

interface Props{
    imgURL: string,
    name: string,
    subname: string,
    desc: string,
}

function ExecCardSmall({imgURL, name, subname, desc}: Props){
    return (<>
    <div className="small-card">
      <div className="profile-pic">
        <img src={imgURL} />
      </div>
      <div className="bottom">
        <div className="content">
          <span className="name ">{name}<br/>{subname}</span>
          <span className="about-me show-hover">
            {desc}
          </span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container"></div>
        </div>
      </div>
    </div>

    </>)
}

export default ExecCardSmall;