type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div>
      {props.isLoggedIn ? (
        <p>
          Welcome {props.name}! You have {messageCount} unread messages
        </p>
      ) : (
        <p>Welcome Guest</p>
      )}
      .
    </div>
  );
}

export default Greet;
