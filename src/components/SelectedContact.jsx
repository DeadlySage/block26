import { useEffect, useState } from "react";

const URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

export default function SelectedContact({
  SelectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);

  console.log("Contact: ", contact);

  useEffect(() => {
    async function fetchContacts() {
      try {
        // crud get function
        const response = await fetch(`${URL}/${SelectedContactId}`);

        // wait from response from external API and parse with json
        const result = await response.json();

        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <div>
      {contact && (
        <div className="card text-start ">
          <h5 className="card-header">{contact.name}</h5>
          <div className="card-body">
            <h5 className="card-title">@{contact.username}</h5>
            <p className="card-text">
              <strong>Email:</strong> {contact.email}
            </p>
            <p className="card-text">
              <strong>Phone:</strong> {contact.phone}
            </p>
            <p className="card-text">
              <strong>Website:</strong> {contact.website}
            </p>
            <p className="card-text">
              <strong>Address:</strong>
              <br /> {contact.address.street}, {contact.address.suite} <br />{" "}
              {contact.address.city}, {contact.address.zipcode},<br />
              "{contact.address.geo.lat}","{contact.address.geo.lng}"
            </p>
            <p className="card-text">
              <strong>Company:<br /></strong> <strong>{contact.company.name}</strong><br />
              <span>{contact.company.catchPhrase}</span><br />
              <span>{contact.company.bs}</span>
            </p>
            
            <button type="button" className="btn btn-primary" onClick={() => setSelectedContactId(null)}>
              Go Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
