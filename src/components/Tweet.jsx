import ProfileImage from "./ProfileImage";
import User from "./User";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet(props) {
  console.log(props);
  return (
    <div className="tweet">
      <ProfileImage tweet = {props.tweet}/>

      <div className="body">
        <div className="top">
          <User tweet = {props.tweet}/>

          <Timestamp tweet = {props.tweet}/>
        </div>

        <Message tweet = {props.tweet}/>

        <Actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
