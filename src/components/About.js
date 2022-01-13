import React from "react";
import { useSelector } from "react-redux";

const About = () => {
  const data = useSelector((state) => state.numbers);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi expedita
        reprehenderit, dicta itaque, dolorem autem vel doloribus ducimus eius,
        earum ratione atque fuga facere omnis fugit adipisci? Veritatis,
        reprehenderit quis.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        incidunt fugit molestiae maiores perferendis hic dolor nisi! Illo labore
        enim sunt delectus placeat veritatis sapiente velit debitis consequuntur
        laborum temporibus vel voluptates iste exercitationem eligendi, tempore
        optio, corrupti, quod fugit laboriosam corporis cum? Fugiat, earum, non,
        placeat modi inventore molestias reiciendis obcaecati ipsa debitis odit
        blanditiis. Maiores vero cumque, veritatis suscipit facere natus
        mollitia autem id tenetur nobis consequuntur enim incidunt dignissimos
        eum voluptatum laboriosam necessitatibus, est odio repudiandae unde.
        Nihil in iste id eum ex odio vero eos quae facilis corporis itaque,
        harum ab maxime voluptatem nobis. Sint impedit eligendi repellendus
        veniam voluptatibus quas expedita dolorem hic laborum! Autem id dolore
        esse? In voluptatum nulla, earum fugiat id labore temporibus corporis
        officia vel, consectetur enim excepturi dicta magni culpa velit
        repellendus sequi minima! Quidem rerum ducimus provident distinctio
        delectus. Voluptate nobis doloribus adipisci molestiae, eius eos
        laudantium vero expedita quam enim minus ex quod placeat sit, veniam
        pariatur soluta alias mollitia labore. Numquam, voluptatibus. Cupiditate
        soluta molestias itaque quidem tenetur, dignissimos laudantium alias
        repellat inventore at consequatur omnis consequuntur eos veniam unde nam
        nihil aut animi repellendus aperiam nisi dicta illum sint! Atque quaerat
        corporis incidunt! Voluptate, natus numquam.
      </p>
      <p>{data}</p>
    </div>
  );
};

export default About;
