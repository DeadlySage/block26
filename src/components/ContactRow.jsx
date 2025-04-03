export default function ContactRow({ setSelectedContactId, contact }) {
  
  return (
    <tr onClick={() => {
      setSelectedContactId(contact.id);
    }}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
}
