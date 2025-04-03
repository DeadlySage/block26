import { useEffect, useState } from "react";
import ContactRow from "./ContactRow";

const URL = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

export default function ContactList({ setSelectedContactId }) {
  // store dummy contacts
  const [contacts, setContacts] = useState(dummyContacts);

  console.log("Contacts: ", contacts);

  useEffect(() => {
    async function fetchContacts() {
      try {
        // crud get function
        const response = await fetch(URL);

        // wait from response from external API and parse with json
        const result = await response.json();

        setContacts(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  return (
    <table className="card table table-striped ">
      <thead>
        <tr>
          <h3 className="text-center" colSpan="3">Contact List</h3>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Name</strong></td>
          <td><strong>Email</strong></td>
          <td><strong>Phone</strong></td>
        </tr>
        {contacts.map((contact) => {
          return <ContactRow setSelectedContactId={setSelectedContactId} key={contact.id} contact={contact} />;
        })}
      </tbody>
    </table>
  );
}
