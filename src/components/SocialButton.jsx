export function SocialButton({icon}) {
  return (
      <button className="btn btn-lg btn-light rounded-circle m-2 border-black pt-1" style={{width: "3em", height: "3em"}}>
        {icon}
      </button>
  );
}
