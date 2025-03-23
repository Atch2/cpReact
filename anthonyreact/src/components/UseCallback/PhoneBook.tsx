// objetivo: se utiliza para memoriza una instancia de una función
// hace que un hijo no renderice
//
// Ejemplo:
// Supongamos que tenés un número de teléfono al que llamas con frecuancia.
// En vez de marcarlo continuamente lo vamos a almacenar en los contactos del teléfono
// A menos que el número cambie siempre utilizo el mismo teléfono.

import { memo, useCallback, useState } from "react";

interface Contact {
  id: number;
  name: string;
  phone: string;
}

interface ContactProps {
  contact: Contact;
  onCall: (phone: string) => void;
}

const ContactCard = memo(({ contact, onCall }: ContactProps) => {
  console.log(`Renderizando hijo contacto ${contact.name}`);

  return (
    <div>
      <h3>{contact.name}</h3>
      <p>Teléfono: {contact.phone}</p>
      <button onClick={() => onCall(contact.name)}>Llamar</button>
    </div>
  );
});

export const PhoneBook = () => {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: 1,
      name: "Paola",
      phone: "123-456-0987",
    },
    {
      id: 2,
      name: "Anthony",
      phone: "756-456-7564",
    },
    {
      id: 3,
      name: "Mateo",
      phone: "986-456-6563",
    },
  ]);

  const [log, setLog] = useState<string>("");

  const makeCall = useCallback(
    (name: string) => setLog(`Llamando al ${name}`),
    [],
  );

  const addContact = () => {
    const newContact = {
      id: contacts.length + 1,
      name: `Contacto ${contacts.length + 1}`,
      phone: `${Math.floor(100000000000 + Math.random() * 90000000000)}`,
    };

    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h2>Agenda de Contacto</h2>
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} onCall={makeCall} />
      ))}
      <button onClick={addContact}>Agregar Contacto</button>
      <p>{log}</p>
    </div>
  );
};
