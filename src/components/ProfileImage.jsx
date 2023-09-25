function ProfilePicture (props) {
    return (
        <img
        src={props.tweet.user.image}
        className="profile"
        alt="profile"
      />
    );
  }
   
  export default ProfilePicture;