import React from 'react'
import FotoPersonal from '/FotoPersonal.png'
import FotoVitae from '/Curriculum-Vitae.jpg';
import { BsFacebook,BsInstagram,BsTwitter,BsYoutube } from "react-icons/bs";
import './Curriculum.css'

export default function Curriculum (){
    return(
    <div>
        <img src={FotoVitae} alt="Foto Curriculum Vitae" />
    <section>
        <article>
            <h2>Datos Personales</h2>
            <img src={FotoPersonal} alt="Foto Personal" />
            <dl>
                <dt>Nombre</dt>
                    <dd>Luis Fernando</dd>
                <dt>Apellidos</dt>
                    <dd>Valverde Cárdenas</dd>
                <dt>Dirección</dt>
                    <dd>12, Sevilla <br/> Almería, Pulpí 04640 </dd>
                <dt>Teléfono</dt>
                    <dd>693805625</dd>
                <dt>Correo electrónico</dt>
                    <dd>luisfer998845@gmail.com</dd>
            </dl>
        </article>
        <article>
            <h2>Formación Académica</h2>
            <ul>
                <li>
                    <strong>Técnico en Sistemas Microinformáticos y Redes. </strong> <br/>
                    IES MAR SERENA, Pulpí: <br/>
                    Septiembre 2020 – Junio 2022
                </li>
                <li>
                    <strong> Online sobre Cybersecurity Essentials. </strong> <br/>
                    Impartido por Cisco Networking Academy <br/>
                    45 horas 
                </li>
                <li>
                    <strong>Curso Online sobre NDG Linux Essentials</strong> <br/>
                    Impartido por Cisco Networking Academy <br/>
                    80 horas
                </li>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, inventore temporibus. Quisquam porro numquam est atque eos quae mollitia doloribus, vel deleniti, saepe explicabo quo nesciunt nihil quas corporis recusandae.</li>
            </ul>
        </article>
        <article>
            <h2>Experiencia Laboral</h2>
            <ol>
                <li>
                    <strong>Prácticas FCT (Técnico en Sistemas Microinformáticos y Redes)</strong> <br/>
                    Makito <br/>
                    410 horas <br/>
                </li>

                <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur provident voluptatibus nobis, rerum earum tempora necessitatibus nesciunt, delectus nemo culpa, repudiandae corporis unde labore optio perspiciatis dignissimos distinctio laboriosam! Ipsum.
                </li>
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