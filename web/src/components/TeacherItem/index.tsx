import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img
                    src="https://scontent.fcgh7-1.fna.fbcdn.net/v/t1.0-9/100610479_2939619942798507_8764283377722327040_o.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=W8ydvoocDScAX98nPn0&_nc_ht=scontent.fcgh7-1.fna&oh=814fa6844c2e6b1a0b2914dbac74f32e&oe=5F50BA2E"
                    alt="Jacqueline Teixeira"
                />
                <div>
                    <strong>Jacqueline Teixeira</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /> <br />
                Apaixonada por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
