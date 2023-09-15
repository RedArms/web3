import image from './téléchargé.jpg'

const Header = (props) => {
    return (
      <div>
        <img src={image} alt="logo" />
        <h1>{props.course}</h1>
      </div>
    )
      
}

export default Header