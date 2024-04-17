import React, { useState } from 'react';

const HomePage = () => {
    const [items, setItems] = useState([
        { id: 1, checked: true, name: 'Athi', regno: 17 },
        { id: 2, checked: false, name: 'AS', regno: 15 }
    ]);

    const changeCheckbox = (id) => {
        const updatedItems = items.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(updatedItems);
    };

    return (
        <div>
            <h1>Items List:</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <input type='checkbox' checked={item.checked} onChange={() => changeCheckbox(item.id)} />
                        {item.name} : {item.regno}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
