import React from "react";
import "./priv.css";
import { Link, useNavigate } from "react-router-dom";
function p() {
  return (
    <div className="home">
      <h1>Home page</h1>
      <h2>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod
        mollis dui non pellentesque. Sed a eros in felis facilisis fringilla vel
        sit amet purus. Maecenas vel tempor quam. Etiam convallis scelerisque
        fermentum. Vestibulum volutpat libero metus, dignissim dapibus ex
        suscipit ut. Aenean semper vel eros quis fringilla. Integer odio ipsum,
        tincidunt ut tempus eleifend, suscipit id ex. Praesent tristique iaculis
        arcu, in auctor lacus tempor a. Mauris sit amet est consectetur, viverra
        ligula ac, aliquam urna. Nullam ut mi dui. Aliquam erat volutpat. Duis
        sit amet nisi nisl. In a ante et erat viverra viverra. Integer molestie
        sapien et aliquam suscipit. Praesent laoreet vitae risus a maximus.
        Proin non rutrum nibh, id feugiat sem. Quisque laoreet nibh ac bibendum
        porttitor. Duis nec tempus leo. Morbi vehicula eleifend tincidunt.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. In nec pellentesque tellus. Nunc vitae lobortis
        sapien. Phasellus posuere felis nulla, sit amet luctus lacus molestie
        sed. Aliquam venenatis at erat aliquet elementum. Pellentesque commodo
        erat in mattis molestie. Nam at ultricies dolor. Mauris vestibulum,
        felis ac vehicula iaculis, mauris magna condimentum nunc, id fermentum
        turpis urna et elit. Sed porta at magna in mattis. Nunc a purus ac ipsum
        eleifend viverra vel non erat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. In sit amet est ante. Proin ut sapien tincidunt, porta
        felis vitae, faucibus nisl. Nulla consectetur ut elit vel consectetur.
      </h2>
      <br />
      <Link to="/mainpage">
        <h1
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "black",
            padding: "15px",
            borderRadius: "20px",
          }}
        >
          BACK
        </h1>
      </Link>
    </div>
  );
}

export default p;
