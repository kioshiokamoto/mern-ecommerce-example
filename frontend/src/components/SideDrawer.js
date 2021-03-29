import './SideDrawer.css'

const SideDrawer = ({show}) => {
    const sideDrawerClass = ["sidedrawer"];
    
    return show && <div className={`sidedrawer ${show ? `show` :``}`}>
            
        </div>
    
}

export default SideDrawer
