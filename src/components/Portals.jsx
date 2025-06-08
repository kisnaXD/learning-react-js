import {createPortal} from 'react-dom';

const Portals = () => {
    // Portals in react JS are used to render content outside of the main DOM tree. We need to provide the html code of what is to be
    // rendered along with the element within which they are to be rendered. An example has been shown here. This can be used to render
    // modals and/or popups as they might not necessarily be loaded in the root div
    return createPortal(
        <div>
            <h1>Thats crazy no?</h1>
        </div>
    , document.querySelector('#popup-content'))
}

export default Portals