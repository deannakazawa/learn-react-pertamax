import React from "react";



class ImageAlbum extends React.Component {
  render(props) {
      console.log(this.props)
    return (
      <div>
        <img src={this.props.imageSrc} alt="user" />
      </div>
    );
  }
}

export default ImageAlbum;
