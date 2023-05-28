import React from 'react'
import { BsFacebook,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import './Curriculum.css'

export default function Curriculum (){
    return(
    <div>
         <img src="/foto24.jpg" alt="Foto Curriculum Vitae" />
    <section>
        <article>
            <h2>Datos Personales</h2>
            <img src="/kevin.jpg" alt="Foto Curriculum Vitae" />
            <dl>
                <dt>Nombre</dt>
                    <dd>kevin aimar</dd>
                <dt>Apellidos</dt>
                    <dd>Acuña Paredes</dd>
                <dt>Dirección</dt>
                    <dd>26 b calle murcia <br/> Almería, 04600 </dd>
                <dt>Teléfono</dt>
                    <dd>635858899</dd>
                <dt>Correo electrónico</dt>
                    <dd>kevin.acupar18@gmail.com</dd>
            </dl>
        </article>
        <article>
            <h2>Formación Académica</h2>
            <ul>
                    <li>tecnico de administracion de redes</li>            
            </ul>
        </article>
        <article>
            <h2>Experiencia Laboral</h2>
            <ol>
                <li>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia quae dicta odio error, dolorum impedit totam quam aspernatur adipisci libero corporis. Corrupti earum molestias excepturi sed consequuntur maiores qui dignissimos!
                </li>
            </ol>
        </article>
        <article>
            <h2>Otros Datos de Interés</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, alias corrupti expedita nemo officiis qui amet doloremque provident! Quibusdam architecto nihil voluptatibus dolores consectetur in doloremque. Atque velit et quaerat!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ducimus sed facere voluptatum soluta, illum fugiat earum ratione vel placeat sequi ea, fugit eos aspernatur officiis nihil perferendis consequuntur voluptate.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam delectus repellat asperiores quos architecto porro error. Ea quis possimus porro aperiam obcaecati dicta, exercitationem assumenda eum eaque qui ratione cupiditate.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, unde. Quas assumenda quisquam magni ullam porro nemo doloremque nihil laboriosam magnam nesciunt? Sequi quo repellat veritatis beatae, explicabo corporis eligendi.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel asperiores error pariatur explicabo, et iste aliquam, aspernatur dolorem eligendi quia, consequuntur mollitia perferendis maxime. Molestiae, sunt. Voluptatem exercitationem provident commodi!</p>
        </article>
    </section>
    <footer>
        <hr/>
        <a href="https://www.facebook.com/"><BsFacebook/></a>
        <a href="https://www.instagram.com/"><BsInstagram/></a>
        <a href="https://twitter.com/"><BsTwitter/></a>
        <a href="https://www.youtube.com/"><BsYoutube/></a>
    </footer>
    </div>
    );
}