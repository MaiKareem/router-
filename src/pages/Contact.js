import { Link, useParams } from "react-router-dom";

function Contact() {
  const { id } = useParams();
  return (
    <div>
      <h3> this is contact page</h3>
      <Link to={"/details/" + id}> Go to details </Link>
    </div>
  );
}
export default Contact;
